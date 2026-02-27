import { useState, useEffect } from "react";
import API from "../../api/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, Mail, Phone, Eye, Calendar, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  const [loadingProfile, setLoadingProfile] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/api/getalluser");
        
        if (response.data.success) {
          setUsers(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user: any) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  


    const handleBooking = async (userId: string) => {
    try {
      const response = await API.get(`/api/bookings/${userId}`);
      if (response.data.success) {
        setBookings(response.data.data);
        setSelectedUser(users.find(u => u._id === userId));
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to fetch bookings");
    }
  };
const handleDelete = async (userId: string) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      await API.delete(`/api/user`, { params: { userId } });
      setUsers(users.filter((u: any) => u._id !== userId));
      Swal.fire("Deleted!", "User has been deleted.", "success");
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire("Error", "Failed to delete user.", "error");
    }
  }
};


const openProfile = async (user: any) => {
  setLoadingProfile(true);
  try {
    // Pass userId as query param
    const response = await API.get(`/api/getUserById`, { params: { userId: user._id } });
    if (response.data.success) {
      setSelectedUser(response.data.data);
      setIsDialogOpen(true);
    }
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    alert("Failed to load profile");
  } finally {
    setLoadingProfile(false);
  }
};



  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Users
          </h1>
          <p className="text-muted-foreground mt-1">Manage your salon clients</p>
        </div>
      </div>

      <Card className="border-0 shadow-card bg-card">
        <div className="p-6 border-b border-border">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>User</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Visits</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user: any) => (
              <TableRow key={user._id} className="hover:bg-secondary/30">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-foreground">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      {user.phone || "-"}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-foreground">{user.visits || 0}</span>
                </TableCell>
                <TableCell>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                      user.status || "inactive"
                    )}`}
                  >
                    {user.status ? user.status : "Inactive"}
                  </span>
                </TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  {/* View Profile */}
                 <Button variant="ghost" size="icon" onClick={() => openProfile(user)}>
                    <Eye className="w-4 h-4" />
                  </Button>

                  {/* Booking */}
                 <Button variant="ghost" size="icon" onClick={() => handleBooking(user._id)}>
                    <Calendar className="w-4 h-4" />
                  </Button>

                  {/* Delete */}
                 <Button variant="ghost" size="icon" onClick={() => handleDelete(user._id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* View Profile Modal */}
      {selectedUser && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedUser.name}</DialogTitle>
              <DialogDescription>
                View full profile details of the user.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedUser.phone || "-"}
                </p>
                <p>
                  <strong>Visits:</strong> {selectedUser.visits || 0}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded-full ${getStatusColor(
                      selectedUser.status || "inactive"
                    )}`}
                  >
                    {selectedUser.status ? selectedUser.status : "Inactive"}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UsersPage;
