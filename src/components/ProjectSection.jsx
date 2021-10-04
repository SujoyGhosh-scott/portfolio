import React from "react";
import ProjectCard from "./ProjectCard";
import PackageCard from "./PackageCard";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ProjectSection({ title, list, isPackage = false }) {
  return (
    <Grid container direction="column" style={{ marginBottom: "2rem" }}>
      <Typography variant="h5" component="h3" style={{ marginBottom: "1rem" }}>
        <u>{title}</u>
      </Typography>
      {!isPackage ? (
        <Grid container item justify="center" spacing={2}>
          {list.map((item) => (
            <Grid item sm={4} xs={10}>
              <ProjectCard
                title={item.title}
                description={item.description}
                tags={item.tags}
                image={item.image}
                github={item.github}
                liveLink={item.liveLink}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container item justify="center" spacing={2}>
          {list.map((item) => (
            <Grid item sm={4} xs={10}>
              <PackageCard
                title={item.title}
                description={item.description}
                tags={item.tags}
                github={item.github}
                npmLink={item.npmLink}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

export default ProjectSection;
