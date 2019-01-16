// import React, { Component } from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// import {
//   NavLink,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Container,
//   Col,
//   Row
// } from "reactstrap";
// import { ToastContainer, ToastStore } from "react-toasts";

// class SignIn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       flash: ""
//     };
//     this.updatePassword = this.updatePassword.bind(this);
//     this.updateEmail = this.updateEmail.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   reset() {
//     this.setState({
//       email: "",
//       password: ""
//     });
//   }
//   updatePassword(event) {
//     this.setState({
//       password: event.target.value
//     });
//   }
//   updateEmail(event) {
//     this.setState({
//       email: event.target.value
//     });
//   }
//   handleSubmit = event => {
//     console.log(JSON.stringify(this.state));
//     event.preventDefault();
//     fetch("/auth/signin", {
//       method: "POST",
//       headers: new Headers({
//         "Content-Type": "application/json"
//       }),
//       body: JSON.stringify(this.state)
//     })
//       .then(res => res.json())
//       .then(
//         res => this.setState({ flash: res.flash }),
//         err => this.setState({ flash: err.flash })
//       )
//       .then(() => {
//         ToastStore.info(JSON.stringify(this.state.flash));
//         this.reset();
//       });
//   };

//   render() {
//     return (
//       <Container className="shadow-sm p-5 bg-white rounded mt-5">
//         <Row>
//           <Col lg="6" md="6" sm="12">
//             <img
//               src="https://wildcodeschool.fr/wp-content/uploads/2017/02/logo_orange_small.jpg"
//               alt="wcs"
//               // style={{ width: "20em" }}
//               className="text-center mx-auto d-block"
//             />
//           </Col>
//           <Col lg="6" md="6" sm="12">
//             <Form onSubmit={this.handleSubmit}>
//               <h2>Recherche Wilders</h2>
//               <FormGroup>
//                 <Label for="email">Email</Label>
//                 <Input
//                   onChange={this.updateEmail}
//                   value={this.state.email}
//                   type="email"
//                   name="email"
//                   id="exampleEmail"
//                   placeholder="mon@email.com"
//                 />
//               </FormGroup>

//               <NavLink
//                 className="btn bg-primary float-right text-white"
//                 tag={RouterNavLink}
//                 activeClassName="active"
//                 to="/recherche"
//               >
//                 Rechercher
//               </NavLink>
//               {/* <Button
//                   className="btn bg-primary float-right"
//                   type="submit"
//                   value="submit">
//                   Submit
//                 </Button> */}
//             </Form>
//           </Col>
//         </Row>
//         <ToastContainer store={ToastStore} />
//       </Container>
//     );
//   }
// }
// export default SignIn;
