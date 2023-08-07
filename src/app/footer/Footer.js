import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,

} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import './Index.css';
import { MENUS } from 'components/AppNavbar';
import Button from 'components/base/Button';

export default function Footer({ setRoute }) {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <p>
            Thanks for....
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            Bhaskar. H
            +91 9884487333
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            Rameshkumar.A
            +91 9962929692
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            bhaskaran@harisons.org
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            arameshkumar@harisons.org
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            560/1 & 560/2A,
            Papparambakkam village,
            Tiruvallur Taluk,
            Tiruvallur District.
          </a>
        </div>
        <div className="box">
          <h3>Quick Info</h3>
          {MENUS.map((model) => (
            <a
              href={model.path}
              className="links"
              onClick={() => setRoute(model.path)}
            >
              <i><FontAwesomeIcon icon={faArrowRight} /></i>
              {model.label}
            </a>
          ))}
        </div>
        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type="text" placeholder="Your email" style={{ marginBottom: '20px' }} />
          <Button appearance="primary">Subscribe</Button>
          <img src="image/payment.png" alt="" />
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span
            style={{
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://orkaapps.com/')}
          >
            OrkaApps
          </span>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
