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
    const courses = data.courses[0];
    const content = data.content;
    const reviews = data.reviews;
    const { courseId } = useParams();
    const course = courses.items.find((item) => item.id == courseId);

    return (
        <>
            <Header course={ course } />
            <Objectives />
            <Content content={ content } />
            <Requirements />
            <Description />
            <Instructors />
            <StudentFeedback />
            <Reviews />
        </>
    );
};

export default CoursePage;