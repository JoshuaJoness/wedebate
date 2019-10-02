import DataTable from 'react-data-table-component';
import React from 'react';
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon, FontAwesomeIcon } from 'react-rainbow-components';
import axios from 'axios'

class SortTable extends React.Component {



	state= {
		data: [
			{
					ranking: 0,
					username: '',
					score: 0,
					rank: '',
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
			axios.get('http://localhost:4000/rankings')
			  .then(res => {
			    this.setState({
			      data: res.data
			    })
			  })
			  .catch(err => {})
		}



  render() {
    return (
      <DataTable
        title="Ranking"
        columns={this.state.columns}
        data={this.state.data}
      />
    )
  }
}


export default SortTable
