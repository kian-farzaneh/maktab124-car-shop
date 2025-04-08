import Footer from "@/layout/main-layout/footer";
import React, { ReactNode } from "react";

interface MainPagesLayoutProps {
  children: ReactNode;
}

const MainPagesLayout = ({ children }: MainPagesLayoutProps) => {
  return (
    <div className="main-pages-layout grid min-h-screen grid-rows-[1fr_auto] w-full overflow-hidden">
      <main className="overflow-hidden h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainPagesLayout;
