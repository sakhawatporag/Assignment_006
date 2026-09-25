import React from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  image?: string;
  thumbnail?: string;
  name: string;
  muscleGroups?: string[];
  category?: string;
  equipment?: string;
  duration?: string;
  calories?: string;
  rating?: number;
}

const getCards = async (): Promise<CardData[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Card = async () => {
  const cardData = await getCards();
  console.log(cardData, "card data");

  return (
    <section className="container mx-auto">
      <p className="mt-20 text-5xl font-bold text-[#FFFFFF]">THE LIBRARY</p>
      <p className="text-[#9CA3AF] mt-2">Twelve lifts covering every major muscle group.</p>







      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cardData.map((card: CardData, ind: number) => {
          return (
            <div 
              key={card.id || ind} 
              className="bg-[#181a20] rounded-2xl overflow-hidden border border-[#262930] flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40 hover:border-[#383d47]"
            >
              {/* Card Image */}
  <div className="w-full h-52 overflow-hidden">
                <Image 
                  src={card.image || card.thumbnail || "/placeholder.jpg"}
                  width={800}
                  height={800}
                  alt={card.name} 
                  className="w-full h-full object-fill"
                />
              </div>
              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3">
                {/* Tags from muscleGroups array */}
                <div className="flex flex-wrap gap-2">
                  {card.muscleGroups && Array.isArray(card.muscleGroups) ? (
                    card.muscleGroups.map((group: string, i: number) => (
                      <span 
                        key={i} 
                        className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {group}
                      </span>
                    ))
                  ) : (
                    <span className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {card.category || "Full Body"}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-white text-xl font-extrabold uppercase tracking-wide">
                    {card.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {card.equipment}
                  </p>
                </div>

                <hr className="border-t border-[#262930] my-1" />

                {/* Footer Stats */}
                <div className="flex items-center gap-5 text-gray-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span>⏱</span>
                    <span>{card.duration || `${(card.id % 4 + 2) * 5} min`}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🔥</span>
                    <span>{card.calories || `${120 + (card.id * 15)} kcal`}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-400">★</span>
                    <span>{card.rating || (4.5 + ((card.id % 5) * 0.1)).toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;