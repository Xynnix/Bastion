const a199_0x15da=['document','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','fetchDocument','findByIdAndUpdate','createDocument','default','compile','guild','findById','discord.js'];(function(_0x5596df,_0x15da80){const _0x9d13f9=function(_0x314c8a){while(--_0x314c8a){_0x5596df['push'](_0x5596df['shift']());}};const _0x930129=function(){const _0x25983d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4150b7,_0x4027d3,_0x535cdf,_0x5e7aeb){_0x5e7aeb=_0x5e7aeb||{};let _0x10eccb=_0x4027d3+'='+_0x535cdf;let _0x55a94c=0x0;for(let _0x483994=0x0,_0x54a8ee=_0x4150b7['length'];_0x483994<_0x54a8ee;_0x483994++){const _0x18c532=_0x4150b7[_0x483994];_0x10eccb+=';\x20'+_0x18c532;const _0x477669=_0x4150b7[_0x18c532];_0x4150b7['push'](_0x477669);_0x54a8ee=_0x4150b7['length'];if(_0x477669!==!![]){_0x10eccb+='='+_0x477669;}}_0x5e7aeb['cookie']=_0x10eccb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x285e46,_0x458cc2){_0x285e46=_0x285e46||function(_0x4ca6a9){return _0x4ca6a9;};const _0x35e095=_0x285e46(new RegExp('(?:^|;\x20)'+_0x458cc2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1ffb3b=function(_0x344a81,_0x2fff95){_0x344a81(++_0x2fff95);};_0x1ffb3b(_0x9d13f9,_0x15da80);return _0x35e095?decodeURIComponent(_0x35e095[0x1]):undefined;}};const _0x4d4970=function(){const _0xec1565=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xec1565['test'](_0x25983d['removeCookie']['toString']());};_0x25983d['updateCookie']=_0x4d4970;let _0x2d3689='';const _0x588b5b=_0x25983d['updateCookie']();if(!_0x588b5b){_0x25983d['setCookie'](['*'],'counter',0x1);}else if(_0x588b5b){_0x2d3689=_0x25983d['getCookie'](null,'counter');}else{_0x25983d['removeCookie']();}};_0x930129();}(a199_0x15da,0x1cb));const a199_0x9d13=function(_0x5596df,_0x15da80){_0x5596df=_0x5596df-0x0;let _0x9d13f9=a199_0x15da[_0x5596df];return _0x9d13f9;};const a199_0x25983d=function(){let _0xec1565=!![];return function(_0xd7fc6b,_0xa4a3a5){const _0x19b8ab=_0xec1565?function(){if(_0xa4a3a5){const _0x49f937=_0xa4a3a5[a199_0x9d13('0x5')](_0xd7fc6b,arguments);_0xa4a3a5=null;return _0x49f937;}}:function(){};_0xec1565=![];return _0x19b8ab;};}();const a199_0x314c8a=a199_0x25983d(this,function(){const _0x5c4afb=function(){const _0xfaa088=_0x5c4afb['constructor'](a199_0x9d13('0x4'))()[a199_0x9d13('0xa')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xfaa088['test'](a199_0x314c8a);};return _0x5c4afb();});a199_0x314c8a();'use strict';const discord_js_1=require(a199_0x9d13('0x2'));const Role_1=require('../models/Role');module['exports']=class BastionRole extends discord_js_1['Role']{constructor(_0x583732,_0x5140fe,_0xc67717){super(_0x583732,_0x5140fe,_0xc67717);}async[a199_0x9d13('0x6')](){this[a199_0x9d13('0x3')]=await Role_1[a199_0x9d13('0x9')][a199_0x9d13('0x1')](this['id']);return this[a199_0x9d13('0x3')];}async[a199_0x9d13('0x8')](_0x1c4a2c){return await Role_1['default'][a199_0x9d13('0x7')](this['id'],{'id':this['id'],'guild':this[a199_0x9d13('0x0')]['id'],..._0x1c4a2c},{'upsert':!![],'new':!![]});}};