import { Link, useLocation } from "react-router-dom";
import { NavLinkProps } from "./navlink.type";
import { twMerge } from "tailwind-merge";

export const NavLink: React.FC<NavLinkProps> = ({ path, children, className }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link
      to={path}
      className={twMerge(
        "text-lg/10 transition-colors duration-300 ease-out hover:text-primary-100 dark:hover:text-primary-100",
        isActive ? "text-primary-100" : "text-dark-100 dark:text-light-100",
        className,
      )}
    >
      {children}
    </Link>
  );
};
