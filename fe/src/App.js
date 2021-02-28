import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";

import GlobalStyles from "./components/GlobalStyle.js";
import Pages from "./pages/index.js";

const uri = process.env.API_URL;
const cache = new InMemoryCache();

// TODO: doesn't verify that token is valid and it should
const lilo = {
  "isLoggedIn": !!localStorage.getItem("token")
};

// write this into the cache before init the client
// .writeData() has been removed and breaks
cache.writeQuery({
  "query": gql`{ lilo }`,
  "data": { lilo }
});

const client = new ApolloClient({
  uri,
  cache,
  "headers": {
    "authorization": localStorage.getItem("token") || ""
  },
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
