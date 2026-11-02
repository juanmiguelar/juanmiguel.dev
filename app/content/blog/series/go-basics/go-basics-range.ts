import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-range",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 16
  },
  "translations": {
    "en": {
      "title": "Go range: iterate collections without confusing copies",
      "description": "Iterate Go slices, maps and strings with range and learn why changing the iteration value may leave the source unchanged.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "range supplies iteration values according to the collection type. For a slice it supplies an index and a copy of the element value. For a map it supplies a key and a value. For a string it supplies a byte offset and a decoded rune. These pairs have different meanings.",
            "Use _ to discard an iteration value you do not need. When modifying a slice of integers or structs, assign through its index. Changing the local value variable only changes that copy. A copied pointer still refers to its original object, so element type also affects the observed behavior."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The loop prints the original elements while assigning doubled values back into the slice. Its final output is [4 8 12]. Keeping the transformation explicit makes the mutation visible to a reader. For a read-only sum, iterate over values and avoid modifying the source."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := []int{2, 4, 6}\n    for i, value := range values {\n        fmt.Println(i, value)\n        values[i] = value * 2\n    }\n    fmt.Println(values)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Do not depend on map iteration order, and avoid changing collection structure while learning range semantics. In particular, appending elements does not turn a range over a slice into a growing work queue. Use an explicit index-based loop or a channel when the workload can grow during processing."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "First replace values[i] = value * 2 with value *= 2 and compare the final slice. Then implement a sum that leaves all elements unchanged."
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
              "slug": "go-basics-maps",
              "label": "15. Go maps: lookup, presence checks and safe initialization"
            },
            {
              "slug": "go-basics-strings",
              "label": "17. Go strings: bytes, immutability and common operations"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "range en Go: recorrer colecciones y entender las copias",
      "description": "Recorre slices, maps y cadenas con range y aprende por qué cambiar el valor de iteración puede dejar intacto el origen.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "range entrega valores según el tipo recorrido. Para un slice proporciona índice y copia del elemento. Para un map proporciona clave y valor. Para una cadena proporciona desplazamiento en bytes y rune decodificado. Cada pareja tiene un significado diferente.",
            "Usa _ para descartar un valor que no necesitas. Para modificar un slice de enteros o structs, asigna usando el índice. Cambiar la variable local solo modifica esa copia. Un puntero copiado sigue apuntando al objeto original; el tipo del elemento también afecta al resultado."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El bucle imprime los elementos originales y guarda sus dobles en el slice. La salida final es [4 8 12]. Expresar la transformación con el índice hace visible la modificación. Para calcular una suma de solo lectura, recorre valores y conserva el origen."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := []int{2, 4, 6}\n    for i, value := range values {\n        fmt.Println(i, value)\n        values[i] = value * 2\n    }\n    fmt.Println(values)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "No dependas del orden de un map y evita modificar la estructura de la colección mientras aprendes range. Añadir elementos no convierte un range sobre un slice en una cola creciente. Usa un bucle de índices explícito o un canal cuando aparezca trabajo durante el procesamiento."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Primero sustituye values[i] = value * 2 por value *= 2 y compara el slice final. Después implementa una suma sin modificar elementos."
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
              "slug": "go-basics-maps",
              "label": "15. Maps en Go: búsquedas, presencia e inicialización"
            },
            {
              "slug": "go-basics-strings",
              "label": "17. Cadenas en Go: bytes, inmutabilidad y operaciones habituales"
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
