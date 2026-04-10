import { profileSections, profileVisuals } from '../data/siteData'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="intent-check-icon">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VisionSection() {
  const visionVisual = profileVisuals.vision

  return (
    <section id="vision" className="section section-intent">
      <div className="container intent-grid intent-grid-reverse reveal">
        <article className="intent-content">
          <h2 className="intent-title">Our Vision</h2>
          <p className="intent-body">{profileSections.vision}</p>
          <ul className="intent-list">
            {visionVisual.points.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <figure className="intent-media-wrap">
          <img src={visionVisual.primaryImage} alt={visionVisual.primaryAlt} className="intent-media-main" loading="lazy" />
          <img src={visionVisual.secondaryImage} alt={visionVisual.secondaryAlt} className="intent-media-float" loading="lazy" />
        </figure>
      </div>
    </section>
  )
}

export default VisionSection
