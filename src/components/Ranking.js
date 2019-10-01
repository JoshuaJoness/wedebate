import React from 'react';
import SortTable from './SortTable'
import Nav from './Nav'
import axios from 'axios'



class Ranking extends React.Component {



	state = {
		rankings: [{
        avatar: "",
        email: "",
        username: "",
				score: 0,
        topics: 0,
        opinions: 0,
        comments: 0
    },]
	}

		componentWillMount() {
			axios.get('http://localhost:4000/rankings')
			  .then(res => {
			    this.setState({
			      rankings: res.data
			    })
			  })
			  .catch(err => {})
		}

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
