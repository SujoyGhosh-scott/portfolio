import React from "react";
import SkillCard from "./SkillCard";
import { frontendList, backendList, cssList } from "./SkillList";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="flex-start"
        item
        sm={8}
        xs={12}
      >
        <Grid item style={{ marginBottom: "1rem" }}>
          <Typography variant="h4" component="h3">
            Lan<span className={"light"}>gua</span>ges
            <span className={"light"}>/lib</span>raries I mo
            <span className={"light"}>st</span>ly use
          </Typography>
        </Grid>
        <Grid item container justify="center" spacing={2}>
          <SkillCard title="Languages/libraries" items={frontendList} />
          <SkillCard title="Backend" items={backendList} />
          <SkillCard title="Styles" items={cssList} />
        </Grid>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
