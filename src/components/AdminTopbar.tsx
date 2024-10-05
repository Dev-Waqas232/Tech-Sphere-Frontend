import { ReactNode } from "react";

type AdminTopbarProps = {
  title: string;
  children?: ReactNode;
};

export default function AdminTopbar({ children, title }: AdminTopbarProps) {
  return (
    <div className="flex py-6 bg-primary shadow-sm w-full justify-between px-5 items-center">
      <div>
        <p className="font-secondary text-2xl font-semibold">{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
