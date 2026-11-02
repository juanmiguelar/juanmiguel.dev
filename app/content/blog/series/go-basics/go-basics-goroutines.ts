import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-goroutines",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 42
  },
  "translations": {
    "en": {
      "title": "Go concurrency: start a goroutine and wait for its result",
      "description": "Understand goroutine lifetimes and use this guide to learn synchronization, channels, cancellation and race detection.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A goroutine is a concurrently executing function started with go. Starting it does not wait for completion. When main returns, the program exits without waiting for other goroutines. Give concurrent work an explicit owner, completion signal and stopping condition rather than assuming that a quick function will finish in time.",
            "This block introduces WaitGroup, channels, channel closure, select, context and mutexes. These primitives solve different coordination problems. Concurrency structures independent activities; it does not guarantee that they run simultaneously or improve speed. Begin with a correct sequential program and add concurrency for a demonstrated need."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example creates an unbuffered channel and starts one goroutine that sends 42. main receives from the channel, waiting until the value can be transferred, then prints it. The rendezvous makes completion relevant to the program’s lifetime without relying on a sleep or scheduler timing."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    result := make(chan int)\n    go func() { result <- 42 }()\n    fmt.Println(<-result)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Every started goroutine needs a way to finish. A goroutine blocked forever on a send whose receiver has gone away leaks work and resources. Adding a large channel buffer only delays some blocking problems. Later examples make cancellation visible to both senders and receivers."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Remove the receive and observe that the program no longer waits for the result. Restore it, then write down which goroutine owns each send and receive before adding a second worker."
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
              "slug": "go-basics-waitgroup",
              "label": "43. sync.WaitGroup in Go: wait for a known set of tasks"
            },
            {
              "slug": "go-basics-channels",
              "label": "44. Go channels: buffered and unbuffered communication"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Close Go channels: signal completion without panics"
            },
            {
              "slug": "go-basics-select",
              "label": "46. Go select: coordinate ready operations and cancellation"
            },
            {
              "slug": "go-basics-context",
              "label": "47. Go context: propagate cancellation and deadlines"
            },
            {
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex in Go: protect a shared invariant"
            },
            {
              "slug": "go-basics-race-detector",
              "label": "49. Go race detector: find executed data races with -race"
            },
            {
              "slug": "go-basics-final-project",
              "label": "50. Go basics final project: a tested JSON HTTP endpoint"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Go unit tests: table-driven cases and useful failures"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Concurrencia en Go: iniciar una goroutine y esperar su resultado",
      "description": "Entiende la duración de las goroutines y estudia sincronización, canales, cancelación y detección de carreras.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una goroutine ejecuta una función concurrentemente y se inicia con go. Iniciarla no espera a que termine. Cuando main retorna, el programa acaba sin esperar las demás goroutines. Asigna al trabajo concurrente responsable, señal de finalización y condición de parada.",
            "Este bloque presenta WaitGroup, canales, cierre, select, context y mutex. Resuelven problemas de coordinación distintos. La concurrencia estructura actividades independientes sin garantizar ejecución simultánea ni mejoras de velocidad. Parte de un programa secuencial correcto y añade concurrencia por una necesidad demostrada."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo crea un canal sin buffer e inicia una goroutine que envía 42. main recibe y espera la transferencia antes de imprimir. El encuentro sincroniza el trabajo con la duración del programa sin depender de sleep ni del momento elegido por el planificador."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    result := make(chan int)\n    go func() { result <- 42 }()\n    fmt.Println(<-result)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Cada goroutine necesita poder terminar. Una bloqueada para siempre enviando a un receptor que ya salió retiene trabajo y recursos. Añadir un buffer grande solo retrasa algunos bloqueos. Los ejemplos posteriores hacen visible la cancelación para emisores y receptores."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Elimina la recepción y observa que el programa ya no espera el resultado. Restáurala y anota quién posee cada envío y recepción antes de añadir otro trabajador."
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
              "slug": "go-basics-waitgroup",
              "label": "43. sync.WaitGroup en Go: esperar un conjunto de tareas"
            },
            {
              "slug": "go-basics-channels",
              "label": "44. Canales en Go: comunicación con y sin buffer"
            },
            {
              "slug": "go-basics-close-channels",
              "label": "45. Cerrar canales en Go: señalar finalización sin panic"
            },
            {
              "slug": "go-basics-select",
              "label": "46. select en Go: coordinar operaciones listas y cancelación"
            },
            {
              "slug": "go-basics-context",
              "label": "47. context en Go: propagar cancelación y plazos"
            },
            {
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex en Go: proteger una regla de estado compartido"
            },
            {
              "slug": "go-basics-race-detector",
              "label": "49. Detector de carreras en Go: encontrar accesos con -race"
            },
            {
              "slug": "go-basics-final-project",
              "label": "50. Proyecto final de Go: endpoint HTTP JSON con pruebas"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Pruebas unitarias en Go: tablas de casos y fallos útiles"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/tour/concurrency/1",
      "url": "https://go.dev/tour/concurrency/1"
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
