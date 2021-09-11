import React from "react";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import Feature from "./Feature";
import Agents from "./Agents";
import Contact from "./Contact";
import Footer from "./Footer";

function Root() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Feature />
      <Agents />
      <Contact />
      <Footer />
    </div>
  );
}

export default Root;
