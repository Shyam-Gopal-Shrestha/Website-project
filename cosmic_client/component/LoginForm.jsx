import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";

// handle form input change
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submission
  const handleOnSubmit = async (e) => {
    // prevent default action of browser on events
    e.preventDefault();
    console.log("Login form submitted", formData);

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("server response:", data);
      if (response.ok) {
        setMessage(`success: ${data.message}`);
        navigate("/dashboard");
      } else {
        setMessage(`Error: ${data.error || "An error occured."}`);
      }
    } catch (error) {
      console.log("Error:", error);
      setMessage("An error occured while logging in.");
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3 className="text-center mb-4">Login</h3>

      <CustomInput
        label="Email Address"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: formData.email,
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          value: formData.password,
          required: true,
        }}
      />

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
