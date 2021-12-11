import { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import * as IoIcons from "react-icons/io5";

function ModalExample(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn text-dark rounded py-2 w-100 d-inline-block px-3" onClick={handleShow}> <IoIcons.IoAddCircleSharp className="me-2 mt-auto" />{props.nombre}</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;