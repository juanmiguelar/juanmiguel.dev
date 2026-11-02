import type { BlogPost } from '../../types'

export default {
  "slug": "go-basics-errors",
  "status": "published",
  "publishedOn": "2026-11-01",
  "tags": [
    "Go",
    "Golang",
    "Go basics"
  ],
  "series": {
    "slug": "go-basics",
    "order": 27
  },
  "translations": {
    "en": {
      "title": "Error handling in Go: return, check and add context",
      "description": "Return ordinary Go errors for expected failures and keep invalid results from entering the successful execution path.",
      "category": "Go basics",
      "sections": [
        {
          "id": "concept",
          "heading": "Understand the contract",
          "paragraphs": [
            "An error in Go is a value implementing the Error() string method. A nil error commonly signals success. Functions that can fail often return (result, error), letting the caller decide whether to retry, report the problem or stop. Check the error before using a result that depends on success.",
            "Validation belongs at the point that knows the rule. divide rejects a zero divisor and returns a descriptive error. The caller prints that error once and returns. A library function should usually return the failure rather than log and return it too, which often produces duplicate reports."
          ]
        },
        {
          "id": "example",
          "heading": "Work through the example",
          "paragraphs": [
            "The example succeeds with ten divided by two and prints five. Changing the divisor to zero follows the error branch. The zero result accompanying an error is not a valid quotient. Naming that convention in the function contract helps callers avoid consuming partial or placeholder results."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 { return 0, errors.New(\"divisor must be nonzero\") }\n    return a / b, nil\n}\n\nfunc main() {\n    result, err := divide(10, 2)\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(result)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Watch this boundary",
          "paragraphs": [
            "Do not use panic for ordinary malformed input that callers can reasonably handle. Panic is appropriate for different classes of failure and unwinds the stack until recovered or the program exits. Returning an error keeps expected failures in the function’s visible API and makes them straightforward to test."
          ]
        },
        {
          "id": "practice",
          "heading": "Practice with a changed input",
          "paragraphs": [
            "Test positive, negative and zero divisors. Change the caller so it adds operation context when displaying a failure while leaving divide independent of console output."
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
              "slug": "go-basics-defer",
              "label": "26. Go defer: release resources at the right boundary"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Wrap Go errors with %w and inspect them with errors.Is"
            }
          ]
        }
      ]
    },
    "es": {
      "title": "Errores en Go: devolver, comprobar y añadir contexto",
      "description": "Devuelve errores ordinarios para fallos esperados y evita usar resultados inválidos en la ruta correcta de ejecución.",
      "category": "Fundamentos de Go",
      "sections": [
        {
          "id": "concept",
          "heading": "Entender el contrato",
          "paragraphs": [
            "Un error Go es un valor que implementa Error() string. Un error nil suele indicar éxito. Las funciones que pueden fallar devuelven habitualmente (resultado, error), permitiendo decidir si reintentar, informar o detenerse. Comprueba el error antes de usar un resultado que dependa del éxito.",
            "Valida en el punto que conoce la regla. divide rechaza divisor cero y devuelve un error descriptivo. Quien llama lo imprime una vez y retorna. Una biblioteca normalmente debe devolver el fallo en lugar de registrarlo y devolverlo a la vez, evitando informes duplicados."
          ]
        },
        {
          "id": "example",
          "heading": "Trabajar el ejemplo",
          "paragraphs": [
            "El ejemplo divide diez entre dos e imprime cinco. Con divisor cero entra en la rama de error. El cero que acompaña al error no es un cociente válido. Expresar esa convención en el contrato evita consumir resultados parciales o auxiliares."
          ],
          "code": {
            "language": "go",
            "value": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 { return 0, errors.New(\"divisor must be nonzero\") }\n    return a / b, nil\n}\n\nfunc main() {\n    result, err := divide(10, 2)\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(result)\n}"
          }
        },
        {
          "id": "pitfalls",
          "heading": "Revisar este límite",
          "paragraphs": [
            "No uses panic para entradas inválidas ordinarias que puedan manejarse razonablemente. Panic corresponde a otras clases de fallo y recorre la pila hasta recuperarse o terminar el programa. Devolver error mantiene los fallos esperados en la API visible y facilita probarlos."
          ]
        },
        {
          "id": "practice",
          "heading": "Practicar con otra entrada",
          "paragraphs": [
            "Prueba divisores positivos, negativos y cero. Cambia quien llama para añadir contexto al mostrar fallos, manteniendo divide independiente de la consola."
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
              "slug": "go-basics-defer",
              "label": "26. defer en Go: liberar recursos en el límite correcto"
            },
            {
              "slug": "go-basics-wrap-errors",
              "label": "28. Envolver errores con %w y examinarlos con errors.Is"
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
