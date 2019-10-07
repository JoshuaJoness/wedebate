import DataTable from 'react-data-table-component';
import React from 'react';
import Nav from './Nav'
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon, FontAwesomeIcon } from 'react-rainbow-components';
import axios from 'axios'

class SortTable extends React.Component {

	state= {
		user: {
			avatar: '',
				username: ""
		},
		data: [
			{
				ranking: 0,
					username: 'Leandro Torres',
					score: 0,
					rank: 'sophist',
					topics: 0,
					opinions: 0,
					comments: 0

			},

		],
		columns: [  {
		    name: 'Ranking',
		    selector: 'ranking',
		    sortable: true,
		  },
		  {
		    name: 'Username',
		    selector: 'username',
		    sortable: true,
		    right: true,
		  },
			{
				name: 'Score',
				selector: 'score',
				sortable: true,
				right: true,
			},
			{
				name: 'Rank',
				selector: 'rank',
				sortable: true,
				right: true,
			},
			{
				name: 'Topics',
				selector: 'topics',
				sortable: true,
				right: true,
			},
			{
				name: 'Opinions',
				selector: 'opinions',
				sortable: true,
				right: true,
			},
			{
				name: 'Comments',
				selector: 'comments',
				sortable: true,
				right: true,
			},
		]}

		componentWillMount() {

			let token = localStorage.getItem('token')

			axios.get('http://localhost:4000/profile', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				let user = this.state.user
				user = res.data
				this.setState({user})
			}).catch(err => {
				console.log(err);
			})


			// axios.get('http://localhost:4000/ranking', {
			// 	headers: {
			// 		Authorization: `Bearer ${token}`
			// 	}
			// }).then(res => {
			// 	let points = this.state.points
			// 	points = res.data.total
			// 	this.setState({points})
			// }).catch(err =>{
			//
			// })

			axios.get('http://localhost:4000/rankings', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			  .then(res => {
			    this.setState({
			      data: res.data
			    })
			  })
			  .catch(err => {console.log(err)})
		}



  render() {
    return (
			<>
			<Nav user={this.state.user} points={this.state.points}/>
      <DataTable
        title="Ranking"
        columns={this.state.columns}
        data={this.state.data}
      />
			</>
    )
  }
}


export default SortTable
