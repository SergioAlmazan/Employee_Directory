import React from "react";
import Employee from "./pages/Employee";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="jumbotron">
       Employee Roster
      </header>
      <Employee />
    </div>
  );
}

export default App;
