import { cva } from "class-variance-authority";

export const badge = cva("transition-colors duration-300 ease-out font-bold", {
  variants: {
    size: {
      small: "text-sm/6 px-4 py-2 rounded-3xl",
      medium: "text-base px-6 py-3 rounded-3xl",
      large: "text-xl/8 px-8 py-3 rounded-[32px]",
    },
    variant: {
      primary: "bg-primary-10 text-primary-100",
      secondary: "bg-secondary-10 text-secondary-100",
      tertiary: "bg-tertiary-10 text-tertiary-100",
      tertiary_2: "bg-tertiary_2-10 text-tertiary_2-100",
    },
  },
  defaultVariants: {
    size: "large",
    variant: "primary",
  },
});
