import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './NiceSwiper.scss'
import { EffectCoverflow, Pagination } from 'swiper'
import slide_1 from 'assets/Slide_1.jpg'
import slide_2 from 'assets/Slide_2.jpg'
import slide_3 from 'assets/Slide_3.jpg'
import slide_4 from 'assets/Slide_4.jpg'
import slide_5 from 'assets/Slide_5.jpg'
import slide_6 from 'assets/Slide_6.jpg'
import slide_7 from 'assets/Slide_7.jpg'
import slide_8 from 'assets/Slide_8.jpg'
import slide_9 from 'assets/Slide_9.jpg'
import slide_10 from 'assets/Slide_10.jpg'
import slide_11 from 'assets/Slide_11.jpg'
import slide_12 from 'assets/Slide_12.jpg'
import slide_13 from 'assets/Slide_13.jpg'
import slide_14 from 'assets/Slide_14.jpg'

type Props = {}

const NiceSwiper = (props: Props) => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide_1} alt='Slide_1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_2} alt='Slide_2'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_3} alt='Slide_3'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_4} alt='Slide_4'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_5} alt='Slide_5'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_6} alt='Slide_6'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_7} alt='Slide_7'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_8} alt='Slide_8'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_9} alt='Slide_9'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_10} alt='Slide_10'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_11} alt='Slide_11'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_12} alt='Slide_12'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_13} alt='Slide_13'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_14} alt='Slide_14'/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default NiceSwiper
