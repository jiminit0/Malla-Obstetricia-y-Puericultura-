
const cursos = [
    {
        nombre: "FUNDAMENTOS DE ENFERMERÍA 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "QUÍMICA GENERAL Y ORGÁNICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "BIOLOGÍA CELULAR Y GENÉTICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "MATEMÁTICAS",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "FÍSICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "EDUCACIÓN EN SALUD 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "CIENCIAS SOCIALES Y SALUD 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "CURSO DE FORMACIÓN GENERAL 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "INGLÉS 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: []
    },
    {
        nombre: "SALUD COMUNITARIA 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: []
    },
    {
        nombre: "BIOQUÍMICA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["QUÍMICA GENERAL Y ORGÁNICA", "BIOLOGÍA CELULAR Y GENÉTICA"]
    },
    {
        nombre: "BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"]
    },
    {
        nombre: "FISIOLOGÍA GENERAL",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["FÍSICA", "BIOLOGÍA CELULAR Y GENÉTICA"]
    },
    {
        nombre: "ANATOMÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"]
    },
    {
        nombre: "HISTOLOGÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"]
    },
    {
        nombre: "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["FUNDAMENTOS DE ENFERMERÍA 1"]
    },
    {
        nombre: "CURSO DE FORMACION GENERAL 2",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: []
    },
    {
        nombre: "INGLÉS 2",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["INGLÉS 1"]
    },
    {
        nombre: "FUNDAMENTOS DE ENFERMERÍA 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1", "FISIOLOGÍA GENERAL"]
    },
    {
        nombre: "OBSTETRICIA FISIOLÓGICA 1",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA", "FISIOLOGÍA GENERAL", "HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1"]
    },
    {
        nombre: "NEONATOLOGÍA 1",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA", "FISIOLOGÍA GENERAL", "HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1"]
    },
    {
        nombre: "FISIOLOGÍA DE SISTEMAS",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL"]
    },
    {
        nombre: "INMUNOLOGÍA",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL"]
    },
    {
        nombre: "AGENTES VIVOS DE ENFERMEDAD",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL", "HISTOLOGÍA"]
    },
    {
        nombre: "CIENCIAS SOCIALES Y SALUD 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["CIENCIAS SOCIALES Y SALUD 1"]
    },
    {
        nombre: "INGLÉS 3",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["INGLÉS 2"]
    },
    {
        nombre: "NEONATOLOGÍA 2",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["AGENTES VIVOS DE ENFERMEDAD", "NEONATOLOGÍA 1", "FISIOLOGÍA DE SISTEMAS"]
    },
    {
        nombre: "OBSTETRICIA FISIOLÓGICA 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["OBSTETRICIA FISIOLÓGICA 1", "FISIOLOGÍA DE SISTEMAS"]
    },

];
