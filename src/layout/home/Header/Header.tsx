import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { NavLink } from "../../../components/modules/NavLink";
import { homeLinks } from "../../../data/links";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="container">
        <div className="mb-14 flex items-center justify-between pt-8 child:size-12 child:text-white">
          <span className="icon rounded-full bg-accent dark:bg-black-2" onClick={() => setShowMenu(!showMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={twMerge(
                "absolute scale-0 transition-transform duration-200 ease-out",
                showMenu && "scale-100 delay-100",
              )}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={twMerge(
                "absolute scale-100 transition-transform duration-500 ease-out",
                showMenu && "scale-0",
              )}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </span>
          <div></div>
          <div className="flex flex-row-reverse items-center gap-8">
            <span className="icon hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
            <span className="icon hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </header>

      <div
        className={twMerge(
          "fixed inset-0 top-28 -translate-x-full bg-white transition-all duration-300 ease-out dark:bg-black-3",
          showMenu && "translate-x-0",
        )}
      >
        <div className="container">
          <div className="flex flex-col items-center">
            <label
              htmlFor="search"
              className="flex w-full gap-4 rounded-[32px] border-2 border-accent px-4 py-3 dark:border-black-2"
            >
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>

              <input
                id="search"
                type="text"
                placeholder="Search"
                className="flex-1 outline-none placeholder:text-dark-40 dark:bg-black-3 dark:placeholder:text-light-64"
              />
            </label>

            <div className="mt-14 flex flex-col items-center gap-4 md:gap-6">
              {homeLinks.map((link) => (
                <NavLink key={`link-${link.label.toLowerCase()}`} path={link.path}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/login"
              className="mt-24 w-full rounded-3xl bg-primary-100 py-3 text-center text-base font-bold text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
