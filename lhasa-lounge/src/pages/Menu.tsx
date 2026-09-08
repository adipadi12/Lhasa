import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TibetanDivider from "../components/common/TibetanDivider";
import { fullMenu } from "../data/menu";

const Menu = () => {
  return (
    <main className="menu-page">
      <Navbar />

      <section className="menu-page-hero">
        <div className="container">
          <p className="eyebrow">From the kitchen</p>
          <h1>Our Menu</h1>
          <p className="subtitle">
            Himalayan flavours, handed down through generations, served with modern warmth.
          </p>
          <TibetanDivider symbol="༄" />
        </div>
      </section>

      <section className="menu-categories">
        <div className="container">
          {fullMenu.map((category) => (
            <div className="menu-category" key={category.name}>
              <div className="menu-category-header">
                <h2>{category.name}</h2>
                <span>{category.subtitle}</span>
              </div>

              <div className="menu-items">
                {category.items.map((item) => (
                  <div className="menu-item" key={item.name}>
                    <div className="menu-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="menu-item-tags">
                          {item.tags.map((tag) => (
                            <span className={`menu-tag ${tag}`} key={tag}>
                              {tag === "spicy" && "🌶 "}
                              {tag === "veg" && "🌿 "}
                              {tag === "popular" && "⭐ "}
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;
