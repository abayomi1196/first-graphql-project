import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// react-router
import { BrowserRouter as Router } from "react-router-dom";

// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// setup client
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
