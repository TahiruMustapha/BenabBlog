import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];
  return (
    <div className=" w-full  bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-0 h-full flex items-center justify-between">
        <Logo title={"BenabBlog"} className=" text-black" />
        <div className="hidden md:inline-flex gap-7 text-gray-900 hover:text-black duration-200  items-center">
          {navigation.map((item) => (
            <Link
              className=" text-sm uppercase font-semibold relative group overflow-x-hidden"
              href={item?.href}
              key={item?.title}
            >
              {item?.title}
              <span className=" absolute w-full h-[2px] bg-blue-700  left-0 bottom-0 inline-block -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
