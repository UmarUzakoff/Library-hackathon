import React, { useContext } from "react";
import { ThemeApi } from "../context/themeContext";
import { Link } from "react-router-dom";

const Text = ({ text, link }) => {
  const { theme } = useContext(ThemeApi);

  return (
    <Link
      to={link}
      className="group flex items-center transition-all duration-300 ease-in-out"
      href="#">
      <span
        className={`bg-left-bottom bg-gradient-to-r ${
          theme === "dark" ? "from-blue4 to-blue4" : "from-blue2 to-blue2"
        } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}>
        {text}
      </span>
    </Link>
  );
};

export default Text;
