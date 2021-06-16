import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import styles from "./ModalForm.module.scss"

const ModalForm = ({ showModal, handleCloseModel, children }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModel}
      animation={false}
      className="m-auto"
    >
      <Modal.Header className={`${styles.header} mt-2 w-100 `}>
        <Modal.Title as="h2" className="mx-auto">
          CHOOPILLE
        </Modal.Title>
        <Button
          onClick={handleCloseModel}
          variant="link"
          style={{ cursor: "pointer" }}
          className={styles["close-btn"]}
        >
          &times;
        </Button>
      </Modal.Header>
      <Modal.Body className="form-modal-body">{children}</Modal.Body>
    </Modal>
  )
}

export default ModalForm
