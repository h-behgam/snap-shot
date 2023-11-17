import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Lightbox({ src, alt, caption }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Image alt="test" src={src} onClick={handleShow} style={{width: "23%"}} />

      <Modal show={show} dialogClassName="modal-90w" size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name: {alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image alt="test" src={src} onClick={handleShow} className="w-100" />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="text-capitalize">{caption}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lightbox;
