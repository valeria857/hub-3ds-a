const CLAVE_COMPLETADOS = "hub3dsa:completados";
const CLAVE_TEMA = "hub3dsa:tema";
const lista = document.querySelector("#lista");
const conteo = document.querySelector("#conteo");
const buscar = document.querySelector("#buscar");
const categoria = document.querySelector("#categoria");
const estado = document.querySelector("#estado");
const barraProgreso = document.querySelector("#barra-progreso");
const textoProgreso = document.querySelector("#texto-progreso");
const estadisticaModulos = document.querySelector("#stat-modulos");
const estadisticaProgreso = document.querySelector("#stat-progreso");
const botonTema = document.querySelector("#tema");
const botonReiniciar = document.querySelector("#reiniciar");
const integrantes = document.querySelector("#integrantes");
const modalModulo = document.querySelector("#modal-modulo");

if (!Array.isArray(MODULOS) || !Array.isArray(EQUIPO)) {
  throw new Error("No se encontraron los datos del portal en data/modulos.js.");
}

if (
  !lista || !conteo || !buscar || !categoria || !estado || !barraProgreso ||
  !textoProgreso || !estadisticaModulos || !estadisticaProgreso ||
  !botonTema || !botonReiniciar || !integrantes || !(modalModulo instanceof HTMLDialogElement)
) {
  throw new Error("Faltan elementos requeridos para iniciar el portal.");
}

// Crea elementos accesibles y agrega el texto sin interpretar HTML.
function el(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  if (clase) elemento.className = clase;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

// Convierte texto a minúsculas y quita tildes para facilitar las búsquedas.
function normalizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Lee el progreso guardado y descarta ids que ya no existen en los datos.
function leerCompletados() {
  try {
    const guardado = window.localStorage.getItem(CLAVE_COMPLETADOS);
    if (!guardado) return [];
    const ids = JSON.parse(guardado);
    if (!Array.isArray(ids)) {
      console.warn("El progreso guardado no es una lista; se iniciará vacío.");
      return [];
    }
    const idsValidos = new Set(MODULOS.map((modulo) => modulo.id));
    return ids.filter((id) => typeof id === "string" && idsValidos.has(id));
  } catch (error) {
    console.warn("No se pudo leer el progreso local; se usará una lista vacía.", error);
    return [];
  }
}

// Guarda el progreso sin impedir que el portal funcione si el almacenamiento está bloqueado.
function guardarCompletados() {
  try {
    window.localStorage.setItem(CLAVE_COMPLETADOS, JSON.stringify([...completados]));
  } catch (error) {
    console.warn("No se pudo guardar el progreso en este navegador.", error);
  }
}

let completados = new Set(leerCompletados());

// Actualiza los contadores de la portada y la barra de avance.
function actualizarProgreso() {
  const total = MODULOS.length;
  const cantidad = completados.size;
  barraProgreso.max = total || 1;
  barraProgreso.value = cantidad;
  textoProgreso.textContent = `Completados: ${cantidad} de ${total}`;
  estadisticaModulos.textContent = `${total} módulos`;
  estadisticaProgreso.textContent = `${cantidad} de ${total} módulos completados`;
}

// Llena el filtro con las categorías que aparecen en los datos.
function cargarCategorias() {
  const categorias = [...new Set(MODULOS.map((modulo) => modulo.categoria))]
    .sort((a, b) => a.localeCompare(b, "es"));

  categorias.forEach((nombre) => {
    const opcion = el("option", "", nombre);
    opcion.value = nombre;
    categoria.append(opcion);
  });
}

// Presenta a cada integrante con su rol y usuario de GitHub.
function mostrarEquipo() {
  const fragmento = document.createDocumentFragment();
  EQUIPO.forEach((persona) => {
    const fila = el("li");
    fila.append(el("strong", "", persona.nombre));
    fila.append(document.createTextNode(` · ${persona.rol} · @${persona.github}`));
    fragmento.append(fila);
  });
  integrantes.replaceChildren(fragmento);
}

// Añade una lista reutilizable de aprendizajes o chips a una tarjeta.
function agregarGrupo(tarjeta, titulo, valores, clase = "") {
  const grupo = el("div", clase);
  grupo.append(el("h4", "", titulo));
  const listaGrupo = el("ul");

  valores.forEach((valor) => {
    const item = el("li");
    if (typeof valor === "string") {
      item.textContent = valor;
    } else {
      const enlace = el("a", "", `${valor.titulo} ↗`);
      enlace.href = valor.url;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      item.append(enlace);
    }
    listaGrupo.append(item);
  });

  grupo.append(listaGrupo);
  tarjeta.append(grupo);
}

// Construye el quiz, anuncia cada respuesta y marca el módulo al completar todo.
function crearQuiz(modulo) {
  const quiz = el("details", "quiz");
  const resumen = el("summary", "boton boton-sec", `Responder quiz · ${modulo.quiz.length} preguntas`);
  quiz.append(resumen);

  const respuestas = new Map();
  const estadoQuiz = el("p", "resultado-quiz");
  estadoQuiz.setAttribute("aria-live", "polite");

  modulo.quiz.forEach((pregunta, indicePregunta) => {
    const grupo = el("fieldset");
    grupo.append(el("legend", "", `${indicePregunta + 1}. ${pregunta.pregunta}`));
    const feedback = el("p", "feedback");
    feedback.setAttribute("aria-live", "polite");

    pregunta.opciones.forEach((opcion, indiceOpcion) => {
      const etiqueta = el("label", "opcion");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `${modulo.id}-pregunta-${indicePregunta}`;
      radio.value = String(indiceOpcion);
      radio.addEventListener("change", () => {
        const esCorrecta = indiceOpcion === pregunta.correcta;
        respuestas.set(indicePregunta, esCorrecta);
        feedback.className = `feedback ${esCorrecta ? "correcto" : "incorrecto"}`;
        feedback.textContent = esCorrecta
          ? `✓ Correcto. ${pregunta.explicacion}`
          : "✗ No es esa. Repasa la ficha y prueba otra opción.";

        const correctas = [...respuestas.values()].filter(Boolean).length;
        const completo = respuestas.size === modulo.quiz.length &&
          correctas === modulo.quiz.length;
        estadoQuiz.textContent = completo
          ? "¡Quiz completo! Módulo marcado como completado."
          : `Llevas ${correctas} de ${modulo.quiz.length} correctas.`;

        if (completo) marcarCompletado(modulo.id);
      });

      etiqueta.append(radio, document.createTextNode(opcion));
      grupo.append(etiqueta);
    });

    grupo.append(feedback);
    quiz.append(grupo);
  });

  quiz.append(estadoQuiz);
  return quiz;
}

// Actualiza solo la tarjeta y el progreso para mantener abierto el quiz actual.
function marcarCompletado(id) {
  if (completados.has(id)) return;
  completados.add(id);
  guardarCompletados();

  const tarjeta = document.getElementById(`tarjeta-${id}`);
  if (tarjeta) {
    tarjeta.classList.add("hecho");
    const insignia = tarjeta.querySelector(".insignia");
    if (insignia) insignia.hidden = false;
  }
  actualizarProgreso();
}

// Reúne el contenido indexable de un módulo para los filtros de texto.
function textoBuscable(modulo) {
  return [
    modulo.nombre,
    modulo.resumen,
    modulo.docente,
    modulo.responsable,
    modulo.categoria,
    modulo.evidencia,
    `modulo ${modulo.numero}`,
    ...modulo.aprendi,
    ...modulo.instrumentos,
    ...modulo.programas,
    ...modulo.herramientas,
    ...modulo.recursos.map((recurso) => recurso.titulo)
  ].join(" ");
}

// Construye una tarjeta con la información, recursos y quiz de un módulo.
function crearTarjeta(modulo) {
  const tarjeta = el("article", "tarjeta");
  tarjeta.id = `tarjeta-${modulo.id}`;
  tarjeta.dataset.moduloId = modulo.id;
  tarjeta.tabIndex = -1;
  const estaCompletado = completados.has(modulo.id);
  if (estaCompletado) tarjeta.classList.add("hecho");

  const cabecera = el("div", "cabecera-tarjeta");
  cabecera.append(el("span", "", `Módulo ${modulo.numero}`));
  cabecera.append(el("span", "", modulo.categoria));
  tarjeta.append(cabecera);

  const insignia = el("p", "insignia", "Completado ✓");
  insignia.hidden = !estaCompletado;
  tarjeta.append(insignia);

  tarjeta.append(el("h3", "", modulo.nombre));
  tarjeta.append(el("p", "", modulo.resumen));
  tarjeta.append(el("p", "docente", `Docente: ${modulo.docente} · Responsable: ${modulo.responsable}`));

  const botonDetalles = el("button", "boton boton-sec chico abrir-modulo", "Abrir módulo");
  botonDetalles.type = "button";
  tarjeta.append(botonDetalles);
  return tarjeta;
}

// Muestra el contenido completo del módulo y su quiz en el diálogo.
function abrirModalModulo(modulo, tarjeta) {
  const encabezado = el("header", "modal-encabezado");
  const titulo = el("h2", "", modulo.nombre);
  titulo.id = "modal-titulo";
  const botonCerrar = el("button", "boton boton-sec chico", "Cerrar");
  botonCerrar.type = "button";
  botonCerrar.addEventListener("click", () => modalModulo.close());
  encabezado.append(titulo, botonCerrar);

  const contenido = el("div", "modal-contenido");
  const metadatos = el("p", "docente", `Módulo ${modulo.numero} · ${modulo.categoria}`);
  contenido.append(
    metadatos,
    el("p", "", modulo.resumen),
    el("p", "docente", `Docente: ${modulo.docente} · Responsable: ${modulo.responsable}`)
  );
  agregarGrupo(contenido, "Lo que aprendí", modulo.aprendi, "aprendizajes-grupo");
  agregarGrupo(contenido, "Instrumentos", modulo.instrumentos, "grupo-chips");
  agregarGrupo(contenido, "Programas", modulo.programas, "grupo-chips");
  agregarGrupo(contenido, "Herramientas", modulo.herramientas, "grupo-chips");
  agregarGrupo(contenido, "Recursos", modulo.recursos, "grupo-chips");

  const evidencia = el("p", "evidencia");
  evidencia.append(el("strong", "", "Evidencia final: "));
  evidencia.append(document.createTextNode(modulo.evidencia));
  contenido.append(evidencia, crearQuiz(modulo));

  modalModulo.setAttribute("aria-labelledby", titulo.id);
  modalModulo.replaceChildren(encabezado, contenido);
  modalModulo.showModal();
  modalModulo.addEventListener("close", () => tarjeta.focus(), { once: true });
}

// Filtra por texto, categoría y progreso, y luego actualiza la lista y el conteo.
function pintarModulos() {
  const termino = normalizar(buscar.value.trim());
  const categoriaElegida = categoria.value;
  const estadoElegido = estado.value;
  const encontrados = MODULOS.filter((modulo) => {
    const coincideTexto = !termino || normalizar(textoBuscable(modulo)).includes(termino);
    const coincideCategoria = !categoriaElegida || modulo.categoria === categoriaElegida;
    const estaCompletado = completados.has(modulo.id);
    const coincideEstado = estadoElegido === "todos" ||
      (estadoElegido === "completados" && estaCompletado) ||
      (estadoElegido === "pendientes" && !estaCompletado);
    return coincideTexto && coincideCategoria && coincideEstado;
  });

  conteo.textContent = encontrados.length === 0
    ? "No hay módulos con esos filtros. Cambia la búsqueda o elige «Todos»."
    : `${encontrados.length} módulo${encontrados.length === 1 ? "" : "s"} encontrado${encontrados.length === 1 ? "" : "s"}`;

  const fragmento = document.createDocumentFragment();
  encontrados.forEach((modulo) => fragmento.append(crearTarjeta(modulo)));
  lista.replaceChildren(fragmento);
}

// Aplica el tema elegido y mantiene sincronizado el nombre accesible del botón.
function aplicarTema(tema) {
  document.documentElement.dataset.theme = tema;
  const oscuro = tema === "dark";
  botonTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
  botonTema.setAttribute("aria-pressed", String(oscuro));
}

// Carga el tema guardado o, si no existe, consulta la preferencia del sistema.
function cargarTema() {
  let temaGuardado = null;
  try {
    temaGuardado = window.localStorage.getItem(CLAVE_TEMA);
  } catch (error) {
    console.warn("No se pudo leer el tema guardado; se usará la preferencia del sistema.", error);
  }

  const temaInicial = temaGuardado === "light" || temaGuardado === "dark"
    ? temaGuardado
    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  aplicarTema(temaInicial);
}

buscar.addEventListener("input", pintarModulos);
categoria.addEventListener("change", pintarModulos);
estado.addEventListener("change", pintarModulos);

lista.addEventListener("click", (evento) => {
  const tarjeta = evento.target.closest(".tarjeta");
  if (!tarjeta || !lista.contains(tarjeta)) return;

  const modulo = MODULOS.find((elemento) => elemento.id === tarjeta.dataset.moduloId);
  if (modulo) abrirModalModulo(modulo, tarjeta);
});

modalModulo.addEventListener("click", (evento) => {
  if (evento.target === modalModulo) modalModulo.close();
});

botonReiniciar.addEventListener("click", () => {
  completados.clear();
  guardarCompletados();
  actualizarProgreso();
  pintarModulos();
});

botonTema.addEventListener("click", () => {
  const tema = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  aplicarTema(tema);
  try {
    window.localStorage.setItem(CLAVE_TEMA, tema);
  } catch (error) {
    console.warn("No se pudo guardar el tema en este navegador.", error);
  }
});

cargarCategorias();
mostrarEquipo();
cargarTema();
actualizarProgreso();
pintarModulos();
