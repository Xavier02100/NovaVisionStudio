const gallery = [
  {
    src: '/images/mockup1.png',
    title: 'Mockup premium',
    desc: 'Un univers haut de gamme pour présenter des sites élégants et vendeurs.',
  },
  {
    src: '/images/mockup2.png',
    title: 'Portfolio visuel',
    desc: 'Des visuels premium qui aident le client à se projeter immédiatement.',
  },
]

const services = [
  {
    title: 'Sites vitrines premium',
    text: 'Des sites modernes, élégants et pensés pour donner une image plus haut de gamme à une activité.',
  },
  {
    title: 'Image plus crédible',
    text: 'Une présentation claire, rassurante et premium pour inspirer confiance dès les premières secondes.',
  },
  {
    title: 'Mise en ligne simple',
    text: 'Une structure propre et légère pour un déploiement facile sur Vercel.',
  },
]

const projects = [
  {
    title: 'Artisan / BTP',
    subtitle: 'Un site pro pour rassurer et générer des demandes.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Beauté / Bien-être',
    subtitle: 'Une image élégante qui donne envie de réserver.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Business / Coaching',
    subtitle: 'Un rendu premium qui inspire crédibilité et confiance.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function App() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="bg-orb orb-left" />
        <div className="bg-orb orb-right" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">NovaVision Studio • Création de sites premium</span>
            <h1>
              Des sites <span>premium</span> pour donner une vraie image pro à chaque activité.
            </h1>
            <p>
              Artisan, business, beauté, restaurant, immobilier ou service local : je crée des sites modernes,
              élégants et pensés pour convertir.
            </p>
            <div className="hero-actions">
              <a href="#galerie" className="btn btn-primary">Voir la galerie</a>
              <a href="#contact" className="btn btn-secondary">Me contacter</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-card-inner">
              <p className="mini-label">Positionnement</p>
              <h2>Une image plus haut de gamme pour attirer de meilleurs clients.</h2>
              <div className="feature-grid">
                <div>Design premium</div>
                <div>Version mobile</div>
                <div>Contact rapide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Services</span>
            <h2>Un rendu agence, pensé pour vendre.</h2>
            <p>Une base premium pour présenter ton activité et montrer ce que tu peux produire pour tes futurs clients.</p>
          </div>
          <div className="cards-grid">
            {services.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="icon-glow" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="galerie">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Galerie premium</span>
            <h2>Des visuels qui aident le client à se projeter immédiatement.</h2>
            <p>Ces deux mockups sont déjà intégrés dans le projet et prêts à être affichés sur ton site.</p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <article className="gallery-card" key={item.title}>
                <div className="gallery-image-wrap">
                  <img src={item.src} alt={item.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Exemples</span>
            <h2>Des styles de sites que tu peux proposer facilement.</h2>
            <p>Une section simple pour montrer différents univers visuels et inspirer confiance.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-content">
                  <p className="project-tag">{project.title}</p>
                  <h3>{project.subtitle}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>Passe à un site qui fait vraiment haut de gamme.</h2>
              <p>
                NovaVision Studio te permet de présenter ton activité avec un rendu plus premium, plus rassurant et plus vendeur.
              </p>
            </div>
            <div className="hero-actions">
              <a href="mailto:contact@novavisionstudio.fr" className="btn btn-primary">Par mail</a>
              <a href="https://wa.me/33600000000" className="btn btn-secondary">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
