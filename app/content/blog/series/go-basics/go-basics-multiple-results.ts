import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-multiple-results",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 23
  },
  "translations": {
    "en": {
      "title": "Multiple return values in Go: results and presence",
      "description": "Return multiple values from Go functions and use a boolean result to distinguish an empty collection from a valid zero.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Go functions can return multiple values. A common pair is a computed result and a signal explaining whether that result is usable. Use (value, bool) for a simple presence question and (value, error) when a failure needs explanation. Choose the form that matches the caller’s decision.",
            "The first function returns the first integer in a slice and a presence flag. For an empty slice, zero is only a placeholder and false communicates absence. For []int{0}, the zero is real data and the flag is true. A single integer could not distinguish those cases."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The caller assigns both results with a short declaration and checks ok before using value. Keeping the check adjacent to the call prevents a placeholder from being mistaken for valid input. An early return makes the successful path continue without an extra level of nesting."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc first(values []int) (int, bool) {\n    if len(values) == 0 { return 0, false }\n    return values[0], true\n}\n\nfunc main() {\n    value, ok := first([]int{0})\n    if !ok { fmt.Println(\"empty\"); return }\n    fmt.Println(value)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Discarding a status result with _ is a deliberate decision, not a default convenience. If a collection may be empty, ignoring ok changes the meaning of zero. Named return parameters can document results, but long functions with bare returns can hide which values are actually being returned."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Call first with nil, an empty non-nil slice and []int{0}. Write down the expected pair for each, then implement a last function with the same contract."
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
              "slug": "go-basics-variadic-functions",
              "label": "24. Variadic functions in Go: accept zero or more arguments"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Retornos múltiples en Go: resultados y presencia",
      "description": "Devuelve varios valores desde funciones Go y usa un booleano para distinguir una colección vacía de un cero válido.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Las funciones Go pueden devolver varios valores. Una pareja habitual combina resultado y señal de validez. Usa (valor, bool) para una pregunta simple de presencia y (valor, error) cuando un fallo necesite explicación. Elige según la decisión que deba tomar quien llama.",
            "La función first devuelve el primer entero y una bandera de presencia. Si el slice está vacío, cero es un valor auxiliar y false comunica ausencia. Para []int{0}, el cero es un dato real y la bandera es true. Un entero solo no distinguiría los casos."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Quien llama asigna ambos resultados con una declaración corta y comprueba ok antes de usar value. Mantener la comprobación junto a la llamada evita confundir el valor auxiliar con un dato válido. El retorno temprano permite continuar sin otro nivel de anidación."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc first(values []int) (int, bool) {\n    if len(values) == 0 { return 0, false }\n    return values[0], true\n}\n\nfunc main() {\n    value, ok := first([]int{0})\n    if !ok { fmt.Println(\"empty\"); return }\n    fmt.Println(value)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Descartar el estado con _ debe ser una decisión deliberada. Si la colección puede estar vacía, ignorar ok cambia el significado de cero. Los resultados con nombre pueden documentar, pero los retornos sin valores en funciones largas pueden ocultar qué se está devolviendo."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Llama a first con nil, un slice vacío no nil y []int{0}. Anota la pareja esperada e implementa last con el mismo contrato."
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
              "slug": "go-basics-variadic-functions",
              "label": "24. Funciones variádicas en Go: recibir cero o más argumentos"
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
