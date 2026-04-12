import { useEffect } from 'react'
import TopBar from './components/TopBar'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import GallerySection from './components/GallerySection'
import MissionSection from './components/MissionSection'
import VisionSection from './components/VisionSection'
import ObjectivesSection from './components/ObjectivesSection'
import ContactSection from './components/ContactSection'
import LocationSection from './components/LocationSection'
import SiteFooter from './components/SiteFooter'
import MobileDock from './components/MobileDock'

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    
    // Add small delay before observing to allow DOM to settle
    const timeout = setTimeout(() => {
      revealElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timeout)
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="site-shell">
      <TopBar />
      <main>
        <HeroSection />
        <div className="py-10 bg-white">
          <StorySection />
        </div>
        <GallerySection />
        <MissionSection />
        <VisionSection />
        <ObjectivesSection />
        <ContactSection />
        <LocationSection />
      </main>
      <SiteFooter />
      {/* <MobileDock /> */}
    </div>
  )
}

export default App
