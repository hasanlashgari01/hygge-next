import { SectionTop } from "../../modules/SectionTop";

export const CategoryList = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <SectionTop
          title="Browse by Category"
          subTitle="- The Categories"
          classNameTitle="max-md:mx-auto max-md:w-[300px]"
        />
      </div>
    </section>
  );
};
