const a56_0x458f=['snakeToTitleCase','role','role\x20ROLE','channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Created','managed','locale','permissions','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20role.','client','toArray','getString','name','roleInfo','cache','toString','DiscordError','document','bitfield','Members','language','toUTCString','../../utils/strings','resolver','rawPosition','createdAt','BASTION_ERROR_TYPE','Managed','send','test','Position','color','size','Permissions','guild','roleNotFound','catch','errors','hoist','join','../../utils/errors','Hoisted\x20•\x20','map','members','ROLE_NOT_FOUND','roles'];(function(_0x4960a1,_0x458f23){const _0x3221ef=function(_0x3cf9aa){while(--_0x3cf9aa){_0x4960a1['push'](_0x4960a1['shift']());}};const _0x1566ce=function(){const _0x31aeea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x10d748,_0x5b0100,_0x5d1b30,_0x333a2a){_0x333a2a=_0x333a2a||{};let _0x53f667=_0x5b0100+'='+_0x5d1b30;let _0x28534d=0x0;for(let _0x1aa3be=0x0,_0x4d1ef4=_0x10d748['length'];_0x1aa3be<_0x4d1ef4;_0x1aa3be++){const _0x5818be=_0x10d748[_0x1aa3be];_0x53f667+=';\x20'+_0x5818be;const _0x29fb0d=_0x10d748[_0x5818be];_0x10d748['push'](_0x29fb0d);_0x4d1ef4=_0x10d748['length'];if(_0x29fb0d!==!![]){_0x53f667+='='+_0x29fb0d;}}_0x333a2a['cookie']=_0x53f667;},'removeCookie':function(){return'dev';},'getCookie':function(_0x29f5cf,_0x3a1d46){_0x29f5cf=_0x29f5cf||function(_0x5d9ba2){return _0x5d9ba2;};const _0x2f304f=_0x29f5cf(new RegExp('(?:^|;\x20)'+_0x3a1d46['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x306adc=function(_0x22b721,_0x2d9f06){_0x22b721(++_0x2d9f06);};_0x306adc(_0x3221ef,_0x458f23);return _0x2f304f?decodeURIComponent(_0x2f304f[0x1]):undefined;}};const _0xdfb033=function(){const _0xe15a25=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xe15a25['test'](_0x31aeea['removeCookie']['toString']());};_0x31aeea['updateCookie']=_0xdfb033;let _0x4b3843='';const _0x537548=_0x31aeea['updateCookie']();if(!_0x537548){_0x31aeea['setCookie'](['*'],'counter',0x1);}else if(_0x537548){_0x4b3843=_0x31aeea['getCookie'](null,'counter');}else{_0x31aeea['removeCookie']();}};_0x1566ce();}(a56_0x458f,0x198));const a56_0x3221=function(_0x4960a1,_0x458f23){_0x4960a1=_0x4960a1-0x0;let _0x3221ef=a56_0x458f[_0x4960a1];return _0x3221ef;};const a56_0x31aeea=function(){let _0x54e153=!![];return function(_0x470186,_0x4225e8){const _0x206f0d=_0x54e153?function(){if(_0x4225e8){const _0xbba0f6=_0x4225e8['apply'](_0x470186,arguments);_0x4225e8=null;return _0xbba0f6;}}:function(){};_0x54e153=![];return _0x206f0d;};}();const a56_0x3cf9aa=a56_0x31aeea(this,function(){const _0x41137a=function(){const _0x21c4c0=_0x41137a['constructor'](a56_0x3221('0x13'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x21c4c0[a56_0x3221('0x2d')](a56_0x3cf9aa);};return _0x41137a();});a56_0x3cf9aa();'use strict';const tesseract_1=require('@bastion/tesseract');const strings=require(a56_0x3221('0x26'));const errors=require(a56_0x3221('0x9'));module['exports']=class RoleCommand extends tesseract_1['Command']{constructor(){super(a56_0x3221('0x10'),{'description':a56_0x3221('0x18'),'triggers':[a56_0x3221('0x1d')],'arguments':{},'scope':a56_0x3221('0x3'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a56_0x3221('0x11')]});this['exec']=async(_0x3598ef,_0x141ab3)=>{const _0x426ddc=_0x141ab3['_'][a56_0x3221('0x8')]('\x20');const _0x4316e9=this[a56_0x3221('0x19')][a56_0x3221('0x27')]['resolveRole'](_0x3598ef[a56_0x3221('0x3')],_0x426ddc);if(!_0x4316e9)throw new errors[(a56_0x3221('0x20'))](errors[a56_0x3221('0x2a')][a56_0x3221('0xd')],this[a56_0x3221('0x19')][a56_0x3221('0x16')][a56_0x3221('0x1b')](_0x3598ef[a56_0x3221('0x3')][a56_0x3221('0x21')][a56_0x3221('0x24')],a56_0x3221('0x6'),a56_0x3221('0x4')));_0x3598ef[a56_0x3221('0x12')][a56_0x3221('0x2c')]({'embed':{'color':_0x4316e9[a56_0x3221('0x0')],'author':{'name':_0x4316e9[a56_0x3221('0x1c')]},'title':(_0x4316e9[a56_0x3221('0x15')]?a56_0x3221('0x2b'):'')+'\x20Role','fields':[{'name':a56_0x3221('0x2e'),'value':(_0x3598ef[a56_0x3221('0x3')][a56_0x3221('0xe')][a56_0x3221('0x1e')][a56_0x3221('0x1')]-_0x4316e9[a56_0x3221('0x28')])[a56_0x3221('0x1f')](),'inline':!![]},{'name':a56_0x3221('0x23'),'value':_0x4316e9[a56_0x3221('0xc')][a56_0x3221('0x1')]+'\x20Members','inline':!![]},{'name':a56_0x3221('0x14'),'value':_0x4316e9[a56_0x3221('0x29')][a56_0x3221('0x25')](),'inline':!![]},{'name':a56_0x3221('0x2'),'value':_0x4316e9['permissions'][a56_0x3221('0x22')]?_0x4316e9[a56_0x3221('0x17')][a56_0x3221('0x1a')]()[a56_0x3221('0xb')](_0x53497f=>strings[a56_0x3221('0xf')](_0x53497f))[a56_0x3221('0x8')](',\x20'):'-'}],'footer':{'text':(_0x4316e9[a56_0x3221('0x7')]?a56_0x3221('0xa'):'')+_0x4316e9['id']}}})[a56_0x3221('0x5')](()=>{});};}};