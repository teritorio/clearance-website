---
title: "Clearance - Filtre qualité pour la réplication OpenStreetMap"
description: "Contrôlez la qualité de votre flux de réplication OpenStreetMap. Clearance filtre automatiquement les modifications conformes et retient les changements suspects pour vérification."
---

::landing-hero
---
headline: Filtre qualité pour la réplication OSM
title: Contrôlez la qualité de votre réplication OpenStreetMap
description: "Vous répliquez des données OpenStreetMap dans un contexte critique ? Une modification non vérifiée peut bloquer un itinéraire de secours, fausser un calcul ou engager votre responsabilité. Clearance filtre votre flux de réplication avant qu'il n'atteigne vos systèmes."
primaryLabel: Voir sur GitHub
primaryTo: https://github.com/teritorio/clearance
secondaryLabel: Demander une démo
secondaryTo: /contact
---
::

::landing-features
---
headline: Fonctionnalités
title: Tout ce qu'il faut pour sécuriser votre réplication OSM
description: "Un pipeline complet d'assurance qualité entre OpenStreetMap et vos applications. Clearance ne modifie jamais OpenStreetMap : les données problématiques sont mises en attente, et les corrections sont apportées directement dans OSM, à la source."
---

  ::landing-feature
  ---
  icon: i-lucide-shield-check
  title: Filtre qualité
  ---
  Intègre automatiquement les modifications conformes tout en retenant les changements suspects pour vérification humaine.
  ::

  ::landing-feature
  ---
  icon: i-lucide-git-merge
  title: Regroupement intelligent (LoCha)
  ---
  Regroupe les modifications liées en clusters géographiques cohérents pour une revue pertinente et contextualisée.
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
  icon: i-lucide-list-checks
  title: Règles de validation
  ---
  Sept catégories de règles couvrant les retards, suppressions, doublons, géométrie, réseau, tags et listes d'utilisateurs.
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
  icon: i-lucide-cloud-cog
  title: SaaS ou auto-hébergé
  ---
  Disponible en service managé par Teritorio ou en déploiement autonome sur votre infrastructure.
  ::

::

::landing-steps
---
headline: Comment ça marche
title: Trois étapes vers des données fiables
description: Clearance s'intègre dans votre flux de réplication OpenStreetMap existant.
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
  Les modifications conformes sont intégrées automatiquement et immédiatement. Les modifications sensibles sont mises en attente pour vérification.
  ::

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Validation
  number: "3"
  ---
  Un opérateur vérifie les changements retenus et, si nécessaire, corrige dans OSM. Au prochain contrôle, les modifications conformes passeront le filtre.
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
