import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-waitgroup",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 43
  },
  "translations": {
    "en": {
      "title": "sync.WaitGroup in Go: wait for a known set of tasks",
      "description": "Coordinate Go task completion with WaitGroup and understand why waiting does not protect shared mutable state.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A sync.WaitGroup tracks completion of a set of tasks. Add the task count before launching work, call Done when each task finishes and call Wait where the owner needs completion. A WaitGroup communicates completion, not results, and does not by itself serialize concurrent access to a map or counter.",
            "Using defer wg.Done at the start of the goroutine keeps completion attached to every return path. Pass input as an argument when that makes ownership clear. The example uses the established Add/Done pattern; modern Go versions also provide other helpers, but the lifecycle rule remains explicit here."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Three tasks print their identifiers and main waits until all have called Done. Their output order is intentionally unspecified. The final message appears after completion. A test should check that all expected results exist, not require the workers to print in launch order."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    for id := 1; id <= 3; id++ {\n        wg.Add(1)\n        go func(id int) {\n            defer wg.Done()\n            fmt.Println(\"worker\", id)\n        }(id)\n    }\n    wg.Wait()\n    fmt.Println(\"all complete\")\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Calling Add inside a newly launched goroutine can race logically with Wait observing a zero count. Calling Done too many times panics. Also avoid copying a WaitGroup after use; pass a pointer or capture the same instance when coordinating work across functions."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add an early return to one worker and confirm that deferred Done still lets Wait finish. Then collect results through a channel instead of asserting a particular print order."
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
            }
          ]
        }
      ]
    },
    "es": {
      "title": "sync.WaitGroup en Go: esperar un conjunto de tareas",
      "description": "Coordina la finalización con WaitGroup y entiende por qué esperar no protege por sí solo el estado compartido.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "sync.WaitGroup registra la finalización de tareas. Añade el número antes de iniciar trabajo, llama Done al terminar cada tarea y Wait donde se necesite esperar. Comunica finalización, no resultados, y no serializa por sí solo acceso a maps o contadores.",
            "Usar defer wg.Done al iniciar la goroutine cubre cada retorno. Pasa entradas como argumentos cuando aclare la propiedad. El ejemplo usa el patrón consolidado Add/Done; versiones modernas incluyen otros auxiliares, pero aquí la duración queda explícita."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Tres tareas imprimen identificadores y main espera sus Done. El orden de esas líneas no está definido. El mensaje final aparece después de completarse. Una prueba debe comprobar los resultados esperados sin exigir el orden de inicio."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    for id := 1; id <= 3; id++ {\n        wg.Add(1)\n        go func(id int) {\n            defer wg.Done()\n            fmt.Println(\"worker\", id)\n        }(id)\n    }\n    wg.Wait()\n    fmt.Println(\"all complete\")\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Llamar Add dentro de la goroutine recién iniciada permite que Wait vea el contador cero antes del registro. Llamar Done demasiadas veces causa panic. Evita copiar WaitGroup después de usarlo; pasa puntero o captura la misma instancia."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade retorno temprano a un trabajador y confirma que Done diferido permite terminar Wait. Recopila resultados por canal sin exigir un orden de impresión."
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
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/sync#WaitGroup",
      "url": "https://pkg.go.dev/sync#WaitGroup"
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
