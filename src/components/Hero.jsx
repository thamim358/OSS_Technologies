import { ArrowRight, Globe } from './icons.jsx'
import './Hero.css'

const focusAreas = ['Software', 'Automation', 'AI', 'Operations', 'Talent']

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img className="hero__background" src="/hero-background-3d.png" alt="" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__rules" aria-hidden="true"><span /><span /><span /></div>
      </div>

      <div className="hero__inner">
        <div className="hero__lead">
          <p className="hero__note"><Globe className="hero__note-icon" /><span>OSS — OneStopShoppe Pte. Ltd.<br />Singapore-based company</span></p>
          <h1 className="hero__title" id="hero-title">Software, AI &amp;<br />Automation for<br /><em>business.</em></h1>
          <p className="hero__sub">Singapore-based OSS Technologies builds custom software, practical AI solutions and automated workflows, supported by software testing and managed business operations.</p>
          <div className="hero__cta">
            <a className="btn btn--accent hero__go" href="#services">Explore services <span className="hero__go-dot" aria-hidden="true"><ArrowRight /></span></a>
            <a className="hero__secondary" href="#about">Get to know OSS <ArrowRight /></a>
          </div>
          <ul className="hero__stats">
            <li className="stat"><span className="stat__mark" aria-hidden="true">✳</span><span className="stat__value">2022</span><span className="stat__label">Investing in R&D since</span><span className="stat__rule" aria-hidden="true" /></li>
            <li className="stat"><span className="stat__mark" aria-hidden="true">✳</span><span className="stat__value">MY + LK</span><span className="stat__label">Planned APAC expansion</span><span className="stat__rule" aria-hidden="true" /></li>
          </ul>
        </div>
        <aside className="hero__ghost" aria-hidden="true"><div className="ghost__eyebrow">OSS / TECHNOLOGIES</div><div className="ghost__orbit"><span /><span /><span /></div><h2 className="ghost__title">Practical solutions.<br />Connected thinking.</h2><p className="ghost__copy">Development · Automation · AI · Operations</p></aside>
      </div>

      <div className="hero__foot"><span className="hero__watermark" aria-hidden="true">OSS</span><div className="hero__partners"><span className="hero__partners-label">What we do</span><ul>{focusAreas.map((area) => <li key={area}>{area}</li>)}</ul></div></div>
    </section>
  )
}
