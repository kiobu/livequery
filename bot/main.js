const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const logger = require('../lib/logger')
const compareVersions = require('compare-versions');

const fetch = require('node-fetch')
fetch('https://raw.githubusercontent.com/kiobu/livequery/master/package.json')
    .then(res => res.text())
    .then(json => {

        json = JSON.parse(json)

        if (compareVersions(json.version, require('../package.json').version) > 0) {
            logger.success(
`\n\n    -----------------------------------------------------------------------------------------
      A new version of LiveQuery is available on GitHub: https://github.com/kiobu/livequery 
    -----------------------------------------------------------------------------------------\n`
)
        }
        if (compareVersions(json.version, require('../package.json').version) < 0) {
            logger.error('!!! You are running a newer version of LiveQuery than what is on the GitHub. This most likely means that a bugged version out of the repo. You should reinstall LiveQuery: https://github.com/kiobu/livequery')
        }
    })

const instance = new Discord.Client();

// Checks for config.json
if (!fs.existsSync(path.join(__dirname, 'config.json'))) {
    logger.error("config.json not found! Did you run 'setup.js'?")
} 

config = "";

try {
    config = require('./config.json')
    instance.config = config;
} catch (error) {
    logger.error(`The configuration file could not be loaded!:\n${error}`)
    process.exit(1)
}

instance.login(config.token);
logger.log('LiveQuery Discord client initialized.')

instance.on('ready', () => {
    logger.log(`LiveQuery bot has successfully logged in as ${instance.user.tag}.`)
})

module.exports = instance;