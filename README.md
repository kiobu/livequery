# LiveQuery

![showcase](https://i.imgur.com/R2ixaFh.png)

LiveQuery is a program that is used to fetch messages sent on Source game servers and post them to a Discord channel.

## Requirements

- Node.js and npm. If you are running Linux, you should use [nvm](https://github.com/nvm-sh/nvm). If you are running Windows, you should probably use [nvm-windows](https://github.com/coreybutler/nvm-windows) or install Node and npm through `chocolatey`.

## Setup

Setup is unnecessarily complicated until I streamline the process.

1. Run `npm install`.
2. Run `cd bot` and `node setup.js --token='yourToken' --channelID='yourChannelID'`. Make sure you are in the same directory as `setup.js` before running the `node setup.js` command.
3. Invite the bot to your server. [This image](https://i.imgur.com/KNo6Cw5.png) will show you how to do it. If you don't have a bot client created already, you can create one on the [Discord Developers](https://discordapp.com/developers/) page.
4. Make sure your bot has access to the channel.
5. Run `npm run main`. Run this under a `screen` so the bot doesn't shut down when you exit your shell session.
6. Install the corresponding plugin to your server:
    - [Clockwork](https://github.com/kiobu/cw-livequery/)
    - [DarkRP](https://github.com/kiobu/drp-livequery/)
7. Configure the plugin. For Clockwork, you just need to change the `server` variable in `sh_plugin.lua` to whatever the IP or hostname the bot is running on is. Additionally, make sure the port appended to the IP/hostname is correct. It is `25050` by default.

The bot was created with Discord.js v11. v12 introduced breaking changes, so it may not work. If you need a v11 version of Discord.js, you can use `npm i discord.js@11.6.4`.

## Known Bugs

- You get a JSON parse error whenever someone sends a message containing quotes ("").
