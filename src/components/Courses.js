import './Courses.css';
import Content from './Content';
import { data } from '../data.js';

const Courses = () => {
    let { title, description, courses } = data;

    return (
        <section className="courses">
            <h1>A broad selection of courses</h1>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
            <ul className="courses-list">
                <li className="course-section active">Python</li>
                <li className="course-section">Excel</li>
                <li className="course-section">Web Development</li>
                <li className="course-section">JavaScript</li>
                <li className="course-section">Data Science</li>
                <li className="course-section">AWS Certification</li>
                <li className="course-section">Drawing</li>
            </ul>
            <Content title={ title } description={ description } courses={ courses } />
        </section>
    );
};

export default Courses;