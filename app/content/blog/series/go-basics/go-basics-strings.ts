import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-strings",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 17
  },
  "translations": {
    "en": {
      "title": "Go strings: bytes, immutability and common operations",
      "description": "Work with Go strings using strings.TrimSpace, Split and Join, while distinguishing byte length from Unicode text length.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A Go string is an immutable sequence of bytes. len reports bytes, and indexing returns a byte. Many strings contain UTF-8 text, but a string can also hold arbitrary bytes. Use the strings package for common text operations and the Unicode-aware tools from the next lesson when code points matter.",
            "TrimSpace returns a string with leading and trailing Unicode whitespace removed. Split separates at each occurrence of a separator and Join combines a slice with a chosen separator. None of these operations mutates the input string. Store the returned result before using the transformed text."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example turns a padded comma-separated string into go | api | tests. It is a small controlled format, not a CSV parser: quoted commas and embedded newlines require encoding/csv. Choosing a standard parser becomes necessary as soon as the input grammar grows beyond a plain separator."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    input := \"  go,api,tests  \"\n    parts := strings.Split(strings.TrimSpace(input), \",\")\n    fmt.Println(strings.Join(parts, \" | \"))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Byte slicing can split a UTF-8 encoding in the middle of a character. It also cannot safely truncate user-visible grapheme clusters. Avoid applying a byte limit as a display-character limit. For constructing many pieces, consider strings.Builder after correctness is clear and measurements justify the choice."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Try an empty string and a trailing comma, then inspect the resulting slices. Decide whether empty fields should be retained, removed or rejected by your input rules."
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
              "slug": "go-basics-range",
              "label": "16. Go range: iterate collections without confusing copies"
            },
            {
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode in Go: rune counts and byte offsets"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Cadenas en Go: bytes, inmutabilidad y operaciones habituales",
      "description": "Trabaja con cadenas usando strings.TrimSpace, Split y Join, distinguiendo longitud en bytes de longitud de texto Unicode.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una cadena Go es una secuencia inmutable de bytes. len cuenta bytes y el acceso por índice devuelve byte. Muchas cadenas contienen texto UTF-8, pero también pueden almacenar bytes arbitrarios. Usa strings para operaciones habituales y las herramientas Unicode de la siguiente lección cuando importen los puntos de código.",
            "TrimSpace devuelve una cadena sin espacios Unicode iniciales ni finales. Split separa según un delimitador y Join une un slice con el separador elegido. Ninguna operación modifica la cadena original. Conserva el resultado devuelto antes de usar el texto transformado."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo transforma una cadena con espacios y comas en go | api | tests. Es un formato controlado pequeño, no un lector CSV: las comas entre comillas y saltos de línea requieren encoding/csv. Usa un analizador estándar cuando la gramática supere un separador simple."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    input := \"  go,api,tests  \"\n    parts := strings.Split(strings.TrimSpace(input), \",\")\n    fmt.Println(strings.Join(parts, \" | \"))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Cortar por bytes puede dividir una codificación UTF-8 dentro de un carácter. Tampoco permite truncar con seguridad grupos de grafemas visibles. Evita usar un límite de bytes como límite visual. Para construir muchas piezas, considera strings.Builder cuando la corrección esté clara y la medición lo justifique."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Prueba una cadena vacía y una coma final; inspecciona los slices resultantes. Decide si los campos vacíos deben conservarse, eliminarse o rechazarse según tus reglas."
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
              "slug": "go-basics-range",
              "label": "16. range en Go: recorrer colecciones y entender las copias"
            },
            {
              "slug": "go-basics-unicode-runes",
              "label": "18. Unicode en Go: contar runes y entender offsets de bytes"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/strings",
      "url": "https://pkg.go.dev/strings"
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
