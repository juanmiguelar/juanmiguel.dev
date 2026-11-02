import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-conversions",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 9
  },
  "translations": {
    "en": {
      "title": "Type conversion and string parsing in Go",
      "description": "Convert numeric values explicitly and parse strings with strconv.Atoi while checking invalid input and conversion limits.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An explicit conversion such as float64(n) changes a value to another compatible type. Parsing a textual number is a different operation: strconv.Atoi reads decimal text and returns an int plus an error. Use parsing for user input and conversions when the source value already has a numeric type.",
            "Go requires explicit conversions between distinct numeric variable types. Converting a float to an integer discards its fractional part toward zero. Converting to a narrower integer can lose high bits without returning an error, so validate the range before storing a large input in a small type."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example accepts the string \"42\", checks the returned error and computes half using floating-point division. Atoi also rejects input outside the int range for the platform. If a protocol requires exactly 64 bits, use strconv.ParseInt with base 10 and bitSize 64 instead."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    n, err := strconv.Atoi(\"42\")\n    if err != nil {\n        fmt.Println(\"invalid number:\", err)\n        return\n    }\n    fmt.Println(float64(n) / 2)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "string(65) produces the UTF-8 representation of the Unicode code point 65, which is \"A\". It does not produce the decimal digits \"65\". Use strconv.Itoa for that output. Keep conversions, formatting and parsing separate when reading a data flow."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change the input to \"forty-two\", then to \" 42 \". Decide whether your application should trim whitespace with strings.TrimSpace before parsing."
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
              "slug": "go-basics-basic-types",
              "label": "08. Go basic types: integers, floats, booleans and strings"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Go conditionals: if, switch and early returns"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Conversión de tipos y lectura de números en Go",
      "description": "Convierte valores numéricos explícitamente y usa strconv.Atoi para leer cadenas, comprobando entradas inválidas y límites.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una conversión explícita como float64(n) cambia un valor a otro tipo compatible. Interpretar texto numérico es otra operación: strconv.Atoi lee una cadena decimal y devuelve int y error. Usa análisis de texto para entradas y conversiones cuando el valor ya tenga un tipo numérico.",
            "Go exige conversiones explícitas entre variables de tipos numéricos distintos. Convertir un flotante a entero descarta la fracción hacia cero. Convertir a un entero más estrecho puede perder bits sin devolver error; valida el rango antes de guardar una entrada grande en un tipo pequeño."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo acepta la cadena \"42\", comprueba el error y calcula la mitad con división de punto flotante. Atoi también rechaza valores fuera del rango de int de la plataforma. Si un protocolo requiere exactamente 64 bits, usa strconv.ParseInt con base 10 y bitSize 64."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    n, err := strconv.Atoi(\"42\")\n    if err != nil {\n        fmt.Println(\"invalid number:\", err)\n        return\n    }\n    fmt.Println(float64(n) / 2)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "string(65) produce la representación UTF-8 del punto de código Unicode 65, que es \"A\". No produce los dígitos decimales \"65\". Usa strconv.Itoa para esa salida. Distingue conversión, formato y análisis de texto al revisar el recorrido de un dato."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia la entrada por \"cuarenta y dos\" y después por \" 42 \". Decide si tu aplicación debe quitar espacios con strings.TrimSpace antes de analizar."
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
              "slug": "go-basics-basic-types",
              "label": "08. Tipos básicos en Go: enteros, flotantes, booleanos y cadenas"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Condicionales en Go: if, switch y retornos tempranos"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/strconv",
      "url": "https://pkg.go.dev/strconv"
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
