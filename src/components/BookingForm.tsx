import { useState } from "react";
import { CalendarIcon, Clock, MapPin, Sparkles, User, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "spa", name: "Spa & Aesthetics", duration: "90 min", price: "£120" },
  { id: "hair", name: "Hair Beauty", duration: "60 min", price: "£85" },
  { id: "nails", name: "Nails", duration: "45 min", price: "£55" },
  { id: "headspa", name: "Head Spa", duration: "60 min", price: "£95" },
  { id: "makeover", name: "Makeover", duration: "120 min", price: "£150" },
];

const locations = [
  { id: "regents-park", name: "Regents Park", address: "123 Regents Park Road, London NW1 8XL" },
  { id: "mayfair", name: "Mayfair", address: "45 Berkeley Square, London W1J 5AE" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM",
];

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const BookingForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedService = services.find((s) => s.id === service);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!service || !location || !date || !time || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Booking Confirmed!",
      description: `Your ${selectedService?.name} appointment has been booked for ${formatDate(date)} at ${time}.`,
    });

    // Reset form
    setService("");
    setLocation("");
    setDate(undefined);
    setTime("");
    setName("");
    setEmail("");
    setPhone("");
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container-elegant">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-widest mb-3">Reservations</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Book Your Experience
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your appointment and begin your journey to elegance.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="card-elegant p-8 md:p-10 space-y-8">
            {/* Service Selection */}
            <div className="space-y-3">
              <Label className="font-display text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Select Service
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="h-12 font-body">
                  <SelectValue placeholder="Choose your treatment" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.id} value={s?.id}>
                      {s.name} · {s.duration} · {s.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location Selection */}
            <div className="space-y-3">
              <Label className="font-display text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Choose Location
              </Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="h-12 font-body">
                  <SelectValue placeholder="Select salon location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.id} value={loc.id}>
                      {loc.name} - {loc.address}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date & Time Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date Picker */}
              <div className="space-y-3">
                <Label className="font-display text-lg flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Select Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-body",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? formatDate(date) : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-3">
                <Label className="font-display text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Select Time
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-border pt-8 space-y-6">
              <h3 className="font-display text-xl text-foreground">Your Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="font-body flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 font-body"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-body flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 font-body"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-body flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 font-body"
                  maxLength={255}
                />
              </div>
            </div>

            {/* Selected Service Summary */}
            {selectedService && (
              <div className="bg-secondary/50 rounded-lg p-6 space-y-2">
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">Selected Treatment</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl text-foreground">{selectedService.name}</p>
                    <p className="font-body text-muted-foreground">{selectedService.duration}</p>
                  </div>
                  <p className="font-display text-2xl text-primary">{selectedService.price}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Confirming Booking..." : "Confirm Booking"}
            </Button>

            <p className="text-center font-body text-sm text-muted-foreground">
              By booking, you agree to our cancellation policy. A confirmation email will be sent to you.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
