import React from 'react'
import { Card, Button, ButtonIcon } from 'react-rainbow-components';
import Circle from './Circle'
import "../styles/card.css";

class Thumbnail extends React.Component {


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
													src={this.props.topic.image}
													alt="landscape with rainbows and colorful birds"
											/>
                        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1 meta">
                            {this.props.topic.title}
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
