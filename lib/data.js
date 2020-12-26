'use strict'

const chalk = require("chalk");

module.exports = {
    name: chalk.bold.green("Valerian Pereira"),
    handle: chalk.white("@valerianpereira"),
    work: `${chalk.white("Software Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("BookMyShow")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("valerianper_era"),
    github: chalk.gray("https://github.com/") + chalk.green("valerianpereira"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("valerianpereira"),
    web: chalk.cyan("https://valerianpereira.in"),
    npx: chalk.red("npx") + " " + chalk.white("valerianpereira"),

    labelWork: chalk.white.bold("Work:"),
    labelTwitter: chalk.white.bold("Twitter:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelWeb: chalk.white.bold("Web:"),
    labelCard: chalk.white.bold("Card:")
};
