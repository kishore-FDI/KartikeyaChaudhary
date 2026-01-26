export default function Home() {
  return (
    <main className="relative min-h-[300vh] bg-black text-white">
      {/* hero / contrast layer */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 via-black to-black">
        <h1 className="text-6xl font-bold tracking-tight">
          Scroll Down
        </h1>
      </section>

      {/* noisy / visual background to test glass */}
      <section className="h-screen bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_45%)]">
        <div className="h-full flex items-center justify-center">
          <p className="text-xl text-white/60">
            High-contrast background layer
          </p>
        </div>
      </section>

      {/* image-like section */}
      <section className="h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
        <div className="h-full flex items-center justify-center">
          <h2 className="text-5xl font-semibold">
            Glass Test Zone
          </h2>
        </div>
      </section>
    </main>
  )
}
