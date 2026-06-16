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
  "prospection": {
    "title": "Partida 1 · Radar de Oportunidades",
    "duration": "75 min",
    "phases": [
      {
        "name": "Lectura del caso",
        "minutes": 5
      },
      {
        "name": "Preparación del radar",
        "minutes": 20
      },
      {
        "name": "Escena de prospección",
        "minutes": 8
      },
      {
        "name": "Valoración del jurado",
        "minutes": 5
      },
      {
        "name": "Feedback y repetición",
        "minutes": 7
      }
    ],
    "rounds": [
      {
        "id": "P1",
        "seller": "A",
        "client": "B",
        "judges": [
          "C",
          "D"
        ],
        "title": "Prospección R1 · A prospecta / B cliente"
      },
      {
        "id": "P2",
        "seller": "B",
        "client": "A",
        "judges": [
          "C",
          "D"
        ],
        "title": "Prospección R2 · B prospecta / A cliente"
      },
      {
        "id": "P3",
        "seller": "C",
        "client": "D",
        "judges": [
          "A",
          "B"
        ],
        "title": "Prospección R3 · C prospecta / D cliente"
      },
      {
        "id": "P4",
        "seller": "D",
        "client": "C",
        "judges": [
          "A",
          "B"
        ],
        "title": "Prospección R4 · D prospecta / C cliente"
      }
    ]
  },
  "negotiation": {
    "title": "Partida 2 · Tribunal del Precio",
    "duration": "75 min",
    "phases": [
      {
        "name": "Lectura del caso",
        "minutes": 5
      },
      {
        "name": "Preparación negociación",
        "minutes": 15
      },
      {
        "name": "Escena de negociación",
        "minutes": 8
      },
      {
        "name": "Valoración del jurado",
        "minutes": 5
      },
      {
        "name": "Feedback y repetición",
        "minutes": 7
      }
    ],
    "rounds": [
      {
        "id": "N1",
        "seller": "A",
        "client": "B",
        "judges": [
          "C",
          "D"
        ],
        "title": "Negociación R1 · A vende / B cliente"
      },
      {
        "id": "N2",
        "seller": "B",
        "client": "A",
        "judges": [
          "C",
          "D"
        ],
        "title": "Negociación R2 · B vende / A cliente"
      },
      {
        "id": "N3",
        "seller": "C",
        "client": "D",
        "judges": [
          "A",
          "B"
        ],
        "title": "Negociación R3 · C vende / D cliente"
      },
      {
        "id": "N4",
        "seller": "D",
        "client": "C",
        "judges": [
          "A",
          "B"
        ],
        "title": "Negociación R4 · D vende / C cliente"
      }
    ]
  },
  "cases": {
    "A": {
      "segment": "Constructora",
      "title": "Obra residencial con plazos ajustados",
      "sellerGoal": "Abrir una conversación antes de que la constructora pida tres ofertas. Tu objetivo es convertir el suministro eléctrico en un tema de planificación, riesgo de plazo y disponibilidad local.",
      "clientRole": "Comprador de constructora. Estás acostumbrado a pedir precios a varios proveedores y presionar por descuento. Tu preocupación oculta es que un retraso de material puede afectar al plazo de obra.",
      "clientSecret": [
        "Tienes una oferta 15% más barata.",
        "El proveedor barato no confirma stock local.",
        "Si hay retraso, tendrás presión del jefe de obra.",
        "Aceptarás una reunión si el vendedor habla de planificación y riesgo, no de catálogo."
      ],
      "signals": [
        "Nueva promoción residencial",
        "Inicio próximo de fase de instalaciones",
        "Jefe de obra recién asignado",
        "Compras aún sin cerrar proveedor"
      ],
      "opportunity": "Planificación anticipada de material crítico para evitar urgencias y retrasos.",
      "objection": "La competencia me lo deja un 15% más barato. Si no igualas, no seguimos.",
      "commitment": "Reunión de planificación de suministros críticos de la obra."
    },
    "B": {
      "segment": "Instaladores",
      "title": "Instalador con varias obras y urgencias frecuentes",
      "sellerGoal": "Evitar que el instalador solo compare precio. Tu objetivo es abrir conversación sobre disponibilidad, respuesta rápida y reducción de compras urgentes.",
      "clientRole": "Instalador. Quieres precio bajo, pero sufres cuando estás en obra y no consigues material rápido.",
      "clientSecret": [
        "Has tenido fallos de entrega con otro proveedor.",
        "Valoras mucho tener material en plaza.",
        "No quieres reconocer que las urgencias te comen margen.",
        "Aceptarás revisar referencias críticas si el vendedor lo conecta con productividad."
      ],
      "signals": [
        "Varias obras simultáneas",
        "Pedidos pequeños y urgentes",
        "Compras de última hora",
        "Quejas por disponibilidad"
      ],
      "opportunity": "Reducir compras reactivas y crear un listado de referencias críticas.",
      "objection": "Si otro me da precio más bajo y lo consigo rápido, ¿por qué debería comprarte a ti?",
      "commitment": "Revisión de referencias críticas para reducir urgencias."
    },
    "C": {
      "segment": "Industria",
      "title": "Mantenimiento y continuidad operativa",
      "sellerGoal": "Mover la conversación desde precio unitario a coste de parada, criticidad y continuidad operativa.",
      "clientRole": "Responsable de mantenimiento industrial. Pides precio porque compras te presiona, pero te preocupa que una línea no pare.",
      "clientSecret": [
        "Una parada cuesta mucho más que la diferencia de precio.",
        "Necesitas fiabilidad y asesoramiento.",
        "Tienes presión interna por reducir costes.",
        "Aceptarás avanzar si se cuantifica el riesgo operativo."
      ],
      "signals": [
        "Mantenimiento correctivo frecuente",
        "Materiales críticos",
        "Historial de urgencias",
        "Paradas no planificadas"
      ],
      "opportunity": "Identificar materiales críticos y crear plan de disponibilidad.",
      "objection": "Compras me pide justificar por qué pagar más por el mismo material.",
      "commitment": "Listado de materiales críticos y plan de disponibilidad."
    },
    "D": {
      "segment": "Ingeniería",
      "title": "Proyecto en fase de especificación",
      "sellerGoal": "Entrar antes de la compra para influir en criterios técnicos, disponibilidad, normativa y solución completa.",
      "clientRole": "Ingeniería/decisor técnico. No quieres vendedores. Quieres criterio técnico, cumplimiento y proveedores fiables.",
      "clientSecret": [
        "Quieres evitar errores de especificación.",
        "Valoras soporte técnico y documentación.",
        "No quieres asumir riesgo con material dudoso.",
        "Aceptarás una sesión técnica si se aporta criterio útil."
      ],
      "signals": [
        "Proyecto en fase de diseño",
        "Memoria técnica abierta",
        "Cliente final aún comparando soluciones",
        "Especificaciones sin cerrar"
      ],
      "opportunity": "Sesión técnica previa para revisar criterios de especificación y disponibilidad.",
      "objection": "Ahora solo estamos definiendo especificaciones. Mándame catálogo y ya te diremos.",
      "commitment": "Sesión técnica previa para revisar criterios de especificación."
    }
  }
};