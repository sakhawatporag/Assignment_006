"use client";

import { useContext, useEffect, useState } from "react";
import type { WorkoutDetail } from "@/app/workout/[id]/page";
import { CardContext } from "@/context/Cardprovider";

const WorkoutActions = ({ workout }: { workout: WorkoutDetail }) => {
  const { cardItems, setCardItems, wishlist, setWishlist } = useContext(CardContext);
  const [notification, setNotification] = useState<string | null>(null);
  const isInPlan = cardItems.some((item) => item.id === workout.id);
  const isSaved = wishlist.some((item) => item.id === workout.id);

  useEffect(() => {
    if (!notification) return;
    const timer = window.setTimeout(() => setNotification(null), 2500);
    return () => window.clearTimeout(timer);
  }, [notification]);

  const toggleItem = (
    items: typeof cardItems,
    setItems: typeof setCardItems,
    active: boolean,
    activeMessage: string,
    inactiveMessage: string,
  ) => {
    setItems(active ? items.filter((item) => item.id !== workout.id) : [...items, workout]);
    setNotification(active ? activeMessage : inactiveMessage);
  };

  return (
    <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
      <button
        onClick={() => toggleItem(cardItems, setCardItems, isInPlan, "Removed from your plan", "Added to your plan")}
        className="flex-1 flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition"
      >
        <span>📅</span> {isInPlan ? "Remove from plan" : "Add to today's plan"}
      </button>
      <button
        onClick={() => toggleItem(wishlist, setWishlist, isSaved, "Removed from saved workouts", "Saved for later")}
        className="flex-1 flex items-center justify-center gap-2 bg-[#121c2c] hover:bg-gray-800 border border-gray-700 text-white font-medium py-3 px-4 rounded-xl text-xs sm:text-sm transition"
      >
        <span>🔖</span> {isSaved ? "Remove saved" : "Save for later"}
      </button>
      {notification && (
        <div role="status" className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-[#ccff00] bg-[#11151d] px-5 py-3 text-sm font-semibold text-white shadow-lg">
          {notification}
        </div>
      )}
    </div>
  );
};

export default WorkoutActions;