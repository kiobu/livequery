const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const logger = require('../lib/logger')

const instance = new Discord.Client();

// Checks for config.json
if (!fs.existsSync(path.join(__dirname, 'config.json'))) {
    logger.error("config.json not found!")
} 

config = "";

try {
    config = require('./config.json')
    instance.config = config;
} catch (error) {
    logger.error(`The configuration file could not be loaded!:\n${error.stack}`)
}

instance.login(config.token);
logger.log('LiveQuery Discord client initialized.')

instance.on('ready', () => {
    logger.log(`LiveQuery bot has successfully logged in as ${instance.user.tag}.`)
})

module.exports = instance;