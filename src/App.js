import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import MainView from "./components/mainView/MainView";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/main" element={<MainView />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
