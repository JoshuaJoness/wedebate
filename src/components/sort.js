import React from 'react';
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon, FontAwesomeIcon } from 'react-rainbow-components';
import axios from 'axios'


class SortTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				sortedBy: undefined,
				sortDirection: 'asc',
				data: [
					{
			name: 'Leandro Torres',
			company: 'Nexxtway',
			email: 'leandro@gmail.com',
			status: 'verified',
			id: '1234qwerty',
	},
	{
			name: 'Reinier',
			company: 'Nexxtway',
			email: 'reinier@gmail.com',
			status: 'verified',
			id: '1234asdfgh',
	},
	{
			name: 'Jose Torres',
			company: 'Google',
			email: 'jose@gmail.com',
			status: 'verified',
			id: '1234zxcvbn',
	},
	{
			name: 'Sara',
			company: 'Nexxtway',
			email: 'sara@gmail.com',
			status: 'verified',
			id: '5678qwerty',
	},
	{
			name: 'Tahimi',
			company: 'Nexxtway',
			email: 'tahimi@gmail.com',
			status: 'verified',
			id: '5678asdfgh',
	},
	{
			name: 'Alejandro',
			company: 'Google',
			email: 'alejandro@gmail.com',
			status: 'verified',
			id: '5678zxcvbn',
	},
	{
			name: 'Carlos',
			company: 'Oracle',
			email: 'carlos@gmail.com',
			status: 'verified',
			id: '9012qwerty',
	},
	{
			name: 'Luis',
			company: 'Google',
			email: 'luis@gmail.com',
			status: 'verified',
			id: '9012asdfgh',
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
