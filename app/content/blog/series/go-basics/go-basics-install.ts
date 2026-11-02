import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-install",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 2
  },
  "translations": {
    "en": {
      "title": "Install Go and understand the basic development workflow",
      "description": "Set up Go, verify the toolchain and learn when to use go run, go build and go test in a small local module.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Install Go using the instructions for your operating system on go.dev, then verify the installation with go version. The toolchain includes a compiler, formatter, test runner and package tools. You can start with a terminal and a text editor; editor integration can come after the first program runs.",
            "A module is a project boundary recorded in go.mod. Create it inside a new directory with go mod init. The example uses an illustrative module path, example.com/hello; it does not download code from that address. Your own published library would use the path from which consumers import it."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Run these commands in a terminal, then add the main.go file from the next lesson. After that, go run . compiles and executes the package, while go build . produces a binary for the current platform. Use go test ./... once the module contains test files."
          ],
          "code": {
            "language": "shell",
            "value": "go version\nmkdir hello\ncd hello\ngo mod init example.com/hello\ngo env GOMOD"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "If the terminal cannot find go, check the installation directory and PATH using the official platform instructions. Reopen the terminal after changing its environment. Avoid setting GOPATH as a workaround for a missing executable; a module-based exercise can live outside GOPATH."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Write down the output of go version and go env GOMOD. After adding main.go, compare go run . with go build . and locate the resulting executable."
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
              "slug": "go-basics-hello-world",
              "label": "03. Hello World in Go: packages, imports and main"
            },
            {
              "slug": "go-basics-modules",
              "label": "04. Go modules and packages: how imports find your code"
            },
            {
              "slug": "go-basics-format-and-tools",
              "label": "05. Format and check Go code with gofmt and go vet"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables and zero values in Go: var versus :="
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constants and iota in Go: represent fixed values"
            },
            {
              "slug": "go-basics-basic-types",
              "label": "08. Go basic types: integers, floats, booleans and strings"
            },
            {
              "slug": "go-basics-conversions",
              "label": "09. Type conversion and string parsing in Go"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Go conditionals: if, switch and early returns"
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
      "title": "Instalar Go y entender el flujo básico de desarrollo",
      "description": "Instala Go, verifica las herramientas y aprende cuándo usar go run, go build y go test dentro de un módulo local.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Instala Go siguiendo las instrucciones de go.dev para tu sistema operativo y verifica la instalación con go version. Las herramientas incluyen compilador, formateador, ejecutor de pruebas y gestión de paquetes. Puedes comenzar con una terminal y un editor de texto; la integración del editor puede esperar hasta ejecutar el primer programa.",
            "Un módulo delimita un proyecto y se registra en go.mod. Créalo en un directorio nuevo con go mod init. El ejemplo usa la ruta ilustrativa example.com/hello; no descarga código desde esa dirección. Una biblioteca publicada usaría la ruta desde la cual otros proyectos la importan."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Ejecuta estos comandos en una terminal y añade el archivo main.go de la siguiente lección. Después, go run . compila y ejecuta el paquete, mientras que go build . produce un binario para la plataforma actual. Usa go test ./... cuando el módulo tenga archivos de prueba."
          ],
          "code": {
            "language": "shell",
            "value": "go version\nmkdir hello\ncd hello\ngo mod init example.com/hello\ngo env GOMOD"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Si la terminal no encuentra go, revisa el directorio de instalación y PATH según las instrucciones oficiales. Abre otra terminal después de cambiar el entorno. Evita modificar GOPATH para compensar un ejecutable ausente; un ejercicio basado en módulos puede vivir fuera de GOPATH."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Anota la salida de go version y go env GOMOD. Cuando añadas main.go, compara go run . con go build . y localiza el ejecutable generado."
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
              "slug": "go-basics-hello-world",
              "label": "03. Hola mundo en Go: paquetes, imports y main"
            },
            {
              "slug": "go-basics-modules",
              "label": "04. Módulos y paquetes en Go: cómo funcionan los imports"
            },
            {
              "slug": "go-basics-format-and-tools",
              "label": "05. Formatear y revisar código Go con gofmt y go vet"
            },
            {
              "slug": "go-basics-variables",
              "label": "06. Variables y valores cero en Go: var frente a :="
            },
            {
              "slug": "go-basics-constants",
              "label": "07. Constantes e iota en Go: representar valores fijos"
            },
            {
              "slug": "go-basics-basic-types",
              "label": "08. Tipos básicos en Go: enteros, flotantes, booleanos y cadenas"
            },
            {
              "slug": "go-basics-conversions",
              "label": "09. Conversión de tipos y lectura de números en Go"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Condicionales en Go: if, switch y retornos tempranos"
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
      "title": "Go: go.dev/doc/install",
      "url": "https://go.dev/doc/install"
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
