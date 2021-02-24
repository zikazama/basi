import React, { Component } from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
import CardAbout from './../components/cardAbout';

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Container>
          <h1>About</h1>
          <CardAbout></CardAbout>
        </Container>
      </div>
    );
  }
}
export default About;
