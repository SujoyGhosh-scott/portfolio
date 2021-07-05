import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container id="contact" className={classes.root}>
      <Grid item sm={2} xs={false}></Grid>
      <Grid item container justify="center" alignItems="center" sm={8} xs={12}>
        <Grid item sm={2} xs={false}></Grid>
        <Grid item sm={8} xs={10}>
          <Typography
            variant="h4"
            component="h3"
            style={{ marginBottom: "1rem" }}
          >
            <span className={"light"}>G</span>et In to
            <span className={"light"}>uch</span>
          </Typography>
          <form method="POST">
            <TextField
              fullWidth
              variant="outlined"
              color="secondary"
              label="Name"
              placeholder="Enter name"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              color="secondary"
              label="Email"
              placeholder="Enter email"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              color="secondary"
              label="Message"
              placeholder="Enter message"
              multiline
              rows={6}
              style={{ marginBottom: "1rem" }}
            />
            <Grid container>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "auto", color: "#fff" }}
              >
                Send
              </Button>
            </Grid>
          </form>
        </Grid>
        <Grid item sm={2} xs={false}></Grid>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
