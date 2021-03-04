import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

export default function NewsCard({ news }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link href={news.url} rel="noopener noreferrer" target="_blank">
        <CardMedia
          component="img"
          alt={news.title}
          height="250"
          image={news.urlToImage}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h4">
            {news.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
        <Grid container justify="flex-end">
          <Link href={news.url} rel="noopener noreferrer" target="_blank">
            <Button size="small" color="secondary">
              Baca Lebih Lanjut
            </Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
}
