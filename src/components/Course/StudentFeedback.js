import './StudentFeedback.css';
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";

const StudentFeedback = ({ reviews, course }) => {

    const RatingDistribution = () => {
        const ratingCount = [0, 0, 0, 0, 0, 0];
        reviews.results.forEach((value) => {
            ratingCount[Math.ceil(value.rating)]++
        });
        ratingCount[1] += ratingCount[0];
    
        const bars = [];
        for (let i = 1; i <= 5; i++) {
            const percentage = Math.round((ratingCount[i] / reviews.results.length) * 100);
    
            bars[i - 1] = (
                <div key={ i } className="bar">
                    <LinearProgress className="rating-progress" variant="determinate" value={percentage} />
                    <Rating
                        sx={{ fontSize: 20, color: "#e59819", marginLeft: 2 }}
                        value={ i }
                        readOnly
                    />
                    <p className="rating-percentage">{ percentage + "%" }</p>
                </div>
            );
        }
        return bars;
    };

    return (
        <div className="student-feedback-section">
            <h3 className="course-section-header">Student feedback</h3>
            <div className="student-feedback-container">
                <div className="rating-container">
                    <p className="rating-value">
                        { course.avg_rating.toFixed(1) }
                    </p>
                    <Rating
                        sx={{ fontSize: 20, color: "#e59819" }}
                        defaultValue={ course.avg_rating  }
                        precision={ 0.5 }
                        readOnly
                    />
                    <p>Course Rating</p>
                </div>
                <div className="bars-container">
                    <RatingDistribution />
                </div>
            </div>
        </div>
    );
};

export default StudentFeedback;