import './CourseCard.css';

const CourseCard = (props) => {
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
                        <i className="fa-solid fa-star icon"></i>
                        <i className="fa-solid fa-star icon"></i>
                        <i className="fa-solid fa-star icon"></i>
                        <i className="fa-solid fa-star icon"></i>
                        <i className="fa-solid fa-star-half-stroke icon"></i>
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