import React from 'react';

import Thumbnail from "./Thumbnail";
import '../styles/card.css'
import '../styles/grid.css'
import Nav from './Nav'


class HomePage extends React.Component {

	render() {
		return(
						<>
							<Nav/>
							<nav>
								<input type="text" className="search" placeholder="Search..." />
							</nav>
							<div className="grid homepage">
								<a href='./topic'><Thumbnail /></a>
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
								<Thumbnail />
							</div>
						</>
		)
	}
}

export default HomePage
