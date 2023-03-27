import React from "react";
import "./App.scss";
import Header from "./commons/header/header";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
