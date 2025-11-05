import { Heart, MessageCircle, Send, Bookmark, Music } from "lucide-react";
import { useState } from "react";
import { Reel } from "@/data/mockReels";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ReelOverlayProps {
  reel: Reel;
}

export const ReelOverlay = ({ reel }: ReelOverlayProps) => {
  const [isLiked, setIsLiked] = useState(reel.isLiked);
  const [likes, setLikes] = useState(reel.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Left side - User info and caption */}
      <div className="absolute bottom-20 left-4 right-20 pointer-events-auto">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage src={reel.avatarUrl} alt={reel.username} />
            <AvatarFallback>{reel.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-foreground">{reel.username}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 px-4 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Follow
          </Button>
        </div>
        
        <p className="text-foreground text-sm mb-2">{reel.caption}</p>
        
        <div className="flex items-center gap-2 text-foreground text-sm">
          <Music className="h-4 w-4" />
          <span className="truncate">{reel.music}</span>
        </div>
      </div>

      {/* Right side - Action buttons */}
      <div className="absolute bottom-24 right-4 flex flex-col items-center gap-6 pointer-events-auto">
        <button 
          onClick={handleLike}
          className="flex flex-col items-center gap-1 transition-transform active:scale-90"
        >
          <div className={`transition-colors ${isLiked ? 'text-primary' : 'text-foreground'}`}>
            <Heart 
              className="h-7 w-7" 
              fill={isLiked ? 'currentColor' : 'none'}
            />
          </div>
          <span className="text-xs text-foreground font-medium">
            {formatNumber(likes)}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <MessageCircle className="h-7 w-7 text-foreground" />
          <span className="text-xs text-foreground font-medium">
            {formatNumber(reel.comments)}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <Send className="h-7 w-7 text-foreground" />
          <span className="text-xs text-foreground font-medium">Share</span>
        </button>

        <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
          <Bookmark className="h-7 w-7 text-foreground" />
        </button>

        <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white">
          <img 
            src={reel.avatarUrl} 
            alt="Music cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
