import React, { useContext } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ThemeApi } from "../../../context/themeContext";
import Heading from "../../../utils/Heading";

const Icon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const AccordionPage = () => {
  const { theme } = useContext(ThemeApi);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section
      className={`py-10 px-5 ${theme === "dark" ? "bg-blue1" : "bg-blue4"}`}>
      <div className="container max-w-3xl">
        <Heading text={"Yordam"} />
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className={`font-montserrat ${
              theme === "dark"
                ? "text-blue4 hover:text-blue3"
                : "text-blue1 hover:text-blue2"
            }`}
            onClick={() => handleOpen(1)}>
            Kitobni ocha olmayapman
          </AccordionHeader>
          <AccordionBody
            className={`font-montserrat ${
              theme === "dark" ? "text-blue4" : "text-blue1"
            }`}>
            Ehtimol, kitobni ochishga harakat qilgan paytda xatolik yuz berdi.
            Bunday holatda, birinchi navbatda, internetga ulanishni tekshiring.
            Agar internetga ulangan bo'lsangiz, "Biz bilan bog'laning" bo'limi
            orqali bizga murojaat qiling
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className={`font-montserrat ${
              theme === "dark"
                ? "text-blue4 hover:text-blue3"
                : "text-blue1 hover:text-blue2"
            }`}
            onClick={() => handleOpen(2)}>
            Barcha kitoblar bepulmi?
          </AccordionHeader>
          <AccordionBody
            className={`font-montserrat ${
              theme === "dark" ? "text-blue4" : "text-blue1"
            }`}>
            Kutubxonamizdagi barcha kitoblar bepul.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className={`font-montserrat ${
              theme === "dark"
                ? "text-blue4 hover:text-blue3"
                : "text-blue1 hover:text-blue2"
            }`}
            onClick={() => handleOpen(3)}>
            Barcha kitoblarning audio versiyasi mavjudmi?
          </AccordionHeader>
          <AccordionBody
            className={`font-montserrat ${
              theme === "dark" ? "text-blue4" : "text-blue1"
            }`}>
            Hamma kitoblarda ham mavjud emas. Afsuski, audiokitoblarni yaratish
            elektron kitoblarni yaratishga qaraganda ko'proq vaqt va kuch talab
            qiladi. Shuning uchun audiokitoblar katalogi kamroq. Lekin biz har
            oyda yangi kitoblarni qo'shishni davom ettirmoqdamiz.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
};

export default AccordionPage;
