const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (config, { folder, target, appRoot, entry, env, isDev }) => {
  if (target === 'lambda') {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.resolve(path.dirname(entry), 'serverless.yml'),
          to: path.resolve(appRoot, folder, target.split('-')[0])
        }
      ])
    );
    const envStr = Object.keys(env)
      .reduce((result, key) => [...result, `${key}=${env[key]}`], [])
      .join(' ');
    if (isDev) {
      config.plugins.push(
        new WebpackShellPlugin({
          onBuildEnd: [
            `cd ./.dev/lambda && ${envStr} sls offline start --port 4010`
          ],
          safe: true
        })
      );
    } else {
      config.plugins.push(
        new DepsPlugin({
          root: appRoot,
          outDir: path.resolve(appRoot, folder, target.split('-')[0])
        })
      );
      config.plugins.push(
        new WebpackShellPlugin({
          onBuildEnd: [`cd ./.dist/lambda && npm i`],
          safe: true
        })
      );
    }
  }
  return config;
};

const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const os = require('os');

const defaultOptions = {
  onBuildStart: [],
  onBuildEnd: [],
  onBuildExit: [],
  dev: true,
  verbose: false,
  safe: false
};

class WebpackShellPlugin {
  constructor(options) {
    this.options = this.validateInput(
      this.mergeOptions(options, defaultOptions)
    );
  }

  puts(error, stdout, stderr) {
    if (error) {
      throw error;
    }
  }

  spreadStdoutAndStdErr(proc) {
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stdout);
    process.on('exit', () => {
      proc.kill();
    });
  }

  serializeScript(script) {
    if (typeof script === 'string') {
      const [command, ...args] = script.split(' ');
      return { command, args };
    }
    const { command, args } = script;
    return { command, args };
  }

  handleScript(script) {
    if (os.platform() === 'win32' || this.options.safe) {
      this.spreadStdoutAndStdErr(exec(script, this.puts));
    } else {
      const { command, args } = this.serializeScript(script);
      const proc = spawn(command, args, { stdio: 'inherit' });
      proc.on('close', this.puts);
    }
  }

  validateInput(options) {
    if (typeof options.onBuildStart === 'string') {
      options.onBuildStart = options.onBuildStart.split('&&');
    }
    if (typeof options.onBuildEnd === 'string') {
      options.onBuildEnd = options.onBuildEnd.split('&&');
    }
    if (typeof options.onBuildExit === 'string') {
      options.onBuildExit = options.onBuildExit.split('&&');
    }
    return options;
  }

  mergeOptions(options, defaults) {
    for (const key in defaults) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key];
      }
    }
    return defaults;
  }

  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      if (this.options.verbose) {
        console.log(`Report compilation: ${compilation}`);
        console.warn(
          `WebpackShellPlugin [${new Date()}]: Verbose is being deprecated, please remove.`
        );
      }
      if (this.options.onBuildStart.length) {
        console.log('Executing pre-build scripts');
        for (let i = 0; i < this.options.onBuildStart.length; i++) {
          this.handleScript(this.options.onBuildStart[i]);
        }
        if (this.options.dev) {
          this.options.onBuildStart = [];
        }
      }
    });

    compiler.plugin('after-emit', (compilation, callback) => {
      if (this.options.onBuildEnd.length) {
        console.log('Executing post-build scripts');
        for (let i = 0; i < this.options.onBuildEnd.length; i++) {
          this.handleScript(this.options.onBuildEnd[i]);
        }
        if (this.options.dev) {
          this.options.onBuildEnd = [];
        }
      }
      callback();
    });

    compiler.plugin('done', () => {
      if (this.options.onBuildExit.length) {
        console.log('Executing additional scripts before exit');
        for (let i = 0; i < this.options.onBuildExit.length; i++) {
          this.handleScript(this.options.onBuildExit[i]);
        }
      }
    });
  }
}

class DepsPlugin {
  constructor(options) {
    this.options = options || {};
  }
  apply(compiler) {
    compiler.plugin('after-emit', (compilation, callback) => {
      const modules = [];
      compilation.chunks.forEach(chunk => {
        chunk.forEachModule(module => {
          if (module.external) {
            modules.push(module.request);
          } else if (
            module.request &&
            module.request.indexOf('/node_modules/') !== -1
          ) {
            modules.push(
              module.request.split('/node_modules/')[1].split('/')[0]
            );
          }
        });
      });

      console.log(
        'out',
        path.resolve(this.options.outDir || process.cwd(), 'package.json')
      );
      const packageJson = JSON.parse(
        fs.readFileSync(
          path.resolve(this.options.root || process.cwd(), 'package.json')
        )
      );
      const deps = Object.assign(
        packageJson.devDependencies || {},
        packageJson.dependencies || {}
      );
      fs.writeFileSync(
        path.resolve(this.options.outDir || process.cwd(), 'package.json'),
        JSON.stringify(
          {
            name: 'Hallo',
            dependencies: Object.keys(deps).reduce((result, key) => {
              if (modules.indexOf(key) !== -1) {
                result[key] = deps[key];
              }
              return result;
            }, {})
          },
          null,
          2
        )
      );

      callback();
    });
  }
}
