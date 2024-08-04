import { Link } from "react-router-dom";
import { TProductCard } from "../../../ts/types/product.type";

export const ProductCard: React.FC<TProductCard> = ({ title, image, price, offer, category }) => {
  return (
    <div className="relative h-[404px] w-[300px]">
      <div className="mb-8 size-[276px] rounded-[48px] dark:bg-black-2">
        <img src={image} alt="" className="product-image" />
      </div>
      <div>
        <h3 className="product-title">{title}</h3>
        <div className="mt-4 flex items-center gap-6">
          <Link
            to={`${category.path}`}
            className="rounded-full bg-tertiary-10 px-4 py-2 text-sm/6 font-bold text-tertiary-100"
          >
            {category.title}
          </Link>
          <div className="flex items-center gap-2 font-semibold">
            {offer && <span className="text-base line-through dark:text-light-24">$30</span>}
            <span className="text-xl/8 dark:text-light-100">${price}</span>
          </div>
        </div>
      </div>
      {offer && <span className="product-offer">20% OFF</span>}
    </div>
  );
};
