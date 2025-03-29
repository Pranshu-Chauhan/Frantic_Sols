import ThreeDModel from "./ThreeDModel";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <h1 className="hero-title">Your future space, now.</h1>
        <p className="hero-subtitle">
          Helping you visualize, refine, and perfect your project before it becomes reality.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <a href="#" className="btn-secondary">
            <img src="/icon.png" alt="icon" width="20" height="20" />
            Make your own
          </a>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Visualize a ..." className="search-input" />
          <select className="search-select">
            <option>Size</option>
            <option>100 ft²</option>
            <option>200 ft²</option>
          </select>
          <button className="search-button">Go</button>
        </div>
      </div>

      {/* Right 3D Model */}
      <div className="hero-3d-model">
        <ThreeDModel />
      </div>
    </section>
  );
};

export default HeroSection;
