import React from "react";
import { Container, Col, Row } from "reactstrap";

const ListeWilders= props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-light border border-info text-info">
        <Col>{props.wilder.name}</Col>
        <Col>{props.wilder.lastname}</Col>
        <Col>{props.wilder.email}</Col>
      </Row>
    </Container>
  );
};
export default ListeWilders;
