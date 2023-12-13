import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { ThemeApi } from "../context/themeContext";

const Heading = ({ text, type }) => {
  const { theme } = useContext(ThemeApi);

  return (
    <Typography
      variant="h2"
      className={`${
        theme === "dark" ? "text-blue4" : "text-blue1"
      } font-montserrat text-center pb-5 text-2xl md:text-4xl`}>
      {text}
    </Typography>
  );
};
export default Heading;
