/**
 * Web Audio API synthesizer for Asi.K signature soundscape previews
 * Generates warm analog chord progressions, subtle vinyl texture, and basslines
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: any = null;
  private masterGain: GainNode | null = null;
  private spatialPanner: StereoPannerNode | null = null;
  private isDolbyAtmosSimulated = true;
  private currentTrackId = 'bftl';
  private onStateChangeCallback: ((playing: boolean, trackId: string) => void) | null = null;

  // Chord frequencies for themes
  private trackThemes: Record<string, { chords: number[][]; bpm: number; name: string }> = {
    bftl: {
      name: 'BFTL: Golden Rye (Alternative R&B)',
      bpm: 92,
      // Eb minor: Eb, Gb, Bb, Db
      chords: [
        [155.56, 185.00, 233.08, 277.18], // Ebm7
        [138.59, 174.61, 207.65, 261.63], // Db7
        [123.47, 155.56, 185.00, 233.08], // Bmaj7
        [116.54, 146.83, 174.61, 220.00], // Bb7
      ]
    },
    youth: {
      name: 'Youth (Modern Indie)',
      bpm: 104,
      // G Major 9 -> Em9 -> Cmaj7 -> D
      chords: [
        [196.00, 246.94, 293.66, 370.00], // Gmaj9
        [164.81, 196.00, 246.94, 293.66], // Em7
        [130.81, 164.81, 196.00, 246.94], // Cmaj7
        [146.83, 185.00, 220.00, 293.66], // Dadd9
      ]
    },
    'only-you': {
      name: 'Only You (Melon #7 Chill Electronica)',
      bpm: 118,
      // F#m -> A -> E -> Bm
      chords: [
        [185.00, 220.00, 277.18, 329.63], // F#m7
        [220.00, 277.18, 329.63, 415.30], // Amaj7
        [164.81, 207.65, 246.94, 329.63], // E
        [123.47, 146.83, 185.00, 220.00], // Bm7
      ]
    },
    sleepless: {
      name: '잠에 들지 못한 채 (Midnight Dawn)',
      bpm: 75,
      // C#m9 -> Amaj7 -> F#m7 -> G#7
      chords: [
        [138.59, 164.81, 207.65, 277.18], // C#m7
        [110.00, 138.59, 164.81, 220.00], // Amaj7
        [92.50, 110.00, 138.59, 185.00],  // F#m7
        [103.83, 130.81, 164.81, 207.65], // G#7
      ]
    },
    'starry-night': {
      name: 'Starry Night (Midnight Ambient)',
      bpm: 85,
      chords: [
        [116.54, 138.59, 174.61, 233.08], // Bbm7
        [103.83, 130.81, 155.56, 207.65], // Ab7
        [92.50, 116.54, 138.59, 185.00],  // Gbmaj7
        [87.31, 110.00, 130.81, 174.61],  // F7
      ]
    }
  };

  private step = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

      if (this.ctx.createStereoPanner) {
        this.spatialPanner = this.ctx.createStereoPanner();
        this.masterGain.connect(this.spatialPanner);
        this.spatialPanner.connect(this.ctx.destination);
      } else {
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setCallback(cb: (playing: boolean, trackId: string) => void) {
    this.onStateChangeCallback = cb;
  }

  public togglePlay(trackId?: string) {
    this.initContext();
    if (trackId && trackId !== this.currentTrackId) {
      this.currentTrackId = trackId;
      if (!this.isPlaying) {
        this.start();
      } else {
        this.step = 0;
      }
      this.notify();
      return;
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      if (trackId) this.currentTrackId = trackId;
      this.start();
    }
    this.notify();
  }

  public start() {
    this.initContext();
    this.isPlaying = true;
    this.step = 0;

    const track = this.trackThemes[this.currentTrackId] || this.trackThemes['bftl'];
    const intervalMs = (60 / track.bpm) * 1000 * 2; // chord every 2 beats

    this.playChordStep();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.playChordStep();
    }, intervalMs);
    this.notify();
  }

  public stop() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.notify();
  }

  public setTrack(id: string) {
    this.currentTrackId = id;
    if (this.isPlaying) {
      this.start();
    }
    this.notify();
  }

  public toggleDolbyAtmos() {
    this.isDolbyAtmosSimulated = !this.isDolbyAtmosSimulated;
    return this.isDolbyAtmosSimulated;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  public getCurrentTrackId() {
    return this.currentTrackId;
  }

  public getCurrentTrackName() {
    const track = this.trackThemes[this.currentTrackId] || this.trackThemes['bftl'];
    return track.name;
  }

  private notify() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.isPlaying, this.currentTrackId);
    }
  }

  private playChordStep() {
    if (!this.ctx || !this.masterGain) return;

    const track = this.trackThemes[this.currentTrackId] || this.trackThemes['bftl'];
    const chords = track.chords;
    const currentChord = chords[this.step % chords.length];
    this.step++;

    const now = this.ctx.currentTime;
    const chordDuration = (60 / track.bpm) * 2;

    // Spatial panning movement for Dolby Atmos feel
    if (this.spatialPanner && this.isDolbyAtmosSimulated) {
      const panTarget = Math.sin(this.step * 1.2) * 0.45;
      this.spatialPanner.pan.setTargetAtTime(panTarget, now, 0.4);
    }

    // Play each voice of the chord with subtle detuning and low-pass filter
    currentChord.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const noteGain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      osc.type = i === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Filter: warm low-pass
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 + i * 200, now);
      filter.frequency.exponentialRampToValueAtTime(450, now + chordDuration);

      // Envelope
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.08 / (i + 1), now + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + chordDuration * 0.95);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + chordDuration);
    });

    // Add deep sub bass note
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    const rootFreq = currentChord[0] / 2; // octave down

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(rootFreq, now);

    subGain.gain.setValueAtTime(0, now);
    subGain.gain.linearRampToValueAtTime(0.12, now + 0.1);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + chordDuration * 0.9);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc.start(now);
    subOsc.stop(now + chordDuration);
  }
}

export const audioEngine = new SoundscapeEngine();
