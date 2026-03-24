import {
  Sparkles,
  LayoutTemplate,
  ArrowRight,
  BadgeCheck,
  Phone,
  Mail,
  MessageCircle,
  Crown,
  Palette,
  Rocket,
  Gem,
  Check,
} from "lucide-react";

export default function NovaVisionStudio() {
  const services = [
    {
      title: "Sites vitrines ultra premium",
      text: "Des interfaces haut de gamme pour artisans, indépendants, entreprises locales et marques qui veulent paraître immédiatement plus sérieuses et plus désirables.",
      icon: Crown,
    },
    {
      title: "Direction artistique impactante",
      text: "Une identité élégante, moderne et cohérente, avec un univers violet / rose sophistiqué qui renforce la valeur perçue de votre activité.",
      icon: Palette,
    },
    {
      title: "Déploiement propre et rapide",
      text: "Une base React moderne, fluide et professionnelle, pensée pour être facilement publiée sur Vercel avec un rendu premium sur mobile et ordinateur.",
      icon: Rocket,
    },
  ];

  const projects = [
    {
      title: "Artisan / rénovation premium",
      tag: "Confiance & conversion",
      image: "/showcase-artisan.png",
      text: "Une vitrine haut de gamme pour présenter les services, les réalisations, la zone d'intervention et pousser naturellement à la demande de devis.",
    },
    {
      title: "Marque élégante / personal branding",
      tag: "Image haut de gamme",
      image: "/showcase-luxury.png",
      text: "Un design plus luxe, plus fin et plus moderne pour donner une vraie identité à une marque ou une activité premium.",
    },
    {
      title: "Business local moderne",
      tag: "Pro & vendeur",
      image: "/showcase-business.png",
      text: "Une structure claire et puissante pour mettre en avant les services, rassurer le visiteur et augmenter les prises de contact.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Positionnement visuel",
      text: "On définit l'image à renvoyer : premium, moderne, rassurante, élégante et adaptée à la cible du client.",
    },
    {
      step: "02",
      title: "Design sur mesure",
      text: "Je crée une interface visuellement forte avec des sections propres, du rythme et une présentation haut de gamme.",
    },
    {
      step: "03",
      title: "Structure vendeuse",
      text: "Chaque bloc est pensé pour capter l'attention, mettre en valeur les points forts et donner envie de passer à l'action.",
    },
    {
      step: "04",
      title: "Livraison prête à publier",
      text: "Le site est livré dans une base moderne, propre et exploitable pour une mise en ligne simple et rapide.",
    },
  ];

  const stats = [
    { value: "Premium", label: "Positionnement" },
    { value: "React", label: "Base moderne" },
    { value: "Responsive", label: "Mobile / desktop" },
    { value: "Vendeur", label: "Rendu client" },
  ];

  const examples = [
    "Artisan / bâtiment",
    "Restaurant / bar lounge",
    "Coach / personal brand",
    "E-commerce beauty",
    "Agence locale premium",
    "Automobile / detailing",
  ];

  const offers = [
    {
      name: "Landing page premium",
      price: "À partir de 390€",
      points: ["1 page moderne et premium", "Design responsive", "Boutons contact rapides", "Livraison simple à mettre en ligne"],
    },
    {
      name: "Site vitrine complet",
      price: "À partir de 790€",
      points: ["Plusieurs sections structurées", "Mise en valeur des services", "Images et rendu haut de gamme", "Base React propre et moderne"],
      featured: true,
    },
    {
      name: "Offre sur mesure",
      price: "Sur devis",
      points: ["Image de marque plus poussée", "Pages supplémentaires", "Adaptation au secteur", "Projet plus premium et plus unique"],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07040d] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-14%] left-[22%] h-[26rem] w-[26rem] rounded-full bg-pink-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,#07040d_0%,#0b0713_38%,#06030a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.08]" />
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
            <a href="#projects" className="transition hover:text-white">Exemples</a>
            <a href="#offers" className="transition hover:text-white">Offres</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12">
            Lancer un projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-12 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-20 lg:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm text-pink-100 shadow-xl shadow-fuchsia-950/20">
            <Sparkles className="h-4 w-4" />
            Studio de création web premium
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl">
            Des sites web premium qui transforment une activité simple en image de marque forte.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
            NovaVision Studio crée des sites haut de gamme, modernes et visuellement puissants pour donner à vos clients une présence en ligne plus crédible, plus désirable et plus professionnelle.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-fuchsia-950/35 transition hover:-translate-y-0.5">
              Voir les rendus
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="rounded-full border border-white/12 bg-white/7 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/12">
              Me contacter
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="text-lg font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-sm text-white/58">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-pink-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/7 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/40" />
                <span className="h-3 w-3 rounded-full bg-white/28" />
                <span className="h-3 w-3 rounded-full bg-white/18" />
              </div>
              <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                Premium layout
              </div>
            </div>

            <div className="p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#130b22]">
                <img src="/novavision-showcase.png" alt="Exemple de rendu premium de site web" className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d] via-[#07040d]/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/25 px-3 py-1 text-xs font-medium text-pink-100 backdrop-blur-md">
                  Aperçu haut de gamme
                </div>
                <div className="absolute bottom-5 left-5 max-w-xs rounded-[1.4rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                  <div className="text-sm font-semibold text-white">Présence visuelle premium</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">
                    Un style pensé pour impressionner rapidement et faire monter la valeur perçue d'une activité.
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                  <div className="mb-2 flex items-center gap-2 text-pink-200">
                    <LayoutTemplate className="h-4 w-4" />
                    <span className="text-sm font-medium">Structure vendeuse</span>
                  </div>
                  <p className="text-sm leading-6 text-white/62">Des blocs clairs, premium et bien hiérarchisés pour rassurer et pousser à l'action.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                  <div className="mb-2 flex items-center gap-2 text-pink-200">
                    <BadgeCheck className="h-4 w-4" />
                    <span className="text-sm font-medium">Impact professionnel</span>
                  </div>
                  <p className="text-sm leading-6 text-white/62">Un rendu qui fait plus sérieux, plus propre et plus crédible face à la concurrence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-4 text-sm uppercase tracking-[0.24em] text-pink-200/75">Ce que tu peux proposer</div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {examples.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-white/80">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="max-w-2xl">
          <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Services</div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Un rendu plus luxe, plus propre, plus fort visuellement</h2>
          <p className="mt-4 text-base leading-8 text-white/65">L'objectif n'est pas juste d'avoir un site. L'objectif est d'avoir une présence en ligne qui donne immédiatement confiance et qui améliore la perception de la marque.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group rounded-[1.9rem] border border-white/10 bg-white/6 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-pink-400/25 text-pink-100">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Screens de style</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Des exemples de sites que tu pourrais vendre à tes clients</h2>
          </div>
          <p className="max-w-xl text-white/65">Ces visuels montrent différents styles de rendu que tu pourras présenter pour inspirer confiance et donner envie à un prospect de se projeter.</p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <div className="relative h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07040d] via-[#07040d]/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/25 px-3 py-1 text-xs font-medium text-pink-100 backdrop-blur-md">{project.tag}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="max-w-2xl">
          <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Offres</div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Des bases claires pour vendre plus facilement</h2>
          <p className="mt-4 text-base leading-8 text-white/65">J'ai ajouté une section offres pour que ton site fasse aussi plus professionnel quand un prospect veut comprendre ce que tu proposes.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`rounded-[2rem] border p-7 shadow-2xl backdrop-blur-sm ${offer.featured ? "border-pink-300/30 bg-gradient-to-b from-fuchsia-500/15 to-white/6 shadow-fuchsia-950/30" : "border-white/10 bg-white/6 shadow-black/20"}`}
            >
              <div className="text-sm uppercase tracking-[0.18em] text-pink-200/80">{offer.name}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{offer.price}</div>
              <div className="mt-6 space-y-3">
                {offer.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-6 text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-200" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12">
                Demander ce format
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="max-w-2xl">
          <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Méthode</div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Une conception pensée pour être belle, lisible et convaincante</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-black/20">
              <div className="text-sm font-semibold tracking-[0.2em] text-pink-200">{item.step}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-violet-500/14 via-fuchsia-500/10 to-pink-400/14 p-8 shadow-2xl shadow-black/20">
            <div className="max-w-2xl">
              <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Positionnement</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Le genre de site qui fait monter la valeur perçue avant même le premier échange</h2>
              <p className="mt-5 text-base leading-8 text-white/70">Quand un prospect arrive sur un site propre, haut de gamme et bien construit, il voit tout de suite une activité plus sérieuse. C'est exactement ce que ce type de design vient créer.</p>
            </div>
          </div>

          <div id="contact" className="rounded-[2.2rem] border border-white/10 bg-white/6 p-8 shadow-2xl shadow-black/20">
            <div className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/80">Contact</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">NovaVision Studio</h2>
            <p className="mt-4 leading-8 text-white/65">J'ai laissé des infos de contact provisoires. Tu pourras les remplacer par ton vrai email, ton numéro et ton lien WhatsApp.</p>

            <div className="mt-6 space-y-4 text-sm text-white/85">
              <a href="mailto:contact@novavisionstudio.fr" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10">
                <Mail className="h-4 w-4 text-pink-200" />
                contact@novavisionstudio.fr
              </a>
              <a href="tel:+33600000000" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10">
                <Phone className="h-4 w-4 text-pink-200" />
                06 00 00 00 00
              </a>
              <a href="https://wa.me/33600000000" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 transition hover:bg-white/10">
                <MessageCircle className="h-4 w-4 text-pink-200" />
                WhatsApp direct
              </a>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/15 p-4 text-sm leading-6 text-white/60">
              Tu peux aussi utiliser cette zone pour afficher ton délai de livraison, ton process client ou ton message de prise de contact.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
