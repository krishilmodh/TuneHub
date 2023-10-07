"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

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
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
   `,
        className
      )}
    >
      <div
        className="
          w-full
          mb-4
          flex
          items-center
          justify-between
      "
      >
        {/* PAGE NAVIGATION BACK AND FORWARD BUTTON */}
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
        "
        >
          <button
            onClick={() => router.back()}
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
            onClick={() => router.forward()}
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
        {/* MOBILE VIEW HOME AND SEARCH BUTTON */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
            rounded-full
            p-2
            bg-white
            flex
            item-center
            justify-center
            hover:opacity-75
            transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
            rounded-full
            p-2
            bg-white
            flex
            item-center
            justify-center
            hover:opacity-75
            transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {/* BUTTON Container*/}
        <div
          className=" 
            flex 
            justify-center 
            items-center 
            gap-x-4"
        >
          {/* Sign up and login button */}
          <>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-transparent
                text-neutral-300
                font-medium
              "
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-white
                px-6
                py-2
              "
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children }
    </div>
  );
};

export default Header;
