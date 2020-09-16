module.exports = {
  apps: [
    {
      name: "movie-database-backend",
      script: "./src/server.js",
      env_production: {
        NODE_ENV:'production'
      }
    }
  ]
}