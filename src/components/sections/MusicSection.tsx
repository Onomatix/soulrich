import { Play, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const musicReleases = [
  {
    id: 1,
    title: "Fun in Ibiza",
    image: "/images/funinibiza.jpg",
    type: "EP",
    year: 2023,
    spotifyUrl: "https://soundcloud.com/soulrich-records/fun-in-ibiza-dj-soulrich?si=b7515f5f2b584faca465698737b1a8d9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    platform: "SoundCloud",
    description: "A fusion of electronic beats and soul-stirring vocals that takes listeners on a cosmic journey."
  },
  {
    id: 2,
    title: "Millenium",
    image: "/images/millenium.jpeg",
    type: "Single",
    year: 2022,
    spotifyUrl: "https://open.spotify.com/track/4FSW2MZXcehraBQhbNAO61?si=52ce180b58a44751",
    platform: "Spotify",
    description: "An ambient electronic track with dreamy vocals and hypnotic beats."
  },
  {
    id: 3,
    title: "Because of You",
    image: "/images/becauseofyou.jpg",
    type: "Album",
    year: 2021,
    spotifyUrl: "https://open.spotify.com/track/2vs5EjI065z5cEjkHLtapt?si=b99d7cb32ecb47c4",
    platform: "Spotify",
    description: "A collection of urban beats with powerful lyrics and infectious melodies."
  },

  
];

function MusicCard({ release }) {
  return (
    <Card key={release.id} className="overflow-hidden card-hover bg-card">
      <div className="relative">
        <img 
          src={release.image} 
          alt={release.title} 
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button className="rounded-full" size="icon" variant="secondary">
            <Play className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-montserrat">{release.title}</h3>
          <div className="text-sm text-muted-foreground">
            {release.type} · {release.year}
          </div>
        </div>
        <p className="text-muted-foreground">{release.description}</p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <span>Listen on {release.platform}</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function MusicSection() {
  return (
    <section id="music" className="section-container">
      <SectionHeader 
        title="Music"
        subtitle="Listen to my latest releases and productions"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {musicReleases.map((release) => (
          <MusicCard key={release.id} release={release} />
        ))}
      </div>
      
      {/* <div className="mt-12 p-6 rounded-lg border bg-gradient-card">
        <h3 className="text-2xl font-bold mb-4">Featured Track</h3>
        <div className="aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Featured Music Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div> */}
    </section>
  );
}