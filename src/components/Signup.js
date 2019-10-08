import React from 'react'
import { CheckboxGroup, Button } from 'react-rainbow-components'
import { Input } from 'react-rainbow-components'
import axios from 'axios'
import '../styles/forms.css'


const inputContainerStyles = {
    width: '50%',
}

const options = [
    {
			value: 'checkboxOne',
			label: "By checking this box you hereby grant 'We Debate' to use your image in any way that they see fit within the context of the site. You also certify that I have full legal rights to this image.",
			disabled: false
		},
		{
			value: 'checkboxTwo',
			label: 'By checking this box I certify that I am of legal age in my jurisdiction to use this site.',
			disabled: false
		}
]

class Signup extends React.Component {

	state= {
		user: {
			avatar:'',
			email:'',
			username:'',
			password:'',
		},
		values: ['false','false']
	}
	//
	// constructor(props) {
	// 		super(props);
	// 		this.state = { values: ['', ''] };
	// 		this.handleOnChange = this.handleOnChange.bind(this);
	// }




	handleOnChange = (values) => {
			this.setState({ values });
	}

	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
		console.log(this.state.user);
	}

	getFile = (e) => {
	  let file = e.target.files[0]
		let user = this.state.user
		user.avatar = file
		this.setState({
		user: user
		})
console.log(file)
	}


	submit = (e) => {
		e.preventDefault()
		let user = this.state.user
		console.log('this.state', this.state);
		let data = new FormData()

		data.append('avatar', this.state.user.avatar)
		data.append('email', this.state.user.email)
		data.append('username', this.state.user.username)
		data.append('password', this.state.user.password)

		console.log(data)



		if(user.email && user.username && user.password)
		axios.post("http://localhost:4000/signup",
		 data).then(res =>{
			localStorage.setItem('token', res.data.token)
			console.log(res.data)
			this.props.history.push("/")
		}).catch(err =>{
			console.log(err);
		})
	}



	render() {

		const styles = {
			button: {
				color: 'violet',
				borderRadius: '10px',
				height: '40px',
				background: '#DCDCDC',
				border: '0.5px solid silver',
				marginBottom: '10px'



			}
		}


		return(
			<>
					<div class="grid center-large small image">

<div>


					<form className="formSignup" onSubmit={this.submit}>
						<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
						  <Input
						   	className="formInput"
						   	label="Please enter your email:"
						   	placeholder="example@email.com"
								type="email"
								onChange={(e)=>this.changeField(e,'email')} />
							<Input
								className="formInput"
								label="Please enter a username:"
								placeholder="username"
								type="text"
								onChange={(e)=>this.changeField(e,'username')} />
							<Input
								className="formInput"
								label="Please enter a password:"
								placeholder="password"
								type="password"
								onChange={(e)=>this.changeField(e,'password')} />
							<div className="uploadLabel">Please select a profile picture:</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large" className="upload">
								<br></br>
								<input type="file"name="myFile"onChange={this.getFile} />
								<br></br>
								<br></br>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large " className="checkbox">
								<CheckboxGroup
									style={styles.checkbox}
									label=""
									required
									options={options}
									value={this.state.values}
									onChange={this.handleOnChange}
									error="Please check all boxes"
								/>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
										<Button style={styles.button}  className="primary signupButton ">Login</Button>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
								<p className="footerSignup">
									Already have an account? <a href="/Login">Login</a>
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

export default Signup
