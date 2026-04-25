import './Projects.css';
import AsyncWebScraper from '../assets/Async-Web-Scraper.png';
import VaultGuard from '../assets/VaultGuard.png';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const projects = [
  { 
    id: 1, 
    name: 'Async Web Scraper', 
    desc: 'A high-throughput scraping engine leveraging AI-powered extraction to transform raw data from 15+ concurrent streams into structured JSON—accelerating data workflows by 10x and reducing manual extraction overhead by 90%.', 
    tags: ['Python', 'FastAPI', 'Asyncio', 'GenAI', 'Docker', 'SQLAlchemy'],
    github: 'https://github.com/orakzai-io/Async-Web-Scraper',
    demo: 'https://orakzai-io-async-web-scraper.hf.space/',
    image: AsyncWebScraper
  },
  { 
    id: 2, 
    name: 'VaultGuard', 
    desc: 'A robust password management system featuring a high-performance REST API, implementing authenticated Fernet encryption and JWT-based authentication for secure data management.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT Auth', 'SQLAlchemy', 'Encryption'],
    github: 'https://github.com/orakzai-io/Vault-Guard',
    image: VaultGuard
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map(proj => (
            <div key={proj.id} className="project-card reveal">
              <div className="project-card-header">
                <img src={proj.image} alt={proj.name} className="project-img" />
              </div>
              <div className="project-card-body">
                <h3>{proj.name}</h3>
                <p>{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"><GithubIcon /> Code</a>
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
