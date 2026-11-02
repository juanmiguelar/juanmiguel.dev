import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-json",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 35
  },
  "translations": {
    "en": {
      "title": "JSON in Go: exported fields, tags and validation",
      "description": "Encode and decode Go structs with encoding/json and separate valid JSON syntax from application-level validation.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "encoding/json converts Go values to JSON and decodes JSON into Go values. For structs, ordinary exported fields participate in encoding. Field tags choose JSON names and options. Decoding validates syntax and compatible types, but your application still needs to validate rules such as a nonempty title.",
            "Marshal returns a byte slice and an error; Unmarshal needs a pointer to the destination so it can populate fields. A field named Done can use the tag json:\"done\" to produce a lowercase key. Unexported fields remain inaccessible to the ordinary encoder even when given a tag."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example decodes a task, rejects an empty title and encodes the validated value again. The program preserves false as an explicit JSON value. Adding omitempty would omit false, changing the representation. Decide whether absence and false have different meanings for your consumer."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Task struct {\n    Title string `json:\"title\"`\n    Done bool `json:\"done\"`\n}\n\nfunc main() {\n    var task Task\n    if err := json.Unmarshal([]byte(`{\"title\":\"Learn Go\",\"done\":false}`), &task); err != nil {\n        fmt.Println(err); return\n    }\n    if task.Title == \"\" { fmt.Println(\"title is required\"); return }\n    data, err := json.Marshal(task)\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(string(data))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Unmarshal ignores unknown object fields by default. A Decoder can reject them with DisallowUnknownFields, but you must also constrain input size and decide whether trailing data is allowed. Decoding arbitrary numbers into interface values normally produces float64; typed destination fields avoid that default ambiguity."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Try a numeric title, a missing title and an unknown field. Record which cases fail during decoding and which require your explicit application validation."
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
            },
            {
              "slug": "go-basics-time",
              "label": "36. Go time basics: durations, layouts and time zones"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "JSON en Go: campos exportados, etiquetas y validación",
      "description": "Codifica y decodifica structs con encoding/json y separa sintaxis JSON válida de validación de la aplicación.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "encoding/json convierte valores Go a JSON y decodifica JSON a valores Go. En structs participan los campos exportados ordinarios. Las etiquetas eligen nombres y opciones. Decodificar comprueba sintaxis y tipos compatibles, pero la aplicación debe validar reglas como título no vacío.",
            "Marshal devuelve bytes y error; Unmarshal necesita un puntero al destino para rellenar campos. Done puede usar json:\"done\" para producir una clave en minúscula. Los campos sin exportar siguen sin ser accesibles al codificador ordinario aunque lleven etiqueta."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo decodifica una tarea, rechaza título vacío y vuelve a codificar el valor validado. Conserva false como valor JSON explícito. Añadir omitempty omitiría false y cambiaría la representación. Decide si ausencia y false significan cosas diferentes para el consumidor."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Task struct {\n    Title string `json:\"title\"`\n    Done bool `json:\"done\"`\n}\n\nfunc main() {\n    var task Task\n    if err := json.Unmarshal([]byte(`{\"title\":\"Learn Go\",\"done\":false}`), &task); err != nil {\n        fmt.Println(err); return\n    }\n    if task.Title == \"\" { fmt.Println(\"title is required\"); return }\n    data, err := json.Marshal(task)\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(string(data))\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Unmarshal ignora campos desconocidos por defecto. Decoder puede rechazarlos con DisallowUnknownFields, pero también debes limitar tamaño y decidir si admites datos finales adicionales. Decodificar números a interfaces produce normalmente float64; campos de destino tipados evitan esa ambigüedad."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Prueba título numérico, título ausente y campo desconocido. Anota qué falla al decodificar y qué requiere validación explícita."
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
            },
            {
              "slug": "go-basics-time",
              "label": "36. Tiempo en Go: duraciones, layouts y zonas horarias"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/encoding/json",
      "url": "https://pkg.go.dev/encoding/json"
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
