interface MultiFilterProps {
  openFilter: boolean;
  setOpenFilter: (state: boolean) => void;
}

interface Params {
  [key: string]: boolean;
}

interface Filter {
  header: string;
  fields: field[];
}

interface field {
  name: string;
  color: string | null;
}

export type { MultiFilterProps, Params, Filter };
