import React from 'react'
import { Card, Button, ButtonIcon } from 'react-rainbow-components';
import Circle from './Circle'
import "../styles/card.css";

class Thumbnail extends React.Component {
	state= {
		topic: {
			title: ''
		}
	}

	componentWillMount() {
		this.setState({
			topic: this.props.topic
		})
	}
    render() {
        return(
                <Card className="card link"
                         // actions={<Button variant="neutral" label="Add" />}
                    footer={
                        <div className="rainbow-align-content_space-between">
                            <div className="rainbow-flex">
                                <ButtonIcon
                                    icon={<i class="far fa-flag"></i>}
                                    className="rainbow-m-right_xx-small"
                                />
                                <ButtonIcon icon={<i class="fas fa-share-alt"></i>} />
                            </div>
                            <ButtonIcon icon={<i class="fas fa-sort-down"></i>} />
                        </div>
                    }
                >
                    <div className="image">
										<img
													src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555924300/shape/mentalfloss/185187503.jpg"
													alt="landscape with rainbows and colorful birds"
											/>
                        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1 meta">
                            {this.props.topic}
                        </h1>
                                    <div className='yesno'>
                                                        <Circle/>
                                    </div>
                    </div>
                </Card>
        )
    }
}
export default Thumbnail
