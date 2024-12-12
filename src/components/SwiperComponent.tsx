'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import slider1 from '../../public/images/slider/slider1.webp'
import slider2 from '../../public/images/slider/slider2.webp'
import slider3 from '../../public/images/slider/slider3.webp'

// const sliderImages = [
// 	'/images/slider/slider1.webp',
// 	'/images/slider/slider2.webp',
// 	'/images/slider/slider3.webp',
// ];
const sliderImages = [
	slider1,
	slider2,
	slider3,
];

const SwiperComponent = () => {
	return (
		<Swiper
			loop={true}
			slidesPerView={1}
			spaceBetween={0}
			autoplay={{ delay: 3000 }}
			modules={[Autoplay]}
			className="w-full flex justify-center items-center mx-auto mt-[80px]"
		>
			{sliderImages.map((item, index) => (
				<SwiperSlide key={index}>
					<Image
						src={item}
						width={2048}
						height={1080}
						alt="alt"
						className="w-full"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
