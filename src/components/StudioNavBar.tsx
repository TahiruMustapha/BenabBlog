import Link from "next/link";
import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

const StudioNavBar = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={"/"}
          className=" flex items-center gap-3 font-semibold hover:text-blue-700 duration-200"
        >
          <IoReturnDownBack className=" text-2xl" />
          Go to wesite
        </Link>
        <Logo
          title="BenabBlog_Studio"
          className=" text-2xl hidden md:inline-flex"
        />
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores
          eligendi, explicabo porro possimus sit culpa sapiente facere soluta
          illo.
        </p> */}
        <p className="text-sm">Studio for Blog Content</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioNavBar;
