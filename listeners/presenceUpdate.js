const a167_0x3136=['streamerRoleId','default','guild','STREAMING','exports','activities','every','LISTENER_MODE','fetch','@bastion/tesseract','roles','compile','size','Listener','remove','catch','findById','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','../models/Guild','presenceUpdate','member','exec','apply','cache','type','some','test'];(function(_0x4f22d3,_0x3136df){const _0x4ec4fb=function(_0x373141){while(--_0x373141){_0x4f22d3['push'](_0x4f22d3['shift']());}};const _0x3cfd02=function(){const _0x9376e9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1d7a15,_0xf5fce3,_0xbe5a77,_0x43a562){_0x43a562=_0x43a562||{};let _0xceba4a=_0xf5fce3+'='+_0xbe5a77;let _0x3006fc=0x0;for(let _0x4371f8=0x0,_0x2a2067=_0x1d7a15['length'];_0x4371f8<_0x2a2067;_0x4371f8++){const _0xd04e50=_0x1d7a15[_0x4371f8];_0xceba4a+=';\x20'+_0xd04e50;const _0x3e5e4c=_0x1d7a15[_0xd04e50];_0x1d7a15['push'](_0x3e5e4c);_0x2a2067=_0x1d7a15['length'];if(_0x3e5e4c!==!![]){_0xceba4a+='='+_0x3e5e4c;}}_0x43a562['cookie']=_0xceba4a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x40a213,_0x24e663){_0x40a213=_0x40a213||function(_0xd849ae){return _0xd849ae;};const _0x1ebdd8=_0x40a213(new RegExp('(?:^|;\x20)'+_0x24e663['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x58e1b7=function(_0x539c30,_0x5df5cc){_0x539c30(++_0x5df5cc);};_0x58e1b7(_0x4ec4fb,_0x3136df);return _0x1ebdd8?decodeURIComponent(_0x1ebdd8[0x1]):undefined;}};const _0x1c0c78=function(){const _0x9b239a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x9b239a['test'](_0x9376e9['removeCookie']['toString']());};_0x9376e9['updateCookie']=_0x1c0c78;let _0x1600f2='';const _0x570ccc=_0x9376e9['updateCookie']();if(!_0x570ccc){_0x9376e9['setCookie'](['*'],'counter',0x1);}else if(_0x570ccc){_0x1600f2=_0x9376e9['getCookie'](null,'counter');}else{_0x9376e9['removeCookie']();}};_0x3cfd02();}(a167_0x3136,0x78));const a167_0x4ec4=function(_0x4f22d3,_0x3136df){_0x4f22d3=_0x4f22d3-0x0;let _0x4ec4fb=a167_0x3136[_0x4f22d3];return _0x4ec4fb;};const a167_0x9376e9=function(){let _0x54ed47=!![];return function(_0x40a881,_0x496a4b){const _0x408a28=_0x54ed47?function(){if(_0x496a4b){const _0x14f569=_0x496a4b[a167_0x4ec4('0x14')](_0x40a881,arguments);_0x496a4b=null;return _0x14f569;}}:function(){};_0x54ed47=![];return _0x408a28;};}();const a167_0x373141=a167_0x9376e9(this,function(){const _0x5aa21d=function(){const _0x141f68=_0x5aa21d['constructor'](a167_0x4ec4('0xe'))()[a167_0x4ec4('0x7')](a167_0x4ec4('0xd'));return!_0x141f68[a167_0x4ec4('0x18')](a167_0x373141);};return _0x5aa21d();});a167_0x373141();'use strict';const tesseract_1=require(a167_0x4ec4('0x5'));const Guild_1=require(a167_0x4ec4('0x10'));module[a167_0x4ec4('0x0')]=class PresenceListener extends tesseract_1[a167_0x4ec4('0x9')]{constructor(){super(a167_0x4ec4('0x11'),{'mode':tesseract_1[a167_0x4ec4('0xf')][a167_0x4ec4('0x3')]['ON']});this[a167_0x4ec4('0x13')]=async(_0x3900d0,_0x44a38f)=>{if(!_0x44a38f)return;if(!_0x44a38f[a167_0x4ec4('0x1b')])return;let _0x538a20;if((!_0x3900d0||_0x3900d0['activities'][a167_0x4ec4('0x2')](_0x18bb3c=>_0x18bb3c['type']!=='STREAMING'))&&_0x44a38f[a167_0x4ec4('0x1')][a167_0x4ec4('0x17')](_0x3c254a=>_0x3c254a[a167_0x4ec4('0x16')]===a167_0x4ec4('0x1c'))){_0x538a20=!![];}else if(_0x3900d0&&_0x3900d0[a167_0x4ec4('0x1')][a167_0x4ec4('0x17')](_0x48955c=>_0x48955c[a167_0x4ec4('0x16')]===a167_0x4ec4('0x1c'))&&_0x44a38f[a167_0x4ec4('0x1')]['every'](_0x138034=>_0x138034[a167_0x4ec4('0x16')]!==a167_0x4ec4('0x1c'))){_0x538a20=![];}else return;if(_0x44a38f[a167_0x4ec4('0x12')]['partial']){await _0x44a38f['member'][a167_0x4ec4('0x4')]();}if(_0x44a38f[a167_0x4ec4('0x12')][a167_0x4ec4('0x6')][a167_0x4ec4('0x15')][a167_0x4ec4('0x8')]<=0x2)return;const _0xa0fd3d=await Guild_1[a167_0x4ec4('0x1a')][a167_0x4ec4('0xc')](_0x44a38f[a167_0x4ec4('0x1b')]['id']);if(!_0xa0fd3d['streamerRoleId'])return;if(!_0x44a38f['guild'][a167_0x4ec4('0x6')][a167_0x4ec4('0x15')]['has'](_0xa0fd3d[a167_0x4ec4('0x19')]))return;if(_0x538a20){_0x44a38f[a167_0x4ec4('0x12')][a167_0x4ec4('0x6')]['add'](_0xa0fd3d['streamerRoleId'])[a167_0x4ec4('0xb')](()=>{});}else{_0x44a38f[a167_0x4ec4('0x12')][a167_0x4ec4('0x6')][a167_0x4ec4('0xa')](_0xa0fd3d[a167_0x4ec4('0x19')])[a167_0x4ec4('0xb')](()=>{});}};}};