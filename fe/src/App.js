import React from "react";
import ReactDOM from "react-dom";

import Pages from "./pages/index.js";

const App = () => {
  return (
    <React.Fragment>
      <Pages />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
