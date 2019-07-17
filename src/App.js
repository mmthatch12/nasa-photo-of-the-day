import React, { useState, useEffect } from "react";
import "./App.scss";
import Photo from './Components/Body/Photo'

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Photo />
    </div>
  );
}

export default App;
