import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-defer",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 26
  },
  "translations": {
    "en": {
      "title": "Go defer: release resources at the right boundary",
      "description": "Understand when deferred Go calls run, argument evaluation and why deferring cleanup inside a long loop can retain resources.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "defer schedules a function call to run when the enclosing function returns. Use it after acquiring a resource successfully so cleanup stays close to acquisition. Multiple deferred calls run in reverse order. A defer belongs to the surrounding function, even when written inside an if block or loop.",
            "The deferred function value and its arguments are evaluated when the defer statement executes. A closure can instead read a captured variable when the closure finally runs. This difference matters for logging, cleanup parameters and code that updates a result before returning."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example first prints body 2. Deferred calls then execute in reverse order: closure 2 and argument 1. The direct Println argument captured the initial integer value, while the closure reads the variable after it has changed. Neither deferred call runs immediately at its declaration."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    value := 1\n    defer fmt.Println(\"argument\", value)\n    defer func() { fmt.Println(\"closure\", value) }()\n    value = 2\n    fmt.Println(\"body\", value)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Deferring file closure inside a loop can leave every file open until the whole function exits. Move one iteration’s resource work into a helper function or close explicitly after each iteration. Also inspect close errors when they can report a failed write; merely scheduling Close does not handle that failure."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a third deferred print and predict the complete order. Then write a helper that opens and closes one resource per call rather than retaining many resources in one loop."
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
              "slug": "go-basics-functions",
              "label": "22. Go functions: parameters, results and small contracts"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Go scope and closures: capture variables deliberately"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Error handling in Go: return, check and add context"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "defer en Go: liberar recursos en el límite correcto",
      "description": "Entiende cuándo se ejecuta defer, cómo evalúa argumentos y por qué diferir limpieza en un bucle largo puede retener recursos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "defer programa una llamada para cuando retorne la función que la contiene. Úsalo después de adquirir correctamente un recurso, dejando la limpieza cerca de la adquisición. Varias llamadas diferidas se ejecutan en orden inverso. defer pertenece a la función aunque esté dentro de un if o bucle.",
            "La función diferida y sus argumentos se evalúan al ejecutar la instrucción defer. En cambio, un closure puede leer la variable capturada cuando finalmente se ejecuta. La diferencia importa para logs, parámetros de limpieza y código que cambia resultados antes del retorno."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo imprime primero body 2. Después ejecuta defer en orden inverso: closure 2 y argument 1. El argumento directo de Println conservó el entero inicial; el closure lee la variable ya cambiada. Ninguna llamada diferida se ejecuta al declararse."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    value := 1\n    defer fmt.Println(\"argument\", value)\n    defer func() { fmt.Println(\"closure\", value) }()\n    value = 2\n    fmt.Println(\"body\", value)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Diferir el cierre de archivos dentro de un bucle puede dejarlos todos abiertos hasta salir de la función. Mueve cada iteración a una función auxiliar o cierra explícitamente. Revisa errores de cierre cuando puedan informar de escrituras fallidas; programar Close no gestiona ese fallo."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade una tercera impresión diferida y predice el orden completo. Después escribe una función que abra y cierre un recurso por llamada, evitando retener varios en un bucle."
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
              "slug": "go-basics-functions",
              "label": "22. Funciones en Go: parámetros, resultados y contratos pequeños"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Ámbitos y closures en Go: capturar variables con intención"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Errores en Go: devolver, comprobar y añadir contexto"
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
