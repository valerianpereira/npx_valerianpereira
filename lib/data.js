'use strict'

const chalk = require("chalk");

module.exports = {
    name: chalk.bold.green("Valerian Pereira"),
    handle: chalk.white("@valerianpereira"),
    work: `${chalk.white("Head of Data Team at")} ${chalk
        .hex("#2b82b2")
        .bold("BookMyShow")}`,
    twitter: chalk.gray("https://x.com/") + chalk.cyan("valerianper_era"),
    github: chalk.gray("https://github.com/") + chalk.green("valerianpereira"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("valerianpereira"),
    web: chalk.cyan("https://valerianpereira.in"),
    npx: chalk.red("npx") + " " + chalk.white("valerianpereira"),

    email: "hello@valerianpereira.in",

    bio: [
        "Data platform, analytics and data science at BookMyShow.",
        "15 years building data platforms, APIs and the plumbing underneath.",
        "Databricks, Spark, AWS, Node.js, Python, Go.",
        "Tech and travel enthusiast hailing from Mumbai (India)."
    ],

    labelWork: chalk.white.bold("Work:"),
    labelTwitter: chalk.white.bold("X:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelWeb: chalk.white.bold("Web:"),
    labelCard: chalk.white.bold("Card:")
};
