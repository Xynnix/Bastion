const a126_0x35b7=['Constants','Command','DiscordError','test','join','../../utils/errors','toLowerCase','send','Definitions','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','definitions\x20WORD','map','length','exec','It\x20allows\x20you\x20to\x20look\x20up\x20definitions\x20for\x20the\x20specified\x20word.','compile','definitions','text','channel','constructor','COLORS','makeRequest','return\x20/\x22\x20+\x20this\x20+\x20\x22/','slice','partOfSpeech','define','name','IRIS','INVALID_COMMAND_SYNTAX','apply','exports','@bastion/tesseract','guild','BASTION_ERROR_TYPE','../../utils/omnic'];(function(_0x4a684b,_0x35b712){const _0x5c99fe=function(_0x4e7555){while(--_0x4e7555){_0x4a684b['push'](_0x4a684b['shift']());}};const _0x34e61b=function(){const _0x2e4894={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xfda727,_0x4446e4,_0x236274,_0x3bcd76){_0x3bcd76=_0x3bcd76||{};let _0x3cf7da=_0x4446e4+'='+_0x236274;let _0x33c551=0x0;for(let _0x9fe9da=0x0,_0x21ca1b=_0xfda727['length'];_0x9fe9da<_0x21ca1b;_0x9fe9da++){const _0x3be5b9=_0xfda727[_0x9fe9da];_0x3cf7da+=';\x20'+_0x3be5b9;const _0x3edbae=_0xfda727[_0x3be5b9];_0xfda727['push'](_0x3edbae);_0x21ca1b=_0xfda727['length'];if(_0x3edbae!==!![]){_0x3cf7da+='='+_0x3edbae;}}_0x3bcd76['cookie']=_0x3cf7da;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1b4b25,_0x30f79c){_0x1b4b25=_0x1b4b25||function(_0x143d97){return _0x143d97;};const _0xe00709=_0x1b4b25(new RegExp('(?:^|;\x20)'+_0x30f79c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xf9e005=function(_0x252917,_0x3fc97f){_0x252917(++_0x3fc97f);};_0xf9e005(_0x5c99fe,_0x35b712);return _0xe00709?decodeURIComponent(_0xe00709[0x1]):undefined;}};const _0x3c0717=function(){const _0x795d20=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x795d20['test'](_0x2e4894['removeCookie']['toString']());};_0x2e4894['updateCookie']=_0x3c0717;let _0x36de33='';const _0x318906=_0x2e4894['updateCookie']();if(!_0x318906){_0x2e4894['setCookie'](['*'],'counter',0x1);}else if(_0x318906){_0x36de33=_0x2e4894['getCookie'](null,'counter');}else{_0x2e4894['removeCookie']();}};_0x34e61b();}(a126_0x35b7,0x19c));const a126_0x5c99=function(_0x4a684b,_0x35b712){_0x4a684b=_0x4a684b-0x0;let _0x5c99fe=a126_0x35b7[_0x4a684b];return _0x5c99fe;};const a126_0x2e4894=function(){let _0x86e506=!![];return function(_0x58be7,_0x550617){const _0x2288f0=_0x86e506?function(){if(_0x550617){const _0x4bb851=_0x550617[a126_0x5c99('0x2')](_0x58be7,arguments);_0x550617=null;return _0x4bb851;}}:function(){};_0x86e506=![];return _0x2288f0;};}();const a126_0x4e7555=a126_0x2e4894(this,function(){const _0x28d88f=function(){const _0x4f0fc2=_0x28d88f[a126_0x5c99('0x1b')](a126_0x5c99('0x1e'))()[a126_0x5c99('0x17')](a126_0x5c99('0x11'));return!_0x4f0fc2[a126_0x5c99('0xb')](a126_0x4e7555);};return _0x28d88f();});a126_0x4e7555();'use strict';const tesseract_1=require(a126_0x5c99('0x4'));const errors=require(a126_0x5c99('0xd'));const omnic=require(a126_0x5c99('0x7'));module[a126_0x5c99('0x3')]=class DefinitionsCommand extends tesseract_1[a126_0x5c99('0x9')]{constructor(){super(a126_0x5c99('0x18'),{'description':a126_0x5c99('0x16'),'triggers':[a126_0x5c99('0x21')],'arguments':{},'scope':a126_0x5c99('0x5'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a126_0x5c99('0x12')]});this[a126_0x5c99('0x15')]=async(_0x3bf12f,_0x14162c)=>{if(!_0x14162c['_'][a126_0x5c99('0x14')])throw new errors[(a126_0x5c99('0xa'))](errors[a126_0x5c99('0x6')][a126_0x5c99('0x1')],this[a126_0x5c99('0x22')]);const _0x14776a=_0x14162c['_'][a126_0x5c99('0xc')]('\x20');const _0x53989c=await omnic[a126_0x5c99('0x1d')]('/words/definitions/'+_0x14776a);const _0x386645=await _0x53989c['json']();await _0x3bf12f[a126_0x5c99('0x1a')][a126_0x5c99('0xf')]({'embed':{'color':tesseract_1[a126_0x5c99('0x8')][a126_0x5c99('0x1c')][a126_0x5c99('0x0')],'author':{'name':_0x14776a[a126_0x5c99('0xe')]()},'title':a126_0x5c99('0x10'),'fields':_0x386645['filter'](_0x20380b=>_0x20380b[a126_0x5c99('0x19')])[a126_0x5c99('0x1f')](0x0,0x5)[a126_0x5c99('0x13')]((_0x1f591b,_0x89745b)=>({'name':_0x89745b+0x1+'.\x20'+(_0x1f591b[a126_0x5c99('0x20')]||''),'value':_0x1f591b[a126_0x5c99('0x19')][a126_0x5c99('0x1f')](0x0,0x400)})),'footer':{'text':'Powered\x20by\x20Century\x20Dictionary,\x20the\x20American\x20Heritage\x20Dictionary,\x20and\x20Wiktionary.'}}});};}};