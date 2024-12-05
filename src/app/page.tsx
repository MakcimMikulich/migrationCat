import { redirect } from "next/navigation";

const DEFAULT_LANGUAGE = "en";

export default function Page() {
	// Редиректим на язык по умолчанию
	redirect(`/${DEFAULT_LANGUAGE}/home`);
}
