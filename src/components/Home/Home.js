import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { UserContext } from '../UserContext/UserContext';

const Home = () => {
    const [users, setUsers] = useContext(UserContext);

    return (
        <div style={{ width: "80%", margin: "5px  auto" }}>

            <Link to='/create'>
                <Button variant="primary">Create User</Button>
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user) =>

                            <tr>
                                <td>{user.id} </td>
                                <td>{user.name} </td>
                                <td>{user.position}</td>
                                <td>{user.salary} </td>
                                <td>
                                    <Link to={'/delete/'+user.id}>
                                        <Button style={{ margin: "0 5px" }} variant="danger">Delete</Button>
                                    </Link>
                                    <Link to={'/edit/'+user.id}>
                                        <Button variant="info">Edit</Button>
                                    </Link>
                                </td>
                            </tr>

                        )
                    }



                </tbody>
            </Table>



        </div>
    );
};

export default Home;