import React from "react";
import { Container, Col, Row } from "reactstrap";
import Liste3 from "./Liste3";

const Liste2 = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-info text-white">
        <Col>Nom</Col>
        <Col>Prénom</Col>
        <Col>email</Col>
        {props.wilders.map(wilder => (
          <Liste3 wilder={wilder} key={wilder} />
        ))}
      </Row>
    </Container>
  );
};
export default Liste2;
