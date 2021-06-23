import './App.css';
import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function Counter(props) {


        const [modal, setModal] = useState(false);
        const [confirmation, setConfirmation] = useState(false);
        const toggle = () => setModal(!modal);
        const verifyConfirmation = (e) => {
            setConfirmation(e.target.value==props.counter.name) ;
    }


    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        {props.counter.name}
                    </div>

                    <div className="col">
                        <button onClick={() => props.countDecrease(props.counter.id)} class="btn btn-danger">-</button>
                        {props.counter.count}
                        <button onClick={() => props.countIncrease(props.counter.id)} class="btn btn-success">+</button>
                        <button onClick={() => props.countReset(props.counter.id)} class="btn btn-outline-danger">Reset
                        </button>
                    </div>
                    <div className="col">
                            <div>
                                <Button color="danger" onClick={toggle} >Delete</Button>
                                <Modal isOpen={modal} toggle={toggle} >
                                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                      Confirm entering name <strong>{props.counter.name}</strong> to delete.
                                        <input onChange={verifyConfirmation}
                                                type="text"/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => props.countRemove(props.counter.id)} disabled={!confirmation}>Confirm</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Counter;
