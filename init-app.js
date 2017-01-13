// init git
mkdir ${APP_NAME}
cd ${APP_NAME}
git init
mkdir './app'
mkdir './server'

// init heroku
heroku apps:create ${APP_NAME}
heroku addons:create mongolab
heroku config:set MAIL_URI=${MAIL_URI}
heroku config:set CLOUDINARY_URI=${CLOUDINARY_URI}
heroku config:set AUTH_SECRET=${GENERATE_SECRET}
heroku config:set SESSION_SECRET=${GENERATE_SECRET}
heroku config:set GM_KEY=${GOOGLE_MAP_KEY}
heroku config:set NODE_TLS_REJECT_UNAUTHORIZED=0
heroku config:set YARN_PRODUCTION=false
heroku config:set URL=https://${APP_NAME}.herokuapp.com

// create .env
heroku config | grep MONGODB_URI
const env = {
  DISABLE_SSR: true,
  MONGODB_URI,
  CLOUDINARY_URI,
  MAIL_URI
}
console.log('Create .env file with: ', env);
// MONGODB_URI => mongodb://xxx

// create package.json
const pkg = {
  "version": "9.0.0",
  "name": "olymp-op",
  "engines": {
    "node": "6.7.0",
    "npm": "3.10.3",
    "yarn": "0.19.0"
  },
  "scripts": {
    "development": "universally dev",
    "build": "universally build",
    "start": "universally start",
    "heroku-postbuild": "universally build"
  },
  "dependencies": {
    "olymp": "12.0.0-1",
    "universally": "12.0.0-2"
  },
  "devDependencies": {
    "olymp-dev": "12.0.0-2"
  }
}

yarn
