import React from 'react';
import SortTable from './SortTable'
import Nav from './Nav'


class Ranking extends React.Component {

	render() {

		return(
						<>
							<Nav/>
							<h1 style={{textAlign: 'center'}}>Ranking</h1>
							<SortTable/>
						</>
		)
	}
}
export default Ranking
