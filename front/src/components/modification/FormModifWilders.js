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
import { ToastContainer, ToastStore } from "react-toasts";

class FormModifWilders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      lastname: "",
      flash: "",
      search: "",
      wilders: [],
      liste: [],
      modification: []
    };
    this.updateLastName = this.updateLastName.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePassWord = this.updatePassWord.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  // affiche les données de l'API vers le state
  componentDidMount() {
    axios.get("http://localhost:5000/liste").then(response => {
      this.setState({ wilders: response.data });
    });
  }

  // recherche des users via l'api par mails
  rechercheMail(e) {
    e.preventDefault();
    axios.get(`/recherche/${this.state.search}`).then(response => {
      this.setState({
        liste: response.data,
        email: response.data[0].email,
        password: response.data[0].password,
        name: response.data[0].name,
        lastname: response.data[0].lastname
      });
    });
  }

  // entrer le mail  dans le state via l'input
  handleEmail(event) {
    this.setState({
      search: event.target.value
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

  // recherche des users via l'api par mail pour le modifier
  modificationMail(e) {
    e.preventDefault();
    axios.post(`/modification/${this.state.search}`, {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      lastname: this.state.lastname
    });

    fetch("/auth/modification", {
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
  }

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
              <h2 className="text-info text-center font-weight-bold mt-4">
                Rechercher un Wilder par son email pour le modifier
              </h2>
              <FormGroup>
                <Input
                  onChange={e => this.handleEmail(e)}
                  value={this.state.search}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                {/* button avec evenement sur recherche mail */}
                <Button
                  className="btn bg-info float-right"
                  onClick={e => this.rechercheMail(e)}
                  type="submit"
                  value="submit"
                >
                  Valider
                </Button>
              </FormGroup>
            </Form>

            {/* conditionel rendering */}
            {this.state.email ? (
              <Container className="shadow-sm mt-5 bg-light rounded p-5 border border-info ">
                <h2 className="rounded p-1 bg-info border border-info text-white">
                  modifier un Wilder
                </h2>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input
                        className="rounded p-1 bg-light border border-info text-info mt-2"
                        onChange={e => this.updateEmail(e)}
                        value={this.state.email}
                        type="email"
                        name="email"
                        id="exemplemail"
                        placeholder="mon@email.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="rounded p-1 bg-light border border-info text-info"
                        onChange={e => this.updatePassWord(e)}
                        value={this.state.password}
                        type="password"
                        name="password"
                        id="exemplepassword"
                        placeholder="passeword"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="rounded p-1 bg-light border border-info text-info"
                        onChange={e => this.updateName(e)}
                        value={this.state.name}
                        type="text"
                        name="name"
                        id="exemplename"
                        placeholder="James"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="rounded p-1 bg-light border border-info text-info"
                        onChange={e => this.updateLastName(e)}
                        value={this.state.lastname}
                        type="text"
                        name="lastname"
                        id="exemplelastname"
                        placeholder="Bond"
                      />
                    </FormGroup>
                    <Button
                      className="btn bg-info float-right"
                      onClick={e => this.modificationMail(e)}
                    >
                      Valider la modification
                    </Button>
                  </Col>
                </Row>
                <ToastContainer store={ToastStore} />
              </Container>
            ) : (
              <Row>
                <Col sm="12" md={{ size: "auto", offset: 4 }} className="mt-2">
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

export default FormModifWilders;
