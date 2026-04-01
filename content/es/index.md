---
title: "Filtro de calidad para la replicación OpenStreetMap"
description: "Controle la calidad de su flujo de replicación OpenStreetMap. Clearance filtra automáticamente los cambios conformes y retiene los sospechosos para verificación."
---

::landing-hero
---
headline: Filtro de calidad para la replicación OSM
title: Controle la calidad de su replicación OpenStreetMap
description: "¿Replica datos OpenStreetMap en un contexto crítico? Un cambio no verificado puede bloquear una ruta de emergencia, falsear un cálculo o comprometer su responsabilidad. Clearance es un software libre que filtra su flujo de replicación antes de que llegue a sus sistemas."
primaryLabel: Solicitar una demo
primaryTo: /contact
secondaryLabel: Ver en GitHub
secondaryTo: https://github.com/teritorio/clearance
---
::

::landing-problem
---
headline: El problema
title: ¿Cómo reutilizar los datos de OpenStreetMap con confianza?
description: "Cuando los datos de OpenStreetMap se vuelven críticos para un servicio, surge una pregunta: ¿cómo garantizar su calidad?"
---

  ::landing-problem-card
  ---
  icon: i-lucide-refresh-cw
  ---
  OpenStreetMap evoluciona constantemente. Cada día, millones de modificaciones son realizadas por una comunidad global de contribuidores: voluntarios, instituciones públicas y empresas. Este dinamismo es una fortaleza, pero ¿cómo evitar que errores, la mayoría involuntarios, afecten sus servicios?
  ::

  ::landing-problem-card
  ---
  icon: i-lucide-alert-triangle
  ---
  Las herramientas clásicas son incompletas:
  - las herramientas de replicación no incluyen un filtro de calidad.
  - las herramientas de calidad actúan sobre datos ya replicados.
  ::

::

::landing-solution
---
headline: La solución
title: "Clearance: una herramienta de replicación OSM con filtro de calidad integrado"
description: "Clearance nunca modifica OpenStreetMap. Los datos problemáticos simplemente se retienen, y las correcciones se han de realizar directamente en OSM, en la fuente."
intro: "Clearance actúa como una herramienta de mejora continua de su copia local, adaptada a sus necesidades profesionales:"
conclusion: "Así dispone de una versión actualizada de los datos de OpenStreetMap, fiable para sus usos y adaptada a sus requisitos de calidad, mientras continúa contribuyendo al bien común OpenStreetMap."
changesLabel: Cambios
osmLabel: OpenStreetMap
clearanceLabel: Clearance
extractLabel: Extracto
feedbackLabel: Correcciones en OSM
---

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Cambios conformes
  ---
  Los cambios conformes se integran automática e inmediatamente.
  ::

  ::landing-step
  ---
  icon: i-lucide-pause-circle
  title: Modificaciones sensibles
  ---
  Las modificaciones sensibles se retienen para verificación y, si es necesario, corrección en OSM. En la siguiente verificación, si todo es conforme, las modificaciones pasarán el filtro y se integrarán a la copia local.
  ::

::

::landing-practice
---
headline: En la práctica
---

  ::landing-practice-item
  ---
  icon: i-lucide-map-pin
  title: Territorio, temática y colaboración
  ---
  Clearance le permite definir proyectos territoriales y temáticos (tags OSM) en los que su equipo colabora para monitorear y mantener la calidad de los datos.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-list-checks
  title: Reglas adaptadas a su actividad
  ---
  Clearance permite aplicar controles adaptados a su necesidad. Por ejemplo:

  - desplazamiento de un desfibrilador que podría comprometer su responsabilidad
  - modificación de un segmento de red vial susceptible de perturbar un calculador de rutas
  - adición de un equipamiento público aún no operativo, susceptible de generar un uso prematuro
  - eliminación de una referencia que podría romper las uniones con una base de datos de negocio

  Estas situaciones son frecuentes cuando los datos OSM se utilizan en un contexto operativo.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-database
  title: Un proxy de calidad
  ---
  Clearance utiliza los formatos estándar del ecosistema de OpenStreetMap tanto de entrada como de salida. Se integra de forma transparente en un proceso de reutilización de datos OpenStreetMap produciendo extractos, diffs y una API Overpass sobre la copia local. Siga usando sus herramientas, o las del ecosistema OpenStreetMap, con mayor confianza en los datos.
  ::

::

::landing-use-cases
---
headline: Casos de uso
title: ¿Para quién es Clearance?
description: "Clearance está diseñado para organizaciones que utilizan regularmente los datos de OpenStreetMap con exigencias de calidad."
---

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Operadores de movilidad y transporte
  ---
  La modificación de un segmento de red vial puede perturbar un calculador de rutas utilizado por sus servicios.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-shield-alert
  title: Servicios de emergencia y seguridad
  ---
  El desplazamiento de un desfibrilador podría comprometer su responsabilidad si la información difundida es errónea.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Administraciones locales
  ---
  La adición de un equipamiento público aún no operativo puede generar un uso prematuro por parte del público.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-tree-pine
  title: Gestores de parques naturales
  ---
  La eliminación o modificación de un sendero señalizado puede poner en peligro a los excursionistas que siguen sus rutas.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Organismos de gestión de destinos turísticos
  ---
  Un punto de interés turístico mal referenciado puede degradar la experiencia de los visitantes de su territorio.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-database
  title: Plataformas territoriales de datos abiertos
  ---
  La eliminación de una referencia puede romper las uniones con una base de datos de negocio y provocar disfunciones.
  ::

::

::landing-references
---
headline: Referencias
title: Más de 40 organizaciones ya utilizan Clearance
description: "Para reutilizar los datos de OpenStreetMap con mayor confianza."
ctaLabel: Ver un ejemplo de proyecto (Landes)
ctaTo: https://clearance.teritorio.xyz/france_landes_poi/changes_logs
---

  ::landing-reference
  ---
  logo: /logos/Logo_SNCF.png
  title: SNCF Réseau
  ---
  El operador ferroviario francés asegura el mantenimiento de la información de vías y señalización.
  ::

  ::landing-reference
  ---
  logo: /logos/Logotipo_del_Gobierno_de_Navarra.png
  title: Protección Civil de Navarra
  ---
  Garantiza la calidad de los datos viales y de direccionamiento utilizados para el cálculo de rutas de intervención de emergencia en Navarra, España. Los datos OSM sirven como referencia para el enrutamiento.
  ::

  ::landing-reference
  ---
  logo: /logos/otourisme.png
  title: 30 agencias departamentales y oficinas de turismo
  ---
  Controlan la calidad y siguen las contribuciones OSM en numerosas temáticas en Francia continental y de ultramar: equipamientos de ocio, salud, comercios alimentarios, etc.
  ::

  ::landing-reference
  ---
  logo: /logos/NLnet_Foundation_logo.png
  title: Fundación NLNet
  ---
  Financia parte de los desarrollos de Clearance a través de [fondos europeos](https://nlnet.nl/project/Clearance/){target="_blank"}.
  ::

::

::landing-cta
---
title: Solicitar una demostración
description: "Durante una demostración, intercambiamos sobre su contexto y necesidades, presentamos el funcionamiento de Clearance, ilustramos casos de uso concretos y compartimos nuestra hoja de ruta."
primaryLabel: Contáctenos
primaryTo: /contact
secondaryLabel: ¿Cómo funciona?
secondaryTo: /docs
---
::
