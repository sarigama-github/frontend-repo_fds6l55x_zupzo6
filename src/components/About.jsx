import { motion } from 'framer-motion';

const owners = [
  {
    name: 'Tanish Falot',
    role: 'Founder / Senior Photographer',
    img: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Chayan Falot',
    role: 'Co-Founder / Cinematographer & Editor',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
];

const interiors = [
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518441902110-31f94f0b0dcf?q=80&w=1200&auto=format&fit=crop',
];

export default function About(){
  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">About Us</h2>
        <p className="text-center text-zinc-300 mt-2">HKPhotography & Films — Premium studio based in Sagwara, Rajasthan</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {owners.map((o, i) => (
            <motion.div key={o.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-2xl overflow-hidden border border-yellow-500/20 bg-zinc-900/50">
              <img src={o.img} alt={o.name} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{o.name}</h3>
                <p className="text-zinc-300">{o.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {interiors.map((src, i) => (
            <motion.img key={src} src={src} alt="Studio interior" className="w-full h-56 object-cover rounded-xl border border-yellow-500/20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}/>
          ))}
        </div>

        <div className="mt-10 text-zinc-200 max-w-3xl mx-auto text-center leading-relaxed">
          <p>
            Established in 2009, HKPhotography & Films is a professional photography and cinematography studio based in Sagwara, Rajasthan. Specialized in Wedding shoots, Baby shoots, Pre-weddings, Fashion portfolios, Drone cinematics & high-end video editing.
          </p>
        </div>
      </div>
    </section>
  )
}
