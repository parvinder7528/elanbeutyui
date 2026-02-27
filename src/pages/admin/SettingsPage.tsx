import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Lock, Palette, Save } from "lucide-react";
import { toast } from "sonner";

const SettingsPage = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your admin preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6 border-0 shadow-card bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground">Profile Settings</h2>
            <p className="text-sm text-muted-foreground">Update your personal information</p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-semibold text-primary">A</span>
            </div>
            <Button variant="secondary">Change Photo</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Admin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="User" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="admin@elanbeauty.com" />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6 border-0 shadow-card bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Bell className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground">Notifications</h2>
            <p className="text-sm text-muted-foreground">Configure how you receive notifications</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive booking updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">New Booking Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified for new appointments</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Review Notifications</p>
              <p className="text-sm text-muted-foreground">Alerts for new customer reviews</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6 border-0 shadow-card bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-burgundy/10 flex items-center justify-center">
            <Lock className="w-5 h-5 text-burgundy" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground">Security</h2>
            <p className="text-sm text-muted-foreground">Manage your account security</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div />
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>
          <Button variant="secondary">Update Password</Button>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-6 border-0 shadow-card bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-gold/20 flex items-center justify-center">
            <Palette className="w-5 h-5 text-rose-gold" />
          </div>
          <div>
            <h2 className="text-lg font-display font-semibold text-foreground">Appearance</h2>
            <p className="text-sm text-muted-foreground">Customize your dashboard look</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Compact Mode</p>
            <p className="text-sm text-muted-foreground">Reduce padding and spacing</p>
          </div>
          <Switch />
        </div>
      </Card>

      <div className="flex justify-end">
        <Button  onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
