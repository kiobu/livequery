# LiveQuery

LiveQuery is a program that is used to fetch messages sent on Source game servers and post them to a Discord channel.

## Requirements

- Node.js and npm. If you are running Linux, you should use [nvm](https://github.com/nvm-sh/nvm).

## Setup

1. Run `npm install`.
2. Run `node bot/setup.js --token='yourToken' --channelID='yourChannelID'`. 
3. Invite the bot to your server using [this link](https://discordapp.com/api/oauth2/authorize?client_id=699695352147869786&permissions=0&scope=bot).
4. Make sure your bot has access to the channel.
5. Run `npm run main`.
6. Install the corresponding plugin to your server:
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