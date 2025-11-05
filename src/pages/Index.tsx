import { useState, useRef, useEffect } from "react";
import { Camera } from "lucide-react";
import { mockReels } from "@/data/mockReels";
import { ReelCard } from "@/components/reels/ReelCard";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newIndex = Math.round(scrollPosition / windowHeight);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < mockReels.length) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-4">
          <button className="text-foreground font-semibold text-lg">
            Following
          </button>
          <button className="text-muted-foreground font-semibold text-lg">
            For You
          </button>
        </div>
        <Camera className="h-6 w-6 text-foreground" />
      </div>

      {/* Reels Container */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mockReels.map((reel, index) => (
          <ReelCard 
            key={reel.id} 
            reel={reel} 
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
        {mockReels.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-gradient-instagram' 
                : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
