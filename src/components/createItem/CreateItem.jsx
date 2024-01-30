import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const CreateItemModal = ({ show, onClose }) => {
    const [itemName, setItemName] = useState('');
  
    const handleSave = () => {
      console.log('Saving item:', itemName);
      onClose();
    };
  
    return (
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formItemName">
              <Form.Label column sm="4">
                Item Name:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>

        
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
export default CreateItemModal
