// Short.tsx
import { shorts } from "@/lib/consts";
import ShortsVideoPlayer from "@/lib/VideoBoundary";
// Short.tsx
export default function Short() {
  return (
    <section
      id="shorts"
      className="min-h-screen bg-black flex justify-center py-24"
    >
      <div className="w-full max-w-5xl">
        <h1 className="text-center text-xl text-white mb-10">
          Short Form Styles
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-12 gap-6 md:gap-8 p-6">
          {shorts.map(([video, poster], i) => {
            let cls =
              "col-span-1 md:col-span-3"; // mobile: 3 per row

            if (i === 4) cls += " md:col-start-4"; // desktop center left
            if (i === 5) cls += " md:col-start-7"; // desktop center right

            return (
              <div key={i} className={cls}>
                <ShortsVideoPlayer
                  videoSrc={video}
                  posterSrc={poster}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

