import React from 'react';
import { Button } from 'semantic-ui-react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><Button circular color="twitter" icon="twitter" className="social" as="a" href="http://twitter.com/" target="_blank" /></li>
      <li><Button circular color="linkedin" icon="linkedin" className="social" /></li>
      <li><Button circular color="google plus" icon="google plus" className="social" /></li>
      <li><Button circular color="black" icon="github" className="social" /></li>
      <li><Button circular color="facebook" icon="facebook" className="social" /></li>
    </ul>
    <p className="copyright">&copy; 2015, Jane Smith</p>
  </footer>
);

export default Footer;
