import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-for-loops",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 11
  },
  "translations": {
    "en": {
      "title": "Go for loops: counters, conditions and termination",
      "description": "Write Go loops with counters or conditions and understand break, continue and reliable termination.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Go uses for for ordinary loops. You can supply an initializer, condition and update, write only a condition, or omit all three for an indefinite loop. Choose a form that makes the stopping condition visible. A loop that processes a slice usually works well with range, covered later.",
            "break exits the innermost enclosing for, switch or select. continue skips to the next iteration of the enclosing loop. In a three-part for, the update statement still runs after continue. In a condition-only loop, you must arrange any progress yourself, or a skipped update can cause an infinite loop."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example adds the odd integers from one through five and prints 9. The <= condition includes the upper boundary. Using < would exclude five. The counter is scoped to the loop, while sum belongs to the enclosing function so it remains available after iteration ends."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    sum := 0\n    for i := 1; i <= 5; i++ {\n        if i%2 == 0 { continue }\n        sum += i\n    }\n    fmt.Println(sum)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "An indefinite loop is appropriate only when another event can terminate it, such as an input error or cancellation. A busy loop that repeatedly checks a flag wastes CPU and may introduce a race. Later lessons use blocking channel operations and context cancellation to wait for concurrent work."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Change the upper limit to zero and predict the sum. Then rewrite the example as a condition-only loop while preserving the behavior of continue."
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
              "slug": "go-basics-install",
              "label": "02. Install Go and understand the basic development workflow"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Go conditionals: if, switch and early returns"
            },
            {
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Go collections: start with arrays and value semantics"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Bucles for en Go: contadores, condiciones y terminación",
      "description": "Escribe bucles Go con contadores o condiciones y comprende break, continue y cómo garantizar que terminen.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Go usa for para los bucles habituales. Puedes indicar inicializador, condición y actualización, escribir solo una condición u omitir las tres partes para un bucle indefinido. Elige una forma que haga visible la terminación. Para recorrer slices suele servir range, explicado más adelante.",
            "break sale del for, switch o select más cercano que lo contiene. continue pasa a la siguiente iteración. En un for de tres partes, la actualización sigue ejecutándose después de continue. Con un bucle de solo condición debes asegurar el avance; saltar una actualización puede provocar un bucle infinito."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo suma los enteros impares del uno al cinco e imprime 9. La condición <= incluye el límite superior. Usar < excluiría cinco. El contador pertenece al ámbito del bucle; sum pertenece a la función y sigue disponible al terminar."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    sum := 0\n    for i := 1; i <= 5; i++ {\n        if i%2 == 0 { continue }\n        sum += i\n    }\n    fmt.Println(sum)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un bucle indefinido necesita otro evento de terminación, como un error de lectura o una cancelación. Un bucle que consulta continuamente una bandera consume CPU y puede introducir una carrera. Las lecciones posteriores usan canales bloqueantes y context para esperar trabajo concurrente."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Cambia el límite superior a cero y predice la suma. Después reescribe el ejemplo con un bucle de solo condición conservando el comportamiento de continue."
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
              "slug": "go-basics-install",
              "label": "02. Instalar Go y entender el flujo básico de desarrollo"
            },
            {
              "slug": "go-basics-if-and-switch",
              "label": "10. Condicionales en Go: if, switch y retornos tempranos"
            },
            {
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Colecciones en Go: comenzar con arrays y valores"
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
