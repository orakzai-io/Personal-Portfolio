import './About.css';

const techs = ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Concurrency', 'TypeScript', 'Git', 'Docker'];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief introduction to my professional background and skills.</p>
        </div>
        
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I build high-performance backend systems with Python, specializing in 
              architecting <strong>secure, scalable APIs</strong> and <strong>high-concurrency data pipelines</strong>. 
              My focus is on the logic that powers modern applications—from designing 
              complex relational database schemas to developing asynchronous scrapers 
              and LLM-integrated workflows.
            </p>
            <p>
              While my core expertise lies in backend architecture and asynchronous systems, 
              I bring <strong>"Full-Stack Awareness"</strong> to the table, using TypeScript 
              and JavaScript to build functional, monitoring-ready dashboards that 
              bring backend data to life.
            </p>
            
            <h3 className="tech-stack-title">My Tech Stack</h3>
            <div className="tech-grid">
              {techs.map(tech => (
                <div key={tech} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>
          
          <div className="about-visual reveal">
            <div className="about-card quote-card">
              <div className="card-dot"></div>
              <p className="quote-text">
                <span className="accent-quote">Always</span> learning,<br />
                <span className="accent-quote">always</span> building.
              </p>
              <div className="card-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
