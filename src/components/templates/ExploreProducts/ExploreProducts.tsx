import { ProductCard } from "../../modules/ProductCard";
import { SectionTop } from "../../modules/SectionTop";

export const ExploreProducts = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <SectionTop
          title="Explore our Products"
          subTitle="- Our Products"
          classNameTitle="max-md:mx-auto max-md:w-[300px]"
        />
      </div>
      <div className="mt-[72px]">
        {/* <ProductCard /> */}
      </div>
    </section>
  );
};
