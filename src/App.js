import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const PageBody = styled.div`
  /* margin-top: 10vh; */
  /* border: 1px solid blue; */
  /* height: 80vh; */
`;

function App() {
  return (
    <Router>
      {/* <Page className="App"> */}
      <Page>
        <Header />
        <PageBody>
          <Route exact path="/" component={Home} />
        </PageBody>
      </Page>
    </Router>
  );
}

export default App;
