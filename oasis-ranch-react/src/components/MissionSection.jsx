import { profileSections, profileVisuals } from '../data/siteData'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="intent-check-icon">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MissionSection() {
  const missionVisual = profileVisuals.mission

  return (
    <section id="mission" className="section section-intent">
      <div className="container intent-grid reveal">
        <figure className="intent-media-wrap">
          <img src={missionVisual.primaryImage} alt={missionVisual.primaryAlt} className="intent-media-main" loading="lazy" />
          <img src={missionVisual.secondaryImage} alt={missionVisual.secondaryAlt} className="intent-media-float" loading="lazy" />
        </figure>

        <article className="intent-content">
          <h2 className="intent-title">Our Mission</h2>
          <p className="intent-body">{profileSections.mission}</p>
          <ul className="intent-list">
            {missionVisual.points.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default MissionSection
