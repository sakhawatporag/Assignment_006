import Image from 'next/image';
import WorkoutActions from '@/components/WorkoutActions';
import BackButton from '@/components/BackButton';

import type { CardItem } from '@/context/Cardprovider';

export interface WorkoutDetail extends CardItem {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  thumbnail?: string;
  muscleGroups?: string[];
  tags?: string[];
  equipment?: string;
  difficulty?: string;
  sets?: string | number;
  reps?: string | number;
  duration?: string | number;
  calories?: string | number;
  rating?: string | number;
  instructions?: string[];
}

// Simple fetch for a single card by ID
async function getWorkout(id: string): Promise<WorkoutDetail> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data.data || data.workout || data;
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  // Map helper array for specifications table
  const specs = [
    { label: 'EQUIPMENT', value: workout.equipment || 'Barbell, Bench' },
    { label: 'DIFFICULTY', value: workout.difficulty || 'Intermediate' },
    { label: 'SETS', value: workout.sets || '4' },
    { label: 'REPS', value: workout.reps || '6-8' },
    { label: 'DURATION', value: workout.duration ? `${workout.duration} min` : '25 min' },
    { label: 'CALORIES', value: workout.calories ? `${workout.calories} kcal` : '180 kcal' },
    { label: 'RATING', value: workout.rating || '4.8' },
  ];

  const badges = workout.tags || workout.muscleGroups || ['Chest', 'Arms'];

  return (
    <div className="min-h-screen bg-[#070b12] p-3 text-white sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-5xl">
        <BackButton />
        <div className="rounded-3xl border border-gray-800 bg-[#0d1421] p-4 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
          
          {/* Left: Workout Image */}
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gray-900 sm:h-96 md:h-130">
            <Image
              src={workout.image || workout.thumbnail || '/placeholder.png'}
              alt={workout.name || workout.title || 'Workout Image'}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Info and Specs */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
                {workout.name || workout.title || 'Barbell Bench Press'}
              </h1>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {workout.description ||
                  'A compound press that builds chest thickness, triceps, and pressing power from a stable bench.'}
              </p>

              {/* Tags mapped */}
              <div className="flex flex-wrap gap-2 mt-4">
                {badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications Box mapped */}
            <div className="divide-y divide-gray-800/70 rounded-2xl border border-gray-800/80 bg-[#121c2c] px-3 py-2 sm:px-5">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex justify-between py-2.5 text-xs sm:text-sm">
                  <span className="text-gray-400 font-medium tracking-wider">{spec.label}</span>
                  <span className="text-gray-100 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Instructions mapped */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm text-gray-400">
                {workout.instructions?.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-500">{idx + 1}.</span>
                    <span>{typeof step === 'string' ? step.replace(/^\d+\.\s*/, '') : step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />

          </div>
        </div>
        </div>
      </div>
    </div>
  );
}