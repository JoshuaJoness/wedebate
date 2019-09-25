import React from 'react'
import { Input } from 'react-rainbow-components';

const inputContainerStyles = {
    width: '50%',
};

class TextInput extends React.Component {
	render() {
		return (
			<div className="rainbow-p-around_x-large">
			    <div className="rainbow-flex rainbow-p-bottom_medium">
			        <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
			            <Input
			                label="Input Text"
			                placeholder="Placeholder text"
			                type="text" />
			        </div>
					</div>
			</div>


		)
	}
}

export default TextInput
