import { Link } from "react-router-dom";
import { NavLink } from "../../../ts/types/navlink.type";

type FooterColumnProps = { links: NavLink[]; title: string };

export const FooterColumn: React.FC<FooterColumnProps> = ({ links, title }) => {
  return (
    <div className="footer-col">
      <h3 className="footer-title">{title}</h3>
      <div className="footer-links">
        {links.map((item) => (
          <Link key={item.label} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
