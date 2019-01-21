import React from "react";
import { Container, Col, Row, Button, Input, Form } from "reactstrap";

const Liste3 = props => {
  return (
    <Container className="mt-2 bg-light rounded">
      <Row>
        <Col>
          <Form onSubmit={props.handleSubmit}>
            <h2 className="rounded p-1 bg-light text-info ">
              Modifier le Profil
            </h2>

            <Input
              onChange={event => props.updateEmail(event)}
              value={props.email}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="mon@email.com"
              className="border border-info"
            />

            <Input
              onChange={props.updatePassWord}
              value={props.password}
              type="password"
              name="password"
              id="password"
              placeholder="monPassw0rd"
              className="mt-1 border border-info"
            />

            <Input
              onChange={props.updateName}
              value={props.name}
              type="text"
              name="name"
              id="name"
              placeholder="James"
              className="mt-1 border border-info"
            />

            <Input
              onChange={props.updateLastName}
              value={props.lastname}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Bond"
              className="mt-1 border border-info"
            />

            <Button
              className="btn bg-info float-right mt-1 mb-1"
              onClick={e => props.modificationMail(e)}
              type="submit"
              value="submit"
            >
              Valider la modification
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Liste3;
