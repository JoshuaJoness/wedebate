import React from 'react';
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon, FontAwesomeIcon } from 'react-rainbow-components';


class SortTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				sortedBy: undefined,
				sortDirection: 'asc',
				data: [
						{
							ranking: 1,
								name: 'Leandro Torres',
								score: 1748,
								rank: 'sophist',
								topicsPosted: 7,
								opinions: 4,
								upvotes: 36

						},

						{
							ranking: 2,
								name: 'John Smith',
								score: 1672,
								rank: 'sophist',
								topicsPosted: 4,
								opinions: 7,
								upvotes: 10

						},
						{
							ranking: 3,
								name: 'Richard Gere',
								score: 1272,
								rank: 'senior',
								topicsPosted: 2,
								opinions: 7,
								upvotes: 4

						},
						{
							ranking: 4,
								name: 'Bill Gates',
								score: 456,
								rank: 'freshman',
								topicsPosted: 2,
								opinions: 1,
								upvotes: 23

						},

				],
		};
		this.handleOnSort = this.handleOnSort.bind(this);
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
												<Column header="name" field="name" sortable />
                        <Column header="rank" field="rank" component={StatusBadge} />
												<Column header="score" field="score" sortable />
                        <Column header="topics" field="topicsPosted" />
                        <Column header="opinions" field="opinions" sortable />
												 <Column header="upvotes" field="upvotes" sortable />
		     							</Table>
				 						</div>
									</div>

		)
	}
}
export default SortTable
