import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TibetanDivider from "../components/common/TibetanDivider";
import { restaurant } from "../data/restaurant";

const hours = [
  ["Tue – Thu", "5:00 PM – 10:00 PM"],
  ["Fri – Sat", "5:00 PM – 11:30 PM"],
  ["Sun", "12:00 PM – 9:00 PM"],
  ["Mon", "Closed"],
];

const Contact = () => {
  return (
    <main className="contact-page">
      <Navbar />

      <section className="contact-page-hero">
        <div className="container">
          <p className="eyebrow">Come visit us</p>
          <h1>Reservations</h1>
          <p className="subtitle">
            Walk-ins welcome at the bar. For dinner service, we recommend booking ahead.
          </p>
          <TibetanDivider symbol="༄" />
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="reservation-form">
              <h2>Book a Table</h2>
              <p>Fill out the form below and we'll confirm your reservation within the hour.</p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <select id="time">
                      <option value="">Select a time</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                      <option>9:00 PM</option>
                      <option>9:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests">Guests</label>
                    <select id="guests">
                      <option value="">Party size</option>
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5 guests</option>
                      <option>6 guests</option>
                      <option>7+ guests</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                      <option value="">Select (optional)</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Date Night</option>
                      <option>Business Dinner</option>
                      <option>Family Gathering</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Requests</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Dietary restrictions, seating preferences, or anything else we should know…"
                  />
                </div>

                <button type="submit" className="button button-primary form-submit">
                  Request Reservation
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="contact-info-card">
                <h3>
                  <span className="icon">📍</span>
                  Location
                </h3>
                <p>
                  128 Snow Lion Lane<br />
                  Downtown, Dharamsala<br />
                  Himachal Pradesh 176215
                </p>
              </div>

              <div className="contact-info-card">
                <h3>
                  <span className="icon">📞</span>
                  Contact
                </h3>
                <p>
                  <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a><br />
                  <a href="mailto:namaste@lhasalounge.in">namaste@lhasalounge.in</a>
                </p>
              </div>

              <div className="contact-info-card">
                <h3>
                  <span className="icon">🕐</span>
                  Hours
                </h3>
                {hours.map(([day, time]) => (
                  <p key={day} style={{ marginBottom: 4 }}>
                    <strong style={{ color: "var(--rice)" }}>{day}:</strong> {time}
                  </p>
                ))}
              </div>

              <div className="contact-map-placeholder">
                ✦ Map coming soon ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
