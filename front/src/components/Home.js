import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size:'auto', offset: 2 }} className="mt-5">
          {/* <Col className="d-flex justify-content-center mt-2 "> */}
            <img
              src="https://pbs.twimg.com/media/DwohpZQWkAEyHKS.jpg"
              alt="wcs"
              style={{ width: "50em" }}
              // className="border border-secondary rounded"
            />
          </Col>
        </Row>
        <Row />
      </Container>
    );
  }
}

export default Home;
