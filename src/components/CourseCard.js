import './CourseCard.css';

const CourseCard = (props) => {
    return (
        <div className="course-card">
            <div className="course-img">
                <img src={props.image} alt="python course" />
            </div>
            <div className="course-info">
                <div className="title">{props.title}</div>
                <div className="creator">{props.author}</div>
                <div className="rating">
                    <span className="rate">{props.rating}</span>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star-half-stroke icon"></i>
                    <span className="reviews">({props.reviews})</span>
                </div>
                <div className="price">E£{props.price}</div>
            </div>
        </div>
    );
};

export default CourseCard;