import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Star } from "lucide-react";
import { supabase, type Rating } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";

export const RatingsSection = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [newRating, setNewRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    const { data, error } = await supabase
      .from('ratings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching ratings:', error);
    } else {
      setRatings(data || []);
    }
  };

  const submitRating = async () => {
    if (newRating === 0) {
      toast({
        title: "Error",
        description: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from('ratings')
      .insert({
        rating: newRating,
        comment: comment.trim() || null,
        reviewer_name: isAnonymous ? null : reviewerName.trim() || null,
        is_anonymous: isAnonymous,
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Thank you for your feedback!",
      });
      setNewRating(0);
      setComment('');
      setReviewerName('');
      setIsAnonymous(false);
      fetchRatings();
    }

    setIsSubmitting(false);
  };

  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length 
    : 0;

  const renderStars = (rating: number, interactive: boolean = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => interactive && onRate?.(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="ratings" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Rate My Work</h2>
          <p className="text-muted-foreground mb-6">
            Share your experience working with me
          </p>
          
          {ratings.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold">
                {averageRating.toFixed(1)} ({ratings.length} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Rating Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Leave a Rating</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-2 block">Your Rating</Label>
              {renderStars(newRating, true, setNewRating)}
            </div>

            <div>
              <Label htmlFor="comment">Comment (Optional)</Label>
              <Textarea
                id="comment"
                placeholder="Share your thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
              />
              <Label htmlFor="anonymous">Submit anonymously</Label>
            </div>

            {!isAnonymous && (
              <div>
                <Label htmlFor="name">Your Name (Optional)</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  className="mt-2"
                />
              </div>
            )}

            <Button 
              onClick={submitRating} 
              disabled={isSubmitting || newRating === 0}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit Rating"}
            </Button>
          </CardContent>
        </Card>

        {/* Existing Ratings */}
        {ratings.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Recent Reviews</h3>
            <div className="space-y-4">
              {ratings.slice(0, 10).map((rating) => (
                <Card key={rating.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        {renderStars(rating.rating)}
                        <p className="text-sm text-muted-foreground mt-1">
                          {rating.is_anonymous 
                            ? "Anonymous" 
                            : rating.reviewer_name || "Anonymous"
                          } • {new Date(rating.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {rating.comment && (
                      <p className="text-foreground">{rating.comment}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
