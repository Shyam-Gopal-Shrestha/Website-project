import React from "react";
import SignupForm from "../component/SignupForm";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center bg-light"
        >
          <div>
            <h1>Welcome To Cosmic</h1>
            <p>Make one step better!!</p>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}
