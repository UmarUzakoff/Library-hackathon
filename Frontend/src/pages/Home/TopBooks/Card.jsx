import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";

export const BookCard = ({ imgUrl, rating, bookName, author, size }) => {
  const { theme } = useContext(ThemeApi);

  return (
    <Card
      className={`sm:w-96 w-80 ${size === "sm" ? "mx-auto" : ""} ${
        theme === "dark" ? "bg-blue4" : "bg-blue2"
      }`}>
      <CardHeader shadow={false} floated={false} className="md:h-80 h-64">
        <img
          src={imgUrl}
          alt="book"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Rating
          value={rating}
          unratedColor={`${theme === "dark" ? "" : "amber"}`}
        />
        <Typography
          className={`mb-2 font-montserrat ${
            theme === "dark" ? "text-blue1" : "text-blue4"
          }`}>
          {bookName}
        </Typography>
        <Typography
          variant="small"
          className={`opacity-75 font-montserrat ${
            theme === "dark" ? "text-blue1" : "text-blue4"
          }`}>
          {author}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={true}
          fullWidth={true}
          className={`${size === "sm" ? "mb-5" : ""} ${
            theme === "dark" ? "bg-blue2 text-blue4" : "bg-blue4 text-blue2"
          } font-montserrat shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100`}>
          Qo'shish
        </Button>
      </CardFooter>
    </Card>
  );
};
