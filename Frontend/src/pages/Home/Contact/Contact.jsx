import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeApi } from "../../../context/themeContext";
import { Button } from "@material-tailwind/react";
import Heading from "../../../utils/Heading";

const Form = () => {
  const { theme } = useContext(ThemeApi);

  ////-------------------LOADING--------------------

  const [loading, setLoading] = useState(false);

  let loadingText = loading ? "Yuborilmoqda..." : "XABARNI YUBORISH";

  const sentMessage = "XABARINGIZ YUBORIlDI!";

  ////////-----------FORM--------------------------------

  let notifySuccess = (note) => toast.success(note);
  let notifyError = (note) => toast.error(note);

  let message = (note, type) => {
    if (type === "success") {
      notifySuccess(note);
    } else {
      notifyError(note);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_x14seka",
        "template_e7eb6h2",
        form.current,
        "8Fg4UhLrfqGFQLg5G"
      )
      .then(
        (result) => {
          message(sentMessage, "success");
          setLoading(false);
        },
        (error) => {
          message(error.text, "error");
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <section
        className={` ${
          theme === "dark" ? "bg-blue1 text-blue4" : "bg-blue4 text-blue1"
        }`}>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Heading text={"Biz bilan bog'laning"} />
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Texnik muammo bormi? Ilova haqida fikr-mulohazangiz bilan
            ulashmoqchimisiz? Biznes rejamiz haqida batafsil ma'lumot kerakmi?
            Bizga xabar bering.
          </p>
          <form className="space-y-8" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium">
                Ismingiz *
              </label>
              <input
                type="text"
                id="subject"
                name="username"
                className={`${
                  theme === "dark"
                    ? "text-blue1 bg-blue4 outline-blue2"
                    : "bg-blue2 text-blue4 outline-blue3"
                } shadow-sm placeholder:text-blue3 border outline-2 border-blue2 text-sm rounded-lg focus:ring-blue2 focus:border-blue2 block w-full p-2.5`}
                placeholder="Ismingizni kiriting..."
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Sizning elektron manzilingiz *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`${
                  theme === "dark"
                    ? "text-blue1 bg-blue4 outline-blue2"
                    : "bg-blue2 text-blue4 outline-blue3"
                } shadow-sm border outline-2 placeholder:text-blue3 border-blue2 text-sm rounded-lg focus:ring-blue2 focus:border-blue2 block w-full p-2.5`}
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium">
                Xabar *
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className={`${
                  theme === "dark"
                    ? "text-blue1 bg-blue4 outline-blue2"
                    : "bg-blue2 text-blue4 outline-blue3"
                } block placeholder:text-blue3 p-2.5 w-full text-sm rounded-lg shadow-sm border border-blue2 focus:ring-blue2 focus:border-blue2`}
                placeholder="O'z fikringizni yozib qoldiring..."></textarea>
            </div>
            <Button
              onClick={message}
              type="submit"
              className="shadow-md font-montserrat py-3 px-5 text-sm font-medium text-center rounded-lg bg-blue2 w-full sm:w-fit">
              {loadingText}
            </Button>
          </form>
        </div>
      </section>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Form;
