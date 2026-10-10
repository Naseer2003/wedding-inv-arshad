import { Sparkles, Calendar, Heart, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenEnvelope, petalsEnabled, onTogglePetals }) {
  return (
    <header className="hero-wedding-header">
      {/* Top Floating Controls */}
      <div className="top-action-bar">
        <button
          type="button"
          className="glass-pill-btn"
          onClick={onOpenEnvelope}
          title="Re-open Royal Seal Envelope"
        >
          <span>✉️ Royal Seal</span>
        </button>

        <div className="right-controls">
          <button
            type="button"
            className={`glass-pill-btn ${petalsEnabled ? 'active-pill' : ''}`}
            onClick={onTogglePetals}
            title={petalsEnabled ? 'Pause falling petals' : 'Enable falling petals'}
          >
            <Sparkles size={16} /> <span>{petalsEnabled ? 'Petals: On' : 'Petals: Off'}</span>
          </button>
        </div>
      </div>

      <div className="hero-main-content">
        {/* Arabic Calligraphy Header */}
        <div className="arabic-bismillah-hero">
          <span className="bismillah-txt">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <span className="bismillah-translation">
            &ldquo;In the Name of Allah, The Most Beneficent, The Most Merciful&rdquo;
          </span>
          <p className="bismillah-dua-small">
            &ldquo;O Allah, Guide This Marriage to the best of Understanding, Happiness, Prosperity, and Success. Ameen.&rdquo;
          </p>
        </div>

        <div className="invitation-gold-ribbon">
          <div className="ribbon-line"></div>
          <span className="ribbon-text">WELCOME TO THE WEDDING</span>
          <div className="ribbon-line"></div>
        </div>

        <div className="insha-allah-badge">
          <span>Insha Allah</span>
          <div className="badge-flourish">❦</div>
        </div>

        {/* Grand Couple Names */}
        <div className="couple-grand-title">
          <h1 className="groom-title">Khalid</h1>
          <div className="ampersand-circle">&amp;</div>
          <h1 className="bride-title">Noor-E-Chesmi</h1>
        </div>

        <p className="cordial-invitation-sub">
          <strong>Mrs. B.K. Ghousiya</strong> &amp; <strong>Mr. B.K. Ghouse Mohiddin</strong>
          <br />
          Cordially welcome you to celebrate the auspicious Nikaah Ceremony of their Elder Son
        </p>

        {/* Key Event Badges */}
        <div className="hero-quick-event-badges">
          <div className="quick-badge">
            <Calendar size={18} className="dark-icon" />
            <div>
              <strong>11 October 2026 &bull; Sunday</strong>
              <span>Mehfil-E-Nikah &bull; Penukonda</span>
            </div>
          </div>
          <div className="quick-badge-divider"></div>
          <div className="quick-badge">
            <Calendar size={18} className="dark-icon" />
            <div>
              <strong>12 October 2026 &bull; Monday</strong>
              <span>Dawat-E-Walima &bull; Hindupur</span>
            </div>
          </div>
        </div>

        {/* Quick Nav CTA buttons */}
        <div className="hero-nav-buttons">
          <a href="#events" className="hero-cta-primary">
            <Calendar size={16} /> View Ceremonies
          </a>
          <a href="#couple" className="hero-cta-secondary">
            <Heart size={16} /> The Couple
          </a>
          <a href="#celebration" className="hero-cta-secondary">
            <Sparkles size={16} /> Blessings &amp; Flowers
          </a>
        </div>
      </div>
    </header>
  );
}
