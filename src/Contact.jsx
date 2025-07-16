// src/components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="about-text">placeholder</p>
        <div className="contact-links">
          <a href="mailto:hyp.devv@gmail.com" className="contact-link">
            <span>📧</span>
            <span>Email</span>
          </a>
          <a href=" https://github.com/hypmcbs " className="contact-link">
            <span>🐙</span>
            <span>GitHub</span>
          </a>
          <a href="#" className="contact-link">
            <span>🐦</span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
