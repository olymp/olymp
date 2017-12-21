export const argv = require('minimist')(process.argv.slice(1));

export class Server {

}

export class WebApp {
  constructor(mode, config) {
    this.mode = mode;
    this.config = config;
  }
}

export class Electron {
  constructor(mode, config) {
    this.mode = mode;
    this.config = config;
  }
}

export class Config {
  constructor(config) {
    this.config = config;
  }
  get = () => this.config;
}

export const SERVERLESS = 'SERVERLESS';
export const SSR = 'SSR';
export const JAM = 'JAM';
