import { OfficialRelease, SoundDirectionItem, AdditionalCredit, MentoringItem } from '../types';

// Asset paths
import bgHero from '../assets/images/asik_gray_bg_1789230338466.jpg';
import avatarImg from '../assets/images/asik_profile_custom.jpeg';
import bftlCover from '../assets/images/asik_bftl_custom.jpg';
import youthCover from '../assets/images/asik_youth_custom.jpg';
import dearMyCover from '../assets/images/asik_dearmy_custom.jpg';
import mamdaeroCover from '../assets/images/asik_mamdaero_custom.jpg';
import somebodyCover from '../assets/images/asik_somebody_custom.jpg';
import onlyYouCover from '../assets/images/asik_onlyyou_custom.jpg';
import starryNightCover from '../assets/images/asik_starrynight_custom.jpg';
import dolbyStudioImg from '../assets/images/dolby_custom.png';
import editorialCover from '../assets/images/asik_editorial_1789225386369.jpg';
import studioContactImg from '../assets/images/asik_studio_contact_1789225964526.jpg';
import emailAppIcon from '../assets/images/email_app_icon_1789230760512.jpg';
import eduAppIcon from '../assets/images/edu_app_icon_1789230772493.jpg';
import sorrowCover from '../assets/images/asik_sorrow_custom.jpg';
import donCover from '../assets/images/asik_don_custom.jpg';
import mmsniCover from '../assets/images/asik_mmsni_custom.jpg';
import cover1224 from '../assets/images/asik_1224_custom.jpg';
import sleeplessCover from '../assets/images/asik_sleepless_custom.jpg';

export const ASSETS = {
  heroBg: bgHero,
  avatar: avatarImg,
  dolbyStudio: dolbyStudioImg,
  editorial: editorialCover,
  studioContact: studioContactImg,
  emailIcon: emailAppIcon,
  eduIcon: eduAppIcon,
  sorrowCover: sorrowCover,
};

export const ARTIST_PROFILE = {
  nameKo: '김병혁',
  stageName: 'Asi.K',
  stageNameKo: '애시케이',
  birthDate: '1998.02.23',
  title: 'Music Producer, Sound Designer & Sound Engineer',
  bio: "‘새벽’, ‘청춘’, ‘사랑’, ‘이별’이라는 테마를 바탕으로 힙합, R&B, 팝 펑크, K-Pop 등 다양한 장르를 아우르는 사운드를 디자인하는 뮤지션이자 사운드 엔지니어입니다. 감성을 자극하는 프로듀싱부터 트렌디하고 완성도 높은 마스터링까지 폭넓은 오디오 스펙트럼을 소화하며, 리스너들에게 깊은 몰입감과 공감을 선사하는 데 집중합니다.",
  coreThemes: ['#새벽', '#청춘', '#사랑', '#이별'],
  genres: ['Hip-Hop', 'Alternative R&B', '팝 펑크 (Pop Punk)', 'K-Pop', 'Indie Electronica', 'Dolby Atmos Spatial'],
  highlights: [
    {
      title: 'Dolby Atmos Accelerator at KOREA 참여 엔지니어 선정',
      year: '2024',
      badge: 'Dolby Atmos',
      description: '차세대 입체 음향 규격인 7.1.2 Dolby Atmos 몰입형 오디오 믹싱 & 마스터링 공식 액셀러레이터 선정 엔지니어',
      linkUrl: 'https://www.dolby.com/creator-lab/seoul-music-accelerator/',
      linkLabel: 'Dolby Seoul Music Accelerator 공식 사이트 바로가기'
    },
    {
      title: '2024 YGPLUS Mixtape ‘Monthly Accelerator Artist’ 선정',
      year: '2024',
      badge: 'YGPLUS Artist',
      description: '음악성과 독창적인 프로듀싱 능력을 인정받아 YGPLUS 믹스테이프 이달의 아티스트로 공식 선정'
    },
    {
      title: '2024 Melon Indie Electronica 차트 7위',
      subtitle: '[Macaroni Music - Only you]',
      year: '2024',
      badge: 'Melon Top 10',
      description: '직접 보컬, 작사, 작곡, 편곡, 마스터링한 트랙으로 멜론 인디 일렉트로니카 주간 차트 7위 달성'
    }
  ],
  socials: [
    { name: 'Instagram', handle: '@asik_d_artist', url: 'https://www.instagram.com/asik_d_artist/' },
    { name: 'YouTube', handle: '@astonishingkorean', url: 'https://www.youtube.com/@astonishingkorean' },
    { name: 'Apple Music', handle: 'Asi.K', url: 'https://music.apple.com/us/artist/asi-k/1482593929' },
    { name: 'Spotify', handle: 'Asi.K', url: 'https://open.spotify.com/artist/48kE5uvv2Eh1iAmXIkZmMO' },
  ],
  contact: {
    email: 'asikbeats@gmail.com',
    location: 'Seoul, Republic of Korea',
    studio: 'Asi.K Spatial & Audio Laboratory'
  }
};

export const OFFICIAL_RELEASES: OfficialRelease[] = [
  {
    id: 'sorrow',
    title: 'SORROW',
    englishTitle: 'SORROW',
    artistName: 'Asi.K (애시케이)',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: '원망해줘 (Feat. Econo_MIC)',
    youtubeUrl: 'https://youtu.be/kzFm8LM_XaE?list=OLAK5uy_mjwQSA_g47-T8_y14uCuoSxyex3Trtb7g',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '우울과 슬픔, 분노와 원망 그 사이 어딘가',
    genre: 'R&B/Soul',
    distributor: 'mixtape.so',
    agency: 'iXPLSA',
    description: 'Asi.K(애시케이)의 1/6 Album [SORROW]. 우울과 슬픔, 분노와 원망 그 사이 어딘가를 직조한 2트랙 싱글 프로젝트.',
    coverImage: sorrowCover,
    tracks: [
      {
        title: '원망해줘 (Feat. Econo_MIC)',
        duration: '03:15',
        highlight: true,
        artists: 'Asi.K (애시케이)',
        composers: 'Lyrics by Asi.K, Econo_MIC / Composed & Arranged by Asi.K'
      },
      {
        title: '나 혼자',
        duration: '03:08',
        highlight: false,
        artists: 'Asi.K (애시케이)',
        composers: 'Lyrics, Composed & Arranged by Asi.K'
      }
    ],
    albumIntro: [
      'Asi.K(애시케이)의 1/6 Album [SORROW]',
      '우울과 슬픔, 분노와 원망 그 사이 어딘가'
    ],
    creditsNote: [
      '1. 원망해줘 (Feat. Econo_MIC)',
      'Lyrics by Asi.K(애시케이), Econo_MIC(이코노마이크)',
      'Composed by Asi.K(애시케이)',
      'Arranged by Asi.K(애시케이)',
      '',
      '2. 나 혼자',
      'Lyrics by Asi.K(애시케이)',
      'Composed by Asi.K(애시케이)',
      'Arranged by Asi.K(애시케이)',
      '',
      'All tracks Recorded by Asi.K(애시케이)',
      'All tracks Mixed & Mastered by Asi.K(애시케이)'
    ],
    audioSample: { bpm: 82, key: 'F Minor', style: 'Dark Alternative R&B / Soul' }
  },
  {
    id: 'bftl',
    title: 'BFTL: Boys From the Last',
    englishTitle: 'Boys From the Last',
    type: 'EP',
    releaseDate: '2025',
    titleTrack: 'Wasted Time',
    youtubeUrl: 'https://youtu.be/aK5loxKHC_g?list=OLAK5uy_mV_fgg2uQ5DpPlLVlvXkLE-5u9eVGyDMg',
    roles: ['작사', '작곡', '편곡'],
    theme: '청춘 & 갈망 (Youth & Longing)',
    description: '청춘의 끝자락에서 마주한 불안과 순수한 열망을 서사적으로 풀어낸 EP. 풍성한 신디사이저 텍스처와 감성적인 멜로디 라인이 돋보이는 프로젝트.',
    coverImage: bftlCover,
    tracks: [
      { title: '01. Boys From the Last (Intro)', duration: '01:42' },
      { title: '02. Wasted Time', duration: '03:18', highlight: true },
      { title: '03. Golden Rye', duration: '03:18' },
      { title: '04. L’Horizon', duration: '03:45' },
      { title: '05. Silhouette', duration: '02:54' },
      { title: '06. Outro: Still We Are', duration: '02:10' }
    ],
    audioSample: { bpm: 92, key: 'Eb Minor', style: 'Alternative R&B / Chill Synth' }
  },
  {
    id: 'youth',
    title: 'YOUTH',
    englishTitle: 'Youth',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: '마음고름',
    youtubeUrl: 'https://youtu.be/fxyJQ-FECKU?list=OLAK5uy_narqhKp-UZqOzbJJMTCiGYAQunE3NCi7c',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '청춘의 순간 (Moment of Youth)',
    description: '작사부터 작곡, 편곡, 믹싱, 마스터링까지 전 과정을 총괄한 싱글. 거친 파도 속 흔들리는 마음을 보듬는 시그니처 트랙.',
    coverImage: youthCover,
    tracks: [
      { title: '01. 마음고름', duration: '03:22', highlight: true },
      { title: '02. 마음고름 (Inst.)', duration: '03:22' }
    ],
    audioSample: { bpm: 104, key: 'G Major', style: 'Indie Pop / Modern R&B' }
  },
  {
    id: 'dear-my',
    title: 'Dear my',
    englishTitle: 'Dear my',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: '날',
    youtubeUrl: 'https://youtu.be/6LTF0IG37fE?list=OLAK5uy_mWK5AvO3cGNujwTxoP3UHxqQgJEXpCPu8',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '기억과 회상 (Memories & Traces)',
    description: '빛바랜 카세트테이프에 담긴 지난 기억의 흔적과 스스로에게 건네는 담담한 고백을 어쿠스틱 질감으로 담아낸 싱글.',
    coverImage: dearMyCover,
    tracks: [
      { title: '01. 날', duration: '03:10', highlight: true },
      { title: '02. 날 (Inst.)', duration: '03:10' }
    ],
    audioSample: { bpm: 78, key: 'C Major', style: 'Acoustic Soul / R&B' }
  },
  {
    id: 'mamdaero-hae',
    title: '맘대로 해',
    englishTitle: 'Do Whatever You Want',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: '맘대로 해',
    youtubeUrl: 'https://youtu.be/acWXVm41K2Y?list=OLAK5uy_lHYJitD0-GsgB_Of1CIQ-JAY4b4bPHWck',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '자유와 해방 (Freedom & Escape)',
    description: '규칙과 시선에서 벗어나 내면이 이끄는 대로 발걸음을 옮기는 순간의 통쾌한 에너지를 경쾌한 그루브로 표현한 싱글.',
    coverImage: mamdaeroCover,
    tracks: [
      { title: '01. 맘대로 해', duration: '03:05', highlight: true }
    ],
    audioSample: { bpm: 110, key: 'A Minor', style: 'Indie Pop / Funk Groove' }
  },
  {
    id: 'somebody',
    title: 'Somebody',
    englishTitle: 'Somebody',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: 'Somebody',
    youtubeUrl: 'https://youtu.be/WHb2EtuHROA?list=OLAK5uy_nGfsyu6u2LBEOPfIahlDGSB13c0MCRY-M',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '고독과 정체성 (Identity & Solitude)',
    description: '깊고 어두운 감정의 소용돌이 속에서 진정한 나를 찾아가는 여정을 몽환적인 신스 텍스처와 감각적인 멜로디로 엮어낸 트랙.',
    coverImage: somebodyCover,
    tracks: [
      { title: '01. Somebody', duration: '03:28', highlight: true }
    ],
    audioSample: { bpm: 95, key: 'D Minor', style: 'Chill Melodic Synth / Alt Pop' }
  },
  {
    id: 'only-you',
    title: 'Only You',
    englishTitle: 'Only You (Macaroni Music)',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: 'Only You',
    youtubeUrl: 'https://youtu.be/uV0696rNjwA',
    roles: ['보컬', '작사', '작곡', '편곡', '마스터링'],
    theme: '사랑과 몰입 (Immersion in Love)',
    chartHighlight: 'Melon Indie Electronica 차트 7위',
    description: '서정적인 일렉트로니카 비트 위에 얹힌 감각적인 보컬과 사운드 메이킹. 멜론 인디 일렉트로니카 부문 주간 7위에 오르며 음악성을 입증한 대표작.',
    coverImage: onlyYouCover,
    tracks: [
      { title: '01. Only You', duration: '03:15', highlight: true }
    ],
    audioSample: { bpm: 118, key: 'F# Minor', style: 'Chill Electronica / Deep Melodic' }
  },
  {
    id: 'sleepless',
    title: '잠에 들지 못한 채',
    englishTitle: 'Sleepless Dawn',
    type: 'Single',
    releaseDate: '2024',
    titleTrack: '잠에 들지 못한 채',
    youtubeUrl: 'https://youtu.be/y_sORVptkn4',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '새벽 감성 (Midnight Thoughts)',
    description: '모두가 잠든 고요한 새벽 4시, 잠들지 못하는 이들의 깊은 상념과 그리움을 섬세한 어쿠스틱 피아노와 앰비언트 리버브로 녹여낸 트랙.',
    coverImage: sleeplessCover,
    tracks: [
      { title: '01. 잠에 들지 못한 채', duration: '03:38', highlight: true }
    ],
    audioSample: { bpm: 75, key: 'C# Minor', style: 'Lo-Fi Neo Soul' }
  },
  {
    id: 'starry-night',
    title: 'Starry Night',
    englishTitle: 'Starry Night',
    type: 'EP',
    releaseDate: '2022',
    titleTrack: '꿈',
    youtubeUrl: 'https://youtu.be/hGTha8ZtQrs?list=OLAK5uy_kOLcRH1N6iNI4WxyLiFIJt1cLVa26kvM0',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '밤하늘과 고요 (Night Sky & Silence)',
    description: '별빛이 부서지는 밤하늘을 테마로 한 5트랙 미니 앨범. 공간감 넘치는 패드 신스와 묵직한 808 베이스의 유려한 하모니.',
    coverImage: starryNightCover,
    tracks: [
      { title: '01. Starlight Prelude', duration: '01:50' },
      { title: '02. 꿈', duration: '03:12', highlight: true },
      { title: '03. Midnight Boulevard', duration: '03:12' },
      { title: '04. Constellation', duration: '03:30' },
      { title: '05. Blue Hour', duration: '02:58' }
    ],
    audioSample: { bpm: 85, key: 'Bb Minor', style: 'Midnight Ambient R&B' }
  },
  {
    id: '1224',
    title: '12:24',
    englishTitle: '12:24',
    type: 'EP',
    releaseDate: '2020',
    titleTrack: 'Grow Up!',
    youtubeUrl: 'https://youtu.be/8IW7yqX0z3I?list=PLj0IU6KRzmJUWTd_pbRN7w_uW3LdxizeA',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '겨울의 시간 (Winter Midnight)',
    description: '12월 24일 겨울 새벽의 차가운 공기와 그 속에 남아있는 따뜻한 온기를 담아낸 EP.',
    coverImage: cover1224,
    tracks: [
      { title: '01. Grow Up!', duration: '02:45', highlight: true },
      { title: '02. 12:24 AM', duration: '02:45' },
      { title: '03. White Frost', duration: '03:10' },
      { title: '04. Warmth in Cold', duration: '03:05' }
    ],
    audioSample: { bpm: 80, key: 'D Minor', style: 'Winter Hip-Hop / Downtempo' }
  },
  {
    id: 'don',
    title: 'D.O.N',
    englishTitle: 'D.O.N',
    type: 'EP',
    releaseDate: '2019',
    titleTrack: 'D.O.N',
    youtubeUrl: 'https://youtu.be/dQL-F7D2czI?list=OLAK5uy_nZ6eahUwggMSNdGbcv0YZoTmQD-W8igXI',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '에너지 & 비트 (Energy & Groove)',
    description: '자신감 넘치는 힙합 그루브와 날렵한 사운드 믹스가 돋보이는 웰메이드 초기 앨범.',
    coverImage: donCover,
    tracks: [
      { title: '01. D.O.N', duration: '03:04', highlight: true },
      { title: '02. Momentum', duration: '02:50' }
    ],
    audioSample: { bpm: 130, key: 'A Minor', style: 'Boom Bap / Urban Trap' }
  },
  {
    id: 'mmsni',
    title: 'MMSNI',
    englishTitle: 'MMSNI',
    type: 'EP',
    releaseDate: '2019',
    titleTrack: 'Black Mirror',
    youtubeUrl: 'https://youtu.be/hVlLp0ymaLg?list=OLAK5uy_lNAR7EYDzxWgkWEtzmrco--gzmp45F19Q',
    roles: ['작사', '작곡', '편곡', '믹싱', '마스터링'],
    theme: '시작과 발자국 (First Footstep)',
    description: 'Asi.K의 독창적인 사운드 여정의 출발점이 된 첫 EP 프로젝트. 날것의 감성과 진정성이 담긴 레코드.',
    coverImage: mmsniCover,
    tracks: [
      { title: '01. Day One', duration: '02:30' },
      { title: '02. Black Mirror', duration: '03:14', highlight: true }
    ],
    audioSample: { bpm: 88, key: 'E Minor', style: 'Raw Hip-Hop' }
  }
];

export const SOUND_DIRECTION_WORKS: SoundDirectionItem[] = [
  {
    id: 'lgu-ar',
    title: 'LGU+ 5G AR 콘텐츠 사운드 연출',
    client: 'LG Uplus / K-Pop AR Project',
    period: 'Commercial Project',
    role: 'BGM 사운드 디자인',
    impact: '오마이걸(OH MY GIRL), 에이핑크(Apink) 참여 공식 프로젝트',
    description: 'LGU+ 차세대 5G 증강현실(AR) 인터랙티브 콘텐츠에 최적화된 오디오 환경을 기획하고 제작했습니다. 탑티어 K-Pop 아티스트들의 모션과 비주얼에 부합하는 세련된 BGM을 조화롭게 믹싱하여 사용자 몰입도를 극대화했습니다.',
    tags: ['K-Pop AR', 'Spatial Audio', '5G Content']
  },
  {
    id: 'volvo-europe',
    title: 'VOLVO Europe 중장비 신제품 시연 영상 음악 제작',
    client: 'Volvo Construction Equipment Europe',
    period: 'Global Campaign',
    role: '시연 영상 오리지널 사운드트랙 작곡 및 믹싱 (총 2편)',
    impact: '유럽 글로벌 공식 런칭 영상 오리지널 사운드트랙 수록',
    description: '볼보(VOLVO) 유럽 본사의 차세대 친환경 및 고성능 건설 중장비 론칭 영상 2편의 음악을 단독 작곡/프로듀싱했습니다. 중장비의 압도적인 파워와 북유럽 특유의 미니멀하면서도 신뢰감 있는 브랜드 아이덴티티를 현대적인 신스 & 하이브리드 오디오 사운드로 구현했습니다.',
    tags: ['Global Commercial', 'Sound Design', 'Brand Sound', 'Volvo Europe'],
    videoUrl: 'https://www.youtube.com/watch?v=FCn3hSc1G18'
  },
  {
    id: 'public-audio-director',
    title: '공공기관 및 국가 프로젝트 음향 조감독',
    client: 'UNESCO Forum, Design Korea, 한예종(K-ARTS)',
    period: '2023 - 2024',
    role: '라이브 음향 조감독 및 무대 오디오 오퍼레이팅',
    impact: '대규모 국제 포럼 및 종합예술 공연 성공적 송출',
    description: '유네스코 포럼, 디자인 코리아 서울(Design Korea Seoul), 한국예술종합학교(한예종) 기획 공연 등 국가적 및 학술적 대규모 현장에서 음향 조감독으로 역임했습니다. 복잡한 다채널 시스템 라우팅, 실시간 하울링 제어, 무대 모니터링 믹싱을 완벽히 소화하며 무결점 오디오 환경을 완수했습니다.',
    tags: ['Live Sound Director', 'Multi-Channel Audio', 'UNESCO', 'Design Korea Seoul']
  }
];

export const ADDITIONAL_CREDITS: AdditionalCredit[] = [
  {
    id: 'c-1',
    category: 'Dolby ATMOS Mix & Master',
    artist: '김새얀',
    title: 'Beautiful Desease',
    format: 'Single Track',
    year: '2025',
    url: 'https://music.apple.com/kr/album/beautiful-disease/1852138571?i=1852138848'
  },
  {
    id: 'c-2',
    category: 'Dolby ATMOS Mix & Master',
    artist: '김새얀',
    title: '꿈에서 만나',
    format: 'Single Track',
    year: '2025',
    url: 'https://music.apple.com/kr/album/%EA%BF%88%EC%97%90%EC%84%9C-%EB%A7%8C%EB%82%98/1859900142?i=1859900352'
  },
  {
    id: 'c-3',
    category: 'Dolby ATMOS Mix & Master',
    artist: '김새얀',
    title: '나만의 작은 새',
    format: 'Single Track',
    year: '2025',
    url: 'https://music.apple.com/kr/album/%EB%82%98%EB%A7%8C%EC%9D%98-%EC%9E%91%EC%9D%80-%EC%83%88-feat-%EC%A1%B0%EC%8A%B9%EC%97%B0/1859900142?i=1859900332'
  },
  {
    id: 'c-4',
    category: 'Mix & Master',
    artist: '키코 (KiKO)',
    title: 'Multiple Personality',
    format: 'EP Album',
    year: '2026',
    url: 'https://youtu.be/Dv3EYYvPZEQ?list=OLAK5uy_n5kqChph8Ik6E4o_JZ5v1ktnZBuRIvQS4'
  },
  {
    id: 'c-5',
    category: 'Mix & Master',
    artist: 'Owoon',
    title: 'PlainKiller',
    format: 'EP Album',
    year: '2026',
    url: 'https://youtu.be/7mRAVdvlBKI?list=PL_npzhNwcVHV7paJxwWxoBsGTNGgMfOVp'
  },
  {
    id: 'c-6',
    category: 'Mix & Master',
    artist: 'Owoon',
    title: 'Bet Me',
    format: 'Single',
    year: '2026',
    url: 'https://youtu.be/5iw9k-u-E08?list=RD5iw9k-u-E08'
  },
  {
    id: 'c-7',
    category: 'Mix & Master',
    artist: 'CO:ZIP (코드집합소)',
    title: 'Time Out',
    format: 'Single',
    year: '2026',
    url: 'https://youtu.be/vnw4MpqQ2i0?list=RDvnw4MpqQ2i0'
  },
  {
    id: 'c-8',
    category: 'Mix & Master',
    artist: '다민이',
    title: 'Dog or Chick 2.0',
    format: 'Soundcloud',
    year: '2022',
    url: 'https://soundcloud.com/simondamini/damini-dog-or-chick-2'
  },
  {
    id: 'c-9',
    category: 'Mix & Master',
    artist: 'Econo_MIC',
    title: '타지 (Feat. HOTCHKISS, Asi.K)',
    format: 'Single',
    year: '2022',
    url: 'https://youtu.be/QBzvAlIrKDM?list=RDQBzvAlIrKDM'
  },
  {
    id: 'c-10',
    category: 'Mastering',
    artist: '안소미',
    title: '사랑의 컬러링',
    format: 'Single',
    year: '2025',
    url: 'https://youtu.be/NrMw5hkR2Ig?list=RDNrMw5hkR2Ig'
  }
];

export const EDUCATION_MENTORING: MentoringItem[] = [
  {
    id: 'hiphop-toyo',
    title: "춘천시문화재단 '힙합토YO'",
    organization: '춘천시문화재단',
    period: '2021 - 2025 (5개년 연속)',
    description: '청소년 및 신진 뮤지션들을 위한 비트메이킹, 사운드 엔지니어링, 홈레코딩 실습 교육 프로그램을 기획하고 주/보조 강사로 활약했습니다.',
    achievements: [
      '5개년 연속 전문 강사 위촉 및 커리큘럼 운영',
      '청소년 비트메이킹 & 작사/작곡 워크숍 100회 이상 수료 지도',
      '수강생 공식 음원 발매 쇼케이스 사운드 총괄'
    ]
  },
  {
    id: 'artist-lessons',
    title: '아티스트 1:1 개인 레슨 & 입시 지도',
    period: '2020 - 2024',
    description: '프로 실무 중심의 미디(MIDI), 음향학 이론, 믹스/마스터 테크닉 멘토링을 통해 유수의 명문 실용음악과 합격생을 다수 배출했습니다.',
    achievements: [
      '경희대학교 PostModern 음악과 합격생 배출',
      '서경대학교 실용음악학부 합격생 배출',
      '여주대학교 실용음악과 등 주요 대학 합격생 배출'
    ]
  },
  {
    id: 'municipal-lectures',
    title: '지자체 및 학교 초청 특강',
    organization: '군포시, 춘천시, 의정부시 교육 지원청 및 초·중·고교',
    period: '2022 - Present',
    description: '디지털 음악 제작의 미래, 사운드 엔지니어의 세계, 공간 음향(Dolby Atmos)의 확장에 대해 청소년과 전공자들을 대상으로 강연을 진행했습니다.',
    achievements: [
      '군포시 청소년 수련관 창의 음악 특강',
      '춘천/의정부시 관내 중고교 초청 진로 멘토링',
      '실무 DAW(Logic Pro, Pro Tools) 기반 현장 음향 테크 데모'
    ]
  }
];
