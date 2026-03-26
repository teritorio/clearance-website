---
title: "Filtro de calidad para datos de OpenStreetMap"
description: "Controle la calidad de los datos de OpenStreetMap que utiliza o redistribuye. Clearance filtra automáticamente los cambios conformes y retiene los sospechosos para verificación."
---

::landing-hero
---
headline: Filtro de calidad open source
title: Controle la calidad de sus datos OpenStreetMap
description: "¿Utiliza OpenStreetMap en un contexto crítico? Un error puede bloquear una ruta de emergencia, falsear un cálculo o comprometer su responsabilidad. Clearance le ayuda a prevenirlo."
primaryLabel: Ver en GitHub
primaryTo: https://github.com/teritorio/clearance
secondaryLabel: Solicitar una demo
secondaryTo: /contact
---
::

::landing-problem
---
headline: El desafío
title: ¿Cómo reutilizar los datos de OpenStreetMap con confianza?
---
OpenStreetMap evoluciona constantemente. Cada día, millones de modificaciones son realizadas por una comunidad global: voluntarios, instituciones públicas y empresas. Este dinamismo es una fortaleza, pero cuando estos datos se vuelven críticos para un servicio, ¿cómo garantizar su calidad? Las herramientas clásicas de replicación no incluyen un filtro de calidad — actúan sobre datos ya replicados, o al precio de bloquear la replicación por completo.
::

::landing-features
---
headline: Funcionalidades
title: Todo lo necesario para asegurar sus datos OSM
description: "Un pipeline completo de aseguramiento de calidad entre OpenStreetMap y sus aplicaciones. Clearance nunca modifica OpenStreetMap: los datos problemáticos simplemente se retienen, y las correcciones se realizan directamente en OSM, en la fuente."
---

  ::landing-feature
  ---
  icon: i-lucide-shield-check
  title: Filtro de calidad
  ---
  Integra automáticamente los cambios conformes mientras retiene las modificaciones sospechosas para revisión humana.
  ::

  ::landing-feature
  ---
  icon: i-lucide-git-merge
  title: Agrupación inteligente (LoCha)
  ---
  Agrupa los cambios relacionados en clusters geográficos coherentes para una revisión pertinente y contextualizada.
  ::

  ::landing-feature
  ---
  icon: i-lucide-scan-search
  title: Análisis semántico
  ---
  Verifica la coherencia de los tags OSM y detecta cambios potencialmente problemáticos antes de que lleguen a sus sistemas.
  ::

  ::landing-feature
  ---
  icon: i-lucide-list-checks
  title: Reglas de validación
  ---
  Siete categorías de reglas que cubren retrasos, eliminaciones, duplicados, geometría, red, tags y listas de usuarios.
  ::

  ::landing-feature
  ---
  icon: i-lucide-database
  title: Proxy de calidad
  ---
  Utiliza los formatos estándar del ecosistema OpenStreetMap tanto de entrada como de salida. Siga usando sus herramientas con mayor confianza en los datos.
  ::

  ::landing-feature
  ---
  icon: i-lucide-cloud-cog
  title: SaaS o autoalojado
  ---
  Disponible como servicio gestionado por Teritorio o como despliegue autónomo en su infraestructura.
  ::

::

::landing-steps
---
headline: Cómo funciona
title: Tres pasos hacia datos fiables
description: Clearance se integra en su flujo de replicación OpenStreetMap existente.
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
  Los cambios conformes se integran automática e inmediatamente. Las modificaciones sensibles se retienen para verificación.
  ::

  ::landing-step
  ---
  icon: i-lucide-check-circle
  title: Validación
  number: "3"
  ---
  Un operador revisa los cambios retenidos y, si es necesario, corrige en OSM. En la siguiente verificación, las modificaciones conformes pasarán el filtro.
  ::

::

::landing-use-cases
---
headline: Ejemplos concretos
title: Reglas adaptadas a su actividad
description: "Estas situaciones son frecuentes cuando los datos OSM se utilizan en un contexto operativo."
---

  ::landing-use-case
  ---
  icon: i-lucide-heart-pulse
  title: Desfibrilador desplazado
  ---
  El desplazamiento de un desfibrilador podría comprometer su responsabilidad si la información difundida es errónea.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-route
  title: Red vial modificada
  ---
  La modificación de un segmento de red vial puede perturbar un calculador de rutas utilizado por sus servicios.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-construction
  title: Equipamiento no operativo
  ---
  La adición de un equipamiento público aún no operativo puede generar un uso prematuro por parte del público.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-link-2-off
  title: Referencia eliminada
  ---
  La eliminación de una referencia puede romper las uniones con una base de datos de negocio y provocar disfunciones.
  ::

::

::landing-use-cases
---
headline: Casos de uso
title: ¿Para quién es Clearance?
description: Cualquier organización que dependa de datos OpenStreetMap de calidad.
---

  ::landing-use-case
  ---
  icon: i-lucide-map
  title: Administraciones locales
  ---
  Asegure la fiabilidad de los datos cartográficos utilizados en sus servicios públicos digitales.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-bus
  title: Operadores de transporte
  ---
  Garantice la calidad de los datos de paradas y redes para sus aplicaciones de viajeros.
  ::

  ::landing-use-case
  ---
  icon: i-lucide-landmark
  title: Oficinas de turismo
  ---
  Mantenga puntos de interés actualizados y fiables para sus visitantes.
  ::

::

::landing-references
---
headline: Referencias
title: Más de 40 organizaciones confían en nosotros
description: Clearance ya se utiliza en producción por administraciones, operadores e instituciones.
---
**SNCF Réseau** (ferrocarriles franceses) asegura el mantenimiento de la información de vías y señalización. La **Protección Civil de Navarra** (España) garantiza la calidad de los datos viales y de direccionamiento utilizados para el cálculo de rutas de intervención de emergencia. **30 agencias departamentales y oficinas de turismo** (Francia continental y de ultramar) controlan la calidad en numerosas temáticas: equipamientos de ocio, salud, comercios alimentarios.

[Ver un ejemplo de proyecto (Landes)](https://clearance.teritorio.xyz/france_landes_poi/changes_logs){target="_blank"}
::

::landing-cta
---
title: Solicitar una demostración
description: "Durante una demostración, intercambiamos sobre su contexto y necesidades, presentamos el funcionamiento de Clearance, ilustramos casos de uso concretos y compartimos nuestra hoja de ruta."
primaryLabel: Contáctenos
primaryTo: /contact
secondaryLabel: Documentación
secondaryTo: /docs
---
::
