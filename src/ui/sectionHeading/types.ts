interface sectionHeadingProps {
  title: string;
  note: string;
  button?: HeadingButton;
}

interface HeadingButton {
  text: string;
  link: string;
}

export type { sectionHeadingProps };
