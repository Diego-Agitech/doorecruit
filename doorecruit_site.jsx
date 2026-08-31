import React, { useState } from 'react';
import { Menu, X, Search, Briefcase, Users, BookOpen, ChevronRight, Star, ArrowRight, Mail, Phone, Linkedin, TrendingUp, Target, Lightbulb, Sparkles, Zap, Globe, Shield, CheckCircle2, MapPin, ArrowLeft } from 'lucide-react';

export default function DooRecruit() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [filterRole, setFilterRole] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Développeur Odoo Senior',
      sector: 'Éditeur logiciel',
      location: 'Paris',
      country: 'France',
      level: 'senior',
      salary: '50-65k€',
      modules: ['Python', 'PostgreSQL', 'Développement Backend'],
      description: 'Nous recherchons un développeur Odoo expérimenté pour rejoindre notre équipe.',
      fullDescription: 'Au sein d\'une équipe technique établie, vous prendrez en charge le développement de modules Odoo sur mesure, la maintenance de l\'existant et la montée de version. Vous travaillerez en lien direct avec les consultants fonctionnels pour transformer les besoins métier en solutions techniques robustes.',
      responsibilities: ['Développer et maintenir des modules Odoo custom', 'Participer aux revues de code et à l\'architecture technique', 'Accompagner la montée de version Odoo', 'Collaborer avec les consultants fonctionnels']
    },
    {
      id: 2,
      title: 'Consultant Fonctionnel Odoo',
      sector: 'Cabinet de conseil ERP',
      location: 'Lyon',
      country: 'France',
      level: 'mid',
      salary: '40-55k€',
      modules: ['Ventes', 'Stocks', 'Comptabilité'],
      description: 'Vous allez accompagner nos clients dans leurs projets de transformation Odoo.',
      fullDescription: 'Vous interviendrez sur des projets de déploiement et d\'optimisation Odoo pour une clientèle variée (PME, ETI). De l\'analyse des besoins au paramétrage, en passant par la formation des utilisateurs, vous êtes le garant de la réussite fonctionnelle du projet.',
      responsibilities: ['Analyser les besoins métier des clients', 'Paramétrer les modules Ventes, Stocks et Comptabilité', 'Former les utilisateurs finaux', 'Assurer le support post-déploiement']
    },
    {
      id: 3,
      title: 'Chef de Projet Odoo',
      sector: 'Agence digitale',
      location: 'Toulouse',
      country: 'France',
      level: 'mid',
      salary: '45-60k€',
      modules: ['Gestion de projet', 'Agile', 'Relation client'],
      description: 'Piloter des projets Odoo complets de la conception à la mise en production.',
      fullDescription: 'Véritable chef d\'orchestre, vous pilotez des projets d\'implémentation Odoo de bout en bout : cadrage, planning, coordination des équipes techniques et fonctionnelles, et relation client jusqu\'à la mise en production.',
      responsibilities: ['Cadrer et planifier les projets Odoo', 'Coordonner les équipes techniques et fonctionnelles', 'Être l\'interlocuteur privilégié du client', 'Piloter le budget et les délais']
    },
    {
      id: 4,
      title: 'Développeur Odoo Junior',
      sector: 'Start-up SaaS',
      location: 'Bordeaux',
      country: 'France',
      level: 'junior',
      salary: '28-35k€',
      modules: ['Python', 'Javascript', 'API'],
      description: 'Débuter votre carrière dans un environnement dynamique et bienveillant.',
      fullDescription: 'Vous rejoignez une équipe technique bienveillante pour développer vos compétences sur Odoo. Encadré par des développeurs seniors, vous participerez à des projets concrets tout en montant en compétence sur le framework et l\'écosystème Python.',
      responsibilities: ['Développer des fonctionnalités sous supervision', 'Corriger des anomalies', 'Monter en compétence sur Odoo et Python', 'Participer aux points d\'équipe agile']
    },
    {
      id: 5,
      title: 'Specialist Intégration Odoo',
      sector: 'Intégrateur Odoo',
      location: 'Nantes',
      country: 'France',
      level: 'senior',
      salary: '55-70k€',
      modules: ['Intégrations API', 'Webhooks', 'Synchronisation données'],
      description: 'Expertiser les intégrations complexes entre Odoo et systèmes tiers.',
      fullDescription: 'Vous concevez et développez les interfaces entre Odoo et les systèmes tiers du client (CRM, logistique, e-commerce). Vous êtes garant de la fiabilité et de la performance des flux de données.',
      responsibilities: ['Concevoir des architectures d\'intégration', 'Développer des API et webhooks', 'Fiabiliser les synchronisations de données', 'Documenter les intégrations']
    },
    {
      id: 6,
      title: 'Admin Odoo',
      sector: 'Groupe industriel',
      location: 'Lille',
      country: 'France',
      level: 'junior',
      salary: '30-38k€',
      modules: ['Administration système', 'Utilisateurs', 'Maintenance'],
      description: 'Gérer et maintenir l\'infrastructure Odoo de nos clients.',
      fullDescription: 'Vous assurez le bon fonctionnement quotidien de l\'environnement Odoo : gestion des utilisateurs et des droits, maintenance applicative, suivi des performances et support de premier niveau.',
      responsibilities: ['Gérer les utilisateurs et les droits d\'accès', 'Assurer la maintenance applicative', 'Suivre les performances de l\'instance Odoo', 'Traiter les tickets de support niveau 1']
    },
    {
      id: 7,
      title: 'Développeur Odoo Confirmé',
      sector: 'Éditeur logiciel',
      location: 'Bruxelles',
      country: 'Belgique',
      level: 'mid',
      salary: '48-58k€',
      modules: ['Python', 'PostgreSQL', 'API REST'],
      description: 'Rejoignez une équipe technique à taille humaine pour développer des solutions Odoo sur mesure.',
      fullDescription: 'Au sein d\'une structure basée à Bruxelles, vous développez et maintenez des modules Odoo pour une clientèle belge et internationale. Vous travaillez en méthode agile, avec une forte autonomie technique.',
      responsibilities: ['Développer des modules Odoo sur mesure', 'Participer aux choix d\'architecture', 'Assurer la qualité du code (tests, revues)', 'Échanger directement avec les clients belges']
    },
    {
      id: 8,
      title: 'Consultant Fonctionnel Odoo',
      sector: 'Cabinet de conseil ERP',
      location: 'Anvers',
      country: 'Belgique',
      level: 'mid',
      salary: '42-52k€',
      modules: ['Achats', 'Stocks', 'Logistique'],
      description: 'Accompagnez des entreprises belges dans leur transformation digitale avec Odoo.',
      fullDescription: 'Vous intervenez sur des projets de déploiement Odoo auprès de clients belges, principalement dans le secteur logistique et industriel. Vous maîtrisez le paramétrage des modules Achats, Stocks et Logistique.',
      responsibilities: ['Analyser les processus achats et logistique', 'Paramétrer les modules Odoo correspondants', 'Former les équipes clientes', 'Rédiger la documentation fonctionnelle']
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Les tendances du recrutement Odoo en 2026',
      date: '15 août 2026',
      category: 'Marché',
      excerpt: 'Découvrez les compétences les plus demandées et les salaires tendance.',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Comment progresser de développeur à lead Odoo',
      date: '12 août 2026',
      category: 'Carrière',
      excerpt: 'Roadmap pour évolver dans votre carrière technique Odoo.',
      icon: Target
    },
    {
      id: 3,
      title: 'Odoo 18 : les nouveautés pour les développeurs',
      date: '8 août 2026',
      category: 'Technique',
      excerpt: 'Aperçu des nouvelles features de la dernière version.',
      icon: Sparkles
    },
    {
      id: 4,
      title: 'Préparation aux entretiens Odoo : notre guide complet',
      date: '5 août 2026',
      category: 'Conseils',
      excerpt: 'Questions techniques, case studies, et conseils pratiques.',
      icon: Lightbulb
    }
  ];

  const testimonials = [
    {
      name: 'Pierre Martin',
      role: 'Développeur Odoo',
      company: 'TechCorp',
      text: 'DooRecruit m\'a trouvé un poste parfait en 2 semaines. Ils connaissent vraiment le secteur !',
      rating: 5
    },
    {
      name: 'Sophie Durand',
      role: 'Directrice RH',
      company: 'ERP Consulting',
      text: 'Grâce à DooRecruit, nous avons recruté 5 experts Odoo. Processus fluide et professionnel.',
      rating: 5
    },
    {
      name: 'Marc Leclerc',
      role: 'Consultant Fonctionnel',
      company: 'Digital Plus',
      text: 'L\'expertise de l\'équipe sur Odoo est impressionnante. Ils m\'ont très bien accompagné.',
      rating: 5
    }
  ];

  const filteredJobs = jobs.filter(job => {
    if (filterRole !== 'all' && job.level !== filterRole) return false;
    if (filterLevel !== 'all' && job.level !== filterLevel) return false;
    if (filterCountry !== 'all' && job.country !== filterCountry) return false;
    return true;
  });

  const openJob = (id) => {
    setSelectedJobId(id);
    setCurrentPage('job-detail');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'jobs':
        return <JobsPage jobs={filteredJobs} filterLevel={filterLevel} filterCountry={filterCountry} setFilterLevel={setFilterLevel} setFilterCountry={setFilterCountry} openJob={openJob} />;
      case 'job-detail':
        return <JobDetailPage job={jobs.find(j => j.id === selectedJobId)} setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <BlogPage articles={articles} />;
      case 'talents':
        return <TalentsPage />;
      case 'about':
        return <AboutPage testimonials={testimonials} setCurrentPage={setCurrentPage} />;
      case 'approach':
        return <ApproachPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-950 text-brand-50">
      {/* Navigation */}
      <nav className="bg-brand-900 border-b border-brand-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3">
              <div className="text-2xl font-display font-black tracking-tight text-brand-50">
                DOO<span className="text-brand-amber">RECRUIT</span>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => setCurrentPage('home')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Accueil</button>
              <button onClick={() => setCurrentPage('jobs')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Offres</button>
              <button onClick={() => setCurrentPage('blog')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Blog</button>
              <button onClick={() => setCurrentPage('talents')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Candidats</button>
              <button onClick={() => setCurrentPage('contact')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Entreprises</button>
              <button onClick={() => setCurrentPage('approach')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Notre approche</button>
              <button onClick={() => setCurrentPage('about')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">À propos</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} className="md:hidden text-brand-50 p-2.5 -mr-2.5 flex items-center justify-center">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-brand-900 border-t border-brand-700">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Accueil</button>
              <button onClick={() => { setCurrentPage('jobs'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Offres</button>
              <button onClick={() => { setCurrentPage('blog'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Blog</button>
              <button onClick={() => { setCurrentPage('talents'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Candidats</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Entreprises</button>
              <button onClick={() => { setCurrentPage('approach'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Notre approche</button>
              <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">À propos</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-brand-950 border-t border-brand-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-display font-black mb-3">
                DOO<span className="text-brand-amber">RECRUIT</span>
              </div>
              <p className="text-brand-50/50">Le match juste. Sans blabla.</p>
              <p className="text-brand-50/40 text-sm mt-2">France 🇫🇷 • Belgique 🇧🇪</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-brand-50">Navigation</h4>
              <div className="space-y-2">
                <button onClick={() => setCurrentPage('home')} className="text-brand-50/50 hover:text-brand-amber block">Accueil</button>
                <button onClick={() => setCurrentPage('jobs')} className="text-brand-50/50 hover:text-brand-amber block">Offres</button>
                <button onClick={() => setCurrentPage('blog')} className="text-brand-50/50 hover:text-brand-amber block">Blog</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-brand-50">Ressources</h4>
              <div className="space-y-2">
                <button onClick={() => setCurrentPage('talents')} className="text-brand-50/50 hover:text-brand-amber block">S'inscrire</button>
                <button onClick={() => setCurrentPage('contact')} className="text-brand-50/50 hover:text-brand-amber block">Nous contacter</button>
                <button onClick={() => setCurrentPage('approach')} className="text-brand-50/50 hover:text-brand-amber block">Notre approche</button>
                <button onClick={() => setCurrentPage('about')} className="text-brand-50/50 hover:text-brand-amber block">À propos</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-brand-50">Contact</h4>
              <div className="space-y-2 text-brand-50/50">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@doorecruit.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+33 (0)1 23 45 67 89</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-700 pt-8 text-center text-brand-50/40">
            <p>&copy; 2026 DooRecruit. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-950 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-4">Le match juste. Sans blabla.</p>
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6 text-brand-50">
            Recrutez les meilleurs talents Odoo
          </h1>
          <p className="text-xl md:text-2xl mb-3 text-brand-50/60">
            L'agence spécialisée qui connecte les entreprises aux experts Odoo
          </p>
          <p className="text-sm text-brand-50/40 mb-8">Recrutement en France 🇫🇷 et en Belgique 🇧🇪</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={() => setCurrentPage('talents')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition flex items-center justify-center gap-2">
              Je cherche un nouveau rôle <ArrowRight size={20} />
            </button>
            <button onClick={() => setCurrentPage('contact')} className="border border-brand-50/30 text-brand-50 px-8 py-3 rounded-lg font-bold hover:border-brand-amber hover:text-brand-amber transition flex items-center justify-center gap-2">
              Je cherche un talent <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-brand-900 border-y border-brand-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-display font-black text-brand-amber mb-2">500+</div>
              <p className="text-brand-50/60">Talents Odoo dans notre réseau</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-black text-brand-amber mb-2">120+</div>
              <p className="text-brand-50/60">Placements réussis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-black text-brand-amber mb-2">95%</div>
              <p className="text-brand-50/60">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-black text-center mb-3 text-brand-50">Nos Services</h2>
          <p className="text-center text-brand-50/50 mb-12 max-w-2xl mx-auto">100% spécialisé Odoo — aucun autre ERP, aucune dispersion. Développement, fonctionnel, gestion de projet, intégration.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Search size={32} />}
              title="Sourcing Spécialisé"
              description="Nous accédons à un réseau exclusif de talents Odoo vérifiés et qualifiés."
            />
            <ServiceCard
              icon={<Users size={32} />}
              title="Matching Expert"
              description="Notre équipe technique évalue les compétences pour le parfait match culturel et technique."
            />
            <ServiceCard
              icon={<Briefcase size={32} />}
              title="Accompagnement Complet"
              description="De la négociation à l'onboarding, nous gérons tout le processus pour vous."
            />
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 px-4 bg-brand-900 border-y border-brand-700">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3 text-center">Méthodologie</p>
          <h2 className="text-4xl font-display font-black text-center mb-12 text-brand-50">Notre approche</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {[
              { number: '01', title: 'Brief & Cadrage', description: 'Compréhension du poste, de la culture et des enjeux techniques.' },
              { number: '02', title: 'Sourcing Ciblé', description: 'Activation de notre réseau Odoo en France et en Belgique.' },
              { number: '03', title: 'Pré-qualification', description: 'Entretiens techniques menés par des consultants spécialisés Odoo.' },
              { number: '04', title: 'Shortlist Qualifiée', description: '3 à 5 profils validés, présentés sous 24 à 72h.' }
            ].map((step) => (
              <div key={step.number}>
                <div className="text-3xl font-display font-black text-brand-amber mb-3">{step.number}</div>
                <h3 className="text-lg font-bold text-brand-50 mb-2">{step.title}</h3>
                <p className="text-brand-50/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => setCurrentPage('approach')} className="border border-brand-50/30 text-brand-50 px-8 py-3 rounded-lg font-bold hover:border-brand-amber hover:text-brand-amber transition inline-flex items-center gap-2">
              Découvrir notre méthodologie complète <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-black mb-12 text-brand-50">Dernières opportunités</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[0,1,2,3].map((i) => (
              <JobCard key={i} job={{
                title: ['Développeur Odoo Senior', 'Consultant Fonctionnel', 'Chef de Projet', 'Développeur Junior'][i],
                sector: ['Éditeur logiciel', 'Cabinet de conseil ERP', 'Agence digitale', 'Start-up SaaS'][i],
                salary: ['50-65k€', '40-55k€', '45-60k€', '28-35k€'][i],
                location: ['Paris', 'Lyon', 'Toulouse', 'Bordeaux'][i]
              }} />
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => setCurrentPage('jobs')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
              Voir toutes les offres
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-black mb-6 text-brand-50">Prêt à trouver votre prochain talent Odoo ?</h2>
          <p className="text-xl mb-8 text-brand-50/60">Contactez-nous pour discuter de vos besoins de recrutement.</p>
          <button onClick={() => setCurrentPage('contact')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
}

function LocationBadge({ location, country }) {
  const flag = country === 'Belgique' ? '🇧🇪' : '🇫🇷';
  return (
    <span className="inline-flex items-center gap-1 bg-brand-800 border border-brand-700 text-brand-50/80 text-xs font-medium px-2.5 py-1 rounded-full">
      <MapPin size={12} className="text-brand-amber" />
      {location} <span aria-hidden="true">{flag}</span>
    </span>
  );
}

function JobsPage({ jobs, filterLevel, filterCountry, setFilterLevel, setFilterCountry, openJob }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-black mb-8 text-brand-50">Offres d'emploi</h1>

      {/* Filters */}
      <div className="bg-brand-900 border border-brand-700 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Niveau</label>
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="w-full p-2 bg-brand-950 border border-brand-700 rounded text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40">
              <option value="all">Tous les niveaux</option>
              <option value="junior">Junior</option>
              <option value="mid">Intermédiaire</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Pays</label>
            <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} className="w-full p-2 bg-brand-950 border border-brand-700 rounded text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40">
              <option value="all">Tous les pays</option>
              <option value="France">🇫🇷 France</option>
              <option value="Belgique">🇧🇪 Belgique</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map(job => (
          <div key={job.id} className="bg-brand-900 border border-brand-700 rounded-lg p-6 hover:border-brand-amber transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-brand-50">{job.title}</h3>
                <p className="text-brand-50/60">{job.sector} <span className="text-brand-50/30">· client confidentiel</span></p>
              </div>
              <div className="bg-brand-800 text-brand-amber p-2 rounded-lg shrink-0">
                <Briefcase size={20} />
              </div>
            </div>
            <p className="text-brand-50/70 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <LocationBadge location={job.location} country={job.country} />
              {job.modules.slice(0, 2).map((module, i) => (
                <span key={i} className="bg-brand-800 text-brand-amber-light text-xs px-3 py-1 rounded-full">
                  {module}
                </span>
              ))}
            </div>
            <div className="flex justify-end items-center text-sm text-brand-50/60 mb-4">
              <span className="font-bold text-brand-amber">{job.salary}</span>
            </div>
            <button onClick={() => openJob(job.id)} className="w-full bg-brand-amber text-brand-950 py-2 rounded-lg hover:bg-brand-amber-light font-bold transition">
              Voir l'offre →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function JobDetailPage({ job, setCurrentPage }) {
  if (!job) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-brand-50/60 mb-4">Cette offre n'est plus disponible.</p>
        <button onClick={() => setCurrentPage('jobs')} className="text-brand-amber font-bold hover:text-brand-amber-light">
          Retour aux offres
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => setCurrentPage('jobs')} className="inline-flex items-center gap-2 text-brand-50/60 hover:text-brand-amber mb-8 text-sm font-medium transition">
        <ArrowLeft size={16} /> Retour aux offres
      </button>

      <div className="flex items-start gap-4 mb-4">
        <div className="bg-brand-800 text-brand-amber p-3 rounded-lg shrink-0">
          <Briefcase size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-display font-black text-brand-50 mb-1">{job.title}</h1>
          <p className="text-brand-50/60">{job.sector} <span className="text-brand-50/30">· client confidentiel</span></p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <LocationBadge location={job.location} country={job.country} />
        <span className="bg-brand-800 border border-brand-700 text-brand-50/80 text-xs font-medium px-2.5 py-1 rounded-full">
          {job.level === 'junior' ? 'Junior' : job.level === 'senior' ? 'Senior' : 'Intermédiaire'}
        </span>
        <span className="bg-brand-amber text-brand-950 text-xs font-bold px-2.5 py-1 rounded-full">
          {job.salary}
        </span>
      </div>

      <div className="bg-brand-900 border border-brand-700 rounded-lg p-8 mb-8">
        <h2 className="text-lg font-bold text-brand-50 mb-3">Le poste</h2>
        <p className="text-brand-50/70 mb-6">{job.fullDescription || job.description}</p>

        {job.responsibilities && (
          <>
            <h2 className="text-lg font-bold text-brand-50 mb-3">Vos missions</h2>
            <ul className="space-y-2 mb-6">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-brand-50/70">
                  <CheckCircle2 size={16} className="text-brand-amber mt-1 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-lg font-bold text-brand-50 mb-3">Compétences Odoo</h2>
        <div className="flex flex-wrap gap-2">
          {job.modules.map((module, i) => (
            <span key={i} className="bg-brand-800 text-brand-amber-light text-xs px-3 py-1 rounded-full">
              {module}
            </span>
          ))}
        </div>
      </div>

      <button onClick={() => setCurrentPage('talents')} className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
        Postuler à cette offre
      </button>
    </div>
  );
}

function BlogPage({ articles }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-black mb-12 text-brand-50">Blog & Ressources Odoo</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map(article => (
          <div key={article.id} className="bg-brand-900 border border-brand-700 rounded-lg p-6 hover:border-brand-amber transition">
            <div className="bg-brand-800 text-brand-amber w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <article.icon size={20} />
            </div>
            <div className="flex justify-between items-start mb-3">
              <span className="bg-brand-800 text-brand-amber-light text-xs px-3 py-1 rounded-full">{article.category}</span>
              <span className="text-brand-50/40 text-sm">{article.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-50">{article.title}</h3>
            <p className="text-brand-50/60 mb-4">{article.excerpt}</p>
            <button className="text-brand-amber font-bold hover:text-brand-amber-light flex items-center gap-2">
              Lire l'article <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function TalentsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    diploma: '',
    field: '',
    odooExperience: '',
    odooCertified: '',
    roles: [],
    cvFileName: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleRoleToggle = (role) => {
    const updatedRoles = formData.roles.includes(role)
      ? formData.roles.filter(r => r !== role)
      : formData.roles.length < 2
      ? [...formData.roles, role]
      : formData.roles;
    setFormData({ ...formData, roles: updatedRoles });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData({ ...formData, cvFileName: file.name });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.country) newErrors.country = 'Pays requis';
    if (!formData.diploma) newErrors.diploma = 'Requis';
    if (!formData.field) newErrors.field = 'Requis';
    if (!formData.odooExperience) newErrors.odooExperience = 'Requis';
    if (!formData.odooCertified) newErrors.odooCertified = 'Requis';
    if (formData.roles.length === 0) newErrors.roles = 'Sélectionnez au moins un rôle';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzazyab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          diploma: formData.diploma,
          field: formData.field,
          odooExperience: formData.odooExperience,
          odooCertified: formData.odooCertified,
          roles: formData.roles.join(', '),
          cvName: formData.cvFileName || 'Aucun CV',
          _subject: `Nouvelle candidature Odoo: ${formData.firstName} ${formData.lastName} (${formData.country})`,
          _from: formData.email,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', country: '', diploma: '', field: '', odooExperience: '', odooCertified: '', roles: [], cvFileName: '' });
        setTimeout(() => setSubmitted(false), 8000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-brand-900 border-2 border-brand-amber rounded-lg p-8 text-center">
          <div className="text-brand-amber mb-4 flex justify-center"><CheckCircle2 size={56} /></div>
          <h2 className="text-3xl font-display font-black text-brand-amber mb-4">Candidature envoyée !</h2>
          <p className="text-brand-50/80 text-lg mb-4">
            Merci <strong>{formData.firstName}</strong>. Notre équipe va examiner votre profil et vous contactera dans les 48 heures avec les meilleures opportunités adaptées à vos compétences Odoo.
          </p>
          <p className="text-brand-50/60">
            En attendant, consultez notre <button onClick={() => window.location.reload()} className="text-brand-amber underline font-bold">blog</button> pour les dernières tendances Odoo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3">100% spécialisé Odoo</p>
      <h1 className="text-4xl font-display font-black mb-2 text-brand-50">Rejoignez notre base de talents</h1>
      <p className="text-lg text-brand-50/60 mb-2">Enregistrez votre profil et découvrez les meilleures opportunités Odoo.</p>
      <p className="text-brand-50/40 mb-8">🇫🇷 France • 🇧🇪 Belgique — ⏱️ 5 minutes pour vous inscrire</p>

      <div className="bg-brand-900 border border-brand-700 rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Infos personnelles */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Vos infos</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Prénom *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.firstName ? 'border-red-500' : 'border-brand-700'}`}
                  placeholder="Jean"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Nom *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.lastName ? 'border-red-500' : 'border-brand-700'}`}
                  placeholder="Dupont"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.email ? 'border-red-500' : 'border-brand-700'}`}
                  placeholder="jean@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.phone ? 'border-red-500' : 'border-brand-700'}`}
                  placeholder="+33 6 12 34 56 78"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1 text-brand-50">Pays *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.country ? 'border-red-500' : 'border-brand-700'}`}
              >
                <option value="">Choisir</option>
                <option value="Belgique">🇧🇪 Belgique</option>
                <option value="France">🇫🇷 France</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>

          {/* Formation */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Formation</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Niveau de diplôme *</label>
                <select
                  name="diploma"
                  value={formData.diploma}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.diploma ? 'border-red-500' : 'border-brand-700'}`}
                >
                  <option value="">Choisir</option>
                  <option value="Néant">Néant</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Master+">Master+</option>
                </select>
                {errors.diploma && <p className="text-red-500 text-xs mt-1">{errors.diploma}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Domaine d'étude *</label>
                <select
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.field ? 'border-red-500' : 'border-brand-700'}`}
                >
                  <option value="">Choisir</option>
                  <option value="Business">Business</option>
                  <option value="Ingénierie">Ingénierie</option>
                  <option value="Littéraire">Littéraire</option>
                  <option value="Créatif">Créatif</option>
                  <option value="Tech/IT">Tech/IT</option>
                </select>
                {errors.field && <p className="text-red-500 text-xs mt-1">{errors.field}</p>}
              </div>
            </div>
          </div>

          {/* Expérience Odoo */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Expérience Odoo</p>

            <label className="block text-sm font-bold mb-2 text-brand-50">Années d'expérience Odoo *</label>
            <select
              name="odooExperience"
              value={formData.odooExperience}
              onChange={handleInputChange}
              className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors.odooExperience ? 'border-red-500' : 'border-brand-700'}`}
            >
              <option value="">Choisir votre expérience</option>
              <option value="0">0 (Débutant)</option>
              <option value="< 1 an">&lt; 1 an</option>
              <option value="1-2 ans">1-2 ans</option>
              <option value="3-4 ans">3-4 ans</option>
              <option value="> 4 ans">&gt; 4 ans</option>
            </select>
            {errors.odooExperience && <p className="text-red-500 text-xs mt-1">{errors.odooExperience}</p>}

            <label className="block text-sm font-bold mb-2 mt-4 text-brand-50">
              Certification officielle Odoo (3 dernières années) *
            </label>
            <div className="space-y-2">
              {['Oui, je suis certifié', 'Non'].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                    formData.odooCertified === option ? 'border-brand-amber bg-brand-800' : 'border-brand-700 hover:border-brand-50/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="odooCertified"
                    value={option}
                    checked={formData.odooCertified === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-brand-amber cursor-pointer"
                  />
                  <span className="ml-2 font-medium text-brand-50 text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors.odooCertified && <p className="text-red-500 text-xs mt-2">{errors.odooCertified}</p>}
          </div>

          {/* Rôles */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Rôles recherchés (max 2)</p>

            <div className="space-y-2">
              {['Fonctionnel', 'Gestion de projet', 'Sales / Account management', 'Tech'].map((role) => (
                <label
                  key={role}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                    formData.roles.includes(role) ? 'border-brand-amber bg-brand-800' : 'border-brand-700 hover:border-brand-50/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.roles.includes(role)}
                    onChange={() => handleRoleToggle(role)}
                    className="w-4 h-4 accent-brand-amber rounded cursor-pointer"
                    disabled={formData.roles.length >= 2 && !formData.roles.includes(role)}
                  />
                  <span className="ml-2 font-medium text-brand-50 text-sm">{role}</span>
                </label>
              ))}
            </div>
            {errors.roles && <p className="text-red-500 text-xs mt-2">{errors.roles}</p>}
          </div>

          {/* CV */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">CV (optionnel)</p>

            <div className="border-2 border-dashed border-brand-700 rounded-lg p-4 text-center hover:border-brand-amber transition">
              <label className="cursor-pointer">
                <span className="text-sm font-medium text-brand-amber">Choisir un fichier</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <p className="text-xs text-brand-50/40 mt-1">PDF, DOC ou DOCX</p>
              {formData.cvFileName && (
                <p className="text-xs text-brand-amber mt-2 font-medium">✓ {formData.cvFileName}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition disabled:opacity-50"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer ma candidature'}
          </button>

          <p className="text-xs text-brand-50/40 text-center">
            ✓ Vos données sont sécurisées et ne seront jamais partagées sans votre consentement
          </p>
        </form>
      </div>
    </div>
  );
}

function AboutPage({ testimonials, setCurrentPage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-black mb-8 text-brand-50">À propos de DooRecruit</h1>

      <div className="bg-brand-900 border border-brand-700 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-brand-50">Notre mission</h2>
        <p className="text-brand-50/70 text-lg mb-4">
          Chez DooRecruit, nous croyons que le recrutement Odoo mérite une expertise spécialisée.
          Notre mission est de connecter les meilleurs talents Odoo avec les entreprises qui les cherchent,
          en créant des matches authentiques et durables — en France 🇫🇷 comme en Belgique 🇧🇪.
        </p>
        <p className="text-brand-50/70 text-lg">
          Nous comprenons la complexité de recruter pour l'écosystème Odoo - c'est pourquoi notre équipe
          possède une expertise technique approfondie combinée à un vrai talent pour identifier les candidats idéaux.
        </p>
      </div>

      <div className="bg-brand-800 border border-brand-amber p-8 rounded-lg mb-12">
        <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3">Notre spécialisation</p>
        <h2 className="text-2xl font-display font-black mb-4 text-brand-50">100% Odoo. Aucune dispersion.</h2>
        <p className="text-brand-50/70 text-lg mb-4">
          Contrairement aux cabinets généralistes, DooRecruit ne recrute que sur l'écosystème Odoo :
          développement (Python, PostgreSQL, API), consultants fonctionnels (ventes, stocks, comptabilité),
          chefs de projet, intégrateurs et administrateurs systèmes.
        </p>
        <p className="text-brand-50/70 text-lg">
          Cette spécialisation nous permet d'évaluer réellement les compétences techniques d'un candidat
          plutôt que de nous fier à un CV — et de parler le même langage que les entreprises qui déploient Odoo,
          en France 🇫🇷 comme en Belgique 🇧🇪.
        </p>
      </div>

      <h2 className="text-3xl font-display font-black mb-8 text-brand-50">Témoignages</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-brand-900 border border-brand-700 rounded-lg p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#DFA33A" color="#DFA33A" />
              ))}
            </div>
            <p className="text-brand-50/70 mb-4 italic">"{testimonial.text}"</p>
            <div>
              <p className="font-bold text-brand-50">{testimonial.name}</p>
              <p className="text-sm text-brand-50/50">{testimonial.role} @ {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand-800 border border-brand-amber rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-black mb-4 text-brand-50">Vous cherchez à recruter?</h2>
        <p className="mb-6 text-brand-50/70">Contactez notre équipe pour discuter de vos besoins.</p>
        <button onClick={() => setCurrentPage('contact')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
          Nous contacter
        </button>
      </div>
    </div>
  );
}

function ApproachPage({ setCurrentPage }) {
  const steps = [
    {
      number: '01',
      title: 'Brief & Cadrage',
      description: 'Un consultant échange avec vous pour comprendre le poste, la culture d\'entreprise, les enjeux techniques et le contexte du recrutement.'
    },
    {
      number: '02',
      title: 'Sourcing Ciblé',
      description: 'Activation de notre réseau exclusif de talents Odoo, actifs et passifs, en France et en Belgique.'
    },
    {
      number: '03',
      title: 'Pré-qualification Technique',
      description: 'Entretiens menés par des consultants qui maîtrisent Odoo : compétences techniques, séniorité, adéquation avec le besoin.'
    },
    {
      number: '04',
      title: 'Shortlist Qualifiée',
      description: '3 à 5 profils validés vous sont présentés sous 24 à 72h, avec synthèse de compétences et disponibilité.'
    },
    {
      number: '05',
      title: 'Coordination des Entretiens',
      description: 'Organisation logistique complète et retours structurés après chaque échange, côté entreprise comme côté candidat.'
    },
    {
      number: '06',
      title: 'Négociation & Offre',
      description: 'Accompagnement jusqu\'à la signature : rémunération, conditions, date de démarrage.'
    },
    {
      number: '07',
      title: 'Suivi Post-Intégration',
      description: 'Suivi à 30, 60 et 90 jours, avec garantie de remplacement si le candidat ne convient pas.'
    }
  ];

  const commitments = [
    { icon: Shield, title: 'Confidentialité', description: 'Vos données et celles des candidats restent strictement confidentielles.' },
    { icon: Target, title: 'Expertise sectorielle', description: 'Une équipe qui maîtrise l\'écosystème Odoo, pas un cabinet généraliste.' },
    { icon: Zap, title: 'Réactivité', description: 'Shortlist sous 24 à 72h, retours transparents à chaque étape.' },
    { icon: Globe, title: 'France & Belgique', description: 'Un vivier de talents actif et qualifié dans les deux pays.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3">Méthodologie</p>
      <h1 className="text-4xl font-display font-black mb-4 text-brand-50">Notre approche</h1>
      <p className="text-lg text-brand-50/60 mb-16 max-w-2xl">
        Une méthodologie éprouvée, taillée pour l'écosystème Odoo. Du brief initial à l'intégration,
        nous pilotons chaque étape du recrutement en France 🇫🇷 et en Belgique 🇧🇪.
      </p>

      <div className="space-y-8 mb-16">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-6 items-start">
            <div className="text-3xl font-display font-black text-brand-amber shrink-0 w-16">{step.number}</div>
            <div className="border-l border-brand-700 pl-6 pb-8 flex-1">
              <h3 className="text-xl font-bold text-brand-50 mb-2">{step.title}</h3>
              <p className="text-brand-50/60">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-display font-black mb-8 text-brand-50">Nos engagements</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {commitments.map((c) => (
          <div key={c.title} className="bg-brand-900 border border-brand-700 rounded-lg p-6 flex gap-4">
            <div className="bg-brand-800 text-brand-amber w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
              <c.icon size={20} />
            </div>
            <div>
              <h4 className="font-bold text-brand-50 mb-1">{c.title}</h4>
              <p className="text-brand-50/60 text-sm">{c.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand-800 border border-brand-amber rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-black mb-4 text-brand-50">Prêt à lancer votre recrutement ?</h2>
        <p className="mb-6 text-brand-50/70">Décrivez votre besoin, notre équipe revient vers vous sous 24h.</p>
        <button onClick={() => setCurrentPage('contact')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
          Recruter un talent
        </button>
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    country: '',
    job_title: '',
    roles: [],
    contract_type: '',
    work_mode: '',
    diploma: '',
    field: '',
    seniority: '',
    odooCertified: '',
    odoo_skills: '',
    budget: '',
    start_date: '',
    needs: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleRoleToggle = (role) => {
    const updatedRoles = formData.roles.includes(role)
      ? formData.roles.filter(r => r !== role)
      : formData.roles.length < 2
      ? [...formData.roles, role]
      : formData.roles;
    setFormData({ ...formData, roles: updatedRoles });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.company_name.trim()) newErrors.company_name = 'Nom de l\'entreprise requis';
    if (!formData.contact_name.trim()) newErrors.contact_name = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.country) newErrors.country = 'Pays requis';
    if (!formData.job_title.trim()) newErrors.job_title = 'Intitulé du poste requis';
    if (formData.roles.length === 0) newErrors.roles = 'Sélectionnez au moins un rôle';
    if (!formData.diploma) newErrors.diploma = 'Requis';
    if (!formData.field) newErrors.field = 'Requis';
    if (!formData.seniority) newErrors.seniority = 'Requis';
    if (!formData.odooCertified) newErrors.odooCertified = 'Requis';
    if (!formData.needs.trim()) newErrors.needs = 'Décrivez votre besoin';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzabcde', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: formData.company_name,
          contact_name: formData.contact_name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          job_title: formData.job_title,
          roles: formData.roles.join(', '),
          contract_type: formData.contract_type,
          work_mode: formData.work_mode,
          diploma: formData.diploma,
          field: formData.field,
          seniority: formData.seniority,
          odooCertified: formData.odooCertified,
          odoo_skills: formData.odoo_skills,
          budget: formData.budget,
          start_date: formData.start_date,
          needs: formData.needs,
          _subject: `Nouveau brief de recrutement: ${formData.company_name} - ${formData.job_title}`,
          _from: formData.email,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ company_name: '', contact_name: '', email: '', phone: '', country: '', job_title: '', roles: [], contract_type: '', work_mode: '', diploma: '', field: '', seniority: '', odooCertified: '', odoo_skills: '', budget: '', start_date: '', needs: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-brand-900 border-2 border-brand-amber rounded-lg p-8 text-center">
          <div className="text-brand-amber mb-4 flex justify-center"><CheckCircle2 size={56} /></div>
          <h2 className="text-3xl font-display font-black text-brand-amber mb-4">Brief bien reçu !</h2>
          <p className="text-brand-50/80 text-lg mb-4">
            Merci. Un consultant DooRecruit spécialisé Odoo revient vers vous sous 24h avec une première shortlist de profils.
          </p>
          <p className="text-brand-50/60">
            En attendant, découvrez nos <button onClick={() => window.scrollTo(0, 0)} className="text-brand-amber underline font-bold">dernières offres</button> ou consultez notre blog.
          </p>
        </div>
      </div>
    );
  }

  const selectClass = (field) => `w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors[field] ? 'border-red-500' : 'border-brand-700'}`;
  const inputClass = (field) => `w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber focus:ring-2 focus:ring-brand-amber/40 ${errors[field] ? 'border-red-500' : 'border-brand-700'}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3">Search & Selection Odoo</p>
      <h1 className="text-4xl font-display font-black mb-2 text-brand-50">Confiez-nous votre recherche de talent Odoo</h1>
      <p className="text-lg text-brand-50/60 mb-2">Décrivez votre besoin, nos consultants reviennent vers vous sous 24h avec une shortlist qualifiée.</p>
      <p className="text-sm text-brand-50/40 mb-12">Recrutement en France 🇫🇷 et en Belgique 🇧🇪 — CDI, freelance et intérim</p>

      <div className="bg-brand-900 border border-brand-700 rounded-lg p-8 mb-12">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Votre entreprise */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Votre entreprise</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Nom de l'entreprise *</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  className={inputClass('company_name')}
                  placeholder="Votre entreprise"
                />
                {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Votre nom / fonction *</label>
                <input
                  type="text"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleInputChange}
                  className={inputClass('contact_name')}
                  placeholder="Ex: Sophie Durand, DRH"
                />
                {errors.contact_name && <p className="text-red-500 text-xs mt-1">{errors.contact_name}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Email professionnel *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputClass('email')}
                  placeholder="contact@entreprise.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={inputClass('phone')}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
          </div>

          {/* Le poste */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Le poste</p>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-1 text-brand-50">Intitulé du poste *</label>
              <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleInputChange}
                className={inputClass('job_title')}
                placeholder="Ex: Développeur Odoo Senior"
              />
              {errors.job_title && <p className="text-red-500 text-xs mt-1">{errors.job_title}</p>}
            </div>

            <label className="block text-sm font-bold mb-2 text-brand-50">Rôles recherchés (max 2) *</label>
            <div className="space-y-2 mb-4">
              {['Fonctionnel', 'Gestion de projet', 'Sales / Account management', 'Tech'].map((role) => (
                <label
                  key={role}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                    formData.roles.includes(role) ? 'border-brand-amber bg-brand-800' : 'border-brand-700 hover:border-brand-50/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.roles.includes(role)}
                    onChange={() => handleRoleToggle(role)}
                    className="w-4 h-4 accent-brand-amber rounded cursor-pointer"
                    disabled={formData.roles.length >= 2 && !formData.roles.includes(role)}
                  />
                  <span className="ml-2 font-medium text-brand-50 text-sm">{role}</span>
                </label>
              ))}
            </div>
            {errors.roles && <p className="text-red-500 text-xs mb-4">{errors.roles}</p>}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Pays du poste *</label>
                <select name="country" value={formData.country} onChange={handleInputChange} className={selectClass('country')}>
                  <option value="">Sélectionnez</option>
                  <option value="France">🇫🇷 France</option>
                  <option value="Belgique">🇧🇪 Belgique</option>
                  <option value="France et Belgique">🇫🇷 France et 🇧🇪 Belgique</option>
                </select>
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Type de contrat</label>
                <select name="contract_type" value={formData.contract_type} onChange={handleInputChange} className={selectClass('contract_type')}>
                  <option value="">Sélectionnez</option>
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="Freelance / Indépendant">Freelance / Indépendant</option>
                  <option value="Intérim">Intérim</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Mode de travail</label>
                <select name="work_mode" value={formData.work_mode} onChange={handleInputChange} className={selectClass('work_mode')}>
                  <option value="">Sélectionnez</option>
                  <option value="Présentiel">Présentiel</option>
                  <option value="Hybride">Hybride</option>
                  <option value="Télétravail complet">Télétravail complet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Fourchette de rémunération</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={inputClass('budget')}
                  placeholder="Ex: 45-55k€ brut annuel"
                />
              </div>
            </div>
          </div>

          {/* Formation souhaitée - mirrors candidate side */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Formation souhaitée</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Niveau de diplôme *</label>
                <select name="diploma" value={formData.diploma} onChange={handleInputChange} className={selectClass('diploma')}>
                  <option value="">Choisir</option>
                  <option value="Indifférent">Indifférent</option>
                  <option value="Néant">Néant</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Master+">Master+</option>
                </select>
                {errors.diploma && <p className="text-red-500 text-xs mt-1">{errors.diploma}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-1 text-brand-50">Domaine d'étude *</label>
                <select name="field" value={formData.field} onChange={handleInputChange} className={selectClass('field')}>
                  <option value="">Choisir</option>
                  <option value="Indifférent">Indifférent</option>
                  <option value="Business">Business</option>
                  <option value="Ingénierie">Ingénierie</option>
                  <option value="Littéraire">Littéraire</option>
                  <option value="Créatif">Créatif</option>
                  <option value="Tech/IT">Tech/IT</option>
                </select>
                {errors.field && <p className="text-red-500 text-xs mt-1">{errors.field}</p>}
              </div>
            </div>
          </div>

          {/* Expérience Odoo - mirrors candidate side */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Expérience Odoo</p>

            <label className="block text-sm font-bold mb-1 text-brand-50">Années d'expérience Odoo recherchées *</label>
            <select name="seniority" value={formData.seniority} onChange={handleInputChange} className={selectClass('seniority')}>
              <option value="">Choisir</option>
              <option value="0">0 (Débutant accepté)</option>
              <option value="< 1 an">&lt; 1 an</option>
              <option value="1-2 ans">1-2 ans</option>
              <option value="3-4 ans">3-4 ans</option>
              <option value="> 4 ans">&gt; 4 ans</option>
            </select>
            {errors.seniority && <p className="text-red-500 text-xs mt-1">{errors.seniority}</p>}

            <label className="block text-sm font-bold mb-2 mt-4 text-brand-50">Certification officielle Odoo requise ? *</label>
            <div className="space-y-2 mb-4">
              {['Oui, obligatoire', 'Non, pas obligatoire'].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                    formData.odooCertified === option ? 'border-brand-amber bg-brand-800' : 'border-brand-700 hover:border-brand-50/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="odooCertified"
                    value={option}
                    checked={formData.odooCertified === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-brand-amber cursor-pointer"
                  />
                  <span className="ml-2 font-medium text-brand-50 text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors.odooCertified && <p className="text-red-500 text-xs mb-4">{errors.odooCertified}</p>}

            <label className="block text-sm font-bold mb-1 text-brand-50">Compétences Odoo requises</label>
            <textarea
              name="odoo_skills"
              value={formData.odoo_skills}
              onChange={handleInputChange}
              className={inputClass('odoo_skills')}
              rows="3"
              placeholder="Ex: Développement backend (Python), modules ventes/stocks, PostgreSQL, API REST..."
            />
          </div>

          {/* Contexte */}
          <div className="border-t border-brand-700 pt-6">
            <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Contexte</p>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-1 text-brand-50">Date de démarrage souhaitée</label>
              <input
                type="text"
                name="start_date"
                value={formData.start_date}
                onChange={handleInputChange}
                className={inputClass('start_date')}
                placeholder="Ex: Dès que possible, Q1 2027..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1 text-brand-50">Décrivez votre besoin *</label>
              <textarea
                name="needs"
                value={formData.needs}
                onChange={handleInputChange}
                className={inputClass('needs')}
                rows="5"
                placeholder="Contexte du poste, périmètre, enjeux, contraintes particulières..."
              />
              {errors.needs && <p className="text-red-500 text-xs mt-1">{errors.needs}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition disabled:opacity-50"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer mon brief de recrutement'}
          </button>

          <p className="text-xs text-brand-50/40 text-center">
            ✓ Vos informations restent confidentielles et ne sont utilisées que pour votre recherche
          </p>
        </form>
      </div>

      {/* Infos & Avantages */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-brand-900 border border-brand-700 rounded-lg p-8">
          <h3 className="text-xl font-display font-black text-brand-50 mb-6">Pourquoi choisir DooRecruit ?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-brand-800 text-brand-amber w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="font-bold text-brand-50">France & Belgique</h4>
                <p className="text-brand-50/60 text-sm">Un vivier de talents actif dans les deux pays, sourcé et qualifié localement.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-800 text-brand-amber w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <Target size={18} />
              </div>
              <div>
                <h4 className="font-bold text-brand-50">Expertise Odoo</h4>
                <p className="text-brand-50/60 text-sm">Notre équipe connaît parfaitement l'écosystème Odoo et les compétences requises.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-800 text-brand-amber w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <h4 className="font-bold text-brand-50">Processus Rapide</h4>
                <p className="text-brand-50/60 text-sm">Shortlist sous 24h, mise en poste en 2-4 semaines en moyenne.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-800 text-brand-amber w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h4 className="font-bold text-brand-50">Garantie de Remplacement</h4>
                <p className="text-brand-50/60 text-sm">Si le candidat ne convient pas, nous en proposons un autre gratuitement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-800 border border-brand-amber rounded-lg p-8">
          <h3 className="text-xl font-display font-black text-brand-50 mb-4">Informations de contact directes</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 text-brand-amber" />
              <div>
                <p className="font-bold text-brand-50">Email</p>
                <p className="text-brand-50/70">hello@doorecruit.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-1 text-brand-amber" />
              <div>
                <p className="font-bold text-brand-50">Téléphone</p>
                <p className="text-brand-50/70">+33 (0)1 23 45 67 89</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Linkedin size={20} className="mt-1 text-brand-amber" />
              <div>
                <p className="font-bold text-brand-50">LinkedIn</p>
                <p className="text-brand-50/70">linkedin.com/company/doorecruit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-brand-900 border border-brand-700 rounded-lg p-8 hover:border-brand-amber transition text-center">
      <div className="text-brand-amber mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-brand-50">{title}</h3>
      <p className="text-brand-50/60">{description}</p>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="bg-brand-950 rounded-lg p-6 border border-brand-700 hover:border-brand-amber transition">
      <h3 className="text-lg font-bold text-brand-50 mb-2">{job.title}</h3>
      <p className="text-brand-50/60 mb-4">{job.sector} • {job.location}</p>
      <p className="text-xl font-bold text-brand-amber">{job.salary}</p>
    </div>
  );
}
