import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-sorting",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 19
  },
  "translations": {
    "en": {
      "title": "Sort Go data and produce deterministic map output",
      "description": "Sort strings and integers with the standard library and sort map keys before generating predictable output.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Sorting gives a collection an explicit order. The sort package includes helpers for strings and integers, and slices.Sort is another option in modern Go. A map has no guaranteed iteration order, so collect its keys and sort them before generating output whose order needs to stay predictable.",
            "The key slice is independent of the map structure, but the values are still read from the map after sorting. Do not mutate the map concurrently. Sorting a slice modifies its element order in place; copy the slice first if callers still need its original ordering."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example reserves enough capacity for all keys, appends each key and sorts them lexicographically. It then prints api 3 before go 2. This pattern is useful for small reports and deterministic tests, where unspecified map ordering would otherwise make results difficult to compare."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\nfunc main() {\n    counts := map[string]int{\"go\": 2, \"api\": 3}\n    keys := make([]string, 0, len(counts))\n    for key := range counts { keys = append(keys, key) }\n    sort.Strings(keys)\n    for _, key := range keys { fmt.Println(key, counts[key]) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "For custom comparisons, define a consistent ordering. Using <= instead of < for a less function can violate the required strict ordering when values are equal. Also distinguish byte-oriented string ordering from a human language’s collation rules; basic string sorting does not implement locale-aware dictionary order."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add another key and verify the output order. Then sort a slice of scores in descending order, including duplicates, and check that equal values remain valid inputs."
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
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode in Go: rune counts and byte offsets"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Go structs: group related fields into a value"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Ordenar datos en Go y mostrar maps de forma determinista",
      "description": "Ordena cadenas y enteros con la biblioteca estándar y ordena claves de maps para producir una salida predecible.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Ordenar establece un criterio explícito para una colección. sort incluye funciones para cadenas y enteros; slices.Sort es otra opción en Go moderno. Un map no garantiza orden, por lo que debes recopilar sus claves y ordenarlas antes de generar una salida que deba ser predecible.",
            "El slice de claves es independiente de la estructura del map, pero sus valores se leen después de ordenar. No modifiques el map de forma concurrente. Ordenar un slice cambia sus elementos; cópialo antes si quien llama necesita conservar el orden original."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo reserva capacidad para todas las claves, añade cada una y ordena lexicográficamente. Después imprime api 3 antes de go 2. Sirve para informes pequeños y pruebas deterministas donde el orden no definido del map dificultaría comparar resultados."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sort\"\n)\n\nfunc main() {\n    counts := map[string]int{\"go\": 2, \"api\": 3}\n    keys := make([]string, 0, len(counts))\n    for key := range counts { keys = append(keys, key) }\n    sort.Strings(keys)\n    for _, key := range keys { fmt.Println(key, counts[key]) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Para comparaciones personalizadas define un orden coherente. Usar <= en lugar de < puede violar el orden estricto requerido cuando los valores son iguales. Distingue además el orden de cadenas por bytes de las reglas de un idioma; la ordenación básica no implementa diccionarios locales."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade otra clave y verifica el orden. Después ordena puntajes de forma descendente, incluye duplicados y comprueba que los valores iguales siguen siendo entradas válidas."
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
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode en Go: contar runes y entender offsets de bytes"
            },
            {
              "slug": "go-basics-structs",
              "label": "20. Structs en Go: agrupar campos relacionados en un valor"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/sort",
      "url": "https://pkg.go.dev/sort"
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
