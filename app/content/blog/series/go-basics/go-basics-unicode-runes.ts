import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-unicode-runes",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 18
  },
  "translations": {
    "en": {
      "title": "Unicode in Go: rune counts and byte offsets",
      "description": "Compare byte lengths with rune counts, iterate UTF-8 text and understand why a rune is not always a visible character.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A rune represents a Unicode code point and is an alias for int32. A UTF-8 code point may occupy more than one byte, so len(text) and utf8.RuneCountInString(text) can differ. Neither measure necessarily equals the number of visible characters perceived by a reader.",
            "range over a string decodes successive UTF-8 runes. Its index is the byte offset of each rune, not its ordinal position. Converting a string to []rune makes code-point indexing possible, but it allocates a new sequence and still does not segment grapheme clusters."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example uses a precomposed accented letter. \"Go, sí\" contains six runes and seven UTF-8 bytes. The printed offsets show where the two-byte í begins. Printf with %c prints a rune as a character, while %U can show its Unicode code-point notation."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"unicode/utf8\"\n)\n\nfunc main() {\n    text := \"Go, sí\"\n    fmt.Println(len(text), utf8.RuneCountInString(text))\n    for offset, r := range text {\n        fmt.Printf(\"%d %c\\n\", offset, r)\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Visually identical text can use different sequences of code points, such as an accented letter versus a base letter plus a combining accent. A rune-based length check alone may give different results for those inputs. Document whether your rule limits storage bytes, code points or displayed grapheme clusters."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Compare \"é\" with \"é\" using byte and rune counts. Then use utf8.ValidString to check a string containing an invalid UTF-8 byte."
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
              "slug": "go-basics-strings",
              "label": "17. Go strings: bytes, immutability and common operations"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Sort Go data and produce deterministic map output"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Unicode en Go: contar runes y entender offsets de bytes",
      "description": "Compara longitudes en bytes y runes, recorre texto UTF-8 y comprende por qué un rune no siempre equivale a un carácter visible.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un rune representa un punto de código Unicode y es un alias de int32. En UTF-8 puede ocupar varios bytes, por lo que len(text) y utf8.RuneCountInString(text) pueden diferir. Ninguna medida equivale necesariamente a los caracteres visibles que percibe quien lee.",
            "range sobre una cadena decodifica runes UTF-8 sucesivos. El índice es el desplazamiento en bytes, no la posición ordinal del rune. Convertir a []rune permite indexar puntos de código, pero crea otra secuencia y tampoco segmenta grupos de grafemas."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo usa una letra acentuada precompuesta. \"Go, sí\" contiene seis runes y siete bytes UTF-8. Los offsets indican dónde comienza í, codificada con dos bytes. Printf con %c imprime el rune como carácter; %U permite ver la notación del punto de código."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"unicode/utf8\"\n)\n\nfunc main() {\n    text := \"Go, sí\"\n    fmt.Println(len(text), utf8.RuneCountInString(text))\n    for offset, r := range text {\n        fmt.Printf(\"%d %c\\n\", offset, r)\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Textos visualmente iguales pueden tener secuencias distintas: una letra acentuada o una letra base más un acento combinado. Una validación por runes puede dar resultados diferentes. Documenta si tu regla limita bytes de almacenamiento, puntos de código o grupos de grafemas visibles."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Compara \"é\" con \"é\" contando bytes y runes. Después usa utf8.ValidString con una cadena que contenga un byte UTF-8 inválido."
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
              "slug": "go-basics-strings",
              "label": "17. Cadenas en Go: bytes, inmutabilidad y operaciones habituales"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Ordenar datos en Go y mostrar maps de forma determinista"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/unicode/utf8",
      "url": "https://pkg.go.dev/unicode/utf8"
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
