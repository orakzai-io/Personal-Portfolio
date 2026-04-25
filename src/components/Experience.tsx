import './Experience.css';

const experiences = [
  {
    date: '2023 - PRESENT',
    role: 'Senior Software Engineer',
    company: 'Innovate Tech Solutions',
    points: [
      'Leading a team of 5 developers to rebuild the core dashboard using React and TypeScript.',
      'Optimized API response times by 40% through efficient caching strategies.',
      'Mentoring junior engineers and implementing CI/CD best practices.'
    ]
  },
  {
    date: '2021 - 2023',
    role: 'Full Stack Developer',
    company: 'Digital Dreams Agency',
    points: [
      'Developed 15+ custom web applications for diverse clients using Node.js and React.',
      'Implemented responsive designs ensuring 100% mobile compatibility.',
      'Collaborated with designers to translate UI/UX mockups into functional code.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div className="timeline reveal">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <span className="timeline-date">{exp.date}</span>
              <div className="timeline-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
