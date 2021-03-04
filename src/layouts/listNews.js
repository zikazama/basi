/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/cardNews";
import apiService from "./../data/apiService";

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
function ListNews() {
  const classes = useStyles();
  const [newsData, setNewsData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const result = await apiService().headline();
    setNewsData(result.data.articles);
    setIsLoading(false);
    console.log(result.data.articles);
  }, []);
  return (
    <div className={classes.root}>
      {isLoading ? (
        <center>
          <div>Loading</div>
        </center>
      ) : (
        <Grid container spacing={3}>
          {newsData.map((news) => {
            return (
              <Grid item xs={12} md={3}>
                <Paper className={classes.paper}>
                  <NewsCard news={news}></NewsCard>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default ListNews;
