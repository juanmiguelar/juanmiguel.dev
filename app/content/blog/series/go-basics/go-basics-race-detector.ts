import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-race-detector",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 49
  },
  "translations": {
    "en": {
      "title": "Go race detector: find executed data races with -race",
      "description": "Run Go race checks, interpret conflicting access reports and understand why a clean run is limited to executed paths.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A data race occurs when goroutines access the same memory concurrently, at least one access is a write and the accesses are not properly synchronized. Go’s race detector instruments execution to report races it observes. Use it with realistic tests and inputs; it cannot inspect paths that never run.",
            "go test -race ./... runs tests with detection enabled on supported platforms and toolchains. Reports show conflicting accesses and the goroutine creation paths. Read both sides of the report, identify the shared object and choose ownership, a mutex or another synchronization rule that covers every relevant access."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The commands below belong at the root of your practice module. Run the mutex example from the previous lesson with go run -race . in its directory. A correct result such as 400 alone does not prove synchronization: an unsafe program may happen to print that value while still containing a race."
          ],
          "code": {
            "language": "shell",
            "value": "go test -race ./...\n# In the directory containing the counter program:\ngo run -race ."
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A race-free program can still deadlock, leak goroutines or violate an application rule. The detector also adds overhead, so do not present its timings as ordinary performance measurements. If the local toolchain cannot support -race, report the limitation and run it in a suitable environment rather than claiming a clean result."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "In a disposable copy of the mutex example, remove the locks and run the detector. Restore the locks, repeat the same workload and keep a regression test for the shared-state behavior."
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
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex in Go: protect a shared invariant"
            },
            {
              "slug": "go-basics-final-project",
              "label": "50. Go basics final project: a tested JSON HTTP endpoint"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Detector de carreras en Go: encontrar accesos con -race",
      "description": "Ejecuta comprobaciones de carreras, interpreta accesos conflictivos y entiende el alcance de un resultado limpio.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una carrera de datos ocurre cuando goroutines acceden concurrentemente a memoria compartida, al menos una escribe y no existe sincronización adecuada. El detector de Go instrumenta la ejecución e informa de carreras observadas. Úsalo con pruebas e inputs representativos; no inspecciona rutas que no se ejecutan.",
            "go test -race ./... activa el detector en plataformas compatibles. El informe muestra accesos conflictivos y creación de goroutines. Lee ambas partes, identifica el objeto compartido y elige propiedad exclusiva, mutex u otra regla que cubra todos los accesos pertinentes."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Ejecuta los comandos en la raíz del módulo de práctica. Para el ejemplo de mutex, usa go run -race . en su directorio. Obtener 400 no demuestra sincronización: un programa inseguro puede imprimirlo por casualidad y seguir teniendo carrera."
          ],
          "code": {
            "language": "shell",
            "value": "go test -race ./...\n# In the directory containing the counter program:\ngo run -race ."
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un programa sin carreras aún puede bloquearse, retener goroutines o violar reglas de aplicación. El detector añade coste; sus tiempos no equivalen al rendimiento ordinario. Si las herramientas locales no admiten -race, registra la limitación y ejecútalo en un entorno compatible."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "En una copia desechable del ejemplo, quita los locks y ejecuta el detector. Restáuralos, repite la carga y conserva una prueba de regresión del estado compartido."
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
              "slug": "go-basics-mutex",
              "label": "48. sync.Mutex en Go: proteger una regla de estado compartido"
            },
            {
              "slug": "go-basics-final-project",
              "label": "50. Proyecto final de Go: endpoint HTTP JSON con pruebas"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/doc/articles/race_detector",
      "url": "https://go.dev/doc/articles/race_detector"
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
