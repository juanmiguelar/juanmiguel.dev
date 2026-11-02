import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-hello-world",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 3
  },
  "translations": {
    "en": {
      "title": "Hello World in Go: packages, imports and main",
      "description": "Write your first Go program and understand package main, imports, function declarations and formatted output.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A runnable Go command uses package main and a main function without parameters or return values. Save the example as main.go inside the module created in the installation lesson. Execute go run . from that directory. The program prints one greeting and then exits when main returns.",
            "The import declaration makes the fmt package available in this file. Println is an exported function, so its name begins with a capital letter. Go checks imports per file: importing fmt in another file does not make it available here. Unused imports are compile errors."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Println writes its arguments followed by a newline. The string is enclosed in double quotes, and the braces delimit the function body. Go inserts many semicolons automatically, so everyday Go code rarely writes them explicitly. Keep the opening brace on the same line as the function signature."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A file named main.go does not become executable solely because of its filename. Its package and entry function determine that behavior. Renaming main to greet leaves package main without the required entry point; changing the package to hello turns it into a library package."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Print two lines, then remove the fmt import and read the compiler diagnostic. Restore it and run go fmt . before moving on to modules."
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
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Hola mundo en Go: paquetes, imports y main",
      "description": "Escribe tu primer programa en Go y comprende package main, imports, declaraciones de funciones y salida por consola.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un comando ejecutable de Go usa package main y una función main sin parámetros ni valores de retorno. Guarda el ejemplo como main.go dentro del módulo de la lección de instalación. Ejecuta go run . desde ese directorio. El programa imprime un saludo y termina cuando main retorna.",
            "La declaración import permite usar el paquete fmt en este archivo. Println es una función exportada y por eso su nombre comienza con mayúscula. Go revisa los imports por archivo: importar fmt en otro archivo no lo hace disponible aquí. Un import sin uso produce un error de compilación."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Println escribe sus argumentos y añade un salto de línea. La cadena lleva comillas dobles y las llaves delimitan el cuerpo de la función. Go inserta muchos puntos y coma automáticamente, por lo que rara vez se escriben de forma explícita. Mantén la llave inicial en la misma línea que la firma."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un archivo llamado main.go no se vuelve ejecutable solo por su nombre. El paquete y la función de entrada determinan ese comportamiento. Renombrar main a greet deja package main sin el punto de entrada requerido; cambiar el paquete a hello lo convierte en un paquete de biblioteca."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Imprime dos líneas, elimina el import de fmt y lee el diagnóstico del compilador. Restáuralo y ejecuta go fmt . antes de continuar con módulos."
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
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/doc/tutorial/getting-started",
      "url": "https://go.dev/doc/tutorial/getting-started"
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
