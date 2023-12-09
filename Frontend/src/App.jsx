import { Layout } from "./components";
import { AboutPage, HomePage } from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loyiha-haqida" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;
