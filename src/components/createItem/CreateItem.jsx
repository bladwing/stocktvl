import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

const CreateItemModal = ({ show, onClose }) => {
    const [itemName, setItemName] = useState('');
    const [label, setLabel] = useState('');
    const [brand, setBrand] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [partNumber, setPartNumber] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);
    const [pieces, setPieces] = useState('');
  
    const handleSave = () => {
        // Prepare data
        const data = {
            itemName,
            label,
            brand,
            serialNumber,
            partNumber,
            stock,
            image,
            pieces
        };
        console.log(data)
        // Send data to API using Axios
        axios.post('your-api-endpoint', data)
            .then(response => {
                console.log('Item created successfully:', response.data);
                onClose();
            })
            .catch(error => {
                console.error('Error creating item:', error);
            });
           
    };


    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
  
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formItemName">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="text" placeholder="Enter Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formLabel">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="text" placeholder="Enter Label" value={label} onChange={(e) => setLabel(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formOption">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control as="select" value={brand} onChange={(e) => setBrand(e.target.value)}>
                                <option value="">Select Brand</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formOption">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control as="select" value={stock} onChange={(e) => setStock(e.target.value)}>
                                <option value="">Select Stock</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formSerialNumber">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="text" placeholder="Enter Serial Number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPartNumber">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="text" placeholder="Enter Part Number" value={partNumber} onChange={(e) => setPartNumber(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formImage">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPieces">
                        <Col sm={{ span: 6, offset: 3 }} className="mb-3">
                            <Form.Control type="number" placeholder="Enter Pieces" value={pieces} onChange={(e) => setPieces(e.target.value)} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateItemModal;
