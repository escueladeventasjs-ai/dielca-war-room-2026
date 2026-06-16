const DATA = {
  "partidas": {
    "partida-dia-1": {
      "label": "Partida Día 1 · Miércoles 17",
      "short": "Día 1",
      "teams": {
        "A": {
          "name": "Equipo A · Constructora",
          "members": [
            "José Miguel Fernández Luján",
            "Acorán Medina Aboumedelej",
            "Jennifer García López",
            "Minerva Sosa Perdomo"
          ]
        },
        "B": {
          "name": "Equipo B · Instaladores",
          "members": [
            "Juan Francisco González López",
            "Roberto Hernández Delgado",
            "Daniel Vega Mayor",
            "Rosa María Perdomo Nolasco"
          ]
        },
        "C": {
          "name": "Equipo C · Industria",
          "members": [
            "Ricardo Manuel Guerra Suárez",
            "David Hernández Oval",
            "Rayco Ortega Peña"
          ]
        },
        "D": {
          "name": "Equipo D · Ingeniería",
          "members": [
            "José Carlos González Gómez",
            "Xerach Araña Rodríguez",
            "Cristo Sánchez León"
          ]
        }
      }
    },
    "partida-dia-2": {
      "label": "Partida Día 2 · Jueves 18",
      "short": "Día 2",
      "teams": {
        "A": {
          "name": "Equipo A · Constructora",
          "members": [
            "Aday Tamargo Núñez",
            "Juan Francisco Jaizme Torres",
            "Luz María Lameiro Rodríguez",
            "Alejandro Díaz Barrera"
          ]
        },
        "B": {
          "name": "Equipo B · Instaladores",
          "members": [
            "Blas Coruña Santana",
            "Samuel Díaz Melo",
            "Antonio Jesús González Gómez",
            "Jonay Hernández Garcías"
          ]
        },
        "C": {
          "name": "Equipo C · Industria",
          "members": [
            "Fabián Quebrada Díaz",
            "Juan Javier González Gómez",
            "Óscar Tavio García",
            "Airam Medina Ramírez"
          ]
        },
        "D": {
          "name": "Equipo D · Ingeniería",
          "members": [
            "Fernando Roig Caballero",
            "Domingo Doreste González",
            "Yeray García Pestano"
          ]
        }
      }
    }
  },
  "rounds": [
    {
      "id": 1,
      "seller": "A",
      "client": "B",
      "judges": [
        "C",
        "D"
      ],
      "title": "Ronda 1 · A vende / B cliente"
    },
    {
      "id": 2,
      "seller": "B",
      "client": "A",
      "judges": [
        "C",
        "D"
      ],
      "title": "Ronda 2 · B vende / A cliente"
    },
    {
      "id": 3,
      "seller": "C",
      "client": "D",
      "judges": [
        "A",
        "B"
      ],
      "title": "Ronda 3 · C vende / D cliente"
    },
    {
      "id": 4,
      "seller": "D",
      "client": "C",
      "judges": [
        "A",
        "B"
      ],
      "title": "Ronda 4 · D vende / C cliente"
    }
  ],
  "scenarios": {
    "A": {
      "sellerTitle": "Constructora · Obra residencial con plazos ajustados",
      "sellerMission": "Llegar antes de que la obra se convierta en una petición de precio. Abrir conversación sobre planificación de suministros críticos, riesgo de retrasos y coste de urgencias.",
      "sellerContext": [
        "Nueva promoción residencial en fase previa a ejecución.",
        "La constructora suele pedir tres ofertas cuando ya tiene mediciones cerradas.",
        "La oportunidad está en anticipar materiales críticos antes de entrar en subasta."
      ],
      "clientRole": "Cliente comprador de constructora: presiona por precio, pero tiene miedo a retrasos en obra y penalizaciones por plazo.",
      "clientHidden": [
        "Tiene una oferta 12-15% más barata.",
        "El proveedor barato no garantiza stock local.",
        "Si hay retraso, la obra se descuadra.",
        "Aceptará avanzar si ve seguridad de suministro y compromiso operativo."
      ],
      "priceObjection": "La competencia me lo deja un 15% más barato. Si no igualas, no seguimos."
    },
    "B": {
      "sellerTitle": "Instalador · Pedido recurrente con urgencias frecuentes",
      "sellerMission": "Evitar que el instalador solo compare precio. Abrir conversación sobre disponibilidad local, rapidez de respuesta y reducción de compras urgentes.",
      "sellerContext": [
        "Instalador con varias obras pequeñas en paralelo.",
        "Compra mucho material de reposición y urgencias.",
        "Suele decidir por precio, pero sufre cuando no consigue material en plaza."
      ],
      "clientRole": "Cliente instalador: busca precio bajo, pero necesita respuesta rápida y proveedor que no le falle cuando está en obra.",
      "clientHidden": [
        "Ha tenido problemas de entrega con otro proveedor.",
        "Valora mucho disponibilidad inmediata.",
        "No quiere reconocer que la urgencia le está costando margen.",
        "Aceptará compromiso si se le ayuda a planificar."
      ],
      "priceObjection": "Si otro me da precio más bajo y lo consigo rápido, ¿por qué debería comprarte a ti?"
    },
    "C": {
      "sellerTitle": "Industria · Mantenimiento y continuidad operativa",
      "sellerMission": "Mover la conversación de precio unitario a coste de parada, criticidad y continuidad operativa.",
      "sellerContext": [
        "Cliente industrial con mantenimiento preventivo y correctivo.",
        "Algunas referencias eléctricas son críticas para continuidad.",
        "Compra por precio hasta que aparece una parada o urgencia."
      ],
      "clientRole": "Responsable de mantenimiento industrial: exige precio, pero su verdadera preocupación es que una línea no pare.",
      "clientHidden": [
        "Una parada puede costar mucho más que la diferencia de precio.",
        "Necesita fiabilidad y asesoramiento.",
        "Tiene presión interna por reducir coste.",
        "Aceptará avanzar si se cuantifica riesgo."
      ],
      "priceObjection": "Compras me pide justificar por qué pagar más por el mismo material."
    },
    "D": {
      "sellerTitle": "Ingeniería · Proyecto en fase de especificación",
      "sellerMission": "Entrar antes de la compra para influir en criterios técnicos, disponibilidad, normativa y solución completa.",
      "sellerContext": [
        "Ingeniería preparando especificaciones para un proyecto.",
        "Si DIELCA llega tarde, solo competirá por precio.",
        "La oportunidad está en aportar criterio técnico antes de que la especificación cierre."
      ],
      "clientRole": "Ingeniería/decisor técnico: no quiere vendedores, quiere seguridad técnica, cumplimiento y proveedores fiables.",
      "clientHidden": [
        "Quiere evitar errores de especificación.",
        "Valora soporte técnico y documentación.",
        "No quiere asumir riesgo con material dudoso.",
        "Aceptará reunión si se aporta criterio útil."
      ],
      "priceObjection": "Ahora solo estamos definiendo especificaciones. Mándame catálogo y ya te diremos."
    }
  }
};