import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Calendar, DollarSign, User, CheckCircle, Clock, XCircle } from "lucide-react";
import API from "../../api/api";



const UserServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [purchasedServices, setPurchasedServices] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    expiringSoon: 0,
    expired: 0,
  });
  const filteredServices = useMemo(() => {
    return purchasedServices.filter((item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.service?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        item.status?.toLowerCase().replace(/\s+/g, "-") === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [purchasedServices, searchTerm, statusFilter]);

  const getStatusIcon = (status: string) => {
    switch (status) { case "Active": return <CheckCircle className="w-4 h-4" />; case "Expiring Soon": return <Clock className="w-4 h-4" />; case "Expired": return <XCircle className="w-4 h-4" />; default: return null; }
  };

  const getStatusColor = (status: string) => {
    switch (status) { case "Active": return "bg-emerald-100 text-emerald-700 border-emerald-200"; case "Expiring Soon": return "bg-amber-100 text-amber-700 border-amber-200"; case "Expired": return "bg-red-100 text-red-700 border-red-200"; default: return "bg-muted text-muted-foreground"; }
  };


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const results = await Promise.allSettled([
          API.get("/api/user-purchase-history"),
          API.get("/api/user-service-stats"),
        ]);

        const purchaseResult = results[0];
        const statsResult = results[1];

        // Purchase History
        if (purchaseResult.status === "fulfilled") {
          setPurchasedServices(purchaseResult.value?.data?.data || []);
        }

        // Stats
        if (statsResult.status === "fulfilled") {
          const data = statsResult.value?.data?.data;

          setStats({
            total: data?.total || 0,
            active: data?.active || 0,
            expiringSoon: data?.expiring || 0,
            expired: data?.expired || 0,
          });
        }

      } catch (error) {
        console.error("Unexpected Error:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div><h1 className="text-3xl font-display font-bold text-foreground">User Services</h1><p className="text-muted-foreground mt-1">Track services purchased by users</p></div>
        <Button className="gap-2 gradient-primary text-primary-foreground"><DollarSign className="w-4 h-4" />Export Report</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-blue-100"><User className="w-5 h-5 text-blue-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.total}</p><p className="text-xs text-muted-foreground">Total</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-emerald-100"><CheckCircle className="w-5 h-5 text-emerald-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.active}</p><p className="text-xs text-muted-foreground">Active</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-amber-100"><Clock className="w-5 h-5 text-amber-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.expiringSoon}</p><p className="text-xs text-muted-foreground">Expiring</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-red-100"><XCircle className="w-5 h-5 text-red-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.expired}</p><p className="text-xs text-muted-foreground">Expired</p></div></div></CardContent></Card>
      </div>

      <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-4"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div><div className="flex gap-2"><Button variant={statusFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("all")}>All</Button><Button variant={statusFilter === "active" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("active")}>Active</Button><Button variant={statusFilter === "expiring-soon" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("expiring-soon")}>Expiring</Button></div></div></CardContent></Card>

      <Card className="shadow-card border-0">
        <CardHeader><CardTitle className="font-display font-bold">Purchased Services</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>User</TableHead><TableHead>Service</TableHead><TableHead>Purchase</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {filteredServices?.map((item: any) => {
                const date = new Date(item.purchaseDate);

                const formattedDate = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                });

                const initials = item?.name
                  ? item.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .toUpperCase()
                  : "NA";

                return (
                  <TableRow key={item.id} className="hover:bg-secondary/30">

                    {/* USER */}
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {initials}
                          </span>
                        </div>

                        <div>
                          <p className="font-semibold text-foreground">
                            {item.name || "Unknown User"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.email || "-"}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    {/* SERVICE */}
                    <TableCell>
                      <p className="font-medium text-foreground">
                        {item.service}
                      </p>
                    </TableCell>

                    {/* PURCHASE DATE */}
                    <TableCell>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formattedDate}</span>
                      </div>
                    </TableCell>


                    {/* STATUS */}
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`gap-1 ${getStatusColor(item.status?.toLowerCase())}`}
                      >
                        {getStatusIcon(item.status)}
                        {item.status}
                      </Badge>
                    </TableCell>

                  </TableRow>
                );
              })}
            </TableBody>

          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserServicesPage;