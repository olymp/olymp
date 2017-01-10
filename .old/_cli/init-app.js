// init git
mkdir ${APP_NAME}
cd ${APP_NAME}
git init

// init heroku
heroku apps:create ${APP_NAME}
heroku addons:create mongolab
heroku config:set MAIL_URI=${MAIL_URI}
heroku config:set CLOUDINARY_URI=${CLOUDINARY_URI}
heroku config:set AUTH_SECRET=${GENERATE_SECRET}
heroku config:set SESSION_SECRET=${GENERATE_SECRET}
heroku config:set GM_KEY=${GOOGLE_MAP_KEY}
heroku config:set NODE_TLS_REJECT_UNAUTHORIZED=0
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set URL=https://${APP_NAME}.herokuapp.com

// create .env
heroku config | grep MONGODB_URI
const env = {
  DISABLE_SSR: true,
  MONGODB_URI,
  CLOUDINARY_URI,
  MAIL_URI
}
// MONGODB_URI => mongodb://heroku_12345678:random_password@ds029017.mLab.com:29017/heroku_12345678

// create package.json
const pkg = {
  "version": "9.0.0",
  "name": "@olymp/olymp",
  "description": "A starter kit giving you the minimum requirements for a production ready universal react application.",
  "main": "build/server/main.js",
  "engines": {
    "node": "6.7.0",
    "npm": "3.10.3",
    "yarno": "0.18.1"
  },
  "scripts": {
    "clean": "node node_modules/olymp/tools/scripts/clean",
    "development": "node node_modules/olymp/tools/development",
    "watch-development": "OLYMP_PATH=../olymp node node_modules/olymp/tools/scripts/sync",
    "build": "node node_modules/olymp/tools/scripts/build",
    "analyze": "node node_modules/olymp/tools/scripts/analyze",
    "start": "NODE_ENV=production node .build/server",
    "deploy": "node node_modules/olymp/tools/scripts/deploy",
    "lint": "eslint src",
    "heroku-postbuild": "npm run build",
    "test": "node ./node_modules/mocha/bin/mocha"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ctrlplusb/react-universally.git"
  },
  "keywords": [
    "react",
    "boilerplate",
    "starter kit",
    "universal",
    "javascript",
    "express",
    "webpack"
  ],
  "author": "Benjamin Kniffler <bkniffler@me.com>",
  "license": "MIT",
  "dependencies": {
    "olymp": "9.0.1-10"
  },
  "devDependencies": {
    "olymp-dev": "9.0.0-10"
  }
}

yarn
