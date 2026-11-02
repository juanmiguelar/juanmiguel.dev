import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-constants",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 7
  },
  "translations": {
    "en": {
      "title": "Constants and iota in Go: represent fixed values",
      "description": "Learn typed and untyped Go constants, use iota for simple enumerations and avoid unstable external numeric values.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A Go constant names a value known at compile time. Declare one with const when a value must stay fixed, such as a maximum retry count. Constants can represent numeric, string and boolean values. A slice, map or value returned by an ordinary function cannot be declared as a constant.",
            "iota supplies successive integer values within a constant declaration group. It starts at zero and advances with each constant specification. A named integer type lets the example distinguish a State from an arbitrary int in API signatures, while the constants provide readable names for the expected values."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example prints 0 1 2. Pending, Running and Done have type State because the following specifications repeat the first expression and type. An untyped constant such as const limit = 10 can be used where its value is representable by the required numeric type."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype State int\n\nconst (\n    Pending State = iota\n    Running\n    Done\n)\n\nfunc main() { fmt.Println(Pending, Running, Done) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Inserting a constant in the middle of an iota sequence changes later values. Do not casually use that sequence as a durable database or network representation. Give external protocol values explicit numbers or strings and validate incoming values; a named type alone does not restrict all possible integers."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a String method later in the methods lesson. For now, insert a new state between Running and Done and observe the changed numeric output."
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
              "slug": "go-basics-install",
              "label": "02. Install Go and understand the basic development workflow"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables and zero values in Go: var versus :="
            },
            {
              "slug": "go-basics-basic-types",
              "label": "08. Go basic types: integers, floats, booleans and strings"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Constantes e iota en Go: representar valores fijos",
      "description": "Aprende constantes tipadas y sin tipo en Go, usa iota para enumeraciones y evita valores externos inestables.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una constante Go nombra un valor conocido al compilar. Declárala con const cuando deba permanecer fijo, como un máximo de reintentos. Puede representar números, cadenas y booleanos. Un slice, un map o el resultado de una función ordinaria no puede declararse constante.",
            "iota aporta valores enteros sucesivos dentro de un grupo de constantes. Comienza en cero y avanza con cada especificación de constante. Un tipo entero con nombre permite distinguir State de un int arbitrario en las firmas; las constantes dan nombres legibles a los valores esperados."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo imprime 0 1 2. Pending, Running y Done tienen tipo State porque las especificaciones siguientes repiten el tipo y la expresión iniciales. Una constante sin tipo, como const limit = 10, puede usarse cuando su valor cabe en el tipo numérico requerido."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype State int\n\nconst (\n    Pending State = iota\n    Running\n    Done\n)\n\nfunc main() { fmt.Println(Pending, Running, Done) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Insertar una constante en medio de una secuencia iota cambia los valores posteriores. Evita usarla sin cuidado como representación persistente o de red. Asigna números o cadenas explícitos a protocolos externos y valida las entradas; el tipo con nombre no restringe por sí solo todos los enteros posibles."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade un método String al llegar a la lección de métodos. Por ahora inserta un estado entre Running y Done y observa el cambio numérico."
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
              "slug": "go-basics-install",
              "label": "02. Instalar Go y entender el flujo básico de desarrollo"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables y valores cero en Go: var frente a :="
            },
            {
              "slug": "go-basics-basic-types",
              "label": "08. Tipos básicos en Go: enteros, flotantes, booleanos y cadenas"
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
