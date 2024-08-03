import { IconFacebook, IconInstagram, IconTwitter } from "../../../components/icons/icons";
import { ThemeButton } from "../../../components/modules/ThemeButton";
import { footerCategoryLinks, footerCompanyLinks, footerLegalLinks } from "../../../data/links";
import { FooterColumn } from "./FooterColumn";

export const Footer = () => {
  return (
    <div className="container grid grid-cols-2 gap-10 pb-14 pt-28 md:gap-[101px] md:pb-16 lg:grid-cols-4 2xl:pb-[72px]">
      <div>
        <div className="mb-12">
          <p className="mt-4 text-base text-dark-100 dark:text-light-100 lg:mt-6">© 2020 - All rights reserved</p>
          <div className="mt-6 flex gap-6">
            <IconInstagram />
            <IconTwitter />
            <IconFacebook />
          </div>
        </div>
        <ThemeButton />
      </div>
      <FooterColumn links={footerCategoryLinks} title="Categories" />
      <FooterColumn links={footerLegalLinks} title="Legal" />
      <FooterColumn links={footerCompanyLinks} title="Company" />
    </div>
  );
};
