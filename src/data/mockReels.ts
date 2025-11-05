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
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    username: "creative_artist",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=creative",
    caption: "Creating magic ✨ #art #creative",
    music: "Original Audio - creative_artist",
    likes: 12450,
    comments: 234,
    isLiked: false,
  },
  {
    id: "2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    username: "travel_explorer",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=travel",
    caption: "Adventure awaits 🌍 #travel #explore",
    music: "Wanderlust - Travel Beats",
    likes: 8932,
    comments: 156,
    isLiked: false,
  },
  {
    id: "3",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    username: "fitness_guru",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=fitness",
    caption: "Push your limits 💪 #fitness #motivation",
    music: "Workout Mix 2024",
    likes: 15678,
    comments: 412,
    isLiked: true,
  },
  {
    id: "4",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    username: "foodie_life",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=foodie",
    caption: "Delicious moments 🍕 #food #cooking",
    music: "Kitchen Vibes - Chef's Mix",
    likes: 21345,
    comments: 567,
    isLiked: false,
  },
  {
    id: "5",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    username: "dance_moves",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=dance",
    caption: "Feel the rhythm 🎵 #dance #music",
    music: "Dance Floor Hits",
    likes: 34567,
    comments: 892,
    isLiked: true,
  },
  {
    id: "6",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    username: "tech_wizard",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
    caption: "Innovation at its finest 🚀 #tech #innovation",
    music: "Future Sounds - Tech Mix",
    likes: 18234,
    comments: 321,
    isLiked: false,
  },
  {
    id: "7",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    username: "nature_lover",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=nature",
    caption: "Nature's beauty 🌿 #nature #peaceful",
    music: "Calm Nature - Ambient Sounds",
    likes: 9876,
    comments: 145,
    isLiked: false,
  },
  {
    id: "8",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    username: "fashion_icon",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=fashion",
    caption: "Style inspiration 👗 #fashion #style",
    music: "Runway Beats - Fashion Week",
    likes: 27890,
    comments: 678,
    isLiked: true,
  },
  {
    id: "9",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    username: "pet_paradise",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=pet",
    caption: "Adorable moments 🐶 #pets #cute",
    music: "Happy Puppy - Pet Tunes",
    likes: 45678,
    comments: 1234,
    isLiked: false,
  },
  {
    id: "10",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    username: "gaming_pro",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=gaming",
    caption: "Epic gameplay 🎮 #gaming #esports",
    music: "Game On - Epic Mix",
    likes: 56789,
    comments: 2345,
    isLiked: true,
  },
];
