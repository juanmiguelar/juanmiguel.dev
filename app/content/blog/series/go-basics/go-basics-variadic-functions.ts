import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-variadic-functions",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 24
  },
  "translations": {
    "en": {
      "title": "Variadic functions in Go: accept zero or more arguments",
      "description": "Use variadic Go parameters, expand slices with ... and define the behavior of calls with no arguments.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A variadic function accepts a variable number of arguments of one type. Declare its final parameter with ...T. Inside the function that parameter behaves as a []T slice. This fits operations such as adding numbers or formatting several values while keeping the element type explicit.",
            "You can call sum with individual integers or expand an existing []int using values.... The variadic parameter must be last, so ordinary required parameters come first. A call with no variadic arguments provides a nil slice; range over it performs no iterations."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example prints zero, six and nine. The no-argument sum returns the additive identity, zero, because total starts at its zero value. For another operation, such as a minimum, the empty-input case may require a boolean or error instead of inventing a result."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc sum(values ...int) int {\n    total := 0\n    for _, value := range values { total += value }\n    return total\n}\n\nfunc main() {\n    fmt.Println(sum())\n    fmt.Println(sum(1, 2, 3))\n    values := []int{4, 5}\n    fmt.Println(sum(values...))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Expanding an existing slice does not make its elements independent. A variadic function that modifies values[i] can modify the caller’s slice. Keep read-only operations read-only, or document mutation and copy the input before changing it when that is the intended ownership contract."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Implement joinWith(separator string, values ...string). Try zero, one and three values, then pass a preexisting slice using the expansion syntax."
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
              "slug": "go-basics-multiple-results",
              "label": "23. Multiple return values in Go: results and presence"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Go scope and closures: capture variables deliberately"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Funciones variádicas en Go: recibir cero o más argumentos",
      "description": "Usa parámetros variádicos, expande slices con ... y define el comportamiento de llamadas sin argumentos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una función variádica acepta un número variable de argumentos del mismo tipo. Declara el último parámetro con ...T. Dentro funciona como un slice []T. Sirve para sumar números o formatear varios valores conservando explícito el tipo de cada elemento.",
            "Puedes llamar a sum con enteros individuales o expandir un []int mediante values.... El parámetro variádico debe ser el último; los parámetros obligatorios van antes. Una llamada sin argumentos variables proporciona un slice nil y range no realiza iteraciones."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo imprime cero, seis y nueve. Sin argumentos devuelve la identidad aditiva, cero, porque total empieza en su valor cero. Para otra operación, como mínimo, una entrada vacía puede necesitar booleano o error en lugar de inventar un resultado."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc sum(values ...int) int {\n    total := 0\n    for _, value := range values { total += value }\n    return total\n}\n\nfunc main() {\n    fmt.Println(sum())\n    fmt.Println(sum(1, 2, 3))\n    values := []int{4, 5}\n    fmt.Println(sum(values...))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Expandir un slice no independiza sus elementos. Una función variádica que cambia values[i] puede modificar el slice externo. Mantén las operaciones de lectura sin modificaciones o documenta la mutación y copia antes si ese es el contrato de propiedad previsto."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Implementa joinWith(separator string, values ...string). Prueba cero, uno y tres valores y después pasa un slice existente con la sintaxis de expansión."
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
              "slug": "go-basics-multiple-results",
              "label": "23. Retornos múltiples en Go: resultados y presencia"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Ámbitos y closures en Go: capturar variables con intención"
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
