const a180_0x1293=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','TextChannel','constructor','compile','default','test','__esModule','model','mongoose','Schema','defineProperty','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Giveaway','apply'];(function(_0x2b344b,_0x1293f5){const _0x4f9b55=function(_0x35510d){while(--_0x35510d){_0x2b344b['push'](_0x2b344b['shift']());}};const _0x3d68b8=function(){const _0x11c380={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1844a1,_0x37d61f,_0x18f04e,_0x3b83cb){_0x3b83cb=_0x3b83cb||{};let _0x2bd12e=_0x37d61f+'='+_0x18f04e;let _0x1f8f79=0x0;for(let _0x1359c8=0x0,_0x46d210=_0x1844a1['length'];_0x1359c8<_0x46d210;_0x1359c8++){const _0x2359e6=_0x1844a1[_0x1359c8];_0x2bd12e+=';\x20'+_0x2359e6;const _0x4b2edb=_0x1844a1[_0x2359e6];_0x1844a1['push'](_0x4b2edb);_0x46d210=_0x1844a1['length'];if(_0x4b2edb!==!![]){_0x2bd12e+='='+_0x4b2edb;}}_0x3b83cb['cookie']=_0x2bd12e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1ac7ce,_0x29b4e5){_0x1ac7ce=_0x1ac7ce||function(_0x31d868){return _0x31d868;};const _0x2b7622=_0x1ac7ce(new RegExp('(?:^|;\x20)'+_0x29b4e5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x42bf91=function(_0x2938a5,_0xf5586b){_0x2938a5(++_0xf5586b);};_0x42bf91(_0x4f9b55,_0x1293f5);return _0x2b7622?decodeURIComponent(_0x2b7622[0x1]):undefined;}};const _0x57f3d9=function(){const _0x5a819a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5a819a['test'](_0x11c380['removeCookie']['toString']());};_0x11c380['updateCookie']=_0x57f3d9;let _0x295fa3='';const _0xed20ed=_0x11c380['updateCookie']();if(!_0xed20ed){_0x11c380['setCookie'](['*'],'counter',0x1);}else if(_0xed20ed){_0x295fa3=_0x11c380['getCookie'](null,'counter');}else{_0x11c380['removeCookie']();}};_0x3d68b8();}(a180_0x1293,0x119));const a180_0x4f9b=function(_0x2b344b,_0x1293f5){_0x2b344b=_0x2b344b-0x0;let _0x4f9b55=a180_0x1293[_0x2b344b];return _0x4f9b55;};const a180_0x11c380=function(){let _0x42bf91=!![];return function(_0x31d868,_0x2938a5){const _0xf5586b=_0x42bf91?function(){if(_0x2938a5){const _0x5a819a=_0x2938a5[a180_0x4f9b('0xc')](_0x31d868,arguments);_0x2938a5=null;return _0x5a819a;}}:function(){};_0x42bf91=![];return _0xf5586b;};}();const a180_0x35510d=a180_0x11c380(this,function(){const _0x34be63=function(){const _0x139c4f=_0x34be63[a180_0x4f9b('0x1')](a180_0x4f9b('0xd'))()[a180_0x4f9b('0x2')](a180_0x4f9b('0xa'));return!_0x139c4f[a180_0x4f9b('0x4')](a180_0x35510d);};return _0x34be63();});a180_0x35510d();'use strict';Object[a180_0x4f9b('0x9')](exports,a180_0x4f9b('0x5'),{'value':!![]});const mongoose=require(a180_0x4f9b('0x7'));const giveawaySchema=new mongoose[(a180_0x4f9b('0x8'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a180_0x4f9b('0x0')},'guild':{'type':String,'required':!![],'ref':'Guild'},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports[a180_0x4f9b('0x3')]=mongoose[a180_0x4f9b('0x6')](a180_0x4f9b('0xb'),giveawaySchema);