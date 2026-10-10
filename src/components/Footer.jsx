import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="wedding-footer">
      <div className="footer-content">
        <div className="footer-arabic-ayah">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </div>
        <p className="footer-ayah-translation">
          &ldquo;And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.&rdquo;
          <br />
          <span className="ayah-source">— Surah Ar-Rum (30:21)</span>
        </p>

        <div className="footer-golden-crest">
          <div className="crest-line"></div>
          <span className="crest-names">Khalid &amp; Noor-E-Chesmi</span>
          <div className="crest-line"></div>
        </div>

        <div className="footer-compliments">
          <div className="black-ribbon-badge mb-center">
            <span>Best Compliments from</span>
          </div>
          <p className="compliments-list">Relatives &amp; Friends</p>
          <p className="hosts-signature">
            Mrs. B.K. Ghousiya &amp; Mr. B.K. Ghouse Mohiddin
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={15} /> Back to Top
        </button>

        <p className="footer-copy">
          Celebrating Love, Faith &amp; Family &bull; Penukonda &amp; Hindupur &bull; October 2026
        </p>
      </div>
    </footer>
  );
}
