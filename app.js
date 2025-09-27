document.addEventListener("DOMContentLoaded", () => {
  const entradaUrl = document.getElementById("entrada-url");
  const formulario = document.getElementById("formulario");
  const bloqueResultado = document.getElementById("bloque-resultado");
  const salidaCorta = document.getElementById("salida-corta");
  const botonCopiar = document.getElementById("boton-copiar");
  const listaHistorial = document.getElementById("lista-historial");
  const mensaje = document.getElementById("mensaje");

  const prefijoClave = "acortador:";
  const claveHistorial = "acortador_historial";

  const redirigirSiHayCodigo = () => {
    const hash = window.location.hash.replace("#", "").trim();
    if (!hash) return;
    const destino = localStorage.getItem(prefijoClave + hash);
    if (destino) {
      window.location.replace(destino);
    }
  };

  const normalizarUrl = (texto) => {
    let valor = (texto || "").trim();
    if (!valor) return "";
    try {
      if (!/^https?:\/\//i.test(valor)) valor = "https://" + valor;
      const u = new URL(valor);
      return u.href;
    } catch {
      return "";
    }
  };

  const generarCodigo = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";
    for (let i = 0; i < 6; i++)
      codigo += chars[Math.floor(Math.random() * chars.length)];
    return codigo;
  };

  const crearCodigoUnico = () => {
    let intento;
    do {
      intento = generarCodigo();
    } while (localStorage.getItem(prefijoClave + intento));
    return intento;
  };

  const guardarEnHistorial = (codigo, urlLarga) => {
    const existente = JSON.parse(localStorage.getItem(claveHistorial) || "[]");
    const nuevo = [
      { codigo, url: urlLarga },
      ...existente.filter((x) => x.codigo !== codigo),
    ].slice(0, 10);
    localStorage.setItem(claveHistorial, JSON.stringify(nuevo));
  };

  const pintarHistorial = () => {
    const registros = JSON.parse(localStorage.getItem(claveHistorial) || "[]");
    listaHistorial.innerHTML = "";
    if (!registros.length) {
      return;
    }
    for (const r of registros) {
      const li = document.createElement("li");
      li.className = "item";
      const corto = `${location.origin}${location.pathname}#${r.codigo}`;
      li.innerHTML = `<a class="enlace" href="${corto}">${corto}</a><span class="codigo">→ ${r.url}</span>`;
      listaHistorial.appendChild(li);
    }
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    mensaje.textContent = "";
    const urlNormalizada = normalizarUrl(entradaUrl.value);
    if (!urlNormalizada) {
      mensaje.textContent = "URL inválida";
      mensaje.style.color = "#dc2626";
      bloqueResultado.classList.add("oculto");
      return;
    }
    const codigo = crearCodigoUnico();
    localStorage.setItem(prefijoClave + codigo, urlNormalizada);
    const corto = `${location.origin}${location.pathname}#${codigo}`;
    salidaCorta.value = corto;
    bloqueResultado.classList.remove("oculto");
    guardarEnHistorial(codigo, urlNormalizada);
    pintarHistorial();
  });

  botonCopiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(salidaCorta.value);
      mensaje.textContent = "Copiado";
      mensaje.style.color = "#059669";
    } catch {
      mensaje.textContent = "No se pudo copiar";
      mensaje.style.color = "#dc2626";
    }
  });

  redirigirSiHayCodigo();
  pintarHistorial();
});
