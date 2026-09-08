import { Link, useLocation } from "react-router-dom";
import { restaurant } from "../../data/restaurant";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link className="brand-mark" to="/" aria-label="Lhasa Lounge home">
          <span>LL</span>
          <strong>{restaurant.name}</strong>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              style={
                location.pathname === item.href
                  ? { color: "var(--ink)", background: "rgba(255, 247, 232, 0.1)" }
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link className="nav-cta" to="/contact">
          Reserve
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
