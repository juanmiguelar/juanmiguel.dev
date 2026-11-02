import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-files",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 33
  },
  "translations": {
    "en": {
      "title": "Read and write small files in Go with explicit cleanup",
      "description": "Use os.ReadFile and os.WriteFile for small local files, propagate errors and isolate practice data in a temporary directory.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "os.ReadFile reads a complete file into memory, while os.WriteFile writes a byte slice to a path. These helpers fit small local configuration or practice files. For large or continuous input, open the file and process it through io.Reader instead of loading everything at once.",
            "The example creates a temporary directory so it does not overwrite an existing notes.txt in your project. filepath.Join builds a path appropriate for the operating system. Deferred cleanup runs when run returns. The write permission is meaningful under Unix permission rules; platform behavior can differ."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "run returns errors to main and only prints content after both operations succeed. WriteFile may truncate an existing target, which is another reason to use the private temporary directory here. The resulting string includes a newline, so Print rather than Println avoids adding a second one."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"path/filepath\"\n)\n\nfunc run() error {\n    dir, err := os.MkdirTemp(\"\", \"go-lesson-*\")\n    if err != nil { return err }\n    defer os.RemoveAll(dir)\n    path := filepath.Join(dir, \"notes.txt\")\n    if err := os.WriteFile(path, []byte(\"learn Go\\n\"), 0600); err != nil { return err }\n    data, err := os.ReadFile(path)\n    if err != nil { return err }\n    fmt.Print(string(data))\n    return nil\n}\n\nfunc main() { if err := run(); err != nil { fmt.Println(err) } }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Direct writes are not automatically atomic updates. If another process must never observe a partial replacement, design a temporary-file and rename workflow appropriate to the filesystem and durability requirements. Also handle cleanup errors when their outcome matters; this educational example uses best-effort removal of its temporary data."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change the payload to Unicode text and compare the byte length with its rune count. Then attempt a read of a missing filename and inspect the returned error."
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
              "slug": "go-basics-buffered-input",
              "label": "34. Read text line by line in Go with bufio.Scanner"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Leer y escribir archivos pequeños en Go con limpieza explícita",
      "description": "Usa os.ReadFile y os.WriteFile para archivos pequeños, propaga errores y aísla las prácticas en un directorio temporal.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "os.ReadFile carga un archivo completo en memoria; os.WriteFile escribe un slice de bytes en una ruta. Sirven para configuración pequeña o archivos de práctica. Con entradas grandes o continuas, abre el archivo y procésalo mediante io.Reader sin cargar todo de una vez.",
            "El ejemplo crea un directorio temporal para no sobrescribir un notes.txt del proyecto. filepath.Join construye una ruta adecuada al sistema. La limpieza diferida ocurre al retornar run. Los permisos indicados tienen significado según reglas Unix; otras plataformas pueden comportarse de forma distinta."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "run devuelve errores a main e imprime solo después de completar ambas operaciones. WriteFile puede truncar un destino existente; por eso se usa un directorio temporal privado. La cadena incluye salto de línea y Print evita añadir otro."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n    \"path/filepath\"\n)\n\nfunc run() error {\n    dir, err := os.MkdirTemp(\"\", \"go-lesson-*\")\n    if err != nil { return err }\n    defer os.RemoveAll(dir)\n    path := filepath.Join(dir, \"notes.txt\")\n    if err := os.WriteFile(path, []byte(\"learn Go\\n\"), 0600); err != nil { return err }\n    data, err := os.ReadFile(path)\n    if err != nil { return err }\n    fmt.Print(string(data))\n    return nil\n}\n\nfunc main() { if err := run(); err != nil { fmt.Println(err) } }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Las escrituras directas no son actualizaciones atómicas automáticas. Si otro proceso no debe observar cambios parciales, diseña escritura temporal y renombrado según el sistema de archivos y la durabilidad requerida. Gestiona errores de limpieza si importan; aquí se intenta eliminar los datos temporales al finalizar."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia el contenido por texto Unicode y compara bytes y runes. Después intenta leer un nombre inexistente y revisa el error."
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
              "slug": "go-basics-buffered-input",
              "label": "34. Leer texto por líneas en Go con bufio.Scanner"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/os",
      "url": "https://pkg.go.dev/os"
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
