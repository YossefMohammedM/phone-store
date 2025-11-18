import React from "react";
import SidebarContent from "./SidebarContent";

const SidebarSmallScreen = () => {
  return (
    <>
      <main className="d-block d-lg-none">
        <section className="">
          <SidebarContent />
        </section>
      </main>
    </>
  );
};

export default SidebarSmallScreen;
