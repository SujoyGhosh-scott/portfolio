import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DrawerList from "./DrawerList";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function DrawerButton({ handleMode }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer("right", true)}
        style={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <DrawerList
          anchor="right"
          toggleDrawer={toggleDrawer}
          handleMode={handleMode}
        />
      </SwipeableDrawer>
    </React.Fragment>
  );
}
