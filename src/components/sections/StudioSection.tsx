
import { Volume2, CheckCircle, MusicIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "production",
    title: "Music Production",
    description: "Full production services from concept to final master. I help artists bring their vision to life with professional-quality productions.",
    features: [
      "Beat production and arrangement",
      "Vocal recording and processing",
      "Instrument recording and editing",
      "Full arrangement services",
      "Genre-specific production expertise"
    ],
    sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: "mixing",
    title: "Mixing",
    description: "Professional mixing services to balance and enhance your tracks. Create depth, clarity and emotion in your music.",
    features: [
      "Detailed EQ and compression",
      "Spatial positioning and depth",
      "Creative effects processing",
      "Vocal chain optimization",
      "Stem mixing available"
    ],
    sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: "mastering",
    title: "Mastering",
    description: "The final polish your music needs before release. Ensure your tracks sound professional across all playback systems.",
    features: [
      "Loudness optimization",
      "Frequency balancing",
      "Stereo enhancement",
      "Streaming-ready masters",
      "Vinyl and CD preparation"
    ],
    sample: "https://on.soundcloud.com/VSSj44iMZ2uoDiK99"
  }
];

export function StudioSection() {
  return (
    <section id="studio" className="section-container">
      <SectionHeader
        title="Studio Services"
        subtitle="Professional production, mixing and mastering services"
      />
      
      <div className="mb-12">
        <Tabs defaultValue="production">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="mixing">Mixing</TabsTrigger>
            <TabsTrigger value="mastering">Mastering</TabsTrigger>
          </TabsList>
          
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MusicIcon className="mr-2 h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Services include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Sample:</h4>
                    <div className="bg-muted/40 p-4 rounded-md">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Volume2 className="h-4 w-4 mr-2 text-primary" />
                          <span className="text-sm">{service.title} Sample</span>
                        </div>
                      </div>
                      <audio 
                        controls 
                        src={service.sample} 
                        className="w-full"
                      >
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Ready to work together?</h3>
        <Button asChild size="lg">
          <a href="#bookings">Book Studio Services</a>
        </Button>
      </div>
    </section>
  );
}
