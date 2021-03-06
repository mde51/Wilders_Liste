import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import axios from "axios";
import MapWilders from "./MapWilders";

class FormWilders extends Component {
  constructor(props) {
    super(props);
    this.state = { wilders: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/liste").then(response => {
      console.log(response.data);
      this.setState({ wilders: response.data });
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <div className="text-center">
              <h4 className="text-info font-weight-bold">LISTE DES WILDERS</h4>
              <MapWilders wilders={this.state.wilders} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormWilders;
