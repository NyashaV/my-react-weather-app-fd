import React from "react";
import "./formsearch.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FormSearch() {
  return (
    <Container fluid id="formsearch">
      <Form action="search" className="mb-2 form-group searchAction">
        <Row>
          {" "}
          <Col xs={5}>
            <Form.Control
              type="text"
              placeholder="Search your city"
            ></Form.Control>
          </Col>
          <Col xs={2}>
            {" "}
            <Button variant="light" className="citySearch">
              Search
            </Button>
          </Col>
          <Col xs={4}>
            {" "}
            <Button id="current-location-button" className="searchlocation">
              Your location
            </Button>
          </Col>
        </Row>{" "}
      </Form>
    </Container>
  );
}
