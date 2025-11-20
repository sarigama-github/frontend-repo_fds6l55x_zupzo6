export default function Stats(){
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '1200+', label: 'Projects' },
    { value: '1000+', label: 'Happy Clients' },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl border border-yellow-500/20 bg-zinc-900/50 p-8">
              <div className="text-4xl font-extrabold text-yellow-400">{s.value}</div>
              <div className="mt-2 text-zinc-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
