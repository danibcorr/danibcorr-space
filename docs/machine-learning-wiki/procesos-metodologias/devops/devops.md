---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Herramientas necesarias para DevOps.
title: DevOps
toc_max_heading_level: 4
---

:::danger **Este contenido aún está en desarrollo**

Actualmente, no es la mejor opción para tu aprendizaje, ya que no está
terminado. Estoy utilizando este espacio para probar que todo funciona
correctamente y para planificar cómo estructurar el contenido final.

Te agradezco mucho tu paciencia y comprensión. Soy solo una persona trabajando
en esto, y a veces no me da tiempo para todo. ¡Espero pronto tener algo genial
para ti!  
:::

## Bibliografía

- [IBM DevOps and Software Engineering Professional Certificate](https://www.coursera.org/professional-certificates/devops-and-software-engineering)

## 1. Introducción

<p align="center">
  <img src={require("../../../img/devops-logo.png").default} width="500"/>
  <br />
  <em>Ciclo de vida de un proyecto DevOps</em>
</p>

DevOps es una filosofía que **combina las prácticas de desarrollo de software**
(_Development_) **y operaciones de IT** (_Operations_) con el objetivo de
mejorar la **colaboración, la automatización y la entrega continua** de
software.

La filosofía detrás de DevOps busca reducir los ciclos de desarrollo y ofrecer
aplicaciones de alta calidad de manera más rápida y eficiente. Para lograrlo,
DevOps se apoya en **principios ágiles**, y pone un fuerte **énfasis en la
medición y monitoreo de los procesos**.

El principio fundamental de DevOps es promover una cultura de colaboración y
responsabilidad compartida entre los equipos de desarrollo y operaciones. Para
ello, se fomentan prácticas como el uso y fomento de herramientas _open source_.
Estos procesos permiten que cualquier miembro del equipo, ya sea interno o
externo a la organización, pueda contribuir al desarrollo del software.

DevOps también implica un cambio cultural dentro de las empresas, ya que obliga
a rediseñar la forma en que se desarrollan y despliegan las aplicaciones. Esto
se traduce en un enfoque más orientado a la creación de productos en lugar de
proyectos, estableciendo equipos estables con _ownership_ de cada producto y
asegurando su mantenimiento a lo largo del tiempo.

Una de las tareas clave de un profesional de DevOps es la automatización de los
despliegues en los diferentes entornos, así como la **creación de
infraestructura efímera**.

:::note

Este concepto de **infraestructura efímera** se refiere a la creación y
destrucción dinámica de recursos para cada despliegue, garantizando que se
eliminen los recursos innecesarios y se creen nuevos para cada nueva versión del
software.

:::

El rol de SRE (_Site Reliability Engineer_) se complementa con DevOps, pero se
enfoca más en automatizar procesos manuales y en garantizar la estabilidad y
fiabilidad de los sistemas. Mientras que los ingenieros de DevOps trabajan
principalmente en la integración continua y la automatización del flujo de
trabajo, los SRE se enfocan en mejorar la confiabilidad y el rendimiento a
través de la observabilidad del estado de los sistemas, los SLAs (_Service Level
Agreements_) y los errores presupuestarios.

:::note

Los SLAs (Acuerdos de Nivel de Servicio) son compromisos formales entre un
proveedor de servicios (en este caso, el equipo de operaciones) y sus clientes
(los usuarios o las partes interesadas). En el contexto de SRE, los SLAs se
utilizan para establecer expectativas claras sobre el rendimiento y la
disponibilidad del sistema.

:::

:::note

El error budget es un concepto clave dentro de la ingeniería de confiabilidad
del sitio (SRE). Se refiere a la cantidad de "fallos" o "tiempo de inactividad"
que se permite dentro de un determinado período mientras aún se cumple con los
SLAs.

:::

### 1.1. Agilidad

Para que una organización sea verdaderamente ágil, debe basarse en tres pilares
fundamentales:

1. **DevOps**: Promueve un cambio cultural hacia la colaboración y la
   automatización de procesos. Incluye la creación de _pipelines_ automatizados,
   la infraestructura como código y la infraestructura inmutable.
2. **Microservicios**: Implica el diseño de aplicaciones como un conjunto de
   servicios independientes y débilmente acoplados, que se comunican entre sí a
   través de APIs REST y están diseñados para ser resistentes a fallos.

   :::note

   Las **APIs REST** (_Representational State Transfer_) son un conjunto de
   principios de la arquitectura para la comunicación entre sistemas a través de
   la web. Utilizan los estándares de HTTP y se basan en la transferencia de
   recursos, que se identifican mediante **URLs**. Las principales
   características de las APIs REST son:

   1. **Cliente-Servidor**: La arquitectura se divide en dos roles: el cliente
      solicita recursos y el servidor los provee.
   2. **Sin Estado**: Cada solicitud es independiente y no depende de
      solicitudes anteriores.
   3. **Interfaz Uniforme**: Las API siguen un conjunto de convenciones claras,
      facilitando la interacción.
   4. **Métodos HTTP**: Se utilizan los métodos estándar de HTTP: **GET**
      (leer), **POST** (crear), **PUT** (actualizar), **DELETE** (eliminar).
   5. **Representaciones de Recursos**: Los recursos se representan generalmente
      en formato JSON o XML, lo que permite al cliente procesarlos.
   6. **Escalabilidad y Flexibilidad**: Las APIs REST son fáciles de escalar y
      evolucionar sin que interfieran entre sí.

   :::

3. **Contenedores**: Ofrecen portabilidad, escalabilidad y facilitan la creación
   de entornos de despliegue rápidos con infraestructura inmutable.

Estos tres elementos trabajan en conjunto para transformar las organizaciones de
un enfoque tradicional basado en procesos en cascada a una metodología ágil y
flexible que favorezca la entrega continua de software.

### 1.2. Metodologías de Trabajo

<p align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzco-wp-staging.s3-accelerate.amazonaws.com%2Fwp-content%2Fuploads%2F2022%2F04%2F11161918%2FAgile-Sprint-Process.png&f=1&nofb=1&ipt=263f40a87b17cabff8154dd6fea96df7d48963b4f098f4275046c285505281c0&ipo=images" width="500"/>
  <br />
  <em>Sprints de la metodología de Agile</em>
</p>

En DevOps, el flujo de trabajo comienza con la discusión sobre las nuevas
características que se desean agregar al sistema. Una vez acordadas, se crea una
_issue_ o ticket (una etiqueta que permita identificar la nueva característica o
fallo) y se asigna a un desarrollador. A continuación, el desarrollador hace un
_fork_ del repositorio, realiza los cambios necesarios y, finalmente, crea un
_pull request_ para que el propietario del repositorio realice una revisión del
código (_merge request_).

Una buena práctica en DevOps es organizar el trabajo mediante ramas dedicadas a
cada tarea o ticket. Esto facilita el trabajo en equipo y asegura que los
cambios no interfieran con el trabajo de otros desarrolladores. Además, se
recomienda dividir el trabajo en tareas pequeñas para permitir iteraciones
rápidas, obtener retroalimentación continua y minimizar riesgos.

El desarrollo debe seguir un enfoque iterativo, donde las nuevas funcionalidades
se implementan en _sprints_ de entre una y dos semanas. Sin embargo, la duración
de los sprints puede variar dependiendo de la naturaleza del proyecto.

### 1.3. Producto Mínimo Viable (MVP)

En el contexto de DevOps, el Producto Mínimo Viable (MVP) es la versión más
simple del producto que se puede lanzar para validar una hipótesis de negocio y
obtener retroalimentación del cliente. El objetivo del MVP es aprender
rápidamente, no solo entregar funcionalidad. El proceso de desarrollo y
despliegue se enfoca en obtener retroalimentación constante para pivotar,
ajustar o mejorar el producto según sea necesario.

## 2. Métricas Clave en DevOps

Para medir el desempeño y la eficiencia de un equipo DevOps, es esencial contar
con un conjunto de métricas que permitan identificar áreas de mejora y evaluar
el progreso. Algunas de las métricas más utilizadas son:

1. **Mean Lead Time**: El tiempo promedio desde que una idea es concebida hasta
   que un producto es desplegado en producción.
2. **Change Failure Rate**: La tasa de fallos que ocurren debido a cambios o
   nuevas versiones del software.
3. **MTTR (Mean Time to Recovery)**: El tiempo promedio que tarda un sistema o
   servicio en recuperarse de una falla. Esta métrica es crucial para evaluar la
   capacidad de respuesta del equipo ante incidentes y para identificar patrones
   de fallos que puedan requerir mejoras en el sistema.
4. **MTTF (Mean Time to Failure)**: El tiempo promedio que un equipo o sistema
   sin capacidad de reparación permanece operativo antes de que ocurra una
   falla. Se utiliza para estimar la vida útil de componentes no reparables,
   como bombillas o equipos que no tienen un mantenimiento programado.

## 3. Pruebas y Desarrollo Basado en Pruebas

### 3.1. Test-Driven Development (TDD)

<p align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrifulcas.com%2Fwp-content%2Fuploads%2F2021%2F05%2Ftdd.png&f=1&nofb=1&ipt=31e6b97f252471229aae7919ca59ed3cbbf0fe39ca45160a44b6a5dc0b62265f&ipo=images" width="500"/>
  <br />
  <em>Proceso de TDD</em>
</p>

El Desarrollo Guiado por Pruebas (TDD) es una práctica fundamental en DevOps que
prioriza la escritura de pruebas antes de escribir el código que las hace pasar.
Este enfoque ayuda a mantener el enfoque en los requisitos del sistema y asegura
que el código esté correctamente validado desde el principio.

El flujo básico de TDD se basa en el ciclo "Red-Green-Refactor": primero, se
escribe una prueba que falla (Red), luego se implementa el código que hace pasar
la prueba (Green), y finalmente, se refactoriza el código para mejorar su
calidad sin alterar su funcionalidad.

### 3.2. Behavior-Driven Development (BDD)

<p align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fglobal-uploads.webflow.com%2F622fa4d65a5fab0c3465af07%2F6279365c5e6ddd4266505b60_behavior-driven-development-cycle-what-is-bdd.png&f=1&nofb=1&ipt=eddb990a00a92a3aa43d2bf628d2c502eabbe2fe9e2e4c0563d16afaa7336d65&ipo=images" width="500"/>
  <br />
  <em>Proceso de BDD</em>
</p>

El Desarrollo Guiado por Comportamiento (BDD) es una extensión de TDD que se
enfoca en el comportamiento esperado del sistema desde la perspectiva del
usuario final. En lugar de centrarse únicamente en las pruebas unitarias, BDD se
ocupa de la integración de los sistemas y permite verificar que el software
cumpla con los requisitos de alto nivel.

## 4. Microservicios

<p align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdevops.vinahost.vn%2FImage%2FMonolith_Vs_Microservice.png&f=1&nofb=1&ipt=baa1e8eeb900f77f088951b40387a45c9e0e181b3e63050d35f82e4791cc9260&ipo=images" width="500"/>
  <br />
  <em>Diferencia de un sistema monolítico y un sistema basado en microservicios</em>
</p>

Los microservicios son una arquitectura de software en la que una aplicación se
divide en servicios pequeños, independientes y sin estado, cada uno de los
cuales persiste su propio estado en una base de datos separada. Esta estructura
facilita la resiliencia, ya que cada microservicio puede escalarse y gestionarse
de manera independiente.

La arquitectura de microservicios también favorece la escalabilidad horizontal,
que permite agregar más instancias de un servicio en lugar de aumentar el poder
de procesamiento de un solo servidor. Los microservicios, junto con una
infraestructura en la nube, permiten un enfoque verdaderamente _cloud-native_,
lo que facilita la actualización, el despliegue y la gestión de las
aplicaciones.

### 4.1. Patrones de Resiliencia

1. **Retry Pattern**: Permite a las aplicaciones manejar errores transitorios al
   intentar reconectar con servicios externos, incrementando el tiempo de espera
   entre intentos hasta que se agoten los reintentos.
2. **Circuit Breaker Pattern**: Evita que las aplicaciones sigan intentando
   conectarse a servicios externos que probablemente fallarán. Este patrón
   mejora la estabilidad y resiliencia de las aplicaciones, previniendo fallos
   en cascada en sistemas distribuidos.
3. **Bulkhead Pattern**: Aísla los recursos para evitar que un fallo en un
   componente afecte a otros. Combina este patrón con el Circuit Breaker para
   manejar fallos de manera eficiente y desacoplar componentes.
4. **Monkey Testing**: Implica matar procesos o servicios aleatoriamente para
   evaluar la resiliencia del sistema ante fallos imprevistos.

## 6. Infraestructura como Código (IaC)

<p align="center">
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontent.hashicorp.com%2Fapi%2Fassets%3Fproduct%3Dtutorials%26version%3Dmain%26asset%3Dpublic%2Fimg%2Fterraform%2Fterraform-iac.png&f=1&nofb=1&ipt=03c7cebd42b84e6e0a34fd94f79d84a61ef92f900d1194cd747af1eca735f359&ipo=images" width="500"/>
  <br />
  <em>Infraestructura como Código</em>
</p>

La Infraestructura como Código (IaC) es un principio fundamental en DevOps que
permite crear, gestionar y configurar la infraestructura de manera programática.
Al tratar la infraestructura como código, se asegura la reproducibilidad, la
trazabilidad y el control de versiones, lo que permite la creación de entornos
consistentes y predecibles.

Las herramientas como Docker y Kubernetes son esenciales para IaC, ya que
permiten la automatización del despliegue y la gestión de la infraestructura
mediante contenedores y orquestación. Este enfoque asegura que la
infraestructura esté actualizada y que no haya discrepancias entre los entornos
de desarrollo, prueba y producción.

## 7. Integración y Despliegue Continuos (CI/CD)

La integración continua (CI) y el despliegue continuo (CD) son prácticas clave
de DevOps que buscan mejorar la eficiencia y la calidad del software mediante la
automatización de las pruebas y el despliegue.

- **CI**: Implica la integración constante de las características completas en
  la rama principal del repositorio, lo que permite la construcción, pruebas y
  fusión continua.
- **CD**: Se refiere al despliegue automático del código a un entorno de
  producción o un entorno similar a producción.

Las prácticas de CI/CD incluyen la creación de commits regulares para reducir
los errores de fusión, realizar pruebas automáticas antes de fusionar ramas y
emplear técnicas como **feature flags** para activar o desactivar partes del
código según sea necesario.

Con una implementación sólida de CI/CD, se puede lograr un flujo de trabajo
eficiente y confiable, lo que permite a los equipos entregar nuevas
funcionalidades de manera más rápida y con menos riesgo.
