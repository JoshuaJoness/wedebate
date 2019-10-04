import React from 'react'
import { Input } from 'react-rainbow-components'
import { Select } from 'react-rainbow-components'
import { Textarea } from 'react-rainbow-components'
import Nav from './Nav'
import axios from 'axios'
import '../styles/postTopic.css'


const containerStyles = {
    maxWidth: 700,
};



class PostTopic extends React.Component {

	state={
		user:{},
		options: [
			{
					_id: null,
					label: "Categories"

			},
			{
					_id: "5d91ba8e2df68487147b2358",
					label: "Politics"

			},
			{
					_id: "5d91baae2df68487147b2359",
					label: "Religion",

			},
			{
					_id: "5d91bab62df68487147b235a",
					label: "Economics",

			},
			{
					_id: "5d91babf2df68487147b235b",
					label: "Arts",

			},
			{
					_id: "5d91bac52df68487147b235c",
					label: "Technology",

			},
			{
					_id: "5d91bad02df68487147b235d",
					label: "Animals",

			},
			{
					_id: "5d91baf72df68487147b235e",
					label: "Health",

			},
			{
					_id: "5d91bafe2df68487147b235f",
					label: "Lifestyle",

			},
			{
					_id: "5d91bb102df68487147b2360",
					label: "Nature",

			},
			{
					_id: "5d91bb182df68487147b2361",
					label: "Philosophy",

			},
			{
					_id: "5d96b7ff97eae89e7c9d7c70",
					__v: 0
			},
			{
					"_id": "5d96b80a97eae89e7c9d7c71",

			}
		],
		topic:{

		}
	}
	//



	//

	componentWillMount () {
		let topic = this.state.topic
		let token = localStorage.getItem('token')
		axios.get('http://localhost:4000/profile', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			topic.user = res.data._id
			this.setState({topic})
			let user = this.state.user
			user = res.data
			this.setState({user})
		}).catch(err => {
			console.log(err);
		})

		// axios.get('http://localhost:4000/category')
		// 	.then(res => {
		// 		let options = this.state.options
		// 		options.value = res.data._id
		// 		options.push( {
    //     _id: "5d91bab62df68487147b235t",
    //     label: "Categories",
		//
    // })
		//
		// 		this.setState({options: res.data})
		// 	})

		axios.get('http://localhost:4000/ranking', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let points = this.state.points
			points = res.data.total
			this.setState({points})
		}).catch(err =>{
			console.log(err)
		})
	}

	changeField = (e, field) => {
		console.log('e', e.target.value);
		let topic = this.state.topic
		topic[field] = e.target.value
		this.setState({topic})
		console.log(this.state.topic, this.state.options);
	}

	changeSelect = (e) => {

		let option = this.state.options.find(option => option.label == e.target.value)

	

		let topic = this.state.topic
		topic.category = option._id
		this.setState({topic})
	}

	getFile = (e) => {
		let file = e.target.files[0]
		let topic = this.state.topic
		topic.image = file
		this.setState({
		topic: topic
		})
console.log(file)
	}


	submitTopic = (e) => {
		e.preventDefault()
		let topic = this.state.topic

	console.log('this.state', this.state);

		let data = new FormData()

		data.append('image', this.state.topic.image)
		data.append('title', this.state.topic.title)
		data.append('description', this.state.topic.description)
		data.append('user', this.state.topic.user)
		data.append('category', this.state.topic.category)

		if(topic.title && topic.description && topic.user && topic.category) {
			axios.post('http://localhost:4000/topic',
			data).then(res => {
				console.log(res.data)
				this.props.history.push("/")
			}).catch(err =>{
				console.log(err);
			})
		} else {
			console.log('missing data');
		}
	}


	render(){
		return(
			<>
			<Nav user={this.state.user} points={this.state.points}/>
			<div className="wrap">
				<div></div>

<div>

				<form className="form" onSubmit={this.submitTopic}>
				<span className="title">Post Topic</span>
					<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
						<Select
					    label="Please select a category for your post:"
					    options={this.state.options}
					    style={containerStyles}
					    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
							onChange={this.changeSelect}
						/>

						<Textarea
							id="example-textarea-1"
							label="Please enter a title for your topic:"
							rows={1}
							placeholder="Title"
							style={containerStyles}
							className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
							onChange={(e)=>this.changeField(e,'title')}
						/>
						<Textarea
					    id="example-textarea-1"
					    label="Please enter your topic below:"
					    rows={6}
					    placeholder="Your topic..."
					    style={containerStyles}
					    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
							onChange={(e)=>this.changeField(e,'description')}
						/>
						<div className="uploadLabel">Please select an image for your topic:</div>
							<input type="file"name="myFile"onChange={this.getFile} />
						<button className="submitTopic">Submit</button>
					</div>
				</form>

</div>

			</div>
			</>
		)
	}
}

export default PostTopic
