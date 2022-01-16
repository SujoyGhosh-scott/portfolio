import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  card: {
    background: "transparent",
    border: "none",
    boxShadow: "none",
  },
  cardImg: {
    height: 40,
    objectFit: "contain",
    marginRight: 10,
    marginBottom: 10,
  },
  imageContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

function SkillCard({ title, items }) {
  const classes = useStyles();
  return (
    <Grid item sm={4} xs={10}>
      <Card className={classes.card}>
        <Typography variant="h5" className={"light"}>
          {title}
        </Typography>
        <div className={classes.imageContainer}>
          {items.map((item) => (
            <img
              className={classes.cardImg}
              src={item.imgSrc}
              alt={item.name}
            />
          ))}
        </div>
      </Card>
    </Grid>
  );
}

export default SkillCard;
