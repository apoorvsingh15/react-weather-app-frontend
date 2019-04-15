import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { object } from "prop-types";

export default class SectionTwo extends PureComponent {
  static propTypes = {
    responseData: object
  };

  static defaultProps = {
    responseData: {}
  };
  state = {};
  render() {
    const { responseData } = this.props;
    const cityName = responseData.data && responseData.data.name;
    return (
      <Grid>
        <Grid container>
          <Grid item lg={4}>
            <Card>
              <p>Place: {cityName}</p>
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card>two</Card>
          </Grid>
          <Grid item lg={4}>
            <Card>three</Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={4}>
            <Card>one</Card>
          </Grid>
          <Grid item lg={4}>
            <Card>two</Card>
          </Grid>
          <Grid item lg={4}>
            <Card>three</Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={4}>
            <Card>one</Card>
          </Grid>
          <Grid item lg={4}>
            <Card>two</Card>
          </Grid>
          <Grid item lg={4}>
            <Card>three</Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
