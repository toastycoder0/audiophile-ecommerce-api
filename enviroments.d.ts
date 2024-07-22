namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    PORT: number
    NODE_ENV: 'development' | 'production'
  }
}
