import React from 'react';

    import { Button } from 'react-rainbow-components';

    class Button extends React.Component {

			render() {


				return (
						<Button
								label="Hello World!"
								variant="brand"
								onClick={() => alert('Hello World!')}
						/>
				);
			}

			}



export default Button
