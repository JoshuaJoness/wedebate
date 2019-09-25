import React from 'react'
import { Input } from 'react-rainbow-components'

import '../styles/forms.css'


const inputContainerStyles = {
    width: '50%',
}

class Login extends React.Component {
	render() {
		return(
			<>
				<div className="wrap">
				<div></div>
				<div>
					<form className="form">
					<span className="title">Login</span>
						<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
							<Input
								className="formInput"
								label="Please enter your username:"
								placeholder="username"
								type="text" />
							<Input
								className="formInput"
								label="Please enter your password:"
								placeholder="password"
								type="password" />
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
