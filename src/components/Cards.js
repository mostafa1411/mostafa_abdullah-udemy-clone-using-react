import CourseCard from './CourseCard';
import { courses } from '../data.js';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
        </div>
    )
};

export default Cards;