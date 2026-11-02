import lesson1 from './go-basics-learning-path'
import lesson2 from './go-basics-install'
import lesson3 from './go-basics-hello-world'
import lesson4 from './go-basics-modules'
import lesson5 from './go-basics-format-and-tools'
import lesson6 from './go-basics-variables'
import lesson7 from './go-basics-constants'
import lesson8 from './go-basics-basic-types'
import lesson9 from './go-basics-conversions'
import lesson10 from './go-basics-if-and-switch'
import lesson11 from './go-basics-for-loops'
import lesson12 from './go-basics-arrays-and-collections'
import lesson13 from './go-basics-slices'
import lesson14 from './go-basics-append-and-copy'
import lesson15 from './go-basics-maps'
import lesson16 from './go-basics-range'
import lesson17 from './go-basics-strings'
import lesson18 from './go-basics-unicode-runes'
import lesson19 from './go-basics-sorting'
import lesson20 from './go-basics-structs'
import lesson21 from './go-basics-pointers'
import lesson22 from './go-basics-functions'
import lesson23 from './go-basics-multiple-results'
import lesson24 from './go-basics-variadic-functions'
import lesson25 from './go-basics-scope-and-closures'
import lesson26 from './go-basics-defer'
import lesson27 from './go-basics-errors'
import lesson28 from './go-basics-wrap-errors'
import lesson29 from './go-basics-methods'
import lesson30 from './go-basics-interfaces'
import lesson31 from './go-basics-generics'
import lesson32 from './go-basics-standard-library'
import lesson33 from './go-basics-files'
import lesson34 from './go-basics-buffered-input'
import lesson35 from './go-basics-json'
import lesson36 from './go-basics-time'
import lesson37 from './go-basics-environment'
import lesson38 from './go-basics-command-line-flags'
import lesson39 from './go-basics-http-server'
import lesson40 from './go-basics-http-client'
import lesson41 from './go-basics-unit-tests'
import lesson42 from './go-basics-goroutines'
import lesson43 from './go-basics-waitgroup'
import lesson44 from './go-basics-channels'
import lesson45 from './go-basics-close-channels'
import lesson46 from './go-basics-select'
import lesson47 from './go-basics-context'
import lesson48 from './go-basics-mutex'
import lesson49 from './go-basics-race-detector'
import lesson50 from './go-basics-final-project'

import type { BlogPost } from '../../types'

export const goBasicsPosts: BlogPost[] = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, lesson18, lesson19, lesson20, lesson21, lesson22, lesson23, lesson24, lesson25, lesson26, lesson27, lesson28, lesson29, lesson30, lesson31, lesson32, lesson33, lesson34, lesson35, lesson36, lesson37, lesson38, lesson39, lesson40, lesson41, lesson42, lesson43, lesson44, lesson45, lesson46, lesson47, lesson48, lesson49, lesson50]

export const goBasicsPath = '/blog/series/go-basics'

export const goBasicsModules = [
  {
    "id": "module-1",
    "start": 2,
    "end": 11,
    "title": {
      "en": "First steps and syntax",
      "es": "Primeros pasos y sintaxis"
    }
  },
  {
    "id": "module-2",
    "start": 12,
    "end": 21,
    "title": {
      "en": "Data and collections",
      "es": "Datos y colecciones"
    }
  },
  {
    "id": "module-3",
    "start": 22,
    "end": 31,
    "title": {
      "en": "Functions and contracts",
      "es": "Funciones y contratos"
    }
  },
  {
    "id": "module-4",
    "start": 32,
    "end": 41,
    "title": {
      "en": "Standard library and testing",
      "es": "Biblioteca estándar y pruebas"
    }
  },
  {
    "id": "module-5",
    "start": 42,
    "end": 50,
    "title": {
      "en": "Concurrency and final project",
      "es": "Concurrencia y proyecto final"
    }
  }
] as const
