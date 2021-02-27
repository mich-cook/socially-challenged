import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/link-context";

import GlobalStyles from "./components/GlobalStyle.js";
import Pages from "./pages/index.js";

const uri = process.env.API_URL;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });
const authLink = setContext((X, { headers }) => {
  return {
    "headers": {
      ...headers,
      "Authorization": localStorage.getItem("token") || ""
    }
  };
});

const client = new ApolloClient({
  "link": authLink.concat(httpLink),
  cache,
  "connectToDevTools": true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
