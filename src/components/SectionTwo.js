import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { object, bool } from "prop-types";

export default class SectionTwo extends PureComponent {
  static propTypes = {
    responseData: object,
    animateSectionTwo: bool
  };

  static defaultProps = {
    responseData: {},
    animateSectionTwo: false
  };
  state = {};

  kelvinToCelsius = temp => {
    let convertedTemp = temp - 273.15;
    return convertedTemp;
  };

  kelvinToFahrenheit = temp => {
    let convertedTemp = (temp - 273.15) * (9 / 5) + 32;
    return convertedTemp;
  };

  render() {
    const { responseData, animateSectionTwo } = this.props;
    const cityName = responseData.data && responseData.data.name;
    const weatherInfo = responseData.data && responseData.data.weather;
    const tempInfo = responseData.data && responseData.data.main;

    return (
      <Grid>
        <Grid container>
          <Grid item lg={12} xs={12} sm={12}>
            <Card
              className={
                animateSectionTwo
                  ? "weather-card animated zoomIn"
                  : "weather-card"
              }
            >
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

                <p>{weatherInfo && weatherInfo[0].description}</p>
              </div>
            </Card>
          </Grid>
          <Grid
            container
            className={
              animateSectionTwo
                ? "animated rubberBand container-padding"
                : "container-padding"
            }
          >
            <Grid item lg={4} xs={4} sm={4}>
              <Card>{this.kelvinToCelsius(tempInfo && tempInfo.temp)}</Card>
            </Grid>
            <Grid item lg={4} xs={4} sm={4}>
              <Card>{tempInfo && tempInfo.pressure}</Card>
            </Grid>
            <Grid item lg={4} xs={4} sm={4}>
              <Card>{tempInfo && tempInfo.humidity}</Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
