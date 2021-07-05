import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import reactDom from "react-dom";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
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
            <span className={"light"}>G</span>et in to
            <span className={"light"}>uch</span>
          </Typography>
          <form method="POST">
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
              color="secondary"
              label="Name"
              placeholder="Enter name"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              value={email}
              setEmail={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
              color="secondary"
              label="Email"
              placeholder="Enter email"
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
