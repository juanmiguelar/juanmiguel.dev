import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-standard-library",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 32
  },
  "translations": {
    "en": {
      "title": "Go standard library: connect readers, writers and tools",
      "description": "Explore Go standard-library building blocks through io.Reader and io.Writer, then continue with files, JSON, HTTP and tests.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "The Go standard library provides packages for text, files, encoding, time, HTTP and testing. Many packages connect through small interfaces. io.Reader supplies bytes and io.Writer accepts bytes, allowing a function to process a file, buffer or network stream without depending on one concrete storage type.",
            "This block applies the function and error contracts from the previous lessons to input and output. Check errors at every operation that can fail, define the lifetime of open resources and decide how much input your program accepts. Those decisions remain relevant when a local example becomes an HTTP service."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example copies from a strings.Reader into a bytes.Buffer. io.Copy returns the byte count and an error. The buffer can then expose its content as a string. Both types are in memory, making the reader/writer relationship visible without introducing file paths or network failures."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"bytes\"\n    \"fmt\"\n    \"io\"\n    \"strings\"\n)\n\nfunc main() {\n    var output bytes.Buffer\n    n, err := io.Copy(&output, strings.NewReader(\"hello\"))\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(n, output.String())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "An interface abstracts behavior, not cost. io.ReadAll can allocate for the full input, and an unrestricted io.Copy can run for as long as its source supplies data. Later examples introduce input limits, deadlines and resource closure instead of assuming every input is small and trusted."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Replace the source string with an empty one and inspect the count. Then write a function that accepts io.Reader and returns the number of bytes copied to io.Discard."
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
              "slug": "go-basics-learning-path",
              "label": "01. Learn Go basics: a path through 50 practical lessons"
            },
            {
              "slug": "go-basics-files",
              "label": "33. Read and write small files in Go with explicit cleanup"
            },
            {
              "slug": "go-basics-buffered-input",
              "label": "34. Read text line by line in Go with bufio.Scanner"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON in Go: exported fields, tags and validation"
            },
            {
              "slug": "go-basics-time",
              "label": "36. Go time basics: durations, layouts and time zones"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Environment variables in Go: defaults and validation"
            },
            {
              "slug": "go-basics-command-line-flags",
              "label": "38. Command-line flags in Go: parse options with flag"
            },
            {
              "slug": "go-basics-http-server",
              "label": "39. Build a first HTTP handler in Go with net/http"
            },
            {
              "slug": "go-basics-http-client",
              "label": "40. Go HTTP clients: timeouts, status checks and body closure"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Go unit tests: table-driven cases and useful failures"
            },
            {
              "slug": "go-basics-generics",
              "label": "31. Go generics for beginners: type parameters and constraints"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Biblioteca estándar de Go: conectar readers, writers y herramientas",
      "description": "Explora la biblioteca estándar mediante io.Reader e io.Writer y continúa con archivos, JSON, HTTP y pruebas.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "La biblioteca estándar de Go incluye texto, archivos, codificación, tiempo, HTTP y pruebas. Muchos paquetes se conectan mediante interfaces pequeñas. io.Reader entrega bytes e io.Writer los recibe, permitiendo procesar archivos, buffers o red sin depender de un almacenamiento concreto.",
            "Este bloque aplica los contratos de funciones y errores a entrada y salida. Comprueba errores en cada operación que pueda fallar, define cuánto viven los recursos abiertos y cuánta entrada acepta el programa. Esas decisiones siguen importando al convertir un ejemplo local en servicio HTTP."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo copia desde strings.Reader a bytes.Buffer. io.Copy devuelve el número de bytes y un error. Después el buffer expone su contenido como cadena. Ambos tipos viven en memoria y muestran la relación reader/writer sin añadir rutas ni fallos de red."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"bytes\"\n    \"fmt\"\n    \"io\"\n    \"strings\"\n)\n\nfunc main() {\n    var output bytes.Buffer\n    n, err := io.Copy(&output, strings.NewReader(\"hello\"))\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(n, output.String())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Una interfaz abstrae comportamiento, no coste. io.ReadAll puede reservar memoria para toda la entrada; io.Copy sin restricciones puede continuar mientras lleguen datos. Los ejemplos posteriores añaden límites, plazos y cierre de recursos sin asumir entradas pequeñas y confiables."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Sustituye el origen por una cadena vacía y revisa el contador. Escribe una función que reciba io.Reader y devuelva los bytes copiados a io.Discard."
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
              "slug": "go-basics-learning-path",
              "label": "01. Fundamentos de Go: una ruta de 50 lecciones prácticas"
            },
            {
              "slug": "go-basics-files",
              "label": "33. Leer y escribir archivos pequeños en Go con limpieza explícita"
            },
            {
              "slug": "go-basics-buffered-input",
              "label": "34. Leer texto por líneas en Go con bufio.Scanner"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON en Go: campos exportados, etiquetas y validación"
            },
            {
              "slug": "go-basics-time",
              "label": "36. Tiempo en Go: duraciones, layouts y zonas horarias"
            },
            {
              "slug": "go-basics-environment",
              "label": "37. Variables de entorno en Go: valores por defecto y validación"
            },
            {
              "slug": "go-basics-command-line-flags",
              "label": "38. Opciones de consola en Go: analizar argumentos con flag"
            },
            {
              "slug": "go-basics-http-server",
              "label": "39. Crear un primer handler HTTP en Go con net/http"
            },
            {
              "slug": "go-basics-http-client",
              "label": "40. Clientes HTTP en Go: timeouts, estados y cierre del cuerpo"
            },
            {
              "slug": "go-basics-unit-tests",
              "label": "41. Pruebas unitarias en Go: tablas de casos y fallos útiles"
            },
            {
              "slug": "go-basics-generics",
              "label": "31. Genéricos en Go: parámetros de tipo y restricciones"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/io",
      "url": "https://pkg.go.dev/io"
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
