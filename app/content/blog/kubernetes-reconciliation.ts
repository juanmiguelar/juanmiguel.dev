import type { BlogPost } from './types'

export default {
  slug: 'kubernetes-controllers-idempotent-reconciliation',
  status: 'published',
  publishedOn: '2026-10-16',
  tags: ['Kubernetes', 'Go', 'Platform engineering'],
  translations: {
    en: {
      seoTitle: 'Kubernetes reconciliation',
      title: 'Kubernetes controllers: designing idempotent reconciliation',
      description: 'A practical starting point for self-service platforms: define desired state, reconcile safely, expose useful status, and test recovery.',
      category: 'Platform engineering',
      sections: [
        {
          id: 'desired-state', heading: 'Start with desired state',
          paragraphs: [
            'A self-service environment should describe what a team needs, rather than a sequence of manual operations. For example, an environment request might identify an application and its access policy. The platform can translate that intent into Kubernetes resources.',
            'A custom resource defines an API for that intent. A controller supplies the behavior. Kubernetes controllers repeatedly compare the requested state with the observed state and work to bring them closer together. Creating the custom resource alone does not implement provisioning.'
          ]
        },
        {
          id: 'idempotency', heading: 'Make repeated reconciliation safe',
          paragraphs: [
            'Idempotency means that applying the same intent again does not keep producing additional effects. A controller should not create a new namespace or duplicate an external resource whenever it processes the same request.',
            'Use stable resource identities and inspect existing state before deciding what needs to change. Treat partial completion as an expected situation. If namespace creation succeeds but the next operation fails, a later reconciliation should continue from observed state rather than assume a clean start.'
          ]
        },
        {
          id: 'status', heading: 'Give users an observable outcome',
          paragraphs: [
            'A successful API submission is not the same as a ready environment. Keep user intent in spec and report the observed outcome in status. Status should help a team distinguish an operation in progress from a resource waiting for intervention.',
            'For a platform API, I recommend defining the meaning of readiness before writing the happy path. Decide which dependencies must be available and which failure details are useful to the requester. Avoid exposing credentials in diagnostic messages.'
          ]
        },
        {
          id: 'deletion', heading: 'Design deletion alongside creation',
          paragraphs: [
            'Some resources require cleanup before deletion can finish. Finalizers let a controller perform that cleanup while Kubernetes holds the object in a terminating state. A finalizer must eventually be removed by the responsible controller; otherwise deletion remains blocked.',
            'Make the cleanup retryable too. Document what the platform owns, what it retains, and what an operator should inspect if cleanup cannot complete. Treat removal of access as part of the lifecycle, rather than an afterthought.'
          ]
        },
        {
          id: 'testing', links: [{ slug: 'why-unit-tests-matter-in-the-age-of-ai', label: 'Writing independent test expectations' }], heading: 'Test recovery, not only creation',
          paragraphs: ['For a provisioning controller, I would start a review with the following scenarios. These are design checks, not a substitute for integration tests against the APIs your controller actually uses.'],
          checklist: [
            'Reconcile an unchanged request twice and check that resources are not duplicated.',
            'Interrupt provisioning after one successful operation, then retry.',
            'Change the desired configuration and verify convergence.',
            'Delete a request and verify cleanup can recover from a temporary failure.',
            'Check that status describes the outcome without leaking sensitive data.'
          ]
        }
      ]
    },
    es: {
      seoTitle: 'Reconciliación en Kubernetes',
      title: 'Controladores de Kubernetes: reconciliación idempotente',
      description: 'Una base práctica para plataformas de autoservicio: definir el estado deseado, reconciliar con seguridad, comunicar el estado y probar la recuperación.',
      category: 'Ingeniería de plataformas',
      sections: [
        {
          id: 'desired-state', heading: 'Comenzar por el estado deseado',
          paragraphs: [
            'Un entorno de autoservicio debería describir lo que un equipo necesita, en lugar de una secuencia de operaciones manuales. Por ejemplo, una solicitud puede identificar una aplicación y su política de acceso. La plataforma traduce esa intención a recursos de Kubernetes.',
            'Un recurso personalizado define la API de esa intención. Un controlador aporta el comportamiento. Los controladores de Kubernetes comparan repetidamente el estado solicitado con el observado y trabajan para acercarlos. Crear el recurso personalizado no implementa el aprovisionamiento por sí solo.'
          ]
        },
        {
          id: 'idempotency', heading: 'Reconciliar varias veces con seguridad',
          paragraphs: [
            'La idempotencia implica que aplicar de nuevo la misma intención no produce efectos adicionales continuamente. Un controlador no debería crear otro namespace o duplicar un recurso externo cada vez que procesa la misma solicitud.',
            'Usa identidades estables e inspecciona el estado existente antes de decidir qué cambiar. Considera normal la ejecución parcial. Si se crea el namespace pero falla la siguiente operación, una reconciliación posterior debe continuar desde el estado observado, sin asumir que empieza de cero.'
          ]
        },
        {
          id: 'status', heading: 'Comunicar un resultado observable',
          paragraphs: [
            'Aceptar una solicitud en la API no significa que el entorno esté listo. Mantén la intención en spec y comunica el resultado observado en status. El estado debe ayudar al equipo a distinguir una operación en curso de una que necesita intervención.',
            'Para una API de plataforma, recomiendo definir qué significa estar listo antes de implementar el caso exitoso. Decide qué dependencias deben estar disponibles y qué detalles del error ayudan a quien hizo la solicitud. Evita exponer credenciales en los mensajes de diagnóstico.'
          ]
        },
        {
          id: 'deletion', heading: 'Diseñar la eliminación junto con la creación',
          paragraphs: [
            'Algunos recursos necesitan limpieza antes de terminar su eliminación. Los finalizers permiten realizar esa limpieza mientras Kubernetes mantiene el objeto en terminación. El controlador responsable debe retirar el finalizer al completar el trabajo; de lo contrario, la eliminación queda bloqueada.',
            'La limpieza también debe tolerar reintentos. Documenta qué administra la plataforma, qué conserva y qué debe inspeccionar un operador cuando no puede terminar. Retirar accesos forma parte del ciclo de vida del recurso.'
          ]
        },
        {
          id: 'testing', links: [{ slug: 'why-unit-tests-matter-in-the-age-of-ai', label: 'Definir expectativas de pruebas independientes' }], heading: 'Probar la recuperación, no solo la creación',
          paragraphs: ['Para revisar un controlador de aprovisionamiento, comenzaría con estos escenarios. Son comprobaciones de diseño y no sustituyen las pruebas de integración con las APIs que usa el controlador.'],
          checklist: [
            'Reconciliar dos veces la misma solicitud y comprobar que no se duplican recursos.',
            'Interrumpir el aprovisionamiento tras una operación exitosa y reintentar.',
            'Cambiar la configuración deseada y verificar la convergencia.',
            'Eliminar una solicitud y comprobar que la limpieza se recupera de un fallo temporal.',
            'Comprobar que status comunica el resultado sin revelar información sensible.'
          ]
        }
      ]
    }
  },
  references: [
    { title: 'Kubernetes: Controllers', url: 'https://kubernetes.io/docs/concepts/architecture/controller/' },
    { title: 'Kubebuilder: Good Practices', url: 'https://book.kubebuilder.io/reference/good-practices' },
    { title: 'Kubernetes: Custom Resources', url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/' },
    { title: 'Kubernetes: Finalizers', url: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/' }
  ]
} satisfies BlogPost
