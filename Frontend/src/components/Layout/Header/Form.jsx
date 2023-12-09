import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeApi } from "../../../context/themeContext";

const Form = ({ type, closer }) => {
  const { theme } = useContext(ThemeApi);

  return (
    <Card
      color="transparent"
      shadow={false}
      className={`${
        theme === "dark" ? "bg-blue1" : "bg-blue4"
      } flex justify-center items-center py-7 rounded-md`}>
      <button
        onClick={() => closer(false)}
        className="absolute top-3 right-3 text-blue3">
        <span>X</span>
      </button>
      <Typography
        variant="h4"
        color="blue-gray"
        className={`font-roboto mt-2 ${
          theme === "dark" ? "text-blue4" : "text-blue1"
        }`}>
        {type === "sign in" ? "Shaxsiy kabinetga kirish" : "Ro'yxatdan o'tish"}
      </Typography>
      <Typography
        color="gray"
        className={`mt-1 font-roboto text-center  ${
          theme === "dark" ? "text-blue3" : "text-blue2"
        }`}>
        {type === "sign in"
          ? "Tizimga kirish uchun ma'lumotlarni kiriting."
          : "Ro'yxatdan o'tish uchun ma'lumotlarni kiriting."}
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <div
            className={`${
              type === "sign in" ? "hidden" : ""
            } flex flex-col gap-5`}>
            <Typography
              variant="h6"
              color="blue-gray"
              className={`-mb-3 ${
                theme === "dark" ? "text-blue4" : "text-blue2"
              }`}>
              Ism *
            </Typography>
            <Input
              size="lg"
              placeholder="Ismingizni kiriting..."
              className={`!border-t-blue-gray-200 ${
                theme === "dark"
                  ? "placeholder:text-blue2 text-blue3 focus:!border-blue3"
                  : "placeholder:text-blue3 text-blue2 focus:!border-blue2"
              }`}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Typography
            variant="h6"
            color="blue-gray"
            className={`-mb-3  ${
              theme === "dark" ? "text-blue4" : "text-blue2"
            }`}>
            Email *
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className={`!border-t-blue-gray-200 ${
              theme === "dark"
                ? "placeholder:text-blue2 text-blue3 focus:!border-blue3"
                : "placeholder:text-blue3 text-blue2 focus:!border-blue2"
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className={`-mb-3 ${
              theme === "dark" ? "text-blue4" : "text-blue2"
            }`}>
            Parol *
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className={`!border-t-blue-gray-200 ${
              theme === "dark"
                ? "placeholder:text-blue2 text-blue3 focus:!border-blue3"
                : "placeholder:text-blue3 text-blue2 focus:!border-blue2"
            }`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button
          className={`mt-6 ${
            theme === "dark" ? "bg-blue3 text-blue1" : "bg-blue1 text-blue3"
          }`}
          fullWidth>
          {type === "sign in" ? "kirish" : "Ro'yxatdan o'tish"}
        </Button>
      </form>
    </Card>
  );
};

export default Form;
