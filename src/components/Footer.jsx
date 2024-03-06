import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-auto">
      <footer className=" md:mx-32 my-4 py-3 border-top">
        <div className="flex flex-col mx-2 sm:mx-40 sm:flex-row items-center justify-between">
          <img
            src="src/assets/footer-logo.png"
            alt="footer-logo"
            className="py-2 h-12"
          />
          <p className="text-center text-muted">
            Copyright 2023. Guidepost. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
