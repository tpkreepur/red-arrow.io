// import { useState } from "react";
import brandLogo from "./assets/brand/digital-rain.webp";
import "./App.css";

//import NavBar from './components/navbar.tsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Red-Arrow.io</h1>
      </header>
      <main className="flex-container">
        <div className="logo">
          <img src={brandLogo} alt="brand logo" />
        </div>
        <p>
          This is a basic web page for Red-Arrow.io. More content will be added
          soon.
        </p>
      </main>
      <footer>
        <p>&copy; 2024 Red-Arrow.io. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
