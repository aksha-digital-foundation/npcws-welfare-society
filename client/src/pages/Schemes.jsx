import { Home as HomeIcon, HeartPulse, GraduationCap, CheckCircle, IndianRupee } from 'lucide-react'
import { schemes } from '../data/schemes'
import './Schemes.css'

const iconMap = {
  Home: HomeIcon,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
}

function Schemes() {
  return (
    <main className="page">
      <div className="container">
        <section className="schemes-header">
          <h1 className="page-title">Welfare Schemes</h1>
          <p className="page-subtitle">
            NPCWS offers three comprehensive welfare schemes to support police
            families in Guntur district. Explore each scheme below for details on
            benefits, eligibility, and fees.
          </p>
        </section>

        <div className="schemes-list">
          {schemes.map((scheme) => {
            const Icon = iconMap[scheme.icon]
            return (
              <section key={scheme.id} id={scheme.id} className="scheme-detail">
                <div className="scheme-detail-header">
                  <div className="scheme-detail-icon">
                    <Icon size={32} />
                  </div>
                  <div>
                    <h2>{scheme.title}</h2>
                    <p className="scheme-tagline">{scheme.tagline}</p>
                  </div>
                </div>

                <p className="scheme-description">{scheme.description}</p>

                <div className="scheme-columns">
                  <div className="scheme-column">
                    <h3>Benefits</h3>
                    <ul className="scheme-list">
                      {scheme.benefits.map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={16} className="list-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="scheme-column">
                    <h3>Eligibility</h3>
                    <ul className="scheme-list">
                      {scheme.eligibility.map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={16} className="list-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="scheme-fee">
                  <IndianRupee size={16} />
                  Annual fee: <strong>{scheme.fee}</strong>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Schemes
