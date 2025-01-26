import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CustomInput from "./CustomInput";

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
      <CustomInput
        label="Name"
        inputAttributes={{
          type: "text",
          name: "name",
          value: formData.name,
          required: true,
        }}
        handleOnChange={handleOnChange}
      />

      <CustomInput
        label="Contact Number"
        inputAttributes={{
          type: "number",
          name: "contactNumber",
          value: formData.contactNumber,
          required: true,
        }}
        handleOnChange={handleOnChange}
      />

      <CustomInput
        label="Address"
        inputAttributes={{
          type: "text",
          name: "address",
          value: formData.address,
          required: true,
        }}
        handleOnChange={handleOnChange}
      />

      <CustomInput
        label="Email Address"
        inputAttributes={{
          type: "email",
          name: "email",
          value: formData.email,
          required: true,
        }}
        handleOnChange={handleOnChange}
      />

      <CustomInput
        label="Password"
        inputAttributes={{
          type: "password",
          name: "password",
          value: formData.password,
          required: true,
        }}
        handleOnChange={handleOnChange}
      />

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
