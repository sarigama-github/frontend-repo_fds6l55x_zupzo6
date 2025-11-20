import { useEffect, useState } from 'react';

export default function Preloader(){
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black">
      <div className="animate-pulse text-yellow-400 text-xl tracking-wide">HKPhotography & Films</div>
    </div>
  );
}
