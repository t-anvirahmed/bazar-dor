import Link from "next/link";
import Logo from "../../public/logo-icon.png";
import Image from "next/image";
import banglaDate from "@/lib/utils";
import UserInfo from "./UserInfo";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className="shadow-xs">
      <div className="container mx-auto navbar py-4 ">
        {/* Brand */}
        <div className="navbar-start w-full">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              height={20}
              width={20}
              src={Logo}
              alt="বাজার দর logo"
              className="h-12 w-12 bg-green-600 p-2 rounded-xl"
            />

            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-green-800 sm:text-xl">
                বাজার দর
              </span>

              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {banglaDate}
              </p>
            </div>
          </Link>
        </div>

        {/* Actions */}
        <Suspense
          fallback={
            <div className="h-10 w-32 animate-pulse rounded-full bg-gray-100" />
          }
        >
          <div className="navbar-end w-auto shrink-0 gap-2">
            <UserInfo />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
