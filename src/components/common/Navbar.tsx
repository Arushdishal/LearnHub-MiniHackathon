import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: "72px",
        }}
      >
        <NavLink
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#3563E9",
            letterSpacing: "-0.5px",
          }}
        >
          LearnHub
        </NavLink>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  fontSize: "15px",
                  fontWeight: 500,
                  color: isActive ? "#3563E9" : "#4B5563",
                  transition: "color 0.2s",
                  borderBottom: isActive ? "2px solid #3563E9" : "2px solid transparent",
                  paddingBottom: "4px",
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#374151",
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            borderTop: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "16px 24px",
                    fontWeight: 500,
                    color: isActive ? "#3563E9" : "#4B5563",
                    backgroundColor: isActive ? "#EFF6FF" : "transparent",
                    transition: "all 0.2s",
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;