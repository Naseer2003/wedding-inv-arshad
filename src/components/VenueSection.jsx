import { MapPin, Navigation, Car, Share2 } from 'lucide-react';

export default function VenueSection() {
  const venues = [
    {
      title: 'Mehfil-E-Nikah Venue',
      hallName: 'GOLDEN EMPIRE FUNCTION HALL',
      address: 'Madakasira Road, Penukonda, Sri Sathya Sai District, Andhra Pradesh',
      timeText: 'Sunday, 11th Oct 2026 • 11:30 AM',
      landmarks: 'Easily accessible from Penukonda Main Junction & NH 44',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Golden+Empire+Function+Hall+Madakasira+Road+Penukonda',
      embedQuery: 'Golden+Empire+Function+Hall+Madakasira+Road+Penukonda'
    },
    {
      title: 'Dawat-E-Walima Venue',
      hallName: 'RMS FUNCTION HALL',
      address: 'Beside Reliance Mart, Balaji Talkies Road, Hindupur, Andhra Pradesh',
      timeText: 'Monday, 12th Oct 2026 • 1:00 PM Onwards',
      landmarks: 'Adjacent to Reliance Mart, Balaji Talkies Road center',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=RMS+Function+Hall+Balaji+Talkies+Road+Hindupur',
      embedQuery: 'RMS+Function+Hall+Balaji+Talkies+Road+Hindupur'
    }
  ];

  const handleShareVenue = (venue) => {
    const text = `📍 Wedding Venue: ${venue.hallName}\n${venue.address}\nEvent: ${venue.timeText}\nDirections: ${venue.mapUrl}`;
    if (navigator.share) {
      navigator.share({
        title: venue.hallName,
        text: text,
        url: venue.mapUrl
      }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <section id="venues" className="venues-section">
      <div className="section-header">
        <div className="sub-tag">LOCATION &amp; DIRECTIONS</div>
        <h2 className="section-title">Venues &amp; Route Guide</h2>
        <div className="ornamental-line-divider">
          <span>❦</span>
        </div>
        <p className="section-desc">
          Tap below to navigate directly on Google Maps or share the exact venue location with family and drivers.
        </p>
      </div>

      <div className="venues-grid">
        {venues.map((v, i) => (
          <div key={i} className="venue-card">
            <div className="venue-card-header">
              <span className="venue-badge">{v.title}</span>
              <h3 className="venue-hall-title">{v.hallName}</h3>
            </div>

            <div className="venue-card-body">
              <div className="venue-info-item">
                <MapPin className="dark-icon" size={20} />
                <p className="venue-address-text">{v.address}</p>
              </div>

              <div className="venue-info-item">
                <Car className="dark-icon" size={20} />
                <p className="venue-landmark-text">Landmark: {v.landmarks}</p>
              </div>

              <div className="map-frame-box">
                <iframe
                  title={v.hallName}
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '10px' }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${v.embedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>

              <div className="venue-btn-group">
                <a
                  href={v.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-primary-btn"
                >
                  <Navigation size={15} /> Open in Google Maps
                </a>
                <button
                  type="button"
                  className="venue-secondary-btn"
                  onClick={() => handleShareVenue(v)}
                >
                  <Share2 size={15} /> Share Location
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
