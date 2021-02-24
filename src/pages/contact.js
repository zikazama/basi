import React, { Component } from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Container>
          <h1>Kontak</h1>
          <p>Ini adalah halaman Kontak</p>
        </Container>
      </div>
    );
  }
}
export default Contact;
