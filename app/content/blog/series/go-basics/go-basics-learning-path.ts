import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-learning-path",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 1
  },
  "translations": {
    "en": {
      "title": "Learn Go basics: a path through 50 practical lessons",
      "description": "Learn Go through 50 connected lessons with runnable examples, exercises, common mistakes, testing, concurrency and a final HTTP project.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "Go is a compiled language with static types, garbage collection and built-in concurrency primitives. This series starts with a small command-line program and builds toward a tested HTTP endpoint. You can work through the lessons in order or enter through one of the five topic guides below.",
            "Begin with the toolchain and the relationship between modules, packages and files. Then practice control flow and collections before introducing interfaces or goroutines. A slice, a pointer and an interface solve different problems; learning their behavior separately makes later examples easier to reason about."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The command sequence creates an independent practice module. Save each complete Go example as main.go in a separate lesson directory and run go run . there. Shell examples include their own commands; test examples explicitly name their files. The series uses only the standard library and established language features."
          ],
          "code": {
            "language": "shell",
            "value": "mkdir go-practice\ncd go-practice\ngo mod init example.com/go-practice\ngo version"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "A successful compilation does not prove that a program handles empty input, invalid data or cancellation. Predict the output before running each example, then change one condition. Keep those expectations when you reach the testing lessons. No lesson depends on a paid service or a cloud account."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Create a practice folder and keep a short note for each lesson: expected result, actual result and one changed input. Finish by running the final endpoint test before starting its server."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Go collections: start with arrays and value semantics"
            },
            {
              "slug": "go-basics-functions",
              "label": "22. Go functions: parameters, results and small contracts"
            },
            {
              "slug": "go-basics-standard-library",
              "label": "32. Go standard library: connect readers, writers and tools"
            },
            {
              "slug": "go-basics-goroutines",
              "label": "42. Go concurrency: start a goroutine and wait for its result"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Fundamentos de Go: una ruta de 50 lecciones prácticas",
      "description": "Aprende Go con 50 lecciones conectadas: ejemplos, ejercicios, errores frecuentes, pruebas, concurrencia y un proyecto HTTP final.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Go es un lenguaje compilado con tipos estáticos, recolección de basura y primitivas de concurrencia. Esta serie comienza con un programa de consola y avanza hasta un endpoint HTTP con pruebas. Puedes seguir las lecciones en orden o entrar por una de las cinco guías temáticas enlazadas abajo.",
            "Comienza con las herramientas y la relación entre módulos, paquetes y archivos. Después practica el flujo de control y las colecciones antes de introducir interfaces o goroutines. Un slice, un puntero y una interfaz resuelven problemas distintos; conocer su comportamiento por separado ayuda a entender los ejemplos posteriores."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "Los comandos crean un módulo de práctica independiente. Guarda cada ejemplo completo de Go como main.go en un directorio propio de la lección y ejecuta go run . allí. Los ejemplos de terminal incluyen sus comandos; las pruebas indican los nombres de sus archivos. La serie usa la biblioteca estándar y características consolidadas del lenguaje."
          ],
          "code": {
            "language": "shell",
            "value": "mkdir go-practice\ncd go-practice\ngo mod init example.com/go-practice\ngo version"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "Compilar sin errores no demuestra que el programa maneje entradas vacías, datos inválidos o cancelación. Predice la salida antes de ejecutar cada ejemplo y cambia una condición. Conserva esas expectativas al llegar a las lecciones de pruebas. Ninguna lección requiere servicios de pago ni una cuenta en la nube."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Crea una carpeta de práctica y registra el resultado esperado, el observado y una entrada modificada por lección. Termina ejecutando la prueba del endpoint final antes de iniciar su servidor."
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
              "slug": "go-basics-arrays-and-collections",
              "label": "12. Colecciones en Go: comenzar con arrays y valores"
            },
            {
              "slug": "go-basics-functions",
              "label": "22. Funciones en Go: parámetros, resultados y contratos pequeños"
            },
            {
              "slug": "go-basics-standard-library",
              "label": "32. Biblioteca estándar de Go: conectar readers, writers y herramientas"
            },
            {
              "slug": "go-basics-goroutines",
              "label": "42. Concurrencia en Go: iniciar una goroutine y esperar su resultado"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go: go.dev/doc/tutorial/getting-started",
      "url": "https://go.dev/doc/tutorial/getting-started"
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
