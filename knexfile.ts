import 'dotenv/config'

const extension = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

export default {
  client: 'pg',
  debug: true,
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 2,
    max: 20,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false
  },
  migrations: {
    tableName: 'migrations',
    directory: "database/migrations",
    extension: extension,
    disableMigrationsListValidation: true,
    loadExtensions: [`.${extension}`],
  },
  seeds: {
    directory: 'database/seeds',
    extension: extension,
    disableSeedsListValidation: true,
    loadExtensions: [`.${extension}`],
  }
}