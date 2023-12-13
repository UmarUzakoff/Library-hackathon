import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[url(https://cdn.gencraft.com/prod/user/e1572b3c-1a7b-46e1-8161-eb8bb2a3aca3/9eae00cc-b024-4296-921c-7111a2f2c6eb/image/image1_0.jpg?Expires=1709908075&Signature=FG38ZB~df7EdiV6tSf-xhoxqXWp2E7it3ThL8UO8bYp~ppa2oZoYERHkLt5ptjgqKWMT7m~VlQja78ny6h185etHfvdbD9fpnPM7H6UVgpkvW78Ze62QJiJKQPYhXcb97MleUyb1dlfoAynR7BEhsGNeZ3CmsEQsj6-lMxY1dTOeAcF03nPNakTbeddnlRZt1ixDB2YYM-RgAntItw6qO0FsnnNvlNa2hnGMx31a59N6by2tNPwMl0qygubwV9aCU3Q6hq-omXeA5bev6rxLQV2ULvHlKqWKRuKUJznKqpl6G3KbZmTFetHP5QVr5557-Z0i4mBETMrieaUQzC4kJw__&Key-Pair-Id=K3RDDB1TZ8BHT8)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/60 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "></div>

      <div className="relative container mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className={`text-3xl font-extrabold sm:text-5xl text-blue1 `}>
            Millionlab Kitobxonlar
            <strong className="block font-extrabold text-rose-700">
              {" "}
              Bir Joyda.{" "}
            </strong>
          </h1>

          <p className={`mt-4 max-w-lg sm:text-xl/relaxed text-blue1 `}>
            "Kitoblar Olami" kitob ixlosmandlarini bir-birlari bilan bog'laydi
          </p>

          <div className="mt-8 flex justify-center sm:justify-start items-center flex-wrap gap-4 text-center">
            <Link to={"loyiha-haqida"}>
              <Button className="bg-blue1 text-blue4 font-montserrat">
                Loyiha Haqida
              </Button>
            </Link>
            <Button className="bg-blue4 text-blue1 font-montserrat">
              Kitoblar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
