import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CMS
          </Typography>
          <Button color="inherit">
            <NavLink to="/contents" className={classes.navLink}>
              Contents
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/users" className={classes.navLink}>
              Users
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="settings" className={classes.navLink}>
              Settings
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
