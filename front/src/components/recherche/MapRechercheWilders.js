import React from "react";
import { Container, Col, Row } from "reactstrap";
import ListeRechercheWilders from "./ListeRechercheWilders";

const MapRechercheWilders = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-info text-white">
        <Col>Nom</Col>
        <Col>Prénom</Col>
        <Col>email</Col>
        {props.liste
          .map((liste, index) => (
            <ListeRechercheWilders {...liste} />
          ))}
      </Row>
    </Container>
  );
};
export default MapRechercheWilders;
