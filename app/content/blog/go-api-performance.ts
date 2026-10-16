import type { BlogPost } from './types'

export default {
  "slug": "go-api-performance-diagnostics",
  "status": "published",
  "publishedOn": "2026-10-16",
  "tags": [
    "Go",
    "API performance",
    "Profiling",
    "Benchmarks"
  ],
  "translations": {
    "en": {
      "seoTitle": "Go API performance diagnostics",
      "title": "Diagnosing a slow Go API: measure, profile and verify",
      "description": "Diagnose Go API latency with a reproducible baseline, focused profiles and an independent benchmark example before changing production code.",
      "category": "Go backend engineering",
      "sections": [
        {
          "id": "answer",
          "heading": "Start by separating CPU work from waiting",
          "paragraphs": [
            "A slow Go API needs a measured diagnosis before a rewrite. Record latency percentiles, throughput and errors under a defined workload, then investigate the resource that explains the delay. CPU profiles help with active computation; traces and dependency timings help explain waiting. Verify a proposed change against the same workload and an independent correctness check.",
            "My starting point would be the operation the user experiences: which endpoint, which input, which percentile and which concurrency level? A service can have a healthy average while a smaller group of requests waits much longer. Changing code before describing that group makes the result difficult to assess."
          ]
        },
        {
          "id": "baseline",
          "heading": "Write down a baseline you can reproduce",
          "paragraphs": [
            "Choose representative request sizes and a fixed observation window. Record the application revision, Go version, CPU and memory limits, replica count and dependency conditions. Keep successful and failed requests visible. A reduction in latency caused by returning more errors is not an improvement.",
            "Start with one hypothesis. For example, a larger response may allocate more memory, or requests may wait for an exhausted database connection pool. Compare equivalent traffic before and after the change. If the workload or resource limits change too, record that explicitly rather than attribute the whole difference to one function.",
            "Collect end-to-end latency and error rate separately from a microbenchmark. A benchmark can compare a small implementation detail, but it cannot reproduce network queues, database contention, retries or the cost of a full request. Keep the scope of each measurement attached to the result."
          ],
          "checklist": [
            "Identify the endpoint, input size and concurrency.",
            "Record latency percentiles, throughput and errors.",
            "Keep the Go version, revision and resource limits with the results.",
            "Write the expected behavior before changing the implementation."
          ]
        },
        {
          "id": "choose-tool",
          "heading": "Choose the diagnostic tool from the symptom",
          "paragraphs": [
            "For CPU saturation, collect a CPU profile during representative work and inspect the expensive call paths. For allocation pressure, inspect allocation samples and garbage-collection activity. For long requests with spare CPU, trace the request across dependencies and inspect connection waits, deadlines and synchronization.",
            "A profile answers a narrower question than “why is the API slow?” A function can occupy a large share of sampled CPU without explaining the time spent waiting on another service. Treat a missing hot spot as a reason to revisit the hypothesis, rather than add concurrency blindly.",
            "Collect profiles separately when practical: diagnostic tools have overhead and can influence one another. The official Go diagnostics reference explains the available profiles and their limits. For a production investigation, agree on collection scope, access and acceptable overhead with the team first."
          ]
        },
        {
          "id": "worked-example",
          "heading": "Worked example: repeated string construction",
          "paragraphs": [
            "This is an independent educational demonstration, not a client case study or a production performance claim. The downloadable Go file compares repeated string concatenation with a strings.Builder. Both functions produce the same comma-separated output. Table-driven tests compare their results with strings.Join, including empty inputs, empty values and Unicode.",
            "The benchmark uses two input sizes and reports allocations. Keeping the result in a package variable prevents the result from simply being discarded. Run repeated samples and inspect both time and allocation measurements. The example intentionally isolates one operation; it does not simulate an HTTP request.",
            "The commands below require a local Go toolchain. No benchmark numbers are asserted here. Run the example locally before drawing conclusions. Save the linked file in its own directory so generated profiles and test binaries stay separate from application files."
          ],
          "code": {
            "language": "shell",
            "value": "# Save the linked encode_test.go in an empty working directory.\ngo version\ngo test -run TestOutput -bench BenchmarkEncode -benchmem -count=5 encode_test.go\n# Capture one profile type at a time.\ngo test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -cpuprofile=cpu.out encode_test.go\ngo tool pprof -top cpu.out\ngo test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -memprofile=heap.out encode_test.go\ngo tool pprof -alloc_space -top heap.out"
          }
        },
        {
          "id": "interpret",
          "heading": "Interpret the example without promising an API speedup",
          "paragraphs": [
            "If your measurements show fewer allocations or less time for the builder variant at a particular size, that supports a local implementation choice for that workload. It does not establish that an API will improve by the same proportion. The actual endpoint may spend almost all of its time elsewhere.",
            "In a service, first verify that response construction appears in the evidence. Keep a correctness test around the representation, make a small change, and repeat the endpoint workload. Compare tail latency, errors and resource use together. If no material endpoint improvement appears, keep that result in the investigation notes.",
            "A useful handover states the observed condition, the change, how it was checked and what remains uncertain. Include the original data rather than only a percentage. Another engineer should be able to repeat the investigation and decide whether the tradeoff still holds after a later release."
          ],
          "links": [
            {
              "slug": "why-unit-tests-matter-in-the-age-of-ai",
              "label": "Independent expectations for Go tests"
            }
          ]
        },
        {
          "id": "production",
          "heading": "Keep diagnostic endpoints away from public traffic",
          "paragraphs": [
            "When using net/http/pprof, keep diagnostic handlers on an explicitly controlled listener or administrative route. A separate port alone is not access control. Confirm the bind address, network policy and authentication appropriate to the environment before collecting profiles.",
            "Profiles and traces may reveal internal implementation details. Limit access and retention, and collect only what the investigation needs. The downloadable example uses go test profile files and does not start an HTTP server or expose a diagnostic endpoint."
          ]
        },
        {
          "id": "engagement",
          "heading": "Turn the investigation into a focused engineering engagement",
          "paragraphs": [
            "For a consulting discussion, bring a description of the affected endpoint, a sanitized sample workload, available measurements and the outcome you need. We can use that context to define whether the scope is diagnosis, an implementation change, or support for your team’s measurement process.",
            "This fits my focus on Go backends and Kubernetes platforms. My availability is limited alongside full-time employment; scope and timing need to be agreed before implementation. The linked consulting page describes relevant employment experience and how I approach a focused engagement."
          ],
          "links": [
            {
              "slug": "kubernetes-controllers-idempotent-reconciliation",
              "label": "Related guide: observable Kubernetes reconciliation"
            }
          ]
        }
      ]
    },
    "es": {
      "seoTitle": "Diagnóstico de APIs Go",
      "title": "Diagnosticar una API Go lenta: medir, perfilar y verificar",
      "description": "Diagnostica la latencia en APIs Go con una referencia reproducible, perfiles y un benchmark independiente antes de modificar producción.",
      "category": "Backend en Go",
      "sections": [
        {
          "id": "answer",
          "heading": "Separar trabajo de CPU y tiempo de espera",
          "paragraphs": [
            "Una API Go lenta necesita un diagnóstico medible antes de una reescritura. Registra percentiles de latencia, volumen de solicitudes y errores con una carga definida. Después investiga el recurso que explica la demora. Los perfiles de CPU ayudan a estudiar cómputo activo; las trazas y los tiempos de dependencias ayudan a explicar esperas. Verifica cada cambio con la misma carga y una comprobación independiente del comportamiento.",
            "Yo comenzaría por la operación que experimenta la persona: qué endpoint, qué entrada, qué percentil y cuánta concurrencia. Un promedio saludable puede ocultar solicitudes que esperan mucho más. Describir ese grupo permite evaluar el resultado de un cambio."
          ]
        },
        {
          "id": "baseline",
          "heading": "Definir una referencia reproducible",
          "paragraphs": [
            "Elige tamaños de solicitud representativos y un intervalo fijo. Registra la revisión de la aplicación, versión de Go, límites de CPU y memoria, réplicas y condiciones de las dependencias. Conserva los errores en la medición. Reducir la latencia devolviendo más errores no mejora el servicio.",
            "Empieza con una hipótesis. Una respuesta grande puede generar más asignaciones de memoria; las solicitudes también pueden esperar una conexión disponible a la base de datos. Compara tráfico equivalente antes y después. Si cambian la carga o los límites de recursos, documenta esa diferencia.",
            "Mide la latencia completa del endpoint por separado del microbenchmark. Un benchmark compara un detalle de implementación, pero no reproduce colas de red, contención en bases de datos ni reintentos. Cada resultado debe indicar el alcance de su medición."
          ],
          "checklist": [
            "Identificar endpoint, tamaño de entrada y concurrencia.",
            "Registrar percentiles de latencia, volumen y errores.",
            "Conservar versión de Go, revisión y límites de recursos.",
            "Definir el comportamiento esperado antes de modificar el código."
          ]
        },
        {
          "id": "choose-tool",
          "heading": "Elegir la herramienta según el síntoma",
          "paragraphs": [
            "Con CPU saturada, captura un perfil durante trabajo representativo e inspecciona las rutas costosas. Ante presión de memoria, revisa asignaciones y actividad del recolector. Si las solicitudes tardan con CPU disponible, observa las dependencias, esperas por conexiones, deadlines y sincronización.",
            "Un perfil responde una pregunta más acotada que “por qué está lenta la API”. Una función puede consumir una gran proporción de CPU y explicar poco del tiempo esperando otro servicio. Si no aparece un punto costoso, revisa la hipótesis antes de añadir concurrencia.",
            "Cuando sea posible, captura perfiles por separado: las herramientas de diagnóstico tienen coste y pueden interferir entre sí. La documentación oficial de Go explica los perfiles y sus límites. En producción, acuerda primero el alcance, los accesos y el coste aceptable de la captura."
          ]
        },
        {
          "id": "worked-example",
          "heading": "Caso demostrativo: construcción repetida de cadenas",
          "paragraphs": [
            "Esta demostración educativa es independiente. No representa un cliente ni afirma resultados de producción. El archivo Go descargable compara concatenación repetida con strings.Builder. Ambas funciones construyen la misma salida separada por comas. Las pruebas comparan sus resultados con strings.Join e incluyen entradas vacías, valores vacíos y Unicode.",
            "El benchmark utiliza dos tamaños de entrada y reporta asignaciones. Guarda el resultado en una variable del paquete para que no se descarte simplemente. Ejecuta varias muestras y revisa tiempo y memoria. El ejemplo aísla una operación; no simula una solicitud HTTP.",
            "Los comandos requieren Go instalado. No publicamos cifras de benchmark inventadas. Ejecuta el ejemplo localmente antes de sacar conclusiones. Guarda el archivo enlazado en un directorio independiente para separar los perfiles y binarios generados."
          ],
          "code": {
            "language": "shell",
            "value": "# Save the linked encode_test.go in an empty working directory.\ngo version\ngo test -run TestOutput -bench BenchmarkEncode -benchmem -count=5 encode_test.go\n# Capture one profile type at a time.\ngo test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -cpuprofile=cpu.out encode_test.go\ngo tool pprof -top cpu.out\ngo test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -memprofile=heap.out encode_test.go\ngo tool pprof -alloc_space -top heap.out"
          }
        },
        {
          "id": "interpret",
          "heading": "Interpretar el ejemplo sin prometer una mejora del endpoint",
          "paragraphs": [
            "Si tus mediciones muestran menos asignaciones o tiempo con strings.Builder para una entrada concreta, tienes evidencia para esa operación y esa carga. No demuestra que una API mejorará en la misma proporción. El endpoint puede dedicar casi todo su tiempo a otro trabajo.",
            "En un servicio, confirma primero que la construcción de respuestas aparece en la evidencia. Conserva una prueba del formato, realiza un cambio pequeño y repite la carga del endpoint. Compara percentiles altos, errores y recursos. Documenta también cuando no aparece una mejora relevante.",
            "Una entrega útil describe la condición observada, el cambio, la verificación y las incertidumbres. Incluye los datos originales además de cualquier porcentaje. Otra persona debería poder repetir el diagnóstico y revisar si la decisión sigue siendo válida después de una nueva versión."
          ],
          "links": [
            {
              "slug": "why-unit-tests-matter-in-the-age-of-ai",
              "label": "Expectativas independientes para pruebas en Go"
            }
          ]
        },
        {
          "id": "production",
          "heading": "Mantener el diagnóstico fuera del acceso público",
          "paragraphs": [
            "Si utilizas net/http/pprof, mantén sus handlers en un listener controlado explícitamente o una ruta administrativa. Un puerto diferente no constituye control de acceso. Confirma dirección de escucha, reglas de red y autenticación antes de capturar perfiles.",
            "Los perfiles y trazas pueden revelar detalles internos. Limita accesos y retención y captura solo lo necesario. El ejemplo descargable genera perfiles mediante go test; no inicia un servidor HTTP ni expone endpoints de diagnóstico."
          ]
        },
        {
          "id": "engagement",
          "heading": "Definir una colaboración de ingeniería concreta",
          "paragraphs": [
            "Para conversar sobre consultoría, comparte el endpoint afectado, una carga de ejemplo sin información sensible, las mediciones disponibles y el resultado que necesitas. Con ese contexto podemos definir si el alcance es diagnóstico, implementación o apoyo al proceso de medición de tu equipo.",
            "Este trabajo encaja con mi enfoque en backends Go y plataformas Kubernetes. Mi disponibilidad es limitada por mi empleo a tiempo completo; debemos acordar alcance y plazos antes de implementar. La página de consultoría describe mi experiencia laboral relevante y el proceso de colaboración."
          ],
          "links": [
            {
              "slug": "kubernetes-controllers-idempotent-reconciliation",
              "label": "Guía relacionada: reconciliación observable en Kubernetes"
            }
          ]
        }
      ]
    }
  },
  "references": [
    {
      "title": "Go diagnostics: profiles, traces and limitations",
      "url": "https://go.dev/doc/diagnostics"
    },
    {
      "title": "Go testing: benchmarks",
      "url": "https://pkg.go.dev/testing#hdr-Benchmarks"
    },
    {
      "title": "Go net/http/pprof",
      "url": "https://pkg.go.dev/net/http/pprof"
    },
    {
      "title": "Download the educational Go example / Descargar ejemplo Go",
      "url": "/examples/go-api-performance/encode_test.go"
    }
  ]
} satisfies BlogPost
