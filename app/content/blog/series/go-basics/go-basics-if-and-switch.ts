import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-if-and-switch",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 10
  },
  "translations": {
    "en": {
      "title": "Go conditionals: if, switch and early returns",
      "description": "Use boolean conditions, scoped if initializers and switch cases to make Go decisions readable and explicit.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An if condition in Go must be a boolean expression. Integers, strings and pointers are not implicitly converted to true or false. Compare a count with zero, a string with the empty string or a pointer with nil. Use an early return when invalid input makes the remaining work unnecessary.",
            "A switch selects a matching case without automatically falling into the next case. The example uses an expressionless switch, so each case is a boolean condition. Conditions are evaluated in order and the first matching case runs. Keep more specific conditions ahead of broader ones."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The classify function rejects negative scores before assigning a category. With score 85, the second switch case returns \"pass\". Because every path returns a string, callers receive one result for every possible int. The braces around each control structure are required even for one statement."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc classify(score int) string {\n    if score < 0 { return \"invalid\" }\n    switch {\n    case score >= 90:\n        return \"excellent\"\n    case score >= 60:\n        return \"pass\"\n    default:\n        return \"retry\"\n    }\n}\n\nfunc main() { fmt.Println(classify(85)) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "An initializer such as if n, err := strconv.Atoi(text); err != nil gives n and err a scope limited to the if and its else branches. Do not expect to use n afterward. Also avoid fallthrough unless the intended execution of the following case is explicit and necessary."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Add a maximum valid score of 100. Check -1, 0, 59, 60, 89, 90 and 101 so that boundary behavior matches the categories you intended."
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
              "slug": "go-basics-conversions",
              "label": "09. Type conversion and string parsing in Go"
            },
            {
              "slug": "go-basics-for-loops",
              "label": "11. Go for loops: counters, conditions and termination"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Condicionales en Go: if, switch y retornos tempranos",
      "description": "Usa condiciones booleanas, inicializadores de if y casos switch para expresar decisiones claras y explícitas en Go.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una condición if en Go debe ser booleana. Los enteros, cadenas y punteros no se convierten implícitamente en verdadero o falso. Compara un contador con cero, una cadena con la cadena vacía o un puntero con nil. Usa un retorno temprano cuando una entrada inválida impida continuar.",
            "switch selecciona un caso coincidente sin continuar automáticamente al siguiente. El ejemplo usa switch sin expresión; cada case contiene una condición booleana. Las condiciones se evalúan en orden y se ejecuta la primera verdadera. Coloca las condiciones específicas antes que las generales."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "La función classify rechaza puntajes negativos antes de asignar categoría. Con 85, el segundo case devuelve \"pass\". Como todas las rutas retornan una cadena, quien llama recibe un resultado para cualquier int. Las llaves son obligatorias incluso cuando el bloque contiene una sola instrucción."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc classify(score int) string {\n    if score < 0 { return \"invalid\" }\n    switch {\n    case score >= 90:\n        return \"excellent\"\n    case score >= 60:\n        return \"pass\"\n    default:\n        return \"retry\"\n    }\n}\n\nfunc main() { fmt.Println(classify(85)) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Un inicializador como if n, err := strconv.Atoi(text); err != nil limita n y err al if y sus ramas else. No esperes usar n después. Evita fallthrough salvo que ejecutar el siguiente caso sea una decisión explícita y necesaria."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Añade un máximo válido de 100. Comprueba -1, 0, 59, 60, 89, 90 y 101 para que los límites coincidan con las categorías previstas."
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
              "slug": "go-basics-conversions",
              "label": "09. Conversión de tipos y lectura de números en Go"
            },
            {
              "slug": "go-basics-for-loops",
              "label": "11. Bucles for en Go: contadores, condiciones y terminación"
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
