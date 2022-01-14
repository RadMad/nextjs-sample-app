import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ExpenseDeleteModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Deletion confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this expense?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.deleteHandler}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExpenseDeleteModal;
