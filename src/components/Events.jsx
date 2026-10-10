import { useState } from 'react';
import { MapPin, Clock, Calendar, Check, Copy, Navigation, ExternalLink } from 'lucide-react';

export default function Events() {
  const [copiedId, setCopiedId] = useState(null);

  const events = [
    {
      id: 'nikah',
      title: 'Mehfil-E-Nikah',
      badge: 'Insha Allah',
      gregorianDate: '11-10-2026 • Sunday',
      hijriDate: '30th Rabi Al-Akhar, 1448h',
      timeText: '11:30 AM',
      clockHour: 11.5,
      venueName: 'GOLDEN EMPIRE FUNCTION HALL',
      address: 'Madakasira Road, Penukonda, Andhra Pradesh',
      mapsQuery: 'Golden Empire Function Hall, Madakasira Road, Penukonda',
      calendarTitle: 'Mehfil-E-Nikah of Khalid & Noor-E-Chesmi',
      calendarDetails: 'Mehfil-E-Nikah Ceremony at Golden Empire Function Hall, Penukonda',
      calendarStart: '20261011T060000Z', // 11:30 AM IST is 06:00 UTC
      calendarEnd: '20261011T100000Z'
    },
    {
      id: 'walima',
      title: 'Dawat-E-Walima',
      badge: 'Feast & Blessings',
      gregorianDate: '12-10-2026 • Monday',
      hijriDate: '1st Jumada Al-Awwal, 1448h',
      timeText: '1:00 PM (On Wards)',
      clockHour: 1,
      venueName: 'RMS FUNCTION HALL',
      address: 'Beside Reliance Mart, Balaji Talkies Road, Hindupur, Andhra Pradesh',
      mapsQuery: 'RMS Function Hall, Balaji Talkies Road, Hindupur',
      calendarTitle: 'Dawat-E-Walima of Khalid & Noor-E-Chesmi',
      calendarDetails: 'Dawat-E-Walima Reception at RMS Function Hall, Hindupur',
      calendarStart: '20261012T073000Z', // 1:00 PM IST is 07:30 UTC
      calendarEnd: '20261012T130000Z'
    }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getGoogleCalendarUrl = (ev) => {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = `&text=${encodeURIComponent(ev.calendarTitle)}`;
    const details = `&details=${encodeURIComponent(ev.calendarDetails)}`;
    const location = `&location=${encodeURIComponent(ev.address)}`;
    const dates = `&dates=${ev.calendarStart}/${ev.calendarEnd}`;
    return `${base}${text}${details}${location}${dates}`;
  };

  return (
    <section id="events" className="events-section">
      <div className="section-header">
        <div className="sub-tag">AUSPICIOUS OCCASIONS</div>
        <h2 className="section-title">Ceremonies &amp; Itinerary</h2>
        <div className="golden-divider">
          <span>❖</span>
        </div>
        <p className="section-desc">
          We eagerly look forward to your gracious presence and blessings to celebrate these sacred moments with us.
        </p>
      </div>

      <div className="events-grid">
        {events.map((ev) => (
          <div key={ev.id} className="event-card">
            {/* Islamic Arch Border Ornament */}
            <div className="card-top-arch">
              <span className="arch-badge">{ev.badge}</span>
            </div>

            <div className="card-content">
              <h3 className="event-card-title">{ev.title}</h3>

              {/* Time & Clock visualization */}
              <div className="event-time-clock-box">
                <div className="analog-clock-graphic">
                  <div className="clock-face">
                    {/* Hour Hand */}
                    <div
                      className="clock-hour-hand"
                      style={{
                        transform: `rotate(${ev.clockHour * 30}deg)`
                      }}
                    ></div>
                    {/* Minute Hand */}
                    <div
                      className="clock-minute-hand"
                      style={{
                        transform: `rotate(${ev.clockHour === 11.5 ? 180 : 0}deg)`
                      }}
                    ></div>
                    <div className="clock-center-dot"></div>
                  </div>
                </div>
                <div className="time-details">
                  <span className="time-label">Time</span>
                  <span className="time-val">{ev.timeText}</span>
                </div>
              </div>

              {/* Date Box */}
              <div className="event-meta-row">
                <div className="meta-icon-col">
                  <Calendar size={22} className="gold-icon" />
                </div>
                <div className="meta-info-col">
                  <strong className="date-main">{ev.gregorianDate}</strong>
                  <span className="date-hijri">({ev.hijriDate})</span>
                </div>
              </div>

              {/* Venue Box */}
              <div className="event-meta-row">
                <div className="meta-icon-col">
                  <MapPin size={22} className="gold-icon pin-pulse" />
                </div>
                <div className="meta-info-col">
                  <strong className="venue-title">{ev.venueName}</strong>
                  <p className="venue-address">{ev.address}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="event-actions">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary-action"
                >
                  <Navigation size={16} /> Get Directions
                </a>

                <a
                  href={getGoogleCalendarUrl(ev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn secondary-action"
                >
                  <Calendar size={16} /> Add to Calendar
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(ev.id, `${ev.venueName}, ${ev.address}`)}
                  className="action-btn outline-action"
                >
                  {copiedId === ev.id ? (
                    <>
                      <Check size={16} className="text-emerald" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy Address
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
