import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type Language = "es" | "cat" | "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

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
  "nav.request-demo": {
    es: "Solicita una demo",
    cat: "Sol·licita una demo",
    fr: "Demander une démo",
    en: "Request a demo",
  },
  "nav.menu": {
    es: "Menú",
    cat: "Menú",
    fr: "Menu",
    en: "Menu",
  },
  "nav.language": {
    es: "Idioma",
    cat: "Idioma",
    fr: "Langue",
    en: "Language",
  },

  // Common
  "common.home": {
    es: "Inicio",
    cat: "Inici",
    fr: "Accueil",
    en: "Home",
  },
  "common.request-demo": {
    es: "Solicita una demo",
    cat: "Sol·licita una demo",
    fr: "Demander une démo",
    en: "Request a demo",
  },

  //Home
  "hero.h1": {
    es: "El Software todo en uno para tu estación de esquí",
    cat: "El Programari tot en un per a la teva estació d'esquí",
    fr: "Le logiciel tout-en-un pour votre station de ski",
    en: "The all-in-one software for your ski resort",
  },

  "hero.h2": {
    es: "Gestiona reservas, forfaits, alquiler, escuela, restauración y mucho más desde un único panel conectado a tu ERP. Optimiza tus ingresos con precios dinámicos y datos en tiempo real.",
    cat: "Gestiona reserves, forfets, lloguer, escola, restauració i molt més des d'un únic panell connectat al teu ERP. Optimitza els teus ingressos amb preus dinàmics i dades en temps real.",
    fr: "Gérez vos réservations, forfaits de ski, locations, école, restauration et bien plus encore depuis un tableau de bord unique connecté à votre ERP. Optimisez vos revenus grâce à une tarification dynamique et des données en temps réel.",
    en: "Manage reservations, ski passes, rentals, school, catering, and much more from a single dashboard connected to your ERP. Optimize your revenue with dynamic pricing and real-time data.",
  },

  "benefits.all-in-one.title": {
    es: "Todo en uno:",
    cat: "Tot en un:",
    fr: "Tout-en-un:",
    en: "All-in-one:",
  },

  "benefits.all-in-one.desc": {
    es: "Un único sistema modular, sin cambiar tu hardware.",
    cat: "Un únic sistema modular, sense canviar el maquinari.",
    fr: "Un système modulaire unique, sans changer votre matériel.",
    en: "A single modular system, without changing your hardware.",
  },

  "benefits.more-revenue.title": {
    es: "Más ingresos:",
    cat: "Més ingressos:",
    fr: "Augmentation du chiffre d'affaires:",
    en: "Increased revenue:",
  },

  "benefits.more-revenue.desc": {
    es: "Motor de pricing dinámico y venta anticipada online.",
    cat: "Motor de pricing dinàmic i venda anticipada en línia.",
    fr: "Moteur de tarification dynamique et préventes en ligne.",
    en: "Dynamic pricing engine and online pre-sales.",
  },

  "benefits.smooth-operation.title": {
    es: "Operación sin fricciones:",
    cat: "Operació sense friccions:",
    fr: "Fonctionnement fluide:",
    en: "Frictionless operation:",
  },

  "benefits.smooth-operation.desc": {
    es: "Acceso rápido, autoservicio y control total.",
    cat: "Accés ràpid, autoservei i control total.",
    fr: "Accès rapide, libre-service et contrôle total.",
    en: "Quick access, self-service, and complete control.",
  },

  // Solution Page
  "solution.title": {
    es: "La Solución Integral para tu Estación de Esquí",
    cat: "La Solució Integral per a la teva Estació d'Esquí",
    fr: "La Solution Intégrale pour votre Station de Ski",
    en: "The Comprehensive Solution for your Ski Resort",
  },
  "solution.description": {
    es: "Nuestra plataforma reúne todos los módulos necesarios para gestionar tu estación de esquí de forma integral: ticketing, accesos, escuela, alquiler, restauración, retail, CRM y analítica. Con Ski Solution 360 optimizas ingresos, eliminas fricciones en la experiencia del cliente y mejoras la operación interna.",
    cat: "La nostra plataforma reuneix tots els mòduls necessaris per gestionar la teva estació d'esquí de forma integral: ticketing, accessos, escola, lloguer, restauració, retail, CRM i analítica. Amb Ski Solution 360 optimitzes ingressos, elimines friccions en l'experiència del client i millores l'operació interna.",
    fr: "Notre plateforme rassemble tous les modules nécessaires pour gérer votre station de ski de manière intégrale : billetterie, accès, école, location, restauration, retail, CRM et analytique. Avec Ski Solution 360, vous optimisez les revenus, éliminez les frictions dans l'expérience client et améliorez les opérations internes.",
    en: "Our platform brings together all the necessary modules to comprehensively manage your ski resort: ticketing, access, school, rental, dining, retail, CRM and analytics. With Ski Solution 360 you optimize revenue, eliminate friction in the customer experience and improve internal operations.",
  },
  "solution.benefits.title": {
    es: "Beneficios globales:",
    cat: "Beneficis globals:",
    fr: "Avantages globaux:",
    en: "Global benefits:",
  },
  "solution.benefits.unification": {
    es: "Unificación de todos los procesos en un único sistema.",
    cat: "Unificació de tots els processos en un únic sistema.",
    fr: "Unification de tous les processus dans un système unique.",
    en: "Unification of all processes in a single system.",
  },
  "solution.benefits.revenue": {
    es: "Aumento de ingresos con precios dinámicos y venta anticipada online.",
    cat: "Augment d'ingressos amb preus dinàmics i venda anticipada online.",
    fr: "Augmentation des revenus avec des prix dynamiques et vente anticipée en ligne.",
    en: "Revenue increase with dynamic pricing and advance online sales.",
  },
  "solution.benefits.control": {
    es: "Control total de accesos, inventario y operaciones.",
    cat: "Control total d'accessos, inventari i operacions.",
    fr: "Contrôle total des accès, inventaire et opérations.",
    en: "Total control of access, inventory and operations.",
  },
  "solution.benefits.data": {
    es: "Datos en tiempo real para tomar mejores decisiones.",
    cat: "Dades en temps real per prendre millors decisions.",
    fr: "Données en temps réel pour prendre de meilleures décisions.",
    en: "Real-time data for better decision making.",
  },

  // Modules
  "modules.core.title": {
    es: "Plataforma Core",
    cat: "Plataforma Core",
    fr: "Plateforme Core",
    en: "Core Platform",
  },
  "modules.ticketing.title": {
    es: "Ticketing & Dynamic Pricing",
    cat: "Ticketing & Dynamic Pricing",
    fr: "Billetterie & Prix Dynamiques",
    en: "Ticketing & Dynamic Pricing",
  },
  "modules.access.title": {
    es: "Control de Accesos RFID",
    cat: "Control d'Accessos RFID",
    fr: "Contrôle d'Accès RFID",
    en: "RFID Access Control",
  },
  "modules.school.title": {
    es: "Escuela & Clases",
    cat: "Escola & Classes",
    fr: "École & Cours",
    en: "School & Classes",
  },
  "modules.rental.title": {
    es: "Alquiler & Inventario",
    cat: "Lloguer & Inventari",
    fr: "Location & Inventaire",
    en: "Rental & Inventory",
  },
  "modules.pos.title": {
    es: "F&B & Retail POS",
    cat: "F&B & Retail POS",
    fr: "F&B & Retail POS",
    en: "F&B & Retail POS",
  },
  "modules.crm.title": {
    es: "BI & CRM 360",
    cat: "BI & CRM 360",
    fr: "BI & CRM 360",
    en: "BI & CRM 360",
  },
  "modules.sabermas-cta": {
    es: "Saber Más",
    cat: "Saber Més",
    fr: "En Savoir Plus",
    en: "Learn More",
  },

  // Ski Solution 360 Page
  "ski360.title": {
    es: "Plataforma Core",
    cat: "Plataforma Core",
    fr: "Plateforme Core",
    en: "Core Platform",
  },
  "ski360.benefits.title": {
    es: "Beneficios clave:",
    cat: "Beneficis clau:",
    fr: "Avantages clés:",
    en: "Key benefits:",
  },
  "ski360.benefits.modular": {
    es: "Sistema modular que se adapta a tu estación.",
    cat: "Sistema modular que s'adapta a la teva estació.",
    fr: "Système modulaire qui s'adapte à votre station.",
    en: "Modular system that adapts to your resort.",
  },
  "ski360.benefits.integration": {
    es: "Integración nativa con ERP y CRM.",
    cat: "Integració nativa amb ERP i CRM.",
    fr: "Intégration native avec ERP et CRM.",
    en: "Native integration with ERP and CRM.",
  },
  "ski360.benefits.year-round": {
    es: "Preparado para operar todo el año (invierno + actividades outdoor).",
    cat: "Preparat per operar tot l'any (hivern + activitats outdoor).",
    fr: "Prêt à fonctionner toute l'année (hiver + activités outdoor).",
    en: "Ready to operate year-round (winter + outdoor activities).",
  },
  "ski360.how-it-works.title": {
    es: "Cómo funciona:",
    cat: "Com funciona:",
    fr: "Comment ça marche:",
    en: "How it works:",
  },
  "ski360.how-it-works.description": {
    es: "La Plataforma Core centraliza todos los datos de la estación y conecta los módulos, evitando silos y duplicidad de información.",
    cat: "La Plataforma Core centralitza totes les dades de l'estació i connecta els mòduls, evitant silos i duplicitat d'informació.",
    fr: "La Plateforme Core centralise toutes les données de la station et connecte les modules, évitant les silos et la duplication d'informations.",
    en: "The Core Platform centralizes all resort data and connects modules, avoiding silos and information duplication.",
  },

  // Dynamic Pricing Page
  "pricing.title": {
    es: "Ticketing & Dynamic Pricing",
    cat: "Ticketing & Dynamic Pricing",
    fr: "Billetterie & Prix Dynamiques",
    en: "Ticketing & Dynamic Pricing",
  },
  "pricing.how-it-works.title": {
    es: "Cómo funciona el Dynamic Pricing:",
    cat: "Com funciona el Dynamic Pricing:",
    fr: "Comment fonctionne le Prix Dynamique:",
    en: "How Dynamic Pricing works:",
  },
  "pricing.how-it-works.description": {
    es: "Ajusta el precio del forfait según demanda, condiciones de nieve, previsión meteorológica y fecha de compra. Facilita la venta anticipada online y aumenta la ocupación en días valle.",
    cat: "Ajusta el preu del forfet segons demanda, condicions de neu, previsió meteorològica i data de compra. Facilita la venda anticipada online i augmenta l'ocupació en dies vall.",
    fr: "Ajuste le prix du forfait selon la demande, les conditions de neige, les prévisions météorologiques et la date d'achat. Facilite la vente anticipée en ligne et augmente l'occupation les jours creux.",
    en: "Adjusts lift ticket prices based on demand, snow conditions, weather forecast and purchase date. Facilitates advance online sales and increases occupancy on valley days.",
  },
  "pricing.benefits.revenue": {
    es: "Aumento de ingresos por gestión dinámica de tarifas.",
    cat: "Augment d'ingressos per gestió dinàmica de tarifes.",
    fr: "Augmentation des revenus par gestion dynamique des tarifs.",
    en: "Revenue increase through dynamic rate management.",
  },
  "pricing.benefits.queues": {
    es: "Reducción de colas en taquillas.",
    cat: "Reducció de cues a taquilles.",
    fr: "Réduction des files d'attente aux billetteries.",
    en: "Reduction of queues at ticket offices.",
  },
  "pricing.benefits.integration": {
    es: "Integración con accesos RFID y apps móviles.",
    cat: "Integració amb accessos RFID i apps mòbils.",
    fr: "Intégration avec accès RFID et applications mobiles.",
    en: "Integration with RFID access and mobile apps.",
  },

  // Access Control Page
  "access.title": {
    es: "Control de Accesos RFID",
    cat: "Control d'Accessos RFID",
    fr: "Contrôle d'Accès RFID",
    en: "RFID Access Control",
  },
  "access.benefits.integration": {
    es: "Integración con tornos RFID, QR y Mobile Pass.",
    cat: "Integració amb torns RFID, QR i Mobile Pass.",
    fr: "Intégration avec tourniquets RFID, QR et Mobile Pass.",
    en: "Integration with RFID turnstiles, QR and Mobile Pass.",
  },
  "access.benefits.validation": {
    es: "Validación instantánea de accesos.",
    cat: "Validació instantània d'accessos.",
    fr: "Validation instantanée des accès.",
    en: "Instant access validation.",
  },
  "access.benefits.monitoring": {
    es: "Monitorización de aforo en tiempo real.",
    cat: "Monitorització d'aforament en temps real.",
    fr: "Surveillance de la capacité en temps réel.",
    en: "Real-time capacity monitoring.",
  },
  "access.how-it-works.description": {
    es: "Compatible con hardware existente (Axess, Skidata, Suprema). Conecta con ticketing y CRM para control total.",
    cat: "Compatible amb hardware existent (Axess, Skidata, Suprema). Connecta amb ticketing i CRM per control total.",
    fr: "Compatible avec le matériel existant (Axess, Skidata, Suprema). Se connecte à la billetterie et au CRM pour un contrôle total.",
    en: "Compatible with existing hardware (Axess, Skidata, Suprema). Connects with ticketing and CRM for total control.",
  },

  // Ski School Page
  "school.title": {
    es: "Escuela & Clases",
    cat: "Escola & Classes",
    fr: "École & Cours",
    en: "School & Classes",
  },
  "school.benefits.bookings": {
    es: "Reservas online de clases de esquí, snowboard o actividades de verano.",
    cat: "Reserves online de classes d'esquí, snowboard o activitats d'estiu.",
    fr: "Réservations en ligne de cours de ski, snowboard ou activités d'été.",
    en: "Online bookings for ski, snowboard or summer activity lessons.",
  },
  "school.benefits.assignment": {
    es: "Asignación automática de monitores según disponibilidad.",
    cat: "Assignació automàtica de monitors segons disponibilitat.",
    fr: "Attribution automatique d'instructeurs selon la disponibilité.",
    en: "Automatic instructor assignment based on availability.",
  },
  "school.benefits.management": {
    es: "Gestión de horarios y grupos centralizada.",
    cat: "Gestió d'horaris i grups centralitzada.",
    fr: "Gestion centralisée des horaires et groupes.",
    en: "Centralized schedule and group management.",
  },
  "school.how-it-works.description": {
    es: "El cliente puede reservar forfait + clases en la misma compra. El sistema asigna monitores, genera planning y procesa el cobro.",
    cat: "El client pot reservar forfet + classes en la mateixa compra. El sistema assigna monitors, genera planning i processa el cobrament.",
    fr: "Le client peut réserver forfait + cours dans le même achat. Le système assigne les instructeurs, génère la planification et traite le paiement.",
    en: "The customer can book lift ticket + lessons in the same purchase. The system assigns instructors, generates planning and processes payment.",
  },

  // Rental Page
  "rental.title": {
    es: "Alquiler & Inventario",
    cat: "Lloguer & Inventari",
    fr: "Location & Inventaire",
    en: "Rental & Inventory",
  },
  "rental.benefits.inventory": {
    es: "Control de inventario en tiempo real.",
    cat: "Control d'inventari en temps real.",
    fr: "Contrôle d'inventaire en temps réel.",
    en: "Real-time inventory control.",
  },
  "rental.benefits.bookings": {
    es: "Gestión de reservas de esquís, tablas, botas y cascos.",
    cat: "Gestió de reserves d'esquís, taules, botes i cascos.",
    fr: "Gestion des réservations de skis, planches, chaussures et casques.",
    en: "Management of ski, board, boot and helmet reservations.",
  },
  "rental.benefits.maintenance": {
    es: "Alertas de mantenimiento y trazabilidad completa.",
    cat: "Alertes de manteniment i traçabilitat completa.",
    fr: "Alertes de maintenance et traçabilité complète.",
    en: "Maintenance alerts and complete traceability.",
  },
  "rental.how-it-works.description": {
    es: "Desde la reserva hasta la devolución, todo se gestiona digitalmente. El cliente puede reservar online junto con el forfait.",
    cat: "Des de la reserva fins al retorn, tot es gestiona digitalment. El client pot reservar online juntament amb el forfet.",
    fr: "De la réservation au retour, tout est géré numériquement. Le client peut réserver en ligne avec le forfait.",
    en: "From booking to return, everything is managed digitally. The customer can book online along with the lift ticket.",
  },

  // POS Page
  "pos.title": {
    es: "F&B & Retail POS",
    cat: "F&B & Retail POS",
    fr: "F&B & Retail POS",
    en: "F&B & Retail POS",
  },
  "pos.benefits.unified": {
    es: "Punto de venta unificado para bares, restaurantes y tiendas.",
    cat: "Punt de venda unificat per a bars, restaurants i botigues.",
    fr: "Point de vente unifié pour bars, restaurants et magasins.",
    en: "Unified point of sale for bars, restaurants and shops.",
  },
  "pos.benefits.stock": {
    es: "Gestión de stock conectada al ERP.",
    cat: "Gestió d'estoc connectada a l'ERP.",
    fr: "Gestion des stocks connectée à l'ERP.",
    en: "Stock management connected to ERP.",
  },
  "pos.benefits.crm": {
    es: "Integración con CRM para ventas cruzadas.",
    cat: "Integració amb CRM per vendes creuades.",
    fr: "Intégration CRM pour ventes croisées.",
    en: "CRM integration for cross-selling.",
  },
  "pos.how-it-works.description": {
    es: "Permite cobro ágil, control de inventario y análisis de ventas en tiempo real.",
    cat: "Permet cobrament àgil, control d'inventari i anàlisi de vendes en temps real.",
    fr: "Permet un paiement agile, contrôle d'inventaire et analyse des ventes en temps réel.",
    en: "Enables agile billing, inventory control and real-time sales analysis.",
  },

  // CRM Page
  "crm.title": {
    es: "BI & CRM 360",
    cat: "BI & CRM 360",
    fr: "BI & CRM 360",
    en: "BI & CRM 360",
  },
  "crm.benefits.analytics": {
    es: "Análisis en tiempo real de ventas, aforo y reservas.",
    cat: "Anàlisi en temps real de vendes, aforament i reserves.",
    fr: "Analyse en temps réel des ventes, capacité et réservations.",
    en: "Real-time analysis of sales, capacity and bookings.",
  },
  "crm.benefits.segmentation": {
    es: "Segmentación avanzada de clientes.",
    cat: "Segmentació avançada de clients.",
    fr: "Segmentation avancée des clients.",
    en: "Advanced customer segmentation.",
  },
  "crm.benefits.loyalty": {
    es: "CRM integrado para fidelización.",
    cat: "CRM integrat per fidelització.",
    fr: "CRM intégré pour la fidélisation.",
    en: "Integrated CRM for loyalty.",
  },
  "crm.how-it-works.description": {
    es: "Centraliza datos de todos los módulos y genera informes visuales para la toma de decisiones.",
    cat: "Centralitza dades de tots els mòduls i genera informes visuals per la presa de decisions.",
    fr: "Centralise les données de tous les modules et génère des rapports visuels pour la prise de décision.",
    en: "Centralizes data from all modules and generates visual reports for decision making.",
  },

  // Segments Page
  "segments.title": {
    es: "Segmentos a los que ayudamos",
    cat: "Segments als quals ajudem",
    fr: "Segments que nous aidons",
    en: "Segments we help",
  },
  "segments.description": {
    es: "Cada estación tiene retos únicos. Ski Solution 360 adapta sus módulos para resolver las necesidades de cada segmento, desde grandes resorts hasta museos.",
    cat: "Cada estació té reptes únics. Ski Solution 360 adapta els seus mòduls per resoldre les necessitats de cada segment, des de grans resorts fins a museus.",
    fr: "Chaque station a des défis uniques. Ski Solution 360 adapte ses modules pour résoudre les besoins de chaque segment, des grands resorts aux musées.",
    en: "Each resort has unique challenges. Ski Solution 360 adapts its modules to solve the needs of each segment, from large resorts to museums.",
  },

  // Segments - Individual
  "segments.large-resorts": {
    es: "Grandes Resorts",
    cat: "Grans Resorts",
    fr: "Grands Resorts",
    en: "Large Resorts",
  },
  "segments.medium-resorts": {
    es: "Resorts Medianos",
    cat: "Resorts Mitjans",
    fr: "Resorts Moyens",
    en: "Medium Resorts",
  },
  "segments.ski-schools": {
    es: "Escuelas de Esquí",
    cat: "Escoles d'Esquí",
    fr: "Écoles de Ski",
    en: "Ski Schools",
  },
  "segments.snow-gardens": {
    es: "Jardines de Nieve",
    cat: "Jardins de Neu",
    fr: "Jardins de Neige",
    en: "Snow Gardens",
  },
  "segments.bike-parks": {
    es: "Bike Parks",
    cat: "Bike Parks",
    fr: "Bike Parks",
    en: "Bike Parks",
  },
  "segments.outdoor-activities": {
    es: "Actividades Outdoor",
    cat: "Activitats Outdoor",
    fr: "Activités Outdoor",
    en: "Outdoor Activities",
  },
  "segments.sailing-diving": {
    es: "Escuela de Vela y Buceo",
    cat: "Escola de Vela i Busseig",
    fr: "École de Voile et Plongée",
    en: "Sailing & Diving School",
  },
  "segments.museums": {
    es: "Museos",
    cat: "Museus",
    fr: "Musées",
    en: "Museums",
  },

  // Large Resorts Page
  "large-resorts.title": {
    es: "Grandes Resorts",
    cat: "Grans Resorts",
    fr: "Grands Resorts",
    en: "Large Resorts",
  },
  "large-resorts.challenges.title": {
    es: "Retos comunes:",
    cat: "Reptes comuns:",
    fr: "Défis communs:",
    en: "Common challenges:",
  },
  "large-resorts.challenges.visitors": {
    es: "Gestionar miles de visitantes diarios.",
    cat: "Gestionar milers de visitants diaris.",
    fr: "Gérer des milliers de visiteurs quotidiens.",
    en: "Managing thousands of daily visitors.",
  },
  "large-resorts.challenges.queues": {
    es: "Evitar colas y saturaciones en accesos.",
    cat: "Evitar cues i saturacions en accessos.",
    fr: "Éviter les files d'attente et saturations aux accès.",
    en: "Avoiding queues and congestion at access points.",
  },
  "large-resorts.challenges.revenue": {
    es: "Controlar ingresos en múltiples áreas (forfaits, retail, restauración).",
    cat: "Controlar ingressos en múltiples àrees (forfets, retail, restauració).",
    fr: "Contrôler les revenus dans plusieurs zones (forfaits, retail, restauration).",
    en: "Controlling revenue across multiple areas (lift tickets, retail, dining).",
  },
  "large-resorts.solution.title": {
    es: "Solución Ski Solution 360:",
    cat: "Solució Ski Solution 360:",
    fr: "Solution Ski Solution 360:",
    en: "Ski Solution 360 Solution:",
  },
  "large-resorts.solution.pricing": {
    es: "Ticketing dinámico para maximizar ingresos.",
    cat: "Ticketing dinàmic per maximitzar ingressos.",
    fr: "Billetterie dynamique pour maximiser les revenus.",
    en: "Dynamic ticketing to maximize revenue.",
  },
  "large-resorts.solution.access": {
    es: "Control de accesos RFID.",
    cat: "Control d'accessos RFID.",
    fr: "Contrôle d'accès RFID.",
    en: "RFID access control.",
  },
  "large-resorts.solution.integration": {
    es: "Integración con ERP y CRM.",
    cat: "Integració amb ERP i CRM.",
    fr: "Intégration avec ERP et CRM.",
    en: "Integration with ERP and CRM.",
  },

  // Partners Page
  "partners.hero.title": {
    es: "Integraciones & Partners",
    cat: "Integracions & Partners",
    fr: "Intégrations & Partenaires",
    en: "Integrations & Partners",
  },
  "partners.hero.description": {
    es: "Conoce a nuestros socios estratégicos que nos ayudan a ofrecer la mejor solución integral para tu estación de esquí.",
    cat: "Coneix els nostres socis estratègics que ens ajuden a oferir la millor solució integral per a la teva estació d'esquí.",
    fr: "Découvrez nos partenaires stratégiques qui nous aident à offrir la meilleure solution intégrale pour votre station de ski.",
    en: "Meet our strategic partners who help us offer the best comprehensive solution for your ski resort.",
  },
  "partners.access-systems": {
    es: "Sistema de Accesos",
    cat: "Sistema d'Accessos",
    fr: "Système d'Accès",
    en: "Access System",
  },
  "partners.payment-methods": {
    es: "Medios de Pago",
    cat: "Mitjans de Pagament",
    fr: "Moyens de Paiement",
    en: "Payment Methods",
  },
  "partners.online-platforms": {
    es: "Plataformas Online",
    cat: "Plataformes Online",
    fr: "Plateformes En Ligne",
    en: "Online Platforms",
  },
  "partners.erp-accounting": {
    es: "ERP & Contabilidad",
    cat: "ERP & Comptabilitat",
    fr: "ERP & Comptabilité",
    en: "ERP & Accounting",
  },
  "partners.specialized-services": {
    es: "Servicios Especializados",
    cat: "Serveis Especialitzats",
    fr: "Services Spécialisés",
    en: "Specialized Services",
  },
  "partners.mobile-wallets": {
    es: "Mobile Wallets",
    cat: "Mobile Wallets",
    fr: "Portefeuilles Mobiles",
    en: "Mobile Wallets",
  },
  "partners.need-integration": {
    es: "¿Necesitas una integración específica?",
    cat: "Necessites una integració específica?",
    fr: "Besoin d'une intégration spécifique?",
    en: "Need a specific integration?",
  },
  "partners.integration-description": {
    es: "Trabajamos constantemente para ampliar nuestro ecosistema de partners e integraciones.",
    cat: "Treballem constantment per ampliar el nostre ecosistema de partners i integracions.",
    fr: "Nous travaillons constamment pour élargir notre écosystème de partenaires et d'intégrations.",
    en: "We constantly work to expand our ecosystem of partners and integrations.",
  },

  // Empresa page
  "empresa.title": {
    es: "Nuestra Compañía",
    cat: "La nostra Companyia",
    fr: "Notre Société",
    en: "Our Company",
  },
  "empresa.hero.subtitle": {
    es: "Más de 27 años de experiencia tecnológica ayudando a estaciones de esquí a transformar su negocio",
    cat: "Més de 27 anys d'experiència tecnològica ajudant estacions d'esquí a transformar el seu negoci",
    fr: "Plus de 27 ans d'expérience technologique aidant les stations de ski à transformer leur activité",
    en: "Over 27 years of technological experience helping ski resorts transform their business",
  },
  "empresa.years-experience": {
    es: "Años de experiencia",
    cat: "Anys d'experiència",
    fr: "Années d'expérience",
    en: "Years of experience",
  },
  "empresa.resorts-transformed": {
    es: "Estaciones transformadas",
    cat: "Estacions transformades",
    fr: "Stations transformées",
    en: "Resorts transformed",
  },
  "empresa.countries": {
    es: "Países",
    cat: "Països",
    fr: "Pays",
    en: "Countries",
  },
  "empresa.history.title": {
    es: "Nuestra Historia",
    cat: "La nostra Història",
    fr: "Notre Histoire",
    en: "Our History",
  },
  "empresa.history.paragraph1": {
    es: "Fundada en 1997 como BDR Informática, nuestra empresa nació con la visión de digitalizar el sector del turismo de montaña. Durante más de dos décadas, hemos evolucionado junto con la tecnología y las necesidades de nuestros clientes.",
    cat: "Fundada el 1997 com BDR Informàtica, la nostra empresa va néixer amb la visió de digitalitzar el sector del turisme de muntanya. Durant més de dues dècades, hem evolucionat juntament amb la tecnologia i les necessitats dels nostres clients.",
    fr: "Fondée en 1997 sous le nom de BDR Informática, notre entreprise est née avec la vision de numériser le secteur du tourisme de montagne. Pendant plus de deux décennies, nous avons évolué avec la technologie et les besoins de nos clients.",
    en: "Founded in 1997 as BDR Informática, our company was born with the vision of digitalizing the mountain tourism sector. For over two decades, we have evolved alongside technology and our clients' needs.",
  },
  "empresa.history.paragraph2": {
    es: "Ski Solution 360 representa la culminación de toda nuestra experiencia: una plataforma integral que no solo gestiona operaciones, sino que transforma completamente la forma en que las estaciones de esquí interactúan con sus clientes.",
    cat: "Ski Solution 360 representa la culminació de tota la nostra experiència: una plataforma integral que no només gestiona operacions, sinó que transforma completament la manera com les estacions d'esquí interactuen amb els seus clients.",
    fr: "Ski Solution 360 représente l'aboutissement de toute notre expérience : une plateforme intégrale qui ne gère pas seulement les opérations, mais transforme complètement la façon dont les stations de ski interagissent avec leurs clients.",
    en: "Ski Solution 360 represents the culmination of all our experience: a comprehensive platform that not only manages operations, but completely transforms how ski resorts interact with their customers.",
  },
  "empresa.mission.title": {
    es: "Nuestra Misión",
    cat: "La nostra Missió",
    fr: "Notre Mission",
    en: "Our Mission",
  },
  "empresa.mission.description": {
    es: "Ayudar a estaciones de esquí y centros outdoor a optimizar operaciones, aumentar ingresos y mejorar la experiencia de clientes con tecnología potente, flexible y fácil de usar.",
    cat: "Ajudar estacions d'esquí i centres outdoor a optimitzar operacions, augmentar ingressos i millorar l'experiència dels clients amb tecnologia potent, flexible i fàcil d'usar.",
    fr: "Aider les stations de ski et les centres outdoor à optimiser leurs opérations, augmenter leurs revenus et améliorer l'expérience client avec une technologie puissante, flexible et facile à utiliser.",
    en: "Help ski resorts and outdoor centers optimize operations, increase revenue and improve customer experience with powerful, flexible and easy-to-use technology.",
  },
  "empresa.milestones.title": {
    es: "Hitos Importantes",
    cat: "Fites Importants",
    fr: "Jalons Importants",
    en: "Important Milestones",
  },
  "empresa.values.title": {
    es: "Nuestros Valores",
    cat: "Els nostres Valors",
    fr: "Nos Valeurs",
    en: "Our Values",
  },
  "empresa.values.subtitle": {
    es: "Los principios que guían cada decisión y cada línea de código que escribimos",
    cat: "Els principis que guien cada decisió i cada línia de codi que escrivim",
    fr: "Les principes qui guident chaque décision et chaque ligne de code que nous écrivons",
    en: "The principles that guide every decision and every line of code we write",
  },
  "empresa.values.specialization.title": {
    es: "Especialización",
    cat: "Especialització",
    fr: "Spécialisation",
    en: "Specialization",
  },
  "empresa.values.specialization.description": {
    es: "Más de 27 años enfocados exclusivamente en el sector de estaciones de esquí y turismo de montaña.",
    cat: "Més de 27 anys enfocats exclusivament en el sector d'estacions d'esquí i turisme de muntanya.",
    fr: "Plus de 27 ans concentrés exclusivement sur le secteur des stations de ski et du tourisme de montagne.",
    en: "Over 27 years focused exclusively on the ski resort and mountain tourism sector.",
  },
  "empresa.values.innovation.title": {
    es: "Innovación",
    cat: "Innovació",
    fr: "Innovation",
    en: "Innovation",
  },
  "empresa.values.innovation.description": {
    es: "Desarrollo constante de nuevas funcionalidades basadas en las necesidades reales del mercado.",
    cat: "Desenvolupament constant de noves funcionalitats basades en les necessitats reals del mercat.",
    fr: "Développement constant de nouvelles fonctionnalités basées sur les besoins réels du marché.",
    en: "Constant development of new functionalities based on real market needs.",
  },
  "empresa.values.efficiency.title": {
    es: "Eficiencia",
    cat: "Eficiència",
    fr: "Efficacité",
    en: "Efficiency",
  },
  "empresa.values.efficiency.description": {
    es: "Soluciones que optimizan procesos, reducen costos y maximizan la rentabilidad de nuestros clientes.",
    cat: "Solucions que optimitzen processos, redueixen costos i maximitzen la rendibilitat dels nostres clients.",
    fr: "Solutions qui optimisent les processus, réduisent les coûts et maximisent la rentabilité de nos clients.",
    en: "Solutions that optimize processes, reduce costs and maximize our clients' profitability.",
  },
  "empresa.values.commitment.title": {
    es: "Compromiso",
    cat: "Compromís",
    fr: "Engagement",
    en: "Commitment",
  },
  "empresa.values.commitment.description": {
    es: "Acompañamos a nuestros clientes en cada paso de su transformación digital con soporte 24/7.",
    cat: "Acompanyem els nostres clients en cada pas de la seva transformació digital amb suport 24/7.",
    fr: "Nous accompagnons nos clients à chaque étape de leur transformation numérique avec un support 24/7.",
    en: "We accompany our clients in every step of their digital transformation with 24/7 support.",
  },
  "empresa.matrix.title": {
    es: "Nuestra Matriz Tecnológica",
    cat: "La nostra Matriu Tecnològica",
    fr: "Notre Matrice Technologique",
    en: "Our Technology Matrix",
  },
  "empresa.matrix.description": {
    es: "Ski Solution 360 forma parte del grupo BDR Informática, una empresa con más de 27 años de experiencia en desarrollo de software empresarial. Esta solidez nos permite ofrecer:",
    cat: "Ski Solution 360 forma part del grup BDR Informàtica, una empresa amb més de 27 anys d'experiència en desenvolupament de programari empresarial. Aquesta solidesa ens permet oferir:",
    fr: "Ski Solution 360 fait partie du groupe BDR Informática, une entreprise avec plus de 27 ans d'expérience en développement de logiciels d'entreprise. Cette solidité nous permet d'offrir :",
    en: "Ski Solution 360 is part of the BDR Informática group, a company with over 27 years of experience in enterprise software development. This strength allows us to offer:",
  },
  "empresa.matrix.financial-stability": {
    es: "Estabilidad Financiera",
    cat: "Estabilitat Financera",
    fr: "Stabilité Financière",
    en: "Financial Stability",
  },
  "empresa.matrix.financial-description": {
    es: "Respaldados por décadas de crecimiento sostenible",
    cat: "Recolzats per dècades de creixement sostenible",
    fr: "Soutenus par des décennies de croissance durable",
    en: "Backed by decades of sustainable growth",
  },
  "empresa.matrix.experienced-team": {
    es: "Equipo Experimentado",
    cat: "Equip Experimentat",
    fr: "Équipe Expérimentée",
    en: "Experienced Team",
  },
  "empresa.matrix.team-description": {
    es: "Desarrolladores con experiencia en sistemas críticos",
    cat: "Desenvolupadors amb experiència en sistemes crítics",
    fr: "Développeurs avec expérience dans les systèmes critiques",
    en: "Developers with experience in critical systems",
  },
  "empresa.matrix.recognition": {
    es: "Reconocimiento",
    cat: "Reconeixement",
    fr: "Reconnaissance",
    en: "Recognition",
  },
  "empresa.matrix.recognition-description": {
    es: "Certificaciones y premios en innovación tecnológica",
    cat: "Certificacions i premis en innovació tecnològica",
    fr: "Certifications et prix en innovation technologique",
    en: "Certifications and awards in technological innovation",
  },
  "empresa.contact.title": {
    es: "¿Quieres conocer más sobre nosotros?",
    cat: "Vols conèixer més sobre nosaltres?",
    fr: "Voulez-vous en savoir plus sur nous?",
    en: "Want to know more about us?",
  },
  "empresa.contact.description": {
    es: "Estaremos encantados de contarte más sobre nuestra empresa, nuestro equipo y cómo podemos ayudar a tu estación de esquí.",
    cat: "Estarem encantats d'explicar-te més sobre la nostra empresa, el nostre equip i com podem ajudar la teva estació d'esquí.",
    fr: "Nous serons ravis de vous en dire plus sur notre entreprise, notre équipe et comment nous pouvons aider votre station de ski.",
    en: "We'll be happy to tell you more about our company, our team and how we can help your ski resort.",
  },
  "empresa.contact.button": {
    es: "Contacta con nuestro equipo",
    cat: "Contacta amb el nostre equip",
    fr: "Contactez notre équipe",
    en: "Contact our team",
  },

  // Webinars page
  "webinars.title": {
    es: "Webinars",
    cat: "Webinars",
    fr: "Webinaires",
    en: "Webinars",
  },
  "webinars.description": {
    es: "Participa en nuestras sesiones online sobre las últimas tendencias en gestión de estaciones de esquí.",
    cat: "Participa en les nostres sessions online sobre les últimes tendències en gestió d'estacions d'esquí.",
    fr: "Participez à nos sessions en ligne sur les dernières tendances en gestion de stations de ski.",
    en: "Participate in our online sessions about the latest trends in ski resort management.",
  },

  // Homepage sections
  "benefits.section.title": {
    es: "Por qué elegir Ski Solution 360",
    cat: "Per què triar Ski Solution 360",
    fr: "Pourquoi choisir Ski Solution 360",
    en: "Why choose Ski Solution 360",
  },
  "benefits.section.subtitle": {
    es: "La plataforma integral que revoluciona la gestión de estaciones de esquí",
    cat: "La plataforma integral que revoluciona la gestió d'estacions d'esquí",
    fr: "La plateforme intégrale qui révolutionne la gestion des stations de ski",
    en: "The comprehensive platform that revolutionizes ski resort management",
  },

  "modules.section.title": {
    es: "Módulos principales",
    cat: "Mòduls principals",
    fr: "Modules principaux",
    en: "Main modules",
  },
  "modules.section.subtitle": {
    es: "Solución modular completa para cada área de tu estación de esquí",
    cat: "Solució modular completa per a cada àrea de la teva estació d'esquí",
    fr: "Solution modulaire complète pour chaque zone de votre station de ski",
    en: "Complete modular solution for every area of your ski resort",
  },

  "homepage.ticketing.title": {
    es: "Venta online y precios dinámicos",
    cat: "Venda online i preus dinàmics",
    fr: "Vente en ligne et prix dynamiques",
    en: "Online sales and dynamic pricing",
  },
  "homepage.ticketing.description": {
    es: "Sistema de reservas y venta anticipada con motor de pricing inteligente que optimiza ingresos según demanda y ocupación.",
    cat: "Sistema de reserves i venda anticipada amb motor de pricing intel·ligent que optimitza ingressos segons demanda i ocupació.",
    fr: "Système de réservation et de vente anticipée avec moteur de pricing intelligent qui optimise les revenus selon la demande et l'occupation.",
    en: "Reservation and advance sales system with intelligent pricing engine that optimizes revenue based on demand and occupancy.",
  },

  "homepage.access.title": {
    es: "Control de accesos",
    cat: "Control d'accessos",
    fr: "Contrôle d'accès",
    en: "Access control",
  },
  "homepage.access.description": {
    es: "Gestión completa de forfaits, pases de temporada y control de accesos en tiempo real con integración a tornos y barreras.",
    cat: "Gestió completa de forfaits, passis de temporada i control d'accessos en temps real amb integració a torns i barreres.",
    fr: "Gestion complète des forfaits, passes de saison et contrôle d'accès en temps réel avec intégration aux tourniquets et barrières.",
    en: "Complete management of ski passes, season tickets and real-time access control with integration to turnstiles and barriers.",
  },

  "homepage.rental.title": {
    es: "Alquiler de material",
    cat: "Lloguer de material",
    fr: "Location de matériel",
    en: "Equipment rental",
  },
  "homepage.rental.description": {
    es: "Gestión integral del alquiler de esquís, tablas, botas y equipamiento con trazabilidad completa y mantenimiento predictivo.",
    cat: "Gestió integral del lloguer d'esquís, taules, botes i equipament amb traçabilitat completa i manteniment predictiu.",
    fr: "Gestion intégrale de la location de skis, planches, chaussures et équipements avec traçabilité complète et maintenance prédictive.",
    en: "Comprehensive management of ski, board, boot and equipment rental with complete traceability and predictive maintenance.",
  },

  "homepage.school.title": {
    es: "Escuela y actividades",
    cat: "Escola i activitats",
    fr: "École et activités",
    en: "School and activities",
  },
  "homepage.school.description": {
    es: "Reserva de clases, gestión de instructores, planificación de actividades y seguimiento del progreso de alumnos.",
    cat: "Reserva de classes, gestió d'instructors, planificació d'activitats i seguiment del progrés d'alumnes.",
    fr: "Réservation de cours, gestion des instructeurs, planification d'activités et suivi des progrès des élèves.",
    en: "Class booking, instructor management, activity planning and student progress tracking.",
  },

  "homepage.restaurant.title": {
    es: "Restauración y tiendas (F&B + Retail)",
    cat: "Restauració i botigues (F&B + Retail)",
    fr: "Restauration et boutiques (F&B + Retail)",
    en: "Food & Beverage and Retail",
  },
  "homepage.restaurant.description": {
    es: "TPV integrado, gestión de stock, cartas digitales y análisis de consumo para maximizar ingresos en servicios complementarios.",
    cat: "TPV integrat, gestió d'estoc, cartes digitals i anàlisi de consum per maximitzar ingressos en serveis complementaris.",
    fr: "TPV intégré, gestion des stocks, menus numériques et analyse de consommation pour maximiser les revenus des services complémentaires.",
    en: "Integrated POS, inventory management, digital menus and consumption analysis to maximize revenue from complementary services.",
  },

  "homepage.crm.title": {
    es: "CRM y analítica en tiempo real",
    cat: "CRM i analítica en temps real",
    fr: "CRM et analytique en temps réel",
    en: "CRM and real-time analytics",
  },
  "homepage.crm.description": {
    es: "Dashboard ejecutivo con KPIs en vivo, segmentación de clientes y herramientas de marketing automatizado.",
    cat: "Dashboard executiu amb KPIs en viu, segmentació de clients i eines de màrqueting automatitzat.",
    fr: "Tableau de bord exécutif avec KPI en direct, segmentation de la clientèle et outils de marketing automatisé.",
    en: "Executive dashboard with live KPIs, customer segmentation and automated marketing tools.",
  },

  // Segmentos page
  "segmentos.title": {
    es: "Segmentos a los que ayudamos",
    cat: "Segments als quals ajudem",
    fr: "Segments que nous aidons",
    en: "Segments we help",
  },
  "segmentos.subtitle": {
    es: "Cada estación tiene retos únicos. Ski Solution 360 adapta sus módulos para resolver las necesidades de cada segmento, desde grandes resorts hasta museos.",
    cat: "Cada estació té reptes únics. Ski Solution 360 adapta els seus mòduls per resoldre les necessitats de cada segment, des de grans resorts fins a museus.",
    fr: "Chaque station a des défis uniques. Ski Solution 360 adapte ses modules pour répondre aux besoins de chaque segment, des grands resorts aux musées.",
    en: "Each station has unique challenges. Ski Solution 360 adapts its modules to solve the needs of each segment, from large resorts to museums.",
  },
  "segmentos.large-resorts.title": {
    es: "Grandes Resorts",
    cat: "Grans Resorts",
    fr: "Grands Resorts",
    en: "Large Resorts",
  },
  "segmentos.large-resorts.description": {
    es: "Soluciones integrales para grandes estaciones de esquí con miles de visitantes diarios.",
    cat: "Solucions integrals per a grans estacions d'esquí amb milers de visitants diaris.",
    fr: "Solutions intégrales pour les grandes stations de ski avec des milliers de visiteurs quotidiens.",
    en: "Comprehensive solutions for large ski resorts with thousands of daily visitors.",
  },
  "segmentos.medium-resorts.title": {
    es: "Resorts Medianos",
    cat: "Resorts Mitjans",
    fr: "Resorts Moyens",
    en: "Medium Resorts",
  },
  "segmentos.medium-resorts.description": {
    es: "Optimización de recursos y competitividad para estaciones medianas.",
    cat: "Optimització de recursos i competitivitat per a estacions mitjanes.",
    fr: "Optimisation des ressources et compétitivité pour les stations moyennes.",
    en: "Resource optimization and competitiveness for medium-sized resorts.",
  },
  "segmentos.ski-schools.title": {
    es: "Escuelas de Esquí",
    cat: "Escoles d'Esquí",
    fr: "Écoles de Ski",
    en: "Ski Schools",
  },
  "segmentos.ski-schools.description": {
    es: "Gestión especializada de clases, monitores y horarios para escuelas de esquí.",
    cat: "Gestió especialitzada de classes, monitors i horaris per a escoles d'esquí.",
    fr: "Gestion spécialisée des cours, moniteurs et horaires pour les écoles de ski.",
    en: "Specialized management of classes, instructors and schedules for ski schools.",
  },
  "segmentos.snow-gardens.title": {
    es: "Jardines de Nieve",
    cat: "Jardins de Neu",
    fr: "Jardins de Neige",
    en: "Snow Gardens",
  },
  "segmentos.snow-gardens.description": {
    es: "Soluciones específicas para la gestión segura de niños pequeños.",
    cat: "Solucions específiques per a la gestió segura de nens petits.",
    fr: "Solutions spécifiques pour la gestion sécurisée des jeunes enfants.",
    en: "Specific solutions for safe management of young children.",
  },
  "segmentos.bike-parks.title": {
    es: "Bike Parks",
    cat: "Bike Parks",
    fr: "Bike Parks",
    en: "Bike Parks",
  },
  "segmentos.bike-parks.description": {
    es: "Gestión estival de actividades de ciclismo de montaña y alquiler.",
    cat: "Gestió estival d'activitats de ciclisme de muntanya i lloguer.",
    fr: "Gestion estivale des activités de VTT et de location.",
    en: "Summer management of mountain biking activities and rentals.",
  },
  "segmentos.outdoor-activities.title": {
    es: "Actividades Outdoor",
    cat: "Activitats Outdoor",
    fr: "Activités Outdoor",
    en: "Outdoor Activities",
  },
  "segmentos.outdoor-activities.description": {
    es: "Multiactividad outdoor: tirolinas, escalada, rutas y aventura.",
    cat: "Multiactivitat outdoor: tirolinas, escalada, rutes i aventura.",
    fr: "Multi-activité outdoor : tyroliennes, escalade, randonnées et aventure.",
    en: "Multi-activity outdoor: zip lines, climbing, trails and adventure.",
  },
  "segmentos.sailing-diving.title": {
    es: "Escuela de Vela y Buceo",
    cat: "Escola de Vela i Busseig",
    fr: "École de Voile et Plongée",
    en: "Sailing and Diving School",
  },
  "segmentos.sailing-diving.description": {
    es: "Gestión de actividades acuáticas y material específico de agua.",
    cat: "Gestió d'activitats aquàtiques i material específic d'aigua.",
    fr: "Gestion des activités aquatiques et matériel spécifique à l'eau.",
    en: "Management of aquatic activities and water-specific equipment.",
  },
  "segmentos.museums.title": {
    es: "Museos",
    cat: "Museus",
    fr: "Musées",
    en: "Museums",
  },
  "segmentos.museums.description": {
    es: "Control de entradas, aforos y experiencias digitales culturales.",
    cat: "Control d'entrades, aforaments i experiències digitals culturals.",
    fr: "Contrôle des entrées, jauges et expériences numériques culturelles.",
    en: "Ticket control, capacity management and digital cultural experiences.",
  },
  "segmentos.not-found.title": {
    es: "¿No encuentras tu segmento?",
    cat: "No trobes el teu segment?",
    fr: "Vous ne trouvez pas votre segment?",
    en: "Can't find your segment?",
  },
  "segmentos.not-found.description": {
    es: "Nuestro sistema es modular y se adapta a cualquier tipo de actividad y negocio.",
    cat: "El nostre sistema és modular i s'adapta a qualsevol tipus d'activitat i negoci.",
    fr: "Notre système est modulaire et s'adapte à tout type d'activité et d'entreprise.",
    en: "Our system is modular and adapts to any type of activity and business.",
  },
  "segmentos.consult-case": {
    es: "Consulta tu caso",
    cat: "Consulta el teu cas",
    fr: "Consultez votre cas",
    en: "Consult your case",
  },
  "segmentos.see-modules": {
    es: "Ver todos los módulos",
    cat: "Veure tots els mòduls",
    fr: "Voir tous les modules",
    en: "See all modules",
  },

  // Solucion page
  "solucion.title": {
    es: "La Solución Integral para tu Estación de Esquí",
    cat: "La Solució Integral per a la teva Estació d'Esquí",
    fr: "La Solution Intégrale pour votre Station de Ski",
    en: "The Comprehensive Solution for your Ski Resort",
  },
  "solucion.description.1": {
    es: "Ski Solution 360 es la plataforma todo‐en‐uno diseñada específicamente para gestionar de forma integral una estación de esquí o centro de actividades outdoor.",
    cat: "Ski Solution 360 és la plataforma tot‐en‐un dissenyada específicament per gestionar de forma integral una estació d'esquí o centre d'activitats outdoor.",
    fr: "Ski Solution 360 est la plateforme tout-en-un conçue spécifiquement pour gérer de manière intégrale une station de ski ou un centre d'activités outdoor.",
    en: "Ski Solution 360 is the all-in-one platform specifically designed to comprehensively manage a ski resort or outdoor activity center.",
  },
  "solucion.description.2": {
    es: "Desde un único panel modular podrás controlar la venta de forfaits, el alquiler de material, la gestión de la escuela, el control de accesos, la restauración y el retail, con integración directa a tu ERP y CRM.",
    cat: "Des d'un únic panell modular podràs controlar la venda de forfaits, el lloguer de material, la gestió de l'escola, el control d'accessos, la restauració i el retail, amb integració directa al teu ERP i CRM.",
    fr: "Depuis un panneau modulaire unique, vous pourrez contrôler la vente de forfaits, la location de matériel, la gestion de l'école, le contrôle d'accès, la restauration et le retail, avec intégration directe à votre ERP et CRM.",
    en: "From a single modular panel you can control ski pass sales, equipment rental, school management, access control, catering and retail, with direct integration to your ERP and CRM.",
  },
  "solucion.benefits.title": {
    es: "Beneficios globales",
    cat: "Beneficis globals",
    fr: "Avantages globaux",
    en: "Global benefits",
  },
  "solucion.benefits.centralized.title": {
    es: "Operación centralizada",
    cat: "Operació centralitzada",
    fr: "Opération centralisée",
    en: "Centralized operation",
  },
  "solucion.benefits.centralized.description": {
    es: "Un solo sistema para todas las áreas del negocio, sin duplicar tareas ni herramientas.",
    cat: "Un sol sistema per a totes les àrees del negoci, sense duplicar tasques ni eines.",
    fr: "Un seul système pour toutes les zones de l'entreprise, sans dupliquer les tâches ni les outils.",
    en: "One system for all business areas, without duplicating tasks or tools.",
  },
  "solucion.benefits.revenue.title": {
    es: "Más ingresos, menos costes",
    cat: "Més ingressos, menys costos",
    fr: "Plus de revenus, moins de coûts",
    en: "More revenue, lower costs",
  },
  "solucion.benefits.revenue.description": {
    es: "Motor de precios dinámicos y venta anticipada para maximizar la facturación; reutiliza hardware existente para reducir inversión inicial.",
    cat: "Motor de preus dinàmics i venda anticipada per maximitzar la facturació; reutilitza maquinari existent per reduir la inversió inicial.",
    fr: "Moteur de prix dynamiques et vente anticipée pour maximiser la facturation ; réutilisez le matériel existant pour réduire l'investissement initial.",
    en: "Dynamic pricing engine and advance sales to maximize billing; reuse existing hardware to reduce initial investment.",
  },
  "solucion.benefits.experience.title": {
    es: "Experiencia sin fricciones",
    cat: "Experiència sense friccions",
    fr: "Expérience sans friction",
    en: "Frictionless experience",
  },
  "solucion.benefits.experience.description": {
    es: "Compra online, autoservicio y accesos rápidos que mejoran la satisfacción del cliente y reducen colas.",
    cat: "Compra online, autoservei i accessos ràpids que milloren la satisfacció del client i redueixen cues.",
    fr: "Achat en ligne, libre-service et accès rapides qui améliorent la satisfaction client et réduisent les files d'attente.",
    en: "Online purchasing, self-service and quick access that improve customer satisfaction and reduce queues.",
  },
  "solucion.benefits.data.title": {
    es: "Datos en tiempo real",
    cat: "Dades en temps real",
    fr: "Données en temps réel",
    en: "Real-time data",
  },
  "solucion.benefits.data.description": {
    es: "toma decisiones estratégicas basadas en analítica instantánea de ventas, aforo y rendimiento.",
    cat: "pren decisions estratègiques basades en analítica instantània de vendes, aforament i rendiment.",
    fr: "prenez des décisions stratégiques basées sur l'analytique instantanée des ventes, de la capacité et des performances.",
    en: "make strategic decisions based on instant analytics of sales, capacity and performance.",
  },
  "solucion.benefits.year-round.title": {
    es: "Preparado para todo el año",
    cat: "Preparat per a tot l'any",
    fr: "Prêt toute l'année",
    en: "Ready year-round",
  },
  "solucion.benefits.year-round.description": {
    es: "Optimiza también tu operación en verano con módulos adaptados a bike parks, actividades guiadas y escuelas de deportes outdoor.",
    cat: "Optimitza també la teva operació a l'estiu amb mòduls adaptats a bike parks, activitats guiades i escoles d'esports outdoor.",
    fr: "Optimisez également votre fonctionnement en été avec des modules adaptés aux bike parks, activités guidées et écoles de sports outdoor.",
    en: "Also optimize your summer operation with modules adapted to bike parks, guided activities and outdoor sports schools.",
  },
  "solucion.cta.title": {
    es: "Con Ski Solution 360, tu estación no solo funciona mejor:",
    cat: "Amb Ski Solution 360, la teva estació no només funciona millor:",
    fr: "Avec Ski Solution 360, votre station ne fonctionne pas seulement mieux :",
    en: "With Ski Solution 360, your resort doesn't just work better:",
  },
  "solucion.cta.description": {
    es: "Se convierte en un ecosistema conectado, eficiente y rentable, listo para crecer en cualquier temporada.",
    cat: "Es converteix en un ecosistema connectat, eficient i rendible, llest per créixer en qualsevol temporada.",
    fr: "Elle devient un écosystème connecté, efficace et rentable, prêt à croître en toute saison.",
    en: "It becomes a connected, efficient and profitable ecosystem, ready to grow in any season.",
  },
  "solucion.modules.title": {
    es: "Módulos",
    cat: "Mòduls",
    fr: "Modules",
    en: "Modules",
  },
  "solucion.modules.core.title": {
    es: "Plataforma Core",
    cat: "Plataforma Core",
    fr: "Plateforme Core",
    en: "Core Platform",
  },
  "solucion.modules.core.description": {
    es: "Sistema modular que se adapta a tu estación con integración nativa con ERP y CRM.",
    cat: "Sistema modular que s'adapta a la teva estació amb integració nativa amb ERP i CRM.",
    fr: "Système modulaire qui s'adapte à votre station avec intégration native avec ERP et CRM.",
    en: "Modular system that adapts to your resort with native ERP and CRM integration.",
  },
  "solucion.modules.ticketing.title": {
    es: "Ticketing & Dynamic Pricing",
    cat: "Ticketing & Dynamic Pricing",
    fr: "Billetterie & Prix Dynamiques",
    en: "Ticketing & Dynamic Pricing",
  },
  "solucion.modules.ticketing.description": {
    es: "Ajusta precios según demanda, condiciones de nieve y fecha de compra.",
    cat: "Ajusta preus segons demanda, condicions de neu i data de compra.",
    fr: "Ajustez les prix selon la demande, les conditions de neige et la date d'achat.",
    en: "Adjust prices according to demand, snow conditions and purchase date.",
  },
  "solucion.modules.access-control.title": {
    es: "Control de Accesos RFID",
    cat: "Control d'Accessos RFID",
    fr: "Contrôle d'Accès RFID",
    en: "RFID Access Control",
  },
  "solucion.modules.access-control.description": {
    es: "Integración con tornos RFID, QR y Mobile Pass para validación instantánea.",
    cat: "Integració amb torns RFID, QR i Mobile Pass per a validació instantània.",
    fr: "Intégration avec tourniquets RFID, QR et Mobile Pass pour validation instantanée.",
    en: "Integration with RFID turnstiles, QR and Mobile Pass for instant validation.",
  },
  "solucion.modules.school.title": {
    es: "Escuela & Clases",
    cat: "Escola & Classes",
    fr: "École & Cours",
    en: "School & Classes",
  },
  "solucion.modules.school.description": {
    es: "Reservas online de clases con asignación automática de monitores.",
    cat: "Reserves online de classes amb assignació automàtica de monitors.",
    fr: "Réservations en ligne de cours avec attribution automatique d'instructeurs.",
    en: "Online class bookings with automatic instructor assignment.",
  },
  "solucion.modules.rental.title": {
    es: "Alquiler & Inventario",
    cat: "Lloguer & Inventari",
    fr: "Location & Inventaire",
    en: "Rental & Inventory",
  },
  "solucion.modules.rental.description": {
    es: "Control de inventario en tiempo real con gestión de reservas digital.",
    cat: "Control d'inventari en temps real amb gestió de reserves digital.",
    fr: "Contrôle d'inventaire en temps réel avec gestion de réservations numériques.",
    en: "Real-time inventory control with digital reservation management.",
  },
  "solucion.modules.pos.title": {
    es: "F&B & Retail POS",
    cat: "F&B & Retail POS",
    fr: "F&B & Retail POS",
    en: "F&B & Retail POS",
  },
  "solucion.modules.pos.description": {
    es: "Punto de venta unificado para bares, restaurantes y tiendas.",
    cat: "Punt de venda unificat per a bars, restaurants i botigues.",
    fr: "Point de vente unifié pour bars, restaurants et boutiques.",
    en: "Unified point of sale for bars, restaurants and shops.",
  },
  "solucion.modules.bi-crm.title": {
    es: "BI & CRM 360",
    cat: "BI & CRM 360",
    fr: "BI & CRM 360",
    en: "BI & CRM 360",
  },
  "solucion.modules.bi-crm.description": {
    es: "Análisis en tiempo real con segmentación avanzada de clientes.",
    cat: "Anàlisi en temps real amb segmentació avançada de clients.",
    fr: "Analyse en temps réel avec segmentation avancée des clients.",
    en: "Real-time analysis with advanced customer segmentation.",
  },

  "metrics.title": {
    es: "Números que hablan por sí solos",
    cat: "Números que parlen per si sols",
    fr: "Des chiffres qui parlent d'eux-mêmes",
    en: "Numbers that speak for themselves",
  },
  "metrics.trust": {
    es: "Confían en nosotros",
    cat: "Confien en nosaltres",
    fr: "Ils nous font confiance",
    en: "They trust us",
  },

  "hero.video-demo": {
    es: "Ver vídeo demo",
    cat: "Veure vídeo demo",
    fr: "Voir la vidéo démo",
    en: "Watch demo video",
  },
  "hero.real-time": {
    es: "Tiempo real",
    cat: "Temps real",
    fr: "Temps réel",
    en: "Real time",
  },
  "hero.analytics": {
    es: "Analytics",
    cat: "Analítiques",
    fr: "Analytiques",
    en: "Analytics",
  },
  "hero.dashboard-preview": {
    es: "Dashboard Preview / Hero Image",
    cat: "Previsualització del Dashboard / Imatge Hero",
    fr: "Aperçu du tableau de bord / Image héro",
    en: "Dashboard Preview / Hero Image",
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

  // FAQ Page
  "faq.title": {
    es: "FAQ",
    cat: "FAQ",
    en: "FAQ",
    fr: "FAQ",
  },
  "faq.description": {
    es: "Preguntas frecuentes sobre nuestro software de gestión para estaciones de esquí.",
    cat: "Preguntes freqüents sobre el nostre programari de gestió per a estacions d'esquí.",
    en: "Frequently asked questions about our ski resort management software.",
    fr: "Questions fréquemment posées sur notre logiciel de gestion pour stations de ski.",
  },

  // Ebooks Page
  "ebooks.title": {
    es: "Ebooks",
    cat: "Ebooks",
    en: "Ebooks",
    fr: "Ebooks",
  },
  "ebooks.description": {
    es: "Descarga nuestros recursos gratuitos sobre gestión de estaciones de esquí y optimización de ingresos.",
    cat: "Descarrega els nostres recursos gratuïts sobre gestió d'estacions d'esquí i optimització d'ingressos.",
    en: "Download our free resources on ski resort management and revenue optimization.",
    fr: "Téléchargez nos ressources gratuites sur la gestion des stations de ski et l'optimisation des revenus.",
  },

  // Casos de Éxito Page
  "casosExito.title": {
    es: "Casos de éxito",
    cat: "Casos d'èxit",
    en: "Success stories",
    fr: "Études de cas",
  },
  "casosExito.description": {
    es: "Descubre cómo nuestros clientes han transformado sus operaciones con Ski Solution 360.",
    cat: "Descobreix com els nostres clients han transformat les seves operacions amb Ski Solution 360.",
    en: "Discover how our clients have transformed their operations with Ski Solution 360.",
    fr: "Découvrez comment nos clients ont transformé leurs opérations avec Ski Solution 360.",
  },

  // BI & CRM Page
  "bicrm.hero.title": {
    es: `Datos que impulsan
decisiones y fidelizan clientes`,
    cat: `Dades que impulsen
decisions i fidelitzen clients`,
    en: `Data that drives decisions
and builds customer loyalty`,
    fr: `Données qui stimulent les décisions
et fidélisent les clients`,
  },
  "bicrm.hero.subtitle": {
    es: "BI & CRM",
    cat: "BI & CRM",
    en: "BI & CRM",
    fr: "BI & CRM",
  },
  "bicrm.hero.description": {
    es: `Toma decisiones basadas en datos y fideliza a tus clientes nuestro módulo BI & CRM.
    Informes en tiempo real, segmentación y campañas personalizadas.`,
    cat: "Pren decisions basades en dades i fidelitza els teus clients amb el mòdul BI & CRM de Ski Solution 360. Informes en temps real, segmentació i campanyes personalitzades.",
    en: "Make data-driven decisions and build customer loyalty with Ski Solution 360's BI & CRM module. Real-time reports, segmentation and personalized campaigns.",
    fr: "Prenez des décisions basées sur les données et fidélisez vos clients avec le module BI & CRM de Ski Solution 360. Rapports en temps réel, segmentation et campagnes personnalisées.",
  },
  "bicrm.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key Benefits",
    fr: "Avantages clés",
  },
  "bicrm.howItWorks.title": {
    es: "Cómo funciona",
    cat: "Com funciona",
    en: "How it works",
    fr: "Comment ça marche",
  },
  "bicrm.cta.title": {
    es: "Convierte datos en decisiones",
    cat: "Converteix dades en decisions",
    en: "Turn data into decisions",
    fr: "Transformez les données en décisions",
  },

  // Blog Page
  "blog.hero.title": {
    es: "Guías y consejos para estaciones de esquí",
    cat: "Guies i consells per a estacions d'esquí",
    en: "Guides and advice for ski resorts",
    fr: "Guides et conseils pour stations de ski",
  },
  "blog.hero.subtitle": {
    es: "Blog Ski Solution 360",
    cat: "Blog Ski Solution 360",
    en: "Ski Solution 360 Blog",
    fr: "Blog Ski Solution 360",
  },
  "blog.hero.description": {
    es: "Descubre tendencias y mejores prácticas para digitalizar y optimizar tu estación",
    cat: "Descobreix tendències i millors pràctiques per digitalitzar i optimitzar la teva estació",
    en: "Discover trends and best practices to digitize and optimize your resort",
    fr: "Découvrez les tendances et meilleures pratiques pour numériser et optimiser votre station",
  },
  "blog.latest.title": {
    es: "Últimos artículos",
    cat: "Últims articles",
    en: "Latest articles",
    fr: "Derniers articles",
  },
  "blog.readMore": {
    es: "Leer artículo completo",
    cat: "Llegir article complet",
    en: "Read full article",
    fr: "Lire l'article complet",
  },
  "blog.loadMore": {
    es: "Cargar más",
    cat: "Carregar més",
    en: "Load more",
    fr: "Charger plus",
  },
  "blog.loading": {
    es: "Cargando...",
    cat: "Carregant...",
    en: "Loading...",
    fr: "Chargement...",
  },
  "blog.cta.title": {
    es: "¿Listo para transformar tu estación?",
    cat: "Llest per transformar la teva estació?",
    en: "Ready to transform your resort?",
    fr: "Prêt à transformer votre station?",
  },
  "blog.cta.description": {
    es: "Aplica todo lo que has aprendido en estos artículos con la ayuda de nuestros expertos",
    cat: "Aplica tot el que has après en aquests articles amb l'ajuda dels nostres experts",
    en: "Apply everything you've learned in these articles with the help of our experts",
    fr: "Appliquez tout ce que vous avez appris dans ces articles avec l'aide de nos experts",
  },
  "blog.cta.button": {
    es: "Solicita una consultoría gratuita",
    cat: "Sol·licita una consultoria gratuïta",
    en: "Request a free consultation",
    fr: "Demander une consultation gratuite",
  },

  // Control de Accesos RFID Page
  "controlAccesos.title": {
    es: "Control de Accesos RFID",
    cat: "Control d'Accessos RFID",
    en: "RFID Access Control",
    fr: "Contrôle d'Accès RFID",
  },
  "controlAccesos.description": {
    es: "Control total de accesos con tecnología RFID, QR y Mobile Pass para una experiencia sin fricciones.",
    cat: "Control total d'accessos amb tecnologia RFID, QR i Mobile Pass per a una experiència sense friccions.",
    en: "Total access control with RFID, QR and Mobile Pass technology for a frictionless experience.",
    fr: "Contrôle total des accès avec la technologie RFID, QR et Mobile Pass pour une expérience sans friction.",
  },
  "controlAccesos.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "controlAccesos.howItWorks.title": {
    es: "Cómo funciona",
    cat: "Com funciona",
    en: "How it works",
    fr: "Comment ça marche",
  },
  "controlAccesos.cta.title": {
    es: "¿Quieres modernizar el control de accesos?",
    cat: "Vols modernitzar el control d'accessos?",
    en: "Want to modernize access control?",
    fr: "Vous voulez moderniser le contrôle d'accès?",
  },
  "controlAccesos.cta.description": {
    es: "Elimina las colas y mejora la experiencia de tus visitantes.",
    cat: "Elimina les cues i millora l'experiència dels teus visitants.",
    en: "Eliminate queues and improve your visitors' experience.",
    fr: "Éliminez les files d'attente et améliorez l'expérience de vos visiteurs.",
  },

  // Gestión Alquiler Equipo Page
  "gestionAlquiler.title": {
    es: "Alquiler & Inventario",
    cat: "Lloguer & Inventari",
    en: "Rental & Inventory",
    fr: "Location & Inventaire",
  },
  "gestionAlquiler.description": {
    es: "Gestiona todo tu inventario de esquís, snowboards y accesorios con el módulo Alquiler & Inventario de Ski Solution 360. Reservas online, control de stock y mantenimiento integrado.",
    cat: "Gestiona tot el teu inventari d'esquís, snowboards i accessoris amb el mòdul Lloguer & Inventari de Ski Solution 360. Reserves online, control d'estoc i manteniment integrat.",
    en: "Manage all your inventory of skis, snowboards and accessories with Ski Solution 360's Rental & Inventory module. Online reservations, stock control and integrated maintenance.",
    fr: "Gérez tout votre inventaire de skis, snowboards et accessoires avec le module Location & Inventaire de Ski Solution 360. Réservations en ligne, contrôle des stocks et maintenance intégrée.",
  },
  "gestionAlquiler.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "gestionAlquiler.howItWorks.title": {
    es: "¿Cómo funciona?",
    cat: "Com funciona?",
    en: "How does it work?",
    fr: "Comment ça marche?",
  },
  "gestionAlquiler.cta.title": {
    es: "Mantén tu operación siempre equipada, controlada y rentable.",
    cat: "Mantén la teva operació sempre equipada, controlada i rendible.",
    en: "Keep your operation always equipped, controlled and profitable.",
    fr: "Gardez votre opération toujours équipée, contrôlée et rentable.",
  },

  // Precio Dinámico Forfaits Page
  "precioDinamico.title": {
    es: "Ticketing & Dynamic Pricing",
    cat: "Ticketing & Dynamic Pricing",
    en: "Ticketing & Dynamic Pricing",
    fr: "Billetterie & Tarification Dynamique",
  },
  "precioDinamico.description": {
    es: "Aumenta ingresos y mejora la experiencia de tus clientes con el sistema de ticketing y precios dinámicos de Ski Solution 360. Venta online, control de accesos y tarifas inteligentes en un único sistema.",
    cat: "Augmenta ingressos i millora l'experiència dels teus clients amb el sistema de ticketing i preus dinàmics de Ski Solution 360. Venda online, control d'accessos i tarifes intel·ligents en un únic sistema.",
    en: "Increase revenue and improve your customers' experience with Ski Solution 360's ticketing and dynamic pricing system. Online sales, access control and smart pricing in a single system.",
    fr: "Augmentez les revenus et améliorez l'expérience de vos clients avec le système de billetterie et de tarification dynamique de Ski Solution 360. Vente en ligne, contrôle d'accès et tarification intelligente dans un seul système.",
  },
  "precioDinamico.howItWorks.title": {
    es: "Cómo funciona el Dynamic Pricing",
    cat: "Com funciona el Dynamic Pricing",
    en: "How Dynamic Pricing works",
    fr: "Comment fonctionne la Tarification Dynamique",
  },
  "precioDinamico.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "precioDinamico.cta.title": {
    es: "¿Quieres maximizar tus ingresos?",
    cat: "Vols maximitzar els teus ingressos?",
    en: "Want to maximize your revenue?",
    fr: "Vous voulez maximiser vos revenus?",
  },
  "precioDinamico.cta.description": {
    es: "La combinación perfecta para vender más y mejor.",
    cat: "La combinació perfecta per vendre més i millor.",
    en: "The perfect combination to sell more and better.",
    fr: "La combinaison parfaite pour vendre plus et mieux.",
  },

  // Punto de Venta Restauración Page
  "puntoVenta.title": {
    es: "Ventas y stock unificados para tu estación",
    cat: "Vendes i estoc unificats per a la teva estació",
    en: "Unified sales and stock for your resort",
    fr: "Ventes et stock unifiés pour votre station",
  },
  "puntoVenta.subtitle": {
    es: "F&B & Retail",
    cat: "F&B & Retail",
    en: "F&B & Retail",
    fr: "F&B & Retail",
  },
  "puntoVenta.heroSubtitle": {
    es: "Gestión de bares, restaurantes y tiendas en estaciones de esquí",
    cat: "Gestió de bars, restaurants i botigues en estacions d'esquí",
    en: "Management of bars, restaurants and shops in ski resorts",
    fr: "Gestion des bars, restaurants et magasins dans les stations de ski",
  },
  "puntoVenta.description": {
    es: "Optimiza la gestión de puntos de venta en restauración y retail con el módulo F&B & Retail de Ski Solution 360. Stock en tiempo real, integración con ERP y ventas centralizadas.",
    cat: "Optimitza la gestió de punts de venda en restauració i retail amb el mòdul F&B & Retail de Ski Solution 360. Estoc en temps real, integració amb ERP i vendes centralitzades.",
    en: "Optimize the management of restaurant and retail points of sale with Ski Solution 360's F&B & Retail module. Real-time stock, ERP integration and centralized sales.",
    fr: "Optimisez la gestion des points de vente en restauration et retail avec le module F&B & Retail de Ski Solution 360. Stock en temps réel, intégration ERP et ventes centralisées.",
  },
  "puntoVenta.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "puntoVenta.howItWorks.title": {
    es: "¿Cómo funciona?",
    cat: "Com funciona?",
    en: "How does it work?",
    fr: "Comment ça marche?",
  },
  "puntoVenta.cta.title": {
    es: "Simplifica, controla y potencia tus ventas dentro de la estación.",
    cat: "Simplifica, controla i potencia les teves vendes dins de l'estació.",
    en: "Simplify, control and boost your sales within the resort.",
    fr: "Simplifiez, contrôlez et boostez vos ventes au sein de la station.",
  },

  // Software Escuela Esquí Page
  "softwareEscuela.title": {
    es: "Escuela & Clases - Gestión integral de actividades",
    cat: "Escola & Classes - Gestió integral d'activitats",
    en: "School & Classes - Comprehensive activity management",
    fr: "École & Cours - Gestion intégrale des activités",
  },
  "softwareEscuela.description": {
    es: "Organiza y optimiza tu escuela de esquí o actividades outdoor con el módulo Escuela & Clases de Ski Solution 360. Reservas online, asignación automática de monitores y cobros integrados.",
    cat: "Organitza i optimitza la teva escola d'esquí o activitats outdoor amb el mòdul Escola & Classes de Ski Solution 360. Reserves online, assignació automàtica de monitors i cobraments integrats.",
    en: "Organize and optimize your ski school or outdoor activities with Ski Solution 360's School & Classes module. Online reservations, automatic instructor assignment and integrated payments.",
    fr: "Organisez et optimisez votre école de ski ou activités outdoor avec le module École & Cours de Ski Solution 360. Réservations en ligne, affectation automatique des moniteurs et paiements intégrés.",
  },
  "softwareEscuela.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "softwareEscuela.howItWorks.title": {
    es: "Cómo funciona",
    cat: "Com funciona",
    en: "How it works",
    fr: "Comment ça marche",
  },
  "softwareEscuela.cta.title": {
    es: "Planifica, organiza y gestiona",
    cat: "Planifica, organitza i gestiona",
    en: "Plan, organize and manage",
    fr: "Planifiez, organisez et gérez",
  },
  "softwareEscuela.cta.description": {
    es: "Planifica, organiza y gestiona cada actividad como nunca antes",
    cat: "Planifica, organitza i gestiona cada activitat com mai abans",
    en: "Plan, organize and manage each activity like never before",
    fr: "Planifiez, organisez et gérez chaque activité comme jamais auparavant",
  },

  // Software Gestión Bike Parks Page
  "bikeParks.title": {
    es: "Software de Gestión para Bike Parks",
    cat: "Programari de Gestió per a Bike Parks",
    en: "Management Software for Bike Parks",
    fr: "Logiciel de Gestion pour Bike Parks",
  },
  "bikeParks.description": {
    es: "Gestiona accesos, alquiler y actividades de tu bike park con Ski Solution 360. Optimiza ventas, control de aforo y operaciones en temporada de verano.",
    cat: "Gestiona accessos, lloguer i activitats del teu bike park amb Ski Solution 360. Optimitza vendes, control d'aforament i operacions en temporada d'estiu.",
    en: "Manage access, rental and activities of your bike park with Ski Solution 360. Optimize sales, capacity control and operations in summer season.",
    fr: "Gérez les accès, location et activités de votre bike park avec Ski Solution 360. Optimisez les ventes, contrôle de capacité et opérations en saison estivale.",
  },
  "bikeParks.challenges.title": {
    es: "Los principales desafíos incluyen:",
    cat: "Els principals reptes inclouen:",
    en: "The main challenges include:",
    fr: "Les principaux défis incluent:",
  },
  "bikeParks.modules.title": {
    es: "Módulos recomendados",
    cat: "Mòduls recomanats",
    en: "Recommended modules",
    fr: "Modules recommandés",
  },
  "bikeParks.modules.subtitle": {
    es: "Reutiliza tu infraestructura de invierno para el verano",
    cat: "Reutilitza la teva infraestructura d'hivern per a l'estiu",
    en: "Reuse your winter infrastructure for summer",
    fr: "Réutilisez votre infrastructure d'hiver pour l'été",
  },
  "bikeParks.caseStudy.title": {
    es: "Caso de éxito",
    cat: "Cas d'èxit",
    en: "Success story",
    fr: "Étude de cas",
  },
  "bikeParks.benefits.title": {
    es: "Beneficios clave",
    cat: "Beneficis clau",
    en: "Key benefits",
    fr: "Avantages clés",
  },
  "bikeParks.cta.title": {
    es: "¿Quieres que tu estación siga generando ingresos todo el año?",
    cat: "Vols que la teva estació continuï generant ingressos tot l'any?",
    en: "Want your resort to keep generating revenue all year round?",
    fr: "Vous voulez que votre station continue à générer des revenus toute l'année?",
  },
  "bikeParks.cta.subtitle": {
    es: "Ski Solution 360 – Haz que tu verano sea tan rentable como el invierno",
    cat: "Ski Solution 360 – Fes que el teu estiu sigui tan rendible com l'hivern",
    en: "Ski Solution 360 – Make your summer as profitable as winter",
    fr: "Ski Solution 360 – Rendez votre été aussi rentable que l'hiver",
  },
  "bikeParks.cta.button": {
    es: "Solicita una demo para bike parks",
    cat: "Sol·licita una demo per a bike parks",
    en: "Request a demo for bike parks",
    fr: "Demander une démo pour bike parks",
  },

  // Software Gestión Escuela Aventura Page
  "escuelaAventura.title": {
    es: "Software de Gestión para Actividades de Aventura y Outdoor",
    cat: "Programari de Gestió per a Activitats d'Aventura i Outdoor",
    en: "Management Software for Adventure and Outdoor Activities",
    fr: "Logiciel de Gestion pour Activités d'Aventure et Outdoor",
  },
  "escuelaAventura.description": {
    es: "Gestiona reservas, grupos, alquiler y pagos de tus actividades outdoor con Ski Solution 360. Ideal para rafting, escalada, senderismo, kayak o multiaventura.",
    cat: "Gestiona reserves, grups, lloguer i pagaments de les teves activitats outdoor amb Ski Solution 360. Ideal per a ràfting, escalada, senderisme, caiac o multiaventura.",
    en: "Manage bookings, groups, rental and payments for your outdoor activities with Ski Solution 360. Ideal for rafting, climbing, hiking, kayaking or multi-adventure.",
    fr: "Gérez les réservations, groupes, location et paiements de vos activités outdoor avec Ski Solution 360. Idéal pour rafting, escalade, randonnée, kayak ou multi-aventure.",
  },
  "escuelaAventura.challenges.title": {
    es: "Retos comunes en empresas de actividades outdoor",
    cat: "Reptes comuns en empreses d'activitats outdoor",
    en: "Common challenges in outdoor activity companies",
    fr: "Défis communs dans les entreprises d'activités outdoor",
  },
  "escuelaAventura.modules.title": {
    es: "Módulos recomendados",
    cat: "Mòduls recomanats",
    en: "Recommended modules",
    fr: "Modules recommandés",
  },
  "escuelaAventura.modules.subtitle": {
    es: "Todo lo que necesitas para gestionar tu centro de aventura",
    cat: "Tot el que necessites per gestionar el teu centre d'aventura",
    en: "Everything you need to manage your adventure center",
    fr: "Tout ce dont vous avez besoin pour gérer votre centre d'aventure",
  },
  "escuelaAventura.advantages.title": {
    es: "Ventajas",
    cat: "Avantatges",
    en: "Advantages",
    fr: "Avantages",
  },
  "escuelaAventura.cta.title": {
    es: "¿Listo para vivir tu temporada más organizada?",
    cat: "Llest per viure la teva temporada més organitzada?",
    en: "Ready to experience your most organized season?",
    fr: "Prêt à vivre votre saison la plus organisée?",
  },
  "escuelaAventura.cta.button": {
    es: "Solicita una demo para actividades outdoor",
    cat: "Sol·licita una demo per a activitats outdoor",
    en: "Request a demo for outdoor activities",
    fr: "Demander une démo pour activités outdoor",
  },

  // Software Gestión Escuelas Vela y Buceo Page
  "escuelaVelaBuceo.title": {
    es: "Software de Gestión para Escuelas de Vela y Buceo",
    cat: "Programari de Gestió per a Escoles de Vela i Busseig",
    en: "Management Software for Sailing and Diving Schools",
    fr: "Logiciel de Gestion pour Écoles de Voile et Plongée",
  },
  "escuelaVelaBuceo.description": {
    es: "Gestiona reservas, cursos, monitores y alquiler de material para deportes acuáticos con Ski Solution 360. Ideal para escuelas de vela, buceo, surf o kitesurf.",
    cat: "Gestiona reserves, cursos, monitors i lloguer de material per a esports aquàtics amb Ski Solution 360. Ideal per a escoles de vela, busseig, surf o kitesurf.",
    en: "Manage bookings, courses, instructors and equipment rental for water sports with Ski Solution 360. Ideal for sailing, diving, surfing or kitesurfing schools.",
    fr: "Gérez les réservations, cours, moniteurs et location de matériel pour sports nautiques avec Ski Solution 360. Idéal pour les écoles de voile, plongée, surf ou kitesurf.",
  },
  "escuelaVelaBuceo.challenges.title": {
    es: "Retos comunes en escuelas náuticas y de buceo",
    cat: "Reptes comuns en escoles nàutiques i de busseig",
    en: "Common challenges in nautical and diving schools",
    fr: "Défis communs dans les écoles nautiques et de plongée",
  },
  "escuelaVelaBuceo.modules.title": {
    es: "Módulos recomendados",
    cat: "Mòduls recomanats",
    en: "Recommended modules",
    fr: "Modules recommandés",
  },
  "escuelaVelaBuceo.modules.subtitle": {
    es: "Todo lo que necesitas para gestionar tu escuela náutica",
    cat: "Tot el que necessites per gestionar la teva escola nàutica",
    en: "Everything you need to manage your nautical school",
    fr: "Tout ce dont vous avez besoin pour gérer votre école nautique",
  },
  "escuelaVelaBuceo.advantages.title": {
    es: "Ventajas para escuelas de vela y buceo",
    cat: "Avantatges per a escoles de vela i busseig",
    en: "Advantages for sailing and diving schools",
    fr: "Avantages pour écoles de voile et plongée",
  },
  "escuelaVelaBuceo.features.title": {
    es: "Funcionalidades específicas para deportes acuáticos",
    cat: "Funcionalitats específiques per a esports aquàtics",
    en: "Specific functionalities for water sports",
    fr: "Fonctionnalités spécifiques pour sports nautiques",
  },
  "escuelaVelaBuceo.cta.title": {
    es: "¿Quieres que tu escuela sea más ágil y rentable?",
    cat: "Vols que la teva escola sigui més àgil i rendible?",
    en: "Want your school to be more agile and profitable?",
    fr: "Vous voulez que votre école soit plus agile et rentable?",
  },
  "escuelaVelaBuceo.cta.subtitle": {
    es: "Ski Solution 360 – La tecnología que navega contigo hacia el éxito",
    cat: "Ski Solution 360 – La tecnologia que navega amb tu cap a l'èxit",
    en: "Ski Solution 360 – The technology that sails with you to success",
    fr: "Ski Solution 360 – La technologie qui navigue avec vous vers le succès",
  },
  "escuelaVelaBuceo.cta.button": {
    es: "Solicita una demo para tu escuela náutica",
    cat: "Sol·licita una demo per a la teva escola nàutica",
    en: "Request a demo for your nautical school",
    fr: "Demander une démo pour votre école nautique",
  },

  // Software Gestión Museo Page
  "gestionMuseo.title": {
    es: "Software de Gestión para Museos y Centros Culturales",
    cat: "Programari de Gestió per a Museus i Centres Culturals",
    en: "Management Software for Museums and Cultural Centers",
    fr: "Logiciel de Gestion pour Musées et Centres Culturels",
  },
  "gestionMuseo.description": {
    es: "Gestiona venta de entradas, control de accesos y reservas de grupos con Ski Solution 360. Optimiza la experiencia del visitante y la operación de tu museo.",
    cat: "Gestiona venda d'entrades, control d'accessos i reserves de grups amb Ski Solution 360. Optimitza l'experiència del visitant i l'operació del teu museu.",
    en: "Manage ticket sales, access control and group bookings with Ski Solution 360. Optimize the visitor experience and your museum's operation.",
    fr: "Gérez la vente de billets, contrôle d'accès et réservations de groupes avec Ski Solution 360. Optimisez l'expérience visiteur et l'opération de votre musée.",
  },
  "gestionMuseo.challenges.title": {
    es: "Retos comunes en museos y centros culturales",
    cat: "Reptes comuns en museus i centres culturals",
    en: "Common challenges in museums and cultural centers",
    fr: "Défis communs dans les musées et centres culturels",
  },
  "gestionMuseo.modules.title": {
    es: "Módulos recomendados",
    cat: "Mòduls recomanats",
    en: "Recommended modules",
    fr: "Modules recommandés",
  },
  "gestionMuseo.modules.subtitle": {
    es: "Tecnología adaptada al sector cultural",
    cat: "Tecnologia adaptada al sector cultural",
    en: "Technology adapted to the cultural sector",
    fr: "Technologie adaptée au secteur culturel",
  },
  "gestionMuseo.benefits.title": {
    es: "Beneficios para tu museo",
    cat: "Beneficis per al teu museu",
    en: "Benefits for your museum",
    fr: "Avantages pour votre musée",
  },
  "gestionMuseo.useCases.title": {
    es: "Casos de uso específicos",
    cat: "Casos d'ús específics",
    en: "Specific use cases",
    fr: "Cas d'usage spécifiques",
  },
  "gestionMuseo.cta.title": {
    es: "Digitaliza tu museo o centro cultural",
    cat: "Digitalitza el teu museu o centre cultural",
    en: "Digitize your museum or cultural center",
    fr: "Numérisez votre musée ou centre culturel",
  },
  "gestionMuseo.cta.subtitle": {
    es: "Mejora la experiencia de tus visitantes y optimiza tu operación",
    cat: "Millora l'experiència dels teus visitants i optimitza la teva operació",
    en: "Improve your visitors' experience and optimize your operation",
    fr: "Améliorez l'expérience de vos visiteurs et optimisez votre opération",
  },
  "gestionMuseo.cta.button": {
    es: "Solicita una demo para tu museo",
    cat: "Sol·licita una demo per al teu museu",
    en: "Request a demo for your museum",
    fr: "Demander une démo pour votre musée",
  },

  // Software Gestión Jardines Nieve Page
  "jardinesNieve.title": {
    es: "Software de Gestión para Jardines de Nieve",
    cat: "Programari de Gestió per a Jardins de Neu",
    en: "Management Software for Snow Gardens",
    fr: "Logiciel de Gestion pour Jardins de Neige",
  },
  "jardinesNieve.description": {
    es: "Digitaliza tu jardín de nieve con Ski Solution 360. Control de reservas, pagos y grupos desde un sistema simple, económico y fácil de usar.",
    cat: "Digitalitza el teu jardí de neu amb Ski Solution 360. Control de reserves, pagaments i grups des d'un sistema simple, econòmic i fàcil d'usar.",
    en: "Digitize your snow garden with Ski Solution 360. Control of bookings, payments and groups from a simple, economical and easy-to-use system.",
    fr: "Numérisez votre jardin de neige avec Ski Solution 360. Contrôle des réservations, paiements et groupes depuis un système simple, économique et facile à utiliser.",
  },
  "jardinesNieve.challenges.title": {
    es: "Principales desafíos",
    cat: "Principals reptes",
    en: "Main challenges",
    fr: "Principaux défis",
  },
  "jardinesNieve.solution.title": {
    es: "La solución: digitalización simple y adaptada a tu escala",
    cat: "La solució: digitalització simple i adaptada a la teva escala",
    en: "The solution: simple digitization adapted to your scale",
    fr: "La solution: numérisation simple et adaptée à votre échelle",
  },
  "jardinesNieve.caseStudy.title": {
    es: "Caso de éxito",
    cat: "Cas d'èxit",
    en: "Success story",
    fr: "Étude de cas",
  },
  "jardinesNieve.modules.title": {
    es: "Módulos recomendados",
    cat: "Mòduls recomanats",
    en: "Recommended modules",
    fr: "Modules recommandés",
  },
  "jardinesNieve.modules.subtitle": {
    es: "Solo lo esencial para tu jardín de nieve",
    cat: "Només l'essencial per al teu jardí de neu",
    en: "Only the essentials for your snow garden",
    fr: "Seulement l'essentiel pour votre jardin de neige",
  },
  "jardinesNieve.advantages.title": {
    es: "Ventajas",
    cat: "Avantatges",
    en: "Advantages",
    fr: "Avantages",
  },
  "jardinesNieve.cta.title": {
    es: "¿Tu jardín de nieve necesita orden y agilidad?",
    cat: "El teu jardí de neu necessita ordre i agilitat?",
    en: "Does your snow garden need order and agility?",
    fr: "Votre jardin de neige a-t-il besoin d'ordre et d'agilité?",
  },
  "jardinesNieve.cta.button": {
    es: "Solicita una demo adaptada",
    cat: "Sol·licita una demo adaptada",
    en: "Request a tailored demo",
    fr: "Demander une démo adaptée",
  },

  // Blog Post Page
  "blogPost.backToBlog": {
    es: "Volver al blog",
    cat: "Tornar al blog",
    en: "Back to blog",
    fr: "Retour au blog",
  },
  "blogPost.tableOfContents": {
    es: "Índice de contenidos",
    cat: "Índex de continguts",
    en: "Table of contents",
    fr: "Table des matières",
  },
  "blogPost.categories.news": {
    es: "Noticias",
    cat: "Notícies",
    en: "News",
    fr: "Actualités",
  },
  "blogPost.categories.success-stories": {
    es: "Casos de éxito",
    cat: "Casos d'èxit",
    en: "Success stories",
    fr: "Études de cas",
  },
  "blogPost.categories.product": {
    es: "Producto",
    cat: "Producte",
    en: "Product",
    fr: "Produit",
  },
  "blogPost.categories.events": {
    es: "Eventos",
    cat: "Esdeveniments",
    en: "Events",
    fr: "Événements",
  },
  "blogPost.cta.title": {
    es: "¿Listo para revolucionar tu estación de esquí?",
    cat: "Llest per revolucionar la teva estació d'esquí?",
    en: "Ready to revolutionize your ski resort?",
    fr: "Prêt à révolutionner votre station de ski?",
  },
  "blogPost.cta.description": {
    es: "Descubre cómo nuestro software puede ayudarte a implementar precios dinámicos y optimizar tus ingresos de manera automática.",
    cat: "Descobreix com el nostre programari pot ajudar-te a implementar preus dinàmics i optimitzar els teus ingressos de manera automàtica.",
    en: "Discover how our software can help you implement dynamic pricing and optimize your revenue automatically.",
    fr: "Découvrez comment notre logiciel peut vous aider à implémenter une tarification dynamique et optimiser vos revenus automatiquement.",
  },

  // Not Found Page
  "notFound.title": {
    es: "404",
    cat: "404",
    en: "404",
    fr: "404",
  },
  "notFound.message": {
    es: "¡Ups! Página no encontrada",
    cat: "Ups! Pàgina no trobada",
    en: "Oops! Page not found",
    fr: "Oups ! Page non trouvée",
  },
  "notFound.backHome": {
    es: "Volver al inicio",
    cat: "Tornar a l'inici",
    en: "Return to Home",
    fr: "Retour à l'accueil",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("es");
  const navigate = useNavigate();
  const location = useLocation();

  const getLanguageFromPath = (pathname: string): Language => {
    const pathParts = pathname.split("/").filter(Boolean);
    const langFromPath = pathParts[0] as Language;
    return ["es", "cat", "fr", "en"].includes(langFromPath)
      ? langFromPath
      : "es";
  };

  useEffect(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    setLanguageState(currentLang);
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split("/").filter(Boolean);

    // Remove current language from path if present
    if (["es", "cat", "fr", "en"].includes(pathParts[0])) {
      pathParts.shift();
    }

    // Create new path with new language
    const newPath = `/${lang}/${pathParts.join("/")}`;
    navigate(newPath);
  };

  // Add form translations to the existing translations object
  const formTranslations = {
    // Demo Form
    "demoForm.title": {
      es: "Solicitar Demo Gratuita",
      cat: "Sol·licitar Demo Gratuïta",
      fr: "Demander une Démo Gratuite",
      en: "Request Free Demo",
    },
    "demoForm.description": {
      es: "Completa este formulario y nuestro equipo se pondrá en contacto contigo",
      cat: "Completa aquest formulari i el nostre equip es posarà en contacte amb tu",
      fr: "Complétez ce formulaire et notre équipe vous contactera",
      en: "Complete this form and our team will contact you",
    },
    "demoForm.name": {
      es: "Nombre",
      cat: "Nom",
      fr: "Nom",
      en: "Name",
    },
    "demoForm.company": {
      es: "Empresa",
      cat: "Empresa",
      fr: "Entreprise",
      en: "Company",
    },
    "demoForm.phone": {
      es: "Teléfono",
      cat: "Telèfon",
      fr: "Téléphone",
      en: "Phone",
    },
    "demoForm.email": {
      es: "Email",
      cat: "Email",
      fr: "Email",
      en: "Email",
    },
    "demoForm.employees": {
      es: "Número de empleados",
      cat: "Nombre d'empleats",
      fr: "Nombre d'employés",
      en: "Number of employees",
    },
    "demoForm.selectEmployees": {
      es: "Selecciona el número de empleados",
      cat: "Selecciona el nombre d'empleats",
      fr: "Sélectionnez le nombre d'employés",
      en: "Select number of employees",
    },
    "demoForm.more500": {
      es: "Más de 500",
      cat: "Més de 500",
      fr: "Plus de 500",
      en: "More than 500",
    },
    "demoForm.sector": {
      es: "Sector",
      cat: "Sector",
      fr: "Secteur",
      en: "Sector",
    },
    "demoForm.selectSector": {
      es: "Selecciona tu sector",
      cat: "Selecciona el teu sector",
      fr: "Sélectionnez votre secteur",
      en: "Select your sector",
    },
    "demoForm.skiResort": {
      es: "Estación de Esquí",
      cat: "Estació d'Esquí",
      fr: "Station de Ski",
      en: "Ski Resort",
    },
    "demoForm.adventurePark": {
      es: "Parque de Aventura",
      cat: "Parc d'Aventura",
      fr: "Parc d'Aventure",
      en: "Adventure Park",
    },
    "demoForm.bikePark": {
      es: "Bike Park",
      cat: "Bike Park",
      fr: "Bike Park",
      en: "Bike Park",
    },
    "demoForm.museum": {
      es: "Museo",
      cat: "Museu",
      fr: "Musée",
      en: "Museum",
    },
    "demoForm.other": {
      es: "Otro",
      cat: "Altre",
      fr: "Autre",
      en: "Other",
    },
    "demoForm.availability": {
      es: "¿Qué disponibilidad tienes? ¿Mañana o tardes?",
      cat: "Quina disponibilitat tens? Matí o tardes?",
      fr: "Quelle est votre disponibilité? Matin ou après-midi?",
      en: "What is your availability? Morning or afternoon?",
    },
    "demoForm.selectAvailability": {
      es: "Selecciona tu disponibilidad",
      cat: "Selecciona la teva disponibilitat",
      fr: "Sélectionnez votre disponibilité",
      en: "Select your availability",
    },
    "demoForm.morning": {
      es: "Mañanas",
      cat: "Matins",
      fr: "Matins",
      en: "Mornings",
    },
    "demoForm.afternoon": {
      es: "Tardes",
      cat: "Tardes",
      fr: "Après-midis",
      en: "Afternoons",
    },
    "demoForm.both": {
      es: "Ambos",
      cat: "Ambdós",
      fr: "Les deux",
      en: "Both",
    },
    "demoForm.submit": {
      es: "Solicitar Demo",
      cat: "Sol·licitar Demo",
      fr: "Demander une Démo",
      en: "Request Demo",
    },

    // Contact Form
    "contactForm.title": {
      es: "Contacta con Nosotros",
      cat: "Contacta amb Nosaltres",
      fr: "Contactez-nous",
      en: "Contact Us",
    },
    "contactForm.description": {
      es: "Envíanos tu consulta y te responderemos lo antes posible",
      cat: "Envia'ns la teva consulta i et respondrem al més aviat possible",
      fr: "Envoyez-nous votre demande et nous vous répondrons dès que possible",
      en: "Send us your inquiry and we will respond as soon as possible",
    },
    "contactForm.name": {
      es: "Nombre",
      cat: "Nom",
      fr: "Nom",
      en: "Name",
    },
    "contactForm.company": {
      es: "Empresa",
      cat: "Empresa",
      fr: "Entreprise",
      en: "Company",
    },
    "contactForm.modules": {
      es: "Módulos de interés",
      cat: "Mòduls d'interès",
      fr: "Modules d'intérêt",
      en: "Modules of interest",
    },
    "contactForm.moduleTicketing": {
      es: "Ticketing y Precio Dinámico",
      cat: "Ticketing i Preu Dinàmic",
      fr: "Billetterie et Prix Dynamique",
      en: "Ticketing and Dynamic Pricing",
    },
    "contactForm.moduleAccess": {
      es: "Control de Accesos RFID",
      cat: "Control d'Accessos RFID",
      fr: "Contrôle d'Accès RFID",
      en: "RFID Access Control",
    },
    "contactForm.moduleRental": {
      es: "Gestión de Alquiler de Equipos",
      cat: "Gestió d'Lloguer d'Equips",
      fr: "Gestion de Location d'Équipements",
      en: "Equipment Rental Management",
    },
    "contactForm.moduleSchool": {
      es: "Software Escuela de Esquí",
      cat: "Software Escola d'Esquí",
      fr: "Logiciel École de Ski",
      en: "Ski School Software",
    },
    "contactForm.moduleRestaurant": {
      es: "Punto de Venta Restauración",
      cat: "Punt de Venda Restauració",
      fr: "Point de Vente Restauration",
      en: "Restaurant Point of Sale",
    },
    "contactForm.moduleBiCrm": {
      es: "BI & CRM para Ski Resorts",
      cat: "BI & CRM per Ski Resorts",
      fr: "BI & CRM pour Stations de Ski",
      en: "BI & CRM for Ski Resorts",
    },
    "contactForm.moduleAnalytics": {
      es: "Analytics y Reporting",
      cat: "Analytics i Reporting",
      fr: "Analytics et Reporting",
      en: "Analytics and Reporting",
    },
    "contactForm.information": {
      es: "¿Qué información necesitas?",
      cat: "Quina informació necessites?",
      fr: "Quelles informations avez-vous besoin?",
      en: "What information do you need?",
    },
    "contactForm.informationPlaceholder": {
      es: "Describe qué información específica necesitas o qué te gustaría saber sobre nuestras soluciones...",
      cat: "Descriu quina informació específica necessites o què t'agradaria saber sobre les nostres solucions...",
      fr: "Décrivez les informations spécifiques dont vous avez besoin ou ce que vous aimeriez savoir sur nos solutions...",
      en: "Describe what specific information you need or what you would like to know about our solutions...",
    },
    "contactForm.submit": {
      es: "Enviar Consulta",
      cat: "Enviar Consulta",
      fr: "Envoyer la Demande",
      en: "Send Inquiry",
    },
  };

  const allTranslations = { ...translations, ...formTranslations };

  const t = (key: string): string => {
    return allTranslations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
