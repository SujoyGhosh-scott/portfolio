import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Skills() {
  const classes = useStyles();

  return (
    <Grid container id="skills" className={classes.root}>
      <Grid item sm={2} xs={false}></Grid>
      <Grid item sm={8} xs={12}>
        skills
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
