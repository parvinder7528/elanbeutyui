import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { toast } from "sonner";
import API from "../../api/api"; // Axios instance
import loginBg from "../../assets/elanragent.jpeg";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await API.post("/api/login", { email, password });

      if (response.data?.success) {
        const { token, user } = response.data;
        localStorage.setItem("authToken", token);
        toast.success(`Welcome back, ${user?.name || "Admin"}!`);
        navigate("/admin/dashboard");
      } else {
        toast.error(response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.message || "Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Form */}
      <div style={{background:"rgb(0 0 0 / 76%)"}} className=" relative w-full max-w-md  backdrop-blur-md rounded-xl p-8 shadow-lg z-10">
        {/* Mobile logo */}
        <div className="lg:hidden text-center mb-6">
          <Sparkles className="w-10 h-10 mx-auto text-primary mb-2" />
          <h1 className="text-3xl font-bold text-white">Elan Beauty</h1>
        </div>

        <div className="text-center mb-6 text-white">
          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <p className="mt-2 text-gray-200">Sign in to your admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* EMAIL */}
          <div className="space-y-1">
            <Label className="text-white">Email Address</Label>
            <Input
              type="email"
              placeholder="admin@elanbeauty.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <Label className="text-white">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-white mt-6">
          Need help?{" "}
          <a href="mailto:support@elanbeauty.com" className="text-primary hover:underline">
            support@elanbeauty.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
