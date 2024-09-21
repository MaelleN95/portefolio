# Portfolio de Maëlle Nioche

![banner-portfolio](https://github.com/user-attachments/assets/c0b9b0fd-cc93-40cb-a963-b29a6e4716cb)

## Sommaire

- [Description](#description)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Screenshots](#screenshots)
- [Note de synthèse](#note-de-synthèse)
- [Auteur](#auteur)

## Description

Ce projet est un site vitrine personnel développé pour présenter mon portfolio. Il met en avant mes projets, mes compétences et mon parcours professionnel.

## Installation

1. Clonez le repository :
   ```bash
   git clone https://github.com/MaelleN95/portfolio.git
2. Installer les dépendances :
   ```bash
   cd portfolio
   npm i
3. Lancer l'application en mode développement :
   ```bash
   npm run dev

## Utilisation

1. Accédez à l'adresse du [site en ligne](https://maelle-nioche.vercel.app/) ou à [`http://localhost:5173/`](http://localhost:5173/) si vous utilisez le serveur local.
2. Explorez les différentes sections : à propos, mes compétences, mon parcours professionnel et mes réalisations.
3. Remplissez le formulaire de contact pour me joindre directement.

## Technologies utilisées

### Frontend
- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **Vite** : Outil de construction et de développement rapide pour les projets React.
- **Sass** : Préprocesseur CSS pour une gestion plus efficace des styles.
- **Vercel** : Plateforme de déploiement pour héberger le site.

### Backend
- **Node.js** : Environnement d'exécution JavaScript pour le serveur.
- **Express** : Framework pour Node.js permettant de créer des applications web et API.
- **MongoDB** : Base de données NoSQL pour le stockage des données.
- **Mongoose** : Bibliothèque pour MongoDB facilitant la gestion des données et les requêtes.

## Structure du projet

- `public/` : Contient les fichiers publics et les ressources de l'application.
- `src/assets/` : Contient les fichiers statiques tels que les images et les documents (e.g., CV).
- `src/components/` : Composants réutilisables du site, tels que les cartes de projet et les éléments UI.
- `src/lib/` : Contient les appels API et les hooks personnalisés.
- `src/pages/` : Pages principales du site, comme la page d'accueil et les pages de projets.
- `src/sections/` : Sections spécifiques du site regroupant les composants et les styles associés.
- `src/styles/` : Fichiers de style SASS pour la mise en forme du site.
- `src/utils/` : Utilitaires pour les routes API et les composants généraux.
- `src/Routing.jsx` : Gestion des routes et des erreurs.
- `src/main.jsx` : Point d'entrée principal de l'application.

## Screenshots

### Page d'accueil
|![Page-daccueil](https://github.com/user-attachments/assets/8e48bf76-4e88-49a7-968c-419da2618c09)|
|-|

### Page de présentation d'un projet
|![Capture d’écran_21-9-2024_1668_maelle-nioche vercel app](https://github.com/user-attachments/assets/e2ca7100-1679-466b-a89e-cb187852b4aa)|
|-|

## Note de synthèse

### Spécifications fonctionnelles

| Fonctionnalité                 | Description                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------|
| **Affichage des projets** | Les projets sont affichés dynamiquement.              |
| **Formulaire de contact** | Un formulaire de contact permet aux visiteurs d'envoyer des messages directement depuis le site. |
| **Conception responsive** | Le site est conçu pour être responsive et s'adapte aux différentes tailles d'écran.             |

### Spécifications techniques

| Critères techniques                      | Détails                                                                         |
|----------------------------|------------------------------------------------------------------------------------------------------|
| **Formulaire de contact**   | Le formulaire utilise une solution backend pour l'envoi des messages (Nodemailer).         |
| **Compatibilité navigateurs** | Le site est compatible avec les dernières versions de Chrome, Firefox, Safari, et Edge.             |


## Auteur

- [Maëlle Nioche](https://www.linkedin.com/in/maelle-nioche/)
