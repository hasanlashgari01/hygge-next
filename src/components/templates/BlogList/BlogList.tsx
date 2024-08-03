import { SectionTop } from "../../modules/SectionTop";

export const BlogList = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <SectionTop
          title="Check Out our Blog"
          subTitle="- Our Blog"
          classNameTitle="max-md:mx-auto max-md:w-[300px]"
        />
      </div>
    </section>
  );
};
