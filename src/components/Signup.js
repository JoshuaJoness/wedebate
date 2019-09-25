import React from 'react'
import { CheckboxGroup } from 'react-rainbow-components'
import { Input } from 'react-rainbow-components'

import '../styles/forms.css'


const inputContainerStyles = {
    width: '50%',
}

const options = [
    {
			value: 'checkboxOne',
			label: 'By checking this box I grant DEBATORS to use my image in any way that they \r see fit. I also certify that I have full legal rights to this image.',
			disabled: false
		},
		{
			value: 'checkboxTwo',
			label: 'By checking this box I certify that I am of legal age in my jurisdiction to use this site.',
			disabled: false
		}
]

class Signup extends React.Component {

	constructor(props) {
			super(props);
			this.state = { values: ['checkboxOne', 'checkboxTwo'] };
			this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(values) {
			this.setState({ values });
	}



	render() {
		return(
			<>
				<div className="wrap">
				<div></div>

<div>


					<form className="form">
						<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
						  <Input
						   	className="formInput"
						   	label="Please enter your email:"
						   	placeholder="example@email.com"
								type="email" />
							<Input
								className="formInput"
								label="Please enter a username:"
								placeholder="username"
								type="text" />
							<Input
								className="formInput"
								label="Please enter a password:"
								placeholder="password"
								type="password" />
							<div className="uploadLabel">Please select a profile picture:</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large" className="upload">
								<br></br>
								<input type="file"/>
								<br></br>
								<br></br>
							Nav.js</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large" className="checkbox">
								<CheckboxGroup className="formCheckbox"
									label=""
									required
									options={options}
									value={this.state.values}
									onChange={this.handleOnChange}
								/>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
								<button className="primary">Signup</button>
							</div>
							<div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
								<p className="footer">
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
