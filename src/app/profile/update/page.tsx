"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const displayName = name ?? session?.user?.name ?? "";

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-bold text-gray-800">আপনি লগইন করেননি</h1>
        <Link href="/signin" className="primary-btn">
          সাইন ইন করুন
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedName = displayName.trim();

    if (!updatedName) {
      toast.error("নাম লিখুন!");
      return;
    }

    setIsUpdating(true);

    try {
      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        toast.error("আপডেট ব্যর্থ!");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে! 🎉");
      router.push("/profile");
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <main className="container mx-auto max-w-2xl px-4 py-12">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          প্রোফাইল আপডেট
        </h1>

        <p className="mb-8 text-sm text-gray-500">আপনার নাম পরিবর্তন করুন।</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              আপনার নাম
            </label>

            <input
              id="name"
              type="text"
              value={displayName}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম লিখুন"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <Link href="/profile" className="secondary-btn">
              বাতিল
            </Link>

            <button
              type="submit"
              disabled={isUpdating || !displayName.trim()}
              className="primary-btn disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট করুন"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
