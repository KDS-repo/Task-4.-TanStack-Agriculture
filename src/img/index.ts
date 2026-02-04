// Index for mass importing of images. Necessary for build systems that put builds in a different folder

const imageModules = require.context('./', false, /\.(jpg)$/);

const images = {};
imageModules.keys().forEach((path) => {
  const key = path
    .replace('./', '')
    .replace(/\..+$/, ''); // Remove extension like .jpg
  
  images[key] = imageModules(path);
});

export default images;