import { LoggerOptions } from "./types.js";
export declare class Logger {
    private level;
    private timestamp;
    private prefix?;
    private filePath?;
    constructor(options?: LoggerOptions);
    private shouldLog;
    private formatMessage;
    private write;
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    success(msg: string): void;
    error(msg: string): void;
    fatal(msg: string): void;
}
