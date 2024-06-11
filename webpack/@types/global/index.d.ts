declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_TITLE: string;
      SWAGGER_SPEC_URL: string;
    }
  }
}
