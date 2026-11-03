# Bitácora de trabajo — Jazmin Peña
**Rol:** Contenido y QA (Control de Calidad)
**Módulos asignados:** Módulo 3.3 y Módulo 3.8

---

## Día 1 — Bases de datos y contenido de módulos
- **Hoy aprendí o recordé:** Organizar la información de los módulos en objetos de JavaScript en `data/modulos.js` cuidando que no contuvieran errores sintácticos ni etiquetas HTML incrustadas.
- **Lo que me costó:** Comprender la forma segura de inyectar datos en el DOM usando `document.createElement` y `textContent` en lugar de `innerHTML`.
- **Cómo lo resolví:** Le pregunté a la IA por qué `innerHTML` representa un riesgo de seguridad y reescribí las funciones auxiliares en `js/app.js` para construir los elementos de forma dinámica.
- **Mañana voy a:** Redactar la información sobre administración de bases de datos (Módulo 3.3) y los conceptos del Proyecto Innovador (Módulo 3.8).

---

## Día 2 — Control de calidad (QA) y pruebas de persistencia
- **Hoy aprendí o recordé:** El uso de `localStorage` con bloques `try/catch` para guardar el progreso del usuario y el tema seleccionado incluso si se navega en modo privado.
- **Lo que me costó:** Probar el filtro de búsqueda para que ignorara las tildes y mayúsculas correctamente al filtrar por categorías o términos.
- **Cómo lo resolví:** Usé la función `normalize("NFD")` con una expresión regular para limpiar los acentos de las cadenas de texto antes de compararlas.
- **Mañana voy a:** Ejecutar la lista completa de pruebas de aceptación del portal antes de la entrega final.