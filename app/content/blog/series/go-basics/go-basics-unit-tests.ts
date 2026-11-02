import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-unit-tests",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 41
  },
  "translations": {
    "en": {
      "title": "Go unit tests: table-driven cases and useful failures",
      "description": "Write Go tests with independent expected results, table-driven cases and descriptive subtest failures.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Go finds tests in files ending in _test.go. A test function begins with Test and receives *testing.T. Run go test ./... from the module root. Useful tests state expected behavior independently of the implementation and include inputs that could reveal a mistake, not only the happy path.",
            "A table-driven test stores inputs and expected results in a slice of cases. t.Run names each case so failures identify the condition that broke. Keep each expectation simple enough to inspect. Reimplementing the production algorithm inside the test can reproduce the same bug instead of detecting it."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example belongs in sum_test.go inside a separate practice directory. It includes a small sum function so the test can run independently. Nil, positive and mixed-sign inputs exercise distinct behavior. Failure messages include actual and expected results rather than merely saying that the test failed."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"testing\"\n\nfunc sum(values []int) int {\n    total := 0\n    for _, v := range values { total += v }\n    return total\n}\n\nfunc TestSum(t *testing.T) {\n    cases := []struct { name string; values []int; want int }{\n        {\"empty\", nil, 0},\n        {\"positive\", []int{2, 3}, 5},\n        {\"mixed\", []int{-2, 5}, 3},\n    }\n    for _, tc := range cases {\n        t.Run(tc.name, func(t *testing.T) {\n            if got := sum(tc.values); got != tc.want {\n                t.Fatalf(\"sum(%v) = %d; want %d\", tc.values, got, tc.want)\n            }\n        })\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Passing tests only support the cases and properties actually checked. Coverage can reveal unexecuted code but does not prove a correct assertion. Avoid sleep-based timing assumptions in concurrent tests; synchronize explicitly and use httptest for HTTP behavior without depending on a manually started service."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Introduce a deliberate bug that ignores negative values and check which case fails. Add a case with canceling values such as 5 and -5, then restore the implementation."
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
              "slug": "go-basics-http-client",
              "label": "40. Go HTTP clients: timeouts, status checks and body closure"
            },
            {
              "slug": "go-basics-goroutines",
              "label": "42. Go concurrency: start a goroutine and wait for its result"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Pruebas unitarias en Go: tablas de casos y fallos útiles",
      "description": "Escribe pruebas con resultados esperados independientes, tablas de casos y mensajes de fallo descriptivos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Go busca pruebas en archivos terminados en _test.go. La función comienza con Test y recibe *testing.T. Ejecuta go test ./... desde la raíz. Una prueba útil expresa expectativas independientes de la implementación y añade entradas capaces de revelar errores, además del caso correcto.",
            "Una prueba por tabla guarda entradas y resultados en un slice de casos. t.Run nombra cada caso y permite identificar la condición que falló. Mantén expectativas fáciles de revisar. Repetir el algoritmo productivo dentro de la prueba puede duplicar el error en vez de detectarlo."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Guarda el ejemplo en sum_test.go dentro de un directorio de práctica separado. Incluye una función sum pequeña para ejecutar la prueba de forma independiente. Nil, positivos y signos mixtos ejercitan comportamientos distintos. Los fallos muestran resultado obtenido y esperado."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"testing\"\n\nfunc sum(values []int) int {\n    total := 0\n    for _, v := range values { total += v }\n    return total\n}\n\nfunc TestSum(t *testing.T) {\n    cases := []struct { name string; values []int; want int }{\n        {\"empty\", nil, 0},\n        {\"positive\", []int{2, 3}, 5},\n        {\"mixed\", []int{-2, 5}, 3},\n    }\n    for _, tc := range cases {\n        t.Run(tc.name, func(t *testing.T) {\n            if got := sum(tc.values); got != tc.want {\n                t.Fatalf(\"sum(%v) = %d; want %d\", tc.values, got, tc.want)\n            }\n        })\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Las pruebas aprobadas respaldan los casos y propiedades comprobados. La cobertura revela código sin ejecutar, pero no demuestra que las expectativas sean correctas. Evita sleeps en pruebas concurrentes; sincroniza explícitamente y usa httptest para HTTP sin depender de servicios iniciados manualmente."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Introduce un error que ignore negativos y revisa qué caso falla. Añade valores que se anulen, como 5 y -5, y restaura la implementación."
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
              "slug": "go-basics-http-client",
              "label": "40. Clientes HTTP en Go: timeouts, estados y cierre del cuerpo"
            },
            {
              "slug": "go-basics-goroutines",
              "label": "42. Concurrencia en Go: iniciar una goroutine y esperar su resultado"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/testing",
      "url": "https://pkg.go.dev/testing"
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
