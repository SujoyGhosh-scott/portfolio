import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ScheduleIcon from "@material-ui/icons/Schedule";
import sgLogo from "../images/supportGenieLogo.svg";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
  paper: {
    padding: "10px",
    textAlign: "left",
  },
  title: {
    marginBottom: "1rem",
    width: "100%",
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <Grid container id="experience" className={classes.root}>
      <Grid item sm={2} xs={false}></Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        item
        sm={8}
        xs={12}
      >
        <Typography variant="h4" component="h3" className={classes.title}>
          E<span className={"light"}>xp</span>erience
        </Typography>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                April, 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography>coding journey stated as web developer.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Feb, 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" color="secondary">
                  Support Genie
                </Typography>
                <Typography>Software developer Intern</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Aug, 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <ImportContactsIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1" color="secondary">
                  Graduate
                </Typography>
                <Typography>B.Sc from University of Calcutta</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <ScheduleIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      <Grid item sm={2} xs={false}></Grid>
    </Grid>
  );
}
