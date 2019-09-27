import React from 'react'
import { Input } from 'react-rainbow-components'
import { Select } from 'react-rainbow-components'
import { Textarea } from 'react-rainbow-components'
import axios from "axios";
import Nav from './Nav'
import '../styles/postTopic.css'


const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Religion' },
    { value: 'option 2', label: 'Politics' },
    { value: 'option 3', label: 'Finance' },
]

class PostTopic extends React.Component {

	state= {
		topics:{},
		category: []
	}

	componentWillMount() {

		axios.get('http://localhost:4000/category/')
			.then(res => {
				this.setState({

					category: res.data,
				})
			})
			.catch(err => console.log(err))
		}

	changeField = (e, field) => {
		let topic = this.state.topics
		topic[field] = e.target.value
		this.setState({topic})
		console.log(this.state.topic);
	}

	submit = (e) => {
		e.preventDefault()
		let topic = this.state.topics
		if (topic.title && topic.description) {
			axios.post("http://localhost:4000/topic",
			topic).then(res => {
				res.send(topic)
			}).catch(err =>{
				console.log(err);
			})
		} else {
			alert("Topic required");
		}
	}



	render(){
		return(
			<>
			<Nav/>
			<div className="wrap">
				<div></div>

<div>

				<form onSubmit={this.submit} className="form">
				<span className="title">Post Topic</span>
					<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">


						<Select
									label="Please select a topic for your post:"
									options={this.state.category.map((category,index) => {return category.name})}
									id="example-select-1"
									style={containerStyles}
									className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
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
						<input className="topicPhoto" type="file"/>
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
