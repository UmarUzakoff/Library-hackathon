import React, { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";

const Text = ({ text }) => {
  const { theme } = useContext(ThemeApi);

  return (
    <a
      class="group flex items-center transition-all duration-300 ease-in-out"
      href="#">
      <span
        class={`bg-left-bottom bg-gradient-to-r ${
          theme === "dark" ? "from-blue4 to-blue4" : "from-blue2 to-blue2"
        } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}>
        {text}
      </span>
    </a>
  );
};

export default Text;
