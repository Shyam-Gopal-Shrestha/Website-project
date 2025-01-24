import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Form>
      <h3 className="text-center mb-4">Login</h3>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name="email" required />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
      <div className="mt-3 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign up here
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
