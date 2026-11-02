import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-wrap-errors",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 28
  },
  "translations": {
    "en": {
      "title": "Wrap Go errors with %w and inspect them with errors.Is",
      "description": "Add context to Go errors without losing their identity, and distinguish errors.Is from fragile message comparisons.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Wrapping an error adds operation context while preserving the original cause for inspection. Use fmt.Errorf with %w, then errors.Is to look for a particular sentinel in the resulting chain. This lets callers react to a known failure without depending on the exact wording shown to a human.",
            "A sentinel is a shared error value used to identify a category. The example defines ErrMissing once and wraps it with a user identifier. errors.Is follows wrapping relationships. For a structured error type carrying fields, errors.As can recover a matching typed error instead of inspecting a message."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "loadUser returns contextual information while main still recognizes the missing-data condition. The program prints the fallback message. Replacing %w with %v retains readable text but loses this wrapping relationship. Choose %w when revealing the underlying error category is part of your API contract."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nvar ErrMissing = errors.New(\"missing\")\n\nfunc loadUser(id int) error {\n    return fmt.Errorf(\"load user %d: %w\", id, ErrMissing)\n}\n\nfunc main() {\n    err := loadUser(7)\n    if errors.Is(err, ErrMissing) { fmt.Println(\"use a fallback\") }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Comparing err.Error() with a literal breaks when wording changes or context is added. Also, returning a wrapped implementation-specific error can expose a dependency decision to callers. Decide which categories are stable before encouraging consumers to match them across package boundaries."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add another wrapping layer and confirm errors.Is still recognizes ErrMissing. Then replace the inner sentinel with a different error and verify that the fallback no longer matches."
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
              "slug": "go-basics-functions",
              "label": "22. Go functions: parameters, results and small contracts"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Error handling in Go: return, check and add context"
            },
            {
              "slug": "go-basics-methods",
              "label": "29. Go methods: choose value or pointer receivers"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Envolver errores con %w y examinarlos con errors.Is",
      "description": "Añade contexto a errores sin perder su identidad y distingue errors.Is de comparaciones frágiles de mensajes.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Envolver un error añade contexto de la operación y conserva la causa para inspeccionarla. Usa fmt.Errorf con %w y después errors.Is para buscar un error centinela en la cadena. Así se puede reaccionar a un fallo conocido sin depender del texto mostrado a una persona.",
            "Un centinela es un valor de error compartido que identifica una categoría. El ejemplo define ErrMissing una vez y lo envuelve con el identificador del usuario. errors.Is sigue esas relaciones. Para un error estructurado con campos, errors.As permite recuperar el tipo correspondiente."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "loadUser devuelve contexto y main sigue reconociendo la ausencia de datos. El programa imprime el mensaje alternativo. Cambiar %w por %v conserva texto legible pero pierde la relación de envoltura. Usa %w cuando exponer la categoría subyacente forme parte del contrato."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nvar ErrMissing = errors.New(\"missing\")\n\nfunc loadUser(id int) error {\n    return fmt.Errorf(\"load user %d: %w\", id, ErrMissing)\n}\n\nfunc main() {\n    err := loadUser(7)\n    if errors.Is(err, ErrMissing) { fmt.Println(\"use a fallback\") }\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Comparar err.Error() con una cadena se rompe al cambiar el texto o añadir contexto. Devolver errores específicos de implementación también puede exponer una dependencia a los consumidores. Decide qué categorías son estables antes de recomendar comparaciones entre paquetes."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade otra capa y comprueba que errors.Is reconoce ErrMissing. Sustituye el centinela interior por otro error y verifica que ya no coincide."
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
              "slug": "go-basics-functions",
              "label": "22. Funciones en Go: parámetros, resultados y contratos pequeños"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Errores en Go: devolver, comprobar y añadir contexto"
            },
            {
              "slug": "go-basics-methods",
              "label": "29. Métodos en Go: elegir receptor por valor o puntero"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: pkg.go.dev/errors",
      "url": "https://pkg.go.dev/errors"
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
