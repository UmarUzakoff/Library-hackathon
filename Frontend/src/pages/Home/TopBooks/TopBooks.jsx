import { Carousel, IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";
import { BookCard } from "./Card";
import book1 from "../../../images/book1.jpg";
import book2 from "../../../images/book2.jpg";
import book3 from "../../../images/book3.jpg";
import book4 from "../../../images/book4.jpg";
import book5 from "../../../images/book5.jpg";
import book6 from "../../../images/book6.jpg";
import Heading from "../../../utils/Heading";

const TopBooks = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <section
      className={`sm:py-10 py-5 md:px-0 px-3 ${
        theme === "dark" ? "bg-blue1" : "bg-blue4"
      }`}>
      <div className="container">
        <Heading text={"Ommabop kitoblar"} />
        <div className="hidden lg:flex flex-row flex-wrap items-center justify-evenly gap-10">
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
          <BookCard
            imgUrl={book4}
            rating={4}
            bookName={"Boshimning toji"}
            author={"Xadicha Kubro Tongar"}
          />
          <BookCard
            imgUrl={book5}
            rating={5}
            bookName={"Uyimiz jannatga aylansin"}
            author={"Ahmet Bulut, Ahmet Akin"}
          />
          <BookCard
            imgUrl={book6}
            rating={4}
            bookName={'"Seni sevaman" dema, sev'}
            author={"Mirach Chag'ri Oqtosh"}
          />
        </div>

        <Carousel
          className="rounded-xl lg:hidden z-40"
          transition={{ duration: 0.7 }}
          loop
          autoplay
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="blue-gray"
              size="sm"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="blue-gray"
              size="sm"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}>
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
          <BookCard
            size={"sm"}
            imgUrl={book4}
            rating={4}
            bookName={"Boshimning toji"}
            author={"Xadicha Kubro Tongar"}
          />
          <BookCard
            size={"sm"}
            imgUrl={book5}
            rating={5}
            bookName={"Uyimiz jannatga aylansin"}
            author={"Ahmet Bulut, Ahmet Akin"}
          />
          <BookCard
            size={"sm"}
            imgUrl={book6}
            rating={4}
            bookName={'"Seni sevaman" dema, sev'}
            author={"Mirach Chag'ri Oqtosh"}
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TopBooks;
