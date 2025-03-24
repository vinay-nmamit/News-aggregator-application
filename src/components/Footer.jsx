import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p className="mb-1">&copy; {new Date().getFullYear()} NewsApp. All Rights Reserved.</p>
        <p>
          <a href="/privacy" className="text-light">Privacy Policy</a> | 
          <a href="/terms" className="text-light"> Terms & Conditions</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
