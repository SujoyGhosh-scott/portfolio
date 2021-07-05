import React from "react";
import ProjectCard from "./ProjectCard";
import PackageCard from "./PackageCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ProjectSection({ title, list, isPackage = false }) {
  return (
    <Grid container direction="column" style={{ marginBottom: "2rem" }}>
      <Typography
        variant="h5"
        component="h3"
        color="secondary"
        style={{ marginBottom: "1rem" }}
      >
        {title}
      </Typography>
      {!isPackage ? (
        <Grid container item justify="center" spacing={2}>
          <Grid item sm={4} xs={10}>
            <ProjectCard />
          </Grid>
          <Grid item sm={4} xs={10}>
            <ProjectCard />
          </Grid>
          <Grid item sm={4} xs={10}>
            <ProjectCard />
          </Grid>
        </Grid>
      ) : (
        <Grid container item justify="center" spacing={2}>
          <Grid item sm={4} xs={10}>
            <PackageCard />
          </Grid>
          <Grid item sm={4} xs={10}>
            <PackageCard />
          </Grid>
          <Grid item sm={4} xs={10}>
            <PackageCard />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default ProjectSection;
