import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  chip: {
    fontSize: "x-small",
    marginRight: 5,
    //fontWeight: "600",
  },
});

const CustomChip = ({ label, bg, txt }) => {
  const classes = useStyles();
  return (
    <Chip
      className={classes.chip}
      style={{
        background: `${bg}`,
        color: `${txt}`,
      }}
      label={label}
    />
  );
};

export default CustomChip;
