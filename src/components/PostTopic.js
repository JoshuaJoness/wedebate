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

// const options = [
//     { value: 'option 1', label: 'Religion' },
//     { value: 'option 2', label: 'Politics' },
//     { value: 'option 3', label: 'Finance' },
// ]

class PostTopic extends React.Component {

	state={
		user:{},
		options:[],
		topic:{}
	}
	//


	changeField = (e, field) => {
		let topic = this.state.topic
		topic[field] = e.target.value
		this.setState({topic})

	}
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

		axios.get('http://localhost:4000/category')
			.then(res => {
				res.data.unshift({
					 _id: null,
					 label: "Categories",
				})
				this.setState({options: res.data})
			})


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
		console.log(option._id);
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
