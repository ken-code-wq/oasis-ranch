import { heroContent, heroStats } from '../data/siteData'

function HeroSection() {
  return (
    <section id="home" className="hero-modern">
      <div className="hero-visual-bleed reveal active delay-1">
        <img src={heroContent.image} alt={heroContent.imageAlt} loading="eager" />
      </div>

      <div className="container hero-modern-inner">
        <div className="hero-text-block reveal active">
          <p className="hero-kicker">{heroContent.kicker}</p>
          <h1 className="hero-title-max">{heroContent.title}</h1>
          <p className="hero-subtitle-clean">{heroContent.subtitle}</p>

          <div className="hero-cta-group">
            <a className="button-dark" href="#gallery">
              Explore The Estate
            </a>
            <a className="button-outline" href="#contact">
              Contact The Ranch
            </a>
          </div>

          <div className="hero-metrics-line">
            {heroStats.map((stat) => (
              <div className="hero-metric-item" key={stat.label}>
                <span className="metric-val">{stat.value}</span>
                <span className="metric-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
