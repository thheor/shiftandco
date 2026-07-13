import { Link } from "react-router";

const footerLinks = [
  {
    name: "RETURN & EXCHANGE",
    link: "/pages/policies",
  },
  {
    name: "CUSTOMER CARE",
    link: "/pages/customer-care",
  },
  {
    name: "PARTNERSHIP",
    link: "/pages/partnership",
  },
];

export function Footer() {
  return (
    <footer className="">
      <div className="w-screen pb-12 bg-black">
        <div className="relative z-10 border-b border-white/20">
          <ul className="flex items-center justify-center gap-4 py-10 mb-2">
            {footerLinks.map((el, index) => (
              <li key={index} className="">
                <Link to={el.link} className="text-white/80 hover:text-white">
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-8">
          <p className="text-center text-white text-xs font-light">
            @ 2026, SHIFTNCO
          </p>
        </div>
      </div>
    </footer>
  );
}
