const allCourses = [
  {
    name: "FUNDAMENTOS DE ENFERMERÍA 1",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "QUÍMICA GENERAL Y ORGÁNICA",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "BIOLOGÍA CELULAR Y GENÉTICA",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "MATEMÁTICAS",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "FÍSICA",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "EDUCACIÓN EN SALUD 1",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "CIENCIAS SOCIALES Y SALUD 1",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "CURSO DE FORMACIÓN GENERAL 1",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "INGLÉS 1",
    semester: 1,
    year: 1,
    prerequisites: [],
  },
  {
    name: "SALUD COMUNITARIA 1",
    semester: 2,
    year: 1,
    prerequisites: [],
  },
  {
    name: "BIOQUÍMICA",
    semester: 2,
    year: 1,
    prerequisites: ["QUÍMICA GENERAL Y ORGÁNICA", "BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "BIOLOGÍA DEL DESARROLLO Y EMBRIOLOGÍA HUMANA",
    semester: 2,
    year: 1,
    prerequisites: ["BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "FISIOLOGÍA GENERAL",
    semester: 2,
    year: 1,
    prerequisites: ["FÍSICA", "BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "ANATOMÍA",
    semester: 2,
    year: 1,
    prerequisites: ["BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "HISTOLOGÍA",
    semester: 2,
    year: 1,
    prerequisites: ["BIOLOGÍA CELULAR Y GENÉTICA"],
  },
  {
    name: "INTEGRACIÓN AL DESEMPEÑO PROFESIONAL 1",
    semester: 2,
    year: 1,
    prerequisites: ["FUNDAMENTOS DE ENFERMERÍA 1"],
  },
  {
    name: "CURSO DE FORMACION GENERAL 2",
    semester: 2,
    year: 1,
    prerequisites: [],
  },
  {
    name: "INGLÉS 2",
    semester: 2,
    year: 1,
    prerequisites: ["INGLÉS 1"],
  }
  // El resto de los cursos se agregará en breve
];

const Course = ({ course, completed, onComplete, unlocked }) => {
  return (
    <button
      onClick={() => onComplete(course.name)}
      disabled={!unlocked || completed.includes(course.name)}
      className={`rounded-2xl shadow-md p-3 m-2 w-full text-sm text-left transition-all duration-300
        ${completed.includes(course.name) ? "bg-green-300" : unlocked ? "bg-red-200 hover:bg-red-300" : "bg-gray-200 text-gray-400"}`}
    >
      <div className="font-bold">{course.name}</div>
      {course.prerequisites.length > 0 && (
        <div className="text-xs mt-1 text-gray-700">
          Req: {course.prerequisites.join(", ")}
        </div>
      )}
    </button>
  );
};

export default function MallaInteractiva() {
  const [completed, setCompleted] = useState([]);

  const isUnlocked = (course) => {
    return course.prerequisites.every((req) => completed.includes(req));
  };

  const handleComplete = (courseName) => {
    if (!completed.includes(courseName)) {
      setCompleted([...completed, courseName]);
    }
  };

  const grouped = {};
  allCourses.forEach((course) => {
    const key = `Año ${course.year} - Semestre ${course.semester}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(course);
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Malla Curricular Interactiva</h1>
      {Object.entries(grouped).map(([period, courses]) => (
        <div key={period} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{period}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {courses.map((course) => (
              <Course
                key={course.name}
                course={course}
                completed={completed}
                onComplete={handleComplete}
                unlocked={
                  course.year === 1 && course.semester === 1
                    ? true
                    : isUnlocked(course)
                }
              />
            ))}
          </div>
        </div>
      ))}
      <p className="mt-6 text-center text-sm text-gray-500">
        Hecho con cariño por Helena Meléndez ❤️
      </p>
    </div>
  );
}
