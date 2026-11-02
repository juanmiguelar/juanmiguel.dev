import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-structs",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 20
  },
  "translations": {
    "en": {
      "title": "Go structs: group related fields into a value",
      "description": "Define Go structs, use named fields in literals and understand copying, exported fields and nested mutable data.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A struct groups fields into a single value with a defined type. Use one when several values describe the same thing, such as a task’s title and completion state. Named fields make construction readable and allow different types within the same record without relying on positional conventions.",
            "Fields beginning with an uppercase letter are exported outside the package. A struct literal can initialize selected fields; omitted fields receive their zero values. Access fields with a dot. You can add methods to a named struct type later without changing the basic representation."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example constructs a task whose Done field defaults to false. Assigning it to completed copies the struct, so setting completed.Done leaves task.Done unchanged. The resulting values share their title text safely because strings are immutable, while their boolean fields are independent."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Task struct {\n    Title string\n    Done  bool\n}\n\nfunc main() {\n    task := Task{Title: \"Learn Go\"}\n    completed := task\n    completed.Done = true\n    fmt.Println(task, completed)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Struct copying is shallow with respect to fields that refer to other storage. If Task contains a slice of labels, copying Task also copies the slice descriptor and can leave labels shared. Decide whether your API returns snapshots or shared data, and copy nested collections when independence is required."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a []string field named Labels, copy the task and modify one label through the copy. Explain why its behavior differs from the Done field."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Go collections: start with arrays and value semantics"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Sort Go data and produce deterministic map output"
            },
            {
              "slug": "go-basics-pointers",
              "label": "21. Go pointers: addresses, dereferencing and nil"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Structs en Go: agrupar campos relacionados en un valor",
      "description": "Define structs, usa campos con nombre en literales y comprende copias, campos exportados y datos mutables anidados.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un struct agrupa campos en un valor de tipo definido. Úsalo cuando varios datos describan lo mismo, como el título y estado de una tarea. Los campos con nombre facilitan leer la construcción y combinar tipos sin depender de convenciones de posición.",
            "Los campos que comienzan con mayúscula se exportan fuera del paquete. Un literal puede inicializar campos seleccionados; los omitidos reciben su valor cero. Accede con punto. Más adelante puedes añadir métodos al tipo con nombre sin cambiar su representación básica."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo construye una tarea con Done en false por defecto. Asignarla a completed copia el struct; cambiar completed.Done deja task.Done intacto. Ambos valores comparten el texto del título de forma segura porque las cadenas son inmutables; sus booleanos son independientes."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Task struct {\n    Title string\n    Done  bool\n}\n\nfunc main() {\n    task := Task{Title: \"Learn Go\"}\n    completed := task\n    completed.Done = true\n    fmt.Println(task, completed)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "La copia es superficial respecto a campos que apuntan a otro almacenamiento. Si Task contiene un slice de etiquetas, copiar Task copia su descriptor y puede dejar etiquetas compartidas. Decide si tu API devuelve instantáneas o datos compartidos y copia las colecciones anidadas cuando necesites independencia."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade un campo Labels de tipo []string, copia la tarea y modifica una etiqueta desde la copia. Explica por qué difiere del comportamiento de Done."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Colecciones en Go: comenzar con arrays y valores"
            },
            {
              "slug": "go-basics-sorting",
              "label": "19. Ordenar datos en Go y mostrar maps de forma determinista"
            },
            {
              "slug": "go-basics-pointers",
              "label": "21. Punteros en Go: direcciones, desreferencia y nil"
            }
          ]
        }
      ]
    }
  },
  "references": [
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
