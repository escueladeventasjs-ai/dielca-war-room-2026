const DATA = {
  "sessions": {
    "dia1": {
      "label": "Día 1 · Miércoles 17",
      "teams": {
        "A": {
          "name": "Equipo A · Constructora",
          "code": "A17",
          "members": [
            "José Miguel Fernández Luján",
            "Acorán Medina Aboumedelej",
            "Jennifer García López",
            "Minerva Sosa Perdomo"
          ]
        },
        "B": {
          "name": "Equipo B · Instaladores",
          "code": "B17",
          "members": [
            "Juan Francisco González López",
            "Roberto Hernández Delgado",
            "Daniel Vega Mayor",
            "Rosa María Perdomo Nolasco"
          ]
        },
        "C": {
          "name": "Equipo C · Industria",
          "code": "C17",
          "members": [
            "Ricardo Manuel Guerra Suárez",
            "David Hernández Oval",
            "Rayco Ortega Peña"
          ]
        },
        "D": {
          "name": "Equipo D · Ingeniería",
          "code": "D17",
          "members": [
            "José Carlos González Gómez",
            "Xerach Araña Rodríguez",
            "Cristo Sánchez León"
          ]
        }
      }
    },
    "dia2": {
      "label": "Día 2 · Jueves 18",
      "teams": {
        "A": {
          "name": "Equipo A · Constructora",
          "code": "A18",
          "members": [
            "Aday Tamargo Núñez",
            "Juan Francisco Jaizme Torres",
            "Luz María Lameiro Rodríguez",
            "Alejandro Díaz Barrera"
          ]
        },
        "B": {
          "name": "Equipo B · Instaladores",
          "code": "B18",
          "members": [
            "Blas Coruña Santana",
            "Samuel Díaz Melo",
            "Antonio Jesús González Gómez",
            "Jonay Hernández Garcías"
          ]
        },
        "C": {
          "name": "Equipo C · Industria",
          "code": "C18",
          "members": [
            "Fabián Quebrada Díaz",
            "Juan Javier González Gómez",
            "Óscar Tavio García",
            "Airam Medina Ramírez"
          ]
        },
        "D": {
          "name": "Equipo D · Ingeniería",
          "code": "D18",
          "members": [
            "Fernando Roig Caballero",
            "Domingo Doreste González",
            "Yeray García Pestano"
          ]
        }
      }
    }
  },
  "games": {
    "prospection": {
      "label": "Fase 1 · Prospección",
      "subtitle": "Llegar antes de la petición de precio",
      "duration": 90,
      "phases": [
        [
          "Contexto breve",
          15
        ],
        [
          "Preparación del equipo",
          10
        ],
        [
          "Ronda 1 · A vs B",
          10
        ],
        [
          "Feedback + puntuación",
          7
        ],
        [
          "Ronda 2 · C vs D",
          10
        ],
        [
          "Feedback + puntuación",
          7
        ],
        [
          "Repetición / mejora",
          15
        ],
        [
          "Ranking + aprendizaje",
          5
        ],
        [
          "Margen de control del facilitador",
          11
        ]
      ],
      "rounds": [
        {
          "id": "P1",
          "seller": "A",
          "client": "B",
          "title": "Ronda 1 · Equipo A prospecta / Equipo B cliente"
        },
        {
          "id": "P3",
          "seller": "C",
          "client": "D",
          "title": "Ronda 2 · Equipo C prospecta / Equipo D cliente"
        }
      ],
      "scoreLabels": [
        [
          "Hipótesis habla del cliente",
          20
        ],
        [
          "Identifica riesgo real",
          20
        ],
        [
          "Conecta con impacto",
          20
        ],
        [
          "Genera curiosidad",
          15
        ],
        [
          "Evita producto/precio",
          15
        ],
        [
          "Cierra siguiente paso",
          10
        ]
      ]
    },
    "negotiation": {
      "label": "Fase 2 · Negociación",
      "subtitle": "Defender valor cuando aparece la presión por precio",
      "duration": 90,
      "phases": [
        [
          "Contexto breve",
          15
        ],
        [
          "Preparación del equipo",
          10
        ],
        [
          "Ronda 1 · B vs A",
          10
        ],
        [
          "Feedback + puntuación",
          7
        ],
        [
          "Ronda 2 · D vs C",
          10
        ],
        [
          "Feedback + puntuación",
          7
        ],
        [
          "Repetición / mejora",
          15
        ],
        [
          "Ranking + aprendizaje",
          5
        ],
        [
          "Margen de control del facilitador",
          11
        ]
      ],
      "rounds": [
        {
          "id": "N2",
          "seller": "B",
          "client": "A",
          "title": "Ronda 1 · Equipo B vende / Equipo A cliente"
        },
        {
          "id": "N4",
          "seller": "D",
          "client": "C",
          "title": "Ronda 2 · Equipo D vende / Equipo C cliente"
        }
      ],
      "scoreLabels": [
        [
          "Reconoce sin defenderse",
          15
        ],
        [
          "Profundiza antes de responder",
          20
        ],
        [
          "Neutraliza otras barreras",
          15
        ],
        [
          "Reencuadra hacia valor",
          25
        ],
        [
          "Mantiene calma comercial",
          10
        ],
        [
          "Cierra compromiso concreto",
          15
        ]
      ]
    }
  },
  "cases": {
    "A": {
      "segment": "Constructora",
      "title": "Obra residencial con plazos ajustados",
      "sellerGoal": "Tu misión es abrir una conversación antes de que la constructora pida tres ofertas. No vendas material ni hables de precio. Lleva la conversación hacia planificación, riesgo de retraso y seguridad de suministro.",
      "context": [
        "La constructora prepara una promoción residencial y está cerca de iniciar la fase de instalaciones eléctricas.",
        "Todavía no ha cerrado proveedor, pero cuando lo haga pedirá varias ofertas y comparará principalmente precio.",
        "En este tipo de obra, un retraso de material eléctrico puede afectar a otros gremios, generar urgencias y tensionar al jefe de obra.",
        "Tu oportunidad es llegar antes de la subasta y posicionar a DIELCA como socio de planificación y disponibilidad."
      ],
      "signals": [
        "Nueva promoción anunciada",
        "Jefe de obra asignado",
        "Fase de instalaciones próxima",
        "Proveedor eléctrico aún no cerrado"
      ],
      "prep": [
        "Situación: la obra está entrando en fase crítica de instalaciones.",
        "Riesgo: compras reactivas, falta de stock o retrasos de entrega.",
        "Impacto: paradas, urgencias, sobrecostes y presión sobre el jefe de obra.",
        "Pregunta: ¿cómo estáis anticipando los suministros críticos antes de iniciar instalaciones?"
      ],
      "clientRole": "Eres comprador de constructora. Tu prioridad visible es conseguir buen precio, pero tu preocupación real es que la obra no se retrase.",
      "hidden": [
        "Tienes una oferta aproximadamente un 15% más barata.",
        "El proveedor barato no confirma stock local ni plazo garantizado.",
        "Si falta material, el jefe de obra te presionará directamente.",
        "Avanzarás si el vendedor demuestra que puede reducir riesgo de retraso y propone un siguiente paso concreto."
      ],
      "objection": "La competencia me lo deja un 15% más barato. Si no igualas, no seguimos.",
      "commitment": "Reunión breve para revisar suministros críticos y fechas de necesidad."
    },
    "B": {
      "segment": "Instaladores",
      "title": "Instalador con varias obras y urgencias frecuentes",
      "sellerGoal": "Tu misión es evitar que el instalador compare solo precio. Abre una conversación sobre disponibilidad local, rapidez de respuesta y reducción de compras urgentes.",
      "context": [
        "El instalador gestiona varias obras pequeñas y medianas en paralelo.",
        "Compra muchas referencias de reposición y suele pedir material cuando la urgencia ya existe.",
        "Aunque presiona por precio, su problema real aparece cuando no encuentra material en plaza y pierde tiempo de instalación.",
        "Tu oportunidad es ayudarle a anticipar referencias críticas y reducir compras de última hora."
      ],
      "signals": [
        "Pedidos urgentes frecuentes",
        "Varias obras abiertas",
        "Quejas por disponibilidad",
        "Compras de última hora"
      ],
      "prep": [
        "Situación: el instalador trabaja con presión de tiempo y muchas urgencias.",
        "Riesgo: perder horas de equipo buscando material o esperando entregas.",
        "Impacto: menor productividad, retrasos en obra y pérdida de margen.",
        "Pregunta: ¿qué referencias os generan más urgencias y cómo las estáis planificando?"
      ],
      "clientRole": "Eres instalador. Quieres precio competitivo, pero valoras mucho conseguir material rápido cuando estás en obra.",
      "hidden": [
        "Has tenido fallos de entrega con otro proveedor.",
        "Las urgencias te están reduciendo margen y productividad.",
        "Te interesa disponibilidad local, pero no quieres reconocerlo de entrada.",
        "Avanzarás si el vendedor te propone revisar referencias críticas y mejorar planificación."
      ],
      "objection": "Si otro me da mejor precio y consigo el material rápido, ¿por qué debería comprarte a ti?",
      "commitment": "Revisión de referencias críticas para reducir urgencias y pérdidas de tiempo."
    },
    "C": {
      "segment": "Industria",
      "title": "Mantenimiento y continuidad operativa",
      "sellerGoal": "Tu misión es mover la conversación desde precio unitario hacia coste de parada, criticidad del material y continuidad operativa.",
      "context": [
        "El cliente industrial combina mantenimiento preventivo y correctivo.",
        "Algunas referencias eléctricas son críticas para que una línea o instalación siga funcionando.",
        "Compras presiona por reducir coste, pero mantenimiento sabe que una parada puede costar mucho más que la diferencia de precio.",
        "Tu oportunidad es ayudar a identificar materiales críticos y reducir riesgo operativo."
      ],
      "signals": [
        "Mantenimiento correctivo recurrente",
        "Materiales críticos sin planificación",
        "Paradas no planificadas",
        "Urgencias de reposición"
      ],
      "prep": [
        "Situación: existen referencias críticas que se gestionan de forma reactiva.",
        "Riesgo: parada, retraso de reparación o dependencia de disponibilidad externa.",
        "Impacto: pérdida de producción, horas improductivas y presión interna.",
        "Pregunta: ¿qué referencias no os podéis permitir no tener disponibles?"
      ],
      "clientRole": "Eres responsable de mantenimiento. Compras te exige justificar cada diferencia de precio, pero tu preocupación real es evitar paradas.",
      "hidden": [
        "Una parada puede costar mucho más que el ahorro en la compra.",
        "Necesitas fiabilidad, asesoramiento y disponibilidad.",
        "Tienes presión interna para reducir coste, así que necesitas argumentos para defender valor.",
        "Avanzarás si el vendedor te ayuda a cuantificar riesgo y priorizar materiales críticos."
      ],
      "objection": "Compras me pide justificar por qué pagar más por el mismo material.",
      "commitment": "Listado de materiales críticos y plan de disponibilidad prioritaria."
    },
    "D": {
      "segment": "Ingeniería",
      "title": "Proyecto en fase de especificación",
      "sellerGoal": "Tu misión es entrar antes de la compra para influir en criterios técnicos, disponibilidad, cumplimiento y solución completa.",
      "context": [
        "La ingeniería está definiendo especificaciones para un proyecto que todavía no ha entrado en fase de compra.",
        "Si DIELCA llega tarde, solo podrá competir cuando el material ya esté definido y el comprador pida precio.",
        "La ingeniería no quiere una visita comercial genérica; quiere criterio técnico útil, documentación y reducción de riesgo.",
        "Tu oportunidad es aportar valor antes de que la especificación quede cerrada."
      ],
      "signals": [
        "Proyecto en fase de diseño",
        "Memoria técnica abierta",
        "Especificaciones sin cerrar",
        "Cliente final comparando soluciones"
      ],
      "prep": [
        "Situación: el proyecto aún permite influir en criterios técnicos.",
        "Riesgo: especificar materiales difíciles de conseguir, incompletos o poco adecuados.",
        "Impacto: cambios posteriores, retrasos, sobrecostes o riesgo técnico.",
        "Pregunta: ¿qué criterios técnicos queréis asegurar antes de cerrar la especificación?"
      ],
      "clientRole": "Eres decisor técnico de ingeniería. No quieres vendedores; quieres criterio, cumplimiento y proveedores fiables.",
      "hidden": [
        "Quieres evitar errores de especificación.",
        "Valoras soporte técnico, documentación y disponibilidad real.",
        "No quieres asumir riesgo con materiales dudosos o difíciles de conseguir.",
        "Avanzarás si el vendedor aporta criterio técnico útil y no intenta vender catálogo."
      ],
      "objection": "Ahora solo estamos definiendo especificaciones. Mándame catálogo y ya te diremos.",
      "commitment": "Sesión técnica previa para revisar criterios de especificación y disponibilidad."
    }
  }
};