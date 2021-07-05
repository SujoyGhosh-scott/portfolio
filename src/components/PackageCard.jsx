import React from "react";
import CustomChip from "./CustomChip";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";
import npmLogo from "../images/npmLogo.jpg";

const useStyles = makeStyles({
  cardActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  actionButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    paddingRight: ".5rem",
  },
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
});

function PackageCard({ title, description, github, tags, npmLink }) {
  const classes = useStyles();
  return (
    <Card style={{ background: "#6a6c6d96" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography variant="body2" color="textSecondary" component="p">
          {tags.map((tag) => (
            <CustomChip label={tag.label} txt={tag.txt} bg={tag.bg} />
          ))}
        </Typography>
        <div className={classes.actionButtons}>
          <IconButton
            color="secondary"
            component="a"
            href={github}
            target="_blank"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton component="a" href={npmLink} target="_blank">
            <Icon classes={classes.iconRoot} fontSize="small">
              <img className={classes.imageIcon} src={npmLogo} alt="" />
            </Icon>
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}

export default PackageCard;
