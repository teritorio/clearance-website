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
  Les outils classiques sont incomplets:
  - les outils de réplication n'intègrent pas de filtre qualité.
  - les outils qualité interviennent sur des données déjà répliquées.
  ::

::

::landing-solution
---
headline: La solution
title: "Clearance : un outil de réplication OSM doté d'un filtre qualité"
description: "Clearance ne modifie jamais OpenStreetMap. Les données problématiques sont simplement mises en attente, et les corrections sont à apporter directement dans OSM, à la source."
intro: "Clearance agit comme un outil d'amélioration continue de votre copie locale, adapté à vos usages métier :"
conclusion: "Vous disposez ainsi d'une version à jour des données OpenStreetMap, fiable pour vos usages et adaptée à vos contraintes de qualité, tout en continuant à contribuer au commun OpenStreetMap."
changesLabel: Changements
osmLabel: OpenStreetMap
clearanceLabel: Clearance
extractLabel: Extrait
feedbackLabel: Corrections dans OSM
---

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Changements conformes
  ---
  Les changements conformes sont intégrés automatiquement et immédiatement.
  ::

  ::landing-step
  ---
  icon: i-lucide-pause-circle
  title: Modifications sensibles
  ---
  Les modifications sensibles sont mises en attente pour vérification et, si nécessaire, correction dans OSM. Au prochain contrôle si tout est conforme, les modifications passeront le filtre et seront intégrées à la copie locale.
  ::

::

::landing-practice
---
headline: En pratique
---

  ::landing-practice-item
  ---
  icon: i-lucide-map-pin
  title: Territoire, thématique et collaboration
  ---
  Clearance vous permet de définir des projets territoriaux et thématiques (tags OSM) sur lesquels votre équipe collabore pour suivre et maintenir la qualité des données.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-list-checks
  title: Des règles adaptées à votre métier
  ---
  Clearance permet d'appliquer des contrôles adaptés à votre besoin. Par exemple :

  - déplacement d'un défibrillateur qui pourrait engager votre responsabilité
  - modification d'un segment de réseau routier susceptible de perturber un calculateur d'itinéraire
  - ajout d'un équipement public pas encore opérationnel, susceptible de générer un usage prématuré
  - suppression d'une référence pouvant rompre les jointures avec une base métier

  Ces situations sont courantes lorsque les données OSM sont utilisées dans un contexte opérationnel.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-database
  title: Un proxy qualité
  ---
  Clearance utilise en entrée comme en sortie les formats standard de l'écosystème d'OpenStreetMap. Il s'intègre de façon transparente à un processus de réutilisation des données OpenStreetMap en produisant des extraits, des diffs et une API Overpass sur la copie locale. Continuez à utiliser vos outils, ou ceux de l'écosystème OpenStreetMap, avec un meilleur niveau de confiance dans les données.
  ::

::

::landing-use-cases
---
headline: Cas d'usage
title: Pour qui est Clearance ?
description: "Clearance s'adresse aux organisations qui utilisent régulièrement les données d'OpenStreetMap avec des exigences de qualité."
---

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Opérateurs de mobilité et de transport
  ---
  La modification d'un segment de réseau routier peut perturber un calculateur d'itinéraire utilisé par vos services.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-shield-alert
  title: Services de secours et de sécurité
  ---
  Un déplacement d'un défibrillateur pourrait engager votre responsabilité si l'information diffusée est erronée.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Collectivités territoriales
  ---
  L'ajout d'un équipement public pas encore opérationnel peut générer un usage prématuré par le public.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-tree-pine
  title: Gestionnaires de parcs naturels
  ---
  La suppression ou la modification d'un sentier balisé peut mettre en danger les randonneurs qui suivent vos itinéraires.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Organismes de gestion de destination touristique
  ---
  Un point d'intérêt touristique mal référencé peut dégrader l'expérience des visiteurs de votre territoire.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-database
  title: Plateformes territoriales de données open data
  ---
  La suppression d'une référence peut rompre les jointures avec une base métier et provoquer des dysfonctionnements.
  ::

::

::landing-references
---
headline: Références
title: Plus de 40 organisations utilisent déjà Clearance
description: "Pour réutiliser les données OpenStreetMap avec davantage de confiance."
ctaLabel: Exemple de projet sur Clearance
ctaTo: https://clearance.teritorio.xyz/france_landes_poi/changes_logs
---

  ::landing-reference
  ---
  logo: /logos/Logo_SNCF.png
  title: SNCF Réseau
  ---
  Le chemin de fer français s'assure du maintien des informations liées aux voies et à la signalisation.
  ::

  ::landing-reference
  ---
  logo: /logos/Logotipo_del_Gobierno_de_Navarra.png
  title: Sécurité civile de Navarre
  ---
  Garantir la qualité des données liées à la voirie et au système d'adressage utilisé pour l'envoi des secours en Navarre, Espagne. Les données OSM sont utilisées comme référentiel pour le calcul d'itinéraire des interventions.
  ::

  ::landing-reference
  ---
  logo: /logos/otourisme.png
  title: 30 agences départementales et offices de tourisme
  ---
  Contrôler la qualité et suivre les contributions OSM sur de nombreuses thématiques en France hexagonale et outre-mers : équipements de loisirs, santé, commerces alimentaires, etc.
  ::

  ::landing-reference
  ---
  logo: /logos/NLnet_Foundation_logo.png
  title: Fondation NLNet
  ---
  Finance une partie des développements de Clearance via des [fonds européens](https://nlnet.nl/project/Clearance/){target="_blank"}.
  ::

::

::landing-cta
---
title: Demander une démonstration
description: "Lors d'une démonstration, nous échangeons sur votre contexte et vos besoins, vous présentons le fonctionnement de Clearance, illustrons des cas d'usage concrets et partageons notre feuille de route."
primaryLabel: Nous contacter
primaryTo: /contact
secondaryLabel: Comment ça marche ?
secondaryTo: /docs
---
::
