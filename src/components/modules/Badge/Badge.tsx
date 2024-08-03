import { cn } from "../../../utils/cn";
import { BadgeProps } from "./badge.type";
import { badge } from "./badge.variant";

export const Badge: React.FC<BadgeProps> = ({ size, variant, children }) => {
  return <span className={cn(badge({ size, variant }), "")}>{children}</span>;
};
