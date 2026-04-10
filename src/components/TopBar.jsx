import { useEffect, useState } from 'react'
import { navItems } from '../data/siteData'

function TopBar() {
  const [isHero, setIsHero] = useState(true)

  useEffect(() => {
    const heroSection = document.getElementById('home')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHero(entry.isIntersecting)
      },
      { threshold: 0.55 }
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`topbar ${isHero ? 'is-hero' : 'is-scrolled'}`}>
      <div className="container topbar-inner reveal">
        <a href="#home" className="brand" aria-label="Go to top of page">
          <span className="brand-mark" aria-hidden="true"></span>
          Oasis Ranch
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button-dark nav-btn" href="#contact">
          Plan A Visit
        </a>
      </div>
    </header>
  )
}

export default TopBar
