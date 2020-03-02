import React from "react";
import "./footer.scss";

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      Made with
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        ReactJS
      </a>
      and
      <a
        href="http://www.recipepuppy.com/about/api/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Recipe Puppy API
      </a>
    </div>
  </footer>
);
