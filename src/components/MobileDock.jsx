import { dockItems } from '../data/siteData'

function MobileDock() {
  return (
    <nav className="mobile-dock" aria-label="Mobile navigation">
      {dockItems.map((item) => (
        <a key={item.href} href={item.href} className="dock-item">
          <span className="dock-badge" aria-hidden="true">
            {item.badge}
          </span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default MobileDock