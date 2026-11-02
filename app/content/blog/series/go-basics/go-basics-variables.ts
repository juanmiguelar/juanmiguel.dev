import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-variables",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 6
  },
  "translations": {
    "en": {
      "title": "Variables and zero values in Go: var versus :=",
      "description": "Declare Go variables with var and short declarations, understand zero values and avoid accidental shadowing.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Use var when you need an explicit type or a declaration without an initial expression. Inside a function, := declares variables and infers their types from values. Every declared variable has a value: an int starts at zero, a bool at false and a string at the empty string.",
            "The inferred type remains fixed after declaration. In the example count is an int, so assigning a string later is a compile error. Assignment with = changes an existing variable. A short declaration needs at least one new non-blank variable in the same scope."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The first output is 0 false followed by an empty string. Updating count to three changes only that variable. Prefer names that describe the value, such as attempts or enabled, and keep declarations close to their first use so that their lifetime is easy to follow."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var count int\n    var enabled bool\n    var name string\n    fmt.Println(count, enabled, name)\n    count = 3\n    message := \"ready\"\n    fmt.Println(count, message)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A := declaration in an inner block can create a different variable with the same name. Updating it will not update the outer variable. This becomes especially easy to miss with err inside an if statement. Use = when the intention is to update a variable already in scope."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a float64 variable without initialization and print it. Then shadow count inside an extra block and compare the values printed inside and outside that block."
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
              "slug": "go-basics-format-and-tools",
              "label": "05. Format and check Go code with gofmt and go vet"
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constants and iota in Go: represent fixed values"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Variables y valores cero en Go: var frente a :=",
      "description": "Declara variables Go con var y declaraciones cortas, entiende los valores cero y evita ocultar variables por accidente.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Usa var cuando necesitas un tipo explícito o una declaración sin expresión inicial. Dentro de una función, := declara variables e infiere sus tipos a partir de los valores. Toda variable declarada tiene un valor: int comienza en cero, bool en false y string en la cadena vacía.",
            "El tipo inferido permanece fijo después de declarar la variable. En el ejemplo count es int; asignarle luego una cadena no compila. La asignación con = cambia una variable existente. Una declaración corta necesita al menos una variable nueva distinta de _ en el mismo ámbito."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "La primera salida contiene 0 false y una cadena vacía. Cambiar count a tres modifica únicamente esa variable. Prefiere nombres que describan el valor, como attempts o enabled, y declara cerca del primer uso para que resulte fácil seguir su duración."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var count int\n    var enabled bool\n    var name string\n    fmt.Println(count, enabled, name)\n    count = 3\n    message := \"ready\"\n    fmt.Println(count, message)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Una declaración con := en un bloque interior puede crear otra variable con el mismo nombre. Modificarla no cambia la exterior. Esto pasa fácilmente con err dentro de un if. Usa = cuando quieras actualizar una variable que ya existe en el ámbito."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade una variable float64 sin inicialización e imprímela. Después oculta count dentro de otro bloque y compara los valores impresos dentro y fuera."
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
              "slug": "go-basics-format-and-tools",
              "label": "05. Formatear y revisar código Go con gofmt y go vet"
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constantes e iota en Go: representar valores fijos"
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
