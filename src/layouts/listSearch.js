/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
function ListSearch({ query }) {
  const classes = useStyles();
  const [newsData, setNewsData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    setIsLoading(true);
    const result = await apiService().search(query);
    setNewsData(result.data.articles);
    setIsLoading(false);
    console.log(result.data.articles);
  }, [query]);
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
                  {/* <Paper className={classes.paper}> */}
                  <NewsCard news={news}></NewsCard>
                  {/* </Paper> */}
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

export default ListSearch;
