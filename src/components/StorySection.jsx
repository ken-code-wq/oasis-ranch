import { storyContent } from '../data/siteData'

function StorySection() {
  return (
    <section id="heritage" className="goldmine-section">
      <div className="container story-split reveal">
        <div className="goldmine-inner">
          <p className="kicker-mini">Heritage + Systems</p>
          <h2 className="goldmine-title">
            {storyContent.title}
          </h2>
          <p className="goldmine-body">{storyContent.body}</p>
          <a href="#metrics" className="goldmine-link">
            Explore our field intelligence
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <figure className="modern-image-frame">
          <img src={storyContent.image} alt={storyContent.imageAlt} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}

export default StorySection
