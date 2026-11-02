import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-arrays-and-collections",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 12
  },
  "translations": {
    "en": {
      "title": "Go collections: start with arrays and value semantics",
      "description": "Understand fixed-size Go arrays and use this guide to navigate slices, maps, strings, structs and pointers.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An array in Go holds a fixed number of elements of one type. Its length is part of its type, so [3]int and [4]int are different types. Arrays make value semantics visible: assigning an array copies its elements, and changing the copy does not change the original.",
            "This block of the series follows the choices you make when representing data. Use an array for a fixed-size value, a slice for a sequence with a variable length and a map for key-based lookup. Structs combine named fields; pointers allow explicit access to an existing value."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example changes only copyOfScores and prints [10 20 30] followed by [99 20 30]. An array index begins at zero. Reading or writing outside its bounds is invalid; when the compiler cannot reject it statically, the operation panics at runtime."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := [3]int{10, 20, 30}\n    copyOfScores := scores\n    copyOfScores[0] = 99\n    fmt.Println(scores, copyOfScores)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "An array whose elements contain pointers or slices copies those element values, not every object reachable through them. The independent integer arrays here are a deliberately simple case. Continue to the slice and pointer lessons before assuming that every collection assignment creates fully independent underlying data."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change the array length to four, leave one element uninitialized and observe its zero value. Then try assigning it to a [3]int variable and read the type error."
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
              "slug": "go-basics-learning-path",
              "label": "01. Learn Go basics: a path through 50 practical lessons"
            },
            {
              "slug": "go-basics-slices",
              "label": "13. Go slices: length, capacity and shared storage"
            },
            {
              "slug": "go-basics-append-and-copy",
              "label": "14. append and copy in Go: grow slices without surprises"
            },
            {
              "slug": "go-basics-maps",
              "label": "15. Go maps: lookup, presence checks and safe initialization"
            },
            {
              "slug": "go-basics-range",
              "label": "16. Go range: iterate collections without confusing copies"
            },
            {
              "slug": "go-basics-strings",
              "label": "17. Go strings: bytes, immutability and common operations"
            },
            {
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode in Go: rune counts and byte offsets"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Sort Go data and produce deterministic map output"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Go structs: group related fields into a value"
            },
            {
              "slug": "go-basics-pointers",
              "label": "21. Go pointers: addresses, dereferencing and nil"
            },
            {
              "slug": "go-basics-for-loops",
              "label": "11. Go for loops: counters, conditions and termination"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Colecciones en Go: comenzar con arrays y valores",
      "description": "Entiende los arrays de tamaño fijo en Go y usa esta guía para estudiar slices, maps, cadenas, structs y punteros.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un array en Go contiene un número fijo de elementos del mismo tipo. Su longitud forma parte del tipo; [3]int y [4]int son tipos distintos. Los arrays muestran la semántica de valores: asignar un array copia sus elementos y modificar la copia no cambia el original.",
            "Este bloque sigue las decisiones necesarias para representar datos. Usa arrays para valores de tamaño fijo, slices para secuencias de longitud variable y maps para búsquedas por clave. Los structs combinan campos con nombre; los punteros permiten acceder explícitamente a un valor existente."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo cambia únicamente copyOfScores e imprime [10 20 30] seguido de [99 20 30]. Los índices comienzan en cero. Leer o escribir fuera de los límites es inválido; cuando el compilador no puede rechazarlo, la operación causa panic durante la ejecución."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := [3]int{10, 20, 30}\n    copyOfScores := scores\n    copyOfScores[0] = 99\n    fmt.Println(scores, copyOfScores)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un array con elementos que contienen punteros o slices copia esos valores, no todos los objetos alcanzables desde ellos. Los arrays de enteros independientes son un caso deliberadamente sencillo. Estudia slices y punteros antes de asumir que toda asignación crea datos subyacentes completamente independientes."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia la longitud a cuatro, deja un elemento sin inicializar y observa su valor cero. Intenta asignarlo a una variable [3]int y lee el error de tipo."
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
              "slug": "go-basics-learning-path",
              "label": "01. Fundamentos de Go: una ruta de 50 lecciones prácticas"
            },
            {
              "slug": "go-basics-slices",
              "label": "13. Slices en Go: longitud, capacidad y memoria compartida"
            },
            {
              "slug": "go-basics-append-and-copy",
              "label": "14. append y copy en Go: ampliar slices sin sorpresas"
            },
            {
              "slug": "go-basics-maps",
              "label": "15. Maps en Go: búsquedas, presencia e inicialización"
            },
            {
              "slug": "go-basics-range",
              "label": "16. range en Go: recorrer colecciones y entender las copias"
            },
            {
              "slug": "go-basics-strings",
              "label": "17. Cadenas en Go: bytes, inmutabilidad y operaciones habituales"
            },
            {
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode en Go: contar runes y entender offsets de bytes"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Ordenar datos en Go y mostrar maps de forma determinista"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Structs en Go: agrupar campos relacionados en un valor"
            },
            {
              "slug": "go-basics-pointers",
              "label": "21. Punteros en Go: direcciones, desreferencia y nil"
            },
            {
              "slug": "go-basics-for-loops",
              "label": "11. Bucles for en Go: contadores, condiciones y terminación"
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
