import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    textAlign: "left",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    fontSize: "large",
    fontWeight: 500,
  },
}));

const Stop = ({ date, icon, content, contentTitle, docSrc }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {docSrc && (
              <Tooltip title="View Certificate" arrow>
                <Icon onClick={() => setOpen(true)}>
                  <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/25/ffffff/external-certificate-award-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
                </Icon>
              </Tooltip>
            )}

            {open && (
              <Dialog fullScreen open={open} onClose={handleClose}>
                <div className={classes.drawerHeader}>
                  <span>Certificate</span>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                <DialogContent>
                  <iframe
                    src={docSrc}
                    title="testPdf"
                    width="100%"
                    height="98%"
                  />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Stop;
