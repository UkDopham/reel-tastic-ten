import { Reel } from "@/data/mockReels";
import { VideoPlayer } from "./VideoPlayer";
import { ReelOverlay } from "./ReelOverlay";

interface ReelCardProps {
  reel: Reel;
  isActive: boolean;
}

export const ReelCard = ({ reel, isActive }: ReelCardProps) => {
  const handleTogglePlay = () => {
    // Video play/pause is handled by VideoPlayer component
  };

  return (
    <div className="relative w-full h-screen snap-start snap-always">
      <VideoPlayer 
        reel={reel} 
        isActive={isActive} 
        onTogglePlay={handleTogglePlay}
      />
      <ReelOverlay reel={reel} />
    </div>
  );
};
