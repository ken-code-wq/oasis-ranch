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
