interface MultiFilterProps {
	openFilter: boolean;
	setOpenFilter: (state: boolean) => void;
	handlerCheckBox: (header: string, name: string, checked: boolean) => void;
}

type Params = {
	[key: string]: {
		[key: string]: boolean;
	};
};

interface Filter {
	header: string;
	fields: field[];
}

interface field {
	name: string;
	color: string | null;
}

export type { MultiFilterProps, Params, Filter };
