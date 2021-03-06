const chalk = require("chalk");

module.exports = {
    error: function(message, optLabel) {
        if (optLabel) {
            console.log(chalk.red(`[${optLabel}] `) + `${message}`);
        } else {
            console.log(chalk.red(`[LiveQuery] `) + `${message}`);
        }
    },
    log: function(message, optLabel) {
        if (optLabel) {
            console.log(chalk.gray(`[${optLabel}] `) + `${message}`);
        } else {
            console.log(chalk.gray(`[LiveQuery] `) + `${message}`);
        }
    },
    success: function(message, optLabel) {
        if (optLabel) {
            console.log(chalk.green(`[${optLabel}] `) + `${message}`);
        } else {
            console.log(chalk.green(`[LiveQuery] `) + `${message}`);
        }
    },
    sqlObjInspect: function(message) {
        const util = require('util')
        console.log(chalk.cyan(`[sql obj] `) + util.inspect(message, {showHidden: false, depth: null}))
    }
}