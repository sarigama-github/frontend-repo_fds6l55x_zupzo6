export default function Pricing(){
  const plans = [
    {
      name: 'Basic Package',
      tagline: 'Best for Birthday / Baby Shower',
      features: ['25–40 Edited Photos', '1 Short Video', 'Budget Friendly'],
    },
    {
      name: 'Standard Wedding Package',
      tagline: 'Full Wedding Coverage',
      features: ['Candid + Traditional', 'Highlight Film 3–5 min', 'Album 12×36'],
      highlight: true,
    },
    {
      name: 'Premium Cinematic Package',
      tagline: 'Drone + Gimbal',
      features: ['Pre-Wedding + Wedding', 'Cinematic Film 8–15 min', 'Large Premium Album', 'Social media reels'],
    },
  ];

  return (
    <section id="pricing" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Packages</h2>
        <p className="text-center text-zinc-300 mt-2">Contact us for full price details</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 bg-zinc-900/60 ${p.highlight ? 'border-yellow-400' : 'border-yellow-500/20'}`}>
              <div className="text-yellow-400 font-semibold">{p.name}</div>
              <div className="text-white text-xl mt-1">{p.tagline}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-zinc-300 flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400"/>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold">Contact Us</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
