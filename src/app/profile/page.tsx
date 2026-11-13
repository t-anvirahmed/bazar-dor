"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">আপনি লগইন করেননি</h1>
        <p className="text-gray-500">আপনার প্রোফাইল দেখতে প্রথমে লগইন করুন।</p>
        <Link href="/signin" className="primary-btn">
          সাইন ইন করুন
        </Link>
      </div>
    );
  }

  const user = session.user;

  return (
    <main className="container mx-auto max-w-2xl px-4 py-12">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-800">আমার প্রোফাইল</h1>

        <div className="flex flex-col items-center gap-4 border-b border-gray-100 pb-8">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              className="h-24 w-24 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600 text-3xl font-bold text-white">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}

          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/profile/update" className="primary-btn">
            তথ্য আপডেট করুন
          </Link>
        </div>
      </div>
    </main>
  );
}
