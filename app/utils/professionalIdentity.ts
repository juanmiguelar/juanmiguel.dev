// One professional identity across the portfolio, articles and consulting pages.
export const professionalIdentity = (siteUrl: string) => ({
  '@type': 'Person',
  '@id': `${siteUrl}#person`,
  name: 'Juan Miguel Arias Mejias',
  url: siteUrl,
  jobTitle: 'Senior Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/juan-miguel-arias/',
    'https://github.com/juanmiguelar'
  ],
  knowsAbout: ['Go', 'Backend Engineering', 'Platform Engineering', 'Kubernetes', 'Automated Testing']
})
