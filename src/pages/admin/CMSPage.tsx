import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, FileText, Globe, Save, Eye, Upload } from "lucide-react";
import { toast } from "sonner";

const CMSPage = () => {
  const [heroTitle, setHeroTitle] = useState("Welcome to Elan Beauty");
  const [heroSubtitle, setHeroSubtitle] = useState("Where elegance meets expertise. Experience luxury beauty treatments.");
  const [aboutText, setAboutText] = useState("At Elan Beauty, we believe that everyone deserves to feel beautiful. Our team of expert stylists and therapists are dedicated to providing you with exceptional service in a luxurious environment.");

  const handleSave = () => {
    toast.success("Content saved successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Content Management</h1>
          <p className="text-muted-foreground mt-1">Manage your website content</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button  onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="homepage" className="space-y-6">
        <TabsList className="bg-secondary/50 p-1">
          <TabsTrigger value="homepage" className="data-[state=active]:bg-card data-[state=active]:shadow-soft">
            <Globe className="w-4 h-4 mr-2" />
            Homepage
          </TabsTrigger>
          <TabsTrigger value="pages" className="data-[state=active]:bg-card data-[state=active]:shadow-soft">
            <FileText className="w-4 h-4 mr-2" />
            Pages
          </TabsTrigger>
          <TabsTrigger value="media" className="data-[state=active]:bg-card data-[state=active]:shadow-soft">
            <Image className="w-4 h-4 mr-2" />
            Media
          </TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-6">
          {/* Hero Section */}
          <Card className="p-6 border-0 shadow-card bg-card">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Hero Section</h2>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Hero Title</Label>
                <Input
                  id="heroTitle"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="max-w-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                <Textarea
                  id="heroSubtitle"
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="max-w-xl"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Hero Background Image</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center max-w-xl hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Drag & drop an image or <span className="text-primary">browse</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended: 1920x1080px, JPG or PNG
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-6 border-0 shadow-card bg-card">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">About Section</h2>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="aboutText">About Text</Label>
                <Textarea
                  id="aboutText"
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                  className="max-w-xl"
                  rows={5}
                />
              </div>
            </div>
          </Card>

          {/* Contact Info */}
          <Card className="p-6 border-0 shadow-card bg-card">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Contact Information</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="hello@elanbeauty.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Beauty Lane, New York, NY 10001" />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-6">
          <Card className="p-6 border-0 shadow-card bg-card">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Website Pages</h2>
            <div className="space-y-4">
              {["Home", "About Us", "Services", "Gallery", "Contact"].map((page) => (
                <div
                  key={page}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium text-foreground">{page}</span>
                  </div>
                  <Button variant="secondary" size="sm">Edit</Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card className="p-6 border-0 shadow-card bg-card">
            <h2 className="text-xl font-display font-semibold text-foreground mb-6">Media Library</h2>
            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload Media Files</h3>
              <p className="text-muted-foreground mb-4">
                Drag and drop your images or videos here
              </p>
              <Button variant="secondary">Browse Files</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-secondary/50 flex items-center justify-center"
                >
                  <Image className="w-8 h-8 text-muted-foreground/50" />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CMSPage;
