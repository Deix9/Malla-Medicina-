// script.js

const malla = {
  "1° Año - 1 Semestre": [
    { nombre: "Biología celular y molecular", abre: ["Bioquímica humana", "Microbiología", "Genética"] },
    { nombre: "Química", abre: ["Bioquímica humana", "Fisiología I"] },
    { nombre: "Matemáticas", abre: ["Biofísica", "Bioestadísticas"] },
    { nombre: "Anatomía I", abre: ["Anatomía II", "Fisiología I"] },
    { nombre: "Introducción a la vida universitaria", abre: ["Comunicación y tecnología"] },
    { nombre: "Estrategias de resolución de problemas" }
  ],
  "1° Año - 2 Semestre": [
    { nombre: "Bioquímica humana", requisitos: ["Biología celular y molecular", "Química"], abre: ["Fisiología I", "Farmacología I"] },
    { nombre: "Microbiología", requisitos: ["Biología celular y molecular"], abre: ["Inmunología", "Integrador de ciclo inicial: Epistemología medica"] },
    { nombre: "Genética", requisitos: ["Biología celular y molecular"], abre: ["Inmunología", "Embriología"] },
    { nombre: "Biofísica", requisitos: ["Matemáticas"] },
    { nombre: "Anatomía II", requisitos: ["Anatomía I"], abre: ["Embriología", "Fisiología II", "Anatomía patológica I", "Semiología I"] },
    { nombre: "Ingles I", abre: ["Ingles II"] },
    { nombre: "Comunicación y tecnología", requisitos: ["Introducción a la vida universitaria"] }
  ],
  // Agrega aquí el resto de los semestres siguiendo el mismo formato
};

const aprobados = new Set();
const contenedor = document.getElementById("malla-container");

function crearSemestre(titulo, ramos) {
  const col = document.createElement("div");
  col.className = "semestre";

  const heading = document.createElement("h2");
  heading.textContent = titulo;
  col.appendChild(heading);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.dataset.nombre = ramo.nombre;

    if (!ramo.requisitos || ramo.requisitos.length === 0) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
      aprobados.add(ramo.nombre);

      for (const lista of Object.values(malla)) {
        lista.forEach(r => {
          if (r.requisitos && r.requisitos.includes(ramo.nombre)) {
            const cumplidos = r.requisitos.every(req => aprobados.has(req));
            if (cumplidos) {
              const bloque = document.querySelector(`[data-nombre="${r.nombre}"]`);
              if (bloque) bloque.classList.remove("bloqueado");
            }
          }
        });
      }
    });

    col.appendChild(div);
  });

  contenedor.appendChild(col);
}

for (const [semestre, ramos] of Object.entries(malla)) {
  crearSemestre(semestre, ramos);
}

