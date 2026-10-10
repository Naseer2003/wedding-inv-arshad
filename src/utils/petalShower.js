import confetti from 'canvas-confetti';

// Real organic rose petal SVG paths
const petalPath1 = confetti.shapeFromPath({
  path: 'M 14 0 C 24 5, 28 18, 14 28 C 0 18, 4 5, 14 0 Z'
});

const petalPath2 = confetti.shapeFromPath({
  path: 'M 12 2 C 22 7, 24 22, 12 26 C 2 22, 2 7, 12 2 Z'
});

const sakuraShape = confetti.shapeFromText({
  text: '🌸',
  scalar: 2.2
});

const roseShape = confetti.shapeFromText({
  text: '🌹',
  scalar: 2.0
});

// Authentic rose & floral petal colors (Zero black, zero grey, zero paper squares)
const PETAL_COLORS = [
  '#e11d48', // Ruby red rose
  '#be123c', // Deep velvet rose
  '#f472b6', // Soft blush pink
  '#fb7185', // Fresh rose petal
  '#fda4af', // Delicate pale petal
  '#fff5f7', // Pure white jasmine petal
  '#fbbf24'  // Gold blessing shimmer
];

export function showerRosePetals(options = {}) {
  const originY = options.originY ?? 0.65;
  const count = options.count ?? 55;

  // 1. Trigger background canvas full-screen floating rose petal cascade
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('trigger-petal-shower', {
        detail: { count: 80 }
      })
    );
  }

  // 2. Burst authentic rose and flower petal shapes
  try {
    // Center fountain of rose petals
    confetti({
      particleCount: count,
      spread: 90,
      startVelocity: 35,
      origin: { y: originY, x: 0.5 },
      shapes: [petalPath1, petalPath2, sakuraShape, roseShape],
      colors: PETAL_COLORS,
      gravity: 0.65, // Gentle float instead of heavy fall
      drift: 0.15,
      scalar: 1.5,
      ticks: 320
    });

    // Gentle second cascade from slightly higher
    setTimeout(() => {
      confetti({
        particleCount: Math.floor(count * 0.7),
        spread: 110,
        startVelocity: 25,
        origin: { y: Math.max(0.1, originY - 0.25), x: 0.5 },
        shapes: [petalPath1, petalPath2, sakuraShape, roseShape],
        colors: PETAL_COLORS,
        gravity: 0.55,
        drift: 0.25,
        scalar: 1.6,
        ticks: 350
      });
    }, 280);
  } catch (err) {
    console.warn('Petal confetti burst fallback:', err);
  }
}
