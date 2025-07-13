const ramos = [
  // Primer Año
  { nombre: "Biología celular y molecular", abre: ["Bioquímica humana", "Microbiología", "Genética"] },
  { nombre: "Química", abre: ["Bioquímica humana", "Fisiología I"] },
  { nombre: "Matemáticas", abre: ["Biofísica", "Bioestadísticas"] },
  { nombre: "Anatomía I", abre: ["Anatomía II", "Fisiología I"] },
  { nombre: "Introducción a la vida universitaria", abre: ["Comunicación y tecnología"] },
  { nombre: "Estrategias de resolución de problemas", abre: [] },

  { nombre: "Bioquímica humana", requisitos: ["Biología celular y molecular", "Química"], abre: ["Fisiología I", "Farmacología I"] },
  { nombre: "Microbiología", requisitos: ["Biología celular y molecular"], abre: ["Inmunología", "Integrador de ciclo inicial: Epistemología medica"] },
  { nombre: "Genética", requisitos: ["Biología celular y molecular"], abre: ["Inmunología", "Embriología"] },
  { nombre: "Biofísica", requisitos: ["Matemáticas"], abre: [] },
  { nombre: "Anatomía II", requisitos: ["Anatomía I"], abre: ["Embriología", "Fisiología II", "Anatomía patológica I", "Semiología I"] },
  { nombre: "Ingles I", abre: ["Ingles II"] },
  { nombre: "Comunicación y tecnología", requisitos: ["Introducción a la vida universitaria"], abre: [] },

  // Segundo Año
  { nombre: "Bioestadísticas", requisitos: ["Matemáticas"], abre: ["Salud pública y Epidemiologia"] },
  { nombre: "Fisiología I", requisitos: ["Bioquímica humana", "Química", "Anatomía I"], abre: ["Fisiología II", "Integrador de ciclo inicial: Epistemología medica"] },
  { nombre: "Psicología Medica", abre: ["Relación médico-paciente", "Salud mental y psiquiatría I"] },
  { nombre: "Embriología", requisitos: ["Genética", "Anatomía II"], abre: ["Histología", "Integrador de ciclo inicial: Epistemología medica"] },
  { nombre: "Inmunología", requisitos: ["Microbiología", "Genética"], abre: ["Fisiopatología I"] },
  { nombre: "Ingles II", requisitos: ["Ingles I"], abre: ["Ingles III"] },

  { nombre: "Fisiología II", requisitos: ["Fisiología I", "Anatomía II"], abre: ["Fisiopatología I", "Farmacología I", "Semiología I"] },
  { nombre: "Relación médico-paciente", requisitos: ["Psicología Medica"], abre: [] },
  { nombre: "Histología", requisitos: ["Embriología"], abre: ["Anatomía patológica I"] },
  { nombre: "Integrador de ciclo inicial: Epistemología medica", requisitos: ["Embriología", "Fisiología I", "Microbiología"], abre: [] },
  { nombre: "Salud pública y Epidemiologia", requisitos: ["Bioestadísticas"], abre: ["Transición epidemiológica y ciclo vital", "Gestión en salud I"] },
  { nombre: "Ingles III", requisitos: ["Ingles II"], abre: [] },
  { nombre: "Formación de lideres del mañana", abre: ["Análisis y resolución de conflictos"] },

  // Tercer Año
  { nombre: "Fisiopatología I", requisitos: ["Fisiología II", "Inmunología"], abre: ["Fisiopatología II"] },
  { nombre: "Farmacología I", requisitos: ["Fisiología II", "Bioquímica humana"], abre: ["Farmacología II"] },
  { nombre: "Semiología I", requisitos: ["Fisiología II", "Anatomía II"], abre: ["Semiología II"] },
  { nombre: "Anatomía patológica I", requisitos: ["Histología", "Anatomía II"], abre: ["Anatomía patológica II"] },
  { nombre: "Transición epidemiológica y ciclo vital", requisitos: ["Salud pública y Epidemiologia"], abre: [] },
  { nombre: "Análisis y resolución de conflictos", requisitos: ["Formación de lideres del mañana"], abre: ["Proyectos de responsabilidad social y emprendimiento"] },

  { nombre: "Fisiopatología II", requisitos: ["Fisiopatología I"], abre: ["Medicina interna I", "Pediatría I", "Cirugía I", "Ginecología y obstetricia I"] },
  { nombre: "Farmacología II", requisitos: ["Farmacología I"], abre: [] },
  { nombre: "Semiología II", requisitos: ["Semiología I"], abre: ["Medicina interna I", "Pediatría I", "Cirugía I", "Ginecología y obstetricia I"] },
  { nombre: "Anatomía patológica II", requisitos: ["Anatomía patológica I"], abre: ["Medicina legal"] },
  { nombre: "Electivo de formación general", abre: [] },

  // Cuarto Año
  { nombre: "Medicina interna I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Medicina interna II"] },
  { nombre: "Pediatría I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Pediatría II"] },
  { nombre: "Medicina legal", requisitos: ["Anatomía patológica II"], abre: [] },
  { nombre: "Cirugía I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Cirugía II"] },
  { nombre: "Historia de la medicina", abre: ["Psicología social", "Salud comunitaria", "Antropología medica", "Bioética"] },
  { nombre: "Gestión en salud I", requisitos: ["Salud pública y Epidemiologia"], abre: ["Integrador de ciclo intermedio: Red de salud", "Metodología de la investigación", "Internado atención primaria en salud"] },
  { nombre: "Proyectos de responsabilidad social y emprendimiento", requisitos: ["Análisis y resolución de conflictos"], abre: ["Aplicación de proyectos"] },

  { nombre: "Medicina interna II", requisitos: ["Medicina interna I"], abre: ["Subespecialidades I", "Urgencia I", "Integrador de ciclo intermedio: Red de salud", "Internado atención primaria en salud", "Internado medicina interna"] },
  { nombre: "Pediatría II", requisitos: ["Pediatría I"], abre: ["Subespecialidades I", "Urgencia I", "Integrador de ciclo intermedio: Red de salud", "Internado pediatría", "Internado atención primaria en salud"] },
  { nombre: "Psicología social", requisitos: ["Historia de la medicina"], abre: [] },
  { nombre: "Cirugía II", requisitos: ["Cirugía I"], abre: ["Subespecialidades I", "Urgencia I", "Internado cirugía"] },
  { nombre: "Salud comunitaria", requisitos: ["Historia de la medicina"], abre: [] },
  { nombre: "Gestión en salud II", requisitos: ["Gestión en salud I"], abre: ["Integrador de ciclo intermedio: Red de salud", "Metodología de la investigación", "Internado atención primaria en salud"] },
  { nombre: "Aplicación de proyectos", requisitos: ["Proyectos de responsabilidad social y emprendimiento"], abre: [] },

  // Quinto Año
  { nombre: "Salud mental y psiquiatría I", requisitos: ["Psicología Medica"], abre: ["Salud mental y psiquiatría II", "Integrador de ciclo intermedio: Red de salud"] },
  { nombre: "Ginecología y obstetricia I", requisitos: ["Fisiopatología II", "Semiología II"], abre: ["Ginecología y obstetricia II", "Integrador de ciclo intermedio: Red de salud"] },
  { nombre: "Subespecialidades I", requisitos: ["Medicina interna II", "Pediatría II", "Cirugía II"], abre: ["Subespecialidades II", "Integrador de ciclo intermedio: Red de salud"] },
  { nombre: "Urgencia I", requisitos: ["Medicina interna II", "Pediatría II", "Cirugía II"], abre: ["Urgencia II"] },
  { nombre: "Antropología media", requisitos: ["Historia de la medicina"], abre: [] },
  { nombre: "Bioética", requisitos: ["Historia de la medicina"], abre: [] },

  { nombre: "Salud mental y psiquiatría II", requisitos: ["Salud mental y psiquiatría I"], abre: ["Internado atención primaria en salud"] },
  { nombre: "Ginecología y obstetricia II", requisitos: ["Ginecología y obstetricia I"], abre: ["Internado atención primaria en salud"] },
  { nombre: "Subespecialidades II", requisitos: ["Subespecialidades I"], abre: ["Internado atención primaria en salud"] },
  { nombre: "Urgencia II", requisitos: ["Urgencia I"], abre: [] },
  { nombre: "Integrador de ciclo intermedio: Red de salud", requisitos: ["Medicina interna II", "Pediatría II", "Gestión en salud II"], abre: [] },
  { nombre: "Metodología de la investigación", requisitos: ["Gestión en salud II"], abre: [] },

  // Sexto Año
  { nombre: "Internado de ginecología y obstetricia", requisitos: ["Ginecología y obstetricia II"], abre: ["Integrado de conocimientos médicos"] },
  { nombre: "Internado cirugía", requisitos: ["Cirugía II"], abre: ["Integrado de conocimientos médicos"] },

  { nombre: "Internado pediatría", requisitos: ["Pediatría II"], abre: ["Integrado de conocimientos médicos"] },

  // Séptimo Año
  { nombre: "Internado atención primaria en salud", requisitos: ["Gestión en salud II", "Ginecología y obstetricia II", "Salud mental y psiquiatría II", "Subespecialidades II", "Medicina interna II", "Pediatría II"], abre: ["Integrado de conocimientos médicos"] },

  { nombre: "Internado medicina interna", requisitos: ["Medicina interna II"], abre: ["Integrado de conocimientos médicos"] },
  { nombre: "Integrado de conocimientos médicos", requisitos: ["Internado medicina interna", "Internado pediatría", "Internado cirugía", "Internado de ginecología y obstetricia", "Internado atención primaria en salud"], abre: [] }
];

const aprobados = new Set();
const contenedor = document.getElementById("malla-container");

function crearCuadro(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.dataset.nombre = ramo.nombre;

  if (!ramo.requisitos || ramo.requisitos.length === 0) {
    div.classList.remove("bloqueado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    div.classList.add("aprobado");
    div.classList.remove("bloqueado");
    aprobados.add(ramo.nombre);

    ramos.forEach(r => {
      if (r.requisitos && r.requisitos.includes(ramo.nombre)) {
        const cumplidos = r.requisitos.every(req => aprobados.has(req));
        if (cumplidos) {
          const bloque = document.querySelector(`[data-nombre="${r.nombre}"]`);
          if (bloque) bloque.classList.remove("bloqueado");
        }
      }
    });
  });

  contenedor.appendChild(div);
}

ramos.forEach(ramo => crearCuadro(ramo));
