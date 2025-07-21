const courses = [
  {
    name: "FUNDAMENTOS DE ENFERMERÍA 1",
    semester: 1,
    year: 1,
    prereqs: [],
  },
  {
    name: "QUÍMICA GENERAL Y ORGÁNICA",
    semester: 1,
    year: 1,
    prereqs: [],
  },
  {
    name: "BIOLOGÍA CELULAR Y GENÉTICA",
    semester: 1,
    year: 1,
    prereqs: [],
  },
  {
    name: "SALUD COMUNITARIA 1",
    semester: 2,
    year: 1,
    prereqs: [],
  },
  {
    name: "BIOQUÍMICA",
    semester: 2,
    year: 1,
    prereqs: ["QUÍMICA GENERAL Y ORGÁNICA", "BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "FUNDAMENTOS DE ENFERMERÍA 2",
    semester: 1,
    year: 2,
    prereqs: ["HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1", "FISIOLOGÍA GENERAL"],
  }
];

function renderCourses() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  courses.forEach(course => {
    const div = document.createElement("div");
    const fulfilled = course.prereqs.every(pr => localStorage.getItem(pr) === "true");
    div.className = "course " + (course.prereqs.length === 0 || fulfilled ? "unlocked" : "locked");
    div.textContent = course.name;
    div.onclick = () => {
      if (div.classList.contains("unlocked")) {
        localStorage.setItem(course.name, "true");
        renderCourses();
      }
    };
    app.appendChild(div);
  });
}

window.onload = renderCourses;