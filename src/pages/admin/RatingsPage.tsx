import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, MessageSquare, TrendingUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    client: "Sarah Johnson",
    service: "Hair Coloring",
    rating: 5,
    comment: "Absolutely amazing experience! The color came out exactly as I wanted. The stylist was very professional and attentive.",
    date: "2 hours ago",
    helpful: 12,
  },
  {
    id: 2,
    client: "Emily Davis",
    service: "Manicure & Pedicure",
    rating: 5,
    comment: "Best nail salon experience I've ever had. Clean, professional, and the results are stunning!",
    date: "5 hours ago",
    helpful: 8,
  },
  {
    id: 3,
    client: "Jessica Miller",
    service: "Facial Treatment",
    rating: 4,
    comment: "Great facial treatment. My skin feels so refreshed. Would definitely come back!",
    date: "1 day ago",
    helpful: 15,
  },
  {
    id: 4,
    client: "Amanda Brown",
    service: "Full Body Massage",
    rating: 5,
    comment: "Incredible massage therapy. The therapist knew exactly where all my tension was. Highly recommend!",
    date: "2 days ago",
    helpful: 23,
  },
];

const ratingStats = [
  { stars: 5, percentage: 78, count: 456 },
  { stars: 4, percentage: 15, count: 87 },
  { stars: 3, percentage: 5, count: 29 },
  { stars: 2, percentage: 1, count: 6 },
  { stars: 1, percentage: 1, count: 5 },
];

const RatingsPage = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-rose-gold text-rose-gold" : "text-muted"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Ratings & Reviews</h1>
        <p className="text-muted-foreground mt-1">Monitor customer feedback and satisfaction</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Rating */}
        <Card className="p-8 border-0 shadow-card bg-card text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-rose-gold/10 flex items-center justify-center mb-4">
            <Star className="w-10 h-10 fill-rose-gold text-rose-gold" />
          </div>
          <h2 className="text-5xl font-display font-bold text-foreground">4.8</h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {renderStars(5)}
          </div>
          <p className="text-muted-foreground mt-2">Based on 583 reviews</p>
          <div className="flex items-center justify-center gap-1 mt-3 text-primary">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+0.2 from last month</span>
          </div>
        </Card>

        {/* Rating Distribution */}
        <Card className="p-6 border-0 shadow-card bg-card lg:col-span-2">
          <h3 className="text-lg font-display font-semibold text-foreground mb-6">Rating Distribution</h3>
          <div className="space-y-4">
            {ratingStats.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm font-medium text-foreground">{stat.stars}</span>
                  <Star className="w-4 h-4 fill-rose-gold text-rose-gold" />
                </div>
                <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-16 text-right">
                  {stat.count} reviews
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card className="p-6 border-0 shadow-card bg-card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-semibold text-foreground">Recent Reviews</h2>
          <Button variant="secondary">View All Reviews</Button>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {review.client.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.client}</h4>
                    <p className="text-sm text-muted-foreground">{review.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">{review.comment}</p>
              <div className="flex items-center gap-4 mt-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Helpful ({review.helpful})
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Reply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RatingsPage;
