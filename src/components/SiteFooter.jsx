function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <img src="/oasis_ranch_logo.png" alt="Oasis Ranch Logo" width="24" height="24" />
            Oasis Ranch
          </div>
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