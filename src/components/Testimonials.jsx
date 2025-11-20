import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Riya & Kunal',
    text: 'Absolutely cinematic! They captured our wedding with so much emotion and detail. The film still gives us goosebumps.',
  },
  {
    name: 'Shreya',
    text: 'Professional, punctual and so creative. My maternity shoot was dreamy and elegant. Highly recommend!',
  },
  {
    name: 'Mehul',
    text: 'They handled our corporate event flawlessly. Great team and outstanding quality.',
  },
];

export default function Testimonials(){
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Client Love</h2>
        <p className="text-center text-zinc-300 mt-2">Words that keep us inspired</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-yellow-500/20 bg-zinc-900/50 p-6"
            >
              <p className="text-zinc-200">“{t.text}”</p>
              <div className="mt-4 text-yellow-400 font-semibold">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
