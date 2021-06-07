import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import SidebarButton from "./SidebarButton";

function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="h6">
          Sujoy
        </Typography>
        <SidebarButton />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
