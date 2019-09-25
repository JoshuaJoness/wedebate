import React from 'react'
import { Input } from 'react-rainbow-components'
import { Select } from 'react-rainbow-components'
import { Textarea } from 'react-rainbow-components'
import '../styles/postTopic.css'

const containerStyles = {
    maxWidth: 700,
};

const options = [
    { value: 'option 1', label: 'Religion' },
    { value: 'option 2', label: 'Politics' },
    { value: 'option 3', label: 'Finance' },
];

class PostTopic extends React.Component {
	render(){
		return(
			<>
			<div className="wrap">
				<div></div>

<div>

				<form className="form">
				<span className="title">Post Topic</span>
					<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
						<Select
					    label="Please select a topic for your post:"
					    options={options}
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
						/>
						<Textarea
					    id="example-textarea-1"
					    label="Please enter your topic below:"
					    rows={6}
					    placeholder="Your topic..."
					    style={containerStyles}
					    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
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
