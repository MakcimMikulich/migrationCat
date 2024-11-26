"use client";
import dynamic from "next/dynamic";

const FAQComponent = dynamic(() => import("./FAQ"), {
	ssr: false,
	loading: () => <div>Загрузка...</div>,
});

export default FAQComponent;
