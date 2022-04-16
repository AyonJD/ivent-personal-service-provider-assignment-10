import bannerOne from '../../../Assets/Images/bannerOne.jpg'
import bannerTwo from '../../../Assets/Images/bannerTwo.jpg'
import bannerThree from '../../../Assets/Images/bannerThree.jpg'
import bannerFour from '../../../Assets/Images/bannerFour.jpg'
import bannerFive from '../../../Assets/Images/bannerFive.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bannerOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerOne} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerTwo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerThree} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerFour} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerFive} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;