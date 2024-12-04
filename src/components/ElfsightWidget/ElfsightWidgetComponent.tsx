"use client";
import dynamic from "next/dynamic";

const ElfsightWidgetComponent = dynamic(() => import("./ElfsightWidget"), {
	ssr: false,
	loading: () => <div>Загрузка...</div>,
});

export default ElfsightWidgetComponent;
