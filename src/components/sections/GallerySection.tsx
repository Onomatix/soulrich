
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    url: "/images/soul1.jpg",
    alt: "Live concert performance with stage lights",
    caption: "Harley Music Video Shoot"
  },
  {
    id: 2,
    url: "/images/soul2.jpg",
    alt: "DJ performance at a club",
    caption: "Harley Music Video Shoot"
  },
  {
    id: 2,
    url: "/images/soul3.png",
    alt: "DJ performance at a club",
    caption: "Photo Shoot Lisbon"
  },
  {
    id: 4,
    url: "/images/soul4.jpg",
    alt: "Behind the scenes photoshoot",
    caption: "Album cover photoshoot"
  },
  {
    id: 5,
    url: "/images/soul5.png",
    alt: "Live concert with crowd",
    caption: "Photo Shoot Lisbon"
  },
  {
    id: 6,
    url: "/images/soul6.jpg",
    alt: "Festival stage performance",
    caption: "Photo Shoot Lisbon"
  },
  {
    id: 4,
    url: "/images/soul7.jpg",
    alt: "Behind the scenes photoshoot",
    caption: "MTV Asian Rockathon"
  },
  {
    id: 5,
    url: "/images/soul8.jpg",
    alt: "Live concert with crowd",
    caption: "Album Cover Photoshoot"
  },
  {
    id: 6,
    url: "/images/soul9.jpg",
    alt: "Festival stage performance",
    caption: "Photo Shoot Lisbon"
  }
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section id="gallery" className="section-container">
      <SectionHeader
        title="Photo Gallery"
        subtitle="Moments captured on stage and behind the scenes"
      />
      
      <div className="image-grid">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className="rounded-lg overflow-hidden cursor-pointer relative group card-hover"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="h-full flex flex-col">
              <div className="relative flex-grow">
                <img 
                  src={galleryImages[currentImageIndex].url} 
                  alt={galleryImages[currentImageIndex].alt} 
                  className="max-h-[80vh] mx-auto object-contain"
                />
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="text-center p-4 bg-black/70 text-white mt-4 rounded-lg">
                <p className="text-lg font-medium">{galleryImages[currentImageIndex].caption}</p>
                <p className="text-sm text-gray-300">{currentImageIndex + 1} / {galleryImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
