const a78_0x2a14=['../../utils/errors','ownerID','../../utils/numbers','name','apply','NewsChannel','document','@bastion/tesseract','default','guild','cache','language','fetch','Moderator\x20ID','find','roles','reason','Command','../../models/Case','moderationLogChannelId','has','get','It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','MANAGE_GUILD','case','locale','discord.js','DiscordError','findOne','test','edit','INVALID_COMMAND_SYNTAX','member','messages','clamp','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','MAX_SAFE_INTEGER','Reason','exec','permissions','exports','value','fields','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BASTION_ERROR_TYPE','text','getString','caseNotFound','client','errors','channels','number'];(function(_0x12b1cc,_0x2a1485){const _0x12e07e=function(_0x4465b0){while(--_0x4465b0){_0x12b1cc['push'](_0x12b1cc['shift']());}};const _0x5cbfec=function(){const _0x489c71={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x11caca,_0x513e4b,_0x3c1cea,_0x3f221e){_0x3f221e=_0x3f221e||{};let _0x32aa97=_0x513e4b+'='+_0x3c1cea;let _0x19f3f2=0x0;for(let _0x375cb7=0x0,_0x11199a=_0x11caca['length'];_0x375cb7<_0x11199a;_0x375cb7++){const _0x42db02=_0x11caca[_0x375cb7];_0x32aa97+=';\x20'+_0x42db02;const _0x11c315=_0x11caca[_0x42db02];_0x11caca['push'](_0x11c315);_0x11199a=_0x11caca['length'];if(_0x11c315!==!![]){_0x32aa97+='='+_0x11c315;}}_0x3f221e['cookie']=_0x32aa97;},'removeCookie':function(){return'dev';},'getCookie':function(_0x345e31,_0x21e3d0){_0x345e31=_0x345e31||function(_0x5baf13){return _0x5baf13;};const _0x1c3ee8=_0x345e31(new RegExp('(?:^|;\x20)'+_0x21e3d0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x20f37b=function(_0x34b2c5,_0x3d2a68){_0x34b2c5(++_0x3d2a68);};_0x20f37b(_0x12e07e,_0x2a1485);return _0x1c3ee8?decodeURIComponent(_0x1c3ee8[0x1]):undefined;}};const _0x4fe3be=function(){const _0x1ee996=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1ee996['test'](_0x489c71['removeCookie']['toString']());};_0x489c71['updateCookie']=_0x4fe3be;let _0x1455dc='';const _0x4a49e6=_0x489c71['updateCookie']();if(!_0x4a49e6){_0x489c71['setCookie'](['*'],'counter',0x1);}else if(_0x4a49e6){_0x1455dc=_0x489c71['getCookie'](null,'counter');}else{_0x489c71['removeCookie']();}};_0x5cbfec();}(a78_0x2a14,0xb2));const a78_0x12e0=function(_0x12b1cc,_0x2a1485){_0x12b1cc=_0x12b1cc-0x0;let _0x12e07e=a78_0x2a14[_0x12b1cc];return _0x12e07e;};const a78_0x489c71=function(){let _0x3e756e=!![];return function(_0x435e26,_0x22b4b6){const _0x173cb5=_0x3e756e?function(){if(_0x22b4b6){const _0x2341c6=_0x22b4b6[a78_0x12e0('0x22')](_0x435e26,arguments);_0x22b4b6=null;return _0x2341c6;}}:function(){};_0x3e756e=![];return _0x173cb5;};}();const a78_0x4465b0=a78_0x489c71(this,function(){const _0x54065d=function(){const _0x940918=_0x54065d['constructor'](a78_0x12e0('0x15'))()['compile'](a78_0x12e0('0xd'));return!_0x940918[a78_0x12e0('0x7')](a78_0x4465b0);};return _0x54065d();});a78_0x4465b0();'use strict';const tesseract_1=require(a78_0x12e0('0x25'));const discord_js_1=require(a78_0x12e0('0x4'));const Case_1=require(a78_0x12e0('0x30'));const numbers=require(a78_0x12e0('0x20'));const errors=require(a78_0x12e0('0x1e'));module[a78_0x12e0('0x12')]=class ReasonCommand extends tesseract_1[a78_0x12e0('0x2f')]{constructor(){super(a78_0x12e0('0x2e'),{'description':a78_0x12e0('0x0'),'triggers':[],'arguments':{'alias':{'case':'n'},'number':[a78_0x12e0('0x2')],'coerce':{'case':_0x550597=>Math['floor'](numbers[a78_0x12e0('0xc')](_0x550597,0x1,Number[a78_0x12e0('0xe')]))}},'scope':a78_0x12e0('0x27'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['reason\x20--case\x20NUMBER\x20--\x20REASON']});this[a78_0x12e0('0x10')]=async(_0x5e874c,_0x69770d)=>{if(_0x5e874c['author']['id']!==_0x5e874c[a78_0x12e0('0x27')][a78_0x12e0('0x1f')]||_0x5e874c[a78_0x12e0('0xa')][a78_0x12e0('0x2d')][a78_0x12e0('0x28')]['size']<0x2)return;if(!_0x69770d[a78_0x12e0('0x1d')]||!_0x69770d['_']['length'])throw new errors[(a78_0x12e0('0x5'))](errors[a78_0x12e0('0x16')][a78_0x12e0('0x9')],this[a78_0x12e0('0x21')]);const _0x92fb4e=await Case_1[a78_0x12e0('0x26')][a78_0x12e0('0x6')]({'guild':_0x5e874c[a78_0x12e0('0x27')]['id'],'number':_0x69770d[a78_0x12e0('0x1d')]});if(!_0x92fb4e)throw new Error(this[a78_0x12e0('0x1a')][a78_0x12e0('0x3')][a78_0x12e0('0x18')](_0x5e874c['guild']['document'][a78_0x12e0('0x29')],a78_0x12e0('0x1b'),a78_0x12e0('0x19')));const _0x22aaae=_0x5e874c[a78_0x12e0('0x27')][a78_0x12e0('0x1c')][a78_0x12e0('0x28')]['filter'](_0x5cb772=>_0x5cb772['type']===a78_0x12e0('0x17')||_0x5cb772['type']==='news');if(_0x5e874c[a78_0x12e0('0x27')][a78_0x12e0('0x24')]['moderationLogChannelId']&&_0x22aaae[a78_0x12e0('0x32')](_0x5e874c[a78_0x12e0('0x27')]['document'][a78_0x12e0('0x31')])){const _0x5c4829=_0x22aaae[a78_0x12e0('0x33')](_0x5e874c[a78_0x12e0('0x27')]['document'][a78_0x12e0('0x31')]);if(_0x5c4829 instanceof discord_js_1[a78_0x12e0('0x23')]||_0x5c4829 instanceof discord_js_1['TextChannel']){const _0x20a312=await _0x5c4829[a78_0x12e0('0xb')][a78_0x12e0('0x2a')](_0x92fb4e['messageId']);const _0x5c89ce=_0x20a312['embeds'][0x0];if(!_0x5e874c['member'][a78_0x12e0('0x11')][a78_0x12e0('0x32')](a78_0x12e0('0x1'))||_0x5c89ce[a78_0x12e0('0x14')][a78_0x12e0('0x2c')](_0x46d29a=>_0x46d29a[a78_0x12e0('0x21')]===a78_0x12e0('0x2b'))['value']!==_0x5e874c['author']['id'])return;_0x5c89ce[a78_0x12e0('0x14')][a78_0x12e0('0x2c')](_0x2702cd=>_0x2702cd[a78_0x12e0('0x21')]===a78_0x12e0('0xf'))[a78_0x12e0('0x13')]=_0x69770d['_']['join']('\x20');await _0x20a312[a78_0x12e0('0x8')]({'embed':_0x5c89ce});}}};}};