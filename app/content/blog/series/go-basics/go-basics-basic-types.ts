import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-basic-types",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 8
  },
  "translations": {
    "en": {
      "title": "Go basic types: integers, floats, booleans and strings",
      "description": "Choose Go basic types, understand int and fixed-width integers, and recognize integer division and floating-point limits.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Go gives every variable a static type. Common choices include int for ordinary integer calculations, float64 for approximate real-number arithmetic, bool for conditions and string for text. Fixed-width types such as int64 and uint32 are useful when a data format requires a specific width.",
            "int has an implementation-dependent size of 32 or 64 bits. A byte is an alias for uint8 and a rune is an alias for int32. These names communicate intent when working with encoded text. A string stores bytes, so its length is not necessarily a count of visible characters."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example prints 2 for integer division and 2.5 when both operands are converted to float64. Printf with %T reveals the type of each argument. Go does not automatically mix unrelated numeric variable types, even if their current values appear compatible."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    total, count := 5, 2\n    fmt.Println(total / count)\n    fmt.Println(float64(total) / float64(count))\n    fmt.Printf(\"%T %T\\n\", total, float64(total))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Binary floating-point does not represent every decimal fraction exactly. For a money exercise, store a defined smallest unit as an integer and document the rounding rule. Unsigned integers also wrap during arithmetic; choosing uint does not substitute for checking a business rule such as a nonnegative balance."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Print the types of a string, a rune literal and a byte variable. Compare 5/2, float64(5/2) and float64(5)/2 and explain when information was lost."
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
              "slug": "go-basics-install",
              "label": "02. Install Go and understand the basic development workflow"
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constants and iota in Go: represent fixed values"
            },
            {
              "slug": "go-basics-conversions",
              "label": "09. Type conversion and string parsing in Go"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Tipos básicos en Go: enteros, flotantes, booleanos y cadenas",
      "description": "Elige tipos básicos en Go, distingue int de enteros de ancho fijo y comprende división entera y límites de punto flotante.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Go asigna un tipo estático a cada variable. Son habituales int para cálculos enteros, float64 para aritmética real aproximada, bool para condiciones y string para texto. Los tipos de ancho fijo, como int64 y uint32, sirven cuando un formato exige un tamaño concreto.",
            "int tiene un tamaño de 32 o 64 bits según la implementación. byte es un alias de uint8 y rune de int32. Esos nombres expresan intención al trabajar con texto codificado. Una cadena almacena bytes, por lo que su longitud no equivale necesariamente a caracteres visibles."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo imprime 2 en la división entera y 2.5 al convertir ambos operandos a float64. Printf con %T muestra el tipo de cada argumento. Go no mezcla automáticamente variables de tipos numéricos distintos aunque sus valores actuales parezcan compatibles."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    total, count := 5, 2\n    fmt.Println(total / count)\n    fmt.Println(float64(total) / float64(count))\n    fmt.Printf(\"%T %T\\n\", total, float64(total))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "El punto flotante binario no representa exactamente todas las fracciones decimales. Para practicar con dinero, usa una unidad mínima definida como entero y documenta el redondeo. Los enteros sin signo también desbordan; elegir uint no sustituye validar una regla como saldo no negativo."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Imprime los tipos de una cadena, un literal rune y una variable byte. Compara 5/2, float64(5/2) y float64(5)/2 y explica cuándo se perdió información."
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
              "slug": "go-basics-install",
              "label": "02. Instalar Go y entender el flujo básico de desarrollo"
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constantes e iota en Go: representar valores fijos"
            },
            {
              "slug": "go-basics-conversions",
              "label": "09. Conversión de tipos y lectura de números en Go"
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
