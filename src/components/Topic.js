import React from 'react'
import '../styles/topic.css'
import Comment from './Comment'
import Nav from './Nav'

class Topic extends React.Component {

	state = {
		pros:
		[
			{item1: 'yo'},
			{item2:'hola'}
		],
		cons:
		[
			{
				con1:'grrrr'
			}
		]
	}

	render() {
		return(
			<>
				<Nav/>
				<h1>Title</h1>
				<div>Image</div>

				<div>Description</div>

				<div>

				<div className="column" className="left">


					{this.state.pros.map(p => <Comment />)}

				</div>




					<div className="column" className="right">

										{this.state.cons.map(p => <Comment />)}


					</div>
				</div>
			</>
		)
	}
}

export default Topic
