const a82_0x1061=['highest','toBulletList','COLORS','canManage','filter','ORANGE','removeAll','locale','BASTION_ERROR_TYPE','unauthorized','INVALID_COMMAND_SYNTAX','add','exports','@bastion/tesseract','errors','document','user','getString','ownerID','resolveRoles','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Command','length','tag','memberRoleUpdate','remove','```diff\x0a','rolePosition','catch','exec','compile','author','resolver','member','../../utils/arrays','Constants','It\x20allows\x20you\x20to\x20update\x20roles\x20of\x20server\x20members.','updateRoles\x20--user\x20USER_ID\x20--remove-all','DiscordError','join','Reason','map','constructor','updateRoles\x20--user\x20USER_ID\x20--add\x20ROLE_ID','updateRoles\x20--user\x20USER_ID\x20--remove\x20ROLE_ID','language','name','client','info','comparePositionTo','set','guild','MANAGE_ROLES','roles'];(function(_0x551794,_0x10613f){const _0x5e6671=function(_0x7e77ff){while(--_0x7e77ff){_0x551794['push'](_0x551794['shift']());}};const _0x5e7914=function(){const _0x5d7603={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x34172c,_0xd77e8a,_0x5226f2,_0x49c273){_0x49c273=_0x49c273||{};let _0x26b085=_0xd77e8a+'='+_0x5226f2;let _0x322a8f=0x0;for(let _0x48d4f2=0x0,_0x14cbfb=_0x34172c['length'];_0x48d4f2<_0x14cbfb;_0x48d4f2++){const _0x40dac8=_0x34172c[_0x48d4f2];_0x26b085+=';\x20'+_0x40dac8;const _0x550dc5=_0x34172c[_0x40dac8];_0x34172c['push'](_0x550dc5);_0x14cbfb=_0x34172c['length'];if(_0x550dc5!==!![]){_0x26b085+='='+_0x550dc5;}}_0x49c273['cookie']=_0x26b085;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3b40e4,_0x544a3d){_0x3b40e4=_0x3b40e4||function(_0x3edb4e){return _0x3edb4e;};const _0x467755=_0x3b40e4(new RegExp('(?:^|;\x20)'+_0x544a3d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x19aa7e=function(_0x201527,_0x50efc5){_0x201527(++_0x50efc5);};_0x19aa7e(_0x5e6671,_0x10613f);return _0x467755?decodeURIComponent(_0x467755[0x1]):undefined;}};const _0x87e239=function(){const _0x5a49d3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5a49d3['test'](_0x5d7603['removeCookie']['toString']());};_0x5d7603['updateCookie']=_0x87e239;let _0x4bd07e='';const _0xfb0b19=_0x5d7603['updateCookie']();if(!_0xfb0b19){_0x5d7603['setCookie'](['*'],'counter',0x1);}else if(_0xfb0b19){_0x4bd07e=_0x5d7603['getCookie'](null,'counter');}else{_0x5d7603['removeCookie']();}};_0x5e7914();}(a82_0x1061,0x1c9));const a82_0x5e66=function(_0x551794,_0x10613f){_0x551794=_0x551794-0x0;let _0x5e6671=a82_0x1061[_0x551794];return _0x5e6671;};const a82_0x5d7603=function(){let _0x4f4891=!![];return function(_0xb79cba,_0x150daa){const _0x2c3059=_0x4f4891?function(){if(_0x150daa){const _0x3c8119=_0x150daa['apply'](_0xb79cba,arguments);_0x150daa=null;return _0x3c8119;}}:function(){};_0x4f4891=![];return _0x2c3059;};}();const a82_0x7e77ff=a82_0x5d7603(this,function(){const _0x3a7142=function(){const _0x564fcc=_0x3a7142[a82_0x5e66('0x11')](a82_0x5e66('0x31'))()[a82_0x5e66('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x564fcc['test'](a82_0x7e77ff);};return _0x3a7142();});a82_0x7e77ff();'use strict';const tesseract_1=require(a82_0x5e66('0x2a'));const arrays=require(a82_0x5e66('0x9'));const errors=require('../../utils/errors');module[a82_0x5e66('0x29')]=class UpdateRoles extends tesseract_1[a82_0x5e66('0x32')]{constructor(){super('updateRoles',{'description':a82_0x5e66('0xb'),'triggers':[],'arguments':{'alias':{'add':'a','remove':'r','user':'u'},'array':['add',a82_0x5e66('0x0')],'boolean':[a82_0x5e66('0x23')],'string':[a82_0x5e66('0x28'),a82_0x5e66('0x0'),'user']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a82_0x5e66('0x1b')],'syntax':[a82_0x5e66('0x12'),a82_0x5e66('0x13'),a82_0x5e66('0xc')]});this[a82_0x5e66('0x4')]=async(_0x6e7992,_0x3c7224)=>{const _0x353611=this[a82_0x5e66('0x16')]['resolver']['resolveGuildMember'](_0x6e7992[a82_0x5e66('0x1a')],_0x3c7224[a82_0x5e66('0x2d')]);let _0x3e7a8b=this[a82_0x5e66('0x16')][a82_0x5e66('0x7')][a82_0x5e66('0x30')](_0x6e7992[a82_0x5e66('0x1a')],_0x3c7224[a82_0x5e66('0x28')]);let _0x3ecbe7=this['client']['resolver'][a82_0x5e66('0x30')](_0x6e7992[a82_0x5e66('0x1a')],_0x3c7224['remove']);if(!_0x353611||!_0x3e7a8b[a82_0x5e66('0x33')]&&!_0x3ecbe7['length'])throw new errors[(a82_0x5e66('0xd'))](errors[a82_0x5e66('0x25')][a82_0x5e66('0x27')],this[a82_0x5e66('0x15')]);if(_0x6e7992[a82_0x5e66('0x6')]['id']!==_0x6e7992[a82_0x5e66('0x1a')][a82_0x5e66('0x2f')]&&_0x6e7992[a82_0x5e66('0x8')][a82_0x5e66('0x20')](_0x353611)){_0x3e7a8b=_0x3e7a8b['filter'](_0xf1c989=>_0x6e7992[a82_0x5e66('0x8')][a82_0x5e66('0x1c')]['highest'][a82_0x5e66('0x18')](_0xf1c989)>0x0);_0x3ecbe7=_0x3ecbe7[a82_0x5e66('0x21')](_0xcd0d16=>_0x6e7992[a82_0x5e66('0x8')][a82_0x5e66('0x1c')][a82_0x5e66('0x1d')][a82_0x5e66('0x18')](_0xcd0d16)>0x0);if(!_0x3e7a8b['length']&&!_0x3ecbe7[a82_0x5e66('0x33')]){return await _0x6e7992['channel']['send']({'embed':{'color':tesseract_1[a82_0x5e66('0xa')][a82_0x5e66('0x1f')]['RED'],'title':this[a82_0x5e66('0x16')][a82_0x5e66('0x24')][a82_0x5e66('0x2e')](_0x6e7992[a82_0x5e66('0x1a')][a82_0x5e66('0x2c')][a82_0x5e66('0x14')],a82_0x5e66('0x2b'),a82_0x5e66('0x26')),'description':this[a82_0x5e66('0x16')][a82_0x5e66('0x24')][a82_0x5e66('0x2e')](_0x6e7992[a82_0x5e66('0x1a')][a82_0x5e66('0x2c')][a82_0x5e66('0x14')],a82_0x5e66('0x2b'),a82_0x5e66('0x2'),_0x6e7992[a82_0x5e66('0x6')]['tag'],_0x353611['user'][a82_0x5e66('0x34')])}})[a82_0x5e66('0x3')](()=>{});}}const _0x1722ce=_0x3c7224['_'][a82_0x5e66('0xe')]('\x20')||'-';if(_0x3e7a8b[a82_0x5e66('0x33')])await _0x353611['roles'][a82_0x5e66('0x28')](_0x3e7a8b,_0x1722ce);if(_0x3c7224['removeAll'])await _0x353611[a82_0x5e66('0x1c')][a82_0x5e66('0x19')]([],_0x1722ce);else if(_0x3ecbe7[a82_0x5e66('0x33')])await _0x353611[a82_0x5e66('0x1c')][a82_0x5e66('0x0')](_0x3ecbe7,_0x1722ce);await _0x6e7992['channel']['send']({'embed':{'color':tesseract_1[a82_0x5e66('0xa')][a82_0x5e66('0x1f')][a82_0x5e66('0x22')],'description':this[a82_0x5e66('0x16')]['locale'][a82_0x5e66('0x2e')](_0x6e7992[a82_0x5e66('0x1a')][a82_0x5e66('0x2c')][a82_0x5e66('0x14')],a82_0x5e66('0x17'),a82_0x5e66('0x35'),_0x6e7992[a82_0x5e66('0x6')][a82_0x5e66('0x34')],_0x353611[a82_0x5e66('0x2d')][a82_0x5e66('0x34')]),'fields':[{'name':'Role\x20Changes','value':a82_0x5e66('0x1')+arrays['toBulletList'](_0x3e7a8b[a82_0x5e66('0x10')](_0x257640=>_0x257640['name']),'+')+arrays[a82_0x5e66('0x1e')](_0x3ecbe7[a82_0x5e66('0x10')](_0x829b0a=>_0x829b0a['name']),'-')+'```'},{'name':a82_0x5e66('0xf'),'value':_0x1722ce}],'footer':{'text':_0x353611['id']}}})[a82_0x5e66('0x3')](()=>{});};}};