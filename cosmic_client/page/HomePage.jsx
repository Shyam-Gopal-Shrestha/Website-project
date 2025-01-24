import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthPage from "../component/AuthPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <h1>Go Green Forever</h1>
            <p>Make one step better!!</p>
            <FontAwesomeIcon icon="fa-solid fa-trees" />
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <AuthPage />
        </Col>
      </Row>
    </Container>
  );
}
