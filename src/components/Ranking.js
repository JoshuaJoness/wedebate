import React from 'react';
import SortTable from './SortTable'
import Nav from './Nav'
import axios from 'axios'

class Ranking extends React.Component {

	componentWillMount(){
		let token = localStorage.getItem('token')

		axios.get('http://localhost:4000/profile', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			let user = this.state.user
			user = res.data
			this.setState({user})
		}).catch(err => {
			console.log(err);
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

	state = {
		user:{}
	}

	render() {

		return(
						<>
							<Nav user={this.state.user} points={this.state.points}/>
							<h1 style={{textAlign: 'center'}}>Ranking</h1>
							<SortTable/>
						</>
		)
	}
}
export default Ranking
