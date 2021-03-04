import React from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
import ListSearch from "./../layouts/listSearch";
import { useParams } from "react-router-dom";

function Search() {
    let {query} = useParams();
    return (
    <div>
      <Header />

      <Container>
        <div style={{ marginBottom: "80px" }}></div>
        <h1>Pencarian {query}</h1>
        <ListSearch query={query}></ListSearch>
      </Container>
    </div>
  );
}
export default Search;
