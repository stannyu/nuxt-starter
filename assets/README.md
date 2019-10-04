# ASSETS

**This directory contains images and global (component/layout/page agnostic) styles.**

As a preprocessor we use SASS.
Styles injected inside ```nuxt.config.js``` file in ```css``` section.  

There is also a ```theme``` folder in root of project. This folder will contain SASS styles for specific Studio. 

**AS OF**
```javascript
module.exports = {
  //..
  css: ['@/assets/styles/global.scss', '@/theme/theme.scss']
  //..
}
```
**!!! Config declaration global styles will be OVERRITEN by theme styles**
