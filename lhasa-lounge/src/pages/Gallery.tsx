import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TibetanDivider from "../components/common/TibetanDivider";
import { gallery } from "../data/gallery";

const Gallery = () => {
  return (
    <main className="gallery-page">
      <Navbar />

      <section className="gallery-page-hero">
        <div className="container">
          <p className="eyebrow">Scenes from the lounge</p>
          <h1>Gallery</h1>
          <p className="subtitle">
            Copper light, steam rising, prayer flags overhead — glimpses of the Lhasa Lounge experience.
          </p>
          <TibetanDivider symbol="❈" />
        </div>
      </section>

      <section className="gallery-masonry">
        <div className="container">
          <div className="masonry-grid">
            {gallery.map((item) => (
              <div className="masonry-item" key={item.title}>
                <div
                  className="masonry-visual"
                  style={{
                    height: item.height,
                    background: item.gradient,
                  }}
                >
                  {/* Decorative inner elements for visual interest */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 16,
                      border: "1px solid rgba(255, 247, 232, 0.08)",
                      borderRadius: 6,
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      width: 40,
                      height: 40,
                      border: "1px solid rgba(255, 247, 232, 0.15)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <div className="masonry-caption">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
