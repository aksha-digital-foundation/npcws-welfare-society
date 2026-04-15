import { Link } from 'react-router-dom'
import { Shield, CheckCircle, ArrowRight, Users, FileText, CreditCard } from 'lucide-react'
import './Membership.css'

const tiers = [
  {
    name: 'Annual Member',
    fee: '₹500',
    period: '/year',
    description: 'Standard membership with access to all three welfare schemes.',
    benefits: [
      'Access to Housing, Health, and Education schemes',
      'Voting rights in general body meetings',
      'Eligible for emergency financial assistance',
      'Annual health camp participation',
    ],
    highlighted: false,
  },
  {
    name: 'Life Member',
    fee: '₹5,000',
    period: 'one-time',
    description: 'Lifetime membership with priority access and additional benefits.',
    benefits: [
      'All Annual Member benefits included',
      'Priority allotment in housing schemes',
      'Enhanced scholarship amounts for dependents',
      'Nomination rights for advisory committee',
      'No renewal required — lifetime validity',
    ],
    highlighted: true,
  },
]

const steps = [
  { icon: FileText, title: 'Apply', description: 'Fill out the membership form at the NPCWS office or download it from this portal.' },
  { icon: CreditCard, title: 'Pay Fees', description: 'Pay the membership fee via UPI, bank transfer, or cash at the NPCWS office.' },
  { icon: Shield, title: 'Verification', description: 'Your application is verified by the membership committee within 7 working days.' },
  { icon: Users, title: 'Welcome', description: 'Receive your membership card and start accessing all welfare scheme benefits.' },
]

function Membership() {
  return (
    <main className="page">
      <div className="container">
        <section className="membership-header">
          <h1 className="page-title">Become a Member</h1>
          <p className="page-subtitle">
            Join NPCWS and access housing, healthcare, and education benefits for
            your family. Open to all serving and retired police personnel in
            Guntur district.
          </p>
        </section>

        <section className="tiers-section">
          <div className="tiers-grid">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`tier-card ${tier.highlighted ? 'tier-highlighted' : ''}`}
              >
                {tier.highlighted && (
                  <span className="tier-badge">Recommended</span>
                )}
                <h2 className="tier-name">{tier.name}</h2>
                <div className="tier-price">
                  <span className="tier-fee">{tier.fee}</span>
                  <span className="tier-period">{tier.period}</span>
                </div>
                <p className="tier-desc">{tier.description}</p>
                <ul className="tier-benefits">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="tier-check" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary tier-cta">
                  Join Now <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="how-to-join">
          <h2 className="section-heading">How to Join</h2>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={step.title} className="step-card">
                <div className="step-number">{i + 1}</div>
                <div className="step-icon-wrap">
                  <step.icon size={24} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="eligibility-section">
          <h2 className="section-heading">Eligibility</h2>
          <div className="eligibility-card">
            <ul className="eligibility-list">
              <li>
                <CheckCircle size={16} className="list-icon" />
                Serving police personnel posted in Guntur district
              </li>
              <li>
                <CheckCircle size={16} className="list-icon" />
                Retired police personnel who served in Guntur district
              </li>
              <li>
                <CheckCircle size={16} className="list-icon" />
                Spouse of deceased police personnel (with valid service records)
              </li>
              <li>
                <CheckCircle size={16} className="list-icon" />
                Must provide valid police ID and address proof
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Membership
