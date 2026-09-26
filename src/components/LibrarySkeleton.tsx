const LibrarySkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-12" aria-label="Loading workout library">
      <div className="h-10 w-64 animate-pulse rounded bg-gray-800 sm:h-12 sm:w-96" />
      <div className="mt-4 h-5 w-72 max-w-full animate-pulse rounded bg-gray-800" />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="animate-pulse overflow-hidden rounded-2xl border border-gray-800 bg-[#111827]">
            <div className="h-48 bg-gray-800 sm:h-52" />
            <div className="space-y-4 p-4 sm:p-6">
              <div className="h-6 w-3/4 rounded bg-gray-800" />
              <div className="h-4 w-1/2 rounded bg-gray-800" />
              <div className="flex gap-2">
                <div className="h-5 w-16 rounded-full bg-gray-800" />
                <div className="h-5 w-20 rounded-full bg-gray-800" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibrarySkeleton;
