import React from 'react'
import { RadioGroup } from 'react-rainbow-components'

const options = [
    { value: 'pro', label: 'Pro' },
    { value: 'con', label: 'Con' },
]

class SimpleRadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return (
            <RadioGroup
                id="radio-group-component-1"
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
            />
        );
    }
}
//
// <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
//     <SimpleRadioGroup />
// </div>;

export default SimpleRadioGroup
