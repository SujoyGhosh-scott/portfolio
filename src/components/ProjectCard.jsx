import React from "react";
import CustomChip from "./CustomChip";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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

function ProjectCard() {
  const classes = useStyles();
  return (
    <Card style={{ background: "#6a6c6d96" }}>
      <img src={work} style={{ height: "180px", width: "100%" }} alt="" />
      {/*<CardMedia image={work} />*/}
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          Project title
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <CustomChip label="Material-ui" txt="blue" bg="skyblue" />
          <CustomChip label="Django" bg="lightgreen" txt="green" />
          {/*<CustomChip label="Js" bg="yellow" txt="black" />*/}
          <CustomChip label="GraphQl" bg="pink" txt="purple" />
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
              Project description Lizards are a widespread group of squamate
              reptiles, with over 6,000 species, ranging across all continents
              except Antarctica
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
