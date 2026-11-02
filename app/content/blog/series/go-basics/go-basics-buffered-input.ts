import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-buffered-input",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 34
  },
  "translations": {
    "en": {
      "title": "Read text line by line in Go with bufio.Scanner",
      "description": "Process Go text input line by line, check Scanner.Err and set an explicit token limit for controlled input sizes.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "bufio.Scanner splits input into tokens, using lines by default. Call Scan repeatedly, consume Text for each token and check Err after the loop. A false Scan result can mean normal end of input or a scanning failure; checking Err distinguishes those outcomes.",
            "Scanner has a token-size limit. Buffer lets you supply initial storage and a maximum before scanning starts. The example allows lines up to the configured bound rather than treating input size as unlimited. For inputs requiring larger or custom streaming behavior, bufio.Reader offers different tradeoffs."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example trims each line and skips blank results, printing go and tests. TrimSpace is an application decision: source code, fixed-width records or user messages may need to preserve whitespace. Scanner.Text returns a string; Scanner.Bytes returns a buffer that later scanning can overwrite."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"bufio\"\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    scanner := bufio.NewScanner(strings.NewReader(\"go\\n\\n tests \\n\"))\n    scanner.Buffer(make([]byte, 1024), 64*1024)\n    for scanner.Scan() {\n        line := strings.TrimSpace(scanner.Text())\n        if line != \"\" { fmt.Println(line) }\n    }\n    if err := scanner.Err(); err != nil { fmt.Println(\"scan:\", err) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Ignoring scanner.Err can silently accept a truncated import when a line exceeds the limit. Choose whether failure should discard all processed records or report a partial result. For an all-or-nothing import, avoid committing records until validation has established that the complete input is acceptable."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Create a line larger than the configured maximum and verify that Err is reported. Then preserve blank lines and compare the output with the filtering version."
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
              "slug": "go-basics-files",
              "label": "33. Read and write small files in Go with explicit cleanup"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON in Go: exported fields, tags and validation"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Leer texto por líneas en Go con bufio.Scanner",
      "description": "Procesa texto por líneas con Go, comprueba Scanner.Err y define un límite explícito para el tamaño de cada token.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "bufio.Scanner divide la entrada en tokens y usa líneas por defecto. Llama a Scan repetidamente, consume Text y comprueba Err al terminar. Scan en false puede significar final normal o fallo de lectura; Err permite distinguirlos.",
            "Scanner limita el tamaño de tokens. Buffer configura almacenamiento inicial y máximo antes de comenzar. El ejemplo admite líneas dentro del límite configurado, sin asumir tamaños ilimitados. Para lectura mayor o comportamiento de streaming personalizado, bufio.Reader ofrece otras opciones."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo quita espacios de cada línea, ignora resultados vacíos e imprime go y tests. TrimSpace es una decisión de aplicación: código fuente, registros fijos o mensajes podrían necesitar conservar espacios. Scanner.Text devuelve string; Scanner.Bytes devuelve almacenamiento reutilizable en la siguiente lectura."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"bufio\"\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    scanner := bufio.NewScanner(strings.NewReader(\"go\\n\\n tests \\n\"))\n    scanner.Buffer(make([]byte, 1024), 64*1024)\n    for scanner.Scan() {\n        line := strings.TrimSpace(scanner.Text())\n        if line != \"\" { fmt.Println(line) }\n    }\n    if err := scanner.Err(); err != nil { fmt.Println(\"scan:\", err) }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Ignorar scanner.Err puede aceptar una importación truncada al exceder el límite. Decide si un fallo descarta todos los registros o informa de un resultado parcial. Para una importación indivisible, evita guardar registros hasta validar la entrada completa."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Crea una línea mayor al máximo y verifica que se informa Err. Después conserva líneas vacías y compara la salida con la versión filtrada."
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
              "slug": "go-basics-files",
              "label": "33. Leer y escribir archivos pequeños en Go con limpieza explícita"
            },
            {
              "slug": "go-basics-json",
              "label": "35. JSON en Go: campos exportados, etiquetas y validación"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/bufio",
      "url": "https://pkg.go.dev/bufio"
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
