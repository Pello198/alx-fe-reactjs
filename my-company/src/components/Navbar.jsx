import { Link } from "react-router-dom";

function Navbar() {
  const navbarContainer = {
    backgroundColor: "#f0f0f0",           // big box background
    borderBottom: "3px solid #ccc",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  };

  const linkBox = {
    backgroundColor: "#007bff",           // blue box
    padding: "10px 18px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    border: "2px solid transparent",
    transition: "0.3s",                   // makes hover smooth
  };

  // we use a function so we can modify on hover
  const linkHover = {
    backgroundColor: "#0056b3",           // darker blue on hover
    border: "2px solid #003f80",
    cursor: "pointer",
  };

  return (
    <nav style={navbarContainer}>
      <Link
        to="/"
        style={linkBox}
        onMouseOver={(e) => Object.assign(e.target.style, linkHover)}
        onMouseOut={(e) => Object.assign(e.target.style, linkBox)}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkBox}
        onMouseOver={(e) => Object.assign(e.target.style, linkHover)}
        onMouseOut={(e) => Object.assign(e.target.style, linkBox)}
      >
        About
      </Link>
      <Link
        to="/services"
        style={linkBox}
        onMouseOver={(e) => Object.assign(e.target.style, linkHover)}
        onMouseOut={(e) => Object.assign(e.target.style, linkBox)}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={linkBox}
        onMouseOver={(e) => Object.assign(e.target.style, linkHover)}
        onMouseOut={(e) => Object.assign(e.target.style, linkBox)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
