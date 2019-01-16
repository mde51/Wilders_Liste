import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
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
  reset() {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      passeword: ""
    });
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

  render() {
    return (
      <Container className="shadow-sm p-1 mt-5 bg-light rounded">
        <Row>
          <Col lg="6" md="6" sm="12">
            <img
              src="https://pbs.twimg.com/media/DwohpZQWkAEyHKS.jpg"
              alt="wcs"
              style={{ width: "25em" }}
              className="text-center mx-auto d-block mt-5"
            />
          </Col>
          <Col lg="6" md="6" sm="12">
            <Form onSubmit={this.handleSubmit}>
              <h2 className="text-secondary font-weight-bold ">S'inscrire</h2>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={this.updateEmail}
                  value={this.state.email}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="mon@email.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  onChange={this.updatePassWord}
                  value={this.state.passeword}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="monPassw0rd"
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">name</Label>
                <Input
                  onChange={this.updateName}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="James"
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">lastname</Label>
                <Input
                  onChange={this.updateLastName}
                  value={this.state.lastName}
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Bond"
                />
              </FormGroup>
              <Button
                className="btn bg-primary float-right"
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
