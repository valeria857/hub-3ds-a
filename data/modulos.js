/* =========================================================
   DATOS DEL PORTAL
   Cada módulo tiene un "responsable" (quien lo investiga y lo llena).
   Para agregar un módulo: copia un bloque { ... }, pégalo
   al final de MODULOS (con coma) y cambia sus datos.
   NO hay que tocar index.html ni app.js.

   IMPORTANTE: estos textos son un borrador armado con los nombres
   de los módulos y prácticas de Classroom. Léelos, corrígelos y
   reescríbelos con TUS palabras. Verifica cada enlace abriéndolo.
   En "quiz", "correcta" es la posición de la respuesta buena
   (0 = primera opción, 1 = segunda, 2 = tercera).
   ========================================================= */

const EQUIPO = [
  { nombre: "Valeria Contreras", rol: "Líder Git",                   github: "usuario-valeria" },
  { nombre: "Lissett Menéndez",  rol: "Diseño UI",                   github: "usuario-lissett" },
  { nombre: "Jazmin Peña",       rol: "Contenido y QA (compartido)", github: "usuario-jazmin" }
];

const MODULOS = [
  {
    id: "modulo-1",
    responsable: "Valeria Contreras",
    numero: "1",
    categoria: "Desarrollo de software",
    nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
    docente: "Francisco",
    resumen: "Recorrí el camino completo de una aplicación: modelé problemas con programación orientada a objetos, conecté el código con bases de datos y construí aplicaciones web con ASP.NET y SQL, además de mis primeras pantallas con .NET MAUI.",
    aprendi: [
      "Modelar un problema con clases, herencia y polimorfismo en C#.",
      "Conectar una aplicación con una base de datos (ADO.NET y Code First) para guardar y leer datos.",
      "Construir páginas web dinámicas con ASP.NET (Razor Pages y Web Forms) conectadas a SQL."
    ],
    instrumentos: ["Computadora", "Prácticas 1 a 8 en Classroom", "Etapa de Informarse"],
    programas: ["Visual Studio Code", "Visual Studio Community", ".NET SDK", "SQL Server"],
    herramientas: ["C# y POO", "ADO.NET", "Code First (Entity Framework)", "ASP.NET Razor Pages", "ASP.NET Web Forms", ".NET MAUI", "Depurador de Visual Studio", "NuGet"],
    recursos: [
      { titulo: "Documentación de C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { titulo: "Entity Framework Core", url: "https://learn.microsoft.com/es-es/ef/core/" },
      { titulo: "Razor Pages en ASP.NET Core", url: "https://learn.microsoft.com/es-es/aspnet/core/razor-pages/" }
    ],
    evidencia: "Prácticas 1 a 8 entregadas en Classroom: desde POO con herencia y polimorfismo hasta aplicaciones web con SQL y las primeras en .NET MAUI.",
    quiz: [
      {
        pregunta: "La clase Animal tiene un método virtual Hablar() y Perro lo redefine con override. Si una variable de tipo Animal guarda un Perro y llamas Hablar(), ¿qué se ejecuta?",
        opciones: ["La versión de Animal, porque la variable es de tipo Animal", "La versión de Perro, porque el objeto real es un Perro", "Ninguna: da error de compilación"],
        correcta: 1,
        explicacion: "Es polimorfismo: se ejecuta la versión del tipo real del objeto."
      },
      {
        pregunta: "¿Qué significa trabajar con Code First en Entity Framework?",
        opciones: ["Primero se escribe la base de datos en SQL y luego se generan las clases", "Primero se escriben las clases en C# y de ellas se crea la base de datos", "Primero se programa la interfaz y no se usa base de datos"],
        correcta: 1,
        explicacion: "Las clases del modelo definen las tablas que se generan."
      },
      {
        pregunta: "¿Para qué sirve la cadena de conexión en una aplicación que usa SQL Server?",
        opciones: ["Para indicar a qué servidor y base de datos se conecta la aplicación", "Para cifrar el código fuente", "Para dar estilo a las páginas"],
        correcta: 0,
        explicacion: "Contiene los datos de servidor y base de datos para abrir la conexión."
      }
    ]
  },
  {
    id: "modulo-2",
    responsable: "Lissett Menéndez",
    numero: "2",
    categoria: "Desarrollo móvil",
    nombre: "Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco",
    resumen: "Llevé lo aprendido a aplicaciones móviles con .NET MAUI, guardé datos con operaciones CRUD, organicé el trabajo con Scrum y puse en marcha una tienda en línea con PrestaShop.",
    aprendi: [
      "Crear pantallas y lógica de una app multiplataforma con .NET MAUI.",
      "Programar un CRUD (crear, leer, actualizar y eliminar) sobre una base de datos.",
      "Organizar el trabajo con Scrum y publicar un negocio en línea con PrestaShop."
    ],
    instrumentos: ["Computadora", "Prácticas 9 a 12 en Classroom", "Autoevaluación de la práctica 9"],
    programas: ["Visual Studio Code", "Visual Studio Community", ".NET SDK", "PrestaShop", "Navegador web"],
    herramientas: [".NET MAUI", "CRUD", "Scrum", "Base de datos", "Catálogo y pedidos en PrestaShop", "Depurador de Visual Studio", "NuGet"],
    recursos: [
      { titulo: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { titulo: "Guía de Scrum", url: "https://scrumguides.org/" },
      { titulo: "Documentación de PrestaShop", url: "https://docs.prestashop-project.org/" }
    ],
    evidencia: "Práctica 12 (CRUD individual) y tienda en línea puesta en marcha con PrestaShop.",
    quiz: [
      {
        pregunta: ".NET MAUI sirve principalmente para…",
        opciones: ["Administrar servidores de bases de datos", "Diseñar logotipos y gráficos", "Crear apps para varias plataformas, como Android y Windows, con un mismo proyecto en C#"],
        correcta: 2,
        explicacion: "MAUI permite compartir el código entre plataformas."
      },
      {
        pregunta: "¿Qué significan las letras de CRUD?",
        opciones: ["Conectar, Revisar, Usar y Desconectar", "Crear, Leer, Actualizar y Eliminar", "Copiar, Reemplazar, Unir y Descargar"],
        correcta: 1,
        explicacion: "Son las cuatro operaciones básicas sobre los datos."
      },
      {
        pregunta: "En Scrum, ¿qué es un sprint?",
        opciones: ["Una reunión diaria de 15 minutos", "Un periodo corto de duración fija en el que se entrega un avance del producto", "El documento con todos los requisitos del cliente"],
        correcta: 1,
        explicacion: "Es una iteración de duración fija que termina con un incremento utilizable."
      }
    ]
  },
  {
    id: "modulo-3-3",
    responsable: "Jazmin Peña",
    numero: "3.3",
    categoria: "Bases de datos",
    nombre: "Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Aprendí a cuidar una base de datos para que sea confiable: diseñarla con claves, dar permisos a los usuarios correctos y respaldarla para poder recuperarla si algo falla.",
    aprendi: [
      "Identificar claves primarias y foráneas para relacionar tablas.",
      "Dar permisos a los usuarios para controlar quién consulta o modifica los datos.",
      "Hacer respaldos (backups) y restaurarlos."
    ],
    instrumentos: ["Computadora", "Guías de práctica en Classroom"],
    programas: ["Visual Studio Code", "Visual Studio Community", "SQL Server", "SQL Server Management Studio"],
    herramientas: ["SQL", "Claves primarias y foráneas", "Usuarios y permisos", "Respaldo y restauración"],
    recursos: [
      { titulo: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { titulo: "Copia de seguridad y restauración", url: "https://learn.microsoft.com/es-es/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases" },
      { titulo: "Tutorial de SQL (W3Schools)", url: "https://www.w3schools.com/sql/" }
    ],
    evidencia: "Práctica de administración de una base de datos: tablas relacionadas, usuarios con permisos y respaldo.",
    quiz: [
      {
        pregunta: "¿Para qué sirve una clave primaria en una tabla?",
        opciones: ["Para identificar de forma única cada registro", "Para cifrar los datos de la tabla", "Para copiar la tabla a otro servidor"],
        correcta: 0,
        explicacion: "Garantiza que cada fila sea única y localizable."
      },
      {
        pregunta: "Un usuario solo debe consultar datos, no modificarlos. ¿Qué principio se aplica al darle permisos?",
        opciones: ["Darle todos los permisos para evitar problemas", "Mínimo privilegio: solo los permisos que necesita", "Compartirle la contraseña del administrador"],
        correcta: 1,
        explicacion: "Mientras menos permisos sobrantes, menor riesgo de errores o abusos."
      },
      {
        pregunta: "¿Para qué sirve un respaldo (backup) de la base de datos?",
        opciones: ["Para acelerar las consultas", "Para borrar registros antiguos", "Para poder recuperar los datos si hay un fallo o una pérdida"],
        correcta: 2,
        explicacion: "Permite restaurar la información al estado en que se respaldó."
      }
    ]
  },
  {
    id: "modulo-3-4",
    responsable: "Lissett Menéndez",
    numero: "3.4",
    categoria: "Documentación",
    nombre: "Elaboración de documentación de Sistemas informáticos",
    docente: "Javier Mineros",
    resumen: "Aprendí que un sistema no termina cuando funciona: hay que explicarlo. Documenté qué hace el programa, cómo se usa y cómo está construido para que otra persona pueda manejarlo y darle mantenimiento.",
    aprendi: [
      "Diferenciar el manual de usuario del manual técnico.",
      "Describir requisitos y funcionamiento con texto y diagramas.",
      "Escribir con claridad pensando en quien va a leer."
    ],
    instrumentos: ["Computadora", "Guía o plantilla de documentación"],
    programas: ["Visual Studio Code", "Visual Studio Community", "Procesador de texto", "Editor de diagramas", "Markdown (README en GitHub)"],
    herramientas: ["Manual de usuario", "Manual técnico", "Diagramas", "README"],
    recursos: [
      { titulo: "Guía de documentación (Write the Docs)", url: "https://www.writethedocs.org/guide/" },
      { titulo: "Especificaciones de UML", url: "https://www.uml.org/" },
      { titulo: "Documentación de GitHub", url: "https://docs.github.com/es" }
    ],
    evidencia: "Documentación de un sistema informático con manual de usuario, manual técnico y diagramas.",
    quiz: [
      {
        pregunta: "¿A quién va dirigido principalmente un manual de usuario?",
        opciones: ["Únicamente a quien programó el sistema", "A quien usa el sistema, sin necesidad de conocer su código", "A quien administra la red"],
        correcta: 1,
        explicacion: "Explica cómo usar el sistema con lenguaje sencillo."
      },
      {
        pregunta: "¿Qué debe explicar un manual técnico?",
        opciones: ["Cómo está construido el sistema: estructura, base de datos y configuración", "Solo los botones de la pantalla principal", "La historia de la institución"],
        correcta: 0,
        explicacion: "Sirve para quien instala, mantiene o amplía el sistema."
      },
      {
        pregunta: "¿Por qué ayuda un diagrama en la documentación?",
        opciones: ["Porque reemplaza por completo al código", "Porque muestra de forma visual cómo se relacionan las partes del sistema", "Porque hace que el programa corra más rápido"],
        correcta: 1,
        explicacion: "Una imagen resume relaciones que en texto serían difíciles de seguir."
      }
    ]
  },
  {
    id: "modulo-3-5",
    responsable: "Lissett Menéndez",
    numero: "3.5",
    categoria: "Desarrollo móvil",
    nombre: "Módulo 3.5: Desarrollo de componentes para dispositivos móviles",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Diseñé y desarrollé componentes para aplicaciones móviles, considerando interfaces táctiles, consumo de APIs y pruebas en emuladores para Android.",
    aprendi: [
      "Crear interfaces móviles táctiles y adaptables a distintos tamaños de pantalla.",
      "Reconocer las opciones para desarrollar aplicaciones con Android, Flutter, React Native, Java y Kotlin.",
      "Consumir APIs desde una app y probar su funcionamiento en un emulador."
    ],
    instrumentos: ["Computadora", "Dispositivo móvil Android", "Guía de práctica de desarrollo móvil", "Conexión a Internet"],
    programas: ["Android Studio", "Visual Studio Code", "Flutter SDK", "Node.js", "Emulador de Android"],
    herramientas: ["Android", "Flutter", "React Native", "Java", "Kotlin", "Interfaces táctiles", "Consumo de APIs REST", "Emuladores"],
    recursos: [
      { titulo: "Documentación para desarrolladores de Android", url: "https://developer.android.com/develop?hl=es-419" },
      { titulo: "Documentación de Flutter", url: "https://docs.flutter.dev/" },
      { titulo: "Documentación de React Native", url: "https://reactnative.dev/docs/getting-started" }
    ],
    evidencia: "Aplicación móvil o prototipo funcional con interfaz táctil, consumo de una API y pruebas documentadas en un emulador.",
    quiz: [
      {
        pregunta: "¿Qué caracteriza a una interfaz táctil bien diseñada para una aplicación móvil?",
        opciones: ["Controles pequeños y muy juntos para aprovechar la pantalla", "Controles fáciles de tocar, con espacio suficiente y respuestas claras", "Usar únicamente texto sin botones"],
        correcta: 1,
        explicacion: "Los controles accesibles y con respuesta visible facilitan la interacción en pantallas táctiles."
      },
      {
        pregunta: "¿Para qué se consume una API desde una aplicación móvil?",
        opciones: ["Para intercambiar datos o solicitar servicios a otro sistema", "Para aumentar el tamaño de los botones", "Para reemplazar el sistema operativo del teléfono"],
        correcta: 0,
        explicacion: "Una API permite que la aplicación obtenga o envíe datos a un servicio."
      },
      {
        pregunta: "¿Cuál es una ventaja de probar una aplicación en un emulador?",
        opciones: ["Permite simular un dispositivo y probar la app sin tener ese equipo físico", "Publica automáticamente la aplicación en una tienda", "Convierte cualquier lenguaje en Java"],
        correcta: 0,
        explicacion: "El emulador reproduce un entorno móvil para probar el comportamiento de la aplicación."
      }
    ]
  },
  {
    id: "modulo-3-6",
    responsable: "Valeria Contreras",
    numero: "3.6",
    categoria: "Inglés técnico",
    nombre: "Conversación en inglés sobre mantenimiento de sistemas informáticos",
    docente: "Javier Mineros",
    resumen: "Practiqué vocabulario y frases en inglés para hablar de mantenimiento: reportar un problema, explicar qué se hizo para repararlo y recomendar cómo prevenirlo.",
    aprendi: [
      "Vocabulario técnico: bug, update, backup y troubleshooting.",
      "Frases para describir un problema y explicar su solución.",
      "La diferencia entre mantenimiento preventivo y correctivo."
    ],
    instrumentos: ["Computadora", "Guía de conversación en inglés"],
    programas: ["Visual Studio Code", "Visual Studio Community", "Navegador web", "Diccionario y traductor en línea", "Grabadora de audio o video"],
    herramientas: ["Vocabulario técnico", "Diálogos de soporte técnico", "Pronunciación", "Mantenimiento preventivo y correctivo"],
    recursos: [
      { titulo: "Cambridge Dictionary", url: "https://dictionary.cambridge.org/" },
      { titulo: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish" },
      { titulo: "Linguee (diccionario con ejemplos)", url: "https://www.linguee.es/" }
    ],
    evidencia: "Conversación en inglés en la que reporto un problema de un sistema y explico cómo darle mantenimiento.",
    quiz: [
      {
        pregunta: "¿Qué significa «troubleshooting» en soporte técnico?",
        opciones: ["Instalar un sistema nuevo desde cero", "Buscar y resolver las causas de un problema", "Apagar el equipo al terminar el día"],
        correcta: 1,
        explicacion: "Es el proceso de diagnosticar y solucionar fallas."
      },
      {
        pregunta: "Which sentence reports a problem correctly?",
        opciones: ["The printer is not working. It shows an error message.", "The printer works yesterday error.", "Printer me error have."],
        correcta: 0,
        explicacion: "Tiene sujeto, verbo y la información del problema en orden correcto."
      },
      {
        pregunta: "El mantenimiento preventivo (preventive maintenance) se hace…",
        opciones: ["Antes de que el equipo falle, para evitar problemas", "Solo después de una falla", "Nunca, si el sistema funciona"],
        correcta: 0,
        explicacion: "Busca evitar fallas antes de que ocurran."
      }
    ]
  },
  {
    id: "modulo-3-7",
    responsable: "Valeria Contreras",
    numero: "3.7",
    categoria: "Emprendimiento",
    nombre: "Módulo 3.7: Puesta en marcha de la microempresa en asociatividad cooperativa",
    docente: "Francisco Arcides Canales Sorto",
    resumen: "Formulé una propuesta de microempresa tecnológica mediante el modelo Canvas, un estudio de mercado y un plan de financiamiento, considerando los principios de la gestión cooperativa.",
    aprendi: [
      "Organizar una idea de negocio con los bloques del modelo Canvas.",
      "Analizar clientes, competencia y demanda mediante un estudio de mercado.",
      "Planificar recursos, costos y fuentes de financiamiento para una microempresa cooperativa."
    ],
    instrumentos: ["Computadora", "Plantilla del modelo Canvas", "Guía para estudio de mercado", "Calculadora"],
    programas: ["Procesador de texto", "Hoja de cálculo", "Presentaciones", "Navegador web"],
    herramientas: ["Modelo de negocio Canvas", "Emprendimiento tecnológico", "Estudio de mercado", "Gestión cooperativa", "Presupuesto y plan de financiamiento"],
    recursos: [
      { titulo: "Business Model Canvas (Strategyzer)", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
      { titulo: "Alianza Cooperativa Internacional: identidad cooperativa", url: "https://ica.coop/es/cooperativas/identidad-alianza-cooperativa-internacional" },
      { titulo: "Guía de estudio de mercado (SBA)", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" }
    ],
    evidencia: "Propuesta de microempresa tecnológica con modelo Canvas, resultados del estudio de mercado y plan de financiamiento para su puesta en marcha en forma cooperativa.",
    quiz: [
      {
        pregunta: "¿Para qué sirve el modelo de negocio Canvas?",
        opciones: ["Para representar de forma visual los elementos clave de un negocio", "Para registrar únicamente los ingresos diarios", "Para sustituir el estudio de mercado"],
        correcta: 0,
        explicacion: "Canvas organiza en bloques aspectos como clientes, propuesta de valor, actividades e ingresos."
      },
      {
        pregunta: "¿Qué aporta un estudio de mercado antes de poner en marcha una microempresa?",
        opciones: ["Permite conocer clientes, demanda y competencia para tomar decisiones", "Garantiza que el negocio no tendrá costos", "Define automáticamente la forma legal de la empresa"],
        correcta: 0,
        explicacion: "La información del mercado ayuda a validar la oportunidad y ajustar la propuesta."
      },
      {
        pregunta: "¿Qué principio es importante en la gestión de una cooperativa?",
        opciones: ["Las decisiones se concentran permanentemente en una sola persona", "Las personas asociadas participan de manera democrática en las decisiones", "Las utilidades se reparten sin considerar los acuerdos de las personas asociadas"],
        correcta: 1,
        explicacion: "La participación democrática de las personas asociadas es un principio cooperativo."
      }
    ]
  },
  {
    id: "modulo-3-8",
    responsable: "Jazmin Peña",
    numero: "3.8",
    categoria: "Proyecto",
    nombre: "Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen: "Planifiqué y construí un proyecto de software propio a partir de un problema real: definí la idea, organicé el trabajo, programé la solución y la presenté.",
    aprendi: [
      "Partir de un problema real y definir qué solución se propone.",
      "Planificar el trabajo por etapas y con metodologías ágiles como Scrum.",
      "Presentar el proyecto y explicar las decisiones que tomé."
    ],
    instrumentos: ["Computadora", "Rúbrica del proyecto", "Cronograma de trabajo"],
    programas: ["Visual Studio Code", "Visual Studio Community", "Git", "GitHub", "Navegador web"],
    herramientas: ["Scrum", "Control de versiones con Git y GitHub", "Prototipo (MVP)", "Presentación del proyecto"],
    recursos: [
      { titulo: "Guía de Scrum", url: "https://scrumguides.org/" },
      { titulo: "Documentación de GitHub", url: "https://docs.github.com/es" },
      { titulo: "Guía de metodologías ágiles (Atlassian)", url: "https://www.atlassian.com/es/agile" }
    ],
    evidencia: "Proyecto de software funcionando, con repositorio en GitHub y una presentación de la idea.",
    quiz: [
      {
        pregunta: "¿Qué es un MVP (producto mínimo viable)?",
        opciones: ["La versión final con todas las funciones posibles", "La versión más simple que ya resuelve el problema principal y permite aprender de los usuarios", "Un documento con el presupuesto"],
        correcta: 1,
        explicacion: "Permite probar la idea pronto sin construirlo todo."
      },
      {
        pregunta: "¿Para qué sirve Git en un proyecto?",
        opciones: ["Para guardar el historial de cambios y volver a versiones anteriores", "Para diseñar la interfaz", "Para conectar con la base de datos"],
        correcta: 0,
        explicacion: "Registra cada cambio y permite recuperar versiones previas."
      },
      {
        pregunta: "Un proyecto innovador comienza por…",
        opciones: ["Elegir el lenguaje de programación", "Identificar un problema real que valga la pena resolver", "Comprar el hosting"],
        correcta: 1,
        explicacion: "La solución nace de entender bien el problema."
      }
    ]
  }
];
