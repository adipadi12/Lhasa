import { navigation } from "../../data/navigation";
import { restaurant } from "../../data/restaurant";

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="Lhasa Lounge home">
          <span>LL</span>
          <strong>{restaurant.name}</strong>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Reserve
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
