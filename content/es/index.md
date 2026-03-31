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
  Las herramientas clásicas de replicación de datos OSM no incluyen un filtro de calidad. Actúan sobre datos ya replicados, o al precio de bloquear la replicación por completo.
  ::

::

::landing-steps
---
headline: La solución
title: "Clearance: una herramienta de replicación OSM con filtro de calidad integrado"
description: "Clearance nunca modifica OpenStreetMap. Los datos problemáticos simplemente se retienen, y las correcciones se realizan directamente en OSM, en la fuente."
---

  ::landing-step
  ---
  icon: i-lucide-download
  title: Replicación
  number: "1"
  ---
  Clearance obtiene las actualizaciones del flujo de replicación de OpenStreetMap y las analiza en tiempo real.
  ::

  ::landing-step
  ---
  icon: i-lucide-filter
  title: Filtrado
  number: "2"
  ---
  Los cambios conformes se integran automática e inmediatamente. Las modificaciones sensibles se retienen para verificación y, si es necesario, corrección en OSM.
  ::

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Validación
  number: "3"
  ---
  En la siguiente verificación, si todo es conforme, las modificaciones pasarán el filtro y se integrarán a la copia local. Así dispone de una versión actualizada, fiable y adaptada a sus requisitos de calidad.
  ::

::

::landing-practice
---
headline: En la práctica
title: Todo lo necesario para asegurar su replicación OSM
description: "Un pipeline completo de aseguramiento de calidad entre OpenStreetMap y sus aplicaciones, mientras continúa contribuyendo al bien común OpenStreetMap."
changesLabel: Cambios
osmLabel: OpenStreetMap
clearanceLabel: Clearance
extractLabel: Extracto
feedbackLabel: Correcciones en OSM
---

  ::landing-practice-item
  ---
  icon: i-lucide-map-pin
  title: Territorio y colaboración
  ---
  Defina proyectos territoriales y temáticos en los que su equipo colabore para monitorear y mantener la calidad de los datos.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-list-checks
  title: Reglas adaptadas a su actividad
  ---
  Aplique controles adaptados a su necesidad: desplazamientos, eliminaciones, adiciones prematuras, rupturas de uniones y más.
  ::

  ::landing-practice-item
  ---
  icon: i-lucide-database
  title: Proxy de calidad
  ---
  Utiliza los formatos estándar del ecosistema OpenStreetMap tanto de entrada como de salida. Siga usando sus herramientas con mayor confianza en los datos.
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
  title: Organismos de gestión de destinos
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

  ::landing-use-case
  ---
  icon: i-lucide-layers
  title: Desarrolladores de aplicaciones cartográficas
  ---
  Datos fuente inconsistentes pueden generar anomalías de visualización o navegación en su aplicación.
  ::

::

::landing-references
---
headline: Referencias
title: Más de 40 organizaciones ya utilizan Clearance
description: "Para reutilizar los datos de OpenStreetMap con mayor control."
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
  Garantiza la calidad de los datos viales y de direccionamiento utilizados para el cálculo de rutas de intervención de emergencia en España. Los datos OSM sirven como referencia para el enrutamiento.
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
