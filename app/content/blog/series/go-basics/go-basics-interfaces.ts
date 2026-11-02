import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-interfaces",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 30
  },
  "translations": {
    "en": {
      "title": "Go interfaces: define the behavior a caller needs",
      "description": "Build a small implicitly satisfied Go interface, use pointer method sets correctly and understand the typed-nil trap.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An interface specifies behavior through a set of methods. A type satisfies it implicitly when its method set includes those methods. Define a small interface where a consumer needs that behavior, rather than creating an interface for every struct before any consumer requires one.",
            "The named function accepts a Namer and only calls Name. User satisfies the interface with a value receiver, so both User and *User can provide that behavior. If Name had a pointer receiver, a User value would not satisfy Namer, although an ordinary method call may take an address automatically."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example prints Ada without named knowing how a user stores its name. An alternative type can implement Name using a different representation. This gives a useful substitution point when the consumer needs behavior; direct struct parameters remain a good choice when no substitution is necessary."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Namer interface { Name() string }\ntype User struct { Display string }\n\nfunc (u User) Name() string { return u.Display }\nfunc named(value Namer) string { return value.Name() }\n\nfunc main() { fmt.Println(named(User{Display: \"Ada\"})) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "An interface value is nil only when it has neither a dynamic type nor a dynamic value. An interface holding a typed nil pointer is not nil. Calling a method through it can still panic if that method dereferences the pointer. Return a literal nil error for success, rather than a typed nil pointer."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Create a second Namer type and pass it to named. Then inspect an empty interface and an interface holding (*User)(nil), comparing each with nil without invoking methods."
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
              "slug": "go-basics-methods",
              "label": "29. Go methods: choose value or pointer receivers"
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
      "title": "Interfaces en Go: definir el comportamiento necesario",
      "description": "Crea una interfaz pequeña de implementación implícita, usa conjuntos de métodos y comprende el caso de nil tipado.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Una interfaz especifica comportamiento mediante métodos. Un tipo la satisface implícitamente si su conjunto de métodos los incluye. Define una interfaz pequeña donde un consumidor necesite ese comportamiento, en lugar de crear una para cada struct sin una necesidad concreta.",
            "La función named recibe Namer y solo llama a Name. User satisface la interfaz con receptor por valor; tanto User como *User pueden aportar el comportamiento. Con receptor por puntero, User no satisfaría Namer, aunque una llamada ordinaria a un método pueda tomar la dirección automáticamente."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo imprime Ada sin que named conozca cómo se almacena el nombre. Otro tipo puede implementar Name con una representación distinta. Esto permite sustitución donde se necesita comportamiento; un parámetro struct directo sigue siendo apropiado si no hace falta sustituirlo."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport \"fmt\"\n\ntype Namer interface { Name() string }\ntype User struct { Display string }\n\nfunc (u User) Name() string { return u.Display }\nfunc named(value Namer) string { return value.Name() }\n\nfunc main() { fmt.Println(named(User{Display: \"Ada\"})) }"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Una interfaz es nil solo si no tiene tipo dinámico ni valor dinámico. Si contiene un puntero nil tipado, la interfaz no es nil. Llamar un método puede causar panic si desreferencia ese puntero. Para éxito devuelve nil literal como error, en vez de un puntero nil tipado."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Crea otro tipo Namer y pásalo a named. Compara con nil una interfaz vacía y otra que contenga (*User)(nil), sin invocar sus métodos."
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
              "slug": "go-basics-methods",
              "label": "29. Métodos en Go: elegir receptor por valor o puntero"
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
      "title": "Go: official documentation",
      "url": "https://go.dev/doc/"
    },
    {
      "title": "Go language specification",
      "url": "https://go.dev/ref/spec"
    }
  ]
} satisfies BlogPost
