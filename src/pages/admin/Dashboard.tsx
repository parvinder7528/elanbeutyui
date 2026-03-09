import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, DollarSign, Calendar, TrendingUp, Clock, Star, ArrowUpRight, MoreHorizontal, Sparkles, ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";
import API from "../../api/api";
// const stats = [
//   { title: "Total Clients", value: "2,847", change: "+12.5%", trend: "up", icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" },
//   { title: "Appointments", value: "384", change: "+23.1%", trend: "up", icon: Calendar, color: "text-purple-600", bgColor: "bg-purple-100" },
//   { title: "Avg. Rating", value: "4.9", change: "+0.3", trend: "up", icon: Star, color: "text-amber-600", bgColor: "bg-amber-100" },
// ];

// const recentBookings = [
//   { id: 1, client: "Sarah Johnson", avatar: "SJ", service: "Bridal Makeup", stylist: "Emma Wilson", time: "Today, 2:30 PM", price: "$250", status: "Confirmed" },
//   { id: 2, client: "Emily Davis", avatar: "ED", service: "Hair Coloring", stylist: "Michael Brown", time: "Today, 4:00 PM", price: "$180", status: "In Progress" },
//   { id: 3, client: "Jessica Martinez", avatar: "JM", service: "Full Spa Package", stylist: "Sophie Lee", time: "Today, 5:30 PM", price: "$420", status: "Pending" },
// ];

// const topServices = [
//   { name: "Bridal Makeup", bookings: 145, revenue: "$36,250", growth: 18 },
//   { name: "Hair Styling", bookings: 128, revenue: "$19,200", growth: 12 },
//   { name: "Facial Treatment", bookings: 98, revenue: "$14,700", growth: 25 },
// ];

const Dashboard = () => {
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [topServices, setTopServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null)
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Pending": return "bg-amber-100 text-amber-700 border-amber-200";
      default: return "bg-muted text-muted-foreground";
    }
  };
 const fetchDashboardData = async () => {
      try {
        const [recentRes, topRes, statsRes] = await Promise.allSettled([
          API.get("/api/recent-bookings"),
          API.get("/api/top-bookings"),
          API.get("/api/dashboard-stats"), 
        ]);

        // =========================
        // Recent Bookings
        // =========================
        let recentData;
        if (recentRes.status === "fulfilled") {
          recentData = recentRes.value?.data;
        }

        // =========================
        // Top Bookings
        // =========================
        let topData:any;
        if (topRes.status === "fulfilled") {
          topData = topRes.value?.data;
        }

        // =========================
        // Stats API
        // =========================
        if (statsRes.status === "fulfilled") {
          setStats(statsRes.value?.data?.data || {});
        }

        // =========================
        // Existing Formatting (UNCHANGED)
        // =========================
        const formattedRecent = recentData?.data.map((item: any) => {
          const createdDate = new Date(item.createdAt);
          const today = new Date();

          const isToday =
            createdDate.getDate() === today.getDate() &&
            createdDate.getMonth() === today.getMonth() &&
            createdDate.getFullYear() === today.getFullYear();

          const dayLabel = isToday
            ? "Today"
            : createdDate.toLocaleDateString("en-GB", { weekday: "short" });

          const formattedDate = createdDate.toLocaleDateString("en-GB");

          const formattedTime = createdDate.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return {
            id: item._id,
            avatar: item.userId?.name?.slice(0, 2).toUpperCase(),
            client: item.userId?.name,
            service: item.serviceName,
            stylist: item.location,
            dayLabel,
            date: formattedDate,
            time: formattedTime,
            status:
              item.status === "pending"
                ? "Pending"
                : item.status === "confirmed"
                  ? "Confirmed"
                  : "In Progress",
          };
        });
        console.log("=======<ooo")

        const formattedTop = topData?.data.map((item: any) => ({
          name: item._id,
          bookings: item.totalBookings,
          growth: Math.floor(Math.random() * 20) + 5,
        }));

        setRecentBookings(formattedRecent);
        setTopServices(formattedTop);

      } catch (error) {
        console.error("Dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {

    fetchDashboardData();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Welcome back, Admin</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening at Elan Beauty today</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2"><Calendar className="w-4 h-4" /><span>Dec 20, 2025</span></Button>
          <Button className="gap-2 gradient-primary text-primary-foreground"><Sparkles className="w-4 h-4" />New Booking</Button>
        </div>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {stats?.map((card) => {
    const isPositive = Number(card.growth) >= 0;

    return (
      <Card
        key={card.title}
        className="relative overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 border-0"
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">
                {card.title}
              </p>

              <p className="text-3xl font-bold text-foreground">
                {card.value}
              </p>

              <div className="flex items-center gap-1">
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-600" />
                )}

                <span
                  className={`text-sm font-semibold ${
                    isPositive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {card.growth}%
                </span>

                <span className="text-xs text-muted-foreground">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="font-display text-xl font-bold">Recent Bookings</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings?.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{booking.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{booking.client}</p>
                      <p className="text-sm text-muted-foreground">{booking.service} • {booking.stylist}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 text-right">
                    <div className="text-xs text-right">
                      <p className="font-medium text-foreground">{booking.dayLabel}</p>
                      <p className="text-muted-foreground">{booking.date}</p>
                    </div>

                    <div className="text-xs font-semibold text-foreground ml-3">
                      {booking.time}
                    </div>

                    <Badge variant="outline" className={`${getStatusColor(booking.status)} border`}>{booking.status}</Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader className="pb-2"><CardTitle className="font-display text-xl font-bold">Top Services</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-5">
              {topServices?.map((service, index) => (
                <div key={service.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{index + 1}</span>
                      <span className="font-medium text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600"><TrendingUp className="w-3 h-3" /><span className="text-xs font-semibold">+{service.growth}%</span></div>
                  </div>
                  <Progress value={service.bookings / 1.5} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground"><span>{service.bookings} bookings</span><span className="font-semibold text-foreground">{service.revenue}</span></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;