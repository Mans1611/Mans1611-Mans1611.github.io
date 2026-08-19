import { useState, useEffect, useRef } from 'react'

const profilePhoto = `${import.meta.env.BASE_URL}images/Pic_dessert.jpeg`
const swcLogo = `${import.meta.env.BASE_URL}images/Gemini_Generated_Image_j6tfstj6tfstj6tf.png`

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'YouTube', 'LeetCode', 'Education']

const SKILLS = [
  { name: 'LLMs, RAG & Prompt Engineering', pct: 92 },
  { name: 'LangChain, LangGraph & Agentic Systems', pct: 90 },
  { name: 'Python & FastAPI', pct: 90 },
  { name: 'Voice AI & WebRTC Streaming', pct: 82 },
  { name: 'Model Serving & Deployment', pct: 85 },
  { name: 'Vector Databases & Data Stores', pct: 84 },
  { name: 'PyTorch / TensorFlow', pct: 88 },
  { name: 'Computer Vision', pct: 85 },
  { name: 'Mathematics & Statistics', pct: 88 },
  { name: 'MLOps & Deployment', pct: 85 },
  { name: 'RAG & Vector Search', pct: 90 },
]

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'ElectroPi · Maadi, Egypt',
    period: 'Feb 2026 – Present',
    desc: 'Build production-grade Arabic RAG applications, multi-agent systems, and voice AI agents. Own architecture, implementation, model integration, and API delivery across client-facing GenAI products.',
    tags: ['RAG', 'LangChain', 'LangGraph', 'FastAPI', 'LiveKit', 'Hugging Face'],
  },
  {
    role: 'AI Developer',
    company: 'ElectroPi · Maadi, Egypt',
    period: 'Feb 2025 – Feb 2026',
    desc: 'Worked on RAG pipelines, prompt engineering, LLM automation, model deployment, and workflow optimization while balancing military service responsibilities.',
    tags: ['RAG', 'Prompt Engineering', 'LLMs', 'FastAPI', 'Deployment'],
  },
  {
    role: 'AI Intern',
    company: 'ElectroPi · Maadi, Egypt',
    period: 'Oct 2024 – Feb 2025',
    desc: 'Built and deployed LLM applications, LangChain automation pipelines, scalable FastAPI services, and real-time voice communication workflows using WebRTC.',
    tags: ['LangChain', 'FastAPI', 'WebRTC', 'LLMs', 'Python'],
  },
]

const PROJECTS = [
  {
    name: 'SWC-OCR',
    desc: 'Video-to-LaTeX notes generator that turns YouTube math videos into structured, publication-ready LaTeX and PDF notes. It samples distinct frames, reconstructs formulas, fixes compilation errors with an agentic loop, and publishes output to Google Drive.',
    tags: ['Python', 'Gemini API', 'Groq API', 'OpenCV', 'OCR', 'XeLaTeX'],
  },
  {
    name: 'Resume Maker',
    desc: 'AI-powered resume optimization system that compares a candidate profile against LinkedIn job descriptions, validates fit, and highlights the most relevant skills and experience. Built as a Chrome Extension for a seamless workflow.',
    tags: ['React', 'LLMs', 'Gemini', 'LangChain', 'Prompt Engineering'],
  },
]

const PERSONAL_PROJECTS: typeof PROJECTS = []
const YT_VIDEOS: { title: string; views: string; img: string }[] = []

const EDUCATION = {
  degree: 'B.Sc. in Computer & Systems Engineering',
  institution: 'Faculty of Engineering · Ain Shams University',
  year: '2019 – 2024',
  gpa: 'Overall Grade: B',
}

const COURSES = [
  { name: 'Graduation Project: So2alak', provider: 'Grade: A', year: '2024' },
  { name: 'AWS, Azure & Docker', provider: 'Cloud & DevOps', year: 'Stack' },
  { name: 'MongoDB, Redis & PostgreSQL', provider: 'Databases', year: 'Stack' },
  { name: 'Pinecone & Qdrant', provider: 'Vector Databases', year: 'Stack' },
  { name: 'Deep Learning Specialization', provider: 'DeepLearning.AI', year: '2021' },
  { name: 'Full Stack Deep Learning', provider: 'UC Berkeley', year: '2022' },
  { name: 'Reinforcement Learning', provider: 'DeepMind × UCL', year: '2022' },
  { name: 'MLOps Fundamentals', provider: 'Google Cloud', year: '2023' },
  { name: 'LLM Engineering', provider: 'Hugging Face', year: '2023' },
  { name: 'Mathematics for ML', provider: 'Imperial College London', year: '2020' },
  { name: 'Probabilistic Graphical Models', provider: 'Stanford Online', year: '2021' },
  { name: 'Computer Vision with CNNs', provider: 'fast.ai', year: '2022' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Mans1611' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mansour-yousef-90366b21b/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@swc1611' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1V2M3vW1ykd2GLuSDCXFi_8K7veHzdATw/view?usp=drive_link' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/user3457d/' },
  { label: 'Email', href: 'mailto:mans.yousef1611@gmail.com' },
]

function useScrollSpy() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const sections = NAV_ITEMS.map((id) => document.getElementById(id.toLowerCase()))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(pct) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text)' }}>{name}</span>
        <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{pct}%</span>
      </div>
      <div style={{ height: '2px', background: 'var(--border)', borderRadius: '1px' }}>
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return <span className="tag">{label}</span>
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="12" fill="var(--yt-red)" opacity="0.9" />
      <polygon points="9.5,7 18,12 9.5,17" fill="white" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy()

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ── NAV ───────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: '1px solid var(--border)',
          background: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={() => scrollTo('about')}
            className="font-display"
            style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            &lt;MansourYousef /&gt;
          </button>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: activeSection === item.toLowerCase() ? 'var(--text)' : 'var(--text-muted)',
                }}
              >
                {item}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1V2M3vW1ykd2GLuSDCXFi_8K7veHzdATw/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                padding: '0.4rem 1rem',
                border: '1px solid var(--accent)',
                borderRadius: '3px',
                color: 'var(--text)',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              RESUME ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '4px' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          paddingTop: '120px',
          paddingBottom: '100px',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '120px 1.5rem 100px',
        }}
      >
        <div className="hero-layout">
        <div style={{ maxWidth: '680px' }}>
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>// Mansour Yousef · AI Engineer</p>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            GenAI systems<br />
            <span style={{ color: 'var(--text-muted)' }}>built for</span><br />
            the real world.
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: 'var(--text-dim)',
              maxWidth: '560px',
              marginBottom: '2.5rem',
            }}
          >
            AI Engineer with 2 years of experience shipping production LLM and agentic systems —
            from RAG pipelines and multi-agent workflows to voice AI and GPU-backed model serving.
            I take solutions from architecture through deployment.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { val: '2+', label: 'Years in AI' },
              { val: 'RAG', label: 'Production pipelines' },
              { val: 'Voice', label: 'AI agents' },
              { val: 'Arabic', label: '& English' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div
                  className="font-display"
                  style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.3rem' }}
                >
                  {val}
                </div>
                <div className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('Projects')}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                padding: '0.7rem 1.5rem',
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollTo('YouTube')}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                padding: '0.7rem 1.5rem',
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: '3px',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#555' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
            >
              WATCH SWC →
            </button>
          </div>
        </div>

        <div className="hero-photo-wrap photo-float">
          <div className="hero-photo-glow" />
          <img className="hero-photo" src={profilePhoto} alt="Mansour Yousef" />
          <div className="hero-photo-caption font-mono">CAIRO, EGYPT · AI ENGINEER</div>
        </div>
        </div>

        {/* Skills */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem 3rem',
          }}
        >
          {SKILLS.map((s) => (
            <SkillBar key={s.name} name={s.name} pct={s.pct} />
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <section
        id="experience"
        style={{
          borderTop: '1px solid var(--border)',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'clamp(180px, 30%, 280px) 1fr', gap: '4rem', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: '80px' }}>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>02 / Work</p>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}
              >
                Professional<br />Experience
              </h2>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)' }}>
                Production AI delivery across RAG, multi-agent workflows, voice interfaces, and model APIs.
              </p>
            </div>

            <div>
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={exp.company}
                  style={{
                    position: 'relative',
                    paddingLeft: '2rem',
                    paddingBottom: i < EXPERIENCE.length - 1 ? '2.5rem' : 0,
                  }}
                >
                  {/* dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '6px',
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '2px solid var(--accent)',
                      background: 'var(--bg)',
                      zIndex: 1,
                    }}
                  />
                  {/* line */}
                  {i < EXPERIENCE.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '7px',
                        top: '21px',
                        bottom: '-4px',
                        width: '1px',
                        background: 'linear-gradient(to bottom, var(--border), transparent)',
                      }}
                    />
                  )}

                  <div
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '1.5rem',
                    }}
                    className="card-hover"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>{exp.role}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--accent-bright)' }}>{exp.company}</p>
                      </div>
                      <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-dim)', marginBottom: '1rem' }}>{exp.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.tags.map((t) => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section
        id="projects"
        style={{
          borderTop: '1px solid var(--border)',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>03 / Work</p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Selected Projects
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="card-hover"
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.75rem',
                  borderRight: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{p.name}</h3>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-dim)', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                  {p.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
            ))}
          </div>

          {false && <>{/* Personal Projects */}
          <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em' }}
              >
                Personal Projects
              </h2>
              <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', border: '1px solid var(--border)', padding: '0.2rem 0.5rem', borderRadius: '3px' }}>
                SIDE WORK
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1px',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {PERSONAL_PROJECTS.map((p) => (
                <div
                  key={p.name}
                  className="card-hover"
                  style={{
                    background: 'var(--bg-card-2)',
                    padding: '1.75rem',
                    borderRight: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700 }}>{p.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                      <StarIcon />
                      <span className="font-mono" style={{ fontSize: '0.65rem' }}>{p.stars}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-dim)', flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                    {p.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div></>}
        </div>
      </section>

      {/* ── YOUTUBE ───────────────────────────────────────────── */}
      <section
        id="youtube"
        style={{ background: 'var(--yt-bg)', borderTop: '1px solid #1a1a1a', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <p
                className="font-mono"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--yt-red-bright)', marginBottom: '0.75rem' }}
              >
                04 / YouTube Channel
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '0.75rem' }}>
                <img
                  src={swcLogo}
                  alt="SWC YouTube channel logo"
                  style={{ width: '64px', height: '64px', objectFit: 'contain', borderRadius: '8px' }}
                />
                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: '#fff',
                  }}
                >
                  SWC
                </h2>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555', maxWidth: '480px', lineHeight: 1.7 }}>
                Math & AI education for engineers who want to understand the theory behind the tools.
                No fluff — just derivations, visualizations, and intuition.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              {[
                { val: 'SWC', label: 'YouTube channel' },
                { val: 'AI', label: 'Learning content' },
                { val: 'Soon', label: 'New videos' },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: 'right' }}>
                  <div
                    className="font-display"
                    style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}
                  >
                    {val}
                  </div>
                  <div className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: '#555', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: '1rem',
            }}
          >
            {YT_VIDEOS.map((v) => (
              <div
                key={v.title}
                className="yt-thumb"
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid #1c1c1c',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                  <img
                    src={v.img}
                    alt={v.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* red tint overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(139,26,26,0.25) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }} />
                  <div className="play-btn">
                    <PlayIcon />
                  </div>
                  {/* views badge */}
                  <div
                    className="font-mono"
                    style={{
                      position: 'absolute', bottom: '8px', right: '8px',
                      background: 'rgba(0,0,0,0.8)', color: '#ccc',
                      fontSize: '0.6rem', letterSpacing: '0.05em',
                      padding: '2px 7px', borderRadius: '2px',
                    }}
                  >
                    {v.views} views
                  </div>
                </div>
                <div style={{ padding: '0.75rem 0.875rem', background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: '#ccc', fontWeight: 500 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a
              href="https://www.youtube.com/@swc1611"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                padding: '0.75rem 2rem',
                background: 'var(--yt-red)',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--yt-red-bright)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--yt-red)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.13C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.56A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.12c1.84.56 9.38.56 9.38.56s7.54 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.12C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              SUBSCRIBE TO SWC
            </a>
          </div>
        </div>
      </section>

      {/* ── SOFTWARE DEVELOPMENT ─────────────────────────────── */}
      <section
        id="software-skills"
        style={{ borderTop: '1px solid var(--border)', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>05 / Software Development</p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}
          >
            Full-Stack Development
          </h2>
          <p style={{ maxWidth: '560px', color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Building responsive interfaces, scalable APIs, and reliable backend infrastructure for end-to-end products.
          </p>

          <div className="software-skills-grid">
            <article className="software-skill-card">
              <div className="software-skill-number font-mono">01 / FRONTEND</div>
              <h3 className="font-display">Frontend</h3>
              <p>Interfaces designed for clear, responsive product experiences.</p>
              <div className="software-skill-tags">
                <Tag label="React" />
                <Tag label="Redux" />
                <Tag label="HTML" />
                <Tag label="CSS" />
              </div>
            </article>

            <article className="software-skill-card">
              <div className="software-skill-number font-mono">02 / BACKEND</div>
              <h3 className="font-display">Backend</h3>
              <p>APIs, services, databases, and infrastructure for production systems.</p>
              <div className="software-skill-tags">
                <Tag label="FastAPI" />
                <Tag label="Node.js" />
                <Tag label="Express" />
                <Tag label="PostgreSQL" />
                <Tag label="MySQL" />
                <Tag label="MongoDB" />
                <Tag label="RabbitMQ" />
                <Tag label="Docker" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── LEETCODE ──────────────────────────────────────────── */}
      <section
        id="leetcode"
        style={{ borderTop: '1px solid var(--border)', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div>
              <p className="section-label" style={{ marginBottom: '0.75rem' }}>06 / Problem Solving</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                LeetCode Progress
              </h2>
            </div>
            <a
              href="https://leetcode.com/u/user3457d/"
              target="_blank"
              rel="noreferrer"
              className="leetcode-link font-mono"
            >
              VIEW PROFILE ↗
            </a>
          </div>

          <div className="leetcode-panel">
            <div className="leetcode-total">
              <svg className="leetcode-ring" viewBox="0 0 220 220" aria-hidden="true">
                <circle className="leetcode-ring-track" cx="110" cy="110" r="86" />
                <circle className="leetcode-ring-easy" cx="110" cy="110" r="86" />
                <circle className="leetcode-ring-medium" cx="110" cy="110" r="86" />
                <circle className="leetcode-ring-hard" cx="110" cy="110" r="86" />
              </svg>
              <div className="leetcode-score">
                <div><strong>450</strong><span>/4029</span></div>
                <p>✓ Solved</p>
                <small>22 Attempting</small>
              </div>
            </div>
            <div className="leetcode-breakdown">
              <div className="leetcode-stat easy"><span>Easy</span><strong>210<small>/960</small></strong></div>
              <div className="leetcode-stat medium"><span>Med.</span><strong>219<small>/2103</small></strong></div>
              <div className="leetcode-stat hard"><span>Hard</span><strong>21<small>/966</small></strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <section
        id="education"
        style={{
          borderTop: '1px solid var(--border)',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>07 / Education</p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '3rem' }}
          >
            Education & Courses
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {/* Degree */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="card-hover"
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(to right, var(--accent), var(--accent-bright))',
                }}
              />
              <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--accent-bright)', textTransform: 'uppercase' }}>
                Bachelor of Science
              </span>
              <h3
                className="font-display"
                style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}
              >
                {EDUCATION.degree}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
                {EDUCATION.institution}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  {EDUCATION.year}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>GPA</span>
                  <span
                    className="font-display"
                    style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-bright)' }}
                  >
                    {EDUCATION.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--text)' }}>
                Completed Courses
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {COURSES.map((c, i) => (
                  <div
                    key={c.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.65rem 0',
                      borderBottom: i < COURSES.length - 1 ? '1px solid var(--border)' : 'none',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: '0.8rem', fontWeight: 500, marginBottom: '0.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {c.name}
                      </p>
                      <p className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
                        {c.provider}
                      </p>
                    </div>
                    <span className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {c.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '3rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <p
              className="font-display"
              style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}
            >
            &lt;MansourYousef /&gt;
            </p>
            <p className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              AI Engineer · GenAI & Agentic Systems
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="font-mono" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            © 2026 · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
