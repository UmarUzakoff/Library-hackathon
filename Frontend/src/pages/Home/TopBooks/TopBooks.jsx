import { Typography, Carousel } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";
import { BookCard } from "./Card";

const TopBooks = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <section
      className={`sm:py-10 py-5 md:px-0 px-3 ${
        theme === "dark" ? "bg-blue1 border-blue4" : "bg-blue4 border-blue1"
      }`}>
      <div className="container">
        <Typography
          variant="h2"
          className={`${
            theme === "dark" ? "text-blue4" : "text-blue1"
          } font-montserrat pb-5 text-xl md:text-4xl`}>
          Ommabop kitoblar
        </Typography>
        <div className="hidden lg:flex flex-row items-center justify-evenly gap-10">
          <BookCard
            imgUrl={"https://images.uzum.uz/cjq3p0cvutv2h2ta36t0/original.jpg"}
            rating={5}
            bookName={"Men. Bas qil, ey nafs"}
            author={"Fotih Duman"}
          />
          <BookCard
            imgUrl={"https://images.uzum.uz/ci226bl6sfhndlbnusd0/original.jpg"}
            rating={5}
            bookName={"Sir. Oshiqlar o'lmas"}
            author={"Fotih Duman"}
          />
          <BookCard
            imgUrl={"https://images.uzum.uz/ck5enu3k9fq8tdq5gt3g/original.jpg"}
            rating={4}
            bookName={"Lol. Har shaharning o'z egasi bor..."}
            author={"Fotih Duman"}
          />
        </div>

        <Carousel
          className="rounded-xl lg:hidden"
          transition={{ duration: 0.7 }}
          loop
          autoplay>
          <BookCard
            size={"sm"}
            imgUrl={"https://images.uzum.uz/cjq3p0cvutv2h2ta36t0/original.jpg"}
            rating={5}
            bookName={"Men. Bas qil, ey nafs"}
            author={"Fotih Duman"}
          />
          <BookCard
            size={"sm"}
            imgUrl={"https://images.uzum.uz/ci226bl6sfhndlbnusd0/original.jpg"}
            rating={5}
            bookName={"Sir. Oshiqlar o'lmas"}
            author={"Fotih Duman"}
          />
          <BookCard
            size={"sm"}
            imgUrl={"https://images.uzum.uz/ck5enu3k9fq8tdq5gt3g/original.jpg"}
            rating={4}
            bookName={"Lol. Har shaharning o'z egasi bor..."}
            author={"Fotih Duman"}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TopBooks;
