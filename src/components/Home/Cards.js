import CourseCard from './CourseCard';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';


const Cards = ({ courses }) => {
    return (
        <Splide
            options={{
            type   : 'slide',
            perPage: 5,
            perMove: 5,
            pagination: false,
            breakpoints: {
                1200: {
                    perPage: 4,
                    perMove: 4,
                },
                980: {
                    perPage: 3,
                    perMove: 3,
                },
                700: {
                    perPage: 2,
                    perMove: 2,
                },
                550: {
                    perPage: 1,
                    perMove: 1,
                },
            }
        }}>
            {
                courses.map((course) => (
                    <CourseCard key={ course.id } course={ course }  />
                ))
            }
        </Splide>
    )
};

export default Cards;