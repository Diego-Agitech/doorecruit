import React, { useState } from 'react';
import { CheckCircle, Upload } from 'lucide-react';

export default function OdooTalentForm() {
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
    cv: null,
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
    if (file) {
      setFormData({
        ...formData,
        cv: file,
        cvFileName: file.name
      });
    }
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
      const submitData = {
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
      };

      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', country: '',
          diploma: '', field: '', odooExperience: '', odooCertified: '', roles: [], cv: null, cvFileName: ''
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Succès ! 🎉</h2>
          <p className="text-gray-600 mb-4">
            Merci <strong>{formData.firstName}</strong>, votre candidature a été envoyée.
          </p>
          <p className="text-gray-600">
            Notre équipe vous contactera dans les 48 heures.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Rejoignez nos talents Odoo</h1>
          <p className="text-blue-100">Belgique 🇧🇪 • France 🇫🇷</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Infos Personnelles */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">📋 Vos infos</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Jean"
                  />
                  {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Dupont"
                  />
                  {errors.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="jean@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="+32 4XX XXX XXX"
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Pays *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                    errors.country ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="">Choisir</option>
                  <option value="Belgique">🇧🇪 Belgique</option>
                  <option value="France">🇫🇷 France</option>
                </select>
                {errors.country && <p className="text-red-600 text-xs mt-1">{errors.country}</p>}
              </div>
            </div>

            {/* Formation */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">🎓 Formation</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Niveau de diplôme *</label>
                  <select
                    name="diploma"
                    value={formData.diploma}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.diploma ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Choisir</option>
                    <option value="Néant">Néant</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Master+">Master+</option>
                  </select>
                  {errors.diploma && <p className="text-red-600 text-xs mt-1">{errors.diploma}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Domaine d'étude *</label>
                  <select
                    name="field"
                    value={formData.field}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                      errors.field ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Choisir</option>
                    <option value="Business">Business</option>
                    <option value="Ingénierie">Ingénierie</option>
                    <option value="Littéraire">Littéraire</option>
                    <option value="Créatif">Créatif</option>
                    <option value="Tech/IT">Tech/IT</option>
                  </select>
                  {errors.field && <p className="text-red-600 text-xs mt-1">{errors.field}</p>}
                </div>
              </div>
            </div>

            {/* Expérience Odoo */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">💼 Expérience</h3>

              <label className="block text-sm font-bold text-gray-700 mb-2">Expérience Odoo *</label>
              <select
                name="odooExperience"
                value={formData.odooExperience}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border-2 rounded-lg text-sm focus:outline-none transition ${
                  errors.odooExperience ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                }`}
              >
                <option value="">Choisir votre expérience</option>
                <option value="0">0 (Débutant)</option>
                <option value="< 1 an">&lt; 1 an</option>
                <option value="1-2 ans">1-2 ans</option>
                <option value="3-4 ans">3-4 ans</option>
                <option value="> 4 ans">&gt; 4 ans</option>
              </select>
              {errors.odooExperience && <p className="text-red-600 text-xs mt-1">{errors.odooExperience}</p>}

              <label className="block text-sm font-bold text-gray-700 mb-2 mt-4">
                Certification officielle Odoo (3 dernières années) *
              </label>
              <div className="space-y-2">
                {['Oui, je suis certifié', 'Non'].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition ${
                      formData.odooCertified === option
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="odooCertified"
                      value={option}
                      checked={formData.odooCertified === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 cursor-pointer"
                    />
                    <span className="ml-2 font-medium text-gray-900 text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {errors.odooCertified && <p className="text-red-600 text-xs mt-2">{errors.odooCertified}</p>}
            </div>

            {/* Rôles */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">🎯 Rôles (Max 2)</h3>

              <div className="space-y-2">
                {['Fonctionnel', 'Gestion de projet', 'Sales / Account management', 'Tech'].map((role) => (
                  <label
                    key={role}
                    className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition ${
                      formData.roles.includes(role)
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.roles.includes(role)}
                      onChange={() => handleRoleToggle(role)}
                      className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                      disabled={formData.roles.length >= 2 && !formData.roles.includes(role)}
                    />
                    <span className="ml-2 font-medium text-gray-900 text-sm">{role}</span>
                  </label>
                ))}
              </div>
              {errors.roles && <p className="text-red-600 text-xs mt-2">{errors.roles}</p>}
            </div>

            {/* CV */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">📄 CV (Optionnel)</h3>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition">
                <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                <label className="cursor-pointer">
                  <span className="text-sm font-medium text-blue-600">Choisir un fichier</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC ou DOCX</p>
                {formData.cvFileName && (
                  <p className="text-xs text-green-600 mt-2 font-medium">✓ {formData.cvFileName}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition disabled:opacity-50"
            >
              {loading ? '⏳ Envoi...' : '✓ Envoyer ma candidature'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              ✓ Vos données sont sécurisées et protégées
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
