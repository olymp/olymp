#!/usr/bin/env node

const command = process.argv.slice(1);

console.log('Command', command)
if (command.includes('watch')) {
  require('../gulpfile').watch();
}
