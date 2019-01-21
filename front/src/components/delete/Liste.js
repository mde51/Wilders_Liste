import React, { Component } from "react";
import {
  FormGroup,
  Input,
  Container,
  Col,
  Row,
  Form,
  Button
} from "reactstrap";
import axios from "axios";
import Liste2 from "./Liste2";
import { ToastContainer, ToastStore } from "react-toasts";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      lastname: "",
      flash: "",
      wilders: [],
      liste: [],
      delete: []
    };
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
  // recherche des users via l'api par mail pour le supprimer
  deleteMail(e) {
    e.preventDefault();
    axios.delete(`/delete/${this.state.email}`).then(response => {
      this.setState({ delete: response.data });
    });
  }

  // entrer le mail  dans le state via l'input
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    fetch("/auth/delete", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(() => {
        ToastStore.info(JSON.stringify(this.state.flash));
        this.reset();
      });
  };

  reset() {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      password: ""
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <h2 className="text-info text-center font-weight-bold mt-5">
                Rechercher un Wilder par son email pour le supprimer
              </h2>
              <FormGroup>
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
                className="btn bg-info float-right"
                onClick={e => this.rechercheMail(e)}
                type="submit"
                value="submit"
              >
                Valider
              </Button>
            </Form>

            {/* {this.state.morning?<Page2/>:<Page3/>} */}
            {this.state.email ? (
              <Row>
                <Col className="d-flex justify-content-center mt-5">
                  <div className="text-center ">
                    <h4 className="rounded p-1 bg-light border border-info text-info">
                      Fiche du Wilder
                    </h4>
                    <Liste2 liste={this.state.liste} />
                    <Button
                      className="btn bg-info float-right mt-2"
                      onClick={e => this.deleteMail(e)}
                      type="submit"
                      value="submit"
                    >
                      Pour supprimer le Wilder Valider !!!
                    </Button>
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
                    className="text-center mx-auto d-block mt-5 border border-inf"
                  />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
        <ToastContainer store={ToastStore} />
      </Container>
    );
  }
}

export default Liste;
