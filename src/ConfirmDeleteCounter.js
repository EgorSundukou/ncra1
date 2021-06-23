import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';



function ConfirmDeleteCounter(props) {


    return (
        <div>

            <Modal isOpen={true} >
                <ModalHeader> Modal title</ModalHeader>
                <ModalBody>
                   Confirm delete
                    <input type="text" value={(e) => e.target.value}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >Do Something</Button>{' '}
                    <Button color="secondary" >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ConfirmDeleteCounter;
