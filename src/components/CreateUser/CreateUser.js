import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const CreateUser = () => {



    const [user, setUser] = useState({ id: "", name: "", position: "", salary: "" })


    const [users, setUsers] = useContext(UserContext);



    const addUser = (e) => {
        if (user.id == '' || user.name == '' || user.position == '' || user.salary == '') {
            alert("input field empty")
            return;
        }
        e.preventDefault();
        setUsers([...users, user]);
    }

    return (
        <div style={{ width: "80%", margin: "5px  auto" }}>


            <Form onSubmit={addUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control name='id' onChange={(e) => setUser({ id: e.target.value, name: user.name, position: user.position, salary: user.salary })} type="text" placeholder="Enter ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' onChange={(e) => setUser({ id: user.id, name: e.target.value, position: user.position, salary: user.salary })} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Position</Form.Label>
                    <Form.Control name='position' onChange={(e) => setUser({ id: user.id, name: user.name, position: e.target.value, salary: user.salary })} type="text" placeholder="Enter Position" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control name='salary' onChange={(e) => setUser({ id: user.id, name: user.name, position: user.position, salary: e.target.value })} type="text" placeholder="Enter Salary" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ margin: " 0 5px" }}>
                    Create
                </Button>



                <Link to='/'>
                    <Button variant="info">
                        Back to Home
                    </Button>
                </Link>


            </Form>



        </div>
    );
};

export default CreateUser;