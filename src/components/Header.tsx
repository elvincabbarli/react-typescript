import { type ReactNode } from "react";

interface HeadersType {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header({ image, children }: HeadersType) {
  return (
    <header>
      <img className="main-img" {...image} />
      {children}
    </header>
  );
}
