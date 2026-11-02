import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-command-line-flags",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 38
  },
  "translations": {
    "en": {
      "title": "Command-line flags in Go: parse options with flag",
      "description": "Build a small Go command with typed flags, usage help and semantic validation after parsing.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "The flag package parses named command-line options into typed values. Define flags before calling flag.Parse, then validate the resulting configuration. Syntax parsing can establish that a value is an integer, while application validation decides whether that integer is an acceptable repetition count.",
            "flag.String and flag.Int return pointers to the values that parsing will populate. Read them after Parse by dereferencing those pointers. The default command-line FlagSet also handles -h for help. Positional arguments remain accessible through flag.Args after option parsing has finished."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Save the example as main.go and run go run . -name Ada -repeat 2. It prints two greetings. The explicit upper bound keeps this teaching command small. The count check belongs after parsing because defaults and explicit flags should pass through the same validation rules."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"flag\"\n    \"fmt\"\n)\n\nfunc main() {\n    name := flag.String(\"name\", \"Go\", \"name to greet\")\n    repeat := flag.Int(\"repeat\", 1, \"number of greetings (1-10)\")\n    flag.Parse()\n    if *repeat < 1 || *repeat > 10 { fmt.Println(\"repeat must be 1-10\"); return }\n    for i := 0; i < *repeat; i++ { fmt.Println(\"Hello,\", *name) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "The standard flag parser stops parsing at the first non-flag argument. Do not assume flags placed after a positional filename are consumed. For reusable parsing tests, create a separate FlagSet rather than repeatedly using global flag variables, which retain process-wide state."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Run the command with -h, an invalid integer and repeat zero. Add a positional argument and inspect flag.Args so the boundary between options and operands is explicit."
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
              "slug": "go-basics-standard-library",
              "label": "32. Go standard library: connect readers, writers and tools"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Environment variables in Go: defaults and validation"
            },
            {
              "slug": "go-basics-http-server",
              "label": "39. Build a first HTTP handler in Go with net/http"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Opciones de consola en Go: analizar argumentos con flag",
      "description": "Crea un comando con opciones tipadas, ayuda de uso y validación semántica después del análisis.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "flag analiza opciones de consola y las convierte a valores tipados. Define las opciones antes de flag.Parse y valida después. El análisis puede comprobar que un valor es entero; la aplicación decide si es una cantidad de repeticiones aceptable.",
            "flag.String y flag.Int devuelven punteros a los valores que rellenará Parse. Léelos después desreferenciando esos punteros. El FlagSet por defecto atiende -h para ayuda. Los argumentos posicionales restantes están en flag.Args después del análisis."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Guarda main.go y ejecuta go run . -name Ada -repeat 2. Imprime dos saludos. El máximo explícito mantiene pequeño el comando educativo. Valida el contador después del análisis para aplicar las mismas reglas a valores por defecto y opciones explícitas."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"flag\"\n    \"fmt\"\n)\n\nfunc main() {\n    name := flag.String(\"name\", \"Go\", \"name to greet\")\n    repeat := flag.Int(\"repeat\", 1, \"number of greetings (1-10)\")\n    flag.Parse()\n    if *repeat < 1 || *repeat > 10 { fmt.Println(\"repeat must be 1-10\"); return }\n    for i := 0; i < *repeat; i++ { fmt.Println(\"Hello,\", *name) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "El analizador estándar se detiene en el primer argumento que no es opción. No supongas que consume flags después de un nombre de archivo posicional. Para pruebas reutilizables crea otro FlagSet, evitando variables globales que conservan estado del proceso."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Ejecuta con -h, entero inválido y repeat cero. Añade un argumento posicional e inspecciona flag.Args para distinguir opciones y operandos."
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
              "slug": "go-basics-standard-library",
              "label": "32. Biblioteca estándar de Go: conectar readers, writers y herramientas"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Variables de entorno en Go: valores por defecto y validación"
            },
            {
              "slug": "go-basics-http-server",
              "label": "39. Crear un primer handler HTTP en Go con net/http"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/flag",
      "url": "https://pkg.go.dev/flag"
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
