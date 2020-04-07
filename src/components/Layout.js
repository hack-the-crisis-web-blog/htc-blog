import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import SEO from "./SEO/SEO";
import CookieBanner from "./CookieBanner/CookieBanner";
import "./all.sass";

const addDeviceClass = () => {
  if (typeof window === "undefined" || !window.document) {
    return;
  }
  document.documentElement.classList.add(
    "ontouchstart" in document.documentElement ? "touch" : "no-touch"
  );
};

const Layout = ({ children, title }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  addDeviceClass();

  useEffect(() => {
    const isCookiesAccepted = document.cookie.match(
      /^(.*;)?\s*the-global-hack-google-analytics\s*=\s*[^;]+(.*)?$/
    );
    if (!isCookiesAccepted) {
      setCookiesAccepted(false);
    }
  }, []);

  return (
    <div>
      {!cookiesAccepted && <CookieBanner />}
      <SEO title={title} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
