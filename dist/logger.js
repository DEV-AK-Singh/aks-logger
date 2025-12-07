import fs from "fs";
import { colors, color } from "./color.js";
export class Logger {
    constructor(options = {}) {
        this.level = options.level ?? "debug";
        this.timestamp = options.timestamp ?? "local";
        this.prefix = options.prefix;
        this.filePath = options.logToFile;
    }
    // Check if the log level should be logged or not based on the current level of the logger example: debug < info < warn < error < fatal
    shouldLog(level) {
        const order = ["debug", "info", "warn", "error", "fatal"];
        return order.indexOf(level) >= order.indexOf(this.level);
    }
    formatMessage(level, msg) {
        let time = "";
        if (this.timestamp === "iso")
            time = new Date().toISOString();
        else if (this.timestamp === "local")
            time = new Date().toLocaleString();
        const prefix = this.prefix ? `[${this.prefix}]` : "";
        return [time, prefix, level.toUpperCase(), msg]
            .filter(Boolean)
            .join(" ");
    }
    write(level, msg) {
        if (!this.shouldLog(level))
            return;
        const formatted = this.formatMessage(level, msg);
        // Colors
        const colored = level === "debug" ? color(formatted, colors.gray) :
            level === "info" ? color(formatted, colors.green) :
                level === "warn" ? color(formatted, colors.yellow) :
                    level === "error" ? color(formatted, colors.red) :
                        color(formatted, colors.magenta);
        console.log(colored);
        // File output
        if (this.filePath) {
            fs.appendFileSync(this.filePath, formatted + "\n");
        }
    }
    debug(msg) { this.write("debug", msg); }
    info(msg) { this.write("info", msg); }
    warn(msg) { this.write("warn", msg); }
    error(msg) { this.write("error", msg); }
    fatal(msg) { this.write("fatal", msg); }
}
