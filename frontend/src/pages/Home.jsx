import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";

function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <h1 className="hero-title">
          Master DSA. Track Progress. Get Placed 🚀
        </h1>

        <p className="hero-subtitle">
          Talent IQ helps you structure your preparation
          and track growth like a real engineer.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📊 Progress Tracking</h3>
          <p>Visualize your coding journey.</p>
        </div>

        <div className="feature-card">
          <h3>🧠 Smart Practice</h3>
          <p>Structured problem roadmap.</p>
        </div>

        <div className="feature-card">
          <h3>🎯 Placement Focused</h3>
          <p>Built for product-based companies.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;