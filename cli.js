#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const qrcode = require('qrcode-terminal');
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
                    open(`mailto:${data.email}`);
                    console.log("\nSwoosh...I'll wait to hear from you\n");
                }
            },
            {
                name: `Check out my ${chalk.cyan.bold("website")} (SQL console + CV)?`,
                value: () => {
                    open("https://valerianpereira.in");
                    console.log("\nTry `SELECT * FROM shipped;` while you are there\n");
                }
            },
            {
                name: `Browse my ${chalk.green.bold("open source")} work?`,
                value: () => {
                    open("https://github.com/valerianpereira?tab=repositories");
                    console.log("\nStars are always welcome :)\n");
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

// Generate the QR Code
var qrCodeValue = '';
qrcode.generate('https://valerianpereira.in', {small: true}, function (qrcode) {
    qrCodeValue = qrcode
});

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
        ...data.bio.map(line => chalk.italic(line)),
        ``,
        `${qrCodeValue}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        align: 'center',
        padding: 1,
        borderStyle: "classic",
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
