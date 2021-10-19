# Project Setup

## Requirements

- NodeJS v14.18.1

  > Using nvm use in project

- YARN or NPM (preferably yarn)

## Setup

- 1 - Add store hosts

```console
$ sudo vi /etc/hosts
// Example using ubuntu


// Set local hosts
127.0.0.1 local.fire.com
127.0.0.1 local.flying.com
127.0.0.1 local.stone.com
```

- 2 - Clone this project and install dependecies

- 3 - Start project

```console
$yarn start:fire // or yarn start:stone // or yarn start:flying
```

- 4 - Access project url

http://local.fire.com:3000
<br />
http://local.flying.com:3000
<br />
http://local.stone.com:3000
