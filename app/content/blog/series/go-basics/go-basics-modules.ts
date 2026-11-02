import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-modules",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 4
  },
  "translations": {
    "en": {
      "title": "Go modules and packages: how imports find your code",
      "description": "Organize a small Go module with two packages and understand module paths, exported names and go mod tidy.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A module contains one or more packages and has a go.mod file at its root. A package usually consists of Go source files in a single directory. Its import path combines the module path with the package directory. This distinction explains why a project can have several packages but only one go.mod.",
            "Create the example in a new module initialized with go mod init example.com/hello. Put main.go at the root and hello.go inside a greeting directory. The exported Hello function begins with an uppercase letter so that main can call it from another package."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Running go run . compiles the command and its imported package together. Both files use only local code and the standard library. If you later add an external dependency, go mod tidy reconciles the dependency metadata with imports and tests; review its changes to go.mod and go.sum."
          ],
          "code": {
            "language": "go",
            "value": "// greeting/hello.go\npackage greeting\n\nfunc Hello() string { return \"Hello, Go!\" }\n\n// main.go (a separate file)\npackage main\n\nimport (\n    \"fmt\"\n    \"example.com/hello/greeting\"\n)\n\nfunc main() { fmt.Println(greeting.Hello()) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Packages cannot form import cycles. If greeting imports the main package to access a shared value, the dependency direction becomes a problem. Pass the needed value as a parameter or move shared behavior into a lower-level package instead of adding a circular import."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a name parameter to Hello and call it from main. Rename Hello to hello and observe why the other package can no longer access it."
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
              "slug": "go-basics-hello-world",
              "label": "03. Hello World in Go: packages, imports and main"
            },
            {
              "slug": "go-basics-format-and-tools",
              "label": "05. Format and check Go code with gofmt and go vet"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Módulos y paquetes en Go: cómo funcionan los imports",
      "description": "Organiza un módulo Go con dos paquetes y entiende rutas de importación, nombres exportados y go mod tidy.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un módulo contiene uno o más paquetes y tiene go.mod en su raíz. Un paquete suele reunir los archivos Go de un directorio. Su ruta de importación combina la ruta del módulo con el directorio del paquete. Por eso un proyecto puede tener varios paquetes y un único go.mod.",
            "Crea el ejemplo en un módulo nuevo inicializado con go mod init example.com/hello. Coloca main.go en la raíz y hello.go dentro de greeting. La función exportada Hello comienza con mayúscula para que main pueda llamarla desde otro paquete."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "go run . compila el comando y el paquete importado. Ambos archivos usan únicamente código local y biblioteca estándar. Si después añades una dependencia externa, go mod tidy ajusta los metadatos según imports y pruebas; revisa sus cambios en go.mod y go.sum."
          ],
          "code": {
            "language": "go",
            "value": "// greeting/hello.go\npackage greeting\n\nfunc Hello() string { return \"Hello, Go!\" }\n\n// main.go (a separate file)\npackage main\n\nimport (\n    \"fmt\"\n    \"example.com/hello/greeting\"\n)\n\nfunc main() { fmt.Println(greeting.Hello()) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Los paquetes no pueden formar ciclos de importación. Si greeting importa el paquete main para acceder a un valor compartido, la dirección de las dependencias se vuelve problemática. Pasa el valor como parámetro o mueve el comportamiento compartido a otro paquete, evitando el ciclo."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade un parámetro de nombre a Hello y úsalo desde main. Renombra Hello a hello y observa por qué el otro paquete deja de poder acceder."
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
              "slug": "go-basics-hello-world",
              "label": "03. Hola mundo en Go: paquetes, imports y main"
            },
            {
              "slug": "go-basics-format-and-tools",
              "label": "05. Formatear y revisar código Go con gofmt y go vet"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/doc/tutorial/create-module",
      "url": "https://go.dev/doc/tutorial/create-module"
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
