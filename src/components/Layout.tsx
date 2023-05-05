import React from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      <div className="px-28 py-8 md:px-16 mdx:px-8">{children}</div>
      <footer className="flex flex-r justify-center items-center py-16  ">
        @Ensa fes/2022-2023
      </footer>
    </div>
  );
};
