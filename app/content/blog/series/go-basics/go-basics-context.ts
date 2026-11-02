import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-context",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 47
  },
  "translations": {
    "en": {
      "title": "Go context: propagate cancellation and deadlines",
      "description": "Pass cancellation through Go function boundaries with context.Context and release derived-context resources with cancel.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "context.Context carries cancellation, deadlines and request-scoped values across API boundaries. Pass it as the first parameter to operations that may block. Cancellation is cooperative: code must observe ctx.Done or call APIs that honor the context. Canceling does not forcibly terminate a goroutine.",
            "WithCancel returns a derived context and a cancel function. Call cancel when the operation is finished to release associated resources. WithTimeout adds a deadline and still needs cancellation cleanup. Avoid storing contexts in long-lived structs or using context values as a general configuration container."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example deliberately cancels before calling wait so its output is deterministic. wait immediately observes the closed Done channel and returns context.Canceled. In a real worker, select would often include both a work channel and ctx.Done so idle waiting can be interrupted."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc wait(ctx context.Context) error {\n    <-ctx.Done()\n    return ctx.Err()\n}\n\nfunc main() {\n    ctx, cancel := context.WithCancel(context.Background())\n    defer cancel()\n    cancel()\n    fmt.Println(wait(ctx))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Canceling a context does not prove workers have exited. Combine cancellation with a WaitGroup or completion channel when shutdown requires that guarantee. Also check cancellation around blocking sends, not only before computing a result; a receiver may have left while the work was running."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Use errors.Is to recognize context.Canceled. Then create a worker that waits on either a jobs channel or ctx.Done and signals completion before main returns."
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
              "slug": "go-basics-select",
              "label": "46. Go select: coordinate ready operations and cancellation"
            },
            {
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex in Go: protect a shared invariant"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "context en Go: propagar cancelación y plazos",
      "description": "Propaga cancelación entre funciones con context.Context y libera recursos de contextos derivados con cancel.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "context.Context transporta cancelación, plazos y valores de solicitud entre APIs. Pásalo como primer parámetro en operaciones bloqueantes. La cancelación es cooperativa: el código debe observar ctx.Done o usar APIs compatibles. Cancelar no termina una goroutine por la fuerza.",
            "WithCancel devuelve contexto derivado y función cancel. Llama a cancel al finalizar para liberar recursos asociados. WithTimeout añade un plazo y también necesita limpieza. Evita guardar contextos en structs duraderos o usar sus valores como configuración general."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo cancela antes de wait para obtener salida determinista. wait observa Done cerrado y devuelve context.Canceled. En un trabajador real, select incluiría tanto el canal de trabajo como ctx.Done para interrumpir la espera."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc wait(ctx context.Context) error {\n    <-ctx.Done()\n    return ctx.Err()\n}\n\nfunc main() {\n    ctx, cancel := context.WithCancel(context.Background())\n    defer cancel()\n    cancel()\n    fmt.Println(wait(ctx))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Cancelar no demuestra que los trabajadores hayan salido. Combina cancelación con WaitGroup o señal de finalización si el apagado necesita esa garantía. Comprueba también cancelación al enviar; el receptor puede haber salido durante el cálculo."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Usa errors.Is para reconocer context.Canceled. Crea un trabajador que espere jobs o ctx.Done y confirme su finalización antes de retornar main."
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
              "slug": "go-basics-select",
              "label": "46. select en Go: coordinar operaciones listas y cancelación"
            },
            {
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex en Go: proteger una regla de estado compartido"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/context",
      "url": "https://pkg.go.dev/context"
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
