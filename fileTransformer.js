const path = require("./src/assets/icon.png");

module.exports = {
  process(sourceText, assets, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(assets))};`,
    };
  },
};
