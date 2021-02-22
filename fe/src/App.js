import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./components/GlobalStyle.js";
import Pages from "./pages/index.js";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Pages />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
