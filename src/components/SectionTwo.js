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
    console.log(responseData, "<==dataResponse");

    const cityName = responseData.data && responseData.data.name;
    const weatherInfo = responseData.data && responseData.data.weather;

    console.log(weatherInfo, "<=====weatherInfo");

    return (
      <Grid>
        <Grid container>
          <Grid item lg={12}>
            <Card style={{ borderRadius: 5, background: "blue" }}>
              <h1 style={{ textAlign: "center" }}>{cityName} Weather</h1>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p>
                  <img
                    src={`http://openweathermap.org/img/w/${weatherInfo &&
                      weatherInfo[0].icon}.png`}
                    alt="icon-weather"
                  />
                  <span>{weatherInfo && weatherInfo[0].main}</span>
                </p>

                <p>fuckin {weatherInfo && weatherInfo[0].description}</p>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
