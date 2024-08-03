import { cva } from "class-variance-authority";

export const button = cva("btn", {
  variants: {
    size: {
      small: "text-base px-6 py-3 rounded-3xl",
      large: "text-xl/8 px-10 py-4 rounded-[32px]",
      auto: "text-base px-6 py-3 rounded-full md:text-xl/8 md:px-10 md:py-4",
    },
    variant: {
      primary: "bg-primary-100 text-light-100",
      secondary: "bg-secondary-100 text-light-100",
      tertiary: "bg-tertiary-100 text-light-100",
      tertiary_2: "bg-tertiary_2-100 text-light-100",
      accent: "bg-accent-100 text-light-100",
      accent_2: "bg-accent_2-100 text-light-100",
    },
    box: {
      outline: "border bg-transparent text-dark-100 hover:bg-light-100",
      fill: "",
    },
  },
  defaultVariants: {
    size: "large",
    variant: "primary",
    box: "fill",
  },
});
