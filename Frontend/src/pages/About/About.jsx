import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";

const About = () => {
  const { theme } = useContext(ThemeApi);
  return (
    <section
      className={`${
        theme === "dark" ? "bg-blue1 text-blue4" : "bg-blue4 text-blue2"
      } mx-auto max-w-screen-3xl py-8 lg:py-12`}>
      <div className="container text-md sm:text-2xl px-3">
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${
            theme === "dark" ? "text-blue4" : "text-blue1"
          }`}>
          Kitoblar Olami loyihasi haqida
        </h1>
        <br />
        <div>
          <strong>“Kitoblar Olami”</strong>– O‘zbekistonda kitob o‘qishni yaxshi
          ko‘radiganlar uchun maxsus veb-sayt. Bu katta kutubxonaga o'xshaydi,
          unda siz nashr etilgan barcha yangi kitoblar haqida bilib olishingiz,
          boshqa odamlarning sharhlarini o'qishingiz va hatto o'z fikrlaringiz
          bilan o'rtoqlashishingiz mumkin. Ular haqiqatan ham katta kitoblar
          to'plamiga ega, shuning uchun siz xohlagan kitob haqida ma'lumot
          topishingiz mumkin. Ammo bu nafaqat kitob o'qish va ular haqida
          suhbatlashish, balki o'qishni yaxshi ko'radigan boshqa odamlar bilan
          suhbatlashish uchun joy hamdir. Siz sharhlar haqida gapirishingiz,
          ularga baho berishingiz va fikringizni baham ko'rishingiz mumkin.
          Ushbu loyiha kitoblar haqiqatan ham muhim va bizni xursand qilishi va
          inson sifatida o'sishimizga yordam berishi mumkinligi sababli
          boshlandi. Ammo ijtimoiy tarmoqlar va onlayn kitoblar kabi dunyodagi
          barcha texnologiyalar bilan o'qish o'zgarmoqda.
        </div>
        <br />
        <div>
          <strong>“Kitoblar Olami”</strong>
          bolalar va yoshlar o‘rtasida kitobxonlikni targ‘ib qilish maqsadida
          yaratilgan. Agar siz o'qishni yaxshi ko'rsangiz, albatta bizga
          qo'shilishingiz kerak!
        </div>
        <br />
        <div>
          Mutolaani sevasizmi? Unda bizga qo'shiling.{" "}
          <strong>“Kitoblar Olami”</strong> - bu kitobxonlar uchun maydon.
          Ro'yxatdan o'tgan har bir foydalanuvchi o'z kutubxonasiga ega bo'ladi.
          Bu orqali u hozirda o'qiyotgan, o'qib bo'lgan va o'qimoqchi bo'lgan
          kitoblarni belgilab qo'yishi va kitobxonlarni shu orqali kitobxonlikga
          targ'ib ham qilishi mumkin.
        </div>
      </div>
    </section>
  );
};

export default About;
