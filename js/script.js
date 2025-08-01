document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla-container");
    const aprobados = new Set();

    function crearCurso(curso) {
        const div = document.createElement("div");
        div.className = "curso";
        div.innerHTML = `
            <strong>${curso.nombre}</strong><br>
            <small>${curso.creditos || 0} créditos</small>
        `;

        let locked = false;

        if (curso.prerrequisitos?.length > 0 && !curso.prerrequisitos.every(pr => aprobados.has(pr))) {
            locked = true;
        }

        if (curso.creditosMinimos) {
            let totalCreditos = 0;
            cursos.forEach(c => {
                if (aprobados.has(c.nombre)) {
                    totalCreditos += (c.creditos || 0);
                }
            });
            if (totalCreditos < curso.creditosMinimos) {
                locked = true;
            }
        }

        if (locked) {
            div.classList.add("locked");
            if (curso.creditosMinimos) {
                div.title = `Requiere ${curso.creditosMinimos} créditos aprobados`;
            }
        } else {
            div.addEventListener("click", () => {
                if (aprobados.has(curso.nombre)) {
                    aprobados.delete(curso.nombre);
                } else {
                    aprobados.add(curso.nombre);
                }
                render();
            });
        }

        if (aprobados.has(curso.nombre)) {
            div.classList.add("approved");
        }

        return div;
    }

    function render() {
        container.innerHTML = "";
        const agrupado = {};

        cursos.forEach(curso => {
            if (!agrupado[curso.semestre]) agrupado[curso.semestre] = [];
            agrupado[curso.semestre].push(curso);
        });

        for (const semestre in agrupado) {
            const semDiv = document.createElement("div");
            semDiv.className = "semestre";
            const title = document.createElement("h2");
            title.textContent = semestre;
            semDiv.appendChild(title);

    
            if (semestre === "Año 5") {
                const cursos = agrupado[semestre];

                const semestre1 = cursos.filter(c => c.semestreExacto === "Semestre 1");
                const semestre2 = cursos.filter(c => c.semestreExacto === "Semestre 2");
                const ambos = cursos.filter(c => c.semestreExacto === "Ambos");

                if (semestre1.length) {
                    const sub = document.createElement("h3");
                    sub.textContent = "Semestre 1";
                    semDiv.appendChild(sub);
                    semestre1.forEach(c => semDiv.appendChild(crearCurso(c)));
                }

                if (semestre2.length) {
                    const sub = document.createElement("h3");
                    sub.textContent = "Semestre 2";
                    semDiv.appendChild(sub);
                    semestre2.forEach(c => semDiv.appendChild(crearCurso(c)));
                }

                if (ambos.length) {
                    const sub = document.createElement("h3");
                    sub.textContent = "Ambos semestres";
                    semDiv.appendChild(sub);
                    ambos.forEach(c => semDiv.appendChild(crearCurso(c)));
                }
            } else {
                agrupado[semestre].forEach(curso => {
                    const div = crearCurso(curso);
                    semDiv.appendChild(div);
                });
            }

            container.appendChild(semDiv);
        }
    }

    render();
});

