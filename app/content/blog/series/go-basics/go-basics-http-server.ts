import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-http-server",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 39
  },
  "translations": {
    "en": {
      "title": "Build a first HTTP handler in Go with net/http",
      "description": "Serve a local HTTP endpoint in Go, set response metadata and configure basic server timeouts.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "net/http connects requests to handlers. A handler receives a ResponseWriter and a Request, inspects the request and writes a response. Start with a local endpoint whose method, path and body are explicit. Keep business logic separate so it can be tested without starting a network listener.",
            "The example uses a dedicated ServeMux and a GET /hello pattern, supported by the modern standard-library router. A Server struct exposes timeouts that are easy to miss with a convenience call. Binding to 127.0.0.1 keeps the exercise on the local machine."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Run the program and visit http://127.0.0.1:8080/hello with a browser or curl. Set Content-Type before writing the body; the first write can commit response headers. A GET pattern also accepts HEAD under ServeMux rules. Stop this introductory process with the terminal’s interrupt command."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"log\"\n    \"net/http\"\n    \"time\"\n)\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"GET /hello\", func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set(\"Content-Type\", \"text/plain; charset=utf-8\")\n        fmt.Fprintln(w, \"Hello, Go!\")\n    })\n    server := &http.Server{\n        Addr: \"127.0.0.1:8080\", Handler: mux,\n        ReadHeaderTimeout: 5 * time.Second,\n        ReadTimeout: 10 * time.Second, WriteTimeout: 10 * time.Second,\n        IdleTimeout: 60 * time.Second,\n    }\n    log.Fatal(server.ListenAndServe())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A local server example is not a complete deployment configuration. Timeout values here are illustrative and need workload-specific decisions. Handlers can run concurrently, so a shared map or counter added later requires synchronization. The final project shows handler testing, and the concurrency block explains shared-state protection."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a second read-only route with its own content type. Send a POST to /hello and inspect the method rejection, then test an unknown path."
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
              "slug": "go-basics-command-line-flags",
              "label": "38. Command-line flags in Go: parse options with flag"
            },
            {
              "slug": "go-basics-http-client",
              "label": "40. Go HTTP clients: timeouts, status checks and body closure"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Crear un primer handler HTTP en Go con net/http",
      "description": "Sirve un endpoint HTTP local con Go, configura metadatos de respuesta y añade timeouts básicos al servidor.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "net/http conecta solicitudes con handlers. Cada handler recibe ResponseWriter y Request, examina la entrada y escribe respuesta. Comienza con un endpoint local de método, ruta y cuerpo explícitos. Separa la lógica para probarla sin abrir un puerto.",
            "El ejemplo usa ServeMux propio y el patrón GET /hello del router estándar moderno. Server expone timeouts fáciles de omitir con llamadas abreviadas. Escuchar en 127.0.0.1 mantiene el ejercicio en el equipo local."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Ejecuta y visita http://127.0.0.1:8080/hello con navegador o curl. Establece Content-Type antes del cuerpo, porque la primera escritura puede enviar los encabezados. El patrón GET también acepta HEAD según ServeMux. Detén esta práctica con la interrupción de la terminal."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"log\"\n    \"net/http\"\n    \"time\"\n)\n\nfunc main() {\n    mux := http.NewServeMux()\n    mux.HandleFunc(\"GET /hello\", func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set(\"Content-Type\", \"text/plain; charset=utf-8\")\n        fmt.Fprintln(w, \"Hello, Go!\")\n    })\n    server := &http.Server{\n        Addr: \"127.0.0.1:8080\", Handler: mux,\n        ReadHeaderTimeout: 5 * time.Second,\n        ReadTimeout: 10 * time.Second, WriteTimeout: 10 * time.Second,\n        IdleTimeout: 60 * time.Second,\n    }\n    log.Fatal(server.ListenAndServe())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Este servidor local no define un despliegue completo. Los timeouts son ilustrativos y necesitan ajustarse a la carga. Los handlers pueden ejecutarse concurrentemente; añadir un map o contador compartido exige sincronización. El proyecto final muestra pruebas y el bloque de concurrencia protege estado compartido."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade otra ruta de lectura con tipo de contenido propio. Envía POST a /hello, revisa el rechazo de método y prueba una ruta desconocida."
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
              "slug": "go-basics-command-line-flags",
              "label": "38. Opciones de consola en Go: analizar argumentos con flag"
            },
            {
              "slug": "go-basics-http-client",
              "label": "40. Clientes HTTP en Go: timeouts, estados y cierre del cuerpo"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/net/http",
      "url": "https://pkg.go.dev/net/http"
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
