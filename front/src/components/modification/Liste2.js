import React from "react";
import { Container, Col, Row } from "reactstrap";
import Liste3 from "./Liste3";

const Liste2 = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-info border border-info text-white">
        <Col>Nom</Col>
        <Col>Prénom</Col>
        <Col>email</Col>
        {props.liste
          .map((liste, index) => (
            <Liste3 {...liste} />
          ))}
      </Row>
    </Container>
  );
};
export default Liste2;