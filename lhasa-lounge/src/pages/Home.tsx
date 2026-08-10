import LhasaScene from "../components/hero/LhasaScene";
import Navbar from "../components/navbar/Navbar";

const signatureDishes = [
  {
    name: "Steamed Momo Flight",
    note: "Chicken, vegetable, and chilli cheese momos folded to order with sesame achar.",
    price: "$18",
    color: "card-red",
  },
  {
    name: "Lhasa Beef Thenthuk",
    note: "Hand-pulled noodles, slow broth, daikon, bok choy, and toasted garlic.",
    price: "$21",
    color: "card-green",
  },
  {
    name: "Crisp Tingmo & Curry",
    note: "Cloud-soft Tibetan bread with a fragrant black cardamom potato curry.",
    price: "$16",
    color: "card-gold",
  },
  {
    name: "Sichuan Chilli Tofu",
    note: "Silken tofu, mountain pepper, scallion oil, and smoked chilli crisp.",
    price: "$19",
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
  "Tibetan momos and thukpa",
  "Modern Asian small plates",
  "House-made chilli oils",
  "Warm dining room and bar",
];

const hours = [
  ["Tue - Thu", "5:00 PM - 10:00 PM"],
  ["Fri - Sat", "5:00 PM - 11:30 PM"],
  ["Sun", "12:00 PM - 9:00 PM"],
];

const Home = () => {
  return (
    <main className="restaurant-page">
      <Navbar />

      <section className="hero-section" id="home">
        <div className="hero-scene" aria-hidden="true">
          <LhasaScene />
        </div>
        <div className="hero-shade" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Tibetan soul. Modern Asian fire.</p>
            <h1>Lhasa Lounge</h1>
            <p className="hero-lede">
              A moody, mountain-warm restaurant for hand-folded momos, slow broths,
              chilli-laced small plates, and cocktails built for long tables.
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
            <strong>5 PM - 10 PM</strong>
            <p>Kitchen-led Tibetan and Asian cuisine in a candlelit lounge setting.</p>
          </aside>
        </div>
      </section>

      <section className="intro-band">
        <div className="container intro-grid">
          {serviceNotes.map((note) => (
            <div className="intro-note" key={note}>
              {note}
            </div>
          ))}
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Signature plates</p>
            <h2>Comfort food with a high-altitude glow.</h2>
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

      <section className="section atmosphere-section" id="story">
        <div className="container atmosphere-grid">
          <div>
            <p className="eyebrow">The lounge</p>
            <h2>Lantern light, steam, spice, and city-night polish.</h2>
          </div>
          <p>
            Lhasa Lounge brings Tibetan comfort food into a modern Asian dining room:
            brass details, saturated color, attentive service, and a menu that moves
            from quiet broths to bright chilli heat.
          </p>
        </div>
      </section>

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

      <section className="section visit-section" id="contact">
        <div className="container visit-grid">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>Book the lounge for tonight.</h2>
            <p>
              128 Snow Lion Lane, Downtown. Walk-ins are welcome at the bar; reservations
              are recommended for dinner service.
            </p>
            <a className="button button-primary" href="tel:+15550192742">
              Call +1 555 019 2742
            </a>
          </div>

          <div className="hours-card" aria-label="Opening hours">
            {hours.map(([day, time]) => (
              <div className="hours-row" key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
