import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row
} from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "wild@wildcodeschool.fr",
        first: "Eleves",
        last: "Wild"
      }
    };
  }
  render() {
    return (
      <Container className="shadow-sm p-5 bg-white rounded mt-5">
        <Row>
          <Col lg="6" md="6" sm="12">
            <img
              src="https://wildcodeschool.fr/wp-content/uploads/2017/02/logo_orange_small.jpg"
              alt="wcs"
              // style={{ width: "20em" }}
              className="text-center mx-auto d-block">
            </img>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="text-center ">
              <h2>Bonjour !</h2>
              <h2>Vous vous appelez : {this.state.profile.name}
                {this.state.profile.lastname}</h2>
              <h2>Votre adresse email est : {this.state.profile.email}</h2>
              <Link
                className="btn bg-primary text-white"
                activeClassName="active"
                to="/signin"
              >signOut</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
