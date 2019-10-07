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
	return (
		<body>
			<div class="grid center middle tall image">
				<div class="card small">
					<div class="content">
						<div className="content">
							<div
								class="logo"
								style={{backgroundImage: `url('/logo-airbnb.png')`}}
							></div>
									<form className="form" onSubmit={this.submit}>

								<div class="group">

										<label className="title">Login</label>

										<Input
											className="formInput"
											label="Please enter your username:"
											placeholder="username"
											type="text"
											onChange={(e)=>this.changeField(e,'email')} />

								</div>
								<div class="group">
									<label>Password</label>

									<input
										type="text"
										value={this.state.user.password}
										onChange={e => this.changeField(e, "password")}
									/>
								</div>
								<button class="primary">Login</button>
							</form>
							<p class="footer">
								Already have an account? <a href=" ">Sign up</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}
}

export default Login
