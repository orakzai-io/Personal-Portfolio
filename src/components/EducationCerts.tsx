import './EducationCerts.css';

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

export default function EducationCerts() {
  return (
    <section id="education-certs" className="section bg-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Education & Certs</h2>
        </div>
        
        <div className="edu-certs-grid">
          <div className="education-grid reveal">
            <div className="education-card">
              <h3>Bachelors of Science in Computer Science</h3>
              <h4>The University of Agriculture, Peshawar</h4>
              <p className="date">Oct 2024 — Oct 2028 (Expected)</p>
              
              <div className="edu-details">
                <span className="gpa-badge">CGPA: 3.71 / 4.00</span>
                <div className="coursework">
                  <strong>Core Coursework:</strong>
                  <p>Programming Fundamentals, OOP, Data Structures & Algorithms (DSA), Database Systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="certs-grid reveal">
            <div className="cert-card">
              <div className="cert-badge">📜</div>
              <div className="cert-info">
                <h3>CS50x: Introduction to Computer Science</h3>
                <p className="issuer">Harvard University</p>
                <p className="date">Issued: February 2026</p>
                <p className="cert-desc">Covering C, Python, SQL, and Web Development with a focus on problem-solving across multiple layers of Computer Science.</p>
                <a href="https://certificates.cs50.io/46d6924e-c5e2-49f5-8639-90d52ebb90d1.pdf" className="cert-link">Verify Certificate <ExternalLinkIcon /></a>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-badge">📜</div>
              <div className="cert-info">
                <h3>CS50P: Programming with Python</h3>
                <p className="issuer">Harvard University</p>
                <p className="date">Issued: October 2025</p>
                <p className="cert-desc">In-depth exploration of Python language and its features such as Unit Testing, File I/O, error handling, and more.</p>
                <a href="https://certificates.cs50.io/9847b334-9e42-4281-a696-a6e5cc35b008.pdf" className="cert-link">Verify Certificate <ExternalLinkIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
