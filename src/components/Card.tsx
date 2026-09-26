import Image from 'next/image';
import Link from 'next/link';

interface CardData {
  id: number | string;
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
  return Array.isArray(data) ? data : data.cards ?? data.data ?? [];
};

const Card = async () => {
  const cardData = await getCards();

  return (
    <section className="container mx-auto px-4 py-12">
      <p className="text-5xl font-bold text-[#FFFFFF]">THE LIBRARY</p>
      <p className="text-[#9CA3AF] mt-4">Twelve lifts covering every major muscle group.</p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cardData.map((card) => (
          <Link
            key={card.id}
            href={`/workout/${card.id}`}
            className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400 transition flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-52 bg-gray-900">
              <Image
                src={card.image || card.thumbnail || '/placeholder.png'}
                alt={card.name}
                fill
                className="object-fill group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase group-hover:text-lime-400 transition">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{card.equipment || 'Standard Equipment'}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {card.muscleGroups?.map((group, idx) => (
                  <span
                    key={idx}
                    className="bg-lime-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Card;