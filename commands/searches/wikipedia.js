const a120_0x23da=['query','thumbnail','send','INVALID_COMMAND_SYNTAX','compile','makeRequest','slice','DiscordError','length','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','name','@bastion/tesseract','wikipedia','join','guild','channel','\x0a...','json','Constants','apply','Powered\x20by\x20Omnic','constructor','exec','test','IRIS','pages','https://en.wikipedia.org/','return\x20/\x22\x20+\x20this\x20+\x20\x22/','NOT_FOUND','wikipedia\x20TITLE','COLORS','exports','../../utils/omnic','source','BASTION_ERROR_TYPE','title'];(function(_0x1b490e,_0x23da8c){const _0xddad2c=function(_0x1fb340){while(--_0x1fb340){_0x1b490e['push'](_0x1b490e['shift']());}};const _0x2edf77=function(){const _0x568c63={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x27e525,_0x31ae2f,_0x232a54,_0x2d5857){_0x2d5857=_0x2d5857||{};let _0x14c41e=_0x31ae2f+'='+_0x232a54;let _0x4cedfd=0x0;for(let _0x2520e3=0x0,_0x154906=_0x27e525['length'];_0x2520e3<_0x154906;_0x2520e3++){const _0x5f408e=_0x27e525[_0x2520e3];_0x14c41e+=';\x20'+_0x5f408e;const _0x1d5a94=_0x27e525[_0x5f408e];_0x27e525['push'](_0x1d5a94);_0x154906=_0x27e525['length'];if(_0x1d5a94!==!![]){_0x14c41e+='='+_0x1d5a94;}}_0x2d5857['cookie']=_0x14c41e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x577300,_0x1c8934){_0x577300=_0x577300||function(_0x2fb0db){return _0x2fb0db;};const _0x1be6d4=_0x577300(new RegExp('(?:^|;\x20)'+_0x1c8934['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5ad9cf=function(_0x20be1d,_0x1f0be4){_0x20be1d(++_0x1f0be4);};_0x5ad9cf(_0xddad2c,_0x23da8c);return _0x1be6d4?decodeURIComponent(_0x1be6d4[0x1]):undefined;}};const _0xf47344=function(){const _0x252d9a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x252d9a['test'](_0x568c63['removeCookie']['toString']());};_0x568c63['updateCookie']=_0xf47344;let _0x3af165='';const _0x8e6ca9=_0x568c63['updateCookie']();if(!_0x8e6ca9){_0x568c63['setCookie'](['*'],'counter',0x1);}else if(_0x8e6ca9){_0x3af165=_0x568c63['getCookie'](null,'counter');}else{_0x568c63['removeCookie']();}};_0x2edf77();}(a120_0x23da,0x6b));const a120_0xddad=function(_0x1b490e,_0x23da8c){_0x1b490e=_0x1b490e-0x0;let _0xddad2c=a120_0x23da[_0x1b490e];return _0xddad2c;};const a120_0x568c63=function(){let _0x4f20e3=!![];return function(_0x1976d2,_0x5e687e){const _0x87cce6=_0x4f20e3?function(){if(_0x5e687e){const _0x475882=_0x5e687e[a120_0xddad('0x14')](_0x1976d2,arguments);_0x5e687e=null;return _0x475882;}}:function(){};_0x4f20e3=![];return _0x87cce6;};}();const a120_0x1fb340=a120_0x568c63(this,function(){const _0x2b667b=function(){const _0x515d47=_0x2b667b[a120_0xddad('0x16')](a120_0xddad('0x1c'))()[a120_0xddad('0x5')](a120_0xddad('0xa'));return!_0x515d47[a120_0xddad('0x18')](a120_0x1fb340);};return _0x2b667b();});a120_0x1fb340();'use strict';const tesseract_1=require(a120_0xddad('0xc'));const errors=require('../../utils/errors');const omnic=require(a120_0xddad('0x21'));module[a120_0xddad('0x20')]=class WikipediaCommand extends tesseract_1['Command']{constructor(){super(a120_0xddad('0xd'),{'description':'It\x20allows\x20you\x20to\x20search\x20the\x20Wikipedia\x20for\x20the\x20specified\x20title.','triggers':[],'arguments':{},'scope':a120_0xddad('0xf'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a120_0xddad('0x1e')]});this['sanitize']=_0x111eab=>{return _0x111eab[a120_0xddad('0x9')]>0x7d0?_0x111eab[a120_0xddad('0x7')](0x0,0x7d0)+a120_0xddad('0x11'):_0x111eab;};this[a120_0xddad('0x17')]=async(_0x289113,_0x166608)=>{if(!_0x166608['_'][a120_0xddad('0x9')])throw new errors[(a120_0xddad('0x8'))](errors[a120_0xddad('0x23')][a120_0xddad('0x4')],this[a120_0xddad('0xb')]);const _0x49ef08=_0x166608['_'][a120_0xddad('0xe')]('\x20');const _0x85fcfa=await omnic[a120_0xddad('0x6')]('/wikimedia/wikipedia/'+_0x49ef08);const _0x65f86b=await _0x85fcfa[a120_0xddad('0x12')]();if(!_0x65f86b[a120_0xddad('0x1')]||!_0x65f86b[a120_0xddad('0x1')]['pages'])throw new Error(a120_0xddad('0x1d'));await _0x289113[a120_0xddad('0x10')][a120_0xddad('0x3')]({'embed':{'color':tesseract_1[a120_0xddad('0x13')][a120_0xddad('0x1f')][a120_0xddad('0x19')],'author':{'name':'Wikipedia','url':a120_0xddad('0x1b')},'title':_0x65f86b['query'][a120_0xddad('0x1a')][0x0][a120_0xddad('0x0')],'url':_0x65f86b['query']['pages'][0x0]['fullurl'],'description':this['sanitize'](_0x65f86b[a120_0xddad('0x1')]['pages'][0x0]['extract']),'image':{'url':_0x65f86b[a120_0xddad('0x1')][a120_0xddad('0x1a')][0x0][a120_0xddad('0x2')][a120_0xddad('0x22')]},'footer':{'text':a120_0xddad('0x15')}}});};}};