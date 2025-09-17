import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <video
              src="videos/Ski-solution-video_web.mp4"
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Descubre cómo Ski Solution 360 transforma la gestión de tu
              estación con un software integral y fácil de usar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
