
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom"

const Edit = () => {

    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    const editUser = users.filter(user => user.id == id);



    const [name, setName] = useState(editUser[0].name);
    const [position, setPosition] = useState(editUser[0].position);
    const [salary, setSalary] = useState(editUser[0].salary);

    const nameUpdate = ((e)=>{

        setName(e.target.value)
        const newName = name
        editUser[0].name = newName

    });

    const positionUpdate = (e) => {
        setPosition(e.target.value);
        const newPosition = position;
        editUser[0].position = newPosition;
    }

    const salaryUpdate = (e) => {
        setSalary(e.target.value);
        const newsalary = salary;
        editUser[0].salary = newsalary;


    }

    const editUsers = (e) => {
        e.preventDefault();
        setUsers([...users]);

        console.log(name, 'name==============')

    }



    return (
        <div style={{ width: "80%", margin: "5px  auto" }}>

            <Form >

                <h1 style={{ color: "green" }}>ID : {editUser.id} </h1>

                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" onChange={nameUpdate} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Position</Form.Label>
                    <Form.Control name='position' type="text" onChange={positionUpdate} value={position} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Salary</Form.Label>
                    <Form.Control name='salary' type="text" onChange={salaryUpdate} value={salary} />
                </Form.Group>
                <Link to='/'>
                    <Button variant="primary" onSubmit={() => editUsers} type="submit" style={{ margin: " 0 5px" }}>
                        Edit
                    </Button>

                    <Button variant="info">
                        Back to Home
                    </Button>
                </Link>


            </Form>


        </div>
    );
};

export default Edit;