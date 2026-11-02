import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-http-client",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 40
  },
  "translations": {
    "en": {
      "title": "Go HTTP clients: timeouts, status checks and body closure",
      "description": "Call a local HTTP endpoint with a reusable Go client, enforce a timeout and bound the response body.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An HTTP client request can fail at the transport layer or receive an HTTP error response. client.Get reports network and protocol failures through error; a 404 or 500 normally arrives as a response with no transport error. Inspect StatusCode before treating the body as successful data.",
            "Create a client with a timeout and reuse it for multiple requests. After a successful request call, close resp.Body on every response path. A bounded read keeps an unexpectedly large reply from consuming unlimited memory. Reading one extra byte lets you detect and reject a body larger than your limit."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "Start the server from the previous lesson before running this client in another directory. It requests /hello, accepts a 2xx response and prints the body. The 1 KiB limit fits this greeting exercise. Larger real responses need a format-specific size policy or streaming processing."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"io\"\n    \"net/http\"\n    \"time\"\n)\n\nfunc run() error {\n    client := &http.Client{Timeout: 3 * time.Second}\n    resp, err := client.Get(\"http://127.0.0.1:8080/hello\")\n    if err != nil { return err }\n    defer resp.Body.Close()\n    if resp.StatusCode < 200 || resp.StatusCode >= 300 {\n        return fmt.Errorf(\"unexpected status: %d\", resp.StatusCode)\n    }\n    const limit = 1024\n    data, err := io.ReadAll(io.LimitReader(resp.Body, limit+1))\n    if err != nil { return err }\n    if len(data) > limit { return fmt.Errorf(\"response exceeds %d bytes\", limit) }\n    fmt.Print(string(data))\n    return nil\n}\n\nfunc main() { if err := run(); err != nil { fmt.Println(err) } }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Closing a body without reading it completely can prevent connection reuse, depending on the protocol and transport. Do not drain an untrusted unlimited body solely to preserve reuse. Correctness, bounds and cancellation come first; make any reuse optimization explicit and measured."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Call an unknown path and confirm that status checking handles 404. Stop the server to inspect the transport error, then reduce the size limit to trigger the oversized-response branch."
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
              "slug": "go-basics-http-server",
              "label": "39. Build a first HTTP handler in Go with net/http"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Go unit tests: table-driven cases and useful failures"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Clientes HTTP en Go: timeouts, estados y cierre del cuerpo",
      "description": "Llama a un endpoint local con un cliente reutilizable, limita el tiempo y acota el cuerpo de la respuesta.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una petición puede fallar en transporte o recibir un estado HTTP de error. client.Get comunica fallos de red y protocolo mediante error; un 404 o 500 normalmente llega como respuesta sin error de transporte. Revisa StatusCode antes de interpretar el cuerpo como dato correcto.",
            "Crea un cliente con timeout y reutilízalo entre solicitudes. Tras obtener respuesta, cierra resp.Body en todas las rutas. Leer con límite evita consumir memoria ilimitada. Leer un byte adicional permite detectar y rechazar cuerpos que excedan el máximo."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Inicia el servidor anterior y ejecuta este cliente en otro directorio. Solicita /hello, acepta 2xx e imprime el cuerpo. El máximo de 1 KiB corresponde al saludo. Respuestas reales mayores necesitan una política según el formato o procesamiento en streaming."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"io\"\n    \"net/http\"\n    \"time\"\n)\n\nfunc run() error {\n    client := &http.Client{Timeout: 3 * time.Second}\n    resp, err := client.Get(\"http://127.0.0.1:8080/hello\")\n    if err != nil { return err }\n    defer resp.Body.Close()\n    if resp.StatusCode < 200 || resp.StatusCode >= 300 {\n        return fmt.Errorf(\"unexpected status: %d\", resp.StatusCode)\n    }\n    const limit = 1024\n    data, err := io.ReadAll(io.LimitReader(resp.Body, limit+1))\n    if err != nil { return err }\n    if len(data) > limit { return fmt.Errorf(\"response exceeds %d bytes\", limit) }\n    fmt.Print(string(data))\n    return nil\n}\n\nfunc main() { if err := run(); err != nil { fmt.Println(err) } }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Cerrar sin leer todo el cuerpo puede impedir reutilizar la conexión según protocolo y transporte. No vacíes un cuerpo ilimitado no confiable solo para reutilizarla. Prioriza corrección, límites y cancelación; explicita y mide cualquier optimización."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Solicita una ruta desconocida y comprueba el manejo de 404. Detén el servidor para revisar el error de transporte y reduce el máximo para rechazar una respuesta grande."
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
              "slug": "go-basics-http-server",
              "label": "39. Crear un primer handler HTTP en Go con net/http"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Pruebas unitarias en Go: tablas de casos y fallos útiles"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/net/http#Client",
      "url": "https://pkg.go.dev/net/http#Client"
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
