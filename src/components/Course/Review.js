import './Review.css';
import React, { useState } from "react";
import StarRating from "../StarRating";
import ThumbUpIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDownOutlined";

const Review = ({ review }) => {
    const [feedback, setFeedback] = useState(0);

    const rateValues = [];

    for (let i = 1; i <= 5; i++) {
        if (review.rating >= i) {
            rateValues.push(1);
        }
        else if (review.rating <= i - 1) {
            rateValues.push(0);
        }
        else {
            rateValues.push(review.rating + 1 - i);
        }
    }

    return (
        <div className="review-container">
            <p className="user-initials">{ review.user.initials }</p>
            <div>
                <h3 className="username">{ review.user.public_display_name }</h3>
                <div className="rating-time">
                    <span className="stars">
                    {
                        rateValues.map((rating, idx) => (
                            <StarRating key={idx} rating={rating} />
                        ))
                    }
                    </span>
                    <p className="time-since">{ review.created_formatted_with_time_since } </p>
                </div>
                <p className="review-content">{ review.content }</p>
                <p className="review-feedback">
                    {feedback === 0 ? "Was this review helpful?"
                                    : "Thank you for your feedback"}
                </p>
                <div className="feedback-actions">
                    <button className={feedback === 1 ? "thump-btn-clicked" : "thump-btn"}
                            onClick={() => setFeedback(feedback === 1 ? 0 : 1)}>
                        <ThumbUpIcon sx={{ fontSize: 19 }} />
                    </button>
                    <button className={feedback === -1 ? "thump-btn-clicked" : "thump-btn"}
                            onClick={() => setFeedback(feedback === -1 ? 0 : -1)}>
                        <ThumbDownIcon sx={{ fontSize: 19 }} />
                    </button>
                    <p className="report">Report</p>
                </div>
            </div>
        </div>
    );
}

export default Review;
