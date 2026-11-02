import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-select",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 46
  },
  "translations": {
    "en": {
      "title": "Go select: coordinate ready operations and cancellation",
      "description": "Choose between Go channel operations with select and avoid busy loops and assumptions about ready-case priority.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "select waits until a channel send or receive can proceed, then executes one ready case. If several cases are ready, one is chosen pseudo-randomly; source order does not establish priority. Use it to coordinate input, output and cancellation without polling each channel in a tight loop.",
            "A default branch runs immediately when no communication can proceed. That is useful for a deliberate nonblocking attempt, but adding default to an otherwise blocking loop can make it spin and consume CPU. A closed cancellation channel is always ready to receive from, providing a broadcast signal."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example chooses between work and a done channel. With one buffered job and done still open, it prints the job. If you close done before select, both cases may be ready and either outcome is valid. Cancellation does not promise priority over already-ready work."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    jobs := make(chan string, 1)\n    done := make(chan struct{})\n    jobs <- \"compile\"\n    select {\n    case job := <-jobs:\n        fmt.Println(job)\n    case <-done:\n        fmt.Println(\"cancelled\")\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A receive from a closed data channel stays ready and returns zero values. In a loop, check ok and return or disable that case by assigning its channel variable to nil. Otherwise the loop can repeatedly process nonexistent data and consume CPU after the producer finishes."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Close done before selecting and run the program repeatedly without asserting a fixed winner. Then write a loop that exits cleanly when its work channel is closed."
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
              "slug": "go-basics-goroutines",
              "label": "42. Go concurrency: start a goroutine and wait for its result"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Close Go channels: signal completion without panics"
            },
            {
              "slug": "go-basics-context",
              "label": "47. Go context: propagate cancellation and deadlines"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "select en Go: coordinar operaciones listas y cancelación",
      "description": "Elige operaciones de canales con select y evita bucles de espera activa y supuestos sobre prioridad entre casos listos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "select espera hasta poder enviar o recibir en un canal y ejecuta un caso listo. Si hay varios listos, elige uno pseudoaleatoriamente; el orden escrito no establece prioridad. Sirve para coordinar entrada, salida y cancelación sin consultar canales continuamente.",
            "La rama default se ejecuta inmediatamente cuando ninguna comunicación puede avanzar. Sirve para un intento deliberadamente no bloqueante; dentro de un bucle puede crear espera activa y consumir CPU. Un canal de cancelación cerrado siempre está listo para recibir y sirve como señal general."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo elige entre trabajo y done. Con un trabajo en buffer y done abierto, imprime el trabajo. Si cierras done antes del select, ambos pueden estar listos y cualquiera de los resultados es válido. Cancelación no garantiza prioridad sobre trabajo preparado."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    jobs := make(chan string, 1)\n    done := make(chan struct{})\n    jobs <- \"compile\"\n    select {\n    case job := <-jobs:\n        fmt.Println(job)\n    case <-done:\n        fmt.Println(\"cancelled\")\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Recibir de un canal de datos cerrado siempre está listo y devuelve ceros. En un bucle comprueba ok y retorna o desactiva el caso asignando nil a la variable canal. De lo contrario puede procesar datos inexistentes repetidamente y consumir CPU."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cierra done antes y ejecuta varias veces sin exigir ganador fijo. Después escribe un bucle que termine limpiamente al cerrar su canal de trabajo."
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
              "slug": "go-basics-goroutines",
              "label": "42. Concurrencia en Go: iniciar una goroutine y esperar su resultado"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Cerrar canales en Go: señalar finalización sin panic"
            },
            {
              "slug": "go-basics-context",
              "label": "47. context en Go: propagar cancelación y plazos"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/ref/spec#Select_statements",
      "url": "https://go.dev/ref/spec#Select_statements"
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
