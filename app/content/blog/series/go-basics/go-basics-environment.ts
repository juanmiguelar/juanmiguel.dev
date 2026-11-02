import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-environment",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 37
  },
  "translations": {
    "en": {
      "title": "Environment variables in Go: defaults and validation",
      "description": "Read Go environment configuration with os.LookupEnv and validate numeric values before using them.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Environment variables supply strings to a process. os.LookupEnv distinguishes an unset variable from a variable explicitly set to an empty string. Read configuration at startup, parse it into typed values and reject invalid settings before starting background work or serving requests.",
            "The example chooses a default only when APP_WORKERS is absent. If it is present, Atoi must succeed and the value must stay within a defined range. Bounding the worker count prevents an accidental configuration value from creating an unreasonable number of goroutines later."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "With no variable set, the output is two. Setting APP_WORKERS to four prints four; an empty string or zero is rejected. The upper bound of sixteen is an educational policy for this example, not a universal recommendation for Go services or a performance measurement."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"strconv\"\n)\n\nfunc main() {\n    workers := 2\n    if raw, set := os.LookupEnv(\"APP_WORKERS\"); set {\n        n, err := strconv.Atoi(raw)\n        if err != nil || n < 1 || n > 16 {\n            fmt.Println(\"APP_WORKERS must be an integer from 1 to 16\"); return\n        }\n        workers = n\n    }\n    fmt.Println(workers)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Do not print the full environment to troubleshoot one setting, because it can contain secrets. Report the setting name and validation problem instead. Read and validate once where practical, then pass a configuration value into the code that uses it rather than scattering environment reads across business logic."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Try unset, empty, negative, nonnumeric and out-of-range inputs. Extract parsing into a function so the validation rules can be tested without modifying the process environment."
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
              "slug": "go-basics-time",
              "label": "36. Go time basics: durations, layouts and time zones"
            },
            {
              "slug": "go-basics-command-line-flags",
              "label": "38. Command-line flags in Go: parse options with flag"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Variables de entorno en Go: valores por defecto y validación",
      "description": "Lee configuración con os.LookupEnv y valida valores numéricos antes de utilizarlos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Las variables de entorno entregan cadenas al proceso. os.LookupEnv distingue una variable ausente de otra definida con cadena vacía. Lee configuración al iniciar, conviértela a tipos y rechaza valores inválidos antes de comenzar trabajo o atender solicitudes.",
            "El ejemplo usa el valor por defecto solo si APP_WORKERS falta. Si existe, Atoi debe funcionar y el valor debe quedar en el rango definido. Limitar trabajadores evita que una configuración accidental genere una cantidad desproporcionada de goroutines después."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Sin variable definida, la salida es dos. APP_WORKERS en cuatro imprime cuatro; cadena vacía o cero se rechazan. El máximo de dieciséis es una regla educativa del ejemplo, no una recomendación universal ni una medición de rendimiento."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"strconv\"\n)\n\nfunc main() {\n    workers := 2\n    if raw, set := os.LookupEnv(\"APP_WORKERS\"); set {\n        n, err := strconv.Atoi(raw)\n        if err != nil || n < 1 || n > 16 {\n            fmt.Println(\"APP_WORKERS must be an integer from 1 to 16\"); return\n        }\n        workers = n\n    }\n    fmt.Println(workers)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "No imprimas todo el entorno para diagnosticar una opción, pues puede contener secretos. Informa del nombre y del problema de validación. Lee y valida una vez cuando sea posible; pasa la configuración al código consumidor en lugar de dispersar lecturas por la lógica."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Prueba ausencia, vacío, negativo, texto y valor fuera de rango. Extrae el análisis a una función para probar reglas sin cambiar el entorno del proceso."
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
              "slug": "go-basics-time",
              "label": "36. Tiempo en Go: duraciones, layouts y zonas horarias"
            },
            {
              "slug": "go-basics-command-line-flags",
              "label": "38. Opciones de consola en Go: analizar argumentos con flag"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/os#LookupEnv",
      "url": "https://pkg.go.dev/os#LookupEnv"
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
