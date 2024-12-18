import React from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  comment,
  avatar
}) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-500 fill-current" : "text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-400">{comment}</p>
    </div>
  );
};

export default ReviewCard;
