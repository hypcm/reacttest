// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">placeholder</p>
        <div className="skills">
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">💻</div>
              <h3 className="skill-title">placeholder</h3>
            </div>
            <p className="skill-description">placeholder</p>
            <div className="skill-progress">
              <div className="progress-label">
                <span>placeholder</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" data-width="95"></div>
              </div>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">🎨</div>
              <h3 className="skill-title">placeholder</h3>
            </div>
            <p className="skill-description">placeholder</p>
            <div className="skill-tags">
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
              <span className="skill-tag">placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
