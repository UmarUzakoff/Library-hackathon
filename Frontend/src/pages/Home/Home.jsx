import React from "react";
import Hero from "./Hero/Hero";
import TopBooks from "./TopBooks/TopBooks";
import Form from "./Contact/Contact";
import AccordionPage from "./Accordion/Accordion";

const Home = () => {
  return (
    <main>
      <Hero />
      <TopBooks />
      <AccordionPage />
      <Form />
    </main>
  );
};

export default Home;
