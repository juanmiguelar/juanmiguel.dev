// Educational example, independent of any client or production system.
package diagnostics

import (
	"fmt"
	"strings"
	"testing"
)

func concatenate(items []string) string {
	result := ""
	for i, item := range items {
		if i > 0 {
			result += ","
		}
		result += item
	}
	return result
}

func build(items []string) string {
	var result strings.Builder
	for i, item := range items {
		if i > 0 {
			result.WriteByte(',')
		}
		result.WriteString(item)
	}
	return result.String()
}

func TestOutput(t *testing.T) {
	cases := [][]string{nil, {}, {"a"}, {"a", "b"}, {"", "b", ""}, {"á", "東京"}}
	for _, items := range cases {
		want := strings.Join(items, ",")
		for name, encode := range map[string]func([]string) string{"concatenate": concatenate, "builder": build} {
			if got := encode(items); got != want {
				t.Errorf("%s(%q) = %q; want %q", name, items, got, want)
			}
		}
	}
}

var output string

func BenchmarkEncode(b *testing.B) {
	for _, size := range []int{8, 1024} {
		items := make([]string, size)
		for i := range items {
			items[i] = strings.Repeat("x", 24)
		}
		for name, encode := range map[string]func([]string) string{"concatenate": concatenate, "builder": build} {
			b.Run(fmt.Sprintf("%s/%d", name, size), func(b *testing.B) {
				b.ReportAllocs()
				b.ResetTimer()
				for i := 0; i < b.N; i++ {
					output = encode(items)
				}
			})
		}
	}
}
