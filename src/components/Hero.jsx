import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Allen Davis</span>
        </h1>

        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "React Specialist",
                "Node.js Expert",
                "Open to New Opportunities",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursor: "|",
              wrapperClassName: "typewriter-text",
              cursorClassName: "typewriter-cursor",
            }}
          />
        </div>

        <p className="hero-subtitle">
          I build <span className="highlight">scalable web solutions</span> that
          deliver results
        </p>
        <div className="hero-cta">
          <button className="cta-button primary">
            <span className="text">View Projects</span>
            <span className="icon">→</span>
          </button>

          <button className="cta-button secondary">
            <span className="text">Hire Me</span>
            <span className="icon">✉️</span>
          </button>
        </div>
      </div>
      <div className="hero-visual">
        {/* Animated avatar/illustration or tech stack icons */}
        <div className="tech-icons">
          {["react", "node", "mongodb"].map((tech) => (
            <img
              key={tech}
              src={`/icons/${tech}.png`}
              alt={tech}
              className="tech-icon"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
