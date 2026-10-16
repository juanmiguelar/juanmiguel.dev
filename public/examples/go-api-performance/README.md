# Go response-construction demonstration

Educational code independent of any client or production application. Requires a local Go toolchain; uses only the standard library. No HTTP listener or external service is started.

Save encode_test.go in an empty directory, then run:

```sh
go version
go test -run TestOutput -bench BenchmarkEncode -benchmem -count=5 encode_test.go
```

Capture CPU and allocation profiles separately:

```sh
go test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -cpuprofile=cpu.out encode_test.go
go tool pprof -top cpu.out
go test -run '^$' -bench 'BenchmarkEncode/concatenate/1024$' -benchtime=3s -memprofile=heap.out encode_test.go
go tool pprof -alloc_space -top heap.out
```

The tests compare both implementations with strings.Join for empty, single-item, multiple-item and Unicode inputs. Benchmarks use 8 and 1024 items, each 24 bytes. Record Go version, machine and run conditions alongside results. No measured performance improvement is claimed by this repository. This microbenchmark does not establish HTTP endpoint latency or production savings.

## Español

Ejemplo educativo independiente de clientes y sistemas de producción. Requiere Go local y utiliza únicamente la biblioteca estándar. Guarda encode_test.go en un directorio vacío y ejecuta los comandos anteriores. Registra versión, equipo y condiciones de ejecución. No se afirma una mejora de rendimiento medida ni una reducción de latencia de APIs.
