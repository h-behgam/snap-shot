import { memo, useState } from "react";
import { Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import styles from "./Lightbox.module.css";

interface lightboxProps {
  src: string;
  alt: string;
  caption: string;
}
function Lightbox({ src, alt, caption }: lightboxProps) {
  const [show, setShow] = useState(false);

  const handleClose: ()=>void = () => setShow(false);
  const handleShow: ()=>void = () => setShow(true);
  return (
    <>
      <Image alt={alt} src={src} onClick={handleShow} className={`px-0 ${styles.modalImage}`} />

      <Modal show={show} dialogClassName="modal-90w" size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Name: {alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image alt={alt} src={src} onClick={handleShow} className="w-100" />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <p className="text-capitalize">{caption}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(Lightbox);
