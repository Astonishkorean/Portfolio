export type ReleaseType = 'EP' | 'Single';

export interface OfficialRelease {
  id: string;
  title: string;
  englishTitle?: string;
  artistName?: string;
  type: ReleaseType;
  releaseDate: string; // e.g. "2025.07"
  titleTrack: string; // 타이틀곡 제목
  roles: string[];
  theme: string;
  description: string;
  coverImage: string;
  chartHighlight?: string;
  youtubeUrl?: string;
  genre?: string;
  distributor?: string;
  agency?: string;
  tracks?: { title: string; duration?: string; highlight?: boolean; artists?: string; composers?: string }[];
  albumIntro?: string[];
  creditsNote?: string[];
  audioSample?: {
    bpm: number;
    key: string;
    style: string;
  };
}

export interface SoundDirectionItem {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  tags: string[];
  role: string;
  impact: string;
  videoUrl?: string;
}

export interface AdditionalCredit {
  id: string;
  category: 'Dolby ATMOS Mix & Master' | 'Mix & Master' | 'Mastering';
  artist: string;
  title: string;
  format: string; // 'Single' | 'EP' | 'Track'
  year?: string;
  url?: string;
}

export interface MentoringItem {
  id: string;
  title: string;
  organization?: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface WindowState {
  id: string;
  title: string;
  type: 'release' | 'about' | 'direction' | 'credits' | 'mentoring' | 'contact' | 'player';
  data?: any;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size?: { width: number; height: number };
  zIndex: number;
}
