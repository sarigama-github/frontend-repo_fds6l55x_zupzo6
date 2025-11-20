import { Camera, Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function Footer(){
  return (
    <footer className="bg-black border-t border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Camera className="text-yellow-400"/>
            <span className="text-white font-semibold">HKPhotography & Films — Since 2009</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Instagram/></a>
            <a href="https://youtube.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Youtube/></a>
            <a href="https://facebook.com" target="_blank" className="text-zinc-300 hover:text-yellow-400"><Facebook/></a>
            <a href="https://wa.me/918529069481" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-black font-semibold"><MessageCircle/> WhatsApp</a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-zinc-400">© HKPhotography & Films — Since 2009</div>
      </div>
    </footer>
  );
}
