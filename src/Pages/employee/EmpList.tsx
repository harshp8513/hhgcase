import React, { FC } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { emp } from './empInterface';

interface Props {
    list: emp[];
}

const EmpList: FC<Props> = (props) => {
    const { list } = props;
    const options = {
        sizePerPage: 5,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: list.length
        }
        ]
    }
    return (
        <>
            {list && <BootstrapTable keyField='id' data={list} columns={columns} pagination={paginationFactory(options)} />}
        </>
    )
}

export default EmpList

const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true
}, {
    dataField: 'email',
    text: 'Email',
    sort: true
}, {
    dataField: 'position',
    text: 'Position',
    sort: true
}];
