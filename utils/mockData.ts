export const forumPosts = [
  {
    id: 1,
    author: "Moussa Diallo",
    role: "Asc",
    timeAgo: "Il y a 2 heures",
    content: "Combien de temps faut-il pour terminer le module?",
    avatar: require("../assets/images/mask-group.png"),
  },
  {
    id: 2,
    author: "Aminata Sow",
    role: "Formatrice",
    timeAgo: "Il y a 5 heures",
    content:
      "Avez-vous des questions ou des choses à clarifier concernant le contenu du module sur les vaccinationsù?",
    avatar: require("../assets/images/mask-group-1.png"),
  },
];

export const usefulResources = [
  {
    id: 1,
    title: "Fiche globale de référencepour les agents de santé communautaire",
  },
  {
    id: 2,
    title: "Fiche d'evaluation et suivi Adulte",
  },
  {
    id: 3,
    title: "Fiche d'evaluation et suivi PCIME",
  },
  {
    id: 4,
    title: "Fiche de communication pour le changement social",
  },
];

export const modules = [
  {
    id: "intro",
    title: "Introduction au Paquet de Services Communautaires",
    moduleNumber: "Introduction",
    lessons: 3,
    status: "completed",
    duration: "30min",
  },
  {
    id: "module1",
    title: "La compréhension de la prévention et de la transmission du paludisme",
    moduleNumber: "Module 1",
    lessons: 3,
    status: "completed",
    duration: "30min",
  },
  {
    id: "module2",
    title: "Techniques de Communication et d'animations pour le Changement de Comportement (CCC)",
    moduleNumber: "Module 2",
    lessons: 3,
    status: "completed",
    duration: "30min",
  },
  {
    id: "module3",
    title: "Comprendre les facteurs de risques de la grossesse",
    moduleNumber: "Module 3",
    lessons: 3,
    status: "completed",
    duration: "30min",
  },
  {
    id: "module4",
    title: "Prise en charge intégrée des maladies de l'enfant - PCIME",
    moduleNumber: "Module 4",
    lessons: 4,
    status: "in_progress",
    currentLesson: 3,
    duration: "30min",
  },
  {
    id: "module5",
    title: "L'identification des signes cliniques des infections respiratoires aiguës (IRA)",
    moduleNumber: "Module 5",
    lessons: 3,
    status: "upcoming",
    duration: "30min",
  },
  {
    id: "module6",
    title: "La compréhension de la Diarrhée",
    moduleNumber: "Module 6",
    lessons: 3,
    status: "upcoming",
    duration: "30min",
  },
  {
    id: "module7",
    title: "L'identification, la prévention et la sensibilisation de l'hypertension artérielle et le diabète",
    moduleNumber: "Module 7",
    lessons: 3,
    status: "upcoming",
    duration: "30min",
  }
]; 