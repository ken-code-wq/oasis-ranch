import { useState } from 'react'
import { contactContent } from '../data/siteData'

function ContactSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)
    // Replace this with your own Web3Forms access key (get it from https://web3forms.com/)
    formData.append("access_key", "acb5eea2-4d3d-43e5-aa5d-c027097a0ced")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      if (response.ok) {
        setSent(true)
        event.target.reset()
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section bg-[#fcfaf8]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start reveal">
        
        {/* Left Side: Text & Info */}
        <div className="flex flex-col mt-4">
          <p className="section-kicker mb-4">Contact Us</p>
          <h2 className="section-title mb-6">
            Reach out, we&apos;re ready to collaborate
          </h2>
          <p className="text-base text-[var(--muted)] mb-12 max-w-md leading-relaxed">
            Let&apos;s collaborate to bring your ideas to life with creativity, precision, and a shared passion for excellence.
          </p>

          <h3 className="text-xl text-[var(--ink)] mb-6 font-medium">Other info</h3>
          <div className="flex flex-col gap-6 text-[var(--muted)] text-sm font-medium">
            {/* Email */}
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[var(--accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${contactContent.email}`} className="hover:text-[var(--accent)] transition-colors">
                {contactContent.email}
              </a>
            </div>
            {/* Location (From Site Data Only) */}
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-[var(--accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{contactContent.location.dms}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-shell delay-1 bg-transparent border-0 shadow-none p-0">
          <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-6">
            
            <div className="input-field gap-2">
              <span className="text-[13px] text-[var(--ink)] uppercase tracking-wider">Full Name</span>
              <input 
                type="text" 
                name="name" 
                placeholder="Kwame Mensah" 
                required
                className="input-control border-b-2 border-l-0 border-r-0 border-t-0 border-[#e8e6df] rounded-none px-0 py-3 bg-transparent placeholder:text-gray-400 focus:border-[var(--accent)] focus:ring-0 shadow-none"
              />
            </div>

            <div className="input-field gap-2">
              <span className="text-[13px] text-[var(--ink)] uppercase tracking-wider">Email Address</span>
              <input 
                type="email" 
                name="email" 
                placeholder="kwame.mensah@gmail.com" 
                required
                className="input-control border-b-2 border-l-0 border-r-0 border-t-0 border-[#e8e6df] rounded-none px-0 py-3 bg-transparent placeholder:text-gray-400 focus:border-[var(--accent)] focus:ring-0 shadow-none"
              />
            </div>

            <div className="input-field gap-2">
              <span className="text-[13px] text-[var(--ink)] uppercase tracking-wider">Message</span>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Tell us about your organic produce needs..." 
                required
                className="input-control border-b-2 border-l-0 border-r-0 border-t-0 border-[#e8e6df] rounded-none px-0 py-3 bg-transparent placeholder:text-gray-400 focus:border-[var(--accent)] focus:ring-0 shadow-none"
              ></textarea>
            </div>

            <div className="form-actions mt-4">
              <button 
                type="submit"
                disabled={loading || sent}
                className="button-primary w-full justify-center py-4 text-base rounded-full bg-[var(--ink)] text-[var(--card)] hover:bg-[var(--accent)] transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : sent ? 'Inquiry Sent' : 'Send Inquiry'}
              </button>
            </div>
            {sent && (
              <p className="text-center text-sm text-[var(--accent)] mt-2">Thanks! We&apos;ll be in touch soon.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactSection