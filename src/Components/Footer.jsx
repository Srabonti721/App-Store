import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { TbBrandYoutubeFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-linear-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-400 to-90%  p-10">
      <nav>
        <h6 className="footer-title font-bold text-xl">Terms of Service</h6>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Acceptable Use</a>
        <a className="link link-hover ">License</a>
        <a className="link link-hover">Refund Policy</a>
        <a className="link link-hover">User Agreement</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-xl">Privacy Policy</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
        <a className="link link-hover">Data Collection</a>
        <a className="link link-hover">User Privacy</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-xl">Developer Resources</h6>
        <a className="link link-hover">Documentation</a>
        <a className="link link-hover">Support</a>
        <a className="link link-hover">GitHub Repository</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold text-xl  ">Social Media</h6>
        <div className='flex gap-4' >
          <a className="link link-hover"><FaGithub size={28} /></a>
          <a className="link link-hover text-blue-700"><FaFacebook size={28} /></a>
          <a className="link link-hover text-red-700"><TbBrandYoutubeFilled size={28} /></a>
        </div>
        <p> © 2026 AppStore. All Rights Reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;