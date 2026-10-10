import { Heart, Sparkles } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section id="couple" className="couple-section">
      <div className="section-header">
        <div className="sub-tag">THE HAPPY COUPLE</div>
        <h2 className="section-title">Celebrating The Blessed Union</h2>
        <div className="ornamental-line-divider">
          <span>❦</span>
        </div>
      </div>

      {/* Spiritual Dua Banner */}
      <div className="spiritual-dua-card">
        <div className="bismillah-calligraphy-large">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <p className="quranic-translation">
          &ldquo;In the Name of Allah, The Most Beneficent, The Most Merciful&rdquo;
        </p>
        <blockquote className="dua-prayer">
          &ldquo;O Allah, Guide This Marriage to the best of Understanding, Happiness, Prosperity, and Success. Ameen.&rdquo;
        </blockquote>
      </div>

      <div className="hosts-invitation-box">
        <div className="parents-names">Mrs. B.K. Ghousiya &amp; Mr. B.K. Ghouse Mohiddin</div>
        <p className="invite-lead-text">
          Cordially welcome you to the auspicious Nikaah Ceremony of their Elder Son
        </p>
      </div>

      {/* The Couple Showcase Grid */}
      <div className="couple-showcase-container">
        {/* Groom Card */}
        <div className="couple-profile-card groom-card">
          <div className="profile-ornament">
            <span>GROOM</span>
          </div>
          <div className="avatar-frame">
            <div className="avatar-letter">K</div>
          </div>
          <h3 className="partner-name">Khalid</h3>
          <span className="partner-degree">B.Tech</span>
          <div className="partner-designation">Ward Planning &amp; Regulation Secretary</div>
          <p className="partner-relation">Elder Son of Mrs. B.K. Ghousiya &amp; Mr. B.K. Ghouse Mohiddin</p>
        </div>

        {/* Center Heart & Artwork */}
        <div className="couple-center-divider">
          <div className="illustration-wrapper">
            <img
              src="/couple_sketch.jpg"
              alt="Khalid & Noor-E-Chesmi"
              className="couple-art-image"
              loading="lazy"
            />
            <div className="golden-frame-overlay"></div>
          </div>
          <div className="heart-circle">
            <Heart size={26} className="beating-heart" />
          </div>
          <div className="shimmer-text-tag">United with Faith &amp; Love</div>
        </div>

        {/* Bride Card */}
        <div className="couple-profile-card bride-card">
          <div className="profile-ornament">
            <span>BRIDE</span>
          </div>
          <div className="avatar-frame">
            <div className="avatar-letter">N</div>
          </div>
          <h3 className="partner-name">Noor-E-Chesmi</h3>
          <span className="partner-degree">B.Sc., B.Ed</span>
          <div className="partner-designation">Eldest Daughter</div>
          <p className="partner-relation">Daughter of Mrs. &amp; Mr. M. Khajavali</p>
        </div>
      </div>

      {/* Special Blessing Card */}
      <div className="special-dua-card">
        <Sparkles size={20} className="dark-icon" />
        <p className="special-prayer-text">
          &ldquo;Ya Allah, Strengthen their bond with faith, trust and love&rdquo;
        </p>
        <div className="blessing-authors">— Reshma, Arshad</div>
      </div>

      <div className="compliments-black-ribbon-row">
        <div className="black-ribbon-badge">
          <span>Best Compliments from</span>
        </div>
        <span className="relatives-script">Relatives &amp; Friends</span>
      </div>
    </section>
  );
}
