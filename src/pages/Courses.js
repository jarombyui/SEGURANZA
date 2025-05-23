import React from 'react';

const courses = [
  {
    id: 1,
    title: "Trabajos en Altura",
    image: "/images/trabajos-altura.jpg",
    description: "Certificación oficial para trabajos en altura. Aprende técnicas de seguridad avanzadas y protocolos de rescate.",
    impact: "Reduce el riesgo de accidentes en un 95% con nuestra metodología probada"
  },
  {
    id: 2,
    title: "Espacios Confinados",
    image: "/images/espacio-confinado.jpg",
    description: "Formación especializada en seguridad para espacios confinados. Protocolos de entrada y rescate.",
    impact: "Certificación reconocida internacionalmente por OSHA"
  },
  {
    id: 3,
    title: "Trabajos en Caliente",
    image: "/images/trabajos-caliente.png",
    description: "Prevención y control de riesgos en trabajos con soldadura y corte. Certificación obligatoria.",
    impact: "Más de 1000 profesionales certificados anualmente"
  },
  {
    id: 4,
    title: "Riesgo Eléctrico",
    image: "/images/RIESGO-electrico.jpg",
    description: "Identificación, evaluación y control de riesgos eléctricos en el entorno laboral.",
    impact: "Metodología probada en más de 500 empresas"
  },
  {
    id: 5,
    title: "Bloqueo y Etiquetado",
    image: "/images/LOTO.jpg",
    description: "Procedimientos seguros para el control de energías peligrosas (LOTO).",
    impact: "Certificación internacional en procedimientos LOTO"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-primary">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Cursos de Trabajos de Alto Riesgo
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Formación especializada para profesionales que buscan la excelencia en seguridad laboral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-secondary rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4 bg-primary/80 py-2 rounded-lg">{course.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-white/90 mb-4 flex-1">{course.description}</p>
                  <div className="bg-primary/50 rounded-xl p-4 mb-4">
                    <p className="text-accent font-semibold">{course.impact}</p>
                  </div>
                  <button
                    onClick={() => {
                      const phone = '51947726382';
                      const message = `Hola, me interesa el curso de ${course.title}`;
                      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-accent text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-auto"
                  >
                    ¡Inscríbete Ahora!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 