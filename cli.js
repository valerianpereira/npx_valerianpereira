#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const data = require('./lib/data')

// Start fresh
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:hello@valerianpereira.in");
                    console.log("\nSwoosh...I'll wait to hear from you\n");
                }
            },
            {
                name: `Show some love.. ${chalk.green.bold("Sponsor me")}?`,
                value: () => {
                    open("https://paypal.me/valerianpereira");
                    console.log("\nThanks for being so generous :)\n");
                }
            },
            {
                name: `${chalk.red.bold("Quit")}`,
                value: () => {
                    console.log("See you soon\n");
                }
            }
        ]
    }
];

// Create the box items
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("Actively looking for new challenges and opportunities.")}`,
        `${chalk.italic("Just an email away when you want to connect with me.")}`,
        `${chalk.italic("Tech and Travel enthusiast hailing from Mumbai (India)")}`,
        `${chalk.italic("Waiting to hear from you soon !!!")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "yellow"
    }
);

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "CMD / CTRL + Click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());