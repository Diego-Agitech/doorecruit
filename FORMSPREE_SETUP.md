# Configuration Formspree pour DooRecruit

Ce guide explique comment configurer Formspree pour gérer les formulaires d'inscription (talents et clients) du site DooRecruit.

## 🎯 À quoi sert Formspree ?

Formspree gère les soumissions de formulaires sans backend. Les soumissions sont envoyées directement par email.

## 📋 Configuration Pas à Pas

### 1️⃣ Créer un compte Formspree
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte avec votre email professionnel
3. Vérifiez votre email

### 2️⃣ Créer le formulaire TALENTS
1. Dans le dashboard, "Create a new form"
2. Nom : `Inscription Talents`
3. Récupérez le Form ID (ex: `f/xyzazyab`)
4. Remplacez dans `doorecruit_site.jsx` (fonction `TalentsPage`) :
```javascript
const response = await fetch('https://formspree.io/f/xyzazyab', {
```

### 3️⃣ Créer le formulaire CONTACT
1. "Create a new form"
2. Nom : `Demande Recrutement`
3. Récupérez le Form ID (ex: `f/xyzabcde`)
4. Remplacez dans `doorecruit_site.jsx` (fonction `ContactPage`) :
```javascript
const response = await fetch('https://formspree.io/f/xyzabcde', {
```

## 🔧 Tester les formulaires

```bash
npm install
npm run dev
```

Puis allez sur `http://localhost:3000` et testez les deux formulaires.

## 📧 Champs spéciaux Formspree

```javascript
{
  "_subject": "Sujet de l'email",
  "_from": formData.email,
  "_cc": "secondary@email.com",
  "_reply": formData.email
}
```

## 💰 Tarification

| Plan | Prix | Soumissions/mois |
|------|------|------------------|
| Free | 0€ | 50 |
| Basic | 25$/mois | 1000 |
| Pro | 99$/mois | Illimité |

## 🆘 Troubleshooting

- Vérifiez le Form ID dans le code
- Regardez le dossier SPAM
- Ouvrez la console navigateur (F12)
- Testez avec curl :
```bash
curl -X POST https://formspree.io/f/YOUR_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com"}'
```
