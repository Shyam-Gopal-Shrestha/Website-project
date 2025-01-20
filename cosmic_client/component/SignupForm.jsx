import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignupForm() {
  return (
    <Form className="p-4 shadow rounded bg-white">
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formContact" className="mb-3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Button variant="success" type="submit" className="w-100">
        Sign up
      </Button>
    </Form>
  );
}
