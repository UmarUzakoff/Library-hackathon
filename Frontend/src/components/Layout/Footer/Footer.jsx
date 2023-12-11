import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";
import Text from "../../../utils/Text";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-blue1 border-blue4" : "bg-blue4 border-blue1"
      } border-t-2`}>
      <div className="container flex w-full flex-col-reverse md:flex-row flex-wrap items-center justify-center gap-3 mx-auto max-w-screen-3xl py-2 lg:py-4 text-center md:justify-between">
        <Link
          to={"/"}
          className={`${
            theme === "dark" ? "text-blue4" : "text-blue1"
          } font-montserrat`}>
          &copy; 2023 Kitoblar Olami
        </Link>
        <ul
          className={`${
            theme === "dark" ? "text-blue4" : "text-blue2"
          } flex flex-col sm:flex-row items-center gap-y-2 gap-x-8`}>
          <li>
            <Text text={"Kitoblar"} />
          </li>
          <li>
            <Text text={"Mualliflar"} />
          </li>
          <li>
            <Text text={"Janrlar"} />
          </li>
          <li>
            <Text text={"Loyiha haqida"} link={"loyiha-haqida"} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
