import React from "react";
import emailjs from "emailjs-com";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [error, setError] = React.useState({
    type: null,
    message: null,
  });
  const classes = useStyles();
  const form = React.useRef();

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError({
      type: null,
      message: null,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (email === "") {
      setError({
        type: "email",
        message: "Please enter email",
      });
      return;
    }
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) === false
    ) {
      setError({
        type: "email",
        message: "Please enter valid email",
      });
      return;
    }
    if (message === "") {
      setError({
        type: "message",
        message: "Cannot send empty message",
      });
      return;
    }
    if (error.type !== null) {
      setError({
        type: null,
        message: null,
      });
    }

    console.log("sending email");
    emailjs
      .sendForm(
        "service_wj67309",
        "template_qk2picl",
        form.current,
        "user_PStUoLkGYJh3nB8CvWq97"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Email sent");
        },
        (error) => {
          console.log(error.text);
          setResponse(`Error while sending email. ${error.text}`);
        }
      );
    setOpen(true);

    handleReset();
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
              color="secondary"
              label="Name"
              placeholder="Enter name"
              style={{ marginBottom: "1rem" }}
              name="name"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              typeof="email"
              fullWidth
              variant="outlined"
              color="secondary"
              label="Email"
              placeholder="Enter email"
              error={error.type === "email" ? true : false}
              helperText={error.type === "email" ? error.message : null}
              style={{ marginBottom: "1rem" }}
              name="email"
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
              error={error.type === "message" ? true : false}
              helperText={error.type === "message" ? error.message : null}
              style={{ marginBottom: "1rem" }}
              name="message"
            />
            <Grid container>
              <Button
                color="secondary"
                style={{ marginLeft: "auto" }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "1rem", color: "#fff" }}
                onClick={sendEmail}
                type="submit"
              >
                Send
              </Button>
            </Grid>
          </form>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message={response}
          />
        </Grid>
        <Grid item sm={2} xs={false}></Grid>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
