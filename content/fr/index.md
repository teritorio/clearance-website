---
title: "Filtre qualité pour la réplication OpenStreetMap"
description: "Contrôlez la qualité de votre flux de réplication OpenStreetMap. Clearance filtre automatiquement les modifications conformes et retient les changements suspects pour vérification."
---

::landing-hero
---
headline: Filtre qualité pour la réplication OSM
title: Contrôlez la qualité de votre réplication OpenStreetMap
description: "Vous répliquez des données OpenStreetMap dans un contexte critique ? Une modification non vérifiée peut bloquer un itinéraire de secours, fausser un calcul ou engager votre responsabilité. Clearance est un logiciel libre qui filtre votre flux de réplication avant qu'il n'atteigne vos systèmes."
primaryLabel: Demander une démo
primaryTo: /contact
secondaryLabel: Voir sur GitHub
secondaryTo: https://github.com/teritorio/clearance
---
::

::landing-problem
---
headline: Le problème
title: Comment réutiliser les données OpenStreetMap avec confiance ?
description: "Lorsque les données OpenStreetMap deviennent critiques pour un service, une question apparaît : comment maîtriser leur qualité ?"
---

  ::landing-problem-card
  ---
  icon: i-lucide-refresh-cw
  ---
  OpenStreetMap évolue en permanence. Chaque jour, des millions de modifications sont apportées par une communauté mondiale de contributeurs : bénévoles, institutions publiques et entreprises. Cette dynamique est une force, mais comment éviter que des erreurs, le plus souvent involontaires, n'affectent vos services ?
  ::

  ::landing-problem-card
  ---
  icon: i-lucide-alert-triangle
  ---
  Les outils classiques de réplication des données OSM n'intègrent pas de filtre qualité. Ils interviennent sur des données déjà répliquées, ou au prix d'un blocage de la réplication.
  ::

::

::landing-steps
---
headline: La solution
title: "Clearance : un outil de réplication OSM doté d'un filtre qualité"
description: "Clearance ne modifie jamais OpenStreetMap. Les données problématiques sont simplement mises en attente, et les corrections sont apportées directement dans OSM, à la source."
---

  ::landing-step
  ---
  icon: i-lucide-download
  title: Réplication
  number: "1"
  ---
  Clearance récupère les mises à jour du flux de réplication OpenStreetMap et les analyse en temps réel.
  ::

  ::landing-step
  ---
  icon: i-lucide-filter
  title: Filtrage
  number: "2"
  ---
  Les modifications conformes sont intégrées automatiquement et immédiatement. Les modifications sensibles sont mises en attente pour vérification et, si nécessaire, correction dans OSM.
  ::

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Validation
  number: "3"
  ---
  Au prochain contrôle, si tout est conforme, les modifications passeront le filtre et seront intégrées à la copie locale. Vous disposez ainsi d'une version à jour, fiable et adaptée à vos contraintes de qualité.
  ::

::

::landing-features
---
headline: En pratique
title: Tout ce qu'il faut pour sécuriser votre réplication OSM
description: "Un pipeline complet d'assurance qualité entre OpenStreetMap et vos applications, tout en continuant à contribuer au commun OpenStreetMap."
---

  ::landing-feature
  ---
  icon: i-lucide-map-pin
  title: Territoire et collaboration
  ---
  Définissez des projets territoriaux et thématiques sur lesquels votre équipe collabore pour suivre et maintenir la qualité des données.
  ::

  ::landing-feature
  ---
  icon: i-lucide-list-checks
  title: Règles adaptées à votre métier
  ---
  Appliquez des contrôles adaptés à votre besoin : déplacements, suppressions, ajouts prématurés, ruptures de jointures et bien plus.
  ::

  ::landing-feature
  ---
  icon: i-lucide-database
  title: Proxy qualité
  ---
  Utilise en entrée comme en sortie les formats standard de l'écosystème OpenStreetMap. Continuez à utiliser vos outils avec un meilleur niveau de confiance.
  ::

  ::landing-feature
  ---
  icon: i-lucide-shield-check
  title: Filtre qualité
  ---
  Intègre automatiquement les modifications conformes tout en retenant les changements suspects pour vérification humaine.
  ::

  ::landing-feature
  ---
  icon: i-lucide-scan-search
  title: Analyse sémantique
  ---
  Vérifie la cohérence des tags OSM et détecte les modifications potentiellement problématiques avant qu'elles n'atteignent vos systèmes.
  ::

  ::landing-feature
  ---
  icon: i-lucide-code-2
  title: Logiciel libre
  ---
  Clearance est un logiciel libre sous licence AGPL-3.0. Déployez-le sur votre infrastructure ou optez pour notre offre SaaS.
  ::

::

::landing-use-cases
---
headline: Exemples concrets
title: Des règles adaptées à votre métier
description: "Ces situations sont courantes lorsque les données OSM sont utilisées dans un contexte opérationnel."
---

  ::landing-use-case
  ---
  icon: i-lucide-heart-pulse
  title: Défibrillateur déplacé
  ---
  Un déplacement d'un défibrillateur pourrait engager votre responsabilité si l'information diffusée est erronée.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-route
  title: Réseau routier modifié
  ---
  La modification d'un segment de réseau routier peut perturber un calculateur d'itinéraire utilisé par vos services.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-construction
  title: Équipement pas encore opérationnel
  ---
  L'ajout d'un équipement public pas encore opérationnel peut générer un usage prématuré par le public.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-link-2-off
  title: Référence supprimée
  ---
  La suppression d'une référence peut rompre les jointures avec une base métier et provoquer des dysfonctionnements.
  ::

::

::landing-use-cases
---
headline: Cas d'usage
title: Pour qui est Clearance ?
description: Toute organisation qui réplique des données OpenStreetMap dans un contexte opérationnel.
---

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Collectivités territoriales
  ---
  Assurez la fiabilité des données cartographiques utilisées dans vos services publics numériques.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Opérateurs de transport
  ---
  Garantissez la qualité des données d'arrêts et de réseaux pour vos applications voyageurs.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Offices de tourisme
  ---
  Maintenez des points d'intérêt à jour et fiables pour vos visiteurs.
  ::

::

::landing-references
---
headline: Références
title: Plus de 40 organisations nous font confiance
description: Clearance est déjà utilisé en production par des collectivités, des opérateurs et des institutions.
---
**SNCF Réseau** (chemin de fer français) s'assure du maintien des informations liées aux voies et à la signalisation. La **Sécurité civile de Navarre** (Espagne) garantit la qualité des données de voirie et d'adressage utilisées pour le calcul d'itinéraire des interventions de secours. **30 agences départementales et offices de tourisme** (France hexagonale et outre-mers) contrôlent la qualité sur de nombreuses thématiques : équipements de loisirs, santé, commerces alimentaires.

[Voir un exemple de projet (Landes)](https://clearance.teritorio.xyz/france_landes_poi/changes_logs){target="_blank"}
::

::landing-cta
---
title: Demander une démonstration
description: "Lors d'une démonstration, nous échangeons sur votre contexte et vos besoins, vous présentons le fonctionnement de Clearance, illustrons des cas d'usage concrets et partageons notre feuille de route."
primaryLabel: Nous contacter
primaryTo: /contact
secondaryLabel: Documentation
secondaryTo: /docs
---
::
