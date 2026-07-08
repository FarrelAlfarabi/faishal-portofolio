import React from 'react';
import './App.css';
import data from './data';

/* ─── Topbar ─────────────────────────────────────────────────── */
function Topbar({ data }) {
  return (
    <header className="topbar">
      <div className="container row">
        <a href="#hero" className="brand">
          {data.shortName}<span>.</span>
        </a>
        <nav className="nav">
          {[
            ['About', 'about'],
            ['Experience', 'experience'],
            ['Education', 'education'],
            ['Publications', 'publications'],
            ['Skills', 'skills'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <a className="btn small" href="/cv.pdf" download>Download CV</a>
      </div>
    </header>
  );
}

/* ─── Highlights bar ─────────────────────────────────────────── */
function Highlights({ highlights }) {
  return (
    <div className="stats">
      {highlights.map((h) => (
        <div className="stat" key={h.label}>
          <div className="stat-value">{h.value}</div>
          <div className="stat-label">{h.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
function Hero({ data }) {
  return (
    <section id="hero" className="hero">
      <div className="container grid2">
        <div>
          <p className="eyebrow">{data.tagline}</p>
          <h1>
            Hi, I am <span className="accent">{data.shortName}</span>.<br />
            Let's build something meaningful.
          </h1>
          <p className="lede">{data.about}</p>
          <div className="row gap">
            <a href="#experience" className="btn">See Experience</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
          <div className="row meta">
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <span>•</span>
            <a href={`tel:${data.phone.replace(/\s|-/g, '')}`}>{data.phone}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="tilt"></div>
          <img 
            src="/hero.jpg" 
            alt="Faishal Zuhair" 
            style={{
              height: 500,
              width: '100%',
              objectFit: 'cover',
              borderRadius: 'calc(var(--radius-lg) - 4px)',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
      </div>
      <div className="container">
        <Highlights highlights={data.highlights} />
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────────── */
function About({ data }) {
  return (
    <section id="about" className="section alt">
      <div className="container grid2">
        <img 
          src="/about.jpg" 
          alt="About Faishal Zuhair" 
          style={{ 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            minHeight: 360, 
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div>
          <p className="eyebrow" style={{ color: 'var(--gold)', background: 'var(--gold-weak)', border: '1px solid #e8d49a', borderRadius: 999, display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', padding: '5px 14px', textTransform: 'uppercase', marginBottom: 16 }}>
            About Me
          </p>
          <h2>A marketer who runs on data and builds on relationships.</h2>
          <p>{data.about}</p>
          <dl className="info">
            <div><dt>Name</dt><dd>{data.name}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${data.email}`}>{data.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${data.phone.replace(/\s|-/g, '')}`}>{data.phone}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={data.linkedin} target="_blank" rel="noreferrer">Profile ↗</a></dd></div>
            <div><dt>Location</dt><dd>{data.location}</dd></div>
            <div><dt>Blog</dt><dd><a href={data.blog} target="_blank" rel="noreferrer">faishalzu.blogspot.com ↗</a></dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─────────────────────────────────────────────── */
function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Career</p>
        <h2>Work Experience</h2>
        <div className="grid2" style={{ marginTop: 32 }}>
          <div>
            {experiences.slice(0, 3).map((e, i) => (
              <ExpItem key={i} exp={e} />
            ))}
          </div>
          <div>
            {experiences.slice(3).map((e, i) => (
              <ExpItem key={i} exp={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpItem({ exp }) {
  return (
    <div className="exp-item">
      <div className="exp-role">{exp.role}</div>
      <div className="exp-meta">
        <span className="company">{exp.company}</span>
        {' · '}
        {exp.period}
        {' · '}
        {exp.location}
      </div>
      <ul className="exp-bullets">
        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

/* ─── Education ──────────────────────────────────────────────── */
function Education({ education }) {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Academic Background</p>
        <h2>Education</h2>
        <div className="grid2" style={{ marginTop: 28 }}>
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-meta">{e.period}</div>
              {e.gpa && <span className="edu-gpa">{e.gpa}</span>}
              {e.note && <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 10, marginBottom: 0 }}>{e.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Publications ───────────────────────────────────────────── */
function Publications({ publications }) {
  return (
    <section id="publications" className="section">
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Research</p>
        <h2>Publications</h2>
        <div style={{ marginTop: 28 }}>
          {publications.map((p, i) => (
            <div className="pub-card" key={i}>
              <div className="pub-icon">{p.icon}</div>
              <div>
                <div className="pub-title">{p.title}</div>
                <div className="pub-journal">{p.journal}</div>
                <div className="pub-meta">{p.meta}</div>
                <a className="pub-link" href={p.url} target="_blank" rel="noreferrer">
                  Read paper ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ─────────────────────────────────────────────────── */
function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-header">
        <span>{name}</span>
        <span style={{ color: 'var(--muted)' }}>{level}%</span>
      </div>
      <div className="bar">
        <span style={{ width: `${level}%` }}></span>
      </div>
    </div>
  );
}

function Skills({ skills }) {
  const half = Math.ceil(skills.length / 2);
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Capabilities</p>
        <h2>Skills & Tools</h2>
        <div className="grid2" style={{ marginTop: 28 }}>
          <div>{skills.slice(0, half).map(s => <SkillBar key={s.name} {...s} />)}</div>
          <div>{skills.slice(half).map(s => <SkillBar key={s.name} {...s} />)}</div>
        </div>
      </div>
    </section>
  );
}

/* ─── Certifications ─────────────────────────────────────────── */
function Certifications({ certifications }) {
  return (
    <section className="section">
      <div className="container">
        <p style={{ color: 'var(--muted)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Credentials</p>
        <h2>Certifications</h2>
        <div className="grid3" style={{ marginTop: 24 }}>
          {certifications.map((c, i) => (
            <div className="cert-item" key={i}>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org} · {c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────── */
function Contact({ data }) {
  return (
    <section id="contact" className="section cta">
      <div className="container grid2">
        <div>
          <h2>Let's work together.</h2>
          <p>Whether it's a business challenge, a marketing project, or an opportunity — reach out.</p>
          <ul className="list" style={{ marginTop: 20 }}>
            <li><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${data.phone.replace(/\s|-/g, '')}`}>{data.phone}</a></li>
            <li><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noreferrer">View Profile ↗</a></li>
            <li><strong>Portfolio:</strong> <a href={data.linktree} target="_blank" rel="noreferrer">linktr.ee/faishalzu ↗</a></li>
          </ul>
        </div>
        {/* Replace YOUR_FORM_ID with your Formspree ID or remove the form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="card form"
        >
          <div className="row" style={{ gap: 12, marginBottom: 12 }}>
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <input name="subject" placeholder="Subject" style={{ marginBottom: 12 }} required />
          <textarea name="message" rows={4} placeholder="Message" required></textarea>
          <button type="submit" className="btn gold">Send Message</button>
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container" style={{ padding: '48px 20px 0' }}>
        <div className="grid4">
          <div>
            <h4>Faishal Zuhair</h4>
            <p style={{ fontSize: 14, marginBottom: 16 }}>
              Open to business development, marketing strategy, and B2B consulting opportunities.
            </p>
            <a className="btn small" href="/cv.pdf" download>Download CV</a>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul className="list small">
              {[['About', 'about'], ['Experience', 'experience'], ['Education', 'education'], ['Publications', 'publications'], ['Skills', 'skills'], ['Contact', 'contact']].map(([l, id]) => (
                <li key={id}><a href={`#${id}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Education</h5>
            <ul className="list small">
              <li>Universitas Indonesia — MM</li>
              <li>Universitas Diponegoro — S1</li>
              <li>UKM Malaysia — Exchange</li>
              <li>Binus — Project Mgmt</li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul className="list small">
              <li><a href={`mailto:${data.email}`}>Email</a></li>
              <li><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={data.blog} target="_blank" rel="noreferrer">Blog</a></li>
              <li><a href={data.linktree} target="_blank" rel="noreferrer">Linktree</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Faishal Zuhair Bimo Dewantoro. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Topbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Experience experiences={data.experiences} />
      <Education education={data.education} />
      <Publications publications={data.publications} />
      <Skills skills={data.skills} />
      <Certifications certifications={data.certifications} />
      <Contact data={data} />
      <Footer data={data} />
    </>
  );
}
