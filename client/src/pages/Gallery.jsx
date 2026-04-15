import { Camera, Calendar, Images } from 'lucide-react'
import { galleryAlbums } from '../data/gallery'
import './Gallery.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function Gallery() {
  return (
    <main className="page">
      <div className="container">
        <section className="gallery-header">
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-subtitle">
            Highlights from NPCWS events, ceremonies, and community activities.
          </p>
        </section>

        <div className="gallery-grid">
          {galleryAlbums.map((album) => (
            <div key={album.id} className="album-card">
              <div className="album-placeholder">
                <Camera size={32} />
              </div>
              <div className="album-info">
                <h2 className="album-title">{album.title}</h2>
                <p className="album-desc">{album.description}</p>
                <div className="album-meta">
                  <span className="album-date">
                    <Calendar size={14} />
                    {formatDate(album.date)}
                  </span>
                  <span className="album-count">
                    <Images size={14} />
                    {album.count} photos
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>
            More photos will be added as events take place. For older photos,
            visit the NPCWS office or contact us.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Gallery
