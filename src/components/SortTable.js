
import React from 'react';
import { Table, Column, StatusBadge, GlobalHeader, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
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
        const { data, sortDirection, sortedBy } = this.state;
        return (
            <div className="rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                    <ButtonGroup className="rainbow-m-right_medium">
                        <ButtonIcon
                            variant="border-filled"
                            disabled

                        />
                        <ButtonIcon
                            variant="border-filled"
                            disabled

                        />
                    </ButtonGroup>
                </GlobalHeader>

                    <Table
                        keyField="id"
                        data={data}
                        onSort={this.handleOnSort}
                        sortDirection={sortDirection}
                        sortedBy={sortedBy}
                    >
                        <Column header="Name" field="name" sortable />
                        <Column header="Status" field="status" component={StatusBadge} />
                        <Column header="Company" field="company" />
                        <Column header="Email" field="email" sortable />
                    </Table>
                </div>

        );
    }
}

export default SortTable
