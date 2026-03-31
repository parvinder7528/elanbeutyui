import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Users, DollarSign, Calendar, TrendingUp, Clock,
  Star, ArrowUpRight, MoreHorizontal, Sparkles,
  ArrowDownRight, MessageCircle, ChevronLeft, ChevronRight, CheckCircle2
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import API from "../../api/api";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [recentBookings, setRecentBookings] = useState<any[]>([]);
  const [topServices, setTopServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any[]>([]);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Pending": return "bg-amber-100 text-amber-700 border-amber-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  // const handleSendWhatsApp = (booking: any) => {
  //   const phoneNumber = booking.phone || "";
  //   const message = `*E'LAN BEAUTY*%0A%0AHello *${booking.client}*,%0A%0AYour booking for *${booking.service}* has been *Approved* ✅.%0A%0A📅 Date: ${booking.date}%0A⏰ Time: ${booking.time}%0A📍 Location: ${booking.stylist}%0A%0ASee you soon! ✨`;
  //   window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  // };
const handleSendWhatsApp = (booking: any) => {
  // 1. Sirf digits rakhein (spaces, +, brackets sab hatayein)
  let cleanPhone = booking.phone?.replace(/\D/g, '') || "";

  // 2. Agar number '0' se start ho raha hai, toh usey hatayein
  if (cleanPhone.startsWith('0')) {
    cleanPhone = cleanPhone.substring(1);
  }

  // 3. Indian Number Fix: 
  // Agar number 91 se start nahi ho raha aur 10 digit ka hai, toh 91 add karein
  const finalPhone = cleanPhone.startsWith('91') && cleanPhone.length > 10 
    ? cleanPhone 
    : `91${cleanPhone}`;

const messageText = 
    `ELAN BEAUTY\n\n` +
    `Hello ${booking.client},\n\n` +
    `Your booking for ${booking.service} has been successfully APPROVED.\n\n` +
    `BOOKING DETAILS:\n` +
    `Date: ${booking.date}\n` +
    `Time: ${booking.time}\n\n` +
    `---\n` +
    `CONTACT US:\n` +
    `+61 401788668 (Nundah)\n` +
    `+61 420988668 (Regent Park)\n\n` +
    `We look forward to seeing you soon!`;

  // 3. URL Encoding for clean delivery
  const encodedMessage = encodeURIComponent(messageText);
  window.open(`https://wa.me/${finalPhone}?text=${encodedMessage}`, '_blank');
};

const handleToggleStatus = async (id: string, currentStatus: string) => {
  const newStatus = currentStatus === "Confirmed" ? "pending" : "confirmed";
  
  setLoadingId(id);

  const toastId = toast.loading("Updating booking status...");

  try {
    const res = await API.post(
      `/api/booking/update-booking-status/${id}`,
      { status: newStatus }
    );

    if (res.status === 200) {
      // 3. Update the existing loading toast to a success toast
      toast.update(toastId, {
        render: `Booking ${newStatus === 'confirmed' ? 'Confirmed' : 'set to Pending'}! ✅`,
        type: "success",
        isLoading: false,
        autoClose: 3000, // Toast will disappear after 3 seconds
      });

      fetchDashboardData(); // Refresh your list
    }
  } catch (error: any) {
    // 4. Update the loading toast to an error toast
    const errorMessage = error.response?.data?.message || "Failed to update status ❌";
    
    toast.update(toastId, {
      render: errorMessage,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
    
    console.error("Status Update Error:", error);
  } finally {
    // 5. Always stop the individual row loader (whether success or fail)
    setLoadingId(null);
  }
};
  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      // Added pagination params to the API call
      const [recentRes, topRes, statsRes] = await Promise.allSettled([
        API.get(`/api/recent-bookings?page=${currentPage}&limit=${itemsPerPage}`),
        API.get("/api/top-bookings"),
        API.get("/api/dashboard-stats"),
      ]);

      if (statsRes.status === "fulfilled") {
        setStats(statsRes.value?.data?.data || []);
      }

      if (recentRes.status === "fulfilled") {
        const recentData = recentRes.value?.data;

        // Update pagination from API response if available
        if (recentData?.pagination) {
          setTotalPages(recentData.pagination.totalPages);
        }

        const formattedRecent = recentData?.data?.map((item: any) => {
          const createdDate = new Date(item.createdAt);
          const today = new Date();
          const isToday = createdDate.getDate() === today.getDate() && createdDate.getMonth() === today.getMonth();

          return {
            id: item._id,
            avatar: item.userId?.name?.slice(0, 2).toUpperCase() || "GA",
            client: item.userId?.name || "Guest",
            phone: item.userId?.phone || "",
            service: item.serviceName,
            stylist: item.location || "General",
            dayLabel: isToday ? "Today" : createdDate.toLocaleDateString("en-GB", { weekday: "short" }),
            date: createdDate.toLocaleDateString("en-GB"),
            time: createdDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
            status: item.status === "pending" ? "Pending" : item.status === "confirmed" ? "Confirmed" : "In Progress",
          };
        });
        setRecentBookings(formattedRecent || []);
      }

      if (topRes.status === "fulfilled") {
        const topData = topRes.value?.data;
        const formattedTop = topData?.data?.map((item: any) => ({
          name: item._id || "Service",
          bookings: item.totalBookings || 0,
          growth: Math.floor(Math.random() * 20) + 5,
          revenue: `£${(item.totalBookings || 0) * 50}`,
        }));
        setTopServices(formattedTop || []);
      }

    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage]); // Fetch whenever page changes

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Welcome back, Admin</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening at E'LAN BEAUTY today</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2"><Calendar className="w-4 h-4" /><span>{new Date().toLocaleDateString('en-GB')}</span></Button>
          <Button className="gap-2 gradient-primary text-primary-foreground"><Sparkles className="w-4 h-4" />New Booking</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats?.map((card, index) => (
          <Card key={index} className="relative overflow-hidden shadow-card border-0">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
              <p className="text-3xl font-bold text-foreground py-2">{card.value}</p>
              <div className="flex items-center gap-1">
                {Number(card.growth) >= 0 ? <ArrowUpRight className="w-4 h-4 text-emerald-600" /> : <ArrowDownRight className="w-4 h-4 text-red-600" />}
                <span className={`text-sm font-semibold ${Number(card.growth) >= 0 ? "text-emerald-600" : "text-red-600"}`}>{card.growth}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-card border-0">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="font-display text-xl font-bold">Recent Bookings</CardTitle>
            <div className="flex items-center gap-2">
              {/* Simple Pagination Controls */}
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-xs font-medium">Page {currentPage} of {totalPages}</span>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings?.map((booking) => (
                <div key={booking.id} className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{booking.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{booking.client}</p>
                      <p className="text-sm text-muted-foreground">{booking.service} • {booking.stylist}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ml-auto sm:ml-0">
                    <div className="hidden sm:block text-xs text-right">
                      <p className="font-medium text-foreground">{booking.dayLabel}</p>
                      <p className="text-muted-foreground">{booking.date}</p>
                    </div>

                    <Badge variant="outline" className={`${getStatusColor(booking.status)} border`}>
                      {booking.status}
                    </Badge>

                    <div className="flex items-center gap-1">
                      {/* WhatsApp Action */}
                      {/* <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                        onClick={() => handleSendWhatsApp(booking)}
                        title="Send WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button> */}

                      <div className="flex items-center gap-2">
                        <div className="relative flex items-center">
                          <Switch
                            checked={booking.status === "Confirmed"}
                            disabled={loadingId === booking.id} // Disable while loading
                            onCheckedChange={() => handleToggleStatus(booking.id, booking.status)}
                            className={`${loadingId === booking.id ? "opacity-50 cursor-not-allowed" : ""}`}
                          />

                          {/* Optional: Show a tiny spinner next to the switch while updating */}
                          {loadingId === booking.id && (
                            <div className="absolute -right-6">
                              <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                            </div>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-emerald-600 hover:text-emerald-700"
                          onClick={() => handleSendWhatsApp(booking)}
                          disabled={loadingId === booking.id}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                    </div>
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
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{index + 1}</span>
                      <span className="font-medium text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600"><TrendingUp className="w-3 h-3" /><span className="text-xs font-semibold">+{service.growth}%</span></div>
                  </div>
                  <Progress value={(service.bookings / (topServices[0]?.bookings || 1)) * 100} className="h-2" />
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