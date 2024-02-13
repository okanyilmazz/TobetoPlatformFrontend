import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modals.css";

function Modals(props: any) {
    const handleClose = () => {
        props.onHide();
    };
    return (
        <div>
            <Modal className='modals-container' show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.examDetails}</Modal.Title>
                </Modal.Header>
                <Modal.Body> {props.body}</Modal.Body>
                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modals;
