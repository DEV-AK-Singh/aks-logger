export type LogLevel = "debug" | "info" | "warn" | "success" | "error" | "fatal";

export interface LoggerOptions {
  level?: LogLevel;
  timestamp?: "iso" | "local" | false;
  prefix?: string;
  logToFile?: string;
}
