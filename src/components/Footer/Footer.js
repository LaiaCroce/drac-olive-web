import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>🔥 Drac Olivé</h2>

        <div className="footer-links">
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Drac Olivé · Cultura popular i foc | Tots els drets reservats | creat i fet amb molt ❤️‍🔥 by <a style={{color:"#3BB134"}} href="https://github.com/LaiaCroce">@LaiaCroce</a></p>
      </div>
    </footer>
  );
}

export default Footer;