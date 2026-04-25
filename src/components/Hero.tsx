import { useEffect, useRef } from 'react';
import resume from '../assets/Shahsawar_Dev.pdf';
import picture from '../assets/Shahsawar Professional image.png';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; color: string;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(139, 92, 246, 0.3)';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }
      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content reveal">
            <h1 className="hero-name">  Shahsawar <span className="gradient-text">Orakzai</span></h1>
            <h2 className="hero-title">Software Engineer</h2>
            <p className="hero-description">
              Specializing in resilient data pipelines and AI-driven automation.
              Focused on turning complex problems into elegant, scalable solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => window.open(resume, '_blank')} className="btn btn-primary">View Resume</button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">Let's Connect</button>
            </div>
          </div>
          
          <div className="hero-image-container reveal">
            <div className="hero-image-circle">
              <img src={picture} alt="Shahsawar Orakzai" />
              <div className="circle-glow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll Down</span>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
}