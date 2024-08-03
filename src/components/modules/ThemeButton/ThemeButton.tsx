import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconMoon, IconSun } from "../../icons/icons";

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") === "dark" ? setIsDark(true) : setIsDark(false);
  }, []);

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div
      className="h-8 w-14 cursor-pointer rounded-full bg-accent p-1 dark:bg-black-2"
      onClick={() => setIsDark(!isDark)}
    >
      <div
        className={twMerge(
          "w-fit rounded-full bg-primary-100 p-1 transition ease-linear",
          isDark ? "translate-x-6" : "translate-x-0",
        )}
      >
        {isDark ? (
          <IconMoon className="text-white" viewBox="0 0 16 16" width={16} height={16} />
        ) : (
          <IconSun className="text-white" viewBox="0 0 16 16" width={16} height={16} />
        )}
      </div>
    </div>
  );
};
