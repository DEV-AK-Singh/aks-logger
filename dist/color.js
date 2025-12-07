export const colors = {
    reset: "\x1b[0m",
    gray: "\x1b[90m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m"
};
export function color(text, colorCode) {
    return `${colorCode}${text}${colors.reset}`;
}
