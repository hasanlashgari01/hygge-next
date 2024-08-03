import { useEffect, useState } from "react";
import { Button } from "../../modules/Button";
import { SectionTop } from "../../modules/SectionTop";
import { isEmail } from "../../../utils/inputValidation";

export const NewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isValidEmail = isEmail(email);

    isValidEmail ? setDisabled(false) : setDisabled(true);
  }, [email]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col items-center gap-14 lg:rounded-[48px] lg:bg-accent lg:py-16 2xl:py-24 lg:dark:bg-black-2 2xl:rounded-[56px]">
      <SectionTop
        title="Sign Up to Our Newsletter"
        subTitle="- Our Newsletter"
        classNameTitle="max-md:mx-auto max-md:w-[300px]"
        isCenterMobile
        isCenterDesktop
      />
      <form className="flex w-full flex-col items-start justify-center gap-6 md:flex-row" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Your Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" size="auto" disabled={disabled}>
          Sign Up
        </Button>
      </form>
    </section>
  );
};
