import React from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
import ListCategory from "./../layouts/listCategory";
import { useParams } from "react-router-dom";

function Category() {
    let {category} = useParams();
    return (
    <div>
      <Header />

      <Container>
        <div style={{ marginBottom: "80px" }}></div>
        <h1>Category {category}</h1>
        <ListCategory category={category}></ListCategory>
      </Container>
    </div>
  );
}
export default Category;
