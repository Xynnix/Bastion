const a8_0xb726=['tag','return\x20/\x22\x20+\x20this\x20+\x20\x22/','setAvatar','DiscordError','name','BASTION_ERROR_TYPE','exports','width','@bastion/tesseract','send','Command','apply','guild','channel','info','language','test','ArgumentTypes','exec','user','constructor','attachments','URL','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','client','image','compile','locale','height','first','Constants'];(function(_0x316bd7,_0xb7260a){const _0x137f91=function(_0x4357ce){while(--_0x4357ce){_0x316bd7['push'](_0x316bd7['shift']());}};const _0x59fe84=function(){const _0x250b72={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2a7a98,_0x6b5790,_0x3c6f94,_0x376ac8){_0x376ac8=_0x376ac8||{};let _0x34be47=_0x6b5790+'='+_0x3c6f94;let _0x4f629c=0x0;for(let _0x26a3b9=0x0,_0xb6082a=_0x2a7a98['length'];_0x26a3b9<_0xb6082a;_0x26a3b9++){const _0x425d33=_0x2a7a98[_0x26a3b9];_0x34be47+=';\x20'+_0x425d33;const _0x57eaae=_0x2a7a98[_0x425d33];_0x2a7a98['push'](_0x57eaae);_0xb6082a=_0x2a7a98['length'];if(_0x57eaae!==!![]){_0x34be47+='='+_0x57eaae;}}_0x376ac8['cookie']=_0x34be47;},'removeCookie':function(){return'dev';},'getCookie':function(_0x26d909,_0x3027d1){_0x26d909=_0x26d909||function(_0x55d00c){return _0x55d00c;};const _0xbe02a9=_0x26d909(new RegExp('(?:^|;\x20)'+_0x3027d1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x121300=function(_0x4583c1,_0x332cb2){_0x4583c1(++_0x332cb2);};_0x121300(_0x137f91,_0xb7260a);return _0xbe02a9?decodeURIComponent(_0xbe02a9[0x1]):undefined;}};const _0x40656f=function(){const _0x338a1b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x338a1b['test'](_0x250b72['removeCookie']['toString']());};_0x250b72['updateCookie']=_0x40656f;let _0x1991bf='';const _0x45ff0c=_0x250b72['updateCookie']();if(!_0x45ff0c){_0x250b72['setCookie'](['*'],'counter',0x1);}else if(_0x45ff0c){_0x1991bf=_0x250b72['getCookie'](null,'counter');}else{_0x250b72['removeCookie']();}};_0x59fe84();}(a8_0xb726,0x70));const a8_0x137f=function(_0x316bd7,_0xb7260a){_0x316bd7=_0x316bd7-0x0;let _0x137f91=a8_0xb726[_0x316bd7];return _0x137f91;};const a8_0x250b72=function(){let _0xdaecd=!![];return function(_0x1ed536,_0x5e0a5c){const _0x5cb325=_0xdaecd?function(){if(_0x5e0a5c){const _0x1d9caa=_0x5e0a5c[a8_0x137f('0x1b')](_0x1ed536,arguments);_0x5e0a5c=null;return _0x1d9caa;}}:function(){};_0xdaecd=![];return _0x5cb325;};}();const a8_0x4357ce=a8_0x250b72(this,function(){const _0x1c3cd2=function(){const _0x2860b7=_0x1c3cd2[a8_0x137f('0x4')](a8_0x137f('0x11'))()[a8_0x137f('0xb')](a8_0x137f('0x8'));return!_0x2860b7[a8_0x137f('0x0')](a8_0x4357ce);};return _0x1c3cd2();});a8_0x4357ce();'use strict';const tesseract_1=require(a8_0x137f('0x18'));const errors=require('../../utils/errors');module[a8_0x137f('0x16')]=class SetAvatar extends tesseract_1[a8_0x137f('0x1a')]{constructor(){super(a8_0x137f('0x12'),{'description':'It\x20allows\x20you\x20to\x20update\x20Bastion\x27s\x20avatar\x20directly\x20from\x20Discord.','triggers':[],'arguments':{'coerce':{'image':tesseract_1[a8_0x137f('0xf')][a8_0x137f('0x1')][a8_0x137f('0x6')]}},'scope':a8_0x137f('0x1c'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['setAvatar\x20--image\x20LINK']});this[a8_0x137f('0x2')]=async(_0x4edba8,_0x14fa0b)=>{const _0x59b994=_0x4edba8[a8_0x137f('0x5')][a8_0x137f('0xe')]();if(!_0x14fa0b[a8_0x137f('0xa')]||!(_0x59b994[a8_0x137f('0xd')]&&_0x59b994[a8_0x137f('0x17')]))throw new errors[(a8_0x137f('0x13'))](errors[a8_0x137f('0x15')]['INVALID_COMMAND_SYNTAX'],this[a8_0x137f('0x14')]);await this[a8_0x137f('0x9')][a8_0x137f('0x3')][a8_0x137f('0x12')](_0x14fa0b[a8_0x137f('0xa')]);await _0x4edba8[a8_0x137f('0x1d')][a8_0x137f('0x19')]({'embed':{'color':tesseract_1[a8_0x137f('0xf')]['COLORS']['PUPIL'],'description':this[a8_0x137f('0x9')][a8_0x137f('0xc')]['getString'](_0x4edba8['guild']['document'][a8_0x137f('0x1f')],a8_0x137f('0x1e'),'updateAvatar',_0x4edba8[a8_0x137f('0x7')][a8_0x137f('0x10')]),'image':{'url':this[a8_0x137f('0x9')]['user']['displayAvatarURL']({'dynamic':!![],'size':0x100})}}})['catch'](()=>{});};}};