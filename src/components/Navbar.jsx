import { useEffect, useState } from 'react'
import { Chevron, Close, Logo, Menu } from './icons.jsx'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services', hasMenu: true },
  { label: 'Operations', href: '#operations' },
  { label: 'Talent', href: '#talent' },
  { label: 'Products', href: '#products' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav">
      <a className="nav__brand" href="#main" aria-label="OSS Technologies home">
        <Logo className="nav__logo" />
        <span>OSS Technologies</span>
      </a>

      <nav className="nav__pill" aria-label="Primary">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                {link.label}
                {link.hasMenu && <Chevron className="nav__chev" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__actions">
        <a className="btn btn--light nav__cta" href="#services">Explore Services</a>
        <button
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--accent nav__sheet-cta" href="#services" onClick={() => setOpen(false)}>
            Explore Services
          </a>
        </div>
      )}
    </header>
  )
}
