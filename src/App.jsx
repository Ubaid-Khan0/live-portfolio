import React, { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";

import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  X,
  Cpu,
  Eye,
  BarChart3,
  Server,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  GitBranch,
  Star,
  Users,
  CalendarDays
} from "lucide-react";


/* =========================
   PERSONAL INFORMATION
========================= */

const GITHUB_USER = "Ubaid-Khan0";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ubaid-khan-88141a2a7";

const PHONE = "03347562585";
const EMAIL = "ubaid102020@gmail.com";


/* =========================
   SKILLS
========================= */

const skills = [
  {
    name: "Python",
    level: 90,
    icon: Terminal
  },
  {
    name: "Computer Vision",
    level: 86,
    icon: Eye
  },
  {
    name: "OpenCV",
    level: 84,
    icon: Eye
  },
  {
    name: "Pandas & NumPy",
    level: 82,
    icon: BarChart3
  },
  {
    name: "YOLO / DeepFace",
    level: 78,
    icon: BrainCircuit
  },
  {
    name: "Flask / Backend",
    level: 76,
    icon: Server
  },
  {
    name: "React",
    level: 72,
    icon: Code2
  },
  {
    name: "SQL / Databases",
    level: 70,
    icon: Database
  }
];


/* =========================
   FEATURED PROJECTS
========================= */

const featuredKeywords = [
  {
    match: "smart-door-system",
    title: "Smart Door Access Controller",
    description:
      "A multi-layer access concept combining face recognition, fingerprint verification and PIN authentication."
  },
  {
    match: "face_recognition_project",
    title: "AI Face Recognition & Attendance",
    description:
      "Computer vision workflow for recognizing faces through a camera and recording attendance with date and time."
  },
  {
    match: "2-in-1-game-setup",
    title: "2-in-1 Game Setup",
    description:
      "A practical Python project demonstrating interactive game logic and user input."
  },
  {
    match: "web-game",
    title: "Interactive Web Game",
    description:
      "A browser-based project showcasing frontend interaction and game logic."
  }
];


/* =========================
   SECTION HEADING
========================= */

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">

      <span className="eyebrow">
        <span className="dot" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}

    </div>
  );
}


/* =========================
   TILT CARD
========================= */

function TiltCard({ children, className = "" }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 220,
      damping: 25
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 220,
      damping: 25
    }
  );

  const onMove = (e) => {

    const r = e.currentTarget.getBoundingClientRect();

    x.set(
      (e.clientX - r.left) / r.width - 0.5
    );

    y.set(
      (e.clientY - r.top) / r.height - 0.5
    );
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`tilt-card ${className}`}
      style={{
        rotateX,
        rotateY
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}


/* =========================
   NAVBAR
========================= */

function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "github",
    "contact"
  ];

  return (
    <header className="navbar">

      <a
        className="brand"
        href="#home"
        onClick={() => setOpen(false)}
      >
        <span>UK</span>

        <div>
          UBAID<span>.</span>
        </div>
      </a>


      <nav
        className={
          open
            ? "nav-links open"
            : "nav-links"
        }
      >

        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}

      </nav>


      <div className="nav-actions">

        <a
          className="icon-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>


        <a
          className="icon-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>


        <a
          className="nav-cta"
          href="#contact"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </a>

      </div>


      <button
        className="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
      >

        {open ? (
          <X />
        ) : (
          <Menu />
        )}

      </button>

    </header>
  );
}


/* =========================
   HERO
========================= */

function Hero() {

  return (
    <section
      id="home"
      className="hero section-shell"
    >

      <div className="hero-grid" />


      <div className="hero-copy">

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="status-pill"
        >

          <span className="pulse" />

          AVAILABLE FOR PROJECTS

          <span>•</span>

          BSAI STUDENT

        </motion.div>


        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
        >

          Building{" "}

          <span className="gradient-text">
            intelligent
          </span>

          <br />

          systems with code & vision.

        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
          className="hero-role"
        >

          AI/ML ENGINEER

          <b>|</b>

          PYTHON DEVELOPER

          <b>|</b>

          COMPUTER VISION

          <b>|</b>

          DATA SCIENCE LEARNER

        </motion.p>


        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.35
          }}
          className="hero-text"
        >

          I'm Ubaid Khan, an AI/ML Engineer and Python Developer focused on
          computer vision, backend systems and practical AI solutions.

        </motion.p>


        <div className="hero-buttons">

          <a
            className="btn primary"
            href="#projects"
          >
            Explore my work
            <ArrowUpRight size={18} />
          </a>


          <a
            className="btn ghost"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>

        </div>


        <div className="hero-meta">

          <span>
            <MapPin size={15} />
            Lahore, Pakistan
          </span>

          <span>
            <GraduationCap size={15} />
            BSAI • NCBA&E
          </span>

        </div>

      </div>


      <div className="hero-visual">

        <div className="orb orb-one" />

        <div className="orb orb-two" />


        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.9,
            delay: 0.15
          }}
          className="profile-wrap"
        >

          <div className="profile-ring ring-one" />

          <div className="profile-ring ring-two" />


          <img
            src="/profile.jpeg"
            alt="Ubaid Khan"
            className="profile-image"
          />


          <div className="floating-chip chip-top">

            <Cpu size={15} />

            AI / CV

          </div>


          <div className="floating-chip chip-bottom">

            <GitBranch size={15} />

            Python

          </div>

        </motion.div>


        <div className="code-window">

          <div className="window-top">

            <span />
            <span />
            <span />

            <em>
              ubaid_ai.py
            </em>

          </div>


          <pre>
{`class AIEngineer:
    focus = ["vision", "python"]
    learn = "every day"

    def build(self):
        return "real solutions"`}
          </pre>

        </div>

      </div>


      <a
        className="scroll-cue"
        href="#about"
      >

        <ChevronDown size={18} />

        SCROLL TO EXPLORE

      </a>

    </section>
  );
}


/* =========================
   ABOUT
========================= */

function About() {

  return (
    <section
      id="about"
      className="section section-shell"
    >

      <SectionHeading
        eyebrow="01 / ABOUT"
        title="Turning curiosity into working systems."
        text="A student portfolio built around learning by building — from Python scripts to computer vision and AI-powered applications."
      />


      <div className="about-grid">

        <TiltCard className="about-card big-card">

          <div className="number">
            01
          </div>

          <Sparkles className="card-icon" />

          <h3>
            Learn → Build → Improve
          </h3>

          <p>
            I like taking an idea, breaking it
            into smaller engineering problems,
            building a working prototype, then
            improving it through testing.
          </p>

          <div className="mini-line" />

        </TiltCard>


        <div className="about-side">

          <TiltCard className="about-card">

            <Code2 className="card-icon" />

            <h3>
              Python-first mindset
            </h3>

            <p>
              Backend logic, automation, data work
              and computer vision are where I spend
              most of my development time.
            </p>

          </TiltCard>


          <TiltCard className="about-card">

            <BrainCircuit className="card-icon" />

            <h3>
              AI with a practical angle
            </h3>

            <p>
              My goal is not only to train models,
              but to connect AI with useful
              applications people can actually
              interact with.
            </p>

          </TiltCard>

        </div>

      </div>

    </section>
  );
}


/* =========================
   SKILLS
========================= */

function Skills() {

  return (
    <section
      id="skills"
      className="section section-shell"
    >

      <SectionHeading
        eyebrow="02 / SKILLS"
        title="My current toolkit."
        text="The technologies I'm actively using and learning across AI, data, backend development and frontend work."
      />


      <div className="skills-grid">

        {skills.map((skill, index) => {

          const Icon = skill.icon;

          return (
            <TiltCard
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-head">

                <div className="skill-icon">

                  <Icon size={20} />

                </div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              <h3>
                {skill.name}
              </h3>


              <div className="progress">

                <span
                  style={{
                    width: `${skill.level}%`
                  }}
                />

              </div>


              <small>
                {skill.level}% focus
              </small>

            </TiltCard>
          );

        })}

      </div>


      <div className="tech-strip">

        <span>PYTHON</span>
        <span>OPENCV</span>
        <span>YOLO</span>
        <span>DEEPFACE</span>
        <span>PANDAS</span>
        <span>NUMPY</span>
        <span>FLASK</span>
        <span>REACT</span>
        <span>SQL</span>
        <span>GIT</span>

      </div>

    </section>
  );
}


/* =========================
   PROJECT CARD
========================= */

function ProjectCard({ repo, featured }) {

  const fallback = featuredKeywords.find(
    (keyword) =>
      repo.name.toLowerCase() === keyword.match
  );


  const title =
    fallback?.title ||
    repo.name.replaceAll("-", " ");


  const description =
    fallback?.description ||
    repo.description ||
    "A project from my GitHub portfolio — open the repository to explore the code and implementation.";


  return (
    <TiltCard className="project-card">

      <div className="project-top">

        <span className="project-tag">

          {featured
            ? "FEATURED"
            : (repo.language || "PROJECT").toUpperCase()}

        </span>


        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >

          <ExternalLink size={18} />

        </a>

      </div>


      <div className="project-mark">

        <Code2 size={25} />

      </div>


      <h3>
        {title}
      </h3>


      <p>
        {description}
      </p>


      <div className="project-footer">

        <span>
          {repo.language || "Python"}
        </span>


        <span>

          <Star size={14} />

          {repo.stargazers_count || 0}

        </span>


        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >

          View repo

          <ArrowUpRight size={14} />

        </a>

      </div>

    </TiltCard>
  );
}


/* =========================
   PROJECTS
========================= */

function Projects() {

  const [repos, setRepos] = useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&direction=desc`
    )

      .then((response) => {

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        return response.json();

      })

      .then((data) => {

        setRepos(
          data.filter(
            (repo) => !repo.fork
          )
        );

      })

      .catch(() => {

        setRepos([]);

      })

      .finally(() => {

        setLoading(false);

      });

  }, []);


  const featured = repos
    .filter((repo) =>
      featuredKeywords.some(
        (keyword) =>
          keyword.match ===
          repo.name.toLowerCase()
      )
    )
    .slice(0, 4);


  const display =
    featured.length
      ? featured
      : repos.slice(0, 4);


  return (
    <section
      id="projects"
      className="section section-shell"
    >

      <SectionHeading
        eyebrow="03 / PROJECTS"
        title="Things I've built."
        text="Featured work is pulled from GitHub automatically, so the portfolio stays connected to the code behind it."
      />


      {loading ? (

        <div className="loading-grid">

          {[1, 2, 3, 4].map((item) => (

            <div
              className="skeleton"
              key={item}
            />

          ))}

        </div>

      ) : (

        <div className="projects-grid">

          {display.map((repo) => (

            <ProjectCard
              key={repo.id}
              repo={repo}
              featured={
                featured.length > 0
              }
            />

          ))}

        </div>

      )}


      {!loading && !repos.length && (

        <div className="empty-state">

          GitHub projects could not be loaded
          right now.

          {" "}

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub directly →
          </a>

        </div>

      )}


      <div className="center">

        <a
          className="btn ghost"
          href={`${GITHUB_URL}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >

          See all repositories

          <Github size={17} />

        </a>

      </div>

    </section>
  );
}


/* =========================
   EXPERIENCE
========================= */

function Experience() {
  return (
    <section id="experience" className="section section-shell">
      <SectionHeading
        eyebrow="04 / EXPERIENCE"
        title="Learning through real work."
        text="A timeline of my academic and professional development through practical AI, Python and software projects."
      />

      <div className="timeline">
        <div className="timeline-line" />

        {/* Nexum Global Solution */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-date">
            AUG 20, 2026 — PRESENT
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <BriefcaseBusiness />
            </div>

            <div>
              <h3>
                Nexum Global Solution — AI/ML Engineer & Python Developer
              </h3>

              <p>
                Working on practical AI/ML and Python development projects,
                applying programming and artificial intelligence concepts to
                real-world software solutions.
              </p>

              <div className="experience-tags">
                <span className="badge">AI & MACHINE LEARNING</span>
                <span className="badge">PYTHON</span>
                <span className="badge">COMPUTER VISION</span>
              </div>

              <span className="badge">CURRENT ROLE</span>
            </div>
          </div>
        </div>

        {/* LDA Internship */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-date">
            2025
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <BriefcaseBusiness />
            </div>

            <div>
              <h3>
                LDA — Python & AI Intern
              </h3>

              <p>
                Worked on real-world IT tasks and data handling, and developed
                a Digital Attendance System using Python.
              </p>

              <span className="badge">INTERNSHIP</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-date">
            2023 — PRESENT
          </div>

          <div className="timeline-card">
            <div className="timeline-icon">
              <GraduationCap />
            </div>

            <div>
              <h3>
                Bachelor of Science in Artificial Intelligence
              </h3>

              <p>
                National College of Business & Administration — developing
                foundations in programming, data structures, AI, data science
                and software projects.
              </p>

              <span className="badge">BSAI STUDENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   GITHUB
========================= */

function GitHubSection() {

  const [profile, setProfile] =
    useState(null);


  useEffect(() => {

    fetch(
      `https://api.github.com/users/${GITHUB_USER}`
    )

      .then((response) =>
        response.ok
          ? response.json()
          : null
      )

      .then(setProfile)

      .catch(() => {});

  }, []);


  return (
    <section
      id="github"
      className="section section-shell"
    >

      <SectionHeading
        eyebrow="05 / GITHUB"
        title="The code is public."
        text="Follow the projects, experiments and learning progress directly from my GitHub profile."
      />


      <div className="github-panel">

        <div className="github-main">

          <div className="github-logo">

            <Github size={38} />

          </div>


          <div>

            <span className="eyebrow">
              @{GITHUB_USER}
            </span>


            <h3>
              {profile?.name ||
                "Ubaid Khan"}
            </h3>


            <p>
              {profile?.bio ||
                "Backend Python developer and AI Engineer in progress."}
            </p>

          </div>

        </div>


        <div className="github-stats">

          <div>

            <strong>
              {profile?.public_repos ?? "—"}
            </strong>

            <span>
              Repos
            </span>

          </div>


          <div>

            <strong>
              {profile?.followers ?? "—"}
            </strong>

            <span>
              Followers
            </span>

          </div>


          <div>

            <strong>
              {profile?.following ?? "—"}
            </strong>

            <span>
              Following
            </span>

          </div>

        </div>


        <a
          className="btn primary"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >

          Open GitHub

          <ArrowUpRight size={18} />

        </a>

      </div>

    </section>
  );
}


/* =========================
   CONTACT
========================= */

function Contact() {

  return (
    <section
      id="contact"
      className="section section-shell contact-section"
    >

      <div className="contact-glow" />


      <SectionHeading
        eyebrow="06 / CONTACT"
        title="Have an idea? Let's build it."
        text="I'm open to student collaborations, internships, AI projects and opportunities where I can learn while creating something useful."
      />


      <div className="contact-grid">

        <a
          className="contact-card"
          href={`mailto:${EMAIL}`}
        >

          <Mail />

          <div>

            <span>
              Email
            </span>

            <strong>
              {EMAIL}
            </strong>

          </div>

          <ArrowUpRight />

        </a>


        <a
          className="contact-card"
          href={`tel:${PHONE}`}
        >

          <Phone />

          <div>

            <span>
              Mobile
            </span>

            <strong>
              {PHONE}
            </strong>

          </div>

          <ArrowUpRight />

        </a>


        <a
          className="contact-card"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >

          <Linkedin />

          <div>

            <span>
              LinkedIn
            </span>

            <strong>
              Connect with me
            </strong>

          </div>

          <ArrowUpRight />

        </a>

      </div>


      <div className="cv-note">

        <Download size={18} />


        <span>

          <strong>
            My CV
          </strong>

          {" "}— a student-focused CV is
          included with this portfolio.

        </span>


        <a
          className="btn ghost"
          href="/resume.pdf"
          download
        >

          Download CV

          <Download size={15} />

        </a>

      </div>

    </section>
  );
}


/* =========================
   FOOTER
========================= */

function Footer() {

  return (
    <footer>

      <div className="footer-inner">

        <div className="brand">

          <span>
            UK
          </span>

          <div>
            UBAID<span>.</span>
          </div>

        </div>


        <p>
          Designed & built with React •
          Focused on AI, Python &
          computer vision.
        </p>


        <div className="footer-links">

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
          </a>


          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
          </a>


          <a
            href={`mailto:${EMAIL}`}
          >
            <Mail size={17} />
          </a>

        </div>

      </div>


      <div className="copyright">

        © {new Date().getFullYear()}
        {" "}
        Ubaid Khan.
        All rights reserved.

      </div>

    </footer>
  );
}


/* =========================
   MAIN APP
========================= */

export default function App() {

  return (

    <div className="app">

      <div className="ambient ambient-a" />

      <div className="ambient ambient-b" />


      <Navbar />


      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <GitHubSection />

        <Contact />

      </main>


      <Footer />

    </div>

  );
}