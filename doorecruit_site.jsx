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
              <div className="text-2xl font-black tracking-tight text-brand-50">
                DOO<span className="text-brand-amber">RECRUIT</span>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => setCurrentPage('home')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Accueil</button>
              <button onClick={() => setCurrentPage('jobs')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Offres</button>
              <button onClick={() => setCurrentPage('blog')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Blog</button>
              <button onClick={() => setCurrentPage('talents')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Je cherche un rôle</button>
              <button onClick={() => setCurrentPage('contact')} className="text-brand-50/70 hover:text-brand-amber font-medium transition">Contact</button>
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
              <button onClick={() => { setCurrentPage('talents'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Je cherche un rôle</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="block w-full text-left text-brand-50/70 hover:text-brand-amber font-medium py-2">Contact</button>
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
              <div className="text-xl font-black mb-3">
                DOO<span className="text-brand-amber">RECRUIT</span>
              </div>
              <p className="text-brand-50/50">Le match juste. Sans blabla.</p>
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
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-brand-50">
            Recrutez les meilleurs talents Odoo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brand-50/60">
            L'agence spécialisée qui connecte les entreprises aux experts Odoo
          </p>
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
              <div className="text-4xl font-black text-brand-amber mb-2">500+</div>
              <p className="text-brand-50/60">Talents Odoo dans notre réseau</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-brand-amber mb-2">120+</div>
              <p className="text-brand-50/60">Placements réussis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-brand-amber mb-2">95%</div>
              <p className="text-brand-50/60">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-brand-50">Nos Services</h2>
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
          <h2 className="text-4xl font-black mb-12 text-brand-50">Dernières opportunités</h2>
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
          <h2 className="text-3xl font-black mb-6 text-brand-50">Prêt à trouver votre prochain talent Odoo ?</h2>
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
      <h1 className="text-4xl font-black mb-8 text-brand-50">Offres d'emploi</h1>

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
      <h1 className="text-4xl font-black mb-12 text-brand-50">Blog & Ressources Odoo</h1>
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
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    location: '',
    linkedin: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xyzazyab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          experience: formData.experience,
          skills: formData.skills,
          linkedin: formData.linkedin,
          _subject: `Nouvelle inscription talent: ${formData.name}`,
          _from: formData.email,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', skills: '', experience: '', location: '', linkedin: '' });
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
          <h2 className="text-3xl font-black text-brand-amber mb-4">Inscription réussie !</h2>
          <p className="text-brand-50/80 text-lg mb-4">
            Merci de votre inscription. Notre équipe va examiner votre profil et vous contactera dans les 48 heures avec les meilleures opportunités adaptées à vos compétences.
          </p>
          <p className="text-brand-50/60">
            En attendant, consultez notre <button onClick={() => window.location.reload()} className="text-brand-amber underline font-bold">blog</button> pour les dernières tendances Odoo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-2 text-brand-50">Rejoignez notre base de talents</h1>
      <p className="text-lg text-brand-50/60 mb-2">Enregistrez votre profil et découvrez les meilleures opportunités Odoo.</p>
      <p className="text-brand-50/40 mb-8">⏱️ 5 minutes pour vous inscrire • 📧 Nous vous contacterons rapidement avec les bonnes offres</p>

      <div className="bg-brand-900 border border-brand-700 rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-brand-50">Nom complet *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-brand-50">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                placeholder="jean@example.com"
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

            <div>
              <label className="block text-sm font-bold mb-2 text-brand-50">Localisation</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                placeholder="Paris, Île-de-France"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Profil LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
              className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
              placeholder="https://linkedin.com/in/jeandupont"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Vos compétences Odoo *</label>
            <textarea
              name="skills"
              required
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
              rows="4"
              placeholder="Ex: Développement backend (Python), modules ventes/stocks, PostgreSQL, API REST..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-brand-50">Années d'expérience Odoo *</label>
            <select
              name="experience"
              required
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 focus:outline-none focus:border-brand-amber"
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="Moins de 1 an">Moins de 1 an</option>
              <option value="1-2 ans">1-2 ans</option>
              <option value="2-5 ans">2-5 ans</option>
              <option value="5-10 ans">5-10 ans</option>
              <option value="Plus de 10 ans">Plus de 10 ans</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition disabled:opacity-50"
          >
            {loading ? '⏳ Envoi en cours...' : '✓ S\'inscrire à notre talent pool'}
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
      <h1 className="text-4xl font-black mb-8 text-brand-50">À propos de DooRecruit</h1>

      <div className="bg-brand-900 border border-brand-700 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-brand-50">Notre mission</h2>
        <p className="text-brand-50/70 text-lg mb-4">
          Chez DooRecruit, nous croyons que le recrutement Odoo mérite une expertise spécialisée.
          Notre mission est de connecter les meilleurs talents Odoo avec les entreprises qui les cherchent,
          en créant des matches authentiques et durables.
        </p>
        <p className="text-brand-50/70 text-lg">
          Nous comprenons la complexité de recruter pour l'écosystème Odoo - c'est pourquoi notre équipe
          possède une expertise technique approfondie combinée à un vrai talent pour identifier les candidats idéaux.
        </p>
      </div>

      <h2 className="text-3xl font-black mb-8 text-brand-50">Témoignages</h2>
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
        <h2 className="text-2xl font-black mb-4 text-brand-50">Vous cherchez à recruter?</h2>
        <p className="mb-6 text-brand-50/70">Contactez notre équipe pour discuter de vos besoins.</p>
        <button onClick={() => setCurrentPage('contact')} className="bg-brand-amber text-brand-950 px-8 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition">
          Nous contacter
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
          needs: formData.needs,
          _subject: `Nouvelle demande de DooRecruit: ${formData.company_name}`,
          _from: formData.email,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ company_name: '', contact_name: '', email: '', phone: '', needs: '' });
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
          <h2 className="text-3xl font-black text-brand-amber mb-4">Message reçu !</h2>
          <p className="text-brand-50/80 text-lg mb-4">
            Merci de nous avoir contactés. Notre équipe va examiner votre demande et vous répondra dans les 24 heures.
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
      <h1 className="text-4xl font-black mb-2 text-brand-50">Recrutez vos talents Odoo</h1>
      <p className="text-lg text-brand-50/60 mb-12">Contactez notre équipe pour discuter de vos besoins de recrutement spécialisés Odoo.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div className="bg-brand-900 border border-brand-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-brand-50">Nous contacter</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-sm font-bold mb-2 text-brand-50">Votre nom *</label>
              <input
                type="text"
                name="contact_name"
                required
                value={formData.contact_name}
                onChange={(e) => setFormData({...formData, contact_name: e.target.value})}
                className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-brand-50">Email *</label>
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

            <div>
              <label className="block text-sm font-bold mb-2 text-brand-50">Décrivez vos besoins de recrutement *</label>
              <textarea
                name="needs"
                required
                value={formData.needs}
                onChange={(e) => setFormData({...formData, needs: e.target.value})}
                className="w-full p-3 bg-brand-950 border border-brand-700 rounded-lg text-brand-50 placeholder-brand-50/30 focus:outline-none focus:border-brand-amber"
                rows="6"
                placeholder="Ex: Nous recherchons 2 développeurs Odoo seniors avec expérience en modules ventes/stocks pour un projet de 6 mois..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-amber text-brand-950 py-3 rounded-lg font-bold hover:bg-brand-amber-light transition disabled:opacity-50"
            >
              {loading ? '⏳ Envoi en cours...' : '✓ Envoyer ma demande'}
            </button>
          </form>
        </div>

        {/* Infos & Avantages */}
        <div>
          <div className="bg-brand-900 border border-brand-700 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-black text-brand-50 mb-6">Pourquoi choisir DooRecruit ?</h3>
            <div className="space-y-4">
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
                  <p className="text-brand-50/60">Mise en poste en 2-4 semaines en moyenne.</p>
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
                  <h4 className="font-bold text-brand-50">Guarantee Satisfaction</h4>
                  <p className="text-brand-50/60">Si le candidat ne convient pas, nous en proposons un autre gratuitement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-800 border border-brand-amber rounded-lg p-8">
            <h3 className="text-2xl font-black text-brand-50 mb-4">Informations de contact directes</h3>
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
