import React from "react";
import ProjectSection from "./ProjectSection";
import {
  frontendProjectList,
  fullstackProjectList,
  packageList,
} from "./ProjectLists";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid container id="projects" className={classes.root}>
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
            <span className={"light"}>P</span>roj
            <span className={"light"}>ect</span>s
          </Typography>
        </Grid>
        <ProjectSection title="Frontend" list={frontendProjectList} />
        <ProjectSection title="Full-stack" list={fullstackProjectList} />
        {/**<ProjectSection
          title="NPM packages"
          list={packageList}
          isPackage={true}
        /> */}
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
