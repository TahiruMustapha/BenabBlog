import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import {  FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container className=" p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="BenabBlog" className=" text-white" />
      <div className=" hidden text-gray-300 md:inline-flex items-center gap-7">
        <Link href={"https://twitter.com/tyru_mustapha"} target="_blank">
          <FaXTwitter   className=" text-2xl hover:text-red-500 duration-200"/>
        </Link>
        <Link href={'https://github.com/TahiruMustapha'} target="_blank">
        <BsGithub className=" text-2xl hover:text-orange-500 duration-200"/>
        </Link>
        <Link href={'https://www.instagram.com/mustapha_tahiru/'} target="_blank">
        <BsInstagram className=" text-2xl hover:text-pink-500 duration-200"/>
        </Link>
        <Link href={'https://www.instagram.com/mustapha_tahiru/'} target="_blank">
        <BsFacebook className=" text-2xl hover:text-[#5442ae] duration-200"/>
        </Link>
        <Link href={'https://www.linkedin.com/in/tahiru-mustapha-6a332a251/'} target="_blank">
        <BsLinkedin className=" text-2xl hover:text-blue-500 duration-200"/>
        </Link>
      </div>
      <p className=" text-sm text-gray-100">
        {" "}
        &copy; All rights reserved{" "}
        <Link
          href={"https://portfolio-next-five-eosin.vercel.app/"}
          target="_blank"
          className="text-white font-semibold duration-200"
        >
          Benab
        </Link>{" "}
      </p>
    </Container>
  );
};

export default Footer;
