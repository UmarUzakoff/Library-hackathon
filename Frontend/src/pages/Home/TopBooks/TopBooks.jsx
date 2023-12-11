import { Typography, Carousel } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";
import { BookCard } from "./Card";
import book1 from "../../../images/book1.jpg";
import book2 from "../../../images/book2.jpg";
import book3 from "../../../images/book3.jpg";

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
            imgUrl={book1}
            rating={5}
            bookName={"Men. Bas qil, ey nafs"}
            author={"Fotih Duman"}
          />
          <BookCard
            imgUrl={book2}
            rating={5}
            bookName={"Sir. Oshiqlar o'lmas"}
            author={"Fotih Duman"}
          />
          <BookCard
            imgUrl={book3}
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
            imgUrl={book1}
            rating={5}
            bookName={"Men. Bas qil, ey nafs"}
            author={"Fotih Duman"}
          />
          <BookCard
            size={"sm"}
            imgUrl={book2}
            rating={5}
            bookName={"Sir. Oshiqlar o'lmas"}
            author={"Fotih Duman"}
          />
          <BookCard
            size={"sm"}
            imgUrl={book3}
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
