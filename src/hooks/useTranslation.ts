import { useState } from "react";

export type Language = "es" | "cat" | "fr" | "en";

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.solution": {
    es: "Solución",
    cat: "Solució",
    fr: "Solution",
    en: "Solution",
  },
  "nav.segments": {
    es: "Segmentos",
    cat: "Segments",
    fr: "Segments",
    en: "Segments",
  },
  "nav.success-stories": {
    es: "Casos de éxito",
    cat: "Casos d'èxit",
    fr: "Cas de succès",
    en: "Success Stories",
  },
  "nav.resources": {
    es: "Recursos",
    cat: "Recursos",
    fr: "Ressources",
    en: "Resources",
  },
  "nav.blog": {
    es: "Blog",
    cat: "Blog",
    fr: "Blog",
    en: "Blog",
  },
  "nav.ebooks": {
    es: "Ebooks",
    cat: "Ebooks",
    fr: "Ebooks",
    en: "Ebooks",
  },
  "nav.webinars": {
    es: "Webinars",
    cat: "Webinars",
    fr: "Webinaires",
    en: "Webinars",
  },
  "nav.partners": {
    es: "Partners",
    cat: "Partners",
    fr: "Partenaires",
    en: "Partners",
  },
  "nav.company": {
    es: "Compañía",
    cat: "Companyia",
    fr: "Entreprise",
    en: "Company",
  },
  "nav.support": {
    es: "Soporte",
    cat: "Suport",
    fr: "Support",
    en: "Support",
  },
  "nav.faq": {
    es: "FAQ",
    cat: "FAQ",
    fr: "FAQ",
    en: "FAQ",
  },
  "nav.contacto": {
    es: "Contáctanos",
    cat: "Contacta",
    fr: "Contactez-noz",
    en: "Contact us",
  },

  // Hero Section
  "hero.h1": {
    es: "El Software todo en uno para tu estación de esquí",
    cat: "El Software tot en un per a la teva estació d'esquí",
    fr: "Le logiciel tout-en-un pour votre station de ski",
    en: "The all-in-one software for your ski resort",
  },
  "hero.h2": {
    es: "Gestiona reservas, forfaits, alquiler, escuela, restauración y mucho más desde un único panel conectado a tu ERP. Optimiza tus ingresos con precios dinámicos y datos en tiempo real.",
    cat: "Gestiona reserves, forfets, lloguer, escola, restauració i molt més des d'un únic panell connectat al teu ERP. Optimitza els teus ingressos amb preus dinàmics i dades en temps real.",
    fr: "Gérez les réservations, forfaits, location, école, restauration et bien plus depuis un panneau unique connecté à votre ERP. Optimisez vos revenus avec des prix dynamiques et des données en temps réel.",
    en: "Manage bookings, lift tickets, rentals, ski school, dining and much more from a single panel connected to your ERP. Optimize your revenue with dynamic pricing and real-time data.",
  },

  // Benefits Section
  "benefits.title": {
    es: "Beneficios",
    cat: "Beneficis",
    fr: "Avantages",
    en: "Benefits",
  },
  "benefits.all-in-one.title": {
    es: "Todo en uno",
    cat: "Tot en un",
    fr: "Tout-en-un",
    en: "All-in-one",
  },
  "benefits.all-in-one.desc": {
    es: "Un único sistema modular, sin cambiar tu hardware.",
    cat: "Un únic sistema modular, sense canviar el teu hardware.",
    fr: "Un système modulaire unique, sans changer votre matériel.",
    en: "A single modular system, without changing your hardware.",
  },
  "benefits.more-revenue.title": {
    es: "Más ingresos",
    cat: "Més ingressos",
    fr: "Plus de revenus",
    en: "More revenue",
  },
  "benefits.more-revenue.desc": {
    es: "Motor de pricing dinámico y venta anticipada online.",
    cat: "Motor de pricing dinàmic i venda anticipada online.",
    fr: "Moteur de tarification dynamique et vente anticipée en ligne.",
    en: "Dynamic pricing engine and advance online sales.",
  },
  "benefits.smooth-operation.title": {
    es: "Operación sin fricciones",
    cat: "Operació sense friccions",
    fr: "Fonctionnement sans friction",
    en: "Smooth operation",
  },
  "benefits.smooth-operation.desc": {
    es: "Acceso rápido, autoservicio y control total.",
    cat: "Accés ràpid, autoservei i control total.",
    fr: "Accès rapide, libre-service et contrôle total.",
    en: "Quick access, self-service and total control.",
  },

  // Blog
  "blog.title": {
    es: "Blog",
    cat: "Blog",
    fr: "Blog",
    en: "Blog",
  },
  "blog.search.placeholder": {
    es: "Buscar artículos...",
    cat: "Cercar articles...",
    fr: "Rechercher des articles...",
    en: "Search articles...",
  },
  "blog.categories.all": {
    es: "Todas las categorías",
    cat: "Totes les categories",
    fr: "Toutes les catégories",
    en: "All categories",
  },
  "blog.categories.news": {
    es: "Noticias",
    cat: "Notícies",
    fr: "Actualités",
    en: "News",
  },
  "blog.categories.success-stories": {
    es: "Casos de éxito",
    cat: "Casos d'èxit",
    fr: "Cas de succès",
    en: "Success Stories",
  },
  "blog.categories.product": {
    es: "Producto",
    cat: "Producte",
    fr: "Produit",
    en: "Product",
  },
  "blog.categories.events": {
    es: "Eventos",
    cat: "Esdeveniments",
    fr: "Événements",
    en: "Events",
  },
  "blog.read-more": {
    es: "Leer más →",
    cat: "Llegir més →",
    fr: "Lire la suite →",
    en: "Read more →",
  },
  "blog.view-full-article": {
    es: "Ver artículo completo",
    cat: "Veure article complet",
    fr: "Voir l'article complet",
    en: "View full article",
  },

  // Languages
  "lang.es": {
    es: "ES - Español",
    cat: "ES - Espanyol",
    fr: "ES - Espagnol",
    en: "ES - Spanish",
  },
  "lang.cat": {
    es: "CAT - Català",
    cat: "CAT - Català",
    fr: "CAT - Catalan",
    en: "CAT - Catalan",
  },
  "lang.fr": {
    es: "FR - Français",
    cat: "FR - Francès",
    fr: "FR - Français",
    en: "FR - French",
  },
  "lang.en": {
    es: "EN - English",
    cat: "EN - Anglès",
    fr: "EN - Anglais",
    en: "EN - English",
  },
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
  };
};
