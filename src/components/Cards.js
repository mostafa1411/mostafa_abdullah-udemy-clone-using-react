import CourseCard from './CourseCard';
import './Cards.css';

const Cards = ({ courses }) => {
    return (
        <div className="cards">
            { courses.map((course) => (
                <CourseCard key={course.id} {...course} />
            )) }
        </div>
    )
};

export default Cards;