import fs from "fs";
import { colors, color } from "./color.js";
import { LogLevel, LoggerOptions } from "./types.js";

export class Logger {
    private level: LogLevel;
    private timestamp: LoggerOptions["timestamp"];
    private prefix?: string;
    private filePath?: string;

    constructor(options: LoggerOptions = {}) {
        this.level = options.level ?? "debug";
        this.timestamp = options.timestamp ?? "local";
        this.prefix = options.prefix;
        this.filePath = options.logToFile;
    }

    // Check if the log level should be logged or not based on the current level of the logger example: debug < info < warn < success < error < fatal
    private shouldLog(level: LogLevel): boolean {
        const order = ["debug", "info", "warn", "success", "error", "fatal"];
        return order.indexOf(level) >= order.indexOf(this.level);
    }

    private formatMessage(level: LogLevel, msg: string) {
        let time = "";

        if (this.timestamp === "iso") time = new Date().toISOString();
        else if (this.timestamp === "local") time = new Date().toLocaleString();

        const prefix = this.prefix ? `[${this.prefix}]` : "";

        return [time, prefix, level.toUpperCase(), msg]
            .filter(Boolean)
            .join(" ");
    }

    private write(level: LogLevel, msg: string) {
        if (!this.shouldLog(level)) return;

        const formatted = this.formatMessage(level, msg);

        // Colors
        const colored =
            level === "debug" ? color(formatted, colors.gray) :
                level === "info" ? color(formatted, colors.green) :
                    level === "warn" ? color(formatted, colors.yellow) :
                        level === "success" ? color(formatted, colors.green) :
                            level === "error" ? color(formatted, colors.red) : 
                                color(formatted, colors.magenta);

        console.log(colored);

        // File output
        if (this.filePath) {
            fs.appendFileSync(this.filePath, formatted + "\n");
        }
    }

    debug(msg: string) { this.write("debug", msg); }
    info(msg: string) { this.write("info", msg); }
    warn(msg: string) { this.write("warn", msg); }
    success(msg: string) { this.write("success", msg); }
    error(msg: string) { this.write("error", msg); }
    fatal(msg: string) { this.write("fatal", msg); }
}
