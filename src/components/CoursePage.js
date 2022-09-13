import './CoursePage.css';
import Header from './Course/Header';
import Objectives from './Course/Objectives';
import Content from './Course/Content';
import Requirements from './Course/Requirements';
import Description from './Course/Description';
import Instructors from './Course/Instructors';
import StudentFeedback from './Course/StudentFeedback';
import Reviews from './Course/Reviews';
import { useParams } from 'react-router-dom';

const CoursePage = ({ data }) => {
    const { courseId } = useParams();
    const courses = data.courses[0];
    const content = data.contents[courseId];
    const reviews = data.reviews[courseId];
    const course = courses.items.find((item) => item.id == courseId);

    return (
        <main className="main-container">
            <div className="content-container">
                <Header course={ course } />
                <Objectives course={ course } />
                <Content contentData={ content.curriculum_context.data } />
                <Requirements details={ content.details } />
                <Description details={ content.details } />
                <Instructors data={ course.visible_instructors } />
                <StudentFeedback reviews={ reviews } course={ course } />
                <Reviews />
            </div>
        </main>
    );
};

export default CoursePage;