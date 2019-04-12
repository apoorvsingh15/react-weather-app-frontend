import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const SimpleAppBar = props => {
  const { classes } = props;
  const [appEnvironment, setAppEnvironment] = useState(true);

  const handleSwitch = () => {
    setAppEnvironment(!appEnvironment);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color={appEnvironment === true ? "default" : "primary"}
      >
        <Toolbar className="top-nav">
          <Typography variant="h6" color="inherit">
            Weather Forever
          </Typography>
          <div className="switch-flex">
            <Typography className="space-top" variant="h6" color="inherit">
              {appEnvironment === true ? "light" : "dark"}
            </Typography>
            <Switch
              checked={appEnvironment}
              onChange={handleSwitch}
              value={appEnvironment}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
