import React from "react";
import { Hero } from "./Hero/Hero";
import TopBooks from "./TopBooks/TopBooks";
import Form from "./Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <TopBooks />
      <Form />
    </main>
  );
};

export default Home;
