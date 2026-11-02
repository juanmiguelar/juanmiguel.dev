import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-maps",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 15
  },
  "translations": {
    "en": {
      "title": "Go maps: lookup, presence checks and safe initialization",
      "description": "Create Go maps, distinguish missing keys from zero values and understand nil maps and unspecified iteration order.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A map associates keys with values. Use make or a map literal before inserting entries. Reading a missing key returns the value type’s zero value, so use the two-result lookup when absence has a different meaning from a stored zero. The second result reports whether the key exists.",
            "Keys must be comparable. Strings and integers work as keys; slices do not. delete removes an entry and does nothing when the key is absent. len counts entries. Map assignment shares the same map data, so passing a map to a function can allow that function to update its entries."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example stores an existing key with value zero. Its lookup prints 0 true, whereas an absent key prints 0 false. This is useful for counts, configuration and caches where zero can be a valid result. Make the presence decision explicit before using a fallback value."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    counts := map[string]int{\"go\": 0}\n    value, ok := counts[\"go\"]\n    fmt.Println(value, ok)\n    value, ok = counts[\"rust\"]\n    fmt.Println(value, ok)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A nil map supports reads, len and delete, but inserting into it panics. Iteration order is unspecified, and plain maps do not support concurrent reads and writes without synchronization. Later lessons cover sorting keys for deterministic output and protecting shared state with a mutex."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a second key, delete it and compare the lookup results. Declare a nil map and check its length, then initialize it before inserting a value."
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
            },
            {
              "slug": "go-basics-range",
              "label": "16. Go range: iterate collections without confusing copies"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Maps en Go: búsquedas, presencia e inicialización",
      "description": "Crea maps en Go, distingue claves ausentes de valores cero y comprende maps nil y el orden de iteración no definido.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un map asocia claves con valores. Usa make o un literal antes de insertar entradas. Leer una clave ausente devuelve el valor cero del tipo; usa la búsqueda de dos resultados cuando la ausencia tenga un significado diferente a un cero almacenado. El segundo resultado indica si existe la clave.",
            "Las claves deben ser comparables. Cadenas y enteros sirven; los slices no. delete elimina una entrada y no hace nada si falta la clave. len cuenta entradas. Asignar un map comparte sus datos, por lo que una función que lo recibe puede modificar las entradas."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo guarda una clave existente con valor cero. Su búsqueda imprime 0 true; la de una clave ausente imprime 0 false. Esto sirve para contadores, configuración y cachés donde cero es válido. Decide explícitamente si existe la clave antes de elegir un valor alternativo."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    counts := map[string]int{\"go\": 0}\n    value, ok := counts[\"go\"]\n    fmt.Println(value, ok)\n    value, ok = counts[\"rust\"]\n    fmt.Println(value, ok)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un map nil admite lecturas, len y delete, pero insertar causa panic. El orden de iteración no está definido y los maps ordinarios no admiten lecturas y escrituras concurrentes sin sincronización. Más adelante verás cómo ordenar claves y proteger estado con un mutex."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade otra clave, elimínala y compara las búsquedas. Declara un map nil, comprueba su longitud e inicialízalo antes de insertar."
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
            },
            {
              "slug": "go-basics-range",
              "label": "16. range en Go: recorrer colecciones y entender las copias"
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
