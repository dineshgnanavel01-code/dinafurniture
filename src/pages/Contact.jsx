import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call our studio',
    value: '+91 80 4567 8900',
    detail: 'Mon–Sat, 9:00 am – 6:00 pm',
    href: 'tel:+918045678900',
  },
  {
    icon: Mail,
    label: 'Write to us',
    value: 'hello@furnics.in',
    detail: 'We reply within one business day',
    href: 'mailto:hello@furnics.in',
  },
  {
    icon: MapPin,
    label: 'Visit the studio',
    value: 'Indiranagar, Bengaluru',
    detail: 'By appointment, Tue–Sun',
    href: 'https://maps.google.com/?q=Indiranagar+Bengaluru',
  },
];

const initialForm = { name: '', email: '', phone: '', subject: 'I have a question', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden" style={{ fontFamily: 'var(--font-primary)' }}>
      <section className="relative border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[36px] border-amber-500/10" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <Link to="/" className="mb-12 inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                <Sparkles className="h-4 w-4" />
                Let’s make room for good things
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-stone-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-secondary)' }}>
                A thoughtful answer is <span className="text-amber-600 dark:text-amber-400">just a note away.</span>
              </h1>
            </div>
            <p className="max-w-md text-base leading-8 text-stone-600 dark:text-stone-300 lg:pb-1 lg:text-lg">
              Whether you are choosing a new centrepiece or planning an entire room, our team is here to help you find furniture that feels like home.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {contactDetails.map(({ icon: Icon, label, value, detail, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-600/50">
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-stone-900 transition group-hover:bg-amber-600 group-hover:text-white dark:bg-stone-800 dark:text-amber-400 dark:group-hover:bg-amber-500 dark:group-hover:text-stone-950">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">{label}</p>
              <p className="text-lg font-semibold text-stone-900 dark:text-white">{value}</p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{detail}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900/60 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[270px] overflow-hidden bg-stone-900 p-8 text-white sm:p-10">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(135deg, transparent 0 48%, rgba(245,158,11,.24) 49% 50%, transparent 51%), linear-gradient(45deg, transparent 0 48%, rgba(255,255,255,.08) 49% 50%, transparent 51%)', backgroundSize: '70px 70px' }} />
            <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-amber-400/30" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-stone-950"><MapPin className="h-5 w-5" /></span>
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-secondary)' }}>Come say hello.</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-stone-300">Our Bengaluru studio is a calm corner to experience the collection in person.</p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300"><Clock3 className="h-4 w-4" /> Open by appointment</div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex h-full min-h-[360px] flex-col items-start justify-center">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"><Check className="h-7 w-7" /></span>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Message received</p>
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>We’ll be in touch soon.</h2>
                <p className="mt-4 max-w-md leading-7 text-stone-600 dark:text-stone-300">Thank you for reaching out. A member of our studio team will get back to you within one business day.</p>
                <button type="button" onClick={() => { setSubmitted(false); setForm(initialForm); }} className="mt-8 text-sm font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-500 dark:text-amber-400">Send another message</button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-start justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Start a conversation</p><h2 className="text-3xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>How can we help?</h2></div><MessageCircle className="hidden h-7 w-7 text-stone-300 sm:block dark:text-stone-700" /></div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Your name<input required name="name" value={form.name} onChange={handleChange} placeholder="Ananya Sharma" className="contact-input" /></label><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Email address<input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="contact-input" /></label></div>
                  <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Phone number <span className="font-normal text-stone-400">(optional)</span><input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="contact-input" /></label><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">What can we help with?<select name="subject" value={form.subject} onChange={handleChange} className="contact-input"><option>I have a question</option><option>Product guidance</option><option>Order support</option><option>Studio visit</option><option>Trade & collaborations</option></select></label></div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300">Your message<textarea required name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us a little about what you’re looking for..." className="contact-input resize-none" /></label>
                  <button type="submit" className="group inline-flex items-center gap-3 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-500 dark:hover:text-white"><Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" /> Send message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
