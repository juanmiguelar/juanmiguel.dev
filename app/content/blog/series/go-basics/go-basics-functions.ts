import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-functions",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 22
  },
  "translations": {
    "en": {
      "title": "Go functions: parameters, results and small contracts",
      "description": "Define Go functions with explicit inputs and results, then follow the guide to errors, methods, interfaces and generics.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A Go function names a computation with declared parameter and result types. Start with a small contract: what input is valid, what value is returned and whether the function changes external state. That contract makes a function easier to reuse and gives a test a concrete expectation.",
            "This block builds from ordinary functions to multiple results, variadic parameters, error values, methods and interfaces. Keep input validation close to the operation that understands the rule. For an expected failure, return an error; do not force every caller to recover from a panic."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example defines add as a function of two ints returning one int. Both parameters share a type declaration, and return supplies the result. Calling add does not change a or b in the caller. Local names inside the function are independent of the caller’s variable names."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc add(a, b int) int { return a + b }\n\nfunc main() { fmt.Println(add(2, 3)) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A function with many unrelated boolean parameters is difficult to call correctly. Before adding an options struct or interface, ask whether the function performs several unrelated jobs. Prefer a clear operation and explicit arguments; introduce abstractions after you can show the repeated need."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Write a function that computes a rectangle’s area. Define what should happen for negative dimensions, then use the errors lesson to express that decision without printing inside the calculation."
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
              "slug": "go-basics-multiple-results",
              "label": "23. Multiple return values in Go: results and presence"
            },
            {
              "slug": "go-basics-variadic-functions",
              "label": "24. Variadic functions in Go: accept zero or more arguments"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Go scope and closures: capture variables deliberately"
            },
            {
              "slug": "go-basics-defer",
              "label": "26. Go defer: release resources at the right boundary"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Error handling in Go: return, check and add context"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Wrap Go errors with %w and inspect them with errors.Is"
            },
            {
              "slug": "go-basics-methods",
              "label": "29. Go methods: choose value or pointer receivers"
            },
            {
              "slug": "go-basics-interfaces",
              "label": "30. Go interfaces: define the behavior a caller needs"
            },
            {
              "slug": "go-basics-generics",
              "label": "31. Go generics for beginners: type parameters and constraints"
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
      "title": "Funciones en Go: parámetros, resultados y contratos pequeños",
      "description": "Define funciones con entradas y resultados explícitos y continúa con errores, métodos, interfaces y genéricos.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una función Go nombra un cálculo con tipos declarados para parámetros y resultados. Comienza con un contrato pequeño: entradas válidas, resultado y cambios de estado externo. Ese contrato permite reutilizar la función y da a una prueba una expectativa concreta.",
            "Este bloque avanza desde funciones ordinarias hasta retornos múltiples, parámetros variables, errores, métodos e interfaces. Valida cerca de la operación que entiende la regla. Para un fallo esperado devuelve error, sin obligar a cada consumidor a recuperarse de un panic."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo define add con dos int de entrada y uno de salida. Ambos parámetros comparten declaración de tipo y return entrega el resultado. Llamar a add no modifica variables externas. Los nombres locales son independientes de los nombres usados por quien llama."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc add(a, b int) int { return a + b }\n\nfunc main() { fmt.Println(add(2, 3)) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Una función con muchos booleanos sin relación resulta difícil de llamar correctamente. Antes de añadir un struct de opciones o una interfaz, revisa si realiza trabajos independientes. Prefiere una operación clara y argumentos explícitos; introduce abstracciones cuando puedas mostrar la necesidad repetida."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Escribe una función que calcule el área de un rectángulo. Define qué ocurre con dimensiones negativas y usa la lección de errores para expresarlo sin imprimir dentro del cálculo."
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
              "slug": "go-basics-multiple-results",
              "label": "23. Retornos múltiples en Go: resultados y presencia"
            },
            {
              "slug": "go-basics-variadic-functions",
              "label": "24. Funciones variádicas en Go: recibir cero o más argumentos"
            },
            {
              "slug": "go-basics-scope-and-closures",
              "label": "25. Ámbitos y closures en Go: capturar variables con intención"
            },
            {
              "slug": "go-basics-defer",
              "label": "26. defer en Go: liberar recursos en el límite correcto"
            },
            {
              "slug": "go-basics-errors",
              "label": "27. Errores en Go: devolver, comprobar y añadir contexto"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Envolver errores con %w y examinarlos con errors.Is"
            },
            {
              "slug": "go-basics-methods",
              "label": "29. Métodos en Go: elegir receptor por valor o puntero"
            },
            {
              "slug": "go-basics-interfaces",
              "label": "30. Interfaces en Go: definir el comportamiento necesario"
            },
            {
              "slug": "go-basics-generics",
              "label": "31. Genéricos en Go: parámetros de tipo y restricciones"
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
