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
      "label": "Partida 1 · Prospección",
      "subtitle": "Radar de oportunidades antes de la subasta",
      "duration": 75,
      "phases": [
        [
          "Lectura privada",
          5
        ],
        [
          "Preparación del equipo",
          20
        ],
        [
          "Escena",
          8
        ],
        [
          "Valoración",
          5
        ],
        [
          "Feedback",
          7
        ]
      ],
      "rounds": [
        {
          "id": "P1",
          "seller": "A",
          "client": "B",
          "title": "Ronda 1 · A prospecta / B cliente"
        },
        {
          "id": "P2",
          "seller": "B",
          "client": "A",
          "title": "Ronda 2 · B prospecta / A cliente"
        },
        {
          "id": "P3",
          "seller": "C",
          "client": "D",
          "title": "Ronda 3 · C prospecta / D cliente"
        },
        {
          "id": "P4",
          "seller": "D",
          "client": "C",
          "title": "Ronda 4 · D prospecta / C cliente"
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
      "label": "Partida 2 · Negociación",
      "subtitle": "Tribunal del precio y defensa de valor",
      "duration": 75,
      "phases": [
        [
          "Lectura privada",
          5
        ],
        [
          "Preparación del equipo",
          15
        ],
        [
          "Escena",
          8
        ],
        [
          "Valoración",
          5
        ],
        [
          "Feedback",
          7
        ]
      ],
      "rounds": [
        {
          "id": "N1",
          "seller": "A",
          "client": "B",
          "title": "Ronda 1 · A vende / B cliente"
        },
        {
          "id": "N2",
          "seller": "B",
          "client": "A",
          "title": "Ronda 2 · B vende / A cliente"
        },
        {
          "id": "N3",
          "seller": "C",
          "client": "D",
          "title": "Ronda 3 · C vende / D cliente"
        },
        {
          "id": "N4",
          "seller": "D",
          "client": "C",
          "title": "Ronda 4 · D vende / C cliente"
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
      "sellerGoal": "Abrir conversación antes de que la constructora pida tres ofertas. Convierte el suministro eléctrico en una conversación sobre planificación, riesgo de plazo y disponibilidad local.",
      "context": [
        "Nueva promoción residencial en fase previa a ejecución.",
        "La constructora suele pedir tres ofertas con mediciones ya cerradas.",
        "Si DIELCA llega tarde, la conversación se convierte en precio.",
        "La oportunidad es anticipar materiales críticos antes de entrar en subasta."
      ],
      "signals": [
        "Nueva promoción residencial",
        "Fase de instalaciones próxima",
        "Jefe de obra asignado",
        "Proveedor aún no cerrado"
      ],
      "clientRole": "Comprador de constructora. Presionas por precio, pero temes retrasos, urgencias y penalizaciones por plazo.",
      "hidden": [
        "Tienes una oferta 15% más barata.",
        "El proveedor barato no confirma stock local.",
        "Si hay retraso, el jefe de obra te presionará.",
        "Aceptarás avanzar si el vendedor habla de planificación, riesgo y compromiso operativo."
      ],
      "objection": "La competencia me lo deja un 15% más barato. Si no igualas, no seguimos.",
      "commitment": "Reunión de planificación de suministros críticos."
    },
    "B": {
      "segment": "Instaladores",
      "title": "Varias obras y urgencias frecuentes",
      "sellerGoal": "Evitar que el instalador compare solo precio. Abre conversación sobre disponibilidad local, rapidez de respuesta y reducción de compras urgentes.",
      "context": [
        "Instalador con varias obras simultáneas.",
        "Compra mucho material de reposición y urgencias.",
        "Decide por precio, pero sufre cuando no consigue material en plaza.",
        "La oportunidad es pasar de venta reactiva a planificación de referencias críticas."
      ],
      "signals": [
        "Pedidos urgentes",
        "Varias obras abiertas",
        "Quejas por disponibilidad",
        "Compras de última hora"
      ],
      "clientRole": "Instalador. Quieres precio bajo, pero necesitas respuesta rápida y proveedor que no falle cuando estás en obra.",
      "hidden": [
        "Has tenido fallos de entrega con otro proveedor.",
        "Valoras mucho disponibilidad inmediata.",
        "Las urgencias te están comiendo margen.",
        "Aceptarás revisar referencias críticas si el vendedor conecta con productividad."
      ],
      "objection": "Si otro me da precio más bajo y lo consigo rápido, ¿por qué debería comprarte a ti?",
      "commitment": "Revisión de referencias críticas para reducir urgencias."
    },
    "C": {
      "segment": "Industria",
      "title": "Mantenimiento y continuidad operativa",
      "sellerGoal": "Mover la conversación desde precio unitario a coste de parada, criticidad y continuidad operativa.",
      "context": [
        "Cliente industrial con mantenimiento preventivo y correctivo.",
        "Algunas referencias eléctricas son críticas para continuidad.",
        "Compra por precio hasta que aparece una parada o urgencia.",
        "La oportunidad es anticipar materiales críticos y reducir riesgo operativo."
      ],
      "signals": [
        "Paradas no planificadas",
        "Mantenimiento correctivo",
        "Material crítico",
        "Urgencias recurrentes"
      ],
      "clientRole": "Responsable de mantenimiento. Exiges precio porque compras presiona, pero tu verdadera preocupación es que una línea no pare.",
      "hidden": [
        "Una parada cuesta mucho más que la diferencia de precio.",
        "Necesitas fiabilidad y asesoramiento.",
        "Tienes presión interna por reducir coste.",
        "Aceptarás avanzar si se cuantifica el riesgo operativo."
      ],
      "objection": "Compras me pide justificar por qué pagar más por el mismo material.",
      "commitment": "Listado de materiales críticos y plan de disponibilidad."
    },
    "D": {
      "segment": "Ingeniería",
      "title": "Proyecto en fase de especificación",
      "sellerGoal": "Entrar antes de la compra para influir en criterios técnicos, disponibilidad, normativa y solución completa.",
      "context": [
        "Ingeniería preparando especificaciones.",
        "Si DIELCA llega tarde, solo competirá por precio.",
        "La oportunidad está en aportar criterio técnico antes de que la especificación cierre.",
        "El valor está en reducir riesgo de especificación, retraso y cambio posterior."
      ],
      "signals": [
        "Proyecto en diseño",
        "Memoria técnica abierta",
        "Especificaciones sin cerrar",
        "Cliente final comparando soluciones"
      ],
      "clientRole": "Ingeniería/decisor técnico. No quieres vendedores; quieres criterio técnico, cumplimiento y proveedores fiables.",
      "hidden": [
        "Quieres evitar errores de especificación.",
        "Valoras soporte técnico y documentación.",
        "No quieres asumir riesgo con material dudoso.",
        "Aceptarás sesión técnica si se aporta criterio útil."
      ],
      "objection": "Ahora solo estamos definiendo especificaciones. Mándame catálogo y ya te diremos.",
      "commitment": "Sesión técnica previa para revisar criterios de especificación."
    }
  }
};