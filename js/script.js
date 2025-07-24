
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("malla-container");
    const aprobados = new Set();

    function render() {
        container.innerHTML = "";
        const agrupado = {};

        course.forEach(curso => {
            if (!agrupado[course.semestre]) agrupado[course.semestre] = [];
            agrupado[course.semestre].push(curso);
        });

        for (const semestre in agrupado) {
            const semDiv = document.createElement("div");
            semDiv.className = "semester";
            const title = document.createElement("h2");
            title.textContent = semestre;
            semDiv.appendChild(title);

            agrupado[semestre].forEach(curso => {
                const div = document.createElement("div");
                div.className = "course";
                div.textContent = curso.nombre;

                const locked = course.prerrequisitos.length > 0 &&
                    !course.prerrequisitos.every(pr => aprobados.has(pr));

                if (locked) {
                    div.classList.add("locked");
                } else {
                    div.addEventListener("click", () => {
                        if (aprobados.has(course.nombre)) {
                            aprobados.delete(course.nombre);
                        } else {
                            aprobados.add(course.nombre);
                        }
                        render();
                    });
                }

                if (aprobados.has(course.nombre)) {
                    div.classList.add("approved");
                }

                semDiv.appendChild(div);
            });

            container.appendChild(semDiv);
        }
    }

    render();
});
