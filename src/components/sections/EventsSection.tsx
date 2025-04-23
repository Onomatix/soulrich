
import { Calendar, MapPin, Clock, ArrowRightCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    name: "Summer Electronic Festival",
    date: "July 15, 2025",
    time: "8:00 PM",
    location: "Beachfront Arena, Miami",
    ticketUrl: "#",
    isFeatured: true
  },
  {
    id: 2,
    name: "Club XYZ Residency",
    date: "June 10, 2025",
    time: "10:00 PM",
    location: "Club XYZ, New York",
    ticketUrl: "#",
    isFeatured: false
  },
  {
    id: 3,
    name: "International DJ Conference",
    date: "August 5, 2025",
    time: "5:00 PM",
    location: "Conference Center, Berlin",
    ticketUrl: "#",
    isFeatured: false
  },
  {
    id: 4,
    name: "Album Release Party",
    date: "September 20, 2025",
    time: "9:00 PM",
    location: "Music Hall, London",
    ticketUrl: "#",
    isFeatured: true
  }
];

export function EventsSection() {
  return (
    <section id="events" className="section-container bg-muted/30">
      <SectionHeader
        title="Upcoming Events"
        subtitle="Catch me performing live at these upcoming events"
      />
      
      <div className="space-y-6">
        {events.map((event) => (
          <Card 
            key={event.id} 
            className={`overflow-hidden ${event.isFeatured ? 'border-primary/50 bg-gradient-card' : ''}`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold">{event.name}</h3>
                    {event.isFeatured && (
                      <Badge className="ml-2" variant="secondary">Featured</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 sm:ml-4 flex items-end justify-end">
                  <Button asChild>
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <span>Get Tickets</span>
                      <ArrowRightCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
