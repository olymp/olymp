#!/usr/bin/env node


var argv = require('minimist')(process.argv.slice(1));
var notifier = require('node-notifier');
var fetch = require('node-fetch');

require('dotenv').config();

fetch('https://api.cloudflare.com/client/v4/zones/' + process.env.CLOUDFLARE_ZONE + '/purge_cache', {
  method: 'DELETE',
  body: JSON.stringify({ purge_everything: true }),
  headers: {
    'X-Auth-Key': process.env.CLOUDFLARE_KEY,
    'X-Auth-Email': process.env.CLOUDFLARE_EMAIL
  }
}).then(function (res) {
  return res.json();
}).then(function (json) {
  notifier.notify('Purged cache');
}).catch(function (err) {
  console.error(err);
  notifier.notify('Error purging');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkZmxhcmUvYmluL29seW1wLWNsb3VkZmxhcmUuZXM2Il0sIm5hbWVzIjpbImFyZ3YiLCJyZXF1aXJlIiwicHJvY2VzcyIsInNsaWNlIiwibm90aWZpZXIiLCJmZXRjaCIsImNvbmZpZyIsImVudiIsIkNMT1VERkxBUkVfWk9ORSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVyZ2VfZXZlcnl0aGluZyIsImhlYWRlcnMiLCJDTE9VREZMQVJFX0tFWSIsIkNMT1VERkxBUkVfRU1BSUwiLCJ0aGVuIiwicmVzIiwianNvbiIsIm5vdGlmeSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztBQUVBLElBQU1BLE9BQU9DLFFBQVEsVUFBUixFQUFvQkMsUUFBUUYsSUFBUixDQUFhRyxLQUFiLENBQW1CLENBQW5CLENBQXBCLENBQWI7QUFDQSxJQUFNQyxXQUFXSCxRQUFRLGVBQVIsQ0FBakI7QUFDQSxJQUFNSSxRQUFRSixRQUFRLFlBQVIsQ0FBZDs7QUFFQUEsUUFBUSxRQUFSLEVBQWtCSyxNQUFsQjs7QUFFQUQsc0RBQ2dESCxRQUFRSyxHQUFSLENBQzNDQyxlQUZMLG1CQUdFO0FBQ0VDLFVBQVEsUUFEVjtBQUVFQyxRQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBRUMsa0JBQWtCLElBQXBCLEVBQWYsQ0FGUjtBQUdFQyxXQUFTO0FBQ1Asa0JBQWNaLFFBQVFLLEdBQVIsQ0FBWVEsY0FEbkI7QUFFUCxvQkFBZ0JiLFFBQVFLLEdBQVIsQ0FBWVM7QUFGckI7QUFIWCxDQUhGLEVBWUdDLElBWkgsQ0FZUTtBQUFBLFNBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLENBWlIsRUFhR0YsSUFiSCxDQWFRLGdCQUFRO0FBQ1piLFdBQVNnQixNQUFULENBQWdCLGNBQWhCO0FBQ0QsQ0FmSCxFQWdCR0MsS0FoQkgsQ0FnQlMsZUFBTztBQUNaQyxVQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDQXBCLFdBQVNnQixNQUFULENBQWdCLGVBQWhCO0FBQ0QsQ0FuQkgiLCJmaWxlIjoicGFja2FnZXMvY2xvdWRmbGFyZS9iaW4vb2x5bXAtY2xvdWRmbGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBhcmd2ID0gcmVxdWlyZSgnbWluaW1pc3QnKShwcm9jZXNzLmFyZ3Yuc2xpY2UoMSkpO1xuY29uc3Qgbm90aWZpZXIgPSByZXF1aXJlKCdub2RlLW5vdGlmaWVyJyk7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmZldGNoKFxuICBgaHR0cHM6Ly9hcGkuY2xvdWRmbGFyZS5jb20vY2xpZW50L3Y0L3pvbmVzLyR7cHJvY2Vzcy5lbnZcbiAgICAuQ0xPVURGTEFSRV9aT05FfS9wdXJnZV9jYWNoZWAsXG4gIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHVyZ2VfZXZlcnl0aGluZzogdHJ1ZSB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1BdXRoLUtleSc6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfS0VZLFxuICAgICAgJ1gtQXV0aC1FbWFpbCc6IHByb2Nlc3MuZW52LkNMT1VERkxBUkVfRU1BSUwsXG4gICAgfSxcbiAgfSxcbilcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb24gPT4ge1xuICAgIG5vdGlmaWVyLm5vdGlmeSgnUHVyZ2VkIGNhY2hlJyk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBub3RpZmllci5ub3RpZnkoJ0Vycm9yIHB1cmdpbmcnKTtcbiAgfSk7XG4iXX0=
