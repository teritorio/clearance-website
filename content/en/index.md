---
title: "Quality Filter for OpenStreetMap Replication"
description: "Control the quality of your OpenStreetMap replication feed. Clearance automatically passes compliant changes and holds suspicious ones for review."
---

::landing-hero
---
headline: Quality filter for OSM replication
title: Control the quality of your OpenStreetMap replication
description: "Replicating OpenStreetMap data in a critical context? An unreviewed change can block an emergency route, distort a calculation, or engage your liability. Clearance is open source software that filters your replication feed before it reaches your systems."
primaryLabel: Request a demo
primaryTo: /contact
secondaryLabel: View on GitHub
secondaryTo: https://github.com/teritorio/clearance
---
::

::landing-problem
---
headline: The problem
title: How can you reuse OpenStreetMap data with confidence?
description: "When OpenStreetMap data becomes critical for a service, a question arises: how do you ensure its quality?"
---

  ::landing-problem-card
  ---
  icon: i-lucide-refresh-cw
  ---
  OpenStreetMap is constantly evolving. Every day, millions of changes are made by a global community of contributors: volunteers, public institutions, and businesses. This dynamism is a strength, but how do you prevent errors — most often unintentional — from affecting your services?
  ::

  ::landing-problem-card
  ---
  icon: i-lucide-alert-triangle
  ---
  Traditional tools are incomplete:
  - replication tools don't include a quality filter.
  - quality tools operate on data that has already been replicated.
  ::

::

::landing-solution
---
headline: The solution
title: "Clearance: an OSM replication tool with a built-in quality filter"
description: "Clearance never modifies OpenStreetMap. Problematic data is simply held, and corrections are to be made directly in OSM at the source."
intro: "Clearance acts as a continuous improvement tool for your local copy, adapted to your business needs:"
conclusion: "You get an up-to-date version of OpenStreetMap data, reliable for your needs and adapted to your quality requirements, while continuing to contribute to the OpenStreetMap commons."
changesLabel: Changes
osmLabel: OpenStreetMap
clearanceLabel: Clearance
extractLabel: Extract
feedbackLabel: Corrections in OSM
---

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Compliant changes
  ---
  Compliant changes are integrated automatically and immediately.
  ::

  ::landing-step
  ---
  icon: i-lucide-pause-circle
  title: Sensitive modifications
  ---
  Sensitive modifications are held for review and, if needed, correction in OSM. On the next check, if everything is compliant, modifications will pass the filter and be integrated into the local copy.
  ::

::

::landing-practice
---
headline: In practice
---

  ::landing-practice-item
  ---
  icon: i-lucide-map-pin
  title: Territory, theme and collaboration
  ---
  Clearance lets you define territorial and thematic projects (OSM tags) on which your team collaborates to monitor and maintain data quality.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-list-checks
  title: Rules adapted to your business
  ---
  Clearance lets you apply controls adapted to your needs. For example:

  - relocation of a defibrillator that could engage your liability
  - modification of a road network segment likely to disrupt a route calculator
  - addition of a public facility not yet operational, likely to cause premature use
  - deletion of a reference that could break joins with a business database

  These situations are common when OSM data is used in an operational context.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-database
  title: A quality proxy
  ---
  Clearance uses standard OpenStreetMap ecosystem formats for both input and output. It integrates seamlessly into an OpenStreetMap data reuse process by producing extracts, diffs and an Overpass API on the local copy. Continue using your tools, or those from the OpenStreetMap ecosystem, with greater data confidence.
  ::

::

::landing-use-cases
---
headline: Use cases
title: Who is Clearance for?
description: "Clearance is designed for organizations that regularly use OpenStreetMap data with quality requirements."
---

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Mobility and transport operators
  ---
  A road segment modification can disrupt a route calculator used by your services.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-shield-alert
  title: Emergency and security services
  ---
  A defibrillator relocation could engage your liability if the published information is incorrect.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Local authorities
  ---
  Adding a public facility that is not yet operational can lead to premature public use.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-tree-pine
  title: Natural park managers
  ---
  The removal or modification of a marked trail can endanger hikers following your routes.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Tourist destination management organizations
  ---
  A poorly referenced tourist point of interest can degrade the experience of visitors to your territory.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-database
  title: Territorial open data platforms
  ---
  Deleting a reference can break joins with a business database and cause malfunctions.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-layers
  title: Mapping application developers
  ---
  Inconsistent source data can cause display or navigation anomalies in your application.
  ::

::

::landing-references
---
headline: References
title: Over 40 organizations already use Clearance
description: "To reuse OpenStreetMap data with greater confidence."
ctaLabel: View an example project (Landes)
ctaTo: https://clearance.teritorio.xyz/france_landes_poi/changes_logs
---

  ::landing-reference
  ---
  logo: /logos/Logo_SNCF.png
  title: SNCF Réseau
  ---
  The French railway operator ensures the maintenance of track and signaling information.
  ::

  ::landing-reference
  ---
  logo: /logos/Logotipo_del_Gobierno_de_Navarra.png
  title: Civil Protection of Navarre
  ---
  Guarantees the quality of road and addressing data used for emergency response route calculation in Navarre, Spain. OSM data serves as the reference for intervention routing.
  ::

  ::landing-reference
  ---
  logo: /logos/otourisme.png
  title: 30 departmental agencies and tourism offices
  ---
  Control quality and monitor OSM contributions across many themes in mainland and overseas France: leisure facilities, health, food shops, and more.
  ::

  ::landing-reference
  ---
  logo: /logos/NLnet_Foundation_logo.png
  title: NLNet Foundation
  ---
  Funds part of Clearance development through [European grants](https://nlnet.nl/project/Clearance/){target="_blank"}.
  ::

::

::landing-cta
---
title: Request a demonstration
description: "During a demonstration, we discuss your context and needs, present how Clearance works, illustrate concrete use cases, and share our roadmap."
primaryLabel: Contact us
primaryTo: /contact
secondaryLabel: How it works?
secondaryTo: /docs
---
::
