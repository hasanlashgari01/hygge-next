import { SectionTop } from "../../modules/SectionTop";

export const Features = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <SectionTop
          title="Why People Choose Us"
          subTitle="- Why Us"
          isCenterDesktop={true}
          classNameTitle=""
        />
      </div>
    </section>
  );
};
