import { Shield, Target, Eye, Users, Award, MapPin } from 'lucide-react'
import './About.css'

const leadership = [
  { role: 'President', name: 'Sri K. Ramesh Babu', designation: 'Circle Inspector (Retd.)' },
  { role: 'Vice President', name: 'Sri P. Venkata Rao', designation: 'Sub-Inspector' },
  { role: 'General Secretary', name: 'Sri M. Srinivasa Rao', designation: 'Head Constable' },
  { role: 'Treasurer', name: 'Sri B. Naga Raju', designation: 'Constable' },
]

function About() {
  return (
    <main className="page">
      <div className="container">
        <section className="about-header">
          <div className="about-badge">
            <Shield size={18} />
            Established 2004
          </div>
          <h1 className="page-title">About NPCWS</h1>
          <p className="page-subtitle">
            Nagarampalem Police Children Welfare Society serves the families of
            police personnel in Guntur district through housing, healthcare, and
            education support programmes.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mv-card">
            <div className="mv-icon">
              <Target size={28} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To improve the quality of life of police families in Guntur district
              by providing access to affordable housing, healthcare, and education
              support — ensuring that those who protect us are themselves well
              supported.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <Eye size={28} />
            </div>
            <h2>Our Vision</h2>
            <p>
              A society where every police family in Nagarampalem and surrounding
              areas has a secure home, access to quality healthcare, and the best
              possible education for their children.
            </p>
          </div>
        </section>

        <section className="history-section">
          <h2 className="section-heading">Our History</h2>
          <div className="history-content">
            <p>
              NPCWS was founded in 2004 by a group of serving and retired police
              officers in Nagarampalem, Guntur, who recognised the need for a
              dedicated welfare body to support police families. What began as a
              small initiative with 25 founding members has grown into a society
              serving over 500 families.
            </p>
            <p>
              Over two decades, NPCWS has distributed housing plots across three
              layout phases, conducted annual health camps in partnership with
              local hospitals, and awarded merit scholarships to hundreds of
              students from police families.
            </p>
            <p>
              The society is registered under the Andhra Pradesh Societies
              Registration Act and operates under the guidance of elected office
              bearers and an advisory committee of senior police officials.
            </p>
          </div>
        </section>

        <section className="leadership-section">
          <h2 className="section-heading">Leadership</h2>
          <div className="leadership-grid">
            {leadership.map((person) => (
              <div key={person.role} className="leader-card">
                <div className="leader-avatar">
                  <Users size={24} />
                </div>
                <div className="leader-info">
                  <span className="leader-role">{person.role}</span>
                  <span className="leader-name">{person.name}</span>
                  <span className="leader-designation">{person.designation}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="at-a-glance">
          <h2 className="section-heading">At a Glance</h2>
          <div className="glance-grid">
            <div className="glance-item">
              <Award size={24} className="glance-icon" />
              <span className="glance-number">500+</span>
              <span className="glance-label">Member Families</span>
            </div>
            <div className="glance-item">
              <Shield size={24} className="glance-icon" />
              <span className="glance-number">3</span>
              <span className="glance-label">Welfare Schemes</span>
            </div>
            <div className="glance-item">
              <MapPin size={24} className="glance-icon" />
              <span className="glance-number">20+</span>
              <span className="glance-label">Years of Service</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
