import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🔥 Drac Olivé 🐉</h2>

      <div style={styles.links}>
        <Link to="/">Inici</Link>
        <Link to="/colla">Colla</Link>
        <Link to="/events">Events</Link>
        <Link to="/merch">Merchandising</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "black",
    color: "white",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;