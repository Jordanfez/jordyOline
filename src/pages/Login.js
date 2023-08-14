import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, isLoading, error }] = useLoginMutation();
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form
            style={{ width: "100%", fontFamily: "sans-serif" }}
            onSubmit={handleLogin}
          >
            <h1 style={{ marginBottom: "5%" }}>Login to your account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group>
              <Form.Label style={{ marginLeft: "-83%" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Label style={{ marginLeft: "-89%" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group class="d-grid gap-2">
              <Button
                class="btn btn-primary"
                type="submit"
                disabled={isLoading}
              >
                Login
              </Button>
            </Form.Group>

            <p className="pt-3 text-center">
              Don't have an account? <Link to="/signup">Create account</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  );
}

export default Login;
