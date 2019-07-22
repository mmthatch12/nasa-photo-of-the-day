import React, { useState, useEffect } from "react";
import "./App.scss";
import { Header } from './Components/Header/Header'
import Photo from './Components/Body/Photo'


function App() {

  return (
    <div className="App">
      <Header />
      <Photo />
    </div>
  );
}

export default App;
