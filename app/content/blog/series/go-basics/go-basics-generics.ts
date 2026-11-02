import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-generics",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 31
  },
  "translations": {
    "en": {
      "title": "Go generics for beginners: type parameters and constraints",
      "description": "Write a small generic Go function with a comparable constraint and learn when concrete types or interfaces remain clearer.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A generic function declares type parameters alongside ordinary parameters. Constraints describe which types are allowed and which operations the function can perform. Use generics when one algorithm genuinely applies to several types without depending on a particular representation or behavior beyond the constraint.",
            "The contains function uses T comparable because it compares elements with ==. A constraint of any would allow more types but would not permit that comparison. Slices and maps are not comparable and cannot be used as element types for this function under that constraint."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Go infers T as int in the first call and string in the second. The function returns as soon as it finds a match and returns false for an empty input. Its behavior is the same for both types, which is the repetition a type parameter removes."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc contains[T comparable](values []T, target T) bool {\n    for _, value := range values {\n        if value == target { return true }\n    }\n    return false\n}\n\nfunc main() {\n    fmt.Println(contains([]int{1, 2, 3}, 2))\n    fmt.Println(contains([]string{\"go\"}, \"api\"))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Generics do not make every abstraction simpler. An interface fits consumers that need methods, and a concrete function often gives the clearest API for one data type. Avoid adding type parameters that appear only once and do not express a useful relationship between inputs and results."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Test contains with an empty slice, duplicates and a missing value. Try a slice-of-slices input and read the compiler error before deciding whether a custom equality function would fit that use case."
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
              "slug": "go-basics-interfaces",
              "label": "30. Go interfaces: define the behavior a caller needs"
            },
            {
              "slug": "go-basics-standard-library",
              "label": "32. Go standard library: connect readers, writers and tools"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Genéricos en Go: parámetros de tipo y restricciones",
      "description": "Escribe una función genérica con comparable y aprende cuándo los tipos concretos o las interfaces siguen siendo más claros.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una función genérica declara parámetros de tipo junto con los ordinarios. Las restricciones describen tipos permitidos y operaciones disponibles. Usa genéricos cuando un algoritmo se aplique a varios tipos sin depender de una representación o comportamiento que exceda la restricción.",
            "contains usa T comparable porque compara elementos con ==. La restricción any admitiría más tipos pero no permitiría esa comparación. Los slices y maps no son comparables y no pueden ser elementos de esta función con esa restricción."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Go infiere T como int en la primera llamada y string en la segunda. La función retorna al encontrar coincidencia y devuelve false con entrada vacía. El comportamiento es igual para ambos tipos; esa es la repetición que elimina el parámetro de tipo."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc contains[T comparable](values []T, target T) bool {\n    for _, value := range values {\n        if value == target { return true }\n    }\n    return false\n}\n\nfunc main() {\n    fmt.Println(contains([]int{1, 2, 3}, 2))\n    fmt.Println(contains([]string{\"go\"}, \"api\"))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Los genéricos no simplifican toda abstracción. Una interfaz sirve si se necesitan métodos y una función concreta suele ser clara para un único tipo. Evita parámetros de tipo que aparecen una sola vez y no expresan una relación útil entre entradas y resultados."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Prueba contains con slice vacío, duplicados y valor ausente. Intenta un slice de slices y lee el error antes de decidir si necesitas una función de igualdad personalizada."
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
              "slug": "go-basics-interfaces",
              "label": "30. Interfaces en Go: definir el comportamiento necesario"
            },
            {
              "slug": "go-basics-standard-library",
              "label": "32. Biblioteca estándar de Go: conectar readers, writers y herramientas"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/doc/tutorial/generics",
      "url": "https://go.dev/doc/tutorial/generics"
    },
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
