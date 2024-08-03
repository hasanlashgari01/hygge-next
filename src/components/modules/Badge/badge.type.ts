import { Size } from "../../../ts/types/size.type";
import { Variant } from "../../../ts/types/variant.type";

type BadgeSize = Size | "medium";

export type BadgeProps = {
  size?: BadgeSize;
  variant?: Variant;
  children?: React.ReactNode;
};
