import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-close-channels",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 45
  },
  "translations": {
    "en": {
      "title": "Close Go channels: signal completion without panics",
      "description": "Use channel closure to finish a range loop, drain buffered values and avoid sends or repeated closes after completion.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Closing a channel tells receivers that no more values will be sent. Buffered values remain available, and a range loop stops after consuming them. The sender or coordinating owner should close the channel when all sends are complete. A receiver generally cannot know whether another sender is still active.",
            "A receive can return value, ok. ok is true for an actual sent value and false once the channel is closed and drained. The value is then the element type’s zero value. This is how a receiver distinguishes a sent zero from completion without reserving a special data value."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example puts two values into a buffer, closes it and ranges over the remaining data. The final receive prints 0 false. No goroutine is needed to demonstrate drainage because the two sends fit the buffer. A streaming producer would commonly close after its loop returns."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := make(chan int, 2)\n    values <- 10\n    values <- 20\n    close(values)\n    for value := range values { fmt.Println(value) }\n    value, ok := <-values\n    fmt.Println(value, ok)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Sending to a closed channel panics, as does closing an already closed or nil channel. A nil channel blocks on send and receive. Closing is a completion signal for receivers, not a command that automatically cancels every worker. Use a separate cancellation mechanism when work should stop early."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Include zero among the buffered values and observe that range still receives it. Then write down who would close a channel shared by several producers after a WaitGroup finishes."
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
              "slug": "go-basics-channels",
              "label": "44. Go channels: buffered and unbuffered communication"
            },
            {
              "slug": "go-basics-select",
              "label": "46. Go select: coordinate ready operations and cancellation"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Cerrar canales en Go: señalar finalización sin panic",
      "description": "Usa el cierre para terminar range, consumir valores pendientes y evitar envíos o cierres repetidos tras finalizar.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Cerrar un canal informa que no habrá más envíos. Los valores del buffer siguen disponibles y range termina después de consumirlos. El emisor o coordinador debe cerrar tras completar todos los envíos. Un receptor normalmente no sabe si otro emisor sigue activo.",
            "La recepción puede devolver valor, ok. ok es true para un valor enviado y false cuando el canal está cerrado y agotado. Entonces el valor es el cero del tipo. Así se distingue un cero enviado de la finalización sin reservar un dato especial."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo coloca dos valores en el buffer, cierra y recorre los datos pendientes. La última recepción imprime 0 false. No necesita goroutine porque ambos envíos caben. Un productor de streaming normalmente cerraría al terminar su bucle."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    values := make(chan int, 2)\n    values <- 10\n    values <- 20\n    close(values)\n    for value := range values { fmt.Println(value) }\n    value, ok := <-values\n    fmt.Println(value, ok)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Enviar a un canal cerrado causa panic; también cerrarlo otra vez o cerrar uno nil. Un canal nil bloquea envíos y recepciones. Cerrar señala finalización a receptores, sin cancelar automáticamente trabajadores. Usa cancelación separada para detener trabajo anticipadamente."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Incluye cero entre los valores y observa que range lo recibe. Anota quién cerraría un canal de varios productores al completar WaitGroup."
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
              "slug": "go-basics-channels",
              "label": "44. Canales en Go: comunicación con y sin buffer"
            },
            {
              "slug": "go-basics-select",
              "label": "46. select en Go: coordinar operaciones listas y cancelación"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/ref/spec#Close",
      "url": "https://go.dev/ref/spec#Close"
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
