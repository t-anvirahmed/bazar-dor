"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return null;
  }

  if (!session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="secondary-btn">
          সাইন ইন
        </Link>

        <Link href="/signup" className="primary-btn">
          সাইন আপ
        </Link>
      </div>
    );
  }

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) return;

    setIsOpen(false);

    if (pathname.startsWith("/product") || pathname.startsWith("/profile")) {
      router.replace(`/signin?callbackUrl=${encodeURIComponent(pathname)}`);
    } else {
      router.refresh();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-xs transition-all duration-200 hover:shadow"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-green-700 text-base font-bold text-white shadow-xs">
          {session.user.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <div className="flex min-w-0 flex-col gap-0.5 text-left">
          <span className="text-sm font-semibold leading-tight text-gray-800">
            {session.user.name}
          </span>

          <span className="text-xs leading-tight text-gray-500">
            {session.user.email}
          </span>
        </div>

        <div className="ml-1 h-2 w-2 shrink-0 rounded-full bg-green-500 ring-4 ring-green-50" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            My Profile
          </Link>

          <button
            onClick={handleSignOut}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
