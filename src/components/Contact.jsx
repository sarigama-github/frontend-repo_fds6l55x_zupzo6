import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function Contact(){
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900/60 p-6">
              <div className="flex items-start gap-3 text-zinc-200"><Mail className="text-yellow-400"/> Hkphotography177@gmail.com</div>
              <div className="flex items-start gap-3 text-zinc-200 mt-2"><Phone className="text-yellow-400"/> +91 85290 69481 • +91 91163 26338</div>
              <div className="flex items-start gap-3 text-zinc-200 mt-2"><MapPin className="text-yellow-400"/> RAJ BAZAAR, Behind SBI Bank, Near Gopi Hotel, Krishna Nagar, Sagwara, Rajasthan 314025</div>

              <div className="flex items-center gap-4 mt-4">
                <a aria-label="Instagram" href="https://instagram.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Instagram/></a>
                <a aria-label="YouTube" href="https://youtube.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Youtube/></a>
                <a aria-label="Facebook" href="https://facebook.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Facebook/></a>
              </div>

              <a href="https://wa.me/918529069481" target="_blank" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-black font-semibold"><MessageCircle/> WhatsApp Chat</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-yellow-500/20">
            <iframe title="Map" src="https://www.google.com/maps?q=Krishna%20Nagar%20Sagwara%20Rajasthan&output=embed" className="w-full h-[350px]" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
