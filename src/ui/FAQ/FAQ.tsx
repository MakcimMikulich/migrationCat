"use client";
import { useEffect } from "react";
import "./FAQ.scss";
// @ts-ignore
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const arrData = [
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
	{
		question: "Как выбрать питомца?",
		answer:
			"Чтобы выбрать питомца вам нужно правильно выбрать питомца, на этом впринципе пока что все, потому что я ещё не придумал что сюда написать.",
	},
];

const FAQ = () => {
	let acc: any;
	useEffect(() => {
		acc = new Accordion(".accordion-container");
		acc.open(0);
	}, []);

	let observer = 0;

	const handlerClick = (index: number) => {
		// console.log("observer", observer);

		if (observer === index) {
			return;
		}
		observer = index;
		acc.closeAll();
		acc.open(index);
	};

	return (
		<div className="accordion__container__wrapper">
			<div className="accordion-container">
				{arrData.map((el, index) => {
					return (
						<div onClick={() => handlerClick(index)} className="ac" key={index}>
							<h2 className="ac-header">
								<button type="button" className="ac-trigger">
									{el.question}
									<div className="ac-plus">
										<span></span>
										<span></span>
									</div>
								</button>
							</h2>
							<div className="ac-panel">
								<p className="ac-text">{el.answer}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQ;
