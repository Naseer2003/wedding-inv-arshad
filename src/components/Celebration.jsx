import { Sparkles, Share2 } from 'lucide-react';
import { showerRosePetals } from '../utils/petalShower';

export default function Celebration() {
  const handleShowerBlessings = () => {
    showerRosePetals({ originY: 0.65, count: 65 });
  };

  const handleShareInvite = () => {
    const shareText = `💍 Welcome to the Wedding 💍\n\nInsha Allah, you are warmly welcomed to celebrate the wedding celebrations of\nKhalid & Noor-E-Chesmi!\n\n✨ Mehfil-E-Nikah: Sunday, 11th Oct 2026 (11:30 AM)\nGolden Empire Function Hall, Penukonda\n\n✨ Dawat-E-Walima: Monday, 12th Oct 2026 (1:00 PM Onwards)\nRMS Function Hall, Hindupur\n\nView the wedding celebration website with route & directions: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: 'Welcome to the Wedding | Khalid & Noor-E-Chesmi',
        text: shareText,
        url: window.location.href
      }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  return (
    <section id="celebration" className="celebration-section">
      <div className="celebration-burst-banner">
        <div className="burst-content">
          <Sparkles className="burst-sparkle-icon" size={28} />
          <h3>Shower Your Blessings &amp; Prayers</h3>
          <p>Tap below to shower celebratory flower petals for Khalid &amp; Noor-E-Chesmi!</p>
          
          <div className="celebration-actions-row">
            <button
              type="button"
              className="phool-barsao-btn"
              onClick={handleShowerBlessings}
              aria-label="Shower rose petals"
            >
              <span className="phool-icon">🌸</span>
              <span className="phool-text">Shower Rose Petals</span>
              <span className="phool-sep">&bull;</span>
              <span className="phool-urdu">پھول برساؤ</span>
            </button>

            <button
              type="button"
              className="share-invite-btn"
              onClick={handleShareInvite}
            >
              <Share2 size={15} />
              <span>Share Wedding Details</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
