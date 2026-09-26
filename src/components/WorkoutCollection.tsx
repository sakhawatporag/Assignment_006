"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CardContext, type CardItem } from "@/context/Cardprovider";

const WorkoutCollection = ({ kind }: { kind: "plan" | "saved" }) => {
  const router = useRouter();
  const { cardItems, setCardItems, wishlist, setWishlist } = useContext(CardContext);
  const items = kind === "plan" ? cardItems : wishlist;
  const [completed, setCompleted] = useState<string[]>([]);

  const totalMinutes = items.reduce((total, item) => total + Number(item.duration || 0), 0) || items.length * 10;
  const totalCalories = items.reduce((total, item) => total + Number(item.calories || 0), 0) || items.length * 95;

  const remove = (item: CardItem) => {
    const setItems = kind === "plan" ? setCardItems : setWishlist;
    setItems((current) => current.filter((entry) => entry.id !== item.id));
  };

  if (kind === "plan" || kind === "saved") {
    return (
      <main className="container mx-auto flex-1 px-4 py-6 sm:px-8">
        <button
          onClick={() => window.history.length > 1 ? router.back() : router.push("/")}
          aria-label="Go back"
          className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-[#ccff00]"
        >
          <span aria-hidden="true">←</span> Back
        </button>
        <div className="border-2 border-[#159be8] bg-[#10141a] p-3 sm:p-7">
          <section className="border border-dotted border-[#159be8] px-3 py-3">
            <h1 className="text-xl font-extrabold uppercase text-white sm:text-2xl">MY PLAN</h1>
            <p className="text-xs text-gray-500">Cap of five lifts for today. Finish them, then load more...</p>
          </section>

          <section className="mt-3 grid grid-cols-3 divide-x divide-gray-800 border border-dotted border-[#159be8] px-3 py-4">
            <div><p className="text-[10px] text-gray-500">Exercises</p><p className="mt-1 text-2xl font-bold text-[#ccff00]">{items.length}</p></div>
            <div className="pl-4"><p className="text-[10px] text-gray-500">Minutes</p><p className="mt-1 text-2xl font-bold text-white">{totalMinutes}</p></div>
            <div className="pl-4"><p className="text-[10px] text-gray-500">Calories</p><p className="mt-1 text-2xl font-bold text-white">{totalCalories}</p></div>
          </section>

          <section className="mt-3 border border-dotted border-[#159be8]">
              <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2 text-[10px] text-gray-500">
              <div className="flex gap-5"><Link href="/plan" className={kind === "plan" ? "text-white" : "hover:text-white"}>Today&apos;s Plan</Link><Link href="/saved" className={kind === "saved" ? "text-white" : "hover:text-white"}>Saved</Link></div>
              <span>Sort By <button className="ml-1 border border-gray-700 px-2 py-1 text-gray-300">Duration</button></span>
            </div>
            <div className="space-y-2 p-2">
              {items.map((item) => {
                const id = String(item.id);
                const name = String(item.name || item.title || "Workout");
                const image = String(item.image || item.thumbnail || "/placeholder.png");
                const isDone = completed.includes(id);
                return (
                  <div key={id} className="flex items-center gap-3 border border-gray-800 bg-[#151a21] p-2 sm:gap-4">
                    <div className="relative h-12 w-20 shrink-0 overflow-hidden sm:h-14 sm:w-24"><Image src={image} alt={name} fill className="object-cover" /></div>
                    <Link href={`/workout/${id}`} className="min-w-0 flex-1">
                      <h2 className="truncate text-xs font-bold uppercase text-white hover:text-[#ccff00]">{name}</h2>
                      <p className="text-[10px] text-gray-500">{String(item.equipment || "Standard Equipment")}</p>
                      <p className="mt-1 text-[9px] text-gray-400">{String(item.duration || 10)} min &nbsp; {String(item.calories || 95)} kcal</p>
                    </Link>
                    <Link href={`/workout/${id}`} className="hidden rounded-full border border-gray-700 px-3 py-1.5 text-[10px] text-gray-300 hover:border-white sm:block">View Details</Link>
                    {kind === "plan" ? <button onClick={() => setCompleted((current) => isDone ? current.filter((entry) => entry !== id) : [...current, id])} className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${isDone ? "bg-gray-700 text-white" : "bg-[#ccff00] text-black hover:bg-[#b8e600]"}`}>{isDone ? "Done" : "Mark as Done"}</button> : null}
                    <button onClick={() => remove(item)} aria-label={`Remove ${name}`} className="px-1 text-gray-500 hover:text-white">x</button>
                  </div>
                );
              })}
              {items.length === 0 && <p className="p-8 text-center text-sm text-gray-500">Nothing here yet. Add workouts from the library.</p>}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return null;
};

export default WorkoutCollection;