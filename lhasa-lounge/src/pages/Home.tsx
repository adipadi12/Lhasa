import LhasaScene from "../components/hero/LhasaScene";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TibetanDivider from "../components/common/TibetanDivider";
import { reviews } from "../data/reviews";

const signatureDishes = [
  {
    name: "Steamed Momo Flight",
    note: "Chicken, vegetable, and chilli cheese momos folded to order with sesame achar.",
    price: "₹480",
    color: "card-red",
  },
  {
    name: "Lhasa Beef Thenthuk",
    note: "Hand-pulled noodles, slow broth, daikon, bok choy, and toasted garlic.",
    price: "₹380",
    color: "card-green",
  },
  {
    name: "Crisp Tingmo & Curry",
    note: "Cloud-soft Tibetan bread with a fragrant black cardamom potato curry.",
    price: "₹280",
    color: "card-gold",
  },
  {
    name: "Sichuan Chilli Tofu",
    note: "Silken tofu, mountain pepper, scallion oil, and smoked chilli crisp.",
    price: "₹300",
    color: "card-blue",
  },
];

const galleryMoments = [
  "Copper-lit dining room",
  "Hand-folded dumplings",
  "Butter tea service",
  "Late-night noodle bowls",
];

const serviceNotes = [
  "Tibetan momos & thukpa",
  "Modern Himalayan plates",
  "House-made chilli oils",
  "Warm lounge & cocktail bar",
];

const hours = [
  ["Tue – Thu", "5:00 PM – 10:00 PM"],
  ["Fri – Sat", "5:00 PM – 11:30 PM"],
  ["Sun", "12:00 PM – 9:00 PM"],
];

const Home = () => {
  return (
    <main className="restaurant-page">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="hero-section" id="home">
        <div className="hero-scene" role="region" aria-label="Interactive 3D Ramen Bowl">
          <LhasaScene />
        </div>
        <div className="hero-shade" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Tibetan soul · Indian fire</p>
            <h1>Lhasa Lounge</h1>
            <p className="hero-lede">
              A moody, mountain-warm restaurant for hand-folded momos, slow
              broths, chilli-laced small plates, and cocktails built for long
              tables.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#contact">
                Reserve a Table
              </a>
              <a className="button button-secondary" href="#menu">
                View Menu
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Restaurant highlights">
            <span>Open tonight</span>
            <strong>5 PM – 10 PM</strong>
            <p>
              Kitchen-led Tibetan and Indian cuisine in a candlelit lounge
              setting.
            </p>
          </aside>
        </div>
      </section>

      {/* ── Service strip ──────────────────────────────────── */}
      <section className="intro-band">
        <div className="container intro-grid">
          {serviceNotes.map((note) => (
            <div className="intro-note" key={note}>
              {note}
            </div>
          ))}
        </div>
      </section>

      {/* ── Signature dishes ───────────────────────────────── */}
      <section className="section menu-section" id="menu">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Signature plates</p>
              <h2>Comfort food with a high-altitude glow.</h2>
            </div>
          </div>

          <div className="dish-grid">
            {signatureDishes.map((dish) => (
              <article className={`dish-card ${dish.color}`} key={dish.name}>
                <div className="dish-visual">
                  <span />
                </div>
                <div className="dish-copy">
                  <div>
                    <h3>{dish.name}</h3>
                    <p>{dish.note}</p>
                  </div>
                  <strong>{dish.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ──────────────────────────────────────── */}
      <section className="story-section" id="story">
        <div className="container">
          <TibetanDivider symbol="༄" />
          <div className="story-grid">
            <div className="story-text">
              <p className="eyebrow">Our story</p>
              <h2>From the rooftops of Dharamsala to your table.</h2>
              <p>
                Lhasa Lounge was born from a simple craving: the warmth of a
                Tibetan kitchen, the fire of Indian spice, and the polish of a
                modern dining room. Our founders grew up between monastery
                kitchens and Delhi street stalls — folding momos before sunrise,
                grinding masalas by hand.
              </p>
              <p>
                Every dish on our menu carries a story from the Himalayan
                foothills. We source our spices from Dharamsala, our vegetables
                from local farmers, and our recipes from three generations of
                family cooking. This isn't fusion — it's home.
              </p>
            </div>
            <div className="story-visual" aria-label="Decorative Tibetan mandala">
              <div className="story-mandala">
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atmosphere ─────────────────────────────────────── */}
      <section className="section atmosphere-section">
        <div className="container atmosphere-grid">
          <div>
            <p className="eyebrow">The lounge</p>
            <h2>Lantern light, steam, spice, and city-night polish.</h2>
          </div>
          <p>
            Lhasa Lounge brings Tibetan comfort food into a modern Asian dining
            room: brass details, saturated color, prayer flag garlands, attentive
            service, and a menu that moves from quiet broths to bright chilli
            heat.
          </p>
        </div>
      </section>

      {/* ── Gallery preview ────────────────────────────────── */}
      <section className="section gallery-section" id="gallery">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Scenes from the room</p>
            <h2>Built for dinner dates, family spreads, and one more round.</h2>
          </div>

          <div className="gallery-grid">
            {galleryMoments.map((moment, index) => (
              <figure className={`gallery-tile tile-${index + 1}`} key={moment}>
                <div className="tile-detail">
                  <span />
                  <span />
                  <span />
                </div>
                <figcaption>{moment}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────── */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What our guests say</p>
              <h2>Every table tells a story.</h2>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <div className="review-card" key={review.author}>
                <div className="review-stars">
                  {"★".repeat(review.stars)}
                </div>
                <p>{review.text}</p>
                <div className="review-author">
                  <div className="review-avatar">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <strong>{review.author}</strong>
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit ──────────────────────────────────────────── */}
      <section className="section visit-section" id="contact">
        <div className="container visit-grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>Book the lounge for tonight.</h2>
            <p>
              128 Snow Lion Lane, Downtown Dharamsala. Walk-ins welcome at the
              bar; reservations recommended for dinner service.
            </p>
            <a className="button button-primary" href="tel:+919876543210">
              Call +91 98765 43210
            </a>
          </div>

          <div className="hours-card" aria-label="Opening hours">
            <div className="hours-card-header">Opening Hours</div>
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
