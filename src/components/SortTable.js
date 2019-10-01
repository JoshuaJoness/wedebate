import React from 'react';
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon, FontAwesomeIcon } from 'react-rainbow-components';
import axios from 'axios'


class SortTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				sortedBy: 'score',
				sortDirection: 'asc',
				data: [
						{
							ranking: 1,
								username: 'Leandro Torres',
								score: 0,
								rank: 'sophist',
								topics: 0,
								opinions: 0,
								comments: 0

						},

				],
		};
		this.handleOnSort = this.handleOnSort.bind(this);
}





		componentWillMount() {
			axios.get('http://localhost:4000/rankings')
			  .then(res => {
			    this.setState({
			      data: res.data
			    })
			  })
			  .catch(err => {})
		}


handleOnSort(event, field, nextSortDirection) {
		const { data, sortedBy, sortDirection } = this.state;

		let newData = [...data];

		const key = x => x[field];
		const reverse = nextSortDirection === 'asc' ? 1 : -1;

		const sortedData = newData.sort((a, b) => {
				a = key(a);
				b = key(b);
				return reverse * ((a > b) - (b > a));
		});

		this.setState({ data: sortedData, sortedBy: field, sortDirection: nextSortDirection });
}

	render() {

		return(


			<div className="rainbow-p-bottom_xx-large">
				<div style={this.tableContainerStyles}>
	                    <Table
	                        keyField="id"
	                        data={this.state.data}
	                        onSort={this.handleOnSort}
	                        sortDirection={this.sortDirection}
	                        sortedBy={this.sortedBy}
	                    >

												<Column header="ranking" field="ranking" sortable />
												<Column header="username" field="username" sortable />
                        <Column header="rank" field="rank" component={StatusBadge} />
												<Column header="score" field="score" sortable />
                        <Column header="topics" field="topics" />
                        <Column header="opinions" field="opinions" sortable />
												 <Column header="comments" field="comments" sortable />
		     							</Table>
				 						</div>
									</div>

		)
	}
}
export default SortTable
