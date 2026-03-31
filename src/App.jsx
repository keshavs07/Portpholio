import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight, Download, MapPin, Award, Briefcase, GraduationCap, Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      title: "Mental Health Companion",
      description: "Developed an AI-powered chatbot with advanced emotion detection and sentiment analysis capabilities, helping users manage mental wellness through intelligent conversations.",
      tech: ["NLP", "Python", "AI Chatbot", "TensorFlow"],
      link: "https://github.com/keshavs07",
      impact: "Reduced response time by 60% compared to traditional chatbots"
    },
    {
      title: "Driver Safety AI",
      description: "Engineered a real-time drowsiness detection system utilizing MediaPipe and OpenCV for enhanced road safety, processing video streams at 30 FPS.",
      tech: ["MediaPipe", "OpenCV", "Python", "Computer Vision"],
      link: "https://github.com/keshavs07",
      impact: "Achieved 94% accuracy in drowsiness detection"
    },
    {
      title: "Smart News Verifier",
      description: "Built a comprehensive fake news detection tool employing Natural Language Processing, OCR, and Machine Learning algorithms to verify news authenticity.",
      tech: ["NLP", "OCR", "Machine Learning", "Scikit-learn"],
      link: "https://github.com/keshavs07",
      impact: "Processed 10,000+ articles with 89% accuracy"
    },
    {
      title: "Crop Health AI",
      description: "Created a plant disease detection system based on the highly efficient YOLO architecture, enabling farmers to identify crop diseases early.",
      tech: ["YOLOv8", "Computer Vision", "Python", "PyTorch"],
      link: "https://github.com/keshavs07",
      impact: "Identified 15+ crop diseases with 92% precision"
    },
    {
      title: "Coffee Shop Website",
      description: "Academic project built with PHP, SQL, HTML, and CSS to simulate a full-featured cafe ordering experience.",
      tech: ["PHP", "SQL", "HTML", "CSS"],
      link: "https://github.com/keshavs07/coffee-shop",
      impact: "Applied database-backed order management and user interface design."
    },
    {
      title: "Smart ATS System",
      description: "AI-powered ATS resume screening system built with Flask, Sentence Transformers, and Bootstrap.",
      tech: ["Flask", "Sentence Transformers", "Bootstrap", "Python"],
      link: "https://github.com/keshavs07/smart-ats-system",
      impact: "Performed semantic similarity and skill-based candidate evaluation."
    },
    {
      title: "Ebook Tracker",
      description: "Personal project for tracking ebooks, reading progress, and metadata powered by a Python backend.",
      tech: ["Python", "Flask", "SQLite"],
      link: "https://github.com/keshavs07/EbookTracker",
      impact: "Implemented CRUD management and user reading statistics."
    },
    {
      title: "Diabetes Prediction ML",
      description: "Machine learning app predicting diabetes risk using health metrics and classification models.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "https://github.com/keshavs07/diabetes-prediction-ml",
      impact: "Achieved accurate risk prediction with explainable features."
    },
    {
      title: "Python Weather App",
      description: "Weather dashboard using API integration with interactive frontend and historical data display.",
      tech: ["Python", "CSS", "API"],
      link: "https://github.com/keshavs07/python-weather-app",
      impact: "Enabled real-time weather visualization with 7-day forecasts."
    }
  ];

  const experience = [
    {
      title: "AI/ML Intern",
      company: "Bexo.ed",
      period: "Feb - July 2026",
      description: "Interning as AI/ML developer, working on machine learning models and AI solutions to enhance product features and user experience."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "CGC Jhanjheri, Mohali",
      period: "August 2025"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Mukand Lal National College, Yamuna Nagar",
      period: "July 2023"
    },
    {
      degree: "Senior Secondary School",
      institution: "DAV Public School, Yamuna Nagar",
      period: "August 2020"
    }
  ];

  const skills = {
    "AI & Machine Learning": ["PyTorch", "TensorFlow", "YOLOv8", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    "Web Development": ["Flask", "JavaScript", "HTML", "CSS", "React"],
    "Core Languages & Tools": ["Python", "SQL", "Git", "GitHub", "Ollama"]
  };

  const contactItems = [
    { icon: Mail, title: 'Email', content: 'keshavs424@gmail.com', color: 'linear-gradient(to bottom right, #3b82f6, #2563eb)' },
    { icon: Phone, title: 'Phone', content: '+91-9992266872', color: 'linear-gradient(to bottom right, #9333ea, #7c3aed)' },
    { icon: MapPin, title: 'Location', content: 'Chandigarh', color: 'linear-gradient(to bottom right, #ec4899, #db2777)' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/keshavs07' },
    { icon: Linkedin, url: 'https://www.linkedin.com/' },
    { icon: Mail, url: 'mailto:keshavs424@gmail.com' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #ffffff, #eff6ff)', fontFamily: 'sans-serif', color: '#0f172a', paddingBottom: '6rem' }}>
      <nav style={{ position: 'fixed', width: '100%', top: 0, left: 0, background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', zIndex: 50, borderBottom: '1px solid rgba(203, 213, 225, 0.5)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>
            RS
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#475569' }} className="mobile-menu-btn">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: '500' }} className="nav-links">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none' }} onMouseEnter={(e) => { e.target.style.color = '#2563eb'; }} onMouseLeave={(e) => { e.target.style.color = '#475569'; }}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.95)', borderTop: '1px solid rgba(203, 213, 225, 0.5)' }}>
            {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)} style={{ color: '#475569', textDecoration: 'none', fontSize: '1rem' }} onMouseEnter={(e) => { e.target.style.color = '#2563eb'; }} onMouseLeave={(e) => { e.target.style.color = '#475569'; }}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="about" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #f3e8ff)', zIndex: 0 }} />
        <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '0.875rem', fontWeight: '500', width: 'fit-content' }}>
                  <span style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.5rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></span>
                  Available for new opportunities
                </div>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.1' }}>
                  Hi, I'm <span style={{ background: 'linear-gradient(to right, #2563eb, #9333ea, #1e3a8a)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Ritik Sharma</span>
                </h1>
                <h2 style={{ fontSize: '1.25rem', color: '#475569', fontWeight: '300', lineHeight: '1.5' }}>
                  Aspiring AI/ML Developer & Fresher passionate about creating intelligent solutions
                </h2>
              </div>
              <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: '1.5', maxWidth: '28rem' }}>
                Specializing in computer vision, natural language processing, and scalable web applications. I transform complex problems into elegant, AI-powered solutions.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', color: 'white', padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  View My Work <ChevronRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                </a>
                <a href="#" style={{ border: '2px solid #cbd5e1', color: '#334155', padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#2563eb'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#334155'; }}>
                  <Download style={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} /> Download Resume
                </a>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem' }}>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a key={i} href={social.url} target="_blank" rel="noreferrer" style={{ width: '3rem', height: '3rem', backgroundColor: 'white', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px rgba(37, 99, 235, 0.2)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                      <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#475569' }} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: '24rem', height: '24rem', margin: '0 auto' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, #60a5fa, #a855f7, #ec4899)', borderRadius: '1.5rem', transform: 'rotate(6deg)', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' }} />
                <div style={{ position: 'relative', background: 'linear-gradient(to bottom right, #3b82f6, #7c3aed)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)', transform: 'rotate(-3deg)', transition: 'transform 0.5s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-3deg)'; }}>
                  <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ width: '12rem', height: '12rem', margin: '0 auto', background: 'linear-gradient(to bottom right, #dbeafe, #f3e8ff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}>
                      <span style={{ fontSize: '3.75rem', fontWeight: 'bold', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>RS</span>
                    </div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', width: '4rem', height: '4rem', backgroundColor: '#facc15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', fontSize: '1.5rem', animation: 'bounce 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                  🚀
                </div>
                <div style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', width: '4rem', height: '4rem', backgroundColor: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', fontSize: '1.5rem', animation: 'bounce 1s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s' }}>
                  💡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" style={{ padding: '5rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>Experience & Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#2563eb' }}><Briefcase style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem' }} />Professional Experience</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experience.map((exp, index) => (
                <div key={index} style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{exp.title}</h4>
                  <p style={{ color: '#475569', fontWeight: '500' }}>{exp.company}</p>
                  <p style={{ fontSize: '0.875rem', color: '#2563eb', marginBottom: '0.5rem' }}>{exp.period}</p>
                  <p style={{ color: '#475569' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: '#2563eb' }}><GraduationCap style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem' }} />Education</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {education.map((edu, index) => (
                <div key={index} style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{edu.degree}</h4>
                  <p style={{ color: '#475569', fontWeight: '500' }}>{edu.institution}</p>
                  <p style={{ fontSize: '0.875rem', color: '#2563eb', marginBottom: '0.5rem' }}>{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(to bottom right, #f8fafc, white)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}> <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Featured Projects</h2><p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.5' }}>A showcase of my recent work demonstrating expertise in AI/ML and full-stack development</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1.875rem', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', position: 'relative', transition: 'all 0.5s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px rgba(37, 99, 235, 0.1)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.75rem' }}>{project.title}</h3>
                    <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.25rem 0.75rem', backgroundColor: '#dcfce7', color: '#166534', fontSize: '0.875rem', fontWeight: '500', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '0.5rem' }} />
                      {project.impact}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ width: '3rem', height: '3rem', backgroundColor: '#eff6ff', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', marginLeft: '1rem' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dbeafe'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; e.currentTarget.style.transform = 'scale(1)'; }}>
                    <ExternalLink style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
                  </a>
                </div>
                <p style={{ color: '#475569', marginBottom: '1.5rem', lineHeight: '1.5', fontSize: '1.125rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ padding: '0.5rem 1rem', background: 'linear-gradient(to right, #f0f4ff, #faf5ff)', color: '#1e40af', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500', border: '1px solid #dbeafe' }}>{t}</span>
                  ))}
                </div>
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '5rem', height: '5rem', background: 'linear-gradient(to bottom right, #dbeafe, #e9d5ff)', borderRadius: '50%', opacity: 0.2, pointerEvents: 'none' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://github.com/keshavs07" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '1rem 2rem', background: 'linear-gradient(to right, #1f2937, #111827)', color: 'white', borderRadius: '0.75rem', fontWeight: '600', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Github style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem' }} />View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(to bottom right, #eff6ff, #f3e8ff)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Technical Skills</h2>
            <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.5' }}>Proficient in a comprehensive range of technologies essential for modern software development</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {Object.entries(skills).map(([category, items], categoryIndex) => {
              const colors = [
                { bg: 'linear-gradient(to bottom right, #3b82f6, #1e40af)', emoji: '🤖', accent: '#3b82f6' },
                { bg: 'linear-gradient(to bottom right, #9333ea, #581c87)', emoji: '🌐', accent: '#9333ea' },
                { bg: 'linear-gradient(to bottom right, #22c55e, #15803d)', emoji: '⚡', accent: '#22c55e' }
              ];
              const color = colors[categoryIndex % colors.length];
              return (
                <div key={category} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1.875rem', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', transition: 'all 0.5s', cursor: 'pointer', position: 'relative' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 25px rgba(37, 99, 235, 0.1)'; e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ width: '4rem', height: '4rem', margin: '0 auto 1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color.bg, fontSize: '1.5rem' }}>{color.emoji}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>{category}</h3>
                    <div style={{ height: '0.25rem', width: '3rem', margin: '0 auto', backgroundColor: color.accent, borderRadius: '9999px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {items.map((skill, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0.75rem', backgroundColor: '#f1f5f9', borderRadius: '0.75rem', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e2e8f0'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; }}>
                        <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', marginRight: '0.75rem', backgroundColor: color.accent, flexShrink: 0 }} />
                        <span style={{ color: '#334155', fontWeight: '500' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '6rem', height: '6rem', borderRadius: '50%', opacity: 0.1, pointerEvents: 'none', background: color.accent }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="interests" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(to bottom, #ffffff, #f0f9ff)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>My Interests</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '40rem', margin: '0 auto' }}>Things I'm passionate about and enjoy exploring in my free time</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '💻', title: 'Coding', description: 'Building cool projects and solving problems' },
              { icon: '📚', title: 'Reading Novels', description: 'Getting lost in compelling stories' },
              { icon: '🥾', title: 'Hiking', description: 'Exploring nature and outdoor adventures' },
              { icon: '🎌', title: 'Anime', description: 'Enjoying Japanese animation and storytelling' },
              { icon: '💪', title: 'Gyming', description: 'Staying fit and healthy' }
            ].map((interest, idx) => (
              <div key={idx} style={{ 
                background: 'white', 
                borderRadius: '1rem', 
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(203, 213, 225, 0.5)',
                cursor: 'pointer'
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.15)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.5)';
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem', display: 'inline-block', padding: '1rem', background: 'linear-gradient(135deg, #dbeafe, #f3e8ff)', borderRadius: '1rem' }}>
                  {interest.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.5rem' }}>
                  {interest.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5' }}>
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '6rem 1.5rem', background: 'linear-gradient(to bottom right, #1f2937, #111827)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2, background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.2), rgba(109, 40, 217, 0.2), rgba(236, 72, 153, 0.2))', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Let's Work Together</h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '48rem', margin: '0 auto', lineHeight: '1.5' }}>I'm always excited to collaborate on innovative AI/ML projects and challenging technical problems. Let's create something amazing together.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(4px)', borderRadius: '1.875rem', border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                  <div style={{ width: '4rem', height: '4rem', background: item.color, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <Icon style={{ width: '2rem', height: '2rem', color: 'white' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{item.title}</h3>
                  <a href={item.title === 'Email' ? `mailto:${item.content}` : item.title === 'Phone' ? `tel:${item.content}` : '#'} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1.125rem', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.target.style.color = item.title === 'Email' ? '#60a5fa' : item.title === 'Phone' ? '#a78bfa' : '#f472b6'; }} onMouseLeave={(e) => { e.target.style.color = '#cbd5e1'; }}>{item.content}</a>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a key={idx} href={item.url} target="_blank" rel="noreferrer" style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(4px)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                  <Icon style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                </a>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#94a3b8' }}>© 2026 Ritik Sharma. Crafted with ❤️ using React & Inline Styles</p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.875rem', color: '#94a3b8', flexWrap: 'wrap' }}>
                <a href="#about" style={{ textDecoration: 'none', color: '#94a3b8', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}>About</a>
                <a href="#projects" style={{ textDecoration: 'none', color: '#94a3b8', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}>Projects</a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#94a3b8', cursor: 'pointer' }} onMouseEnter={(e) => { e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; }}>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }
        
        @keyframes pulse { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0.5; } 
        } 
        @keyframes bounce { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-10px); } 
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          body {
            font-size: 0.875rem;
          }
          h1 {
            font-size: 1.75rem !important;
            line-height: 1.2 !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
          h3 {
            font-size: 1.25rem !important;
          }
          .hero-image {
            width: 16rem !important;
            height: 16rem !important;
          }
          .section-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 4rem !important;
            padding-bottom: 3rem !important;
          }
          .text-lg {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .nav-links {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          h1 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
