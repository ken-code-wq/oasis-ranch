function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Oasis Ranch</p>
          <p className="footer-note">© {year} Oasis Ranch. Precision grown with purpose.</p>
        </div>

        <div className="footer-links">
          <a href="#heritage">Heritage</a>
          <a href="#objectives">Objectives</a>
          <a href="#contact">Inquiries</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter