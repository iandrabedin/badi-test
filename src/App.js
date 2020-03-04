import React from "react";
import { Navbar, Footer } from "./components";
import Homepage from "./pages";
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
