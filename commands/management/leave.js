const a63_0x17b7=['apply','send','Constants','client','catch','bastion.server.invite','MANAGE_GUILD','*has\x20left\x20the\x20chat.*','getConstant','guild','../../utils/confirmation','return\x20/\x22\x20+\x20this\x20+\x20\x22/','@bastion/tesseract','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','compile','leave','channel','exports','**Are\x20you\x20sure\x20you\x20want\x20me\x20to\x20leave\x20the\x20server?**\x20I\x27ll\x20have\x20to\x20remove\x20all\x20the\x20data\x20I\x20have\x20on\x20this\x20server\x20and\x20all\x20the\x20configurations\x20that\x20you\x27ve\x20done\x20to\x20me.\x20I\x20won\x27t\x20recognize\x20you\x20the\x20next\x20time\x20you\x20invite\x20me\x20here.','COLORS',').\x0a\x0a*sad\x20robot\x20noises*','I\x20knew\x20it\x20in\x20my\x20heart\x20that\x20you\x20won\x27t\x20let\x20me\x20leave.\x20💙'];(function(_0x5e5357,_0x17b7cb){const _0x2a7fd2=function(_0x3de88e){while(--_0x3de88e){_0x5e5357['push'](_0x5e5357['shift']());}};const _0xa7e126=function(){const _0x3648cf={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1a9603,_0x1f728d,_0x2745cb,_0x48360c){_0x48360c=_0x48360c||{};let _0x3c100a=_0x1f728d+'='+_0x2745cb;let _0x7d9cb7=0x0;for(let _0x172e95=0x0,_0x5e2c67=_0x1a9603['length'];_0x172e95<_0x5e2c67;_0x172e95++){const _0x21998a=_0x1a9603[_0x172e95];_0x3c100a+=';\x20'+_0x21998a;const _0x54c343=_0x1a9603[_0x21998a];_0x1a9603['push'](_0x54c343);_0x5e2c67=_0x1a9603['length'];if(_0x54c343!==!![]){_0x3c100a+='='+_0x54c343;}}_0x48360c['cookie']=_0x3c100a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x457563,_0x303053){_0x457563=_0x457563||function(_0x85d8a3){return _0x85d8a3;};const _0x5a989f=_0x457563(new RegExp('(?:^|;\x20)'+_0x303053['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x589577=function(_0x7b9dd2,_0xf86ea5){_0x7b9dd2(++_0xf86ea5);};_0x589577(_0x2a7fd2,_0x17b7cb);return _0x5a989f?decodeURIComponent(_0x5a989f[0x1]):undefined;}};const _0x395e14=function(){const _0x7b89b9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7b89b9['test'](_0x3648cf['removeCookie']['toString']());};_0x3648cf['updateCookie']=_0x395e14;let _0x3b6a22='';const _0x571fd0=_0x3648cf['updateCookie']();if(!_0x571fd0){_0x3648cf['setCookie'](['*'],'counter',0x1);}else if(_0x571fd0){_0x3b6a22=_0x3648cf['getCookie'](null,'counter');}else{_0x3648cf['removeCookie']();}};_0xa7e126();}(a63_0x17b7,0x1f0));const a63_0x2a7f=function(_0x5e5357,_0x17b7cb){_0x5e5357=_0x5e5357-0x0;let _0x2a7fd2=a63_0x17b7[_0x5e5357];return _0x2a7fd2;};const a63_0x3648cf=function(){let _0x400c84=!![];return function(_0x1dfe94,_0x11e6a4){const _0x5804d2=_0x400c84?function(){if(_0x11e6a4){const _0x53fb7a=_0x11e6a4[a63_0x2a7f('0xa')](_0x1dfe94,arguments);_0x11e6a4=null;return _0x53fb7a;}}:function(){};_0x400c84=![];return _0x5804d2;};}();const a63_0x3de88e=a63_0x3648cf(this,function(){const _0x506187=function(){const _0x43648c=_0x506187['constructor'](a63_0x2a7f('0x15'))()[a63_0x2a7f('0x2')](a63_0x2a7f('0x0'));return!_0x43648c['test'](a63_0x3de88e);};return _0x506187();});a63_0x3de88e();'use strict';const tesseract_1=require(a63_0x2a7f('0x16'));const confirmation_1=require(a63_0x2a7f('0x14'));module[a63_0x2a7f('0x5')]=class LeaveCommand extends tesseract_1['Command']{constructor(){super(a63_0x2a7f('0x3'),{'description':'It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20leave\x20the\x20server\x20and\x20clear\x20all\x20data\x20it\x20has\x20on\x20server\x20and\x20its\x20members.','triggers':[],'arguments':{},'scope':a63_0x2a7f('0x13'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a63_0x2a7f('0x10')],'syntax':[]});this['exec']=async _0x2f566b=>{const _0xf228b1=await confirmation_1['default'](_0x2f566b,a63_0x2a7f('0x6'));await _0x2f566b[a63_0x2a7f('0x4')][a63_0x2a7f('0xb')]({'embed':{'color':_0xf228b1?tesseract_1[a63_0x2a7f('0xc')][a63_0x2a7f('0x7')]['RED']:tesseract_1[a63_0x2a7f('0xc')]['COLORS'][a63_0x2a7f('0x1')],'description':_0xf228b1?'I\x20will\x20miss\x20each\x20and\x20everyone\x20of\x20you\x20here.\x20May\x20we\x20meet\x20again.\x0aIf\x20you\x20think\x20I\x20can\x20improve\x20in\x20some\x20way,\x20please\x20[let\x20my\x20team\x20know]('+this[a63_0x2a7f('0xd')]['locale'][a63_0x2a7f('0x12')](a63_0x2a7f('0xf'))+a63_0x2a7f('0x8'):a63_0x2a7f('0x9')}})['catch'](()=>{});if(_0xf228b1){await _0x2f566b['channel'][a63_0x2a7f('0xb')](a63_0x2a7f('0x11'))[a63_0x2a7f('0xe')](()=>{});await _0x2f566b[a63_0x2a7f('0x13')][a63_0x2a7f('0x3')]();}};}};