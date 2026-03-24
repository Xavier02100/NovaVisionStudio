import {
  ArrowRight,
  Crown,
  Sparkles,
  BadgeCheck,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Phone,
  Gem,
} from "lucide-react";

const cards = [
  { title: "Image premium", text: "Un rendu plus haut de gamme qui améliore immédiatement la perception de l’activité." },
  { title: "Design moderne", text: "Une interface claire, fluide et élégante qui inspire confiance dès les premières secondes." },
  { title: "Conversion", text: "Une structure pensée pour rassurer, mettre en valeur l’offre et donner envie de contacter." },
];

const galleryItems = [
  {
    title: "Site artisan premium",
    label: "Artisan / service",
    text: "Un rendu sérieux, rassurant et haut de gamme pour les entreprises de services et les métiers locaux.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Site e-commerce premium",
    label: "E-commerce",
    text: "Une présentation plus élégante pour valoriser les produits, l’univers visuel et l’image de marque.",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Site business local",
    label: "Business local",
    text: "Un site moderne pour commerces, agences locales, cabinets et activités qui veulent paraître plus professionnels.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07040d] text-white relative">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04020a]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04020a_0%,#080512_45%,#040208_100%)]" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-[-8%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-3xl animate-pulse" />
        <div className="absolute right-[-6%] top-[12%] h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-[18%] top-[22%] h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-3xl animate-pulse" />
        <div className="absolute left-[20%] top-[55%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-[6%] top-[22%] h-[220px] w-[900px] rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.12),rgba(232,121,249,0.12),transparent)] blur-3xl" />
        <div className="absolute right-[-4%] top-[58%] h-[200px] w-[760px] rotate-[8deg] bg-[linear-gradient(90deg,transparent,rgba(192,132,252,0.12),rgba(59,130,246,0.10),transparent)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07040d]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 shadow-lg shadow-fuchsia-950/20">
              <Gem className="h-5 w-5 text-pink-200" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-wide text-white">NovaVision</div>
              <div className="text-xs uppercase tracking-[0.28em] text-pink-200/75">Studio</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#gallery" className="transition hover:text-white">Galerie</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12">
            Démarrer un projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
          <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,4,13,0.97)_0%,rgba(7,4,13,0.9)_38%,rgba(7,4,13,0.72)_66%,rgba(7,4,13,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(168,85,247,0.20),transparent_26%),radial-gradient(circle_at_78%_28%,rgba(236,72,153,0.16),transparent_24%),radial-gradient(circle_at_64%_70%,rgba(56,189,248,0.12),transparent_24%)]" />
        </div>

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-pink-100 shadow-xl shadow-fuchsia-950/20 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Studio digital premium
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl">
            Des sites web haut de gamme qui donnent immédiatement plus de valeur à votre activité.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            NovaVision Studio crée des sites modernes, élégants et vendeurs pour aider les entreprises à paraître plus crédibles, plus premium et plus professionnelles dès les premières secondes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(192,132,252,0.35)]">
              Voir des exemples
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="rounded-full border border-white/12 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/12">
              Demander un projet
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="text-lg font-semibold text-white">Premium</div><div className="mt-1 text-sm text-white/60">Image de marque</div></div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="text-lg font-semibold text-white">Moderne</div><div className="mt-1 text-sm text-white/60">Design clair et élégant</div></div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="text-lg font-semibold text-white">Vendeur</div><div className="mt-1 text-sm text-white/60">Pensé pour convertir</div></div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-pink-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/8 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-white/40" /><span className="h-3 w-3 rounded-full bg-white/28" /><span className="h-3 w-3 rounded-full bg-white/18" /></div>
              <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">Premium layout</div>
            </div>
            <div className="p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#130b22]">
                <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80" alt="Exemple de rendu premium de site web" className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d] via-[#07040d]/10 to-transparent" />
                <div className="absolute bottom-5 left-5 max-w-xs rounded-[1.4rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                  <div className="text-sm font-semibold text-white">Présence visuelle premium</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">Un rendu conçu pour inspirer confiance, renforcer l’image de marque et donner immédiatement envie de vous contacter.</div>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                  <div className="mb-2 flex items-center gap-2 text-pink-200"><LayoutTemplate className="h-4 w-4" /><span className="text-sm font-medium">Structure claire</span></div>
                  <p className="text-sm leading-6 text-white/64">Des sections lisibles, modernes et rassurantes pour mieux présenter l’offre.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                  <div className="mb-2 flex items-center gap-2 text-pink-200"><BadgeCheck className="h-4 w-4" /><span className="text-sm font-medium">Rendu professionnel</span></div>
                  <p className="text-sm leading-6 text-white/64">Une image plus sérieuse et plus haut de gamme face à la concurrence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Services</div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Une touche plus pro, plus nette, plus premium</h2>
          <p className="mt-4 text-base leading-8 text-white/65">Le but est de garder une ergonomie agréable tout en ajoutant une image plus haut de gamme et plus crédible.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[1.9rem] border border-white/10 bg-white/6 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.08] hover:shadow-[0_30px_90px_rgba(168,85,247,0.18)]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-pink-400/25 text-pink-100"><Crown className="h-6 w-6" /></div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[5%] top-[10%] h-[260px] w-[260px] rounded-full bg-violet-500/12 blur-3xl" />
          <div className="absolute right-[8%] bottom-[0%] h-[280px] w-[280px] rounded-full bg-pink-500/12 blur-3xl" />
          <div className="absolute left-[18%] top-[30%] h-[160px] w-[520px] rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.16),rgba(59,130,246,0.14),transparent)] blur-3xl" />
        </div>
        <div className="mb-12 text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-pink-200">Galerie</div>
          <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Exemples de sites que nous pouvons créer</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">Des styles de rendu pensés pour aider vos clients à se projeter immédiatement et à comprendre la qualité du résultat final.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-fuchsia-400/30 hover:shadow-[0_30px_100px_rgba(168,85,247,0.22)]">
              <img src={item.image} alt={item.title} className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07040d] via-[#07040d]/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.18),transparent_45%)]" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-pink-100 backdrop-blur-md">{item.label}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/72">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold">Un site qui fait la différence</h2>
        <p className="mt-6 text-white/60">Un bon site ne sert pas seulement à être présent en ligne. Il sert à rassurer, à valoriser l’offre et à donner une vraie impression de sérieux.</p>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-pink-200">Contact</div>
          <h2 className="mt-6 text-4xl font-semibold md:text-5xl">Donnez à votre activité une image plus forte en ligne</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">Un site plus propre, plus premium et plus rassurant peut changer immédiatement la perception de votre entreprise.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-violet-500/14 via-fuchsia-500/10 to-pink-400/14 p-8 shadow-2xl shadow-black/20">
            <div className="max-w-2xl">
              <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Pourquoi un site premium</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Une meilleure image avant même le premier échange</h2>
              <p className="mt-5 text-base leading-8 text-white/70">Un site structuré, élégant et cohérent inspire plus de confiance, valorise l’offre et donne à vos visiteurs une vraie raison de vous contacter plutôt qu’un concurrent.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="text-sm font-semibold text-white">Image plus sérieuse</div><p className="mt-2 text-sm leading-6 text-white/65">Un rendu plus professionnel dès l’arrivée sur le site.</p></div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/7 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"><div className="text-sm font-semibold text-white">Prise de contact facilitée</div><p className="mt-2 text-sm leading-6 text-white/65">Des boutons et sections clairs pour encourager l’action.</p></div>
              </div>
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-white/10 bg-white/7 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">NovaVision Studio</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Parlons de votre projet</h2>
            <p className="mt-4 leading-8 text-white/65">Cette section pourra accueillir votre email, votre numéro, votre WhatsApp ou un lien de prise de rendez-vous pour rendre le site directement exploitable.</p>
            <div className="mt-6 space-y-4 text-sm text-white/85">
              <a href="mailto:Xavierdelorme93@hotmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10"><Mail className="h-4 w-4 text-pink-200" />Xavierdelorme93@hotmail.com</a>
              <a href="tel:+33778838448" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10"><Phone className="h-4 w-4 text-pink-200" />07 78 83 84 48</a>
              <a href="https://wa.me/33778838448" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10"><MessageCircle className="h-4 w-4 text-pink-200" />WhatsApp direct</a>
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/15 p-4 text-sm leading-6 text-white/60">Tu pourras ensuite remplacer la galerie provisoire par tes mockups personnalisés dans la version finale du projet.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
