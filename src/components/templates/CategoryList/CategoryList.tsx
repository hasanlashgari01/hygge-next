import { useEffect, useState } from "react";
import { TCategory } from "../../../ts/types/category.type";
import { Category } from "../../modules/Category";
import { SectionTop } from "../../modules/SectionTop";

const data: TCategory[] = [
  { icon: "sun", title: "On Sale" },
  { icon: "leaf", title: "Featured" },
  { icon: "sun", title: "Masks" },
  { icon: "leaf", title: "Eye Care" },
  { icon: "leaf", title: "Moisturizers" },
  { icon: "leaf", title: "Treatments" },
  { icon: "leaf", title: "Night Care" },
  { icon: "leaf", title: "Sun Care" },
];

export const CategoryList = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <SectionTop
          title="Browse by Category"
          subTitle="- The Categories"
          classNameTitle="max-md:mx-auto max-md:w-[300px]"
        />
      </div>
      <div className="mt-[72px] flex flex-row gap-8">
        {categories.map((category) => (
          <Category key={`category-${category.title}`} {...category} />
        ))}
      </div>
    </section>
  );
};
