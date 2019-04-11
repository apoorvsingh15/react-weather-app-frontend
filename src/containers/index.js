import React, { PureComponent } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

class Main extends PureComponent {
  render() {
    return (
      <ReactFullpage
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 </p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Main;
