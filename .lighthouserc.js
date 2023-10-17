module.exports = {
  ci: {
    collect: {
      staticDistDir: "./packages/climbingweb/.next",
      startServerCommand: "yarn workspace climbingweb run start",
      url: ["http://localhost:3000"],
      collect: {
        numberOfRuns: 3,
      },
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};