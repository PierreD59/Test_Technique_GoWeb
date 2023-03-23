import React from "react";
import "./App.scss";
import Header from "./commons/header/header";
import Router from "./router/Router";

function App() {
  return (
    <div className="App bgOffWhite">
      <Header />
      <Router />
    </div>
  );
}

export default App;
