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
  Traditional OSM replication tools don't include a quality filter. They operate on data that has already been replicated, or at the cost of blocking replication entirely.
  ::

::

::landing-steps
---
headline: The solution
title: "Clearance: an OSM replication tool with a built-in quality filter"
description: "Clearance never modifies OpenStreetMap. Problematic data is simply held, and corrections are made directly in OSM at the source."
---

  ::landing-step
  ---
  icon: i-lucide-download
  title: Replication
  number: "1"
  ---
  Clearance fetches updates from the OpenStreetMap replication feed and analyzes them in real time.
  ::

  ::landing-step
  ---
  icon: i-lucide-filter
  title: Filtering
  number: "2"
  ---
  Compliant changes are integrated automatically and immediately. Sensitive modifications are held for review and, if needed, correction in OSM.
  ::

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Validation
  number: "3"
  ---
  On the next check, if everything is compliant, modifications will pass the filter and be integrated into your local copy. You get an up-to-date version, reliable and adapted to your quality requirements.
  ::

::

::landing-features
---
headline: In practice
title: Everything you need to secure your OSM replication
description: "A complete quality assurance pipeline between OpenStreetMap and your applications, while continuing to contribute to the OpenStreetMap commons."
---

  ::landing-feature
  ---
  icon: i-lucide-map-pin
  title: Territory and collaboration
  ---
  Define territorial and thematic projects on which your team collaborates to monitor and maintain data quality.
  ::

  ::landing-feature
  ---
  icon: i-lucide-list-checks
  title: Rules adapted to your business
  ---
  Apply controls tailored to your needs: relocations, deletions, premature additions, broken joins, and more.
  ::

  ::landing-feature
  ---
  icon: i-lucide-database
  title: Quality proxy
  ---
  Uses standard OpenStreetMap ecosystem formats for input and output. Continue using your tools with greater data confidence.
  ::

  ::landing-feature
  ---
  icon: i-lucide-shield-check
  title: Quality filter
  ---
  Automatically integrates compliant changes while holding suspicious modifications for human review.
  ::

  ::landing-feature
  ---
  icon: i-lucide-scan-search
  title: Semantic analysis
  ---
  Checks OSM tag consistency and detects potentially problematic changes before they reach your systems.
  ::

  ::landing-feature
  ---
  icon: i-lucide-code-2
  title: Open source
  ---
  Clearance is open source software under the AGPL-3.0 license. Deploy it on your infrastructure or opt for our SaaS offering.
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
  title: Destination management organizations
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
title: Over 40 organizations trust us
description: Clearance is already used in production by local authorities, operators, and institutions.
---
**SNCF Réseau** (French railways) ensures the maintenance of track and signaling information. **Civil Protection of Navarre** (Spain) guarantees the quality of road and addressing data used for emergency response route calculation. **30 departmental agencies and tourism offices** (mainland and overseas France) control quality across many themes: leisure facilities, health, food shops.

[View an example project (Landes)](https://clearance.teritorio.xyz/france_landes_poi/changes_logs){target="_blank"}
::

::landing-cta
---
title: Request a demonstration
description: "During a demonstration, we discuss your context and needs, present how Clearance works, illustrate concrete use cases, and share our roadmap."
primaryLabel: Contact us
primaryTo: /contact
secondaryLabel: Documentation
secondaryTo: /docs
---
::
