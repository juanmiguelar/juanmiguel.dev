import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-time",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 36
  },
  "translations": {
    "en": {
      "title": "Go time basics: durations, layouts and time zones",
      "description": "Parse and format Go timestamps, use time.Duration with explicit units and distinguish time zones from fixed offsets.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "time.Time represents an instant, while time.Duration represents an elapsed interval as a nanosecond count. Use named units such as time.Second to make intervals readable. Parse timestamps with a known layout, keep timezone information and format explicitly when producing text for another system.",
            "Go layouts use a reference date rather than tokens such as YYYY. time.RFC3339 supplies a standard layout for timestamps with an offset. time.Parse returns an error for mismatching input. UTC normalizes display to a common offset while preserving the instant represented by the value."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example parses noon at offset -06:00, adds ninety minutes and prints the result in UTC. Multiplying 90 by time.Minute states the unit. For measuring actual work, time.Now followed by time.Since is preferable to manually subtracting wall-clock strings."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    start, err := time.Parse(time.RFC3339, \"2026-11-01T12:00:00-06:00\")\n    if err != nil { fmt.Println(err); return }\n    end := start.Add(90 * time.Minute)\n    fmt.Println(end.UTC().Format(time.RFC3339))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A fixed offset is not a geographical timezone with historical daylight-saving rules. Use time.LoadLocation when those rules matter and handle its error. Also, time.Duration(5) means five nanoseconds, not five seconds. Keep units visible in configuration parsing and tests."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Parse the same instant with a Z suffix and compare it using Equal. Then parse \"250ms\" with time.ParseDuration and reject an invalid duration string."
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
              "slug": "go-basics-standard-library",
              "label": "32. Go standard library: connect readers, writers and tools"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON in Go: exported fields, tags and validation"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Environment variables in Go: defaults and validation"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Tiempo en Go: duraciones, layouts y zonas horarias",
      "description": "Analiza y formatea fechas, usa time.Duration con unidades explícitas y distingue zonas horarias de offsets fijos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "time.Time representa un instante; time.Duration representa un intervalo como cantidad de nanosegundos. Usa unidades como time.Second para expresar intervalos. Analiza fechas con un layout conocido, conserva la zona y formatea explícitamente al producir texto para otro sistema.",
            "Los layouts de Go usan una fecha de referencia en lugar de tokens como YYYY. time.RFC3339 aporta un formato estándar con offset. time.Parse devuelve error si la entrada no coincide. UTC normaliza la representación a un offset común conservando el instante."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo analiza mediodía con offset -06:00, añade noventa minutos e imprime UTC. Multiplicar 90 por time.Minute deja clara la unidad. Para medir trabajo real, usa time.Now y time.Since en lugar de restar cadenas de reloj manualmente."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    start, err := time.Parse(time.RFC3339, \"2026-11-01T12:00:00-06:00\")\n    if err != nil { fmt.Println(err); return }\n    end := start.Add(90 * time.Minute)\n    fmt.Println(end.UTC().Format(time.RFC3339))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un offset fijo no equivale a una zona geográfica con reglas históricas de horario. Usa time.LoadLocation cuando importen esas reglas y gestiona su error. time.Duration(5) significa cinco nanosegundos, no cinco segundos. Mantén visibles las unidades al leer configuración y probar."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Analiza el mismo instante con sufijo Z y compáralo mediante Equal. Después lee \"250ms\" con time.ParseDuration y rechaza una duración inválida."
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
              "slug": "go-basics-standard-library",
              "label": "32. Biblioteca estándar de Go: conectar readers, writers y herramientas"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON en Go: campos exportados, etiquetas y validación"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Variables de entorno en Go: valores por defecto y validación"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/time",
      "url": "https://pkg.go.dev/time"
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
