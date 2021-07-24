import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Delete = () => {
    const [users, setUsers] = useContext(UserContext);

    const { id } = useParams();

    const deleteUser = (id) => {
        const newUsers = users.filter(user => user.id != id);
        setUsers(newUsers);
    }

    const duser = users.find(user => user.id === id);



    return (
        <div>

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure delete this item?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>ID : {duser.id}</p>
                    <p>Name : {duser.name}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to="/" >
                        <Button variant="secondary">Candel</Button>
                    </Link>
                    <Link to="/" >
                        <Button variant="danger" onClick={() => deleteUser(id)}>Delete</Button>  {/* not understand */}
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>



        </div>
    );
};

export default Delete;