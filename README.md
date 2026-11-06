#  Portal Web de Repaso Integral - 3.º DS «A»

Bienvenido al portal web oficial de repaso académico del **3.º Bachillerato Técnico Vocacional en Desarrollo de Software «A»** del Instituto Nacional Cantón Lourdes (INDEL).

Esta plataforma centraliza la documentación, instrumentos, programas, herramientas, recursos web, evidencias prácticas y quizzes interactivos de los módulos técnicos y formativos desarrollados durante el año lectivo.

##  Integrantes del Equipo

* **Valeria Patricia Miranda Contreras**

* **Tatiana Lissett Menéndez Mercado**

* **Alisson Jazmín Peña Cortéz**

##  Enlaces Públicos

* **Portal Web (GitHub Pages):** <https://valeria857.github.io/hub-3ds-a/>

* **Repositorio en GitHub:** <https://github.com/valeria857/hub-3ds-a>

##  Características y Funcionalidades del Portal

###  Nivel Base

* **Fichas Informativas por Módulo:** Detalle técnico completo (Módulos 1, 2, 3.1 al 3.8) con instrumentos, programas, herramientas, recursos verificados y enlaces a evidencias.

* **Diseño Responsivo:** Adaptado completamente a dispositivos móviles y pantallas de escritorio.

* **Integración con GitHub Pages:** Despliegue automatizado y actualización continua mediante control de versiones.

###  Nivel Pro

* **Buscador y Filtros en Tiempo Real:** Filtrado dinámico por módulos y contenido.

* **Quiz Interactivo:** Evaluación de 3 preguntas de opción múltiple por módulo con retroalimentación inmediata y registro del mejor puntaje mediante `localStorage`.

* **Modo Claro / Modo Oscuro:** Alternador de interfaz visual adaptado a la preferencia del usuario con persistencia en el navegador.

##  Tecnologías Utilizadas

* **HTML5 Semantic Markup**

* **CSS3 Custom Properties (Variables CSS, Flexbox y Grid)**

* **JavaScript Vanilla (ES6+ & Web Storage API)**

* **Git & GitHub (Control de Versiones y Etiquetado `v1.0`)**

##  Registro de Prompts de Inteligencia Artificial (IA Log)

A continuación se detallan las consultas principales realizadas al asistente de Inteligencia Artificial durante la ejecución del proyecto y su utilidad específica en el desarrollo:

| \# | Prompt Utilizado | Propósito / Resultado | 
| ----- | ----- | ----- | 
| **1** | *"¿En qué parte del style lo pongo?"* (junto a la instrucción del scroll fix) | Determinación de la ubicación idónea (`css/styles.css`) para aplicar la propiedad `max-height` y `overflow-y` al modal `dialog`. | 
| **2** | *"git add style.css fatal: pathspec 'style.css' did not match any files... ¿qué pasó?"* | Diagnóstico de error de ruta en terminal de Git y resolución mediante `git add .` apuntando a `css/styles.css`. | 
| **3** | *"Para el día dos, tenemos los módulos pero nos hace falta instrumentos, programas, herramientas, recursos con enlaces y evidencias del año, entonces ¿qué hacemos? Dame ejemplos."* | Definición del esquema JSON/JS en `data/modulos.js` y estructuración del contenido técnico de las fichas. | 
| **4** | *"Para el módulo 1, pondré práctica 1 Introducción a la POO y pondré práctica 4 aplicaciones web con SQL."* | Adaptación de evidencias prácticas específicas al modelo de datos del Módulo 1. | 
| **5** | *"Para el módulo 3.4 pondré un manual de usuario, manual técnico y de sistema por drive... Ponlos en como tres títulos diferentes."* | División de evidencias documentales en 3 entradas independientes dentro del arreglo de evidencias del Módulo 3.4. | 
| **6** | *"Analiza esta página y dinos qué es lo que tenemos que hacer para este día \[Día 3\] en nuestro sistema."* | Desglose y planificación del plan de trabajo del Día 3 (Quiz, Modo Oscuro, Lighthouse, README y Tag `v1.0`). | 
| **7** | *"Se nos olvidó añadir dos módulos más que son el 3.5 y el 3.7, dile a Copilot que agregue esos módulos más y que los haga igual a los que ya hemos creado..."* | Redacción de prompt estructurado para GitHub Copilot para la autogeneración de los módulos 3.5 y 3.7. | 

##  Instrucciones para Ejecución Local

1. Clonar el repositorio:

   ```
   git clone https://github.com/valeria857/hub-3ds-a.git
   
   ```

2. Navegar al directorio del proyecto:

   ```
   cd hub-3ds-a
   
   ```

3. Abrir el archivo `index.html` en el navegador web o utilizar la extensión **Live Server** en Visual Studio Code.

*Desarrollado para la Feria de Portales del 3.º DS «A» · INDEL 2026*