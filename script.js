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
  "2° Año - 3 Semestre": [
    { nombre: "Bioestadísticas", requisitos: ["Matemáticas"], abre: ["Salud pública y Epidemiologia"] },
    { nombre: "Fisiología I", requisitos: ["Bioquímica humana", "Química", "Anatomía I"], abre: ["Fisiología II", "Integrador de ciclo inicial: Epistemología medica"] },
    { nombre: "Psicología Medica", abre: ["Relación médico-paciente", "Salud mental y psiquiatría I"] },
    { nombre: "Embriología", requisitos: ["Genética", "Anatomía II"], abre: ["Histología", "Integrador de ciclo inicial: Epistemología medica"] },
    { nombre: "Inmunología", requisitos: ["Microbiología", "Genética"], abre: ["Fisiopatología I"] },
    { nombre: "Ingles II", requisitos: ["Ingles I"], abre: ["Ingles III"] }
  ],
  "2° Año - 4 Semestre": [
    { nombre: "Fisiología II", requisitos: ["Fisiología I", "Anatomía II"], abre: ["Fisiopatología I", "Farmacología I", "Semiología I"] },
    { nombre: "Relación médico-paciente", requisitos: ["Psicología Medica"] },
    { nombre: "Histología", requisitos: ["Embriología"], abre: ["Anatomía patológica I"] },
    { nombre: "Integrador de ciclo inicial: Epistemología medica", requisitos: ["Microbiología", "Fisiología I", "Embriología"] },
    { nombre: "Salud pública y Epidemiologia", requisitos: ["Bioestadísticas"], abre: ["Transición epidemiológica y ciclo vital", "Gestión en salud I"] },
    { nombre: "Ingles III", requisitos: ["Ingles II"] },
    { nombre: "Formación de lideres del mañana", abre: ["Análisis y resolución de conflictos"] }
  ],
  "3° Año - 5 Semestre": [
    { nombre: "Fisiopatología I", requisitos: ["Fisiología II"] },
    { nombre: "Farmacología I", requisitos: ["Bioquímica humana", "Fisiología I"], abre: ["Farmacología II"] },
    { nombre: "Semiología I", requisitos: ["Anatomía II", "Fisiología II"], abre: ["Semiología II"] },
    { nombre: "Anatomía patológica I", requisitos: ["Histología", "Anatomía II"], abre: ["Anatomía patológica II"] },
    { nombre: "Transición epidemiológica y ciclo vital", requisitos: ["Salud pública y Epidemiologia"] },
    { nombre: "Análisis y resolución de conflictos", requisitos: ["Formación de lideres del mañana"], abre: ["Proyectos de responsabilidad social y emprendimiento"] }
  ],
  "3° Año - 6 Semestre": [
    { nombre: "Fisiopatología II", requisitos: ["Fisiopatología I"], abre: ["Medicina interna I", "Pediatría I", "Cirugía I", "Ginecología y obstetricia I"] },
    { nombre: "Farmacología II", requisitos: ["Farmacología I"] },
    { nombre: "Semiología II", requisitos: ["Semiología I"], abre: ["Medicina interna I", "Pediatría I", "Cirugía I", "Ginecología y obstetricia I"] },
    { nombre: "Anatomía patológica II", requisitos: ["Anatomía patológica I"], abre: ["Medicina legal"] },
    { nombre: "Electivo de formación general" }
  ],
  "4° Año - 7 Semestre": [
    { nombre: "Medicina interna I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Medicina interna II"] },
    { nombre: "Pediatría I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Pediatría II"] },
    { nombre: "Medicina legal", requisitos: ["Anatomía patológica II"] },
    { nombre: "Cirugía I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Cirugía II"] },
    { nombre: "Historia de la medicina", abre: ["Psicología social", "Salud comunitaria", "Antropología medica", "Bioética"] },
    { nombre: "Gestión en salud I", requisitos: ["Salud pública y Epidemiologia"] },
    { nombre: "Proyectos de responsabilidad social y emprendimiento", requisitos: ["Análisis y resolución de conflictos"], abre: ["Aplicación de proyectos"] }
  ],
  "4° Año - 8 Semestre": [
    { nombre: "Medicina interna II", requisitos: ["Medicina interna I"], abre: ["Subespecialidades I", "Urgencia I", "Integrador de ciclo intermedio: Red de salud", "Internado atención primaria en salud", "Internado medicina interna"] },
    { nombre: "Pediatría II", requisitos: ["Pediatría I"], abre: ["Subespecialidades I", "Urgencia I", "Integrador de ciclo intermedio: Red de salud", "Internado pediatría", "Internado atención primaria en salud"] },
    { nombre: "Psicología social", requisitos: ["Historia de la medicina"] },
    { nombre: "Cirugía II", requisitos: ["Cirugía I"], abre: ["Subespecialidades I", "Urgencia I", "Internado cirugía"] },
    { nombre: "Salud comunitaria", requisitos: ["Historia de la medicina"] },
    { nombre: "Gestión en salud II", requisitos: ["Gestión en salud I"], abre: ["Integrador de ciclo intermedio: Red de salud", "Metodología de la investigación", "Internado atención primaria en salud"] },
    { nombre: "Aplicación de proyectos", requisitos: ["Proyectos de responsabilidad social y emprendimiento"] }
  ],
  "5° Año - 9 Semestre": [
    { nombre: "Salud mental y psiquiatría I", requisitos: ["Psicología Medica"], abre: ["Salud mental y psiquiatría II", "Integrador de ciclo intermedio: Red de salud"] },
    { nombre: "Ginecología y obstetricia I", abre: ["Ginecología y obstetricia II", "Integrador de ciclo intermedio: Red de salud"] },
    { nombre: "Subespecialidades I", abre: ["Subespecialidades II", "Integrador de ciclo intermedio: Red de salud"] },
    { nombre: "Urgencia I", abre: ["Urgencia II"] },
    { nombre: "Antropología media" },
    { nombre: "Bioética" }
  ],
  "5° Año - 10 Semestre": [
    { nombre: "Salud mental y psiquiatría II", requisitos: ["Salud mental y psiquiatría I"], abre: ["Internado atención primaria en salud"] },
    { nombre: "Ginecología y obstetricia II", requisitos: ["Ginecología y obstetricia I"], abre: ["Internado atención primaria en salud", "Ginecología y obstetricia II"] },
    { nombre: "Subespecialidades II", requisitos: ["Subespecialidades I"], abre: ["Internado atención primaria en salud"] },
    { nombre: "Urgencia II", requisitos: ["Urgencia I"] },
    { nombre: "Integrador de ciclo intermedio: Red de salud" },
    { nombre: "Metodología de la investigación" }
  ],
  "6° Año - 11 Semestre": [
    { nombre: "Internado de ginecología y obstetricia", abre: ["Integrado de conocimientos médicos"] },
    { nombre: "Internado cirugía", abre: ["Integrado de conocimientos médicos"] }
  ],
  "6° Año - 12 Semestre": [
    { nombre: "Internado pediatría", abre: ["Integrado de conocimientos médicos"] }
  ],
  "7° Año - 13 Semestre": [
    { nombre: "Internado atención primaria en salud", abre: ["Integrado de conocimientos médicos"] }
  ],
  "7° Año - 14 Semestre": [
    { nombre: "Internado medicina interna", abre: ["Integrado de conocimientos médicos"] },
    { nombre: "Integrado de conocimientos médicos" }
  ]
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

    // Se bloquea si tiene requisitos y no están aprobados
    if (ramo.requisitos && ramo.requisitos.length > 0) {
      const todosCumplidos = ramo.requisitos.every(req => aprobados.has(req));
      if (!todosCumplidos) {
        div.classList.add("bloqueado");
      }
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      if (!aprobados.has(ramo.nombre)) {
        aprobados.add(ramo.nombre);
        div.classList.add("aprobado");

        // Desbloquear los ramos que dependen de este
        Object.values(malla).forEach(semestreRamos => {
          semestreRamos.forEach(r => {
            if (r.requisitos && r.requisitos.includes(ramo.nombre)) {
              const bloque = document.querySelector(`[data-nombre="${r.nombre}"]`);
              if (bloque) {
                const cumple = r.requisitos.every(req => aprobados.has(req));
                if (cumple) {
                  bloque.classList.remove("bloqueado");
                }
              }
            }
          });
        });
      }
    });

    col.appendChild(div);
  });

  contenedor.appendChild(col);
}

// Generar todos los semestres
Object.entries(malla).forEach(([semestre, ramos]) => {
  crearSemestre(semestre, ramos);
});
