
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla-container");
    const aprobados = new Set();

    function render() {
        container.innerHTML = "";
        const agrupado = {};

        course.forEach(curso => {
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

                const locked = curso.prerrequisitos.length > 0 &&
                    !curso.prerrequisitos.every(pr => aprobados.has(pr));

                if (locked) {
                    div.classList.add("locked");
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
