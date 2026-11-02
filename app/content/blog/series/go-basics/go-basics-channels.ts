import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-channels",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 44
  },
  "translations": {
    "en": {
      "title": "Go channels: buffered and unbuffered communication",
      "description": "Send typed values between Go goroutines and understand when channel operations block and what buffering changes.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A channel carries values of a declared type between goroutines. An unbuffered send waits for a matching receive. A buffered channel can accept values until its capacity is full. Receives wait when no value is available unless the channel is closed and drained. These blocking rules are part of the design.",
            "Use directional channel parameters to express ownership: chan<- T permits sending and <-chan T permits receiving. The producer in the example can send but cannot receive through its parameter. Channel operations synchronize communication; they do not make arbitrary objects passed through a channel immune to later concurrent mutation."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The producer sends one string and main receives it. The channel’s capacity of one allows the send to complete before main is ready. A buffer of zero would also work because the producer runs concurrently. Moving the send into main before the receive would deadlock with an unbuffered channel."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc produce(out chan<- string) { out <- \"ready\" }\n\nfunc main() {\n    messages := make(chan string, 1)\n    go produce(messages)\n    fmt.Println(<-messages)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "len(ch) is only an observation of currently queued elements, not a reliable coordination decision. Another goroutine may act immediately afterward. Use a blocking operation or select to express the decision atomically, and do not use channel capacity as a substitute for a bounded worker-lifecycle design."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change the capacity from one to zero and explain why the program still finishes. Then move the send into main and identify the missing receiver before attempting to run that variant."
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
              "slug": "go-basics-waitgroup",
              "label": "43. sync.WaitGroup in Go: wait for a known set of tasks"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Close Go channels: signal completion without panics"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Canales en Go: comunicación con y sin buffer",
      "description": "Envía valores tipados entre goroutines y comprende cuándo se bloquean operaciones y qué cambia con el buffer.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un canal transporta valores de tipo declarado entre goroutines. Un envío sin buffer espera una recepción. Con buffer acepta valores hasta llenar capacidad. La recepción espera si no hay datos, salvo canal cerrado y agotado. Estas reglas de bloqueo forman parte del diseño.",
            "Usa parámetros direccionales para expresar propiedad: chan<- T permite enviar y <-chan T recibir. El productor del ejemplo solo envía. Las operaciones sincronizan comunicación, pero no vuelven inmunes a modificaciones concurrentes posteriores los objetos transportados."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El productor envía una cadena y main la recibe. La capacidad uno permite completar el envío antes de que main esté preparado. Capacidad cero también funcionaría al ejecutarse el productor concurrentemente. Mover el envío a main antes de recibir bloquearía con canal sin buffer."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc produce(out chan<- string) { out <- \"ready\" }\n\nfunc main() {\n    messages := make(chan string, 1)\n    go produce(messages)\n    fmt.Println(<-messages)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "len(ch) solo observa elementos en cola; no sirve para decidir coordinación de forma fiable. Otra goroutine puede actuar enseguida. Usa una operación bloqueante o select para decidir atómicamente y no sustituyas con capacidad un diseño de duración acotada de trabajadores."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia capacidad de uno a cero y explica por qué termina. Mueve el envío a main e identifica el receptor ausente antes de ejecutar esa variante."
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
              "slug": "go-basics-waitgroup",
              "label": "43. sync.WaitGroup en Go: esperar un conjunto de tareas"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Cerrar canales en Go: señalar finalización sin panic"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/ref/spec#Channel_types",
      "url": "https://go.dev/ref/spec#Channel_types"
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
