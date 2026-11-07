module.exports = {
  // A fake browser, so components can render in tests.
  testEnvironment: 'jsdom',
  // Runs once before the tests; loads extra checks like toBeInTheDocument.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Treat CSS imports as empty objects.
  moduleNameMapper: { '\\.(css)$': 'identity-obj-proxy' },
};