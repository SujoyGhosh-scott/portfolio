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

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CodeIcon from "@material-ui/icons/Code";
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
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

const Stop = ({ date, icon, content, contentTitle }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary">{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1" color="secondary">
            {contentTitle}
          </Typography>
          <Typography>{content}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

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
          <Stop
            date="Apr, 2020"
            content="started frontend web develpment"
            icon={<CodeIcon />}
          />
          <Stop
            date="Feb, 2021"
            content="Software developer intern"
            contentTitle="Support Genie"
            icon={
              <Icon classes={classes.iconRoot}>
                <img className={classes.imageIcon} src={sgLogo} alt="" />
              </Icon>
            }
          />
          <Stop
            date="Aug, 2021"
            content="B.Sc in CS from University of Calcutta"
            contentTitle="Graduate"
            icon={<ImportContactsIcon />}
          />
          <Stop
            date="Sept, 2021"
            content="Pursuing M.Sc in CS from St. Xavier's College, Kolkata"
            icon={<ImportContactsIcon />}
          />
          <Stop
            date="Dec, 2021"
            content="Left Support Genie"
            icon={
              <Icon classes={classes.iconRoot}>
                <img className={classes.imageIcon} src={sgLogo} alt="" />
              </Icon>
            }
          />
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
