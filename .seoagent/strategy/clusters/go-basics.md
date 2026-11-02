# Go basics / Fundamentos de Go

User-authorized scope: 50 related bilingual articles, a dedicated content folder, a blog series index and official documentation links for every article. Editorial intent comes from the request, not invented search-volume metrics.

Source of truth: `app/content/blog/series/go-basics/`. All 50 articles are registered for the next site build, with date 2026-11-01. No deployment performed. Live blog fetch could not be completed in this environment; no live availability claim is made.

Structure: lesson 1 is the learning-path pillar; lessons 2, 12, 22, 32 and 42 are topic guides. Each guide links to its children and the pillar; children link to their guide. Every lesson also has sequential navigation through the series index.

| # | Role | Slug | ES title | State |
|---|---|---|---|---|
| 1 | PILLAR | go-basics-learning-path | Fundamentos de Go: una ruta de 50 lecciones prácticas | written EN/ES |
| 2 | SUB_PILLAR | go-basics-install | Instalar Go y entender el flujo básico de desarrollo | written EN/ES |
| 3 | LONG_TAIL | go-basics-hello-world | Hola mundo en Go: paquetes, imports y main | written EN/ES |
| 4 | LONG_TAIL | go-basics-modules | Módulos y paquetes en Go: cómo funcionan los imports | written EN/ES |
| 5 | LONG_TAIL | go-basics-format-and-tools | Formatear y revisar código Go con gofmt y go vet | written EN/ES |
| 6 | LONG_TAIL | go-basics-variables | Variables y valores cero en Go: var frente a := | written EN/ES |
| 7 | LONG_TAIL | go-basics-constants | Constantes e iota en Go: representar valores fijos | written EN/ES |
| 8 | LONG_TAIL | go-basics-basic-types | Tipos básicos en Go: enteros, flotantes, booleanos y cadenas | written EN/ES |
| 9 | LONG_TAIL | go-basics-conversions | Conversión de tipos y lectura de números en Go | written EN/ES |
| 10 | LONG_TAIL | go-basics-if-and-switch | Condicionales en Go: if, switch y retornos tempranos | written EN/ES |
| 11 | LONG_TAIL | go-basics-for-loops | Bucles for en Go: contadores, condiciones y terminación | written EN/ES |
| 12 | SUB_PILLAR | go-basics-arrays-and-collections | Colecciones en Go: comenzar con arrays y valores | written EN/ES |
| 13 | LONG_TAIL | go-basics-slices | Slices en Go: longitud, capacidad y memoria compartida | written EN/ES |
| 14 | LONG_TAIL | go-basics-append-and-copy | append y copy en Go: ampliar slices sin sorpresas | written EN/ES |
| 15 | LONG_TAIL | go-basics-maps | Maps en Go: búsquedas, presencia e inicialización | written EN/ES |
| 16 | LONG_TAIL | go-basics-range | range en Go: recorrer colecciones y entender las copias | written EN/ES |
| 17 | LONG_TAIL | go-basics-strings | Cadenas en Go: bytes, inmutabilidad y operaciones habituales | written EN/ES |
| 18 | LONG_TAIL | go-basics-unicode-runes | Unicode en Go: contar runes y entender offsets de bytes | written EN/ES |
| 19 | LONG_TAIL | go-basics-sorting | Ordenar datos en Go y mostrar maps de forma determinista | written EN/ES |
| 20 | LONG_TAIL | go-basics-structs | Structs en Go: agrupar campos relacionados en un valor | written EN/ES |
| 21 | LONG_TAIL | go-basics-pointers | Punteros en Go: direcciones, desreferencia y nil | written EN/ES |
| 22 | SUB_PILLAR | go-basics-functions | Funciones en Go: parámetros, resultados y contratos pequeños | written EN/ES |
| 23 | LONG_TAIL | go-basics-multiple-results | Retornos múltiples en Go: resultados y presencia | written EN/ES |
| 24 | LONG_TAIL | go-basics-variadic-functions | Funciones variádicas en Go: recibir cero o más argumentos | written EN/ES |
| 25 | LONG_TAIL | go-basics-scope-and-closures | Ámbitos y closures en Go: capturar variables con intención | written EN/ES |
| 26 | LONG_TAIL | go-basics-defer | defer en Go: liberar recursos en el límite correcto | written EN/ES |
| 27 | LONG_TAIL | go-basics-errors | Errores en Go: devolver, comprobar y añadir contexto | written EN/ES |
| 28 | LONG_TAIL | go-basics-wrap-errors | Envolver errores con %w y examinarlos con errors.Is | written EN/ES |
| 29 | LONG_TAIL | go-basics-methods | Métodos en Go: elegir receptor por valor o puntero | written EN/ES |
| 30 | LONG_TAIL | go-basics-interfaces | Interfaces en Go: definir el comportamiento necesario | written EN/ES |
| 31 | LONG_TAIL | go-basics-generics | Genéricos en Go: parámetros de tipo y restricciones | written EN/ES |
| 32 | SUB_PILLAR | go-basics-standard-library | Biblioteca estándar de Go: conectar readers, writers y herramientas | written EN/ES |
| 33 | LONG_TAIL | go-basics-files | Leer y escribir archivos pequeños en Go con limpieza explícita | written EN/ES |
| 34 | LONG_TAIL | go-basics-buffered-input | Leer texto por líneas en Go con bufio.Scanner | written EN/ES |
| 35 | LONG_TAIL | go-basics-json | JSON en Go: campos exportados, etiquetas y validación | written EN/ES |
| 36 | LONG_TAIL | go-basics-time | Tiempo en Go: duraciones, layouts y zonas horarias | written EN/ES |
| 37 | LONG_TAIL | go-basics-environment | Variables de entorno en Go: valores por defecto y validación | written EN/ES |
| 38 | LONG_TAIL | go-basics-command-line-flags | Opciones de consola en Go: analizar argumentos con flag | written EN/ES |
| 39 | LONG_TAIL | go-basics-http-server | Crear un primer handler HTTP en Go con net/http | written EN/ES |
| 40 | LONG_TAIL | go-basics-http-client | Clientes HTTP en Go: timeouts, estados y cierre del cuerpo | written EN/ES |
| 41 | LONG_TAIL | go-basics-unit-tests | Pruebas unitarias en Go: tablas de casos y fallos útiles | written EN/ES |
| 42 | SUB_PILLAR | go-basics-goroutines | Concurrencia en Go: iniciar una goroutine y esperar su resultado | written EN/ES |
| 43 | LONG_TAIL | go-basics-waitgroup | sync.WaitGroup en Go: esperar un conjunto de tareas | written EN/ES |
| 44 | LONG_TAIL | go-basics-channels | Canales en Go: comunicación con y sin buffer | written EN/ES |
| 45 | LONG_TAIL | go-basics-close-channels | Cerrar canales en Go: señalar finalización sin panic | written EN/ES |
| 46 | LONG_TAIL | go-basics-select | select en Go: coordinar operaciones listas y cancelación | written EN/ES |
| 47 | LONG_TAIL | go-basics-context | context en Go: propagar cancelación y plazos | written EN/ES |
| 48 | LONG_TAIL | go-basics-mutex | sync.Mutex en Go: proteger una regla de estado compartido | written EN/ES |
| 49 | LONG_TAIL | go-basics-race-detector | Detector de carreras en Go: encontrar accesos con -race | written EN/ES |
| 50 | LONG_TAIL | go-basics-final-project | Proyecto final de Go: endpoint HTTP JSON con pruebas | written EN/ES |
