const logger = require('./lib/logger')
const express = require('express')
const bodyParser = require('body-parser');
const Discord = require('discord.js')
const path = require('path')
const EventEmitter = require('events')

const port = process.env.port || 25050;

const model = {uid: "",plyname: "",svname: "",msg: "",time: 0}

objectsHaveSameKeys = (...objects) => {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
}

const client = require('./bot/main')

client.on('ready', () => {
    // Set up LiveQuery obj.
    const LiveQuery = {
        app: express(),
        Listener: new EventEmitter(),
        router: express.Router()
    }

    // Configure app to use body-parser. This will let us get the data from a POST req.
    LiveQuery.app.use(bodyParser.urlencoded({ extended: true }));
    LiveQuery.app.use(bodyParser.json());

    LiveQuery.app.use((err, req, res, next) => {
        // If there is a JSON parse issue, throw away the request.
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            logger.error("There was an issue parsing the request body. Error: " + err);
            return res.sendStatus(400); // Bad request
        }    
        next();
    });

    LiveQuery.router.post('/', function(req, res) {
        let ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        let queryObj = req.body;
        if (objectsHaveSameKeys(queryObj, model)) {
            logger.success(`POST request accepted. Req. IP: ${ip}`)
            LiveQuery.Listener.emit('newField', queryObj);
            res.send(`Data successfully parsed. IP: ${ip}`)
        } else {
            logger.log(`POST request denied. Req. IP: ${ip}`)
            res.send(`The request was not in the proper format. IP: ${ip}`)
        }
    });

    LiveQuery.app.use('/api', LiveQuery.router);
    
    // Listen server.
    LiveQuery.app.listen(port);
    logger.log(`LiveQuery listening on port ${port}`)

    // Fire Discord msg. event.
    LiveQuery.Listener.on('newField', (body) => {
        const EMBED = new Discord.RichEmbed()
            .setColor('#aaff00')
            .setTitle(body.svname)
            .addField("Player Name", body.plyname)
            .addField("Message", body.msg)

        client.channels.get(client.config.channelID).send(EMBED)
    })

})
