import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-final-project",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 50
  },
  "translations": {
    "en": {
      "title": "Go basics final project: a tested JSON HTTP endpoint",
      "description": "Combine Go functions, structs, JSON, validation and httptest in a small local HTTP project with a reproducible test.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "The final project builds a read-only greeting endpoint and tests it without opening a network port. It combines explicit inputs, structured output, validation and HTTP metadata. Keep the scope small enough that you can explain every branch before adding storage, workers or a framework.",
            "Save the first code block as main.go in a new module. hello reads a query parameter, trims whitespace and rejects an empty name. It marshals the response before writing headers so serialization errors can still produce a coherent error response. The handler contains no shared mutable state."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Save the second block as main_test.go and run go test ./.... The test invokes hello directly using httptest.NewRequest and NewRecorder. It checks both valid and invalid input, including JSON content type and decoded response content. Use go run . only after the tests pass, then visit /hello?name=Ada on the local listener."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"log\"\n    \"net/http\"\n    \"strings\"\n    \"time\"\n)\n\ntype Greeting struct { Message string `json:\"message\"` }\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n    name := strings.TrimSpace(r.URL.Query().Get(\"name\"))\n    if name == \"\" || len(name) > 100 {\n        http.Error(w, \"name must contain 1-100 bytes\", http.StatusBadRequest)\n        return\n    }\n    body, err := json.Marshal(Greeting{Message: \"Hello, \" + name})\n    if err != nil {\n        http.Error(w, \"encoding failed\", http.StatusInternalServerError)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.Write(body)\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"GET /hello\", hello)\n    server := &http.Server{\n        Addr: \"127.0.0.1:8080\", Handler: mux,\n        ReadHeaderTimeout: 5 * time.Second,\n        ReadTimeout: 10 * time.Second, WriteTimeout: 10 * time.Second,\n        IdleTimeout: 60 * time.Second,\n    }\n    log.Fatal(server.ListenAndServe())\n}"
          }
        },
        {
          "id": "project-test",
          "heading": "Test the handler without a listener",
          "paragraphs": [
            "Save this block as main_test.go beside main.go. Run go test ./... in that module."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"testing\"\n)\n\nfunc TestHello(t *testing.T) {\n    cases := []struct { name, target string; status int; message string }{\n        {\"valid\", \"/hello?name=Ada\", http.StatusOK, \"Hello, Ada\"},\n        {\"missing\", \"/hello\", http.StatusBadRequest, \"\"},\n    }\n    for _, tc := range cases {\n        t.Run(tc.name, func(t *testing.T) {\n            response := httptest.NewRecorder()\n            hello(response, httptest.NewRequest(http.MethodGet, tc.target, nil))\n            if response.Code != tc.status {\n                t.Fatalf(\"status = %d; want %d\", response.Code, tc.status)\n            }\n            if tc.status == http.StatusOK {\n                if got := response.Header().Get(\"Content-Type\"); got != \"application/json\" {\n                    t.Fatalf(\"Content-Type = %q; want application/json\", got)\n                }\n                var body Greeting\n                if err := json.Unmarshal(response.Body.Bytes(), &body); err != nil { t.Fatal(err) }\n                if body.Message != tc.message {\n                    t.Fatalf(\"message = %q; want %q\", body.Message, tc.message)\n                }\n            }\n        })\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "The name-length bound is measured in bytes and is an explicit teaching policy. This example has no persistence, authentication or background processing. Add those only with defined requirements and tests. If you later share a map between handlers, apply the ownership and mutex rules from the concurrency lessons."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a test for whitespace-only input and a name exceeding the byte limit. Then add an independent HTTP-level test of the ServeMux method rule, since directly calling hello bypasses router method selection."
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
              "slug": "go-basics-race-detector",
              "label": "49. Go race detector: find executed data races with -race"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Proyecto final de Go: endpoint HTTP JSON con pruebas",
      "description": "Combina funciones, structs, JSON, validación y httptest en un proyecto HTTP local con una prueba reproducible.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "El proyecto final crea un endpoint de saludo y lo prueba sin abrir un puerto. Combina entradas explícitas, salida estructurada, validación y metadatos HTTP. Mantén el alcance pequeño para explicar cada rama antes de añadir almacenamiento, trabajadores o framework.",
            "Guarda el primer bloque como main.go en un módulo nuevo. hello lee el parámetro, elimina espacios y rechaza nombres vacíos. Codifica antes de enviar encabezados para poder responder coherentemente ante errores. El handler no contiene estado mutable compartido."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Guarda el segundo bloque como main_test.go y ejecuta go test ./.... La prueba invoca hello con httptest.NewRequest y NewRecorder. Comprueba entradas válidas e inválidas, tipo JSON y contenido decodificado. Ejecuta go run . después de pasar las pruebas y visita /hello?name=Ada en el servidor local."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"log\"\n    \"net/http\"\n    \"strings\"\n    \"time\"\n)\n\ntype Greeting struct { Message string `json:\"message\"` }\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n    name := strings.TrimSpace(r.URL.Query().Get(\"name\"))\n    if name == \"\" || len(name) > 100 {\n        http.Error(w, \"name must contain 1-100 bytes\", http.StatusBadRequest)\n        return\n    }\n    body, err := json.Marshal(Greeting{Message: \"Hello, \" + name})\n    if err != nil {\n        http.Error(w, \"encoding failed\", http.StatusInternalServerError)\n        return\n    }\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.Write(body)\n}\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"GET /hello\", hello)\n    server := &http.Server{\n        Addr: \"127.0.0.1:8080\", Handler: mux,\n        ReadHeaderTimeout: 5 * time.Second,\n        ReadTimeout: 10 * time.Second, WriteTimeout: 10 * time.Second,\n        IdleTimeout: 60 * time.Second,\n    }\n    log.Fatal(server.ListenAndServe())\n}"
          }
        },
        {
          "id": "project-test",
          "heading": "Probar el handler sin abrir un puerto",
          "paragraphs": [
            "Guarda este bloque como main_test.go junto a main.go. Ejecuta go test ./... en ese módulo."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"net/http\"\n    \"net/http/httptest\"\n    \"testing\"\n)\n\nfunc TestHello(t *testing.T) {\n    cases := []struct { name, target string; status int; message string }{\n        {\"valid\", \"/hello?name=Ada\", http.StatusOK, \"Hello, Ada\"},\n        {\"missing\", \"/hello\", http.StatusBadRequest, \"\"},\n    }\n    for _, tc := range cases {\n        t.Run(tc.name, func(t *testing.T) {\n            response := httptest.NewRecorder()\n            hello(response, httptest.NewRequest(http.MethodGet, tc.target, nil))\n            if response.Code != tc.status {\n                t.Fatalf(\"status = %d; want %d\", response.Code, tc.status)\n            }\n            if tc.status == http.StatusOK {\n                if got := response.Header().Get(\"Content-Type\"); got != \"application/json\" {\n                    t.Fatalf(\"Content-Type = %q; want application/json\", got)\n                }\n                var body Greeting\n                if err := json.Unmarshal(response.Body.Bytes(), &body); err != nil { t.Fatal(err) }\n                if body.Message != tc.message {\n                    t.Fatalf(\"message = %q; want %q\", body.Message, tc.message)\n                }\n            }\n        })\n    }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "El máximo del nombre se mide en bytes y es una regla educativa explícita. El ejemplo no incluye persistencia, autenticación ni trabajo de fondo. Añádelos con requisitos y pruebas definidos. Si después compartes un map entre handlers, aplica las reglas de propiedad y mutex."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade pruebas con solo espacios y nombre que supere el máximo de bytes. Añade después una prueba HTTP independiente de la regla de método de ServeMux: llamar directamente a hello omite esa selección."
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
      "title": "Go: pkg.go.dev/net/http/httptest",
      "url": "https://pkg.go.dev/net/http/httptest"
    },
    {
      "title": "Go: official documentation",
      "url": "https://go.dev/doc/"
    },
    {
      "title": "Go language specification",
      "url": "https://go.dev/ref/spec"
    },
    {
      "title": "encoding/json: package reference",
      "url": "https://pkg.go.dev/encoding/json"
    },
    {
      "title": "net/http: package reference",
      "url": "https://pkg.go.dev/net/http"
    },
    {
      "title": "testing: package reference",
      "url": "https://pkg.go.dev/testing"
    }
  ]
} satisfies BlogPost
