"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => window.history.length > 1 ? router.back() : router.push("/")}
      aria-label="Go back"
      className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-[#ccff00]"
    >
      <span aria-hidden="true">←</span> Back
    </button>
  );
};

export default BackButton;