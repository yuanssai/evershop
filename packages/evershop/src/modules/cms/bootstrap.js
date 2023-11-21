const config = require('config');

module.exports = () => {
  const themeConfig = {
    logo: {
      alt: undefined,
      src: undefined,
      width: undefined,
      height: undefined
    },
    headTags: {
      links: [],
      metas: [],
      scripts: [],
      bases: []
    },
    copyRight: `© 2023 GUISHENG. All Rights Reserved.`
  };
  config.util.setModuleDefaults('themeConfig', themeConfig);
  config.util.setModuleDefaults('system', {
    file_storage: 'local'
  });
};
