import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          HKPhotography & Films — Since 2009
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-zinc-200">
          Capturing Emotions, Crafting Memories
        </p>
        <div className="mt-8">
          <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold shadow-lg shadow-yellow-600/20 hover:scale-[1.02] transition-transform">
            Book Your Shoot
          </a>
        </div>
      </div>
    </section>
  );
}
