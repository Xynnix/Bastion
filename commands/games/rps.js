const a46_0x3742=['length','ROCK','choices','@bastion/tesseract','send','Constants','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','DiscordError','You\x20win,\x20human.','Rock\x20Paper\x20Scrissor','I\x20win!\x20Sorry,\x20human.\x20:yum:','return\x20/\x22\x20+\x20this\x20+\x20\x22/','name','SCISSOR','PAPER','../../utils/errors','rockPaperScissor','compile','includes','exec','exports','apply','channel','test','Damn!\x20It\x27s\x20a\x20draw,\x20mate.','INVALID_COMMAND_SYNTAX','guild','rps','COLORS'];(function(_0x55aca2,_0x374271){const _0x598404=function(_0x4c82db){while(--_0x4c82db){_0x55aca2['push'](_0x55aca2['shift']());}};const _0x2e4474=function(){const _0x297b4b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xa8038b,_0x10a6a3,_0x186967,_0xb2327c){_0xb2327c=_0xb2327c||{};let _0x4456f0=_0x10a6a3+'='+_0x186967;let _0x117bc0=0x0;for(let _0x23d6cb=0x0,_0x36043b=_0xa8038b['length'];_0x23d6cb<_0x36043b;_0x23d6cb++){const _0x20f3db=_0xa8038b[_0x23d6cb];_0x4456f0+=';\x20'+_0x20f3db;const _0x5d637b=_0xa8038b[_0x20f3db];_0xa8038b['push'](_0x5d637b);_0x36043b=_0xa8038b['length'];if(_0x5d637b!==!![]){_0x4456f0+='='+_0x5d637b;}}_0xb2327c['cookie']=_0x4456f0;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2c7aa2,_0x351f09){_0x2c7aa2=_0x2c7aa2||function(_0x53597e){return _0x53597e;};const _0x563afd=_0x2c7aa2(new RegExp('(?:^|;\x20)'+_0x351f09['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1d5776=function(_0x578dc2,_0x409b63){_0x578dc2(++_0x409b63);};_0x1d5776(_0x598404,_0x374271);return _0x563afd?decodeURIComponent(_0x563afd[0x1]):undefined;}};const _0x51046d=function(){const _0x12cca7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x12cca7['test'](_0x297b4b['removeCookie']['toString']());};_0x297b4b['updateCookie']=_0x51046d;let _0x3f4515='';const _0x53288b=_0x297b4b['updateCookie']();if(!_0x53288b){_0x297b4b['setCookie'](['*'],'counter',0x1);}else if(_0x53288b){_0x3f4515=_0x297b4b['getCookie'](null,'counter');}else{_0x297b4b['removeCookie']();}};_0x2e4474();}(a46_0x3742,0x1cc));const a46_0x5984=function(_0x55aca2,_0x374271){_0x55aca2=_0x55aca2-0x0;let _0x598404=a46_0x3742[_0x55aca2];return _0x598404;};const a46_0x297b4b=function(){let _0x98702e=!![];return function(_0x4b8818,_0x190737){const _0x2182d8=_0x98702e?function(){if(_0x190737){const _0x2b6232=_0x190737[a46_0x5984('0xc')](_0x4b8818,arguments);_0x190737=null;return _0x2b6232;}}:function(){};_0x98702e=![];return _0x2182d8;};}();const a46_0x4c82db=a46_0x297b4b(this,function(){const _0x21d79c=function(){const _0x51b08b=_0x21d79c['constructor'](a46_0x5984('0x2'))()[a46_0x5984('0x8')](a46_0x5984('0x1b'));return!_0x51b08b[a46_0x5984('0xe')](a46_0x4c82db);};return _0x21d79c();});a46_0x4c82db();'use strict';const tesseract_1=require(a46_0x5984('0x17'));const errors=require(a46_0x5984('0x6'));module[a46_0x5984('0xb')]=class RockPaperScissorCommand extends tesseract_1[a46_0x5984('0x1a')]{constructor(){super(a46_0x5984('0x12'),{'description':'It\x20allows\x20you\x20to\x20play\x20Rock\x20Paper\x20Scissor\x20with\x20Bastion.','triggers':[a46_0x5984('0x7')],'arguments':{},'scope':a46_0x5984('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['rps\x20CHOICE']});this[a46_0x5984('0xa')]=async(_0x5a8383,_0xc0babf)=>{const _0x35b84f=_0xc0babf['_']['join']('')['toUpperCase']();if(!this[a46_0x5984('0x16')][a46_0x5984('0x9')](_0x35b84f))throw new errors[(a46_0x5984('0x1c'))](errors['BASTION_ERROR_TYPE'][a46_0x5984('0x10')],this[a46_0x5984('0x3')]);const _0x20aeb4=this[a46_0x5984('0x16')][Math['floor'](Math['random']()*this['choices'][a46_0x5984('0x14')])];const _0x4a7802=_0x35b84f===_0x20aeb4?a46_0x5984('0xf'):_0x35b84f===a46_0x5984('0x15')&&_0x20aeb4==='SCISSOR'?a46_0x5984('0x1d'):_0x35b84f==='PAPER'&&_0x20aeb4===a46_0x5984('0x15')?a46_0x5984('0x1d'):_0x35b84f==='SCISSOR'&&_0x20aeb4==='PAPER'?'You\x20win,\x20human.':a46_0x5984('0x1');await _0x5a8383[a46_0x5984('0xd')][a46_0x5984('0x18')]({'embed':{'color':tesseract_1[a46_0x5984('0x19')][a46_0x5984('0x13')]['IRIS'],'title':a46_0x5984('0x0'),'description':'I\x20chose\x20**'+_0x20aeb4+'**,\x20You\x20chose\x20**'+_0x35b84f+'**.\x20'+_0x4a7802}});};this[a46_0x5984('0x16')]=[a46_0x5984('0x15'),a46_0x5984('0x5'),a46_0x5984('0x4')];}};