import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from "reactstrap";
import { ToastContainer, ToastStore } from "react-toasts";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      lastname: "",
      flash: ""
    };
    this.updateLastName = this.updateLastName.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePassWord = this.updatePassWord.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }
  updateLastName(event) {
    this.setState({
      lastname: event.target.value
    });
  }
  updatePassWord(event) {
    this.setState({
      password: event.target.value
    });
  }
  updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit = event => {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    fetch("/auth/signup", {
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
      <Container className="shadow-sm mt-5 bg-light rounded p-5 border border-info ">
        <Row>
          <Col lg="6" md="6" sm="12">
            <img
              src="https://pbs.twimg.com/media/DwohpZQWkAEyHKS.jpg"
              alt="wcs"
              style={{ width: "25em" }}
              className="text-center mx-auto d-block mt-4 mb-4 border border-info"
            />
          </Col>
          <Col lg="6" md="6" sm="12" >
            <Form onSubmit={this.handleSubmit}>
              <h2 className="text-info text-center font-weight-bold mt-3 mb-2 ">
               Inscrire un Wilder
              </h2>
              <FormGroup>
                <Input
                  className="rounded p-1 bg-light border border-info text-info"
                  onChange={this.updateEmail}
                  value={this.state.email}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="mon@email.com"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="rounded p-1 bg-light border border-info text-info"
                  onChange={this.updatePassWord}
                  value={this.state.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="monPassword"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="rounded p-1 bg-light border border-info text-info"
                  onChange={this.updateName}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="James"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="rounded p-1 bg-light border border-info text-info"
                  onChange={this.updateLastName}
                  value={this.state.lastName}
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Bond"
                />
              </FormGroup>
              <Button
                className="btn bg-info mb-2 float-right"
                type="submit"
                value="submit"
              >
                Valider l'inscription
              </Button>
            </Form>
          </Col>
        </Row>
        <ToastContainer store={ToastStore} />
      </Container>
    );
  }
}
export default SignUp;
