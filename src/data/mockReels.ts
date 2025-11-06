export interface Reel {
  id: string;
  videoUrl: string;
  username: string;
  avatarUrl: string;
  caption: string;
  music: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export const mockReels: Reel[] = [
  {
    id: "1",
    videoUrl: "/videos/bubu-the-voice-final.mp4",
    username: "bubu_the_voice_fanclub_officiel",
    avatarUrl: "/images/1.webp",
    caption: "Passage de Bubu à the Voice IN-CROY-ABLE 🎵 #TheVoice2025",
    music: "Original Audio - bubu_the_voice_fanclub_officiel",
    likes: 12450,
    comments: 234,
    isLiked: false,
  },
  {
    id: "2",
    videoUrl: "/videos/melt-dudu-bubu-final.mp4",
    username: "bubu_dudu_foodies",
    avatarUrl: "/images/2.jpeg",
    caption: "Un nouveau BBQ à Dudu Kingdom 🥵🥵 #Kobe",
    music: "Original Audio - bubu_dudu_foodies",
    likes: 8932,
    comments: 156,
    isLiked: false,
  },
  {
    id: "3",
    videoUrl: "/videos/bubu-skin.mp4",
    username: "bubusituation",
    avatarUrl: "/images/3.webp",
    caption: "Skin care routine dans la vie de Bubu 🎵🎵 #Sephora",
    music: "Beach dance with Dudu",
    likes: 15678,
    comments: 412,
    isLiked: true,
  },
  {
    id: "4",
    videoUrl: "/videos/dudu-cowboy.mp4",
    username: "duduinshape",
    avatarUrl: "/images/4.png",
    caption: "Chasse comme à l'époque 🍕 #food #cooking #boeuf",
    music: "Naruto - Horiuchi furry",
    likes: 21345,
    comments: 567,
    isLiked: false,
  },
  {
    id: "5",
    videoUrl: "/videos/bubu-popo.mp4",
    username: "bubudoingpopo",
    avatarUrl: "/images/5.jpg",
    caption: "Encore bouché les toilettes #bigpopo #popotime 🫣💩",
    music: "Dance Floor Hits",
    likes: 34567,
    comments: 892,
    isLiked: true,
  },
  {
    id: "6",
    videoUrl: "/videos/dudu-gift.mp4",
    username: "tech_dudu",
    avatarUrl: "/images/6.jpg",
    caption: "Idée de cadeau pour bubu epiosde 122 #gift 🎁🎁",
    music: "Fashion Sounds - City Pop",
    likes: 18234,
    comments: 321,
    isLiked: false,
  },
  {
    id: "7",
    videoUrl: "/videos/bubu-maraton.mp4",
    username: "running_bubu",
    avatarUrl: "/images/8.jpg",
    caption: "Sub 2h Semi de Dudu Kingdom 2025 #running #semi ❤️",
    music: "Calm Nature - Ambient Sounds",
    likes: 9876,
    comments: 145,
    isLiked: false,
  },
  {
    id: "8",
    videoUrl: "/videos/dudu-gp4.mp4",
    username: "f1_dudu_fanaccount",
    avatarUrl: "/images/9.png",
    caption: "Dudu gagne le GP Explorer 4 #gpexplorer #squeezie #youtubeur #shorts",
    music: "Gims - Last rice",
    likes: 27890,
    comments: 678,
    isLiked: true,
  },
  {
    id: "9",
    videoUrl: "/videos/bubu-eclair-choco.mp4",
    username: "buboulangerie",
    avatarUrl: "/images/10.jpeg",
    caption: "j'ai pas assumée les eclairs au bubuchoco #food #healthy",
    music: "Original Audio - buboulangerie",
    likes: 45678,
    comments: 1234,
    isLiked: false,
  },
  {
    id: "10",
    videoUrl: "/videos/pate-dudu.mp4",
    username: "fastgood_dudu",
    avatarUrl: "/images/10.jpeg",
    caption: "Recette Healthy les pates Dudu #pate #healthy",
    music: "Original Audio - fastgood_dudu",
    likes: 56789,
    comments: 2345,
    isLiked: true,
  },
];
