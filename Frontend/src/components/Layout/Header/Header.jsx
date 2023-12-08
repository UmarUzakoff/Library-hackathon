import React, { useContext, useEffect, useState } from "react";
import {
  MobileNav,
  Button,
  IconButton,
  Input,
  Dialog,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import moon from "../../../images/moon.svg";
import sun from "../../../images/sun.svg";
import books from "../../../images/books.svg";
import authors from "../../../images/authors.svg";
import genres from "../../../images/genres.svg";
import search from "../../../images/search.svg";
import { ThemeApi } from "../../../context/themeContext";
import Form from "./Form";
import Text from "../../../utils/Text";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeApi);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => setOpen1(!open);

  const navList = (
    <ul
      className={`mt-2 mb-4  ${
        theme === "dark" ? "text-blue4" : "text-blue2"
      } flex flex-col gap-2 text-xs lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6`}>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <img src={books} alt="books" />
        <Text text={"Kitoblar"} />
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <img src={authors} alt="authors" />
        <Text text={"Mualliflar"} />
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <img src={genres} alt="genres" />
        <Text text={"Janrlar"} />
      </li>
    </ul>
  );

  return (
    <header
      className={`${
        theme === "dark" ? "bg-blue1" : "bg-blue4"
      } sticky top-0 transition-all rounded-none rounded-b-md mx-auto max-w-screen-3xl px-4 py-2 lg:px-8 lg:py-4`}>
      <div className="container mx-auto flex gap-5 flex-wrap items-center justify-between">
        <a
          href="#"
          className={`mr-4 cursor-pointer py-1.5 font-medium  ${
            theme === "dark" ? "text-blue4" : "text-blue1"
          }`}>
          Kitoblar Olami
        </a>
        <div className="hidden lg:block">{navList}</div>
        <div className="ml-10 hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Kitoblarni izlash..."
              containerProps={{
                className: "min-w-[288px]",
              }}
              className={` ${
                theme === "dark" ? "text-blue4" : "text-blue2"
              } !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
              <img src={search} alt="search" />
            </div>
          </div>
          <Button
            size="md"
            className={`rounded-lg ${
              theme === "dark" ? "bg-blue3" : "bg-blue1"
            }`}>
            <FaSearch />
          </Button>
          <div
            className={`ml-5 flex items-center gap-x-5 text-xs ${
              theme === "dark" ? "text-blue4" : "text-blue2"
            }`}>
            <button onClick={handleOpen} variant="gradient">
              <Text text={"Kirish"} />
            </button>
            <button onClick={handleOpen1} variant="gradient">
              <Text text={"Ro'yxatdan o'tish"} />
            </button>
          </div>
          <div
            className={`ml-5 rounded-full${
              theme === "dark" ? "bg-dark1 text-light1" : "bg-light1 text-dark1"
            }`}
            onClick={toggleTheme}>
            <img
              className="cursor-pointer"
              src={theme === "dark" ? moon : sun}
              alt={theme === "dark" ? "moon" : "sun"}
            />
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#9BBEC8"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="#9BBEC8"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex gap-2 justify-between flex-col sm:flex-row">
            <div className="flex flex-row gap-x-2 items-center">
              <div className="relative w-full gap-2 md:w-max">
                <Input
                  type="search"
                  placeholder="Kitoblarni izlash..."
                  containerProps={{
                    className: "min-w-[230px]",
                  }}
                  className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="!absolute left-3 top-[13px]">
                  <img src={search} alt="search" />
                </div>
              </div>
              <Button size="md" className="mt-1 rounded-lg sm:mt-0 bg-blue1">
                <FaSearch />
              </Button>
            </div>
            <div
              className={`sm:ml-5 flex items-center justify-between text-xs  ${
                theme === "dark" ? "text-blue4" : "text-blue2"
              }`}>
              <div className="flex items-center gap-x-3">
                <button onClick={handleOpen} variant="gradient">
                  <Text text={"Kirish"} />
                </button>
                <span className="text-blue3">/</span>
                <button onClick={handleOpen1} variant="gradient">
                  <Text text={"Ro'yxatdan o'tish"} />
                </button>
              </div>
              <div
                className={`ml-5 rounded-full${
                  theme === "dark"
                    ? "bg-dark1 text-light1"
                    : "bg-light1 text-dark1"
                }`}
                onClick={toggleTheme}>
                <img
                  className="cursor-pointer"
                  src={theme === "dark" ? moon : sun}
                  alt={theme === "dark" ? "moon" : "sun"}
                />
              </div>
            </div>
          </div>
        </div>
      </MobileNav>
      <Dialog
        className={`flex justify-center items-center ${
          theme === "dark" ? "bg-blue1" : "bg-blue4"
        }`}
        size={`${window.innerWidth >= 960 ? "md" : "xl"}`}
        open={open}
        handler={handleOpen}>
        <Form type={"sign in"} closer={setOpen} />
      </Dialog>
      <Dialog
        className={`flex justify-center items-center ${
          theme === "dark" ? "bg-blue1" : "bg-blue4"
        }`}
        size={`${window.innerWidth >= 960 ? "md" : "xl"}`}
        open={open1}
        handler={handleOpen1}>
        <Form closer={setOpen1} />
      </Dialog>
    </header>
  );
};

export default Header;
