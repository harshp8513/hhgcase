import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { emp } from './empInterface';
interface Props {
    show: boolean;
    handleClose: () => void;
    handleSubmit: (data: emp) => void;
}
const EmpForm: FC<Props> = (props) => {
    const { show, handleClose, handleSubmit } = props;
    const [newEmp, setNewEmp] = useState<emp>({
        name: "",
        email: "",
        position: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewEmp({ ...newEmp, [e.target.name]: e.target.value })
    }

    const onSubmit = () => {
        handleSubmit(newEmp);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={handleChange}
                        required />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleChange}
                        required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Position" 
                        name="position" 
                        onChange={handleChange}
                        required />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EmpForm
