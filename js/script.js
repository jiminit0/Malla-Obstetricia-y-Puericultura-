
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla-container");
    const aprobados = new Set();

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

            agrupado[semestre].forEach(curso => {
                const div = document.createElement("div");
                div.className = "curso";
                div.textContent = curso.nombre;
                div.innerHTML = `
                    <strong>${curso.nombre}</strong><br>
                    <small>${curso.creditos || 0} créditos</small>
                `;
                let locked = false;
                if (curso.prerrequisitos.length > 0 && !curso.prerrequisitos.every(pr => aprobados.has(pr))) {
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
                        div.title += ` - requiere ${curso.creditosMinimos} créditos aprobados`;
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

                semDiv.appendChild(div);
            });

            container.appendChild(semDiv);
        }
    }

    render();
});
