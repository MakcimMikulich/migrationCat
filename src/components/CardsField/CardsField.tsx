import { Card } from "../Card/Card";
import styles from "./CardsField.module.scss";
import type { ICard } from "../../db/cardsProducts.data.ts";

interface CardsFieldProps {
	cards: ICard[];
	fullField?: boolean;
}

export const CardsField = ({ cards, fullField }: CardsFieldProps) => {
	const className =
		styles.cards__field + (fullField ? ` ${styles.with__filter}` : "");

	return (
		<div className={className}>
			{cards.map((card, index) => (
				<Card key={index} data={card} cardId={index} />
			))}
		</div>
	);
};
