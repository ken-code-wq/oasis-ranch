import { profileSections, profileVisuals } from '../data/siteData'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="intent-check-icon">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ObjectivesSection() {
  const objectivesVisual = profileVisuals.objectives

  return (
    <section id="objectives" className="section section-intent">
      <div className="container intent-grid reveal">
        <figure className="intent-media-wrap">
          <img src={objectivesVisual.primaryImage} alt={objectivesVisual.primaryAlt} className="intent-media-main" loading="lazy" />
          <img src={objectivesVisual.secondaryImage} alt={objectivesVisual.secondaryAlt} className="intent-media-float" loading="lazy" />
        </figure>

        <article className="intent-content">
          <h2 className="intent-title">Our Objectives</h2>
          <p className="intent-body">
            Our objective is to positively impact the communities in which we operate.
          </p>
          <ul className="intent-list">
            {profileSections.objectives.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ObjectivesSection
