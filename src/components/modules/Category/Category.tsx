import { TCategory } from "../../../ts/types/category.type";
import { IconInstagram } from "../../icons/icons";

export const Category: React.FC<TCategory> = ({ icon, title }) => {
  return (
    <div className="category">
      <div className="flex size-8 items-center justify-center">
        <IconInstagram className="text-primary-100" />
      </div>
      <span className="text-base font-semibold">{title}</span>
    </div>
  );
};
