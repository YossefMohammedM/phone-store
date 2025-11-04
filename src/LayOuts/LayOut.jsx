import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const LayOut = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default LayOut;
