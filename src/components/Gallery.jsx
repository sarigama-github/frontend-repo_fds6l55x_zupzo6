import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const albums = {
  Photos: [
    // Weddings
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519744346369-c3bbf823cb8e?q=80&w=1200&auto=format&fit=crop',
    // Pre-wedding / maternity / baby
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  ],
  Videos: [
    // Represent videos with thumbnails; clicking opens in new tab
    { thumb: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop', url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4', title: 'Cinematic Wedding Highlights' },
    { thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop', url: 'https://www.youtube.com/watch?v=XKfgdkcIUxw', title: 'Baby Shower Reel' },
    { thumb: 'https://images.unsplash.com/photo-1520975693416-35a0f4be7078?q=80&w=1200&auto=format&fit=crop', url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', title: 'Model Intro Reel' },
    { thumb: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw', title: 'Pre-wedding Film' },
  ],
};

export default function Gallery(){
  const [tab, setTab] = useState('Photos');
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Gallery</h2>
          <div className="inline-flex rounded-full border border-yellow-500/30 overflow-hidden">
            {Object.keys(albums).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`px-4 py-2 text-sm ${tab===k ? 'bg-yellow-500 text-black' : 'text-zinc-200'}`}>
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tab === 'Photos' && albums.Photos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="Gallery"
              onClick={() => setLightbox(src)}
              className="w-full h-44 object-cover rounded-lg cursor-zoom-in border border-yellow-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            />
          ))}

          {tab === 'Videos' && albums.Videos.map((v, i) => (
            <motion.a key={v.url} href={v.url} target="_blank" rel="noreferrer" className="block group" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
              <div className="relative">
                <img src={v.thumb} alt={v.title} className="w-full h-44 object-cover rounded-lg border border-yellow-500/20"/>
                <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                  <span className="px-3 py-1 rounded-full bg-yellow-500 text-black text-sm">Play</span>
                </div>
              </div>
              <div className="mt-2 text-zinc-200 text-sm">{v.title}</div>
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {lightbox && (
            <motion.div className="fixed inset-0 bg-black/80 z-[60] grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
              <motion.img src={lightbox} alt="Preview" className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg border border-yellow-500/30" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
