import React from "react"
import Modal from "react-bootstrap/Modal"

const ModalForm = ({ isModalOpen, handleCloseModel, children }) => {
  return (
    <Modal
      size="lg"
      show={isModalOpen}
      onHide={handleCloseModel}
      className=" text-center d-flex flex-column justify-content-center"
    >
      <Modal.Header className=" mt-2">
        <Modal.Title className="mx-auto">Student Details</Modal.Title>
        <a
          onClick={handleCloseModel}
          className="btn btn-outline-danger ml-auto font-weight-bold"
        >
          &times;
        </a>
      </Modal.Header>
      <Modal.Body className="form-modal-body">{children}</Modal.Body>
    </Modal>
  )
}

export default ModalForm
