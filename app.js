const listaModulos = document.querySelector("#lista-modulos");

if (!listaModulos) {
  throw new Error('No se encontró el contenedor "#lista-modulos".');
}

if (!Array.isArray(window.modulos)) {
  throw new Error("El arreglo global de módulos no está disponible.");
}

const tarjetas = document.createDocumentFragment();

window.modulos.forEach((modulo) => {
  const articulo = document.createElement("article");
  articulo.className = "tarjeta-modulo";

  const nombre = document.createElement("h3");
  nombre.textContent = modulo.nombre;

  const docente = document.createElement("p");
  docente.textContent = `Docente: ${modulo.docente}`;

  const resumen = document.createElement("p");
  resumen.textContent = modulo.resumen;

  articulo.append(nombre, docente, resumen);
  tarjetas.append(articulo);
});

listaModulos.replaceChildren(tarjetas);