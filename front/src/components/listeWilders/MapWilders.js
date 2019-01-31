import React from "react";
import { Container, Col, Row } from "reactstrap";
import ListingWilders from "./ListingWilders";

const MapWilders = props => {
  return (
    <Container>
      <Row className="rounded p-1 bg-info text-white">
        <Col>Nom</Col>
        <Col>Prénom</Col>
        <Col>email</Col>
        {props.wilders.map((wilder, index) => (
          <ListingWilders wilder={wilder} key={index} />
        ))}
      </Row>
    </Container>
  );
};
export default MapWilders;
