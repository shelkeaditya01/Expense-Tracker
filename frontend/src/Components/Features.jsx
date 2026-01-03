import "./Features.css"

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Smart Tracking",
      description: "Effortlessly log all your expenses with our intuitive interface.",
      image: "/cartoon-smart-tracking.jpg",
    },
    {
      id: 2,
      title: "Visual Analytics",
      description: "See your spending patterns with beautiful charts and insights.",
      image: "/cartoon-analytics.jpg",
    },
    {
      id: 3,
      title: "Budget Planning",
      description: "Set budgets and get alerts when you're close to limits.",
      image: "/cartoon-budget-planning.jpg",
    },
    {
      id: 4,
      title: "Multi-Category",
      description: "Organize expenses across multiple custom categories.",
      image: "/cartoon-categories.jpg",
    },
    {
      id: 5,
      title: "Export Reports",
      description: "Generate detailed reports and export your financial data.",
      image: "/cartoon-reports.jpg",
    },
    {
      id: 6,
      title: "Secure & Private",
      description: "Your data is encrypted and completely secure always.",
      image: "/cartoon-security.jpg",
    },
  ]

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Our Expense Tracker?</h2>
        <p className="features-subtitle">Powerful features designed to help you manage your finances better</p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-image">
                <img src={feature.image || "/placeholder.svg"} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;
