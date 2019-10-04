# PLUGINS

Since Nuxt.js 2.4, **mode** has been introduced as option of plugins to specify plugin type, possible value are: *client* or *server*. ssr: false will be adapted to mode: 'client' and deprecated in next major release.

<hr>

#####Example:
```javascript
{src: '@/plugins/globals', mode: 'client'}
```

<br>
#####Inside plugin file:

```javascript
import Vue from 'vue';
import VuePluginName from 'vue-plugin-module';

Vue.use(VuePluginName);
```
