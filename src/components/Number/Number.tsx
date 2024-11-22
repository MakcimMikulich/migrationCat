"use client";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface NumberProps {
	n: number;
	duration: number;
}

export const Number = ({ n, duration }: NumberProps) => {
	const settings = {
		from: { number: 0 },
		number: n,
		delay: 120,
		config: { mass: 100, tension: 20, friction: 10, duration },
	};

	const { ref, inView } = useInView({
		triggerOnce: false, // Отслеживать каждый раз, когда элемент входит/выходит из зоны видимости
		threshold: 0.1, // Процент видимости элемента (0.1 = 10%)
	});

	const [style, api] = useSpring(() => settings);

	useEffect(() => {
		if (inView) {
			api.start(settings);
		} else {
			api.start({ number: 0 });
		}
	}, [inView, api, n]);

	return (
		<animated.div ref={ref}>
			{style.number.to((num) => num.toFixed(0))}
		</animated.div>
	);
};
