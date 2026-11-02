import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-pointers",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 21
  },
  "translations": {
    "en": {
      "title": "Go pointers: addresses, dereferencing and nil",
      "description": "Use Go pointers to update existing values, understand parameter copying and check nil before dereferencing.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A pointer holds the address of a value. The & operator obtains an address, and * accesses the value through a pointer. Use a pointer when a function needs to modify a caller-owned value or represent the absence of an optional value with nil. Ordinary Go pointers do not support pointer arithmetic.",
            "Function arguments are always passed by value. Passing a pointer copies the address, allowing both copies to refer to the same object. Passing an int copies the integer instead. This explains mutation without requiring a separate pass-by-reference rule for the language."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The increment function receives *int and stores an updated integer through it. Starting from two, the program prints three. Parentheses around *value make the read and addition easy to see. The nil guard defines a no-op for absent input; another API could return an error instead."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc increment(value *int) {\n    if value == nil { return }\n    *value = *value + 1\n}\n\nfunc main() {\n    count := 2\n    increment(&count)\n    fmt.Println(count)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Dereferencing nil panics. Also, replacing the local pointer with a different address does not replace the caller’s pointer variable, because that pointer was copied. Avoid choosing pointers solely on an assumption that copying is always expensive; start with the mutation and ownership behavior your API needs."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Write a value-only increment function and compare the caller’s result. Then call the pointer version with nil and document whether ignoring absent input fits your application."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Go collections: start with arrays and value semantics"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Go structs: group related fields into a value"
            },
            {
              "slug": "go-basics-functions",
              "label": "22. Go functions: parameters, results and small contracts"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Punteros en Go: direcciones, desreferencia y nil",
      "description": "Usa punteros Go para modificar valores existentes, entiende la copia de parámetros y comprueba nil antes de desreferenciar.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un puntero contiene la dirección de un valor. & obtiene una dirección y * accede al valor apuntado. Usa punteros cuando una función necesite modificar un valor de quien llama o representar ausencia mediante nil. Los punteros ordinarios de Go no admiten aritmética de direcciones.",
            "Los argumentos siempre se pasan por valor. Pasar un puntero copia la dirección y permite que ambas copias apunten al mismo objeto. Pasar un int copia el entero. Así se explica la modificación sin necesitar una regla adicional de paso por referencia."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "La función increment recibe *int y guarda el entero actualizado mediante el puntero. Desde dos, el programa imprime tres. Los paréntesis en *value facilitan ver lectura y suma. La comprobación nil define una operación vacía para ausencia; otra API podría devolver error."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc increment(value *int) {\n    if value == nil { return }\n    *value = *value + 1\n}\n\nfunc main() {\n    count := 2\n    increment(&count)\n    fmt.Println(count)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Desreferenciar nil causa panic. Sustituir el puntero local por otra dirección tampoco reemplaza la variable puntero de quien llama, porque se copió. Evita elegir punteros suponiendo que toda copia es costosa; comienza por la modificación y propiedad que necesita la API."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Escribe increment recibiendo solo el valor y compara el resultado externo. Después llama a la versión puntero con nil y documenta si ignorar la ausencia encaja en tu aplicación."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Colecciones en Go: comenzar con arrays y valores"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Structs en Go: agrupar campos relacionados en un valor"
            },
            {
              "slug": "go-basics-functions",
              "label": "22. Funciones en Go: parámetros, resultados y contratos pequeños"
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
