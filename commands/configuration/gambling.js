const a18_0x42ad=['multiplier','@bastion/tesseract','locale','exec','It\x20allows\x20you\x20to\x20enable\x20(or\x20disable)\x20gambling\x20in\x20the\x20server.\x20When\x20enabled,\x20members\x20can\x20use\x20their\x20Bastion\x20Coins\x20to\x20gamble\x20in\x20games.','language','info','COLORS','send','../../utils/errors','DiscordError','GREEN','catch','../../utils/omnic','Command','tag','apply','fetchPremiumTier','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','gamblingEnable','PREMIUM_MEMBERSHIP_REQUIRED','isPublicBastion','premiumGamblingMultiplier','save','gambling\x20--multiplier\x201..13','RED','BASTION_ERROR_TYPE','number','../../utils/constants','document','enabled','guild','author','toString','user','constructor','client','channel','gambling'];(function(_0x122bbb,_0x42ad97){const _0x2ae79a=function(_0x34e79e){while(--_0x34e79e){_0x122bbb['push'](_0x122bbb['shift']());}};const _0xdffb3e=function(){const _0x206ee8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x533f15,_0x51f119,_0x33d49e,_0x516dea){_0x516dea=_0x516dea||{};let _0x194fb4=_0x51f119+'='+_0x33d49e;let _0x2a4187=0x0;for(let _0x83e1d1=0x0,_0x4acd6e=_0x533f15['length'];_0x83e1d1<_0x4acd6e;_0x83e1d1++){const _0x50173f=_0x533f15[_0x83e1d1];_0x194fb4+=';\x20'+_0x50173f;const _0x1f40e0=_0x533f15[_0x50173f];_0x533f15['push'](_0x1f40e0);_0x4acd6e=_0x533f15['length'];if(_0x1f40e0!==!![]){_0x194fb4+='='+_0x1f40e0;}}_0x516dea['cookie']=_0x194fb4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2e97dd,_0x7c421b){_0x2e97dd=_0x2e97dd||function(_0x57e339){return _0x57e339;};const _0x5e9c1d=_0x2e97dd(new RegExp('(?:^|;\x20)'+_0x7c421b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x17ac3c=function(_0x500317,_0x43a129){_0x500317(++_0x43a129);};_0x17ac3c(_0x2ae79a,_0x42ad97);return _0x5e9c1d?decodeURIComponent(_0x5e9c1d[0x1]):undefined;}};const _0x282d1e=function(){const _0x23e88f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x23e88f['test'](_0x206ee8['removeCookie']['toString']());};_0x206ee8['updateCookie']=_0x282d1e;let _0x42fafa='';const _0x14f24e=_0x206ee8['updateCookie']();if(!_0x14f24e){_0x206ee8['setCookie'](['*'],'counter',0x1);}else if(_0x14f24e){_0x42fafa=_0x206ee8['getCookie'](null,'counter');}else{_0x206ee8['removeCookie']();}};_0xdffb3e();}(a18_0x42ad,0xb0));const a18_0x2ae7=function(_0x122bbb,_0x42ad97){_0x122bbb=_0x122bbb-0x0;let _0x2ae79a=a18_0x42ad[_0x122bbb];return _0x2ae79a;};const a18_0x206ee8=function(){let _0x1eb191=!![];return function(_0x17010c,_0x30d2d0){const _0x3324e7=_0x1eb191?function(){if(_0x30d2d0){const _0x1019a9=_0x30d2d0[a18_0x2ae7('0x23')](_0x17010c,arguments);_0x30d2d0=null;return _0x1019a9;}}:function(){};_0x1eb191=![];return _0x3324e7;};}();const a18_0x34e79e=a18_0x206ee8(this,function(){const _0x23147d=function(){const _0x500673=_0x23147d[a18_0x2ae7('0xf')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a18_0x2ae7('0x25'));return!_0x500673['test'](a18_0x34e79e);};return _0x23147d();});a18_0x34e79e();'use strict';const tesseract_1=require(a18_0x2ae7('0x14'));const constants=require(a18_0x2ae7('0x8'));const errors=require(a18_0x2ae7('0x1c'));const omnic=require(a18_0x2ae7('0x20'));module['exports']=class GamblingCommand extends tesseract_1[a18_0x2ae7('0x21')]{constructor(){super(a18_0x2ae7('0x12'),{'description':a18_0x2ae7('0x17'),'triggers':[],'arguments':{'number':['multiplier']},'scope':a18_0x2ae7('0xb'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':['gambling',a18_0x2ae7('0x4')]});this[a18_0x2ae7('0x16')]=async(_0x56d020,_0x19553a)=>{if(_0x19553a['multiplier']&&constants[a18_0x2ae7('0x1')](this['client'][a18_0x2ae7('0xe')])){const _0x31617a=await omnic[a18_0x2ae7('0x24')](_0x56d020['guild'])['catch'](()=>{});if(!_0x31617a)throw new errors[(a18_0x2ae7('0x1d'))](errors[a18_0x2ae7('0x6')][a18_0x2ae7('0x0')],this[a18_0x2ae7('0x10')][a18_0x2ae7('0x15')]['getString'](_0x56d020[a18_0x2ae7('0xb')]['document']['language'],'errors',a18_0x2ae7('0x2')));}const _0x11e192=_0x56d020[a18_0x2ae7('0xb')];const _0x3a171f=_0x19553a['multiplier']?!![]:!(_0x11e192['document'][a18_0x2ae7('0x12')]&&_0x11e192[a18_0x2ae7('0x9')]['gambling'][a18_0x2ae7('0xa')]);_0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x12')]={'enabled':_0x3a171f,'multiplier':typeof _0x19553a[a18_0x2ae7('0x13')]===a18_0x2ae7('0x7')?_0x19553a['multiplier']:_0x3a171f?_0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x12')]&&_0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x12')][a18_0x2ae7('0x13')]:undefined};await _0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x3')]();await _0x56d020[a18_0x2ae7('0x11')][a18_0x2ae7('0x1b')]({'embed':{'color':_0x11e192[a18_0x2ae7('0x9')]['gambling'][a18_0x2ae7('0xa')]?tesseract_1['Constants'][a18_0x2ae7('0x1a')][a18_0x2ae7('0x1e')]:tesseract_1['Constants'][a18_0x2ae7('0x1a')][a18_0x2ae7('0x5')],'description':this[a18_0x2ae7('0x10')][a18_0x2ae7('0x15')]['getString'](_0x56d020['guild'][a18_0x2ae7('0x9')][a18_0x2ae7('0x18')],a18_0x2ae7('0x19'),_0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x12')][a18_0x2ae7('0xa')]?a18_0x2ae7('0x26'):'gamblingDisable',_0x56d020[a18_0x2ae7('0xc')][a18_0x2ae7('0x22')]),'fields':_0x11e192['document'][a18_0x2ae7('0x12')][a18_0x2ae7('0xa')]?[{'name':'Gambling\x20Reward\x20Multiplier','value':_0x11e192[a18_0x2ae7('0x9')][a18_0x2ae7('0x12')]['multiplier']?_0x11e192['document'][a18_0x2ae7('0x12')][a18_0x2ae7('0x13')][a18_0x2ae7('0xd')]():0x1[a18_0x2ae7('0xd')](),'inline':!![]}]:[]}})[a18_0x2ae7('0x1f')](()=>{});};}};