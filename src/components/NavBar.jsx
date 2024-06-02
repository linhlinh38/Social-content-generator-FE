import { sidebarLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <section className="sticky  top-0  left-0 right-0 flex  w-screen   justify-between border-r border-gray-200 bg-[#EFEFEF] p-4 text-white">
      <nav className="flex items-center justify-between gap-4">
        <Link href="/" className=" cursor-pointer flex items-center gap-2">
          <h1 className="sidebar-logo">Social Content Generator</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = location.pathname === item.route | location.pathname.startsWith('/services')

          return (
            <Link
              to={item.route}
              key={item.label}
              className={`sidebar-link ${isActive && "bg-[#DEDEDE]"} ${
                (location.pathname.startsWith(`/inspire`) ||
                  location.pathname.startsWith(`/scratch`)) &&
                item.label == "Services" &&
                "bg-[#DEDEDE]"
              }`}
            >
              <div className="relative size-6">
                <img src={item.imgURL} alt={item.label} />
              </div>
              <p className={`sidebar-label  ${isActive && "text-white"})`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default NavBar;
