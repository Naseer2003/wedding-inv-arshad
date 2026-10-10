import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function WelcomeEnvelope({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    try {
      confetti({
        particleCount: 70,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#121212', '#a8a8a8', '#f472b6', '#ffffff']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ['#111111', '#cccccc', '#fbbf24']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ['#111111', '#cccccc', '#fbbf24']
        });
      }, 300);
    } catch {
      // ignore
    }

    setTimeout(() => {
      onOpen();
    }, 850);
  };

  if (isOpen) return null;

  return (
    <div className={`welcome-overlay ${isOpening ? 'opening' : ''}`}>
      {/* Hanging Silver Lanterns on Overlay */}
      <div className="envelope-lanterns">
        <div className="lantern-item lantern-1">
          <div className="lantern-cord"></div>
          <div className="lantern-body">🏮</div>
        </div>
        <div className="lantern-item lantern-2">
          <div className="lantern-cord"></div>
          <div className="lantern-body">✨</div>
        </div>
        <div className="lantern-item lantern-3">
          <div className="lantern-cord"></div>
          <div className="lantern-body">🏮</div>
        </div>
      </div>

      <div className="royal-card-container">
        <div className="card-ornament-top">
          <span className="bismillah-calligraphy">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <p className="bismillah-sub">In the Name of Allah, The Most Beneficent, The Most Merciful</p>
        </div>

        <div className="royal-invitation-badge">
          <span>WELCOME TO THE WEDDING</span>
        </div>

        <div className="couple-previews">
          <h2 className="couple-names-royal">
            Khalid <span>&amp;</span> Noor-E-Chesmi
          </h2>
          <div className="dates-preview-tag">
            <span>Mehfil-E-Nikah &bull; 11 October 2026</span>
            <span className="dot-sep">&bull;</span>
            <span>Dawat-E-Walima &bull; 12 October 2026</span>
          </div>
        </div>

        {/* Elegant Wax Seal Button */}
        <div className="seal-action-box">
          <button 
            type="button" 
            className="wax-seal-btn" 
            onClick={handleOpenClick}
            aria-label="Open wedding celebration"
          >
            <div className="seal-inner">
              <span className="seal-monogram">K &hearts; N</span>
              <span className="seal-text">OPEN</span>
            </div>
            <div className="seal-pulse-ring"></div>
            <div className="seal-pulse-ring-2"></div>
          </button>
          <p className="open-instruction">
            <span className="sparkle-icon">✨</span> Touch seal to enter the wedding <span className="sparkle-icon">✨</span>
          </p>
        </div>

        <div className="card-ornament-bottom">
          <p className="family-invite-sub">
            Mrs. B.K. Ghousiya &amp; Mr. B.K. Ghouse Mohiddin
          </p>
        </div>
      </div>
    </div>
  );
}
