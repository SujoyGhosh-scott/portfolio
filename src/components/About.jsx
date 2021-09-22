import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <Grid container id="about" className={classes.root}>
      <Grid item sm={2} xs={false}></Grid>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="flex-start"
        item
        sm={8}
        xs={12}
      >
        <Typography
          variant="h4"
          component="h3"
          style={{ marginBottom: "1rem" }}
        >
          I'am <span className={"light"}>Sujoy</span>
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          style={{ marginRight: "6rem" }}
        >
          currently pursuing my masters' majoring in{" "}
          <strong>Computer Sc</strong>. I'm really passionate about Web
          Development and Looking for an opportunity to work as a dedicated and
          enthusiastic professional where my talent and knowledge can be best
          utilised for the development of the organization.
        </Typography>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
