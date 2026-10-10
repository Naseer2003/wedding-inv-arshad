import { Calendar, Heart, MapPin, MessageSquare } from 'lucide-react';
import { showerRosePetals } from '../utils/petalShower';

export default function MobileNav() {
  const handleQuickPetalShower = () => {
    showerRosePetals({ originY: 0.85, count: 50 });
  };

  return (
    <div className="mobile-bottom-bar-wrapper">
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <a href="#couple" className="nav-item">
          <Heart size={18} />
          <span>Couple</span>
        </a>

        <a href="#events" className="nav-item">
          <Calendar size={18} />
          <span>Events</span>
        </a>

        {/* Center Floating Action Button */}
        <button
          type="button"
          className="mobile-fab-center"
          onClick={handleQuickPetalShower}
          aria-label="Shower flower petals"
        >
          <div className="fab-inner">🌸</div>
        </button>

        <a href="#venues" className="nav-item">
          <MapPin size={18} />
          <span>Venues</span>
        </a>

        <a href="#celebration" className="nav-item">
          <MessageSquare size={18} />
          <span>Blessings</span>
        </a>
      </nav>
    </div>
  );
}
