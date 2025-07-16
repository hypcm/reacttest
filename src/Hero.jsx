// src/components/Hero.jsx
const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="hero">
        <div className="floating-elements">
          <div className="floating-element" style={{ top: '20%', left: '10%' }}></div>
          <div className="floating-element" style={{ top: '60%', left: '80%' }}></div>
          <div className="floating-element" style={{ top: '40%', left: '20%' }}></div>
          <div className="floating-element" style={{ top: '80%', left: '60%' }}></div>
        </div>
        <h1 className="hero-title">hyp</h1>
        <p className="hero-subtitle">placeholder</p>
        <a href="#about" className="cta-button">Explore My Work</a>
      </div>
    </section>
  );
};

export default Hero;
