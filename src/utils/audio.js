// Audio disabled per user requirement - completely silent
class SoundManager {
  init() {}
  playChime() {}
  playPetalSound() {}
  startAmbient() {}
  stopAmbient() {}
  toggleMute() {
    return false;
  }
}

export const soundManager = new SoundManager();
