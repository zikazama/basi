/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/cardNews";
import apiService from "./../data/apiService";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function ListCategory({ category }) {
  const classes = useStyles();
  const [newsData, setNewsData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    const result = await apiService().category(category);
    setNewsData(result.data.sources);
    setIsLoading(false);
    console.log(result.data.sources);
  }, [category]);
  return (
    <div className={classes.root}>
      {isLoading ? (
        <center>
          <CircularProgress color="secondary" />
          <div>Loading</div>
        </center>
      ) : (
        <Grid container spacing={3}>
          {newsData.length > 0 ? (
            newsData.map((news, index) => {
              return (
                <Grid key={index} item xs={12} md={3}>
                  <NewsCard news={news}></NewsCard>
                </Grid>
              );
            })
          ) : (
            <center>
              <div>Tidak Ada Berita yang cocok</div>
            </center>
          )}
        </Grid>
      )}
    </div>
  );
}

export default ListCategory;
