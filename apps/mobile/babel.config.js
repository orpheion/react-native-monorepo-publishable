const fs = require('node:fs');
const path = require('node:path');

const packagesDir = fs.readdirSync(path.join(__dirname, '../..', 'packages'));

/**
 * Babel configuration
 * https://babeljs.io/docs/configuration
 *
 * @type {import('@babel/core').ConfigFunction}
 */
module.exports = function (api) {
  api.cache(true);

  function getWorkspaceAliases() {
    return Object.fromEntries(
      packagesDir.map(folder => {
        const pkg = require(`./packages/${folder}/package.json`);

        if (pkg.source == null) {
          return null;
        }

        return [pkg.name, path.resolve(packagesDir, folder, pkg.source)];
      }),
    );
  }

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          cwd: 'packagejson',
          alias: {
            ...getWorkspaceAliases(),
            '@': './src',
          },
        },
      ],
    ],
    overrides: [
      {
        include: /\/packages\//,
        presets: [
          [
            'module:react-native-builder-bob/babel-preset',
            {modules: 'commonjs'},
          ],
        ],
      },
    ],
  };
};
