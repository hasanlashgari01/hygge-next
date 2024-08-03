import { cn } from "../../../utils/cn";
import { ButtonProps } from "./button.type";
import { button } from "./button.variant";

export const Button: React.FC<ButtonProps> = ({ size, variant, box = "fill", children, className, ...rest }) => {
  return (
    <button className={cn(button({ size, variant, box }), className)} {...rest}>
      {children}
    </button>
  );
};
