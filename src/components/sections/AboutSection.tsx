import { Award, Users, Globe, Music } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="section-container bg-muted/30">
      <SectionHeader
        title="About Praveen Soulrich"
        subtitle="Singer, DJ, Songwriter, Producer"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/images/soul8.jpg"
            alt="Praveen Soulrich" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">The Journey</h3>
            <p className="text-muted-foreground mb-4">
              Praveen Soulrich is an accomplished Singer, DJ, Songwriter, and Music Producer with a career spanning over 15 years in the music industry. His journey began with the original rock band, Little Babooshka's Grind, where his unique vocal style and stage presence caught the attention of audiences across Asia.
            </p>
            <p className="text-muted-foreground">
              After winning the prestigious MTV Asia Award, Praveen embarked on a solo career that has taken him to international stages across India, Malaysia, and beyond. His music blends electronic beats with soulful vocals, creating a signature sound that bridges cultural boundaries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card text-center">
              <Award className="h-8 w-8 text-primary mb-2 mx-auto" />
              <h4 className="font-bold">MTV Asia Award</h4>
              <p className="text-sm text-muted-foreground">Recognition for musical excellence</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card">
              <Users className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-bold">Little Babooshka's Grind</h4>
              <p className="text-sm text-center text-muted-foreground">Founding member and lead vocalist</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card">
              <Globe className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-bold">International</h4>
              <p className="text-sm text-center text-muted-foreground">Performances across continents</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-card">
              <Music className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-bold">Producer</h4>
              <p className="text-sm text-center text-muted-foreground">Crafting sounds for global artists</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Philosophy</h3>
            <p className="text-muted-foreground">
              "Music is the universal language that connects us all. I strive to create sonic experiences that transcend cultural boundaries and speak directly to the soul. Whether I'm behind the decks, in the vocal booth, or at the mixing console, my goal is always the same: to create moments of pure emotion through sound."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
