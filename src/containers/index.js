import React, { PureComponent, Fragment } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../components/SectionOne";
import SimpleAppBar from "../components/AppBar";

class Main extends PureComponent {
  render() {
    return (
      <Fragment>
        <SimpleAppBar />
        <ReactFullpage
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <SectionOne fullpageApi={fullpageApi} />
                </div>
                <div className="section">
                  <p>Section 2</p>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default Main;
