// ============================================================
// Tout le contenu du portfolio est ici : modifie ce fichier
// pour mettre à jour le site sans toucher aux composants.
// ============================================================

export const profile = {
  firstName: 'Mathilde',
  lastName: 'Le Goff',
  status: "Disponible · stage de fin d'études · 6 mois · fin janvier 2027",
  email: 'mathilde.le_goff@outlook.fr',
  linkedin: 'https://www.linkedin.com/', // TODO : lien vers ton profil
  cv: 'CV-Mathilde-Le-Goff.pdf',
  location: 'Basée en région parisienne.',
  traits: ['Décidée', 'Proactive', 'Sociable', 'Leadership', 'Gestion de crise'],
};

export const techMarquee = [
  'STM32', 'Langage C', 'CAN', 'FPGA', 'Linux', 'React',
  'JavaScript', 'Python', 'EBIOS RM', 'Analyse de risques', 'IHM', 'Java',
];

export const stats = [
  { num: '4', label: "stages en entreprise, de l'industriel à la start-up" },
  { num: '6', unit: 'mois', label: "d'expérience à l'international (Munich)" },
  { num: 'C1', label: 'anglais & espagnol' },
];

export const sectors = ['Aéronautique', 'Défense', 'Ferroviaire', 'Automobile', 'Énergie'];

export const pillars = [
  { title: 'Systèmes embarqués', text: 'Microcontrôleurs STM32 & Arduino, C, FPGA, protocoles CAN / IP / Ethernet, Linux.' },
  { title: 'Logiciel & IHM', text: 'Interfaces utilisateurs en React et JavaScript, outillage, Python, Java, Android.' },
  { title: 'Cybersécurité', text: 'Analyse des risques, gestion des menaces, méthode EBIOS.' },
];

export const experiences = [
  {
    company: 'BMW AG',
    dates: 'Août 2025 — Janv. 2026',
    place: 'Munich, DE',
    role: 'Stagiaire — Construction sous-véhicules',
    text: "Développement d'interfaces utilisateurs et amélioration des outils associés aux simulateurs de conduite du Centre de Simulation et de Virtualisation de BMW.",
    tags: ['IHM', 'Simulateurs', 'Outillage', 'International'],
  },
  {
    company: 'Hyliko Trucks',
    dates: 'Mars — Juin 2025',
    place: 'Saint-Priest, FR',
    role: 'Stagiaire ingénieure — Stratégie diagnostic véhicule, fiabilisation & validation',
    text: "Création d'une nouvelle IHM en JavaScript sur un logiciel propriétaire lié à l'outil matériel. Identification des axes d'amélioration, définition des besoins et conception d'un outil sur mesure pour optimiser l'interaction utilisateur-machine.",
    tags: ['JavaScript', 'IHM', 'Diagnostic', 'Recueil de besoins'],
  },
  {
    company: 'Stellantis',
    dates: 'Mai — Août 2024',
    place: 'Poissy, FR',
    role: 'Stagiaire — Ingénierie safety véhicules & crash',
    text: "Projet d'étude « Small Overlap : analyse de données et configuration IA ». Analyse de la réaction au choc de véhicules de différents marchés — étude présentée aux directions américaines, françaises et chinoises.",
    tags: ['Data', 'IA', 'Safety', 'Présentation direction'],
  },
  {
    company: 'Renault Retail Group',
    dates: 'Juillet 2022',
    place: 'Guyancourt, FR',
    role: 'Stagiaire — Architecture automobile & dépôt de brevet',
    text: "Membre de l'équipe architecture et dépôt de brevet. Réalisation de deux dossiers de projets innovants.",
    tags: ['Innovation', 'Brevets', 'Conception'],
  },
];

export const projects = [
  {
    title: 'Smart Trach',
    context: 'PROSE',
    kind: 'Cheffe de projet',
    text: "Projet d'équipe mené de bout en bout : pilotage, application Android, développement C et démarche test / qualité.",
    tags: ['Gestion de projet', 'Android', 'C', 'Test & qualité'],
    featured: true,
  },
  { title: 'Domoteek', context: 'ESEO', kind: 'Web + Embarqué', text: 'Solution domotique alliant partie embarquée et interface web.', tags: ['C', 'HTML', 'JS'] },
  { title: 'Éthylomètre', context: 'ESEO', kind: 'Électronique numérique', text: "Conception d'un éthylomètre sur microcontrôleur STM32.", tags: ['STM32', 'C'] },
  { title: 'Elite Volley Club', context: 'ESEO', kind: 'Web', text: 'Site web pour un club de volley, développé en React.', tags: ['React', 'JavaScript', 'HTML'] },
  { title: 'Radar de recul', context: 'ESEO', kind: 'Électronique analogique', text: "Conception d'un radar de recul en électronique analogique.", tags: ['Analogique', 'Capteurs'] },
  { title: 'Jeu du dinosaure', context: 'ESEO', kind: 'Algorithmique', text: 'Réimplémentation du célèbre jeu en Python.', tags: ['Python', 'Algorithmique'] },
];

export const skills = [
  { group: 'Embarqué', items: ['STM32', 'Arduino', 'C', 'FPGA', 'CAN', 'IP / Ethernet', 'Linux'] },
  { group: 'Développement', items: ['React', 'JavaScript', 'HTML / CSS', 'Python', 'Java', 'Ruby', 'XML', 'Android'] },
  { group: 'Hardware', items: ['Analogique', 'Numérique', 'Commutation', 'LabVIEW', 'CAO / DAO'] },
  { group: 'Cybersécurité', items: ['Analyse de risques', 'Gestion des menaces', 'EBIOS'] },
  { group: 'Gestion de projet', items: ['Cheffe de projet', 'Agile', 'Cycle en V'] },
  { group: 'Langues', items: ['Français', 'Anglais C1', 'Espagnol C1'] },
];

export const education = [
  { dates: '2025 — 2027', title: 'Cycle ingénieur — Systèmes Embarqués / Logiciel Cybersécurité', school: 'ESEO Angers' },
  { dates: '2022 — 2024', title: 'Bachelor INE', school: 'ESEO Angers' },
  { dates: '2021 — 2022', title: 'Classe préparatoire technologique & internationale', school: 'ESEO Paris-Vélizy' },
  { dates: '2019 — 2021', title: 'DUT Mesures Physiques', school: "IUT d'Orsay — Paris-Saclay" }, // TODO : dates à confirmer
  { dates: '2017 — 2019', title: 'Bac STL Biotechnologie, mention Bien', school: 'GSSB, Châtenay-Malabry' },
];

export const hobbies = [
  { num: '8', unit: 'ans', text: 'de piano classique & modern jazz — et 3 ans de violoncelle' },
  { num: '7', unit: 'ans', text: 'de natation en compétition, 2 championnats de France académiques' },
  { num: '⛵', text: "Diplômée de l'École des Glénans en catamaran" },
  { num: '🌎', text: 'Échange linguistique au Pérou, voyages, cuisine & automobile' },
];

export const engagements = 'Engagements : Conseil des jeunes de Wissous (élue) · Téléopératrice Sidaction & Téléthon';
