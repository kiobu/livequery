# LiveQuery

LiveQuery is a program that is used to fetch messages sent on Source game servers and post them to a Discord channel.

## Setup

1. Run `node bot/setup.js --token='yourToken' --channelID='yourChannelID'`. 
2. Run `npm run main`.
3. Install the corresponding plugin to your server:
    - [Clockwork](https://github.com/kiobu/cw-livequery/)
    - [DarkRP](https://github.com/kiobu/drp-livequery/)

## Semantics

### `LiveQuery.app`

Refers to the `express()` object.

### `LiveQuery.Listener`

Refers to the `newField` object of type `EventEmitter`. Fired whenever a POST request fulfilling the prerequisites succeeds.

### `LiveQuery.router` 

Refers to the `express.Router()` object.

### `client`

Refers to the `Discord.Client()` object.