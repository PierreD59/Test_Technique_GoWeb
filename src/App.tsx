import React from "react";
import "./App.scss";
import Header from "./commons/header/header";
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <div className="App bgOffWhite">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
