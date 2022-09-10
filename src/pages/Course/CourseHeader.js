import './CourseHeader.css';

const CourseHeader = () => {
    return (
        <header className="course-header">
            <p className="path">Development <span className="spliter">&gt;</span> Programming Languages <span className="spliter">&gt;</span> Python</p>
            <h1 className="header-title">Learn Python: The Complete Python Programming Course</h1>
            <p className="header-description">Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
            <span className="bestseller">Bestseller</span>
            <span className="rating">
                <span className="rate">4.4</span>
                <span className="stars">
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                    <i className="fa-solid fa-star icon"></i>
                </span>
                <span className="rating-count">(3,223 ratings)</span>
                <span className="reviews">19,498 students</span>
            </span>
            <p className="creator">Created by <span className="author">Avinash Jain</span>, <span className="author">The Codex</span></p>
            
        </header>
    );
};

export default CourseHeader;