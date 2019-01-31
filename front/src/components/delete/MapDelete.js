import React from "react";
import { Container, Col, Row } from "reactstrap";
import ListeDeleteWilders from "./ListeDeleteWilders";

const MapDelete = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-info text-white">
        <Col>Nom</Col>
        <Col>Prénom</Col>
        <Col>email</Col>
        {props.liste
          .map((liste, index) => (
            <ListeDeleteWilders {...liste} />
          ))}
      </Row>
    </Container>
  );
};
export default MapDelete;
