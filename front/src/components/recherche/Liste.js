import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row,
  Form,
  Button
} from "reactstrap";

import axios from "axios";
import Liste2 from "./Liste2";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = { wilders: [], email: "", liste: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/liste").then(response => {
      console.log(response.data);
      this.setState({ wilders: response.data });
    });
  }

  // recherche des users via l'api par mails
  rechercheMail(e) {
    e.preventDefault();
    axios.get(`/recherche/${this.state.email}`).then(response => {
      this.setState({ liste: response.data });
    });
  }
  // entrer le mail  dans le state via l'input
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <h2 className="text-secondary font-weight-bold mt-5" >Rechercher un Wilder par son email</h2>
              <FormGroup className="text-secondary font-weight-bold ">
                <Label for="email">Email</Label>
                <Input
                  onChange={event => this.handleEmail(event)}
                  value={this.state.email}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="mon@email.com"
                />
              </FormGroup>
              {/* button avec evenement sur recherche mail */}
              <Button
                className="btn bg-primary float-right"
                onClick={e => this.rechercheMail(e)}
                type="submit"
                value="submit"
              >
                Valider
              </Button>
            </Form>

            {/* Conditionnal rendering  {this.state.morning?<Page2/>:<Page3/>} */}
            {this.state.email ? (
              <Row>
                <Col className="d-flex justify-content-center mt-5">
                  <div className="text-center ">
                    <h4 className="text-secondary font-weight-bold">
                      Fiche du Wilder
                    </h4>
                    <Liste2 liste={this.state.liste} />
                  </div>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col sm="12" md={{ size: "auto", offset: 4 }} className="mt-1">
                  <img
                    src="https://pbs.twimg.com/media/DwohpZQWkAEyHKS.jpg"
                    alt="wcs"
                    style={{ width: "25em" }}
                    className="text-center mx-auto d-block mt-5"
                  />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Liste;
