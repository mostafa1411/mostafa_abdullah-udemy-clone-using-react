import CourseCard from './CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Cards = ({ courses }) => {
    return (
        <Swiper className="mySwiper"
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
                1400: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 4,
                },
                980: {
                    slidesPerView: 3,
                },
                700: {
                    slidesPerView: 2,
                },
                550: {
                    slidesPerView: 1,
                },
            }}
        >
        {
            courses.map((course) => (
                <SwiperSlide key={ course.id }>
                    <CourseCard course={ course }  />
                </SwiperSlide>
            ))
        }
        </Swiper>
    );
};

export default Cards;