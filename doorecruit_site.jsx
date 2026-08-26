import React, { useState } from 'react';
import { Menu, X, Search, Briefcase, Users, BookOpen, ChevronRight, Star, ArrowRight, Mail, Phone, Linkedin } from 'lucide-react';

export default function DooRecruit() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [filterRole, setFilterRole] = useState('all');
  const [filterLevel, setFilterLevel] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Développeur Odoo Senior',
      company: 'TechCorp France',
      location: 'Paris',
      level: 'senior',
      salary: '50-65k€',
      modules: ['Python', 'PostgreSQL', 'Développement Backend'],
      description: 'Nous recherchons un développeur Odoo expérimenté pour rejoindre notre équipe.',
      image: '🏢'
    },
    {
      id: 2,
      title: 'Consultant Fonctionnel Odoo',
      company: 'ERP Solutions',
      location: 'Lyon',
      level: 'mid',
      salary: '40-55k€',
      modules: ['Ventes', 'Stocks', 'Comptabilité'],
      description: 'Vous allez accompagner nos clients dans leurs projets de transformation Odoo.',
      image: '💼'
    },
    {
      id: 3,
      title: 'Chef de Projet Odoo',
      company: 'Digital Consulting',
      location: 'Toulouse',
      level: 'mid',
      salary: '45-60k€',
      modules: ['Gestion de projet', 'Agile', 'Relation client'],
      description: 'Piloter des projets Odoo complets de la conception à la mise en production.',
      image: '📊'
    },
    {
      id: 4,
      title: 'Développeur Odoo Junior',
      company: 'StartUp IT',
      location: 'Bordeaux',
      level: 'junior',
      salary: '28-35k€',
      modules: ['Python', 'Javascript', 'API'],
      description: 'Débuter votre carrière dans un environnement dynamique et bienveillant.',
      image: '🚀'
    },
    {
      id: 5,
      title: 'Specialist Intégration Odoo',
      company: 'Integration Pro',
      location: 'Nantes',
      level: 'senior',
      salary: '55-70k€',
      modules: ['Intégrations API', 'Webhooks', 'Synchronisation données'],
      description: 'Expertiser les intégrations complexes entre Odoo et systèmes tiers.',
      image: '🔗'
    },
    {
      id: 6,
      title: 'Admin Odoo',
      company: 'Enterprise Solutions',
      location: 'Lille',
      level: 'junior',
      salary: '30-38k€',
      modules: ['Administration système', 'Utilisateurs', 'Maintenance'],
      description: 'Gérer et maintenir l\'infrastructure Odoo de nos clients.',
      image: '⚙️'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Les tendances du recrutement Odoo en 2026',
      date: '15 août 2026',
      category: 'Marché',
      excerpt: 'Découvrez les compétences les plus demandées et les salaires tendance.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Comment progresser de développeur à lead Odoo',
      date: '12 août 2026',
      category: 'Carrière',
      excerpt: 'Roadmap pour évolver dans votre carrière technique Odoo.',
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Odoo 18 : les nouveautés pour les développeurs',
      date: '8 août 2026',
      category: 'Technique',
      excerpt: 'Aperçu des nouvelles features de la dernière version.',
      icon: '🆕'
    },
    {
      id: 4,
      title: 'Préparation aux entretiens Odoo : notre guide complet',
      date: '5 août 2026',
      category: 'Conseils',
      excerpt: 'Questions techniques, case studies, et conseils pratiques.',
      icon: '💡'
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
    return true;
  });

  const renderPage = () => {
    switch(currentPage) {
      case 'jobs':
        return <JobsPage jobs={filteredJobs} filterRole={filterRole} filterLevel={filterLevel} setFilterRole={setFilterRole} setFilterLevel={setFilterLevel} />;
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
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-brand-50">
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
            <button onClick={() => setCurrentPage('jobs')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition flex items-center justify-center gap-2">
              Découvrir les offres <ArrowRight size={20} />
            </button>
            <button onClick={() => setCurrentPage('talents')} className="border border-brand-50/30 text-brand-50 px-8 py-3 rounded-lg font-bold hover:border-brand-amber hover:text-brand-amber transition flex items-center justify-center gap-2">
              Je cherche un rôle <ArrowRight size={20} />
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

      {/* Featured Jobs */}
      <section className="py-16 px-4 bg-brand-900 border-y border-brand-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-black mb-12 text-brand-50">Dernières opportunités</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[0,1,2,3].map((i) => (
              <JobCard key={i} job={{
                title: ['Développeur Odoo Senior', 'Consultant Fonctionnel', 'Chef de Projet', 'Développeur Junior'][i],
                company: ['TechCorp', 'ERP Solutions', 'Digital Consulting', 'StartUp IT'][i],
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

function JobsPage({ jobs, filterRole, filterLevel, setFilterRole, setFilterLevel }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-black mb-8 text-brand-50">Offres d'emploi</h1>

      {/* Filters */}
      <div className="bg-brand-900 border border-brand-700 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Niveau</label>
            <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="w-full p-2 bg-brand-950 border border-brand-700 rounded text-brand-50 focus:outline-none focus:border-brand-amber">
              <option value="all">Tous les niveaux</option>
              <option value="junior">Junior</option>
              <option value="mid">Intermédiaire</option>
              <option value="senior">Senior</option>
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
                <p className="text-brand-50/60">{job.company}</p>
              </div>
              <div className="text-3xl">{job.image}</div>
            </div>
            <p className="text-brand-50/70 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.modules.slice(0, 2).map((module, i) => (
                <span key={i} className="bg-brand-800 text-brand-amber-light text-xs px-3 py-1 rounded-full">
                  {module}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm text-brand-50/60">
              <span>{job.location}</span>
              <span className="font-bold text-brand-amber">{job.salary}</span>
            </div>
            <button className="mt-4 w-full bg-brand-amber text-brand-950 py-2 rounded-lg hover:bg-brand-amber-light font-bold transition">
              Postuler →
            </button>
          </div>
        ))}
      </div>
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
            <div className="text-4xl mb-4">{article.icon}</div>
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
          <div className="text-5xl mb-4">✅</div>
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber ${errors.firstName ? 'border-red-500' : 'border-brand-700'}`}
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber ${errors.lastName ? 'border-red-500' : 'border-brand-700'}`}
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber ${errors.email ? 'border-red-500' : 'border-brand-700'}`}
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber ${errors.phone ? 'border-red-500' : 'border-brand-700'}`}
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
                className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber ${errors.country ? 'border-red-500' : 'border-brand-700'}`}
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber ${errors.diploma ? 'border-red-500' : 'border-brand-700'}`}
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
                  className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber ${errors.field ? 'border-red-500' : 'border-brand-700'}`}
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
              className={`w-full p-3 bg-brand-950 border rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber ${errors.odooExperience ? 'border-red-500' : 'border-brand-700'}`}
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
            {loading ? '⏳ Envoi...' : '✓ Envoyer ma candidature'}
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
    { icon: '🔒', title: 'Confidentialité', description: 'Vos données et celles des candidats restent strictement confidentielles.' },
    { icon: '🎯', title: 'Expertise sectorielle', description: 'Une équipe qui maîtrise l\'écosystème Odoo, pas un cabinet généraliste.' },
    { icon: '⚡', title: 'Réactivité', description: 'Shortlist sous 24 à 72h, retours transparents à chaque étape.' },
    { icon: '🌍', title: 'France & Belgique', description: 'Un vivier de talents actif et qualifié dans les deux pays.' }
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
            <div className="text-2xl">{c.icon}</div>
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
    job_title: '',
    seniority: '',
    contract_type: '',
    country: '',
    work_mode: '',
    odoo_skills: '',
    budget: '',
    start_date: '',
    needs: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          job_title: formData.job_title,
          seniority: formData.seniority,
          contract_type: formData.contract_type,
          country: formData.country,
          work_mode: formData.work_mode,
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
        setFormData({ company_name: '', contact_name: '', email: '', phone: '', job_title: '', seniority: '', contract_type: '', country: '', work_mode: '', odoo_skills: '', budget: '', start_date: '', needs: '' });
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
          <div className="text-5xl mb-4">✅</div>
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <p className="uppercase tracking-widest text-sm text-brand-amber font-bold mb-3">Search & Selection Odoo</p>
      <h1 className="text-4xl font-display font-black mb-2 text-brand-50">Confiez-nous votre recherche de talent Odoo</h1>
      <p className="text-lg text-brand-50/60 mb-2">Décrivez votre besoin, nos consultants reviennent vers vous sous 24h avec une shortlist qualifiée.</p>
      <p className="text-sm text-brand-50/40 mb-12">Recrutement en France 🇫🇷 et en Belgique 🇧🇪 — CDI, freelance et intérim</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-brand-900 border border-brand-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-50">Exprimez votre besoin</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-brand-50">Nom de l'entreprise *</label>
                <input
                  type="text"
                  name="company_name"
                  required
                  value={formData.company_name}
                  onChange={(e) => setFormData({...formData, company_name: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-brand-50">Votre nom / fonction *</label>
                <input
                  type="text"
                  name="contact_name"
                  required
                  value={formData.contact_name}
                  onChange={(e) => setFormData({...formData, contact_name: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  placeholder="Ex: Sophie Durand, DRH"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-brand-50">Email professionnel *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  placeholder="contact@entreprise.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-brand-50">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>

            <div className="border-t border-brand-700 pt-6">
              <p className="text-xs uppercase tracking-widest text-brand-50/40 font-bold mb-4">Le poste recherché</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Intitulé du poste *</label>
                  <input
                    type="text"
                    name="job_title"
                    required
                    value={formData.job_title}
                    onChange={(e) => setFormData({...formData, job_title: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                    placeholder="Ex: Développeur Odoo Senior"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Années d'expérience Odoo recherchées *</label>
                  <select
                    name="seniority"
                    required
                    value={formData.seniority}
                    onChange={(e) => setFormData({...formData, seniority: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Moins de 1 an">Moins de 1 an</option>
                    <option value="1-2 ans">1-2 ans</option>
                    <option value="2-5 ans">2-5 ans</option>
                    <option value="5-10 ans">5-10 ans</option>
                    <option value="Plus de 10 ans">Plus de 10 ans</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Type de contrat *</label>
                  <select
                    name="contract_type"
                    required
                    value={formData.contract_type}
                    onChange={(e) => setFormData({...formData, contract_type: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="CDI">CDI</option>
                    <option value="CDD">CDD</option>
                    <option value="Freelance / Indépendant">Freelance / Indépendant</option>
                    <option value="Intérim">Intérim</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Pays du poste *</label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Belgique">🇧🇪 Belgique</option>
                    <option value="France et Belgique">🇫🇷 France et 🇧🇪 Belgique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Mode de travail</label>
                  <select
                    name="work_mode"
                    value={formData.work_mode}
                    onChange={(e) => setFormData({...formData, work_mode: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Présentiel">Présentiel</option>
                    <option value="Hybride">Hybride</option>
                    <option value="Télétravail complet">Télétravail complet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-brand-50">Fourchette de rémunération</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                    placeholder="Ex: 45-55k€ brut annuel"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-brand-50">Compétences Odoo requises *</label>
                <textarea
                  name="odoo_skills"
                  required
                  value={formData.odoo_skills}
                  onChange={(e) => setFormData({...formData, odoo_skills: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  rows="4"
                  placeholder="Ex: Développement backend (Python), modules ventes/stocks, PostgreSQL, API REST..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-bold mb-2 text-brand-50">Date de démarrage souhaitée</label>
                <input
                  type="text"
                  name="start_date"
                  value={formData.start_date}
                  onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  placeholder="Ex: Dès que possible, Q1 2027..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-bold mb-2 text-brand-50">Décrivez votre besoin *</label>
                <textarea
                  name="needs"
                  required
                  value={formData.needs}
                  onChange={(e) => setFormData({...formData, needs: e.target.value})}
                  className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                  rows="5"
                  placeholder="Contexte du poste, périmètre, enjeux, contraintes particulières..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition disabled:opacity-50"
            >
              {loading ? '⏳ Envoi en cours...' : '✓ Envoyer mon brief de recrutement'}
            </button>

            <p className="text-xs text-brand-50/40 text-center">
              ✓ Vos informations restent confidentielles et ne sont utilisées que pour votre recherche
            </p>
          </form>
        </div>

        {/* Infos & Avantages */}
        <div>
          <div className="bg-brand-900 border border-brand-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-display font-black text-brand-50 mb-6">Pourquoi choisir DooRecruit ?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <h4 className="font-bold text-brand-50">France & Belgique</h4>
                  <p className="text-brand-50/60">Un vivier de talents actif dans les deux pays, sourcé et qualifié localement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-bold text-brand-50">Expertise Odoo</h4>
                  <p className="text-brand-50/60">Notre équipe connaît parfaitement l'écosystème Odoo et les compétences requises.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-bold text-brand-50">Processus Rapide</h4>
                  <p className="text-brand-50/60">Shortlist sous 24h, mise en poste en 2-4 semaines en moyenne.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🔍</div>
                <div>
                  <h4 className="font-bold text-brand-50">Pré-sélection Technique</h4>
                  <p className="text-brand-50/60">Nous vérifions les compétences techniques de chaque candidat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h4 className="font-bold text-brand-50">Garantie de Remplacement</h4>
                  <p className="text-brand-50/60">Si le candidat ne convient pas, nous en proposons un autre gratuitement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-800 border border-brand-amber rounded-lg p-8">
            <h3 className="text-2xl font-display font-black text-brand-50 mb-4">Informations de contact directes</h3>
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
      <p className="text-brand-50/60 mb-4">{job.company} • {job.location}</p>
      <p className="text-xl font-bold text-brand-amber">{job.salary}</p>
    </div>
  );
}
