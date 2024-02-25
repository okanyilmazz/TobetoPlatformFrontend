import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteCard.css'

function DeleteCard(props: any) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    setShow(false);
    props.delete();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body className="bg-light">
        <div className='deletecard-title'>
          <Modal.Header closeButton className="border-0">
            <Modal.Title className='deletecard'>{props.title}</Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body className="border-0 deletecard-body">
          Seçilen {props.body} silmek istediğinize emin misiniz?
        </Modal.Body>
        <Modal.Body className="border-0 deletecard-const">
          Bu işlem geri alınamaz.
        </Modal.Body>
        <Modal.Footer className="border-0 deletecard-footer">
          <Button className='deletecard-button' onClick={handleClose}>
            X Hayır
          </Button>
          <Button className='deletecard-button' onClick={handleDelete}>✓ Evet</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteCard;  
