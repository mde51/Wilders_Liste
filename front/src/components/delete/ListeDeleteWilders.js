import React from "react";
import { Container, Col, Row } from "reactstrap";

const ListeDeleteWilders = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-light border border-info text-info">
        <Col>{props.name}</Col>
        <Col>{props.lastname}</Col>
        <Col>{props.email}</Col>
      </Row>
    </Container>
  );
};
export default ListeDeleteWilders;
