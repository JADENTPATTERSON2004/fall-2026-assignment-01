export type NetworkConfig = {
  serverUrl: string;
  port: number;
};

export type EnvironmentConfig = {
  environment: "dev" | "prod";
  timeout: number;
};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  const defaultConfig: AppConfig = {
    serverUrl: "http://localhost",
    port: 8080,
    environment: "dev",
    timeout: 3000,
  };

  return {
    ...defaultConfig,
    ...userOverrides,
  };
}
