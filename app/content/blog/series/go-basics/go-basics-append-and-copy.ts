import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-append-and-copy",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 14
  },
  "translations": {
    "en": {
      "title": "append and copy in Go: grow slices without surprises",
      "description": "Use append correctly, understand backing-array reuse and copy a slice before making independent modifications.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "append returns a slice containing the original elements followed by the new ones. Always keep that returned value. If capacity is sufficient, append reuses existing storage; otherwise it allocates another array. Code that depends on unrelated slices staying independent should not rely on whichever allocation happens today.",
            "Appending to a subslice can overwrite an element visible through another slice when they share capacity. To create a separate sequence, allocate a destination and use copy, or append into a nil destination. Both approaches copy element values, so pointed-to objects can still be shared."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example deliberately gives base spare capacity. Appending nine to prefix writes into the second position of base, producing [1 9]. The independent slice receives its own element storage before appending three. Printing base again shows why the two operations have different effects."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    base := make([]int, 2, 4)\n    base[0], base[1] = 1, 2\n    prefix := base[:1]\n    prefix = append(prefix, 9)\n    independent := append([]int(nil), base...)\n    independent = append(independent, 3)\n    fmt.Println(base, prefix, independent)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Capacity growth is an implementation detail, not a promise that capacity doubles at every append. Preallocate when you know an approximate element count, but measure before adding complicated allocation strategies. A full slice expression such as base[:1:1] can restrict capacity; it does not copy existing elements."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Replace base[:1] with base[:1:1] and predict whether the append can overwrite base[1]. Then repeat the exercise with a slice of pointers and inspect what remains shared."
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
              "slug": "go-basics-slices",
              "label": "13. Go slices: length, capacity and shared storage"
            },
            {
              "slug": "go-basics-maps",
              "label": "15. Go maps: lookup, presence checks and safe initialization"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "append y copy en Go: ampliar slices sin sorpresas",
      "description": "Usa append correctamente, entiende cuándo se reutiliza el array y copia un slice antes de modificarlo de forma independiente.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "append devuelve un slice con los elementos originales y los nuevos al final. Conserva siempre ese resultado. Si hay capacidad suficiente, reutiliza el almacenamiento; si no, asigna otro array. La independencia entre slices no debe depender de la asignación que ocurra en una ejecución concreta.",
            "Añadir elementos a un subslice puede sobrescribir un elemento visible en otro slice cuando comparten capacidad. Para separar la secuencia, crea un destino y usa copy, o añade sobre un destino nil. Ambas opciones copian los valores de elementos; los objetos apuntados pueden seguir compartidos."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo da capacidad sobrante a base. Añadir nueve a prefix escribe en la segunda posición de base y produce [1 9]. independent obtiene almacenamiento propio antes de añadir tres. Imprimir base muestra por qué las operaciones tienen efectos diferentes."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    base := make([]int, 2, 4)\n    base[0], base[1] = 1, 2\n    prefix := base[:1]\n    prefix = append(prefix, 9)\n    independent := append([]int(nil), base...)\n    independent = append(independent, 3)\n    fmt.Println(base, prefix, independent)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "El crecimiento de capacidad es un detalle de implementación; no existe una promesa de duplicarla con cada append. Preasigna si conoces el volumen aproximado, pero mide antes de complicar la estrategia. Una expresión completa como base[:1:1] restringe capacidad; no copia los elementos existentes."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Sustituye base[:1] por base[:1:1] y predice si append puede sobrescribir base[1]. Repite con un slice de punteros y revisa qué sigue compartido."
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
              "slug": "go-basics-slices",
              "label": "13. Slices en Go: longitud, capacidad y memoria compartida"
            },
            {
              "slug": "go-basics-maps",
              "label": "15. Maps en Go: búsquedas, presencia e inicialización"
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
