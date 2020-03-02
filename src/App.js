import React from "react";
import Homepage from "./pages";
import { Navbar, Footer } from "./components";
import "./app.scss";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
