import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-slices",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 13
  },
  "translations": {
    "en": {
      "title": "Go slices: length, capacity and shared storage",
      "description": "Understand how Go slices refer to backing arrays, why subslices share elements and when to make an independent copy.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A slice describes a segment of an underlying array. It has a length, a capacity and a reference to storage. Assigning a slice copies that description, so two slices can refer to the same elements. This is why changing an element through a subslice can change the original sequence.",
            "len reports the number of elements currently accessible. cap reports how far the slice can extend through its backing array. The expression values[1:3] includes indices one and two and excludes index three. Bounds must be valid; slicing does not silently clamp an invalid boundary."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example first changes the shared element to 99. It then allocates a new slice and copies the values into it. Changing independent[0] to seven leaves values unchanged. make creates the destination length, while copy returns the number of elements copied, limited by the shorter slice."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := []int{10, 20, 30}\n    window := values[1:]\n    window[0] = 99\n    independent := make([]int, len(values))\n    copy(independent, values)\n    independent[0] = 7\n    fmt.Println(values, independent)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A nil slice has length and capacity zero and can be appended to. It differs from a non-nil empty slice in some representations, including JSON null versus an empty array. Choose an API representation deliberately rather than treating the two as identical in every context."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Print len and cap for the original slice and its subslice. Copy into a destination of length one and observe the returned count and the untouched source."
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
              "slug": "go-basics-append-and-copy",
              "label": "14. append and copy in Go: grow slices without surprises"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Slices en Go: longitud, capacidad y memoria compartida",
      "description": "Comprende cómo los slices apuntan a arrays, por qué los subslices comparten elementos y cuándo crear una copia independiente.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un slice describe un segmento de un array subyacente. Tiene longitud, capacidad y una referencia al almacenamiento. Asignarlo copia esa descripción; dos slices pueden referirse a los mismos elementos. Por eso modificar un elemento mediante un subslice puede cambiar la secuencia original.",
            "len indica cuántos elementos son accesibles actualmente. cap indica hasta dónde puede extenderse el slice en su array. values[1:3] incluye los índices uno y dos y excluye el tres. Los límites deben ser válidos; Go no ajusta silenciosamente un límite incorrecto."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo cambia primero el elemento compartido a 99. Después asigna un slice nuevo y copia los valores. Cambiar independent[0] a siete no modifica values. make crea la longitud de destino; copy devuelve cuántos elementos copió, limitado por el slice más corto."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := []int{10, 20, 30}\n    window := values[1:]\n    window[0] = 99\n    independent := make([]int, len(values))\n    copy(independent, values)\n    independent[0] = 7\n    fmt.Println(values, independent)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un slice nil tiene longitud y capacidad cero y admite append. Se distingue de un slice vacío no nil en ciertas representaciones, como null frente a array vacío en JSON. Elige deliberadamente la representación de una API en vez de tratarlos como idénticos en todos los contextos."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Imprime len y cap del slice original y del subslice. Copia a un destino de longitud uno y observa el contador devuelto y el origen intacto."
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
              "slug": "go-basics-append-and-copy",
              "label": "14. append y copy en Go: ampliar slices sin sorpresas"
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
