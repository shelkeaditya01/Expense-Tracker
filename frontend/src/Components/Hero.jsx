import "./Hero.css"

const Hero = ({ onGetStarted }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Take Control of Your Finances</h1>
          <p className="hero-subtitle">
            Track every expense, visualize your spending patterns, and make smarter financial decisions with our
            intuitive expense tracker.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onGetStarted}>Start Tracking</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/cartoon-character-with-piggy-bank-and-money-charts.jpg" alt="Expense tracking illustration" className="cartoon-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
