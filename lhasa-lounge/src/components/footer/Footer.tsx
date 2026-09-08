import { Link } from "react-router-dom";
import { restaurant } from "../../data/restaurant";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>{restaurant.name}</strong>
            <p>
              Tibetan soul meets Indian fire. A mountain-warm restaurant for
              hand-folded momos, slow broths, and evenings worth lingering over.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li>Tue – Thu: 5 PM – 10 PM</li>
              <li>Fri – Sat: 5 PM – 11:30 PM</li>
              <li>Sun: 12 PM – 9 PM</li>
              <li>Mon: Closed</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Find Us</h4>
            <ul>
              <li>128 Snow Lion Lane</li>
              <li>Downtown, Dharamsala</li>
              <li><a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</span>
          <span>Made with ❤️ and chilli oil</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
