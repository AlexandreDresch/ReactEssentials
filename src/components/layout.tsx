import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center py-20 max-lg:px-4 h-full bg-black w-full">{children}</div>;
}
