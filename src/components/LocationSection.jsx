import { contactContent } from '../data/siteData'

function LocationSection() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    contactContent.location.decimal
  )}&t=k&output=embed`

  return (
    <section id="location" className="section bg-[var(--bg)]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start reveal">
          <div className="md:w-1/4 flex flex-col gap-4 pt-4">
            <h2 className="section-title">Location</h2>
            <div className="flex flex-col gap-1 text-[var(--muted)] mt-2">
              <p className="text-[13px] uppercase tracking-wider text-[var(--ink)] mb-2">Coordinates</p>
              <p>{contactContent.location.dms}</p>
              <p className="text-sm">{contactContent.location.decimal}</p>
              <a
                href={contactContent.location.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block w-fit mt-4 text-[var(--accent)] border-b-2 border-transparent hover:text-[#11c95f] hover:border-[var(--accent)] transition-all pb-0"
              >
                Open In Google Maps
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/4 h-[32rem] bg-[#ece6d8] rounded-[2rem] overflow-hidden shadow-soft">
            <iframe
              title="Oasis Ranch Location"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
