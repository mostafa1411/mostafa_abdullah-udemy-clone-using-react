import './CourseCard.css';
import StarRating from './StarRating';

const CourseCard = (props) => {

    const rateValues = [];

    for (let i = 1; i <= 5; i++) {
        if (props.rating >= i) {
            rateValues.push(1);
        }
        else if (props.rating <= i - 1) {
            rateValues.push(0);
        }
        else {
            rateValues.push(props.rating + 1 - i);
        }
    }

    return (
        <div className="course-card">
            <div className="course-img">
                <img src={ props.image } alt="python course" />
            </div>
            <div className="course-info">
                <div className="title">{ props.title }</div>
                <div className="creator">{ props.author }</div>
                <div className="rating">
                    <span className="rate">{ props.rating }</span>
                    <span className="stars">
                        {
                            rateValues.map((rating, idx) => (
                                <StarRating key={idx} rating={rating} />
                            ))
                        }
                    </span>
                    <span className="reviews">({ props.reviews })</span>
                </div>
                <div className="price">E£{ props.price }</div>
                { props.bestseller ? <div className="bestseller">Bestseller</div> : '' }
            </div>
        </div>
    );
};

export default CourseCard;