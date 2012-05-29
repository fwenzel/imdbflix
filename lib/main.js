const data = require('self').data,
      pageMod = require('page-mod');

pageMod.PageMod({
    include: '*.netflix.com',
    contentScriptWhen: 'ready',
    contentScriptFile: [data.url('js/zepto.min.js'),
                        data.url('js/imdbify.js')],
    contentStyleFile: data.url('css/imdbify.css')
});