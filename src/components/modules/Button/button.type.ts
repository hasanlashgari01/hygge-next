import { Size } from "../../../ts/types/size.type";
import { Variant } from "../../../ts/types/variant.type";

type ButtonVariant = Variant | "accent" | "accent_2";
type Box = "outline" | "fill";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size | "auto";
  variant?: ButtonVariant;
  box?: Box;
  className?: string;
  children?: React.ReactNode;
};
