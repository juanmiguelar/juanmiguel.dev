import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-mutex",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 48
  },
  "translations": {
    "en": {
      "title": "sync.Mutex in Go: protect a shared invariant",
      "description": "Protect concurrent Go counter updates with a mutex and understand lock scope, consistent access and copying restrictions.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A mutex coordinates exclusive access to shared state. Every operation participating in the same invariant must follow the same locking rule. Protect both writes and reads when they can overlap. Waiting for workers to finish is a completion rule; it does not make their overlapping increments safe.",
            "The Counter bundles its mutex with the integer it protects. Add and Value both lock the same mutex. Pointer receivers keep all calls attached to one instance and avoid copying a used mutex. The zero value of sync.Mutex is ready for use; no constructor is required for this counter."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Four workers increment one hundred times each, then main waits and prints 400. The lock covers only the state update. The WaitGroup establishes when all work is finished, while the mutex protects increments during execution. Both mechanisms are necessary for their respective responsibilities."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\ntype Counter struct { mu sync.Mutex; n int }\nfunc (c *Counter) Add() { c.mu.Lock(); c.n++; c.mu.Unlock() }\nfunc (c *Counter) Value() int { c.mu.Lock(); defer c.mu.Unlock(); return c.n }\n\nfunc main() {\n    var counter Counter\n    var wg sync.WaitGroup\n    for i := 0; i < 4; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            for j := 0; j < 100; j++ { counter.Add() }\n        }()\n    }\n    wg.Wait()\n    fmt.Println(counter.Value())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Do not hold a mutex across slow network operations unless the invariant explicitly requires it. Recursive locking of an ordinary Mutex deadlocks. Keep lock ordering consistent when several locks are necessary, and expose methods instead of returning mutable references to the protected fields."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Run the example with the race detector on a supported toolchain. Add a Reset method using the same mutex, then reason about whether resetting while workers run has useful semantics."
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
              "slug": "go-basics-context",
              "label": "47. Go context: propagate cancellation and deadlines"
            },
            {
              "slug": "go-basics-race-detector",
              "label": "49. Go race detector: find executed data races with -race"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "sync.Mutex en Go: proteger una regla de estado compartido",
      "description": "Protege incrementos concurrentes con mutex y entiende alcance del bloqueo, acceso coherente y restricciones de copia.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un mutex coordina acceso exclusivo al estado compartido. Toda operación que participe en la misma regla debe seguir el bloqueo. Protege escrituras y lecturas si pueden coincidir. Esperar trabajadores resuelve finalización, pero no vuelve seguros sus incrementos simultáneos.",
            "Counter reúne mutex y entero protegido. Add y Value bloquean el mismo mutex. Los receptores por puntero mantienen una instancia y evitan copiar un mutex usado. El valor cero de sync.Mutex está listo; el contador no necesita constructor."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Cuatro trabajadores incrementan cien veces y main espera e imprime 400. El bloqueo cubre solo el cambio de estado. WaitGroup establece cuándo terminó el trabajo; mutex protege los incrementos durante la ejecución. Cada mecanismo resuelve su responsabilidad."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\ntype Counter struct { mu sync.Mutex; n int }\nfunc (c *Counter) Add() { c.mu.Lock(); c.n++; c.mu.Unlock() }\nfunc (c *Counter) Value() int { c.mu.Lock(); defer c.mu.Unlock(); return c.n }\n\nfunc main() {\n    var counter Counter\n    var wg sync.WaitGroup\n    for i := 0; i < 4; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            for j := 0; j < 100; j++ { counter.Add() }\n        }()\n    }\n    wg.Wait()\n    fmt.Println(counter.Value())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Evita mantener mutex durante red lenta salvo necesidad explícita de la regla. Bloquear recursivamente un Mutex ordinario causa deadlock. Mantén el orden entre varios locks y expón métodos en lugar de referencias mutables a los campos protegidos."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Ejecuta con detector de carreras en una plataforma compatible. Añade Reset usando el mismo mutex y razona si reiniciar durante el trabajo tiene significado útil."
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
              "slug": "go-basics-context",
              "label": "47. context en Go: propagar cancelación y plazos"
            },
            {
              "slug": "go-basics-race-detector",
              "label": "49. Detector de carreras en Go: encontrar accesos con -race"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/sync#Mutex",
      "url": "https://pkg.go.dev/sync#Mutex"
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
