module.exports = {
  ci: {
    collect: {
      staticDistDir: '.output/public',
      url: ['/fr', '/fr/contact', '/fr/how-it-works/replication'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Performance can fluctuate on CI runners — warn instead of blocking
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
