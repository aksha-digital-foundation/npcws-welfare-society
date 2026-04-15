import { Calendar, Tag } from 'lucide-react'
import { newsItems } from '../data/news'
import './News.css'

const categoryColors = {
  Health: 'cat-health',
  Housing: 'cat-housing',
  Education: 'cat-education',
  General: 'cat-general',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function News() {
  return (
    <main className="page">
      <div className="container">
        <section className="news-header">
          <h1 className="page-title">News & Announcements</h1>
          <p className="page-subtitle">
            Stay updated with the latest news, events, and announcements from
            NPCWS.
          </p>
        </section>

        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-meta">
                <span className={`news-category ${categoryColors[item.category]}`}>
                  <Tag size={12} />
                  {item.category}
                </span>
                <span className="news-date">
                  <Calendar size={14} />
                  {formatDate(item.date)}
                </span>
              </div>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default News
