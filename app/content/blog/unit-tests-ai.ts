import type { BlogPost } from './types'

const retryExample = `package retries

import "testing"

// maxAttempts includes the initial call; attempt is zero-based.
func CanRetry(attempt, maxAttempts int) bool {
    return attempt >= 0 && maxAttempts > 0 && attempt < maxAttempts-1
}

func TestCanRetry(t *testing.T) {
    cases := []struct {
        name        string
        attempt     int
        maxAttempts int
        want        bool
    }{
        {"retry after first call", 0, 3, true},
        {"retry after second call", 1, 3, true},
        {"stop after third call", 2, 3, false},
        {"already past the limit", 3, 3, false},
        {"one call means no retries", 0, 1, false},
        {"negative attempt", -1, 3, false},
        {"zero allowed calls", 0, 0, false},
        {"negative limit", 0, -1, false},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            if got := CanRetry(tc.attempt, tc.maxAttempts); got != tc.want {
                t.Errorf("CanRetry(%d, %d) = %v; want %v",
                    tc.attempt, tc.maxAttempts, got, tc.want)
            }
        })
    }
}`

export default {
  slug: 'why-unit-tests-matter-in-the-age-of-ai',
  status: 'published',
  publishedOn: '2026-10-16',
  tags: ['Unit testing', 'AI-assisted development', 'Go', 'Software quality'],
  translations: {
    en: {
      seoTitle: 'Unit tests in the AI era',
      title: 'Why unit tests matter more in the age of AI',
      description: 'AI can help write code and tests. Learn how independent expectations, boundary cases, and fast Go tests keep that speed grounded in reliable behavior.',
      category: 'Software quality',
      sections: [
        { id: 'speed-and-confidence', heading: 'Generating code is easier. Verifying intent still takes work.', paragraphs: [
          'AI coding tools make it easier to produce a plausible implementation. That changes how quickly we can propose a solution, but it does not decide whether the solution follows our business rules. A function can compile, look clean, and still count a retry incorrectly or accept an invalid configuration.',
          'GitHub’s guidance for Copilot explicitly calls for reviewing and testing generated suggestions. I see unit tests as a practical part of that review: they turn a few important expectations into executable checks that survive the original conversation with the coding assistant.',
          'The argument is not that every AI-assisted edit needs a large test suite. It is that important behavior deserves evidence, regardless of who or what wrote the implementation. The faster we generate changes, the more useful a small, trusted feedback loop becomes.'
        ] },
        { id: 'independent-expectations', heading: 'Write expectations independently of the implementation', paragraphs: [
          'A weak workflow asks an assistant to implement a function and then generate tests that match it. If both steps share the same mistaken assumption, the result can be a green test suite around the wrong behavior. Passing tests demonstrate agreement with the assertions, not automatic agreement with the requirements.',
          'Start with examples a person can explain without reading the function. What inputs are valid? What happens at the boundary? What should fail? Give those expectations to the assistant, review the resulting assertions, and keep the requirements as the reference when code and tests disagree.',
          'AI is useful for suggesting additional cases and writing repetitive test scaffolding. Reviewing the expected outputs remains engineering work. Asking another model to review the code can add a perspective, but it does not replace an independently defined rule.'
        ] },
        { id: 'go-example', heading: 'A small Go test can expose a big ambiguity', paragraphs: [
          'Consider a retry policy. Does a maximum of three attempts mean three calls in total, or three retries after the first call? Both interpretations can produce tidy code. Before implementation, choose a contract: maxAttempts includes the initial call, and attempt is the zero-based index of the call that just finished.',
          'Under that contract, attempts zero and one allow another call, while attempt two does not. This example also chooses to return false for negative attempts or non-positive limits. That is an explicit policy for this helper, not a universal rule for retry systems. A public configuration API might reject invalid values with an error instead.'
        ], code: { language: 'go', value: retryExample }, checklist: [
          'Save the complete example as retry_test.go in a Go module. Run: go test ./...',
          'Temporarily change the final comparison to attempt < maxAttempts. The last-call test should fail.',
          'Restore the implementation before committing. The deliberate failure checks that the test can detect the boundary mistake.'
        ] },
        { id: 'coverage', heading: 'Coverage helps find gaps; assertions define the checks', paragraphs: [
          'Coverage can show which statements ran during a test. It cannot tell you whether the expected outcome is correct or whether you covered the important business cases. A test that executes a function without checking its result may increase coverage while providing little protection.',
          'Use coverage to guide investigation, then inspect the assertions. For this retry helper, the boundary between the last allowed retry and the first forbidden retry matters more than adding several extra cases that all follow the same successful path. A deliberate local mutation is one way to check that an assertion notices the behavior you care about.'
        ] },
        { id: 'platform-boundaries', links: [{ slug: 'kubernetes-controllers-idempotent-reconciliation', label: 'Testing Kubernetes reconciliation' }], heading: 'Keep unit tests within their boundary', paragraphs: [
          'For a Go service or Kubernetes controller, unit tests are a good place to exercise configuration validation, policy decisions, and transformations of input data. Prefer deterministic tests that avoid unnecessary network calls or dependence on wall-clock timing.',
          'They do not prove that RBAC allows a real operation, an API server enforces a schema, or a complete provisioning workflow succeeds. Those questions need integration or end-to-end checks at the relevant boundary. Mocking every dependency can make a test pass while hiding a broken assumption about the real system.'
        ] },
        { id: 'workflow', heading: 'Use AI to shorten the feedback loop', paragraphs: [
          'My recommended workflow is to define the behavior, ask AI for a small implementation, and review both the diff and the tests. Run the targeted tests while iterating, then run the relevant broader checks before merging. Treat a failing test as information to investigate, rather than a reason to change the expectation until the build is green.',
          'Keep the valuable tests close to the code and run them in CI. Future refactors, whether manual or AI-assisted, then face the same documented expectations. The goal is not more test files. It is a codebase where we can explain what matters and demonstrate that a change still respects it.'
        ] }
      ]
    },
    es: {
      seoTitle: 'Pruebas unitarias en la era de IA',
      title: 'Por qué las pruebas unitarias importan más en la era de la IA',
      description: 'La IA puede ayudar a escribir código y pruebas. Las expectativas independientes, los casos límite y las pruebas en Go permiten validar ese trabajo.',
      category: 'Calidad de software',
      sections: [
        { id: 'speed-and-confidence', heading: 'Generar código es más fácil. Verificar la intención sigue siendo trabajo.', paragraphs: [
          'Las herramientas de IA facilitan producir una implementación que parece razonable. Eso cambia la velocidad con la que proponemos una solución, pero no determina si respeta las reglas del negocio. Una función puede compilar y verse limpia, y aun así contar mal los reintentos o aceptar una configuración inválida.',
          'La documentación de GitHub para Copilot pide revisar y probar las sugerencias generadas. Las pruebas unitarias son una parte práctica de esa revisión: convierten expectativas importantes en comprobaciones ejecutables que permanecen después de la conversación con el asistente.',
          'No todos los cambios asistidos por IA necesitan una suite enorme. El comportamiento importante sí necesita evidencia, sin importar quién escribió la implementación. Cuanto más rápido generamos cambios, más útil resulta un ciclo pequeño de validación en el que podamos confiar.'
        ] },
        { id: 'independent-expectations', heading: 'Definir las expectativas sin depender de la implementación', paragraphs: [
          'Un flujo débil consiste en pedir al asistente que implemente una función y después genere pruebas que coincidan con ella. Si ambos pasos comparten una suposición equivocada, podemos terminar con pruebas exitosas alrededor del comportamiento incorrecto. Pasar las pruebas demuestra que se cumplen sus aserciones, no necesariamente los requisitos.',
          'Comienza con ejemplos que una persona pueda explicar sin leer la función. ¿Qué entradas son válidas? ¿Qué sucede en el límite? ¿Qué debe fallar? Entrega esas expectativas al asistente y revisa las aserciones. Cuando el código y las pruebas discrepen, vuelve a los requisitos.',
          'La IA sirve para proponer casos adicionales y escribir código repetitivo de pruebas. Revisar los resultados esperados sigue siendo trabajo de ingeniería. Otro modelo puede aportar una perspectiva, pero no sustituye una regla definida de forma independiente.'
        ] },
        { id: 'go-example', heading: 'Una prueba pequeña en Go puede revelar una gran ambigüedad', paragraphs: [
          'Considera una política de reintentos. ¿Un máximo de tres intentos significa tres llamadas en total o tres reintentos después de la llamada inicial? Ambas interpretaciones pueden producir código ordenado. Antes de implementar, define el contrato: maxAttempts incluye la llamada inicial y attempt es el índice, comenzando en cero, de la llamada que acaba de finalizar.',
          'Con ese contrato, los intentos cero y uno permiten otra llamada; el intento dos no. El ejemplo también decide devolver false para intentos negativos o límites no positivos. Es una política explícita de esta función, no una regla universal. Una API pública de configuración podría rechazar esos valores con un error.'
        ], code: { language: 'go', value: retryExample }, checklist: [
          'Guarda el ejemplo completo como retry_test.go dentro de un módulo de Go. Ejecuta: go test ./...',
          'Cambia temporalmente la comparación final por attempt < maxAttempts. La prueba de la última llamada debe fallar.',
          'Restaura la implementación antes de hacer commit. El fallo deliberado comprueba que la prueba detecta el error en el límite.'
        ] },
        { id: 'coverage', heading: 'La cobertura revela huecos; las aserciones definen las comprobaciones', paragraphs: [
          'La cobertura puede mostrar qué sentencias se ejecutaron durante una prueba. No puede determinar si el resultado esperado es correcto o si probaste los casos importantes del negocio. Ejecutar una función sin comprobar su resultado puede aumentar la cobertura y aportar poca protección.',
          'Usa la cobertura para orientar la investigación y luego revisa las aserciones. En esta función importa más el límite entre el último reintento permitido y el primero prohibido que agregar varios casos del mismo camino exitoso. Una mutación local deliberada permite comprobar que una aserción detecta el cambio de comportamiento relevante.'
        ] },
        { id: 'platform-boundaries', links: [{ slug: 'kubernetes-controllers-idempotent-reconciliation', label: 'Pruebas de reconciliación en Kubernetes' }], heading: 'Respetar el alcance de las pruebas unitarias', paragraphs: [
          'En un servicio en Go o un controlador de Kubernetes, las pruebas unitarias sirven para comprobar validación de configuración, decisiones de políticas y transformaciones de datos. Conviene que sean deterministas y eviten llamadas de red o dependencias del reloj cuando no sean necesarias.',
          'No demuestran que RBAC permita una operación real, que un API server aplique un esquema o que funcione un flujo completo de aprovisionamiento. Esas preguntas requieren pruebas de integración o de extremo a extremo en el límite correspondiente. Simular todas las dependencias puede ocultar una suposición incorrecta sobre el sistema real.'
        ] },
        { id: 'workflow', heading: 'Usar la IA para acortar el ciclo de validación', paragraphs: [
          'Recomiendo definir el comportamiento, pedir una implementación pequeña y revisar tanto el cambio como sus pruebas. Ejecuta las pruebas específicas mientras iteras y las comprobaciones más amplias pertinentes antes de integrar. Un fallo es información que debes investigar, no una razón para cambiar la expectativa hasta que todo pase.',
          'Mantén las pruebas útiles junto al código y ejecútalas en CI. Las futuras refactorizaciones, manuales o asistidas por IA, tendrán que respetar las mismas expectativas documentadas. El objetivo no es acumular archivos de pruebas, sino poder explicar qué importa y demostrar que un cambio lo sigue respetando.'
        ] }
      ]
    }
  },
  references: [
    { title: 'GitHub: Responsible use of Copilot inline suggestions', url: 'https://docs.github.com/en/copilot/responsible-use/inline-suggestions' },
    { title: 'Go: Add a test', url: 'https://go.dev/doc/tutorial/add-a-test' },
    { title: 'Go: Coverage for Go applications', url: 'https://go.dev/doc/build-cover' }
  ]
} satisfies BlogPost
