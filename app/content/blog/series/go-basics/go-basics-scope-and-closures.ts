import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-scope-and-closures",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 25
  },
  "translations": {
    "en": {
      "title": "Go scope and closures: capture variables deliberately",
      "description": "Understand lexical scope and build a small Go closure while recognizing shared captured state and shadowing.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "A closure is a function value that refers to variables from its surrounding lexical scope. Those variables remain available while the closure can use them. This is useful for local callbacks and stateful helpers, but it also means the captured state can change between calls.",
            "newCounter creates a count variable and returns a function that increments it. Each call to newCounter creates separate state. Assigning the returned function to another variable copies the function value while keeping access to the same captured count. A new factory call creates a different counter."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The first counter prints one and two, while the second starts again at one. The returned type func() int describes a function that accepts no arguments and returns an int. You can pass such a value to another function that needs a source of successive numbers."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc newCounter() func() int {\n    count := 0\n    return func() int { count++; return count }\n}\n\nfunc main() {\n    next := newCounter()\n    other := newCounter()\n    fmt.Println(next(), next(), other())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "This counter is intended for sequential calls. Calling the same closure from several goroutines introduces shared mutable state and needs synchronization. Also distinguish capturing an existing variable from declaring a new shadowing variable in an inner block: identical names do not always mean identical storage."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Assign alias := next and alternate calls between alias and next. Predict their shared sequence, then create another counter and verify that it starts independently."
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
              "slug": "go-basics-variadic-functions",
              "label": "24. Variadic functions in Go: accept zero or more arguments"
            },
            {
              "slug": "go-basics-defer",
              "label": "26. Go defer: release resources at the right boundary"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Ámbitos y closures en Go: capturar variables con intención",
      "description": "Comprende el ámbito léxico y crea un closure pequeño, reconociendo estado capturado compartido y variables ocultas.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un closure es un valor función que usa variables de su ámbito léxico exterior. Esas variables siguen disponibles mientras el closure pueda utilizarlas. Sirve para callbacks locales y funciones con estado, pero ese estado capturado puede cambiar entre llamadas.",
            "newCounter crea count y devuelve una función que lo incrementa. Cada llamada a newCounter crea estado independiente. Asignar la función devuelta a otra variable copia el valor función, manteniendo acceso al mismo count. Llamar otra vez a la fábrica crea otro contador."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El primer contador imprime uno y dos; el segundo comienza otra vez en uno. El tipo devuelto func() int describe una función sin argumentos que devuelve int. Puedes pasar ese valor a otra función que necesite una fuente de números sucesivos."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\nfunc newCounter() func() int {\n    count := 0\n    return func() int { count++; return count }\n}\n\nfunc main() {\n    next := newCounter()\n    other := newCounter()\n    fmt.Println(next(), next(), other())\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Este contador está pensado para llamadas secuenciales. Invocar el mismo closure desde varias goroutines comparte estado mutable y requiere sincronización. Distingue además capturar una variable existente de declarar otra que la oculte en un bloque interior: nombres iguales no siempre implican almacenamiento igual."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Asigna alias := next y alterna llamadas entre ambos. Predice la secuencia compartida, crea otro contador y verifica que comienza de forma independiente."
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
              "slug": "go-basics-variadic-functions",
              "label": "24. Funciones variádicas en Go: recibir cero o más argumentos"
            },
            {
              "slug": "go-basics-defer",
              "label": "26. defer en Go: liberar recursos en el límite correcto"
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
