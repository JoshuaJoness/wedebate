import React from 'react'
import { Input } from 'react-rainbow-components'
import { Select } from 'react-rainbow-components'
import { Textarea } from 'react-rainbow-components'
import Nav from './Nav'
import '../styles/settings.css'
import axios from 'axios'

const containerStyles = {
    maxWidth: 700,
}

class Settings extends React.Component{
	state = {
		user:{}
	}

	componentWillMount() {
		let token = localStorage.getItem('token')
			axios.get(`${process.env.REACT_APP_API}/profile`, {
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
			axios.get(`${process.env.REACT_APP_API}/ranking`, {
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

	render(){
		return(
			<>
			<Nav user={this.state.user} points={this.state.points}/>
			<span className="title">Settings</span>

			<div className="settingsWrap">

				<div className="settingsItem">
					<Input
						className="settingsInput"
						label="To change your email enter it below and click 'submit'"
						placeholder="email@example.com"
						type="email" />
				</div>

				<div>
					<button>Submit</button>
				</div>

				<div>
					<Input
						className="settingsInput"
						label="To change your password enter it below and click 'submit'"
						placeholder="password"
						type="password" />
				</div>

				<div>
					<button>Submit</button>
				</div>

				<div className="changeAvatarLabel">To change your avatar please select a new image below</div>

				<div>
					<input className="changeAvatar" type="file"/>
				</div>

				<div>
					<button className="deleteAccount">To delete your account click here</button>
				</div>

			</div>

			</>
		)
	}
}

export default Settings
