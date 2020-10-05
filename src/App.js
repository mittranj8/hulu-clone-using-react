import React, { useState } from "react";
import "./App.css";
import NavMenu from "./NavMenu";
import requests from "./requests";
import Results from "./Results";
import SubNavMenu from "./SubNavMenu";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <NavMenu />
      <SubNavMenu setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
