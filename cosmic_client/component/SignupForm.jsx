import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignupForm = () => {
  // State hook to track form data
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    address: "",
    email: "",
    password: "",
  });

  // state hook for handeling form submission error
  const [message, setMessage] = useState("");

  // handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  // handle form submission
  const handleOnSubmit = async (e) => {
    // prevent default action of browser on events
    e.preventDefault();

    console.log("formdata: ", formData);
    try {
      const response = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("server response:", data);

      if (response.ok) {
        setMessage(`success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.error || "An error occured."}`);
      }
    } catch (error) {
      console.log("Error:", error);
      setMessage("An error occured while signing up.");
    }
  };

  return (
    <Form onSubmit={handleOnSubmit} className="p-4 shadow rounded bg-white">
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="formContact" className="mb-3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="name@example.com"
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="password"
          required
        />
      </Form.Group>

      {message && (
        <div
          className={`alert ${
            message.startsWith("Success:") ? "alert-success" : "alert-danger"
          } mt-3`}
        >
          {message}
        </div>
      )}
      <Button variant="success" type="submit" className="w-100">
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
