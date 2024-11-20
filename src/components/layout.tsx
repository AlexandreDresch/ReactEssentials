import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center py-20 px-10 h-full bg-black">{children}</div>;
}
