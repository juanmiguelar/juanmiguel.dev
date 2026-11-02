# Fundamentos de Go / Go basics

50 artículos, cada uno con versiones `es` y `en`. Índice: `/es/blog/series/go-basics` y `/blog/series/go-basics`.

Los slugs se conservan iguales entre idiomas para permitir el cambio de idioma del mismo artículo. El contenido vive solo en estos archivos TypeScript. Las referencias de cada artículo apuntan a Go y a sus paquetes oficiales.

1. [Fundamentos de Go: una ruta de 50 lecciones prácticas](./go-basics-learning-path.ts) / Learn Go basics: a path through 50 practical lessons
2. [Instalar Go y entender el flujo básico de desarrollo](./go-basics-install.ts) / Install Go and understand the basic development workflow
3. [Hola mundo en Go: paquetes, imports y main](./go-basics-hello-world.ts) / Hello World in Go: packages, imports and main
4. [Módulos y paquetes en Go: cómo funcionan los imports](./go-basics-modules.ts) / Go modules and packages: how imports find your code
5. [Formatear y revisar código Go con gofmt y go vet](./go-basics-format-and-tools.ts) / Format and check Go code with gofmt and go vet
6. [Variables y valores cero en Go: var frente a :=](./go-basics-variables.ts) / Variables and zero values in Go: var versus :=
7. [Constantes e iota en Go: representar valores fijos](./go-basics-constants.ts) / Constants and iota in Go: represent fixed values
8. [Tipos básicos en Go: enteros, flotantes, booleanos y cadenas](./go-basics-basic-types.ts) / Go basic types: integers, floats, booleans and strings
9. [Conversión de tipos y lectura de números en Go](./go-basics-conversions.ts) / Type conversion and string parsing in Go
10. [Condicionales en Go: if, switch y retornos tempranos](./go-basics-if-and-switch.ts) / Go conditionals: if, switch and early returns
11. [Bucles for en Go: contadores, condiciones y terminación](./go-basics-for-loops.ts) / Go for loops: counters, conditions and termination
12. [Colecciones en Go: comenzar con arrays y valores](./go-basics-arrays-and-collections.ts) / Go collections: start with arrays and value semantics
13. [Slices en Go: longitud, capacidad y memoria compartida](./go-basics-slices.ts) / Go slices: length, capacity and shared storage
14. [append y copy en Go: ampliar slices sin sorpresas](./go-basics-append-and-copy.ts) / append and copy in Go: grow slices without surprises
15. [Maps en Go: búsquedas, presencia e inicialización](./go-basics-maps.ts) / Go maps: lookup, presence checks and safe initialization
16. [range en Go: recorrer colecciones y entender las copias](./go-basics-range.ts) / Go range: iterate collections without confusing copies
17. [Cadenas en Go: bytes, inmutabilidad y operaciones habituales](./go-basics-strings.ts) / Go strings: bytes, immutability and common operations
18. [Unicode en Go: contar runes y entender offsets de bytes](./go-basics-unicode-runes.ts) / Unicode in Go: rune counts and byte offsets
19. [Ordenar datos en Go y mostrar maps de forma determinista](./go-basics-sorting.ts) / Sort Go data and produce deterministic map output
20. [Structs en Go: agrupar campos relacionados en un valor](./go-basics-structs.ts) / Go structs: group related fields into a value
21. [Punteros en Go: direcciones, desreferencia y nil](./go-basics-pointers.ts) / Go pointers: addresses, dereferencing and nil
22. [Funciones en Go: parámetros, resultados y contratos pequeños](./go-basics-functions.ts) / Go functions: parameters, results and small contracts
23. [Retornos múltiples en Go: resultados y presencia](./go-basics-multiple-results.ts) / Multiple return values in Go: results and presence
24. [Funciones variádicas en Go: recibir cero o más argumentos](./go-basics-variadic-functions.ts) / Variadic functions in Go: accept zero or more arguments
25. [Ámbitos y closures en Go: capturar variables con intención](./go-basics-scope-and-closures.ts) / Go scope and closures: capture variables deliberately
26. [defer en Go: liberar recursos en el límite correcto](./go-basics-defer.ts) / Go defer: release resources at the right boundary
27. [Errores en Go: devolver, comprobar y añadir contexto](./go-basics-errors.ts) / Error handling in Go: return, check and add context
28. [Envolver errores con %w y examinarlos con errors.Is](./go-basics-wrap-errors.ts) / Wrap Go errors with %w and inspect them with errors.Is
29. [Métodos en Go: elegir receptor por valor o puntero](./go-basics-methods.ts) / Go methods: choose value or pointer receivers
30. [Interfaces en Go: definir el comportamiento necesario](./go-basics-interfaces.ts) / Go interfaces: define the behavior a caller needs
31. [Genéricos en Go: parámetros de tipo y restricciones](./go-basics-generics.ts) / Go generics for beginners: type parameters and constraints
32. [Biblioteca estándar de Go: conectar readers, writers y herramientas](./go-basics-standard-library.ts) / Go standard library: connect readers, writers and tools
33. [Leer y escribir archivos pequeños en Go con limpieza explícita](./go-basics-files.ts) / Read and write small files in Go with explicit cleanup
34. [Leer texto por líneas en Go con bufio.Scanner](./go-basics-buffered-input.ts) / Read text line by line in Go with bufio.Scanner
35. [JSON en Go: campos exportados, etiquetas y validación](./go-basics-json.ts) / JSON in Go: exported fields, tags and validation
36. [Tiempo en Go: duraciones, layouts y zonas horarias](./go-basics-time.ts) / Go time basics: durations, layouts and time zones
37. [Variables de entorno en Go: valores por defecto y validación](./go-basics-environment.ts) / Environment variables in Go: defaults and validation
38. [Opciones de consola en Go: analizar argumentos con flag](./go-basics-command-line-flags.ts) / Command-line flags in Go: parse options with flag
39. [Crear un primer handler HTTP en Go con net/http](./go-basics-http-server.ts) / Build a first HTTP handler in Go with net/http
40. [Clientes HTTP en Go: timeouts, estados y cierre del cuerpo](./go-basics-http-client.ts) / Go HTTP clients: timeouts, status checks and body closure
41. [Pruebas unitarias en Go: tablas de casos y fallos útiles](./go-basics-unit-tests.ts) / Go unit tests: table-driven cases and useful failures
42. [Concurrencia en Go: iniciar una goroutine y esperar su resultado](./go-basics-goroutines.ts) / Go concurrency: start a goroutine and wait for its result
43. [sync.WaitGroup en Go: esperar un conjunto de tareas](./go-basics-waitgroup.ts) / sync.WaitGroup in Go: wait for a known set of tasks
44. [Canales en Go: comunicación con y sin buffer](./go-basics-channels.ts) / Go channels: buffered and unbuffered communication
45. [Cerrar canales en Go: señalar finalización sin panic](./go-basics-close-channels.ts) / Close Go channels: signal completion without panics
46. [select en Go: coordinar operaciones listas y cancelación](./go-basics-select.ts) / Go select: coordinate ready operations and cancellation
47. [context en Go: propagar cancelación y plazos](./go-basics-context.ts) / Go context: propagate cancellation and deadlines
48. [sync.Mutex en Go: proteger una regla de estado compartido](./go-basics-mutex.ts) / sync.Mutex in Go: protect a shared invariant
49. [Detector de carreras en Go: encontrar accesos con -race](./go-basics-race-detector.ts) / Go race detector: find executed data races with -race
50. [Proyecto final de Go: endpoint HTTP JSON con pruebas](./go-basics-final-project.ts) / Go basics final project: a tested JSON HTTP endpoint
