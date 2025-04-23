
import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function BookingsSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, requestType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Sent",
        description: "We'll get back to you as soon as possible!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        requestType: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="bookings" className="section-container">
      <SectionHeader
        title="Bookings & Inquiries"
        subtitle="Interested in booking me for your event or collaborating on a project?"
      />
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="contact-input"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="requestType" className="block text-sm font-medium">
                Request Type
              </label>
              <Select 
                value={formData.requestType} 
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="contact-input">
                  <SelectValue placeholder="Select type of request" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">Event Booking</SelectItem>
                  <SelectItem value="collab">Collaboration</SelectItem>
                  <SelectItem value="studio">Studio Work</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your event or project..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Request</span>
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
