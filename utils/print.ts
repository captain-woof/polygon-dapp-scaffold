import chalk from "chalk";
import { getCurrentTimeInHumanRdFormat } from "./time";

/**
 * @description Logs an error
 * @argument args What to print
 */
export const logError = (...args: string[]) => {
    console.log(
        chalk.redBright(`[${getCurrentTimeInHumanRdFormat()}] ! `, ...args)
    );
}

/**
 * @description Logs an error
 * @argument args What to print
 */
export const logErrorWithBg = (...args: string[]) => {
    console.log(
        chalk.bgRed.white(`[${getCurrentTimeInHumanRdFormat()}] ! `, ...args)
    );
}

/**
 * @description Logs an info
 * @argument args What to print
 */
export const logInfo = (...args: string[]) => {
    console.log(
        chalk.blueBright(`[${getCurrentTimeInHumanRdFormat()}] > `, ...args)
    );
}

/**
 * @description Logs an info
 * @argument args What to print
 */
export const logInfoWithBg = (...args: string[]) => {
    console.log(
        chalk.bgBlue.white(`[${getCurrentTimeInHumanRdFormat()}] > `, ...args)
    );
}

/**
 * @description Logs a success
 * @argument args What to print
 */
export const logSuccess = (...args: string[]) => {
    console.log(
        chalk.greenBright(`[${getCurrentTimeInHumanRdFormat()}] ✔ `, ...args)
    );
}

/**
 * @description Logs a success
 * @argument args What to print
 */
export const logSuccessWithBg = (...args: string[]) => {
    console.log(
        chalk.bgGreen.white(`[${getCurrentTimeInHumanRdFormat()}] ✔ `, ...args)
    );
}

