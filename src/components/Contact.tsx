import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

export default function Contact() {
  const [state, handleSubmit] = useForm("meevnwzk");

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's discuss how we can work together.</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p>
              I'm currently available for freelance, contracts, and full-time remote positions across <strong>any timezone</strong>. 
              If you have any questions or just want to say hi, feel free to drop a message!
            </p>
            <div className="social-links">
              <a href="https://github.com/orakzai-io" target="_blank" rel="noopener noreferrer" className="social-link">
                <GithubIcon /> GitHub
              </a>
              <a href="https://linkedin.com/in/orakzai-io" target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="mailto:shahsawar.dev@gmail.com" className="social-link">
                <MailIcon /> shahsawar.dev@gmail.com
              </a>
            </div>
          </div>
          
          {state.succeeded ? (
            <div className="form-success">
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={() => window.location.reload()} className="btn btn-primary">Send Another</button>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-group">
                <input id="name" type="text" name="name" placeholder="Your Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="error-message" />
              </div>
              <div className="form-group">
                <input id="email" type="email" name="email" placeholder="Your Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="error-message" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="error-message" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
