
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla-container");

    const cursosPorSemestre = {};

    cursos.forEach(curso => {
        if (!cursosPorSemestre[curso.semestre]) {
            cursosPorSemestre[curso.semestre] = [];
        }
        cursosPorSemestre[curso.semestre].push(curso);
    });

    for (const semestre in cursosPorSemestre) {
        const semestreDiv = document.createElement("div");
        semestreDiv.className = "semestre";
        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        semestreDiv.appendChild(titulo);

        cursosPorSemestre[semestre].forEach(curso => {
            const div = document.createElement("div");
            div.className = "course";
            div.textContent = curso.nombre;

            div.dataset.nombre = curso.nombre;
            div.dataset.prerrequisitos = JSON.stringify(curso.prerrequisitos);

            div.addEventListener("click", () => {
                if (div.classList.contains("locked")) return;
                div.classList.toggle("approved");
                actualizarEstado();
            });

            semestreDiv.appendChild(div);
        });

        container.appendChild(semestreDiv);
    }

    function actualizarEstado() {
        const aprobados = Array.from(document.querySelectorAll(".course.approved"))
            .map(div => div.dataset.nombre);

        document.querySelectorAll(".course").forEach(div => {
            const requisitos = JSON.parse(div.dataset.prerrequisitos);
            const estaAprobado = div.classList.contains("approved");

            if (!estaAprobado && requisitos.length > 0) {
                const cumplidos = requisitos.every(req => aprobados.includes(req));
                if (cumplidos) {
                    div.classList.remove("locked");
                } else {
                    div.classList.add("locked");
                }
            } else if (requisitos.length === 0) {
                div.classList.remove("locked");
            }
        });
    }

    actualizarEstado();
});
