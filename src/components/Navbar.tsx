import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import {
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShoppingBag,
} from "lucide-react";
// import { outsideClick } from "@/lib/utils";

interface Links {
  title: string;
  href: string;
  description?: string;
}

const womanLinks: Links[] = [
  {
    title: "SPRING 2026",
    href: "/woman/spring-2026",
  },
  {
    title: "T-Shirts & Blouse",
    href: "/woman/t-shirts",
  },
  {
    title: "Sweaters",
    href: "/woman/sweaters",
  },
  {
    title: "Outerwears",
    href: "/woman/outerwear",
  },
  {
    title: "Jeans",
    href: "/woman/jeans",
  },
  {
    title: "All Collection",
    href: "/woman",
  },
];

const manLinks: Links[] = [
  {
    title: "SPRING 2026",
    href: "/man/spring-2026",
  },
  {
    title: "Core",
    href: "/man/core",
  },
  {
    title: "Tops",
    href: "/man/tops",
  },
  {
    title: "Knits",
    href: "/man/knits",
  },
  {
    title: "All Collection",
    href: "/man",
  },
];

export function Navbar() {
  const [isWomanLink, setIsWomanLink] = useState(false);
  const [isManLink, setIsManLink] = useState(false);
  const navbarRef = useRef(null);
  // const navbarOutsideClick = outsideClick(navbarRef);

  useEffect(() => {
    function handleCLickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        if (isWomanLink) {
          setIsWomanLink(false);
        }
        if (isManLink) {
          setIsManLink(false);
        }
      }
    }

    document.addEventListener("mousedown", handleCLickOutside);
    return () => document.removeEventListener("mousedown", handleCLickOutside);
  }, []);

  const hanldeWomanLink = () => {
    if (isManLink) {
      setIsManLink(false);
      setTimeout(() => setIsWomanLink(!isWomanLink), 100);

      return;
    }
    setIsWomanLink(!isWomanLink);
  };

  const hanldeManLink = () => {
    if (isWomanLink) {
      setIsWomanLink(false);
      setTimeout(() => setIsManLink(!isManLink), 100);

      return;
    }
    setIsManLink(!isManLink);
  };

  return (
    <nav className="relative w-screen border-b border-black/10 z-50">
      <div className="grid grid-cols-3 place-items-center px-42 w-full h-16 bg-white relative z-20">
        <ul className="flex gap-4 justify-self-start w-60 lg:w-100">
          <li
            onClick={hanldeWomanLink}
            className="flex items-center text-foreground/80 text-sm cursor-pointer"
          >
            WOMAN{" "}
            <span className="">
              {isWomanLink ? (
                <ChevronUp className="w-4 h-4 " />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </li>
          <li
            onClick={hanldeManLink}
            className="flex items-center text-foreground/80 text-sm cursor-pointer"
          >
            MAN
            <span className="">
              {isManLink ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </li>
          <li>
            <Link
              to="/loyalty-progam"
              className="flex items-center text-foreground/80 text-sm"
            >
              LOYALITY PROGRAM
            </Link>
          </li>
        </ul>
        <Link to="/">
          <Logo className="m-auto" />
        </Link>
        <ul className="flex gap-4 justify-self-end ">
          <li className="m-auto">
            <Search className="w-5 h-5 text-foreground/70" />
          </li>
          <li className="m-auto">
            <User className="w-5 h-5 text-foreground/70" />
          </li>
          <li className="m-auto">
            <ShoppingBag className="w-5 h-5 text-foreground/70" />
          </li>
        </ul>
      </div>
      <ul
        ref={navbarRef}
        className={`${isWomanLink ? "translate-y-0 shadow-sm" : " -translate-y-full pointer-events-none"} transition duration-200 ease-in-out absolute flex flex-col gap-1 w-full px-42 py-6 border-t border-black/20 bg-white z-1`}
      >
        {womanLinks.map((el, index) => (
          <li key={index}>
            <Link
              to={el.href}
              className="text-sm font-light text-black/80 hover:text-black hover:underline"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul
        ref={navbarRef}
        className={`${isManLink ? "translate-y-0 shadow-sm" : " -translate-y-full pointer-events-none"} transition duration-200 ease-in-out absolute flex flex-col gap-1 w-full px-42 py-6 border-t border-black/20 bg-white z-1`}
      >
        {manLinks.map((el, index) => (
          <li key={index}>
            <Link
              to={el.href}
              className="text-sm font-light text-black/80 hover:text-black hover:underline"
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
