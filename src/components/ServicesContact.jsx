import { useState } from 'react';
import { Phone, MessageCircle, Copy, Check, Sparkles } from 'lucide-react';

export default function ServicesContact() {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const contacts = [
    {
      id: 'num1',
      raw: '7032516672',
      display: '+91 70325 16672',
      badge: 'Inquiries & Orders',
      whatsappMessage: 'Hi! I saw the wedding website and I want to inquire about a Website Like This, Catering, or Video Editing services.'
    },
    {
      id: 'num2',
      raw: '9391282890',
      display: '+91 93912 82890',
      badge: 'Bookings & Support',
      whatsappMessage: 'Hi! I saw the wedding website and I want to inquire about a Website Like This, Catering, or Video Editing services.'
    }
  ];

  const services = [
    {
      image: '/services/website.jpg',
      tag: 'Digital Experience',
      title: 'Website Like This',
      desc: 'Interactive royal wedding websites with navigation routes, Google Maps, RSVP, sound & petal animations.'
    },
    {
      image: '/services/catering.jpg',
      tag: 'Grand Feast',
      title: 'Royal Catering',
      desc: 'Authentic royal cuisines, fragrant biryani, lavish buffet setups & warm dedicated banquet hospitality.'
    },
    {
      image: '/services/video.jpg',
      tag: 'Cinematic Memories',
      title: 'Video Editing',
      desc: 'Cinematic 4K wedding trailers, Instagram reels, photo highlights & professional ceremony coverage.'
    }
  ];

  const handleCopy = (num, id) => {
    navigator.clipboard.writeText(num).then(() => {
      setCopiedNumber(id);
      setTimeout(() => {
        setCopiedNumber(null);
      }, 2500);
    });
  };

  return (
    <section id="services" className="services-contact-section" aria-label="Services and Contact">
      <div className="services-card-wrapper">
        {/* Top Decorative Tag */}
        <div className="services-badge-tag">
          <Sparkles size={14} />
          <span>BESPOKE SERVICES</span>
        </div>

        {/* Section Heading */}
        <div className="services-header-area">
          <h2 className="services-headline">
            IF YOU WANT A WEBSITE LIKE THIS, CATERING, VIDEO EDITING, ANY SERVICES CONTACT THESE NUMBERS
          </h2>
          <p className="services-subheadline">
            Make your special day seamless and memorable. Reach out directly to book bespoke web development, royal wedding catering, and cinematic video editing.
          </p>
        </div>

        {/* Responsive Image Showcase Cards (3 items: Website, Catering, Video Editing) */}
        <div className="services-image-showcase-grid">
          {services.map((item, index) => (
            <div key={index} className="service-image-card">
              <div className="service-img-container">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="service-card-img"
                />
                <span className="service-img-tag">{item.tag}</span>
              </div>
              <div className="service-card-info">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Divider */}
        <div className="services-contact-lead">
          <span className="lead-tag">DIRECT CONTACT NUMBERS</span>
          <p>Tap below to Call or chat on WhatsApp directly:</p>
        </div>

        {/* Contact Numbers Row */}
        <div className="services-numbers-grid">
          {contacts.map((contact) => (
            <div key={contact.id} className="service-contact-box">
              <div className="contact-box-header">
                <span className="contact-role-badge">{contact.badge}</span>
                <button
                  type="button"
                  className={`contact-copy-btn ${copiedNumber === contact.id ? 'copied' : ''}`}
                  onClick={() => handleCopy(contact.raw, contact.id)}
                  title="Copy Phone Number"
                  aria-label={`Copy ${contact.display}`}
                >
                  {copiedNumber === contact.id ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="contact-number-display">
                <Phone size={22} className="phone-pulse-icon" />
                <a href={`tel:${contact.raw}`} className="number-link" title="Tap to call">
                  {contact.display}
                </a>
              </div>

              {/* Action Buttons: Direct Call & WhatsApp */}
              <div className="contact-action-row">
                <a
                  href={`tel:${contact.raw}`}
                  className="contact-btn btn-call"
                  title={`Call ${contact.display}`}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/91${contact.raw}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn btn-whatsapp"
                  title={`Chat on WhatsApp with ${contact.display}`}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee / Footer Note */}
        <div className="services-footer-note">
          <span>✨ Fast response on WhatsApp &amp; Phone Calls &bull; Available 7 Days a Week ✨</span>
        </div>
      </div>
    </section>
  );
}
