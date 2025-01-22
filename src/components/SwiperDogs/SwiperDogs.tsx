"use client";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.scss";
import { ourDogs } from "@/db";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";

export const SwiperDogs = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);

	const slides: JSX.Element[] = [];

	ourDogs.map((slide, index) => {
		slides.push(
			<SwiperSlide key={index}>
				<img src={slide.image.src} alt="image" />
			</SwiperSlide>
		);
	});

	return (
		<>
			<Swiper
				style={{
					color: "#fff",
					backgroundColor: "#fff",
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={thumbsSwiper ? { swiper: thumbsSwiper.swiper } : undefined}
				modules={[FreeMode, Navigation, Thumbs]}
				className="SwiperDogsMain"
			>
				{slides}
			</Swiper>
			<Swiper
				onSwiper={(swiper) => {
					setThumbsSwiper((prevState: SwiperRef | null) => ({
						...prevState,
						swiper,
					}));
				}}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="SwiperDogsLine"
			>
				{slides}
			</Swiper>
		</>
	);
};
