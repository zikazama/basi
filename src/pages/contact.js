import React, { useState } from "react";
import Header from "./../layouts/header";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  let [isLoading, setIsLoading] = useState(false);
  const _handleKirim = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <div>
      <Header />
      <Container>
        <h1>Kontak</h1>
        <Grid md={12}>
          {isLoading ? (
            <center>
              <CircularProgress color="secondary"></CircularProgress>
              <div>Terima Kasih Sudah Menghubungi Kami</div>
            </center>
          ) : (
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Nama" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="Pesan"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button
                background-color="secondary"
                color="secondary"
                size="large"
                onClick={_handleKirim}
              >
                Kirim
              </Button>
            </form>
          )}
        </Grid>
      </Container>
    </div>
  );
}
export default Contact;
