import { galleryItems } from '../data/siteData'

function GallerySection() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <p className="section-kicker reveal">Visual Archive</p>
        <h2 className="section-title reveal delay-1">Asymmetric Field Stories</h2>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`gallery-item ${item.layout} reveal ${item.delayClass}`}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="gallery-caption">
                <span>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection