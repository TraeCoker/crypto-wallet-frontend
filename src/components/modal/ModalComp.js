import './Modal.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const ModalComp = ({ handleClose, show, children }) => {

  return (
    <Modal show={show} onHide={handleClose} style={{color : "black", textAlign : "center"}}>
        <Modal.Header closeButton>
          <Modal.Title>Update Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};