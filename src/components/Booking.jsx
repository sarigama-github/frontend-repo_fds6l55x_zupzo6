import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Booking(){
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      full_name: form.get('full_name'),
      contact_number: form.get('contact_number'),
      email: form.get('email') || null,
      event_type: form.get('event_type'),
      event_date: form.get('event_date') || null,
      location: form.get('location') || null,
      budget_range: form.get('budget_range') || null,
      notes: form.get('notes') || null,
      requirements: form.get('requirements') || null,
    };

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if(!res.ok) throw new Error('Failed');
      await res.json();
      setSuccess('Your booking request has been submitted.');
      e.currentTarget.reset();
    } catch(err){
      setSuccess('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="booking" className="bg-black py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center">Booking Form</h2>
        <p className="text-center text-zinc-300 mt-2">We’ll get back to you shortly</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="full_name" required placeholder="Full Name" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <input name="contact_number" required placeholder="Contact Number" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <input name="email" type="email" placeholder="Email" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <select name="event_type" required className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white">
            <option value="">Event Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Baby Shower</option>
            <option>Model Shoot</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
          <input name="event_date" type="date" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <input name="location" placeholder="Location" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <input name="budget_range" placeholder="Budget Range" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <input name="requirements" placeholder="Photo/Video Requirements" className="bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400"/>
          <textarea name="notes" placeholder="Additional Notes" className="md:col-span-2 bg-zinc-900/60 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-400" rows={4}/>

          <div className="md:col-span-2 flex items-center justify-between gap-4">
            {success && <div className="text-sm text-yellow-300">{success}</div>}
            <button disabled={loading} className="ml-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold shadow-lg disabled:opacity-60">
              {loading ? 'Submitting...' : 'Submit Booking'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
