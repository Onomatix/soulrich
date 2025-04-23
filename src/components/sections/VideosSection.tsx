import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { SectionHeader } from "@/components/SectionHeader";

const videoIds = [
  "h5fpjXpWlBA",
  "NIVn-DGqmzs",
  "qc-CwJwrZ80",
  "rjk5rtLJBnM"
];

type VideoData = {
  id: string;
  title: string;
  description: string;
};

export function VideosSection() {
  const [videos, setVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const promises = videoIds.map(async (id) => {
        const url = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`;
        const res = await fetch(url);
        const data = await res.json();
        return {
          id,
          title: data.title || "Untitled",
          description: data.author_name || "YouTube Video"
        };
      });

      const results = await Promise.all(promises);
      setVideos(results);
    };

    fetchVideos();
  }, []);

  return (
    <section id="videos" className="section-container bg-muted/30">
      <SectionHeader
        title="Videos"
        subtitle="Watch my latest performances and music videos"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="overflow-hidden rounded-lg shadow-md">
            <div className="aspect-video relative">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.id}`}
                width="100%"
                height="100%"
                playing
                muted
                controls
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1, // hide logo
                      rel: 0,            // no related videos
                      showinfo: 0,       // hide title
                      fs: 0,             // disable fullscreen
                      iv_load_policy: 3, // hide annotations
                      disablekb: 1       // disable keyboard shortcuts
                    }
                  }
                }}
              />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-lg font-bold mb-1">{video.title}</h3>
              <p className="text-muted-foreground text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
