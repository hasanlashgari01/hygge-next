import { useEffect, useState } from "react";
import { TCategory } from "../../../ts/types/category.type";
import { Category } from "../../modules/Category";
import { SectionTop } from "../../modules/SectionTop";

const data: TCategory[] = [
  { id: 1, icon: "sun", title: "On Sale", path: "" },
  { id: 2, icon: "leaf", title: "Featured",path: "" },
  { id: 3, icon: "sun", title: "Masks",path: "" },
  { id: 4, icon: "leaf", title: "Eye Care",path: "" },
  { id: 5, icon: "leaf", title: "Moisturizers",path: "" },
  { id: 6, icon: "leaf", title: "Treatments",path: "" },
  { id: 7, icon: "leaf", title: "Night Care",path: "" },
  { id: 8, icon: "leaf", title: "Sun Care",path: "" },
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
