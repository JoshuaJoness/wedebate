import React from 'react'
import { Input } from 'react-rainbow-components'
import axios from 'axios'
import '../styles/forms.css'


const inputContainerStyles = {
    width: '50%',
}

class Login extends React.Component {

	state= {
		user:{}
	}

	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
		console.log(this.state.user);
	}

	submit = (e) => {
		e.preventDefault()
		let user = this.state.user
		if (user.email && user.password) {
			axios.post("http://localhost:4000/login",
			user).then(res => {
				localStorage.setItem('token', res.data.token)
				this.props.history.push("/")
			}).catch(err =>{
				console.log(err);
			})
		} else {
			console.log("Email or password not found! Please try again!");
		}
	}



	render() {
		return(
			<>
				<div className="wrap">
				<div></div>
				<div>
					<form className="form" onSubmit={this.submit}>
					<span className="title">Login</span>
						<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
							<Input
								className="formInput"
								label="Please enter your username:"
								placeholder="username"
								type="text"
								onChange={(e)=>this.changeField(e,'email')} />
							<Input
								className="formInput"
								label="Please enter your password:"
								placeholder="password"
								type="password"
								onChange={(e)=>this.changeField(e,'password')} />
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
								<button className="primary">Login</button>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
								<p className="footer">
									Don't have an account? <a href="/signup">Sign Up!</a>
								</p>
							</div>
						</div>
					</form>
					</div>
				</div>
			</>
		)
	}
}

export default Login
