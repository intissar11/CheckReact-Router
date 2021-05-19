import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Addmovie = ({ AddFunc }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("")
  const [rate, setRate] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newmovie = {
      id: Math.random(),
      title: title,
      description:description,
      posterURL: url,
      rating: rate,
    };
    if (title && url && rate) {
      AddFunc(newmovie);
      setRate();
      setTitle("");
      setDescription("");
      setUrl("");
      handleClose();
    } else alert("Missing fields");
  };

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Add movie{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>PosterURL</Form.Label>
              <Form.Control
                type="url"
                placeholder="url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="rate"
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="info" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Addmovie;
