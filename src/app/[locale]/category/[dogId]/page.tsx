import { SwiperPagination } from "@/components";
import { DogInfo } from "@/components/DogInfo/DogInfo";
import img from "@/assets/Dog/CustomersSlider.png";
import { SectionHeading } from "@/ui";
import { WrapperHeader } from "./wrapperHeader";

interface DogPageProps {
	params: {
		dogId: string; // Параметр маршрута
	};
}

const slides = [img, img, img, img, img, img, img, img, img];

const DogPage = async ({ params }: DogPageProps) => {
	const resolvedParams = await params;
	const { dogId } = resolvedParams;

	// console.log(dogId);

	return (
		<>
			<WrapperHeader />
			<DogInfo dogId={dogId} /> {/* Передача dogId в DogInfo */}
			<section>
				<div className="container">
					<SectionHeading
						title="Our customers"
						note="How you feel your pets?"
						button={{ text: "View more", link: "about" }}
					/>
					<SwiperPagination slides={slides} />
				</div>
			</section>
		</>
	);
};

export default DogPage;
