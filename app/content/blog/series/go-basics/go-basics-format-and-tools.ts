import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-format-and-tools",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 5
  },
  "translations": {
    "en": {
      "title": "Format and check Go code with gofmt and go vet",
      "description": "Use the built-in Go formatter, vet checks and tests to keep a small project consistent and catch common mistakes.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "gofmt applies Go formatting conventions mechanically. Use go fmt ./... from a module root to format its packages, or gofmt -w main.go to rewrite one file. Formatting settles indentation and spacing so reviews can focus on behavior. It does not change a faulty algorithm into a correct one.",
            "go vet examines source code for suspicious constructs, including some mismatches between formatting verbs and arguments. go test builds packages and executes their tests. These tools answer different questions, so a small validation loop should include all three rather than treating formatting as a complete code review."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Run the commands in the directory containing go.mod. The ./... pattern selects packages beneath the current directory, subject to Go package-pattern rules. Review the formatter diff before committing, then read any vet diagnostic alongside the source line that caused it."
          ],
          "code": {
            "language": "shell",
            "value": "go fmt ./...\ngo vet ./...\ngo test ./...\ngo build ./..."
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A clean vet result does not prove absence of races, input-validation problems or application bugs. Tests also depend on the cases you wrote. For example, a division function can pass a normal-input test while still failing on a zero divisor. Add behavioral expectations as you learn each feature."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Deliberately misformat a copy of your greeting program and format it. Then change a Printf integer verb to %s and inspect the diagnostic from go vet."
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
              "slug": "go-basics-modules",
              "label": "04. Go modules and packages: how imports find your code"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables and zero values in Go: var versus :="
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Formatear y revisar código Go con gofmt y go vet",
      "description": "Usa el formateador de Go, go vet y las pruebas para mantener un proyecto consistente y detectar errores frecuentes.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "gofmt aplica las convenciones de formato de Go. Usa go fmt ./... desde la raíz del módulo o gofmt -w main.go para reescribir un archivo. El formato resuelve sangría y espacios para concentrar la revisión en el comportamiento. No corrige un algoritmo equivocado.",
            "go vet examina construcciones sospechosas, incluidas ciertas incompatibilidades entre verbos de formato y argumentos. go test compila los paquetes y ejecuta sus pruebas. Cada herramienta responde una pregunta diferente; una revisión básica debe incluir las tres en lugar de considerar suficiente el formato."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Ejecuta los comandos donde está go.mod. El patrón ./... selecciona los paquetes bajo el directorio actual según las reglas de Go. Revisa el diff del formateador antes de guardar el cambio y lee cada diagnóstico de vet junto con la línea que lo causó."
          ],
          "code": {
            "language": "shell",
            "value": "go fmt ./...\ngo vet ./...\ngo test ./...\ngo build ./..."
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un resultado limpio de vet no demuestra ausencia de carreras, problemas de validación o errores de aplicación. Las pruebas dependen de los casos escritos. Una división puede pasar con una entrada normal y fallar con divisor cero. Añade expectativas de comportamiento al aprender cada característica."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Desordena el formato de una copia del saludo y aplícale el formateador. Después cambia un verbo entero de Printf por %s y revisa el diagnóstico de go vet."
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
              "slug": "go-basics-modules",
              "label": "04. Módulos y paquetes en Go: cómo funcionan los imports"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables y valores cero en Go: var frente a :="
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/cmd/go",
      "url": "https://pkg.go.dev/cmd/go"
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
