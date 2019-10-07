import React from 'react'
import { Card, Button, ButtonIcon } from 'react-rainbow-components';
import Circle from './Circle'
import "../styles/card.css";
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'


class Thumbnail extends React.Component {

	state = {
    topics: [],
		categories: [],
		users: []



  };

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
                                                        <Circle topic={this.props.topic}/>
                                    </div>

																		<span className="author"> Created by: {this.props.topic.user.username}</span>

																								 <small className="date"><TimeAgo date= {this.props.topic.created}  /></small>

                    </div>
                </Card>
        )
    }
}
export default Thumbnail
