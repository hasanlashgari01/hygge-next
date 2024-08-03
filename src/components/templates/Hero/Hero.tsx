import { Link } from "react-router-dom";
import { SectionTop } from "../../modules/SectionTop";

export const Hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col rounded-[56px] lg:flex-row lg:bg-accent lg:pl-12 lg:dark:bg-black-2 2xl:pl-24">
        <div className="lg:py-[100px] 2xl:py-40">
          <SectionTop
            title="We Offer the Best Products for your Skin"
            subTitle="- Skincare Products"
            isCenterMobile={false}
            location="hero"
          />
          <Link
            to="/products"
            className="mt-10 inline-block rounded-full bg-primary-100 px-10 py-4 text-xl/8 font-bold text-light-100"
          >
            Shop Now
          </Link>
        </div>
        <div className="mt-10 flex h-fit items-center justify-center rounded-[48px] bg-accent py-10 dark:bg-black-2 max-[375px]:w-full md:py-2 lg:h-auto">
          <div className="bg-hero md:bg-heroTablet lg:bg-heroLaptop 2xl:bg-heroDesktop mx-auto h-[221px] w-[295px] bg-no-repeat object-cover md:h-96 md:w-[512px] lg:h-[432px] lg:w-[576px] 2xl:h-[576px] 2xl:w-[768px]"></div>
        </div>
      </div>
    </div>
  );
};
