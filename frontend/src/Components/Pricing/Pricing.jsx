import React from 'react';
import './Pricing.css';

const Pricing = ({ onGetStarted }) => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with expense tracking',
      features: [
        'Track up to 100 transactions/month',
        'Basic expense categories',
        'Simple reports and charts',
        'Mobile app access',
        'Email support'
      ],
      buttonText: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      description: 'Ideal for individuals and small businesses',
      features: [
        'Unlimited transactions',
        'Custom categories and tags',
        'Advanced analytics and insights',
        'Export to CSV/PDF',
        'Priority support',
        'Budget planning tools',
        'Receipt scanning'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Business',
      price: '$24.99',
      period: 'per month',
      description: 'Built for teams and growing businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Multi-user access',
        'Advanced reporting',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`plan-button ${plan.popular ? 'popular' : ''}`}
                onClick={onGetStarted}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 30-day money-back guarantee. No setup fees.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;