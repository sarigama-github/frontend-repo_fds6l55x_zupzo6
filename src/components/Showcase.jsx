import { motion } from 'framer-motion';
import { Camera, Baby, Heart, Users, Film, PartyPopper, Sparkles } from 'lucide-react';

const categories = [
  { title: 'Wedding Photography', icon: Heart },
  { title: 'Pre-Wedding', icon: Sparkles },
  { title: 'Baby Shower', icon: Baby },
  { title: 'Maternity', icon: Users },
  { title: 'Modelling / Portfolio', icon: Camera },
  { title: 'Birthday & Events', icon: PartyPopper },
  { title: 'Studio Photos & Videos', icon: Film },
];

export default function Showcase() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">Our Expertise</h2>
        <p className="mt-2 text-zinc-300 text-center">Premium categories we love to shoot</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ title, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-yellow-500/20 bg-zinc-900/60 p-6 hover:border-yellow-400/40 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
