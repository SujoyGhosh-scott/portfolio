import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import imgUrl from "../images/sujoy.jpg";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  image: {
    height: 200,
    objectFit: "contain",
    borderRadius: "50%",
    transform: "rotate(20deg)",
    border: "10px solid #3dc2cc",
  },
  button: {
    width: "200px",
    padding: "1rem",
    fontSize: "larger",
    marginTop: "1rem",
  },
  icon: {
    color: "white",
    "&:hover": {
      color: "#3dc2cc",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container id="home" className={classes.root}>
      <Grid item sm={2} xs={false}></Grid>
      <Grid
        item
        container
        justify="space-around"
        alignItems="center"
        sm={8}
        xs={12}
      >
        <Grid>
          <Typography component="p" variant="h3">
            Hi,
          </Typography>
          <Typography component="p" variant="h3">
            I am <span className={"light"}>Sujoy</span>
          </Typography>
          <Typography component="p" variant="h3">
            <span className={"light"}>Web Developer</span>
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            component="a"
            href="#contact"
          >
            CONTACT
          </Button>
          <Grid container justify="space-evenly" style={{ marginTop: "1rem" }}>
            <Tooltip title="GitHub">
              <a
                className={classes.icon}
                href="https://github.com/SujoyGhosh-scott"
                target="__blank"
              >
                <GitHubIcon />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a
                className={classes.icon}
                href="https://www.linkedin.com/in/sujoy-ghosh2000/"
                target="__blank"
              >
                <LinkedInIcon />
              </a>
            </Tooltip>
            <Tooltip title="Instagram">
              <a
                className={classes.icon}
                href="https://www.instagram.com/hayitsscott/"
                target="__blank"
              >
                <InstagramIcon />
              </a>
            </Tooltip>
            <Tooltip title="HackerRank">
              <a
                className={classes.icon}
                href="https://www.hackerrank.com/Sujoy_Ghosh"
                target="__blank"
              >
                <CodeIcon />
              </a>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid>
          <img src={imgUrl} alt="" className={classes.image} />
        </Grid>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
