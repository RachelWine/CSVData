import React, { useState } from 'react';
import { FileForm } from "./FileForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function UploadScreen() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="upload-page">
      <Button variant="primary" onClick={handleShow}>Add File</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FileForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
