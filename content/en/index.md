---
title: "Quality Filter for OpenStreetMap Replication"
description: "Control the quality of your OpenStreetMap replication feed. Clearance automatically passes compliant changes and holds suspicious ones for review."
---

::landing-hero
---
headline: Quality filter for OSM replication
title: Control the quality of your OpenStreetMap replication
description: "Replicating OpenStreetMap data in a critical context? An unreviewed change can block an emergency route, distort a calculation, or engage your liability. Clearance filters your replication feed before it reaches your systems."
primaryLabel: View on GitHub
primaryTo: https://github.com/teritorio/clearance
secondaryLabel: Request a demo
secondaryTo: /contact
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
headline: Concrete examples
title: Rules adapted to your business
description: "These situations are common when OSM data is used in an operational context."
---

  ::landing-use-case
  ---
  icon: i-lucide-heart-pulse
  title: Defibrillator moved
  ---
  A defibrillator relocation could engage your liability if the published information is incorrect.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-route
  title: Road network modified
  ---
  A road segment modification can disrupt a route calculator used by your services.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-construction
  title: Facility not yet operational
  ---
  Adding a public facility that is not yet operational can lead to premature public use.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-link-2-off
  title: Reference deleted
  ---
  Deleting a reference can break joins with a business database and cause malfunctions.
  ::

::

::landing-use-cases
---
headline: Use cases
title: Who is Clearance for?
description: Any organization that replicates OpenStreetMap data in an operational context.
---

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Local authorities
  ---
  Ensure the reliability of map data used in your digital public services.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Transport operators
  ---
  Guarantee the quality of stop and network data for your passenger applications.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Tourism offices
  ---
  Maintain up-to-date and reliable points of interest for your visitors.
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
