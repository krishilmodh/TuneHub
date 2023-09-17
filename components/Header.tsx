"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    //handle logout in future
  };

  return (
    <div
      className={twMerge(`
  h-fit
  bg-gradient-to-b
  from-emerald-800
  p-6
   `)}
    >
      <div
        className="
        hidden
        md:flex
        gap-x-2
        items-center
        "
      >
        <button
          className="
          rounded-full
          bg-black
          flex
          item-center
          hover:opacity-75
          transition
        "
        >
          <RxCaretLeft size={35} />
        </button>
        <button
          className="
          rounded-full
          bg-black
          flex
          item-center
          hover:opacity-75
          transition
        "
        >
          <RxCaretRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default Header;
