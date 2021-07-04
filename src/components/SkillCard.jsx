import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  card: {
    minHeight: 350,
    padding: "1rem",
    background: "#6a6c6d96",
  },
  cardImg: {
    height: 20,
    width: 40,
    objectFit: "contain",
    marginRight: "1rem",
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
        <CardContent>
          {items.map((item) => (
            <Grid container style={{ marginBottom: 10 }} key={item.name}>
              <img
                className={classes.cardImg}
                src={item.imgSrc}
                alt={item.name}
              />
              <Typography color="textSecondary" gutterBottom>
                {item.name}
              </Typography>
            </Grid>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default SkillCard;
