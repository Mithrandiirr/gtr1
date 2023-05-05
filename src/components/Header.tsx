import Link from "next/link";
import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="flex flex-row justify-center items-center py-4">
      <Link href={"/"}>
        <h1 className="text-4xl font-semibold">GTR1Wiki</h1>
      </Link>
    </header>
  );
};
