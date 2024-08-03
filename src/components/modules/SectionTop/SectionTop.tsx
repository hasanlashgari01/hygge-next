import { twMerge } from "tailwind-merge";
import { SectionTopProps } from "./section-top.type";

export const SectionTop: React.FC<SectionTopProps> = ({
  location = "default",
  title,
  subTitle,
  isCenterMobile = true,
  isCenterDesktop = false,
  classNameTitle,
  classNameSubTitle,
}) => {
  return (
    <div className={twMerge(isCenterMobile && "max-md:text-center", isCenterDesktop && "md:text-center w-full")}>
      <h5 className={twMerge("text-base font-semibold italic text-secondary-100", classNameSubTitle)}>{subTitle}</h5>
      <h1
        className={twMerge(
          "mt-2 text-[32px]/[48px] font-bold text-dark-100 dark:text-light-100",
          location === "default"
            ? "lg:text-[40px]/[56px]"
            : "text-2xl sm:text-[32px]/[48px] md:text-[40px]/[56px] lg:max-w-[368px] 2xl:max-w-[496px]",
          classNameTitle,
        )}
      >
        {title}
      </h1>
    </div>
  );
};
