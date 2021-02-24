import React from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
import ListNews from './../layouts/listNews';

function Home() {
  return (
    <div>
      <Header />

      <Container>
        <h1>Home</h1>
        <ListNews></ListNews>
      </Container>
    </div>
  );
}
export default Home;
