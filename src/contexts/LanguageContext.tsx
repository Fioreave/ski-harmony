import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'es' | 'cat' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solution': {
    es: 'Solución',
    cat: 'Solució',
    fr: 'Solution',
    en: 'Solution'
  },
  'nav.segments': {
    es: 'Segmentos',
    cat: 'Segments',
    fr: 'Segments',
    en: 'Segments'
  },
  'nav.success-stories': {
    es: 'Casos de éxito',
    cat: 'Casos d\'èxit',
    fr: 'Cas de succès',
    en: 'Success Stories'
  },
  'nav.resources': {
    es: 'Recursos',
    cat: 'Recursos',
    fr: 'Ressources',
    en: 'Resources'
  },
  'nav.blog': {
    es: 'Blog',
    cat: 'Blog',
    fr: 'Blog',
    en: 'Blog'
  },
  'nav.ebooks': {
    es: 'Ebooks',
    cat: 'Ebooks',
    fr: 'Ebooks',
    en: 'Ebooks'
  },
  'nav.webinars': {
    es: 'Webinars',
    cat: 'Webinars',
    fr: 'Webinaires',
    en: 'Webinars'
  },
  'nav.partners': {
    es: 'Partners',
    cat: 'Partners',
    fr: 'Partenaires',
    en: 'Partners'
  },
  'nav.company': {
    es: 'Compañía',
    cat: 'Companyia',
    fr: 'Entreprise',
    en: 'Company'
  },
  'nav.support': {
    es: 'Soporte',
    cat: 'Suport',
    fr: 'Support',
    en: 'Support'
  },
  'nav.faq': {
    es: 'FAQ',
    cat: 'FAQ',
    fr: 'FAQ',
    en: 'FAQ'
  },
  'nav.request-demo': {
    es: 'Solicita una demo',
    cat: 'Sol·licita una demo',
    fr: 'Demander une démo',
    en: 'Request a demo'
  },

  // Common
  'common.home': {
    es: 'Inicio',
    cat: 'Inici',
    fr: 'Accueil',
    en: 'Home'
  },
  'common.request-demo': {
    es: 'Solicita una demo',
    cat: 'Sol·licita una demo',
    fr: 'Demander une démo',
    en: 'Request a demo'
  },

  // Solution Page
  'solution.title': {
    es: 'La Solución Integral para tu Estación de Esquí',
    cat: 'La Solució Integral per a la teva Estació d\'Esquí',
    fr: 'La Solution Intégrale pour votre Station de Ski',
    en: 'The Comprehensive Solution for your Ski Resort'
  },
  'solution.description': {
    es: 'Nuestra plataforma reúne todos los módulos necesarios para gestionar tu estación de esquí de forma integral: ticketing, accesos, escuela, alquiler, restauración, retail, CRM y analítica. Con Ski Solution 360 optimizas ingresos, eliminas fricciones en la experiencia del cliente y mejoras la operación interna.',
    cat: 'La nostra plataforma reuneix tots els mòduls necessaris per gestionar la teva estació d\'esquí de forma integral: ticketing, accessos, escola, lloguer, restauració, retail, CRM i analítica. Amb Ski Solution 360 optimitzes ingressos, elimines friccions en l\'experiència del client i millores l\'operació interna.',
    fr: 'Notre plateforme rassemble tous les modules nécessaires pour gérer votre station de ski de manière intégrale : billetterie, accès, école, location, restauration, retail, CRM et analytique. Avec Ski Solution 360, vous optimisez les revenus, éliminez les frictions dans l\'expérience client et améliorez les opérations internes.',
    en: 'Our platform brings together all the necessary modules to comprehensively manage your ski resort: ticketing, access, school, rental, dining, retail, CRM and analytics. With Ski Solution 360 you optimize revenue, eliminate friction in the customer experience and improve internal operations.'
  },
  'solution.benefits.title': {
    es: 'Beneficios globales:',
    cat: 'Beneficis globals:',
    fr: 'Avantages globaux:',
    en: 'Global benefits:'
  },
  'solution.benefits.unification': {
    es: 'Unificación de todos los procesos en un único sistema.',
    cat: 'Unificació de tots els processos en un únic sistema.',
    fr: 'Unification de tous les processus dans un système unique.',
    en: 'Unification of all processes in a single system.'
  },
  'solution.benefits.revenue': {
    es: 'Aumento de ingresos con precios dinámicos y venta anticipada online.',
    cat: 'Augment d\'ingressos amb preus dinàmics i venda anticipada online.',
    fr: 'Augmentation des revenus avec des prix dynamiques et vente anticipée en ligne.',
    en: 'Revenue increase with dynamic pricing and advance online sales.'
  },
  'solution.benefits.control': {
    es: 'Control total de accesos, inventario y operaciones.',
    cat: 'Control total d\'accessos, inventari i operacions.',
    fr: 'Contrôle total des accès, inventaire et opérations.',
    en: 'Total control of access, inventory and operations.'
  },
  'solution.benefits.data': {
    es: 'Datos en tiempo real para tomar mejores decisiones.',
    cat: 'Dades en temps real per prendre millors decisions.',
    fr: 'Données en temps réel pour prendre de meilleures décisions.',
    en: 'Real-time data for better decision making.'
  },

  // Modules
  'modules.core.title': {
    es: 'Plataforma Core',
    cat: 'Plataforma Core',
    fr: 'Plateforme Core',
    en: 'Core Platform'
  },
  'modules.ticketing.title': {
    es: 'Ticketing & Dynamic Pricing',
    cat: 'Ticketing & Dynamic Pricing',
    fr: 'Billetterie & Prix Dynamiques',
    en: 'Ticketing & Dynamic Pricing'
  },
  'modules.access.title': {
    es: 'Control de Accesos RFID',
    cat: 'Control d\'Accessos RFID',
    fr: 'Contrôle d\'Accès RFID',
    en: 'RFID Access Control'
  },
  'modules.school.title': {
    es: 'Escuela & Clases',
    cat: 'Escola & Classes',
    fr: 'École & Cours',
    en: 'School & Classes'
  },
  'modules.rental.title': {
    es: 'Alquiler & Inventario',
    cat: 'Lloguer & Inventari',
    fr: 'Location & Inventaire',
    en: 'Rental & Inventory'
  },
  'modules.pos.title': {
    es: 'F&B & Retail POS',
    cat: 'F&B & Retail POS',
    fr: 'F&B & Retail POS',
    en: 'F&B & Retail POS'
  },
  'modules.crm.title': {
    es: 'BI & CRM 360',
    cat: 'BI & CRM 360',
    fr: 'BI & CRM 360',
    en: 'BI & CRM 360'
  },
  'modules.demo-cta': {
    es: 'Pedir demo del módulo',
    cat: 'Demanar demo del mòdul',
    fr: 'Demander une démo du module',
    en: 'Request module demo'
  },

  // Ski Solution 360 Page
  'ski360.title': {
    es: 'Plataforma Core',
    cat: 'Plataforma Core',
    fr: 'Plateforme Core',
    en: 'Core Platform'
  },
  'ski360.benefits.title': {
    es: 'Beneficios clave:',
    cat: 'Beneficis clau:',
    fr: 'Avantages clés:',
    en: 'Key benefits:'
  },
  'ski360.benefits.modular': {
    es: 'Sistema modular que se adapta a tu estación.',
    cat: 'Sistema modular que s\'adapta a la teva estació.',
    fr: 'Système modulaire qui s\'adapte à votre station.',
    en: 'Modular system that adapts to your resort.'
  },
  'ski360.benefits.integration': {
    es: 'Integración nativa con ERP y CRM.',
    cat: 'Integració nativa amb ERP i CRM.',
    fr: 'Intégration native avec ERP et CRM.',
    en: 'Native integration with ERP and CRM.'
  },
  'ski360.benefits.year-round': {
    es: 'Preparado para operar todo el año (invierno + actividades outdoor).',
    cat: 'Preparat per operar tot l\'any (hivern + activitats outdoor).',
    fr: 'Prêt à fonctionner toute l\'année (hiver + activités outdoor).',
    en: 'Ready to operate year-round (winter + outdoor activities).'
  },
  'ski360.how-it-works.title': {
    es: 'Cómo funciona:',
    cat: 'Com funciona:',
    fr: 'Comment ça marche:',
    en: 'How it works:'
  },
  'ski360.how-it-works.description': {
    es: 'La Plataforma Core centraliza todos los datos de la estación y conecta los módulos, evitando silos y duplicidad de información.',
    cat: 'La Plataforma Core centralitza totes les dades de l\'estació i connecta els mòduls, evitant silos i duplicitat d\'informació.',
    fr: 'La Plateforme Core centralise toutes les données de la station et connecte les modules, évitant les silos et la duplication d\'informations.',
    en: 'The Core Platform centralizes all resort data and connects modules, avoiding silos and information duplication.'
  },

  // Dynamic Pricing Page
  'pricing.title': {
    es: 'Ticketing & Dynamic Pricing',
    cat: 'Ticketing & Dynamic Pricing',
    fr: 'Billetterie & Prix Dynamiques',
    en: 'Ticketing & Dynamic Pricing'
  },
  'pricing.how-it-works.title': {
    es: 'Cómo funciona el Dynamic Pricing:',
    cat: 'Com funciona el Dynamic Pricing:',
    fr: 'Comment fonctionne le Prix Dynamique:',
    en: 'How Dynamic Pricing works:'
  },
  'pricing.how-it-works.description': {
    es: 'Ajusta el precio del forfait según demanda, condiciones de nieve, previsión meteorológica y fecha de compra. Facilita la venta anticipada online y aumenta la ocupación en días valle.',
    cat: 'Ajusta el preu del forfet segons demanda, condicions de neu, previsió meteorològica i data de compra. Facilita la venda anticipada online i augmenta l\'ocupació en dies vall.',
    fr: 'Ajuste le prix du forfait selon la demande, les conditions de neige, les prévisions météorologiques et la date d\'achat. Facilite la vente anticipée en ligne et augmente l\'occupation les jours creux.',
    en: 'Adjusts lift ticket prices based on demand, snow conditions, weather forecast and purchase date. Facilitates advance online sales and increases occupancy on valley days.'
  },
  'pricing.benefits.revenue': {
    es: 'Aumento de ingresos por gestión dinámica de tarifas.',
    cat: 'Augment d\'ingressos per gestió dinàmica de tarifes.',
    fr: 'Augmentation des revenus par gestion dynamique des tarifs.',
    en: 'Revenue increase through dynamic rate management.'
  },
  'pricing.benefits.queues': {
    es: 'Reducción de colas en taquillas.',
    cat: 'Reducció de cues a taquilles.',
    fr: 'Réduction des files d\'attente aux billetteries.',
    en: 'Reduction of queues at ticket offices.'
  },
  'pricing.benefits.integration': {
    es: 'Integración con accesos RFID y apps móviles.',
    cat: 'Integració amb accessos RFID i apps mòbils.',
    fr: 'Intégration avec accès RFID et applications mobiles.',
    en: 'Integration with RFID access and mobile apps.'
  },

  // Access Control Page
  'access.title': {
    es: 'Control de Accesos RFID',
    cat: 'Control d\'Accessos RFID',
    fr: 'Contrôle d\'Accès RFID',
    en: 'RFID Access Control'
  },
  'access.benefits.integration': {
    es: 'Integración con tornos RFID, QR y Mobile Pass.',
    cat: 'Integració amb torns RFID, QR i Mobile Pass.',
    fr: 'Intégration avec tourniquets RFID, QR et Mobile Pass.',
    en: 'Integration with RFID turnstiles, QR and Mobile Pass.'
  },
  'access.benefits.validation': {
    es: 'Validación instantánea de accesos.',
    cat: 'Validació instantània d\'accessos.',
    fr: 'Validation instantanée des accès.',
    en: 'Instant access validation.'
  },
  'access.benefits.monitoring': {
    es: 'Monitorización de aforo en tiempo real.',
    cat: 'Monitorització d\'aforament en temps real.',
    fr: 'Surveillance de la capacité en temps réel.',
    en: 'Real-time capacity monitoring.'
  },
  'access.how-it-works.description': {
    es: 'Compatible con hardware existente (Axess, Skidata, Suprema). Conecta con ticketing y CRM para control total.',
    cat: 'Compatible amb hardware existent (Axess, Skidata, Suprema). Connecta amb ticketing i CRM per control total.',
    fr: 'Compatible avec le matériel existant (Axess, Skidata, Suprema). Se connecte à la billetterie et au CRM pour un contrôle total.',
    en: 'Compatible with existing hardware (Axess, Skidata, Suprema). Connects with ticketing and CRM for total control.'
  },

  // Ski School Page
  'school.title': {
    es: 'Escuela & Clases',
    cat: 'Escola & Classes',
    fr: 'École & Cours',
    en: 'School & Classes'
  },
  'school.benefits.bookings': {
    es: 'Reservas online de clases de esquí, snowboard o actividades de verano.',
    cat: 'Reserves online de classes d\'esquí, snowboard o activitats d\'estiu.',
    fr: 'Réservations en ligne de cours de ski, snowboard ou activités d\'été.',
    en: 'Online bookings for ski, snowboard or summer activity lessons.'
  },
  'school.benefits.assignment': {
    es: 'Asignación automática de monitores según disponibilidad.',
    cat: 'Assignació automàtica de monitors segons disponibilitat.',
    fr: 'Attribution automatique d\'instructeurs selon la disponibilité.',
    en: 'Automatic instructor assignment based on availability.'
  },
  'school.benefits.management': {
    es: 'Gestión de horarios y grupos centralizada.',
    cat: 'Gestió d\'horaris i grups centralitzada.',
    fr: 'Gestion centralisée des horaires et groupes.',
    en: 'Centralized schedule and group management.'
  },
  'school.how-it-works.description': {
    es: 'El cliente puede reservar forfait + clases en la misma compra. El sistema asigna monitores, genera planning y procesa el cobro.',
    cat: 'El client pot reservar forfet + classes en la mateixa compra. El sistema assigna monitors, genera planning i processa el cobrament.',
    fr: 'Le client peut réserver forfait + cours dans le même achat. Le système assigne les instructeurs, génère la planification et traite le paiement.',
    en: 'The customer can book lift ticket + lessons in the same purchase. The system assigns instructors, generates planning and processes payment.'
  },

  // Rental Page
  'rental.title': {
    es: 'Alquiler & Inventario',
    cat: 'Lloguer & Inventari',
    fr: 'Location & Inventaire',
    en: 'Rental & Inventory'
  },
  'rental.benefits.inventory': {
    es: 'Control de inventario en tiempo real.',
    cat: 'Control d\'inventari en temps real.',
    fr: 'Contrôle d\'inventaire en temps réel.',
    en: 'Real-time inventory control.'
  },
  'rental.benefits.bookings': {
    es: 'Gestión de reservas de esquís, tablas, botas y cascos.',
    cat: 'Gestió de reserves d\'esquís, taules, botes i cascos.',
    fr: 'Gestion des réservations de skis, planches, chaussures et casques.',
    en: 'Management of ski, board, boot and helmet reservations.'
  },
  'rental.benefits.maintenance': {
    es: 'Alertas de mantenimiento y trazabilidad completa.',
    cat: 'Alertes de manteniment i traçabilitat completa.',
    fr: 'Alertes de maintenance et traçabilité complète.',
    en: 'Maintenance alerts and complete traceability.'
  },
  'rental.how-it-works.description': {
    es: 'Desde la reserva hasta la devolución, todo se gestiona digitalmente. El cliente puede reservar online junto con el forfait.',
    cat: 'Des de la reserva fins al retorn, tot es gestiona digitalment. El client pot reservar online juntament amb el forfet.',
    fr: 'De la réservation au retour, tout est géré numériquement. Le client peut réserver en ligne avec le forfait.',
    en: 'From booking to return, everything is managed digitally. The customer can book online along with the lift ticket.'
  },

  // POS Page
  'pos.title': {
    es: 'F&B & Retail POS',
    cat: 'F&B & Retail POS',
    fr: 'F&B & Retail POS',
    en: 'F&B & Retail POS'
  },
  'pos.benefits.unified': {
    es: 'Punto de venta unificado para bares, restaurantes y tiendas.',
    cat: 'Punt de venda unificat per a bars, restaurants i botigues.',
    fr: 'Point de vente unifié pour bars, restaurants et magasins.',
    en: 'Unified point of sale for bars, restaurants and shops.'
  },
  'pos.benefits.stock': {
    es: 'Gestión de stock conectada al ERP.',
    cat: 'Gestió d\'estoc connectada a l\'ERP.',
    fr: 'Gestion des stocks connectée à l\'ERP.',
    en: 'Stock management connected to ERP.'
  },
  'pos.benefits.crm': {
    es: 'Integración con CRM para ventas cruzadas.',
    cat: 'Integració amb CRM per vendes creuades.',
    fr: 'Intégration CRM pour ventes croisées.',
    en: 'CRM integration for cross-selling.'
  },
  'pos.how-it-works.description': {
    es: 'Permite cobro ágil, control de inventario y análisis de ventas en tiempo real.',
    cat: 'Permet cobrament àgil, control d\'inventari i anàlisi de vendes en temps real.',
    fr: 'Permet un paiement agile, contrôle d\'inventaire et analyse des ventes en temps réel.',
    en: 'Enables agile billing, inventory control and real-time sales analysis.'
  },

  // CRM Page
  'crm.title': {
    es: 'BI & CRM 360',
    cat: 'BI & CRM 360',
    fr: 'BI & CRM 360',
    en: 'BI & CRM 360'
  },
  'crm.benefits.analytics': {
    es: 'Análisis en tiempo real de ventas, aforo y reservas.',
    cat: 'Anàlisi en temps real de vendes, aforament i reserves.',
    fr: 'Analyse en temps réel des ventes, capacité et réservations.',
    en: 'Real-time analysis of sales, capacity and bookings.'
  },
  'crm.benefits.segmentation': {
    es: 'Segmentación avanzada de clientes.',
    cat: 'Segmentació avançada de clients.',
    fr: 'Segmentation avancée des clients.',
    en: 'Advanced customer segmentation.'
  },
  'crm.benefits.loyalty': {
    es: 'CRM integrado para fidelización.',
    cat: 'CRM integrat per fidelització.',
    fr: 'CRM intégré pour la fidélisation.',
    en: 'Integrated CRM for loyalty.'
  },
  'crm.how-it-works.description': {
    es: 'Centraliza datos de todos los módulos y genera informes visuales para la toma de decisiones.',
    cat: 'Centralitza dades de tots els mòduls i genera informes visuals per la presa de decisions.',
    fr: 'Centralise les données de tous les modules et génère des rapports visuels pour la prise de décision.',
    en: 'Centralizes data from all modules and generates visual reports for decision making.'
  },

  // Segments Page
  'segments.title': {
    es: 'Segmentos a los que ayudamos',
    cat: 'Segments als quals ajudem',
    fr: 'Segments que nous aidons',
    en: 'Segments we help'
  },
  'segments.description': {
    es: 'Cada estación tiene retos únicos. Ski Solution 360 adapta sus módulos para resolver las necesidades de cada segmento, desde grandes resorts hasta museos.',
    cat: 'Cada estació té reptes únics. Ski Solution 360 adapta els seus mòduls per resoldre les necessitats de cada segment, des de grans resorts fins a museus.',
    fr: 'Chaque station a des défis uniques. Ski Solution 360 adapte ses modules pour résoudre les besoins de chaque segment, des grands resorts aux musées.',
    en: 'Each resort has unique challenges. Ski Solution 360 adapts its modules to solve the needs of each segment, from large resorts to museums.'
  },

  // Segments - Individual
  'segments.large-resorts': {
    es: 'Grandes Resorts',
    cat: 'Grans Resorts',
    fr: 'Grands Resorts',
    en: 'Large Resorts'
  },
  'segments.medium-resorts': {
    es: 'Resorts Medianos',
    cat: 'Resorts Mitjans',
    fr: 'Resorts Moyens',
    en: 'Medium Resorts'
  },
  'segments.ski-schools': {
    es: 'Escuelas de Esquí',
    cat: 'Escoles d\'Esquí',
    fr: 'Écoles de Ski',
    en: 'Ski Schools'
  },
  'segments.snow-gardens': {
    es: 'Jardines de Nieve',
    cat: 'Jardins de Neu',
    fr: 'Jardins de Neige',
    en: 'Snow Gardens'
  },
  'segments.bike-parks': {
    es: 'Bike Parks',
    cat: 'Bike Parks',
    fr: 'Bike Parks',
    en: 'Bike Parks'
  },
  'segments.outdoor-activities': {
    es: 'Actividades Outdoor',
    cat: 'Activitats Outdoor',
    fr: 'Activités Outdoor',
    en: 'Outdoor Activities'
  },
  'segments.sailing-diving': {
    es: 'Escuela de Vela y Buceo',
    cat: 'Escola de Vela i Busseig',
    fr: 'École de Voile et Plongée',
    en: 'Sailing & Diving School'
  },
  'segments.museums': {
    es: 'Museos',
    cat: 'Museus',
    fr: 'Musées',
    en: 'Museums'
  },

  // Large Resorts Page
  'large-resorts.title': {
    es: 'Grandes Resorts',
    cat: 'Grans Resorts',
    fr: 'Grands Resorts',
    en: 'Large Resorts'
  },
  'large-resorts.challenges.title': {
    es: 'Retos comunes:',
    cat: 'Reptes comuns:',
    fr: 'Défis communs:',
    en: 'Common challenges:'
  },
  'large-resorts.challenges.visitors': {
    es: 'Gestionar miles de visitantes diarios.',
    cat: 'Gestionar milers de visitants diaris.',
    fr: 'Gérer des milliers de visiteurs quotidiens.',
    en: 'Managing thousands of daily visitors.'
  },
  'large-resorts.challenges.queues': {
    es: 'Evitar colas y saturaciones en accesos.',
    cat: 'Evitar cues i saturacions en accessos.',
    fr: 'Éviter les files d\'attente et saturations aux accès.',
    en: 'Avoiding queues and congestion at access points.'
  },
  'large-resorts.challenges.revenue': {
    es: 'Controlar ingresos en múltiples áreas (forfaits, retail, restauración).',
    cat: 'Controlar ingressos en múltiples àrees (forfets, retail, restauració).',
    fr: 'Contrôler les revenus dans plusieurs zones (forfaits, retail, restauration).',
    en: 'Controlling revenue across multiple areas (lift tickets, retail, dining).'
  },
  'large-resorts.solution.title': {
    es: 'Solución Ski Solution 360:',
    cat: 'Solució Ski Solution 360:',
    fr: 'Solution Ski Solution 360:',
    en: 'Ski Solution 360 Solution:'
  },
  'large-resorts.solution.pricing': {
    es: 'Ticketing dinámico para maximizar ingresos.',
    cat: 'Ticketing dinàmic per maximitzar ingressos.',
    fr: 'Billetterie dynamique pour maximiser les revenus.',
    en: 'Dynamic ticketing to maximize revenue.'
  },
  'large-resorts.solution.access': {
    es: 'Control de accesos RFID.',
    cat: 'Control d\'accessos RFID.',
    fr: 'Contrôle d\'accès RFID.',
    en: 'RFID access control.'
  },
  'large-resorts.solution.integration': {
    es: 'Integración con ERP y CRM.',
    cat: 'Integració amb ERP i CRM.',
    fr: 'Intégration avec ERP et CRM.',
    en: 'Integration with ERP and CRM.'
  },

  // Partners Page
  'partners.title': {
    es: 'Integraciones & Partners',
    cat: 'Integracions & Partners',
    fr: 'Intégrations & Partenaires',
    en: 'Integrations & Partners'
  },
  'partners.description': {
    es: 'Conoce a nuestros socios estratégicos que nos ayudan a ofrecer la mejor solución integral para tu estación de esquí.',
    cat: 'Coneix els nostres socis estratègics que ens ajuden a oferir la millor solució integral per a la teva estació d\'esquí.',
    fr: 'Découvrez nos partenaires stratégiques qui nous aident à offrir la meilleure solution intégrale pour votre station de ski.',
    en: 'Meet our strategic partners who help us offer the best comprehensive solution for your ski resort.'
  },
  'partners.access-systems': {
    es: 'Sistema de Accesos',
    cat: 'Sistema d\'Accessos',
    fr: 'Système d\'Accès',
    en: 'Access System'
  },
  'partners.payment-methods': {
    es: 'Medios de Pago',
    cat: 'Mitjans de Pagament',
    fr: 'Moyens de Paiement',
    en: 'Payment Methods'
  },
  'partners.online-platforms': {
    es: 'Plataformas Online',
    cat: 'Plataformes Online',
    fr: 'Plateformes En Ligne',
    en: 'Online Platforms'
  },
  'partners.erp-accounting': {
    es: 'ERP & Contabilidad',
    cat: 'ERP & Comptabilitat',
    fr: 'ERP & Comptabilité',
    en: 'ERP & Accounting'
  },
  'partners.specialized-services': {
    es: 'Servicios Especializados',
    cat: 'Serveis Especialitzats',
    fr: 'Services Spécialisés',
    en: 'Specialized Services'
  },
  'partners.mobile-wallets': {
    es: 'Mobile Wallets',
    cat: 'Mobile Wallets',
    fr: 'Portefeuilles Mobiles',
    en: 'Mobile Wallets'
  },
  'partners.need-integration': {
    es: '¿Necesitas una integración específica?',
    cat: 'Necessites una integració específica?',
    fr: 'Besoin d\'une intégration spécifique?',
    en: 'Need a specific integration?'
  },
  'partners.integration-description': {
    es: 'Trabajamos constantemente para ampliar nuestro ecosistema de partners e integraciones.',
    cat: 'Treballem constantment per ampliar el nostre ecosistema de partners i integracions.',
    fr: 'Nous travaillons constamment pour élargir notre écosystème de partenaires et d\'intégrations.',
    en: 'We constantly work to expand our ecosystem of partners and integrations.'
  },

  // Languages
  'lang.es': {
    es: 'ES - Español',
    cat: 'ES - Espanyol',
    fr: 'ES - Espagnol',
    en: 'ES - Spanish'
  },
  'lang.cat': {
    es: 'CAT - Català',
    cat: 'CAT - Català',
    fr: 'CAT - Catalan',
    en: 'CAT - Catalan'
  },
  'lang.fr': {
    es: 'FR - Français',
    cat: 'FR - Francès',
    fr: 'FR - Français',
    en: 'FR - French'
  },
  'lang.en': {
    es: 'EN - English',
    cat: 'EN - Anglès',
    fr: 'EN - Anglais',
    en: 'EN - English'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const navigate = useNavigate();
  const location = useLocation();

  const getLanguageFromPath = (pathname: string): Language => {
    const pathParts = pathname.split('/').filter(Boolean);
    const langFromPath = pathParts[0] as Language;
    return ['es', 'cat', 'fr', 'en'].includes(langFromPath) ? langFromPath : 'es';
  };

  useEffect(() => {
    const currentLang = getLanguageFromPath(location.pathname);
    setLanguageState(currentLang);
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    
    // Remove current language from path if present
    if (['es', 'cat', 'fr', 'en'].includes(pathParts[0])) {
      pathParts.shift();
    }
    
    // Create new path with new language
    const newPath = `/${lang}/${pathParts.join('/')}`;
    navigate(newPath);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};