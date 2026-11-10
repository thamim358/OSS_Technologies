import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { ArrowRight, Logo } from './components/icons.jsx'

const services = [
  { number: '01', title: 'Software solutions', intro: 'Reliable software designed around the way your business works.', items: ['Custom software development', 'Business management systems', 'Web and mobile applications', 'Dashboards and reporting', 'Cloud solutions', 'API and system integration'] },
  { number: '02', title: 'Business process automation', intro: 'Turn repetitive manual work into clear, efficient digital workflows.', items: ['Internal business tools', 'Workflow and approval automation', 'Data entry and report automation', 'Notifications and task automation', 'Process optimization'] },
  { number: '03', title: 'AI & intelligent solutions', intro: 'Practical AI that helps teams work smarter and reduce repetitive work.', items: ['AI chatbots and assistants', 'Intelligent document processing', 'AI enhanced workflows', 'Knowledge solutions', 'Intelligent data processing'] },
  { number: '04', title: 'Quality engineering', intro: 'Structured testing and quality practices built into every release.', items: ['Test strategy and planning', 'Functional and integration testing', 'Regression and end to end testing', 'Mobile and web testing', 'Test automation'] },
]

const operations = ['Business operations support', 'Administrative support', 'Accounting & bookkeeping support', 'Data entry & management', 'Document & records management', 'Reporting & MIS support', 'Back office operations', 'Process & workflow support', 'Customer & email support']
const staffing = [
  ['Permanent recruitment', 'Suitable candidates for permanent roles across business functions.'],
  ['Temporary & contract staffing', 'Flexible support for short term projects and workforce needs.'],
  ['Outsourced workforce solutions', 'Dedicated remote teams and resources for operational activities.'],
  ['IT & technical recruitment', 'Technology professionals, developers, QA engineers, automation testers and IT support specialists.'],
]
const process = ['Understand requirements', 'Source candidates', 'Screen & shortlist', 'Coordinate interviews', 'Support placement']

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />

        <section className="section section--about" id="about" aria-labelledby="about-title">
          <div className="section__eyebrow"><span className="eyebrow-dot" /> About OSS Technologies</div>
          <div className="about-grid">
            <h2 id="about-title" className="section__display">One partner.<br /><em>Multiple solutions.</em></h2>
            <div className="about-copy">
              <p>At OSS Technologies, we transform real world business challenges into smart, practical and scalable digital solutions.</p>
              <p>Since 2022, we have invested in research and development, market studies and technology innovation to understand evolving business needs. Our work helps organizations improve efficiency, reduce manual effort and move toward a smarter digital future.</p>
              <a className="text-link" href="#services">Explore our services <ArrowRight /></a>
            </div>
          </div>
          <div className="about-strip" aria-label="Our areas of work"><span>Software development</span><span>AI solutions</span><span>Business automation</span><span>Outsourcing</span></div>
        </section>

        <section className="section section--services" id="services" aria-labelledby="services-title">
          <div className="section__eyebrow"><span className="eyebrow-dot" /> Technology services</div>
          <div className="section__heading-row"><h2 id="services-title" className="section__display">Technology that<br /><em>moves you forward.</em></h2><p>Software development, automation, AI and quality engineering, brought together to simplify operations and improve productivity.</p></div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.number}>
              <div className="service-card__top"><span>{service.number} / 04</span><span aria-hidden="true">↗</span></div>
              <h3>{service.title}</h3><p>{service.intro}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>)}
          </div>
          <p className="service-benefit"><span>Business benefit</span> Less manual work. Better accuracy. Clearer visibility. More confidence in your operations.</p>
        </section>

        <section className="section section--operations" id="operations" aria-labelledby="operations-title">
          <div className="operations__intro"><div className="section__eyebrow"><span className="eyebrow-dot" /> Managed services</div><h2 id="operations-title" className="section__display">Focus on your<br /><em>core business.</em></h2><p>Let OSS handle the operational workload. Our teams in India and Sri Lanka provide reliable back office and business support to Singapore organizations, giving internal teams more room for higher value work.</p></div>
          <div className="operations__list">{operations.map((item, index) => <div className="operations__item" key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<ArrowRight /></div>)}</div>
        </section>

        <section className="section section--talent" id="talent" aria-labelledby="talent-title">
          <div className="section__eyebrow"><span className="eyebrow-dot" /> Manpower consultancy</div>
          <div className="section__heading-row"><h2 id="talent-title" className="section__display">The right people.<br /><em>The right roles.</em></h2><p>Flexible workforce solutions from our Singapore base, with plans to explore Malaysia and Sri Lanka as part of our APAC expansion. We support recruitment and workforce planning, from understanding staffing needs through sourcing, coordination and placement.</p></div>
          <div className="talent-grid">{staffing.map(([title, description]) => <article className="talent-card" key={title}><span aria-hidden="true">✳</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="process"><h3>Our recruitment process</h3><ol>{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></div>
          <p className="talent-note">Flexible workforce solutions · Diverse talent pools · Recruitment coordination · Cost effective staffing approaches · Industry focused recruitment</p>
        </section>

        <section className="section section--products" id="products" aria-labelledby="products-title">
          <div><div className="section__eyebrow"><span className="eyebrow-dot" /> Our products</div><h2 id="products-title" className="section__display">Useful tools for<br /><em>everyday work.</em></h2></div>
          <div className="product-list"><div><span>01</span><h3>Attendance management system</h3><ArrowRight /></div><div><span>02</span><h3>Digital banners</h3><ArrowRight /></div></div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__brand"><Logo /><span>OSS Technologies</span></div>
        <p>One partner. Multiple business solutions.</p>
        <nav aria-label="Footer"><a href="#about">About</a><a href="#services">Services</a><a href="#operations">Operations</a><a href="#talent">Talent</a><a href="#products">Products</a></nav>
        <div className="footer__bottom"><span>OSS — OneStopShoppe Pte. Ltd.</span><a href="#main">Back to top ↑</a></div>
      </footer>
    </>
  )
}
