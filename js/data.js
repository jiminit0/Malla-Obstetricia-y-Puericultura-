
const cursos = [
    {
        nombre: "FUNDAMENTOS DE ENFERMERÍA 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 3
    },
    {
        nombre: "QUÍMICA GENERAL Y ORGÁNICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 3
    },
    {
        nombre: "BIOLOGÍA CELULAR Y GENÉTICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 6
    },
    {
        nombre: "MATEMÁTICAS",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "FÍSICA",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "EDUCACIÓN EN SALUD 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 4
    },
    {
        nombre: "CIENCIAS SOCIALES Y SALUD 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 6
    },
    {
        nombre: "CURSO DE FORMACIÓN GENERAL 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "INGLÉS 1",
        semestre: "Año 1 - Semestre 1",
        prerrequisitos: [],
        creditos: 3
    },
    {
        nombre: "SALUD COMUNITARIA 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 4
    },
    {
        nombre: "BIOQUÍMICA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["QUÍMICA GENERAL Y ORGÁNICA", "BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 3
    },
    {
        nombre: "BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 4
    },
    {
        nombre: "FISIOLOGÍA GENERAL",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["FÍSICA", "BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 4
    },
    {
        nombre: "ANATOMÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 5
    },
    {
        nombre: "HISTOLOGÍA",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["BIOLOGÍA CELULAR Y GENÉTICA"],
        creditos: 3
    },
    {
        nombre: "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["FUNDAMENTOS DE ENFERMERÍA 1"],
        creditos: 2
    },
    {
        nombre: "CURSO DE FORMACION GENERAL 2",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "INGLÉS 2",
        semestre: "Año 1 - Semestre 2",
        prerrequisitos: ["INGLÉS 1"],
        creditos: 3
    },
    {
        nombre: "FUNDAMENTOS DE ENFERMERÍA 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1", "FISIOLOGÍA GENERAL"],
        creditos: 4
    },
    {
        nombre: "OBSTETRICIA FISIOLÓGICA 1",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA", "FISIOLOGÍA GENERAL", "HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1"],
        creditos: 4
    },
    {
        nombre: "NEONATOLOGÍA 1",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA", "FISIOLOGÍA GENERAL", "HISTOLOGÍA", "ANATOMÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1"],
        creditos: 4
    },
    {
        nombre: "FISIOLOGÍA DE SISTEMAS",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL"],
        creditos: 5
    },
    {
        nombre: "INMUNOLOGÍA",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL"],
        creditos: 3
    },
    {
        nombre: "AGENTES VIVOS DE ENFERMEDAD",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA GENERAL", "HISTOLOGÍA"],
        creditos: 3
    },
    {
        nombre: "CIENCIAS SOCIALES Y SALUD 2",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["CIENCIAS SOCIALES Y SALUD 1"],
        creditos: 5
    },
    {
        nombre: "INGLÉS 3",
        semestre: "Año 2 - Semestre 1",
        prerrequisitos: ["INGLÉS 2"],
        creditos: 3
    },
    {
        nombre: "NEONATOLOGÍA 2",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["AGENTES VIVOS DE ENFERMEDAD", "NEONATOLOGÍA 1", "FISIOLOGÍA DE SISTEMAS"],
        creditos: 3
    },
    {
        nombre: "OBSTETRICIA FISIOLÓGICA 2",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["OBSTETRICIA FISIOLÓGICA 1", "FISIOLOGÍA DE SISTEMAS"],
        creditos: 3
    },
    {
        nombre: "GINECOLOGÍA FISIOLÓGICA",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["HISTOLOGÍA", "ANATOMÍA", "FISIOLOGÍA DE SISTEMAS"],
        creditos: 5
    },    {
        nombre: "FISIOPATOLOGÍA",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["FISIOLOGÍA DE SISTEMAS"],
        creditos: 5
    },    
    {
        nombre: "INFECTOLOGÍA",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["AGENTES VIVOS DE ENFERMEDAD"],
        creditos: 3
    },    
    {
        nombre: "FARMACOLOGÍA",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["BIOQUÍMICA", "FISIOLOGÍA DE SISTEMAS"],
        creditos: 4
    },    
    {
        nombre: "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["FUNDAMENTOS DE ENFERMERÍA 2", "FISIOLOGÍA DE SISTEMAS"],
        creditos: 3
    },    
    {
        nombre: "INVESTIGACIÓN EN SALUD 1",
        semestre: "Año 2 - Semestre 2",
        prerrequisitos: ["FÍSICA", "MATEMÁTICAS"],
        creditos: 3
    },
    {
        nombre: "CLÍNICA NEONATAL 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["NEONATOLOGÍA 2", "INFECTOLOGÍA", "FISIOPATOLOGÍA", "FARMACOLOGÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA DE PARTOS 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["NEONATOLOGÍA 2", "INFECTOLOGÍA", "FISIOPATOLOGÍA", "FARMACOLOGÍA", "OBSTETRICIA FISIOLÓGICA 2", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA DE ATENCIÓN PRIMARIA 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: [ "GINECOLOGÍA FISIOLÓGICA", "OBSTETRICIA FISIOLÓGICA 2", "NEONATOLOGÍA 2", "INFECTOLOGÍA", "FISIOPATOLOGÍA", "FARMACOLOGÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA PUERPERIO",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: [ "OBSTETRICIA FISIOLÓGICA 2", "NEONATOLOGÍA 2", "INFECTOLOGÍA", "FISIOPATOLOGÍA", "FARMACOLOGÍA", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA DE SALUD COMUNITARIA",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: ["EDUCACIÓN EN SALUD 1", "SALUD COMUNITARIA 1", "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 2"],
        creditos: 4
    },
    {
        nombre: "MÓDULO INTEGRADO INTERDISCIPLINADO MULTIPROFESIONAL 1",
        semestre: "Año 3 - Semestre 1",
        prerrequisitos: [],
        creditos: 4,
        creditosMinimos: 90
    },
    {
        nombre: "NEONATOLOGÍA 3",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["OBSTETRICIA FISIOLÓGICA 2", "NEONATOLOGÍA 2", "FISIOPATOLOGÍA", "FARMACOLOGÍA"],
        creditos: 4
    },
    {
        nombre: "SALUD COMUNITARIA 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["SALUD COMUNITARIA 1"],
        creditos: 6
    },
    {
        nombre: "OBSTETRICIA PATOLÓGICA",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["OBSTETRICIA FISIOLÓGICA 2", "NEONATOLOGÍA 2", "FISIOPATOLOGÍA", "FARMACOLOGÍA"],
        creditos: 4
    },
    {
        nombre: "GESTIÓN Y LIDERAZGO Y EN SALUD 1",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["INVESTIGACIÓN EN SALUD 1"],
        creditos: 4
    },
    {
        nombre: "EDUCACIÓN EN SALUD 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["EDUCACIÓN EN SALUD 1"],
        creditos: 3
    },
    {
        nombre: "INVESTIGACIÓN EN SALUD 2",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["INVESTIGACIÓN EN SALUD 1"],
        creditos: 5
    },
    {
        nombre: "CIENCIAS SOCIALES Y SALUD 3",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: ["CIENCIAS SOCIALES Y SALUD 2"],
        creditos: 4
    },
    {
        nombre: "CURSO DE FORMACIÓN GENERAL 3",
        semestre: "Año 3 - Semestre 2",
        prerrequisitos: [],
        creditos: 2
    },
    {
        nombre: "ENFERMERÍA MÉDICO QUIRÚRGICA",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["NEONATOLOGÍA 3", "OBSTETRICIA PATOLÓGICA"],
        creditos: 6
    },
     {
        nombre: "REPRODUCCIÓN HUMANA",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["FISIOLOGÍA DE SISTEMAS"],
        creditos: 2
    },
    {
        nombre: "GINECOLOGÍA PATOLÓGICA",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["CLÍNICA DE ATENCIÓN PRIMARIA 1"],
        creditos: 5
    },
    {
        nombre: "GESTIÓN Y LIDERAZGO EN SALUD 2",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["GESTIÓN Y LIDERAZGO Y EN SALUD 1"],
        creditos: 5
    },
    {
        nombre: "INVESTIGACIÓN EN SALUD 3",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["INVESTIGACIÓN EN SALUD 2"],
        creditos: 6
    },
     {
        nombre: "CIENCIAS SOCIALES Y SALUD 4",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["CIENCIAS SOCIALES Y SALUD 3"],
        creditos: 4
    },
    {
        nombre: "CURSO DE FORMACIÓN GENERAL 4",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["CURSO DE FORMACION GENERAL 3"],
        creditos: 2
    },
    {
        nombre: "INGLÉS 4",
        semestre: "Año 4 - Semestre 1",
        prerrequisitos: ["INGLÉS 3"],
        creditos: 3
    },
    {
        nombre: "CLÍNICA NEONATAL 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["ENFERMERÍA MÉDICO QUIRÚRGICA", "NEONATOLOGÍA 3"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA DE PARTOS 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["ENFERMERÍA MÉDICO QUIRÚRGICA", "OBSTETRICIA PATOLÓGICA"],
        creditos: 4
    },
    {
        nombre: "CLÍNICA DE ATENCIÓN PRIMARIA 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["OBSTETRICIA PATOLÓGICA", "GINECOLOGÍA PATOLÓGICA", "SALUD COMUNITARIA 2"],
        creditos: 5
    },
    {
        nombre: "CLÍNICA DE ALTO RIESGO OBSTÉTRICO",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["ENFERMERÍA MÉDICO QUIRÚRGICA", "OBSTETRICIA PATOLÓGICA"],
        creditos: 4
    },
        {
        nombre: "CLÍNICA DE ENFERMERÍA MÉDICO QUIRÚRGICA",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["GINECOLOGÍA PATOLÓGICA", "ENFERMERÍA MÉDICO QUIRÚRGICA"],
        creditos: 4
    },
        {
        nombre: "MÓDULO INTEGRADO INTERDICIPLINARIO MULTIPROFESIONAL 2",
        semestre: "Año 4 - Semestre 2",
        prerrequisitos: ["MÓDULO INTEGRADO INTERDICIPLINARIO MULTIPROFESIONAL 1"],
        creditos: 5
    },

];
