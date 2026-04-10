import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Replace everything from .hero-section to the end of .story-image-card img
start_idx = content.find('.hero-section')
end_idx = content.find('.gallery-grid {')

if start_idx != -1 and end_idx != -1:
    new_css = """
/* Modern Hero */
.hero-edge {
  position: relative;
  min-height: max(32rem, 90svh);
  display: flex;
  align-items: center;
  padding-block: 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.65) contrast(1.1) saturate(1.1);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(20, 27, 43, 0.88) 0%,
    rgba(20, 27, 43, 0.4) 60%,
    rgba(20, 27, 43, 0) 100%
  );
}

.hero-content-overlay {
  position: relative;
  z-index: 10;
  color: #ffffff;
  max-width: 58rem;
  padding-top: 4rem;
}

.hero-kicker-typo {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: var(--primary-container);
  margin-bottom: 1.5rem;
}

.hero-massive-title {
  font-family: var(--font-headline);
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.04em;
  margin: 0 0 1.5rem;
}

.hero-lead-text {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 42ch;
  line-height: 1.6;
  margin-bottom: 2.8rem;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.button-solid {
  background: var(--surface-container-lowest);
  color: var(--on-surface);
  font-weight: 700;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  font-size: 0.95rem;
  transition: transform 250ms, box-shadow 250ms;
}
.button-solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

.button-clear {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  font-weight: 600;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  font-size: 0.95rem;
  transition: background 250ms, border-color 250ms;
  backdrop-filter: blur(8px);
}
.button-clear:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}

.hero-data-row {
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 2rem;
}

.data-item {
  display: flex;
  flex-direction: column;
}

.data-val {
  font-family: var(--font-headline);
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
}

.data-lbl {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-container);
  font-weight: 600;
  margin-top: 0.4rem;
}

/* Modern Story Split */
.story-modern {
  background: var(--surface-container-lowest);
  padding-block: clamp(5rem, 10vw, 8rem);
  position: relative;
  z-index: 10;
}

.story-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 6vw, 6rem);
  align-items: center;
}

.kicker-mini {
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.story-headline {
  font-family: var(--font-headline);
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 0 0 2rem;
  color: var(--on-surface);
}

.story-body-large {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.6;
  color: var(--on-surface-variant);
  margin-bottom: 3rem;
  max-width: 44ch;
}

.link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  font-size: 1.05rem;
  font-weight: 700;
  text-decoration: none;
  transition: gap 300ms ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
}

.link-arrow:hover {
  gap: 1rem;
}

.modern-image-frame {
  aspect-ratio: 4/5;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 32px 64px rgba(0,0,0,0.08);
  transform: rotate(-1deg);
  transition: transform 500ms;
}

.modern-image-frame:hover {
  transform: rotate(0deg);
}

.modern-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

"""
    
    final_content = content[:start_idx] + new_css + content[end_idx:]
    with open('src/index.css', 'w') as f:
        f.write(final_content)

