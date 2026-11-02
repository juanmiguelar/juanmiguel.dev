import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-methods",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 29
  },
  "translations": {
    "en": {
      "title": "Go methods: choose value or pointer receivers",
      "description": "Attach methods to named Go types and choose receiver semantics based on mutation, copying and method sets.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A method is a function with a receiver parameter. Attach it to a named type to express behavior associated with that type. A value receiver works on a copy; a pointer receiver can modify the original value. Choose deliberately, especially when the type contains mutable state or must not be copied.",
            "The Counter type keeps its field unexported and exposes Add and Value. Add has a *Counter receiver because it mutates n. Value also uses *Counter to keep the method set consistent. For an addressable variable, Go can automatically take its address when calling an appropriate pointer method."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The zero value of Counter is usable, so main needs no constructor. Adding three and reading Value prints three. A constructor becomes useful when a valid object requires configuration or resources, but adding one by habit can make a naturally useful zero value harder to use."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Counter struct { n int }\n\nfunc (c *Counter) Add(delta int) { c.n += delta }\nfunc (c *Counter) Value() int { return c.n }\n\nfunc main() {\n    var counter Counter\n    counter.Add(3)\n    fmt.Println(counter.Value())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Automatic address-taking for calls does not make Counter and *Counter interchangeable when satisfying interfaces. Their method sets differ. Also avoid copying structs containing an active mutex. The later interface and mutex lessons connect these rules to substitutability and concurrent state."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change Add to a value receiver and predict the printed result. Restore the pointer receiver, then add a Reset method and define whether negative increments are allowed."
          ]
        },
        {
          "id": "related",
          "heading": "Continue the learning path",
          "paragraphs": [
            "Use the series index for the full order, or follow the related lessons below."
          ],
          "links": [
            {
              "slug": "go-basics-functions",
              "label": "22. Go functions: parameters, results and small contracts"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Wrap Go errors with %w and inspect them with errors.Is"
            },
            {
              "slug": "go-basics-interfaces",
              "label": "30. Go interfaces: define the behavior a caller needs"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Métodos en Go: elegir receptor por valor o puntero",
      "description": "Añade métodos a tipos con nombre y elige receptor según modificación, copias y conjuntos de métodos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un método es una función con un parámetro receptor. Añádelo a un tipo con nombre para expresar comportamiento asociado. Un receptor por valor usa una copia; uno por puntero puede modificar el original. Elige con intención, especialmente si el tipo contiene estado mutable o no debe copiarse.",
            "Counter mantiene su campo sin exportar y expone Add y Value. Add recibe *Counter porque modifica n. Value usa también *Counter para mantener coherente el conjunto de métodos. Con una variable direccionable, Go puede tomar su dirección automáticamente al llamar un método por puntero."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El valor cero de Counter ya sirve; main no necesita constructor. Añadir tres y leer Value imprime tres. Un constructor resulta útil si un objeto válido requiere configuración o recursos, pero añadirlo por costumbre puede dificultar un tipo cuyo valor cero ya es útil."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Counter struct { n int }\n\nfunc (c *Counter) Add(delta int) { c.n += delta }\nfunc (c *Counter) Value() int { return c.n }\n\nfunc main() {\n    var counter Counter\n    counter.Add(3)\n    fmt.Println(counter.Value())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Tomar direcciones automáticamente en llamadas no vuelve intercambiables Counter y *Counter al satisfacer interfaces. Sus conjuntos de métodos difieren. Evita además copiar structs con mutex en uso. Las lecciones de interfaces y mutex conectan estas reglas con sustitución y estado concurrente."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia Add a receptor por valor y predice la salida. Restaura el puntero, añade Reset y define si se permiten incrementos negativos."
          ]
        },
        {
          "id": "related",
          "heading": "Continuar la ruta de aprendizaje",
          "paragraphs": [
            "Usa el índice de la serie para ver el orden completo o sigue las lecciones relacionadas."
          ],
          "links": [
            {
              "slug": "go-basics-functions",
              "label": "22. Funciones en Go: parámetros, resultados y contratos pequeños"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Envolver errores con %w y examinarlos con errors.Is"
            },
            {
              "slug": "go-basics-interfaces",
              "label": "30. Interfaces en Go: definir el comportamiento necesario"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: official documentation",
      "url": "https://go.dev/doc/"
    },
    {
      "title": "Go language specification",
      "url": "https://go.dev/ref/spec"
    }
  ]
} satisfies BlogPost
