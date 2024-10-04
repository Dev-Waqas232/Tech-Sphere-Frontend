import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <section className="flex w-full">
      <div className="md:w-[300px] w-[70px]">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
