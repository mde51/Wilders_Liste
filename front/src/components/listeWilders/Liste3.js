import React from "react";
import { Container, Col, Row } from "reactstrap";

const Liste3 = props => {
  return (
    
    <Container>
      
      <Row className="rounded p-1 bg-secondary text-white">
        <Col>{props.wilder.name}</Col>
        <Col>{props.wilder.lastname}</Col>
        <Col>{props.wilder.email}</Col>
      </Row>
    </Container>
  );
};
export default Liste3;
