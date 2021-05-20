import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import EmpList from './EmpList'
import EmpForm from "./EmpForm"
import { emp } from './empInterface';

function Employee() {
    const [empList, setEmpList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        if (empList.length === 0) {
            getempList();
        }
        return () => {

        };
    }, [empList])

    const getempList = async () => {
        const res = await axios.get("https://60a625f5c0c1fd00175f56d3.mockapi.io/v1/emp");
        if (res.status === 200) {
            setEmpList(res.data)
        }
    }

    const onFormOpen = () => {
        setShowForm(true);
    }
    const onFormClose = () => {
        setShowForm(false);
    }

    const onSubmit = async (data: emp) => {
        const res = await axios.post("https://60a625f5c0c1fd00175f56d3.mockapi.io/v1/emp", { data });
        if (res.status === 201) {
            onFormClose();
            getempList();
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col mt-2 mb-2 d-flex justify-content-end">
                    <Button onClick={onFormOpen}> New</Button>
                </div>
            </div>
            <EmpList list={empList} />
            <EmpForm
                show={showForm}
                handleClose={onFormClose}
                handleSubmit={onSubmit} />
        </div>
    )
}

export default Employee
