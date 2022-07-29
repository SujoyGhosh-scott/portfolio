import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Icon from "@material-ui/core/Icon";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CodeIcon from "@material-ui/icons/Code";
import sgLogo from "../images/supportGenieLogo.svg";
import whales from "../images/whalesNetwork.png";
import yubiHealth from "../images/yubiHealth.png";
import testPdf from "../docs/InternshipCertificateSupportGenie.pdf";
import Stop from "./Stop";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
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
            docSrc={testPdf}
            icon={
              <Icon classes={classes.iconRoot}>
                <img className={classes.imageIcon} src={sgLogo} alt="" />
              </Icon>
            }
          />
          <Stop
            date="Feb, 2022"
            content="App developer using React Native"
            contentTitle="Whales Network"
            icon={
              <Icon classes={classes.iconRoot}>
                <img className={classes.imageIcon} src={whales} alt="" />
              </Icon>
            }
          />
          <Stop
            date="Jun, 2022"
            content="Software developer intern"
            contentTitle="YubiHealth"
            icon={
              <Icon classes={classes.iconRoot}>
                <img className={classes.imageIcon} src={yubiHealth} alt="" />
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
