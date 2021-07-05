import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import work from "../images/work1.jpg";

const useStyles = makeStyles({
  accordian: {
    display: "flex",
    width: "100%",
    background: "#122229",
    borderRadius: 5,
  },
});

function ProjectSection({ title, list }) {
  const classes = useStyles();
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
      <Grid container item justify="center" spacing={2}>
        <Grid item sm={4} xs={10}>
          <Card style={{ background: "#6a6c6d96" }}>
            <CardMedia image={work} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Project title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Material-ui"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="GraphQL"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Django"
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={classes.accordian}
                >
                  <IconButton color="secondary" style={{ marginLeft: "auto" }}>
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="textSecondary">
                    Project description Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={10}>
          <Card style={{ background: "#6a6c6d96" }}>
            <CardMedia image={work} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Project title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Material-ui"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="GraphQL"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Django"
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={classes.accordian}
                >
                  <IconButton color="secondary" style={{ marginLeft: "auto" }}>
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="textSecondary">
                    Project description Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={10}>
          <Card style={{ background: "#6a6c6d96" }}>
            <CardMedia image={work} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Project title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Material-ui"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="GraphQL"
                />
                <Chip
                  style={{ fontSize: "x-small", margin: "0 5px" }}
                  label="Django"
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={classes.accordian}
                >
                  <IconButton color="secondary" style={{ marginLeft: "auto" }}>
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <LaunchIcon fontSize="small" />
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="textSecondary">
                    Project description Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectSection;
