import React, { Suspense, lazy } from "react";
import { Navbar, Footer, Loading } from "./components";
import "./app.scss";

const Homepage = lazy(() => import("./pages/homepage"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Homepage />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
