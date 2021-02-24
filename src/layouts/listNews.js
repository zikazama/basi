import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/cardNews";
import apiService from "./../data/apiService";

const promiseData = apiService().headline();
promiseData.then(function(news) { console.log(news)});

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
  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}>
        {newsData.map((news) => {
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper}>
              <NewsCard></NewsCard>
            </Paper>
          </Grid>
        })}
      </Grid> */}
    </div>
  );
}

export default ListNews;
