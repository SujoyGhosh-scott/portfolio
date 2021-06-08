import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import HourglassFullRoundedIcon from "@material-ui/icons/HourglassFullRounded";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer({ anchor, toggleDrawer }) {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component="a" href="#home">
          <ListItemIcon>
            <HomeRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#about">
          <ListItemIcon>
            <AccountBoxRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="#skills">
          <ListItemIcon>
            <FitnessCenterRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component="a" href="#experience">
          <ListItemIcon>
            <HourglassFullRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button component="a" href="#projects">
          <ListItemIcon>
            <AccountTreeRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ListItemIcon>
            <CallRoundedIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
}
