const a155_0x3410=['parse','filter','Bot','catch','get','send','default','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Listener','../utils/variables','handleGreetings','channelId','apply','deletable','cache','Human','getDocument','has','../assets/greetings.json','constructor','Member\x20ID','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','fetch','map','length','generateEmbed','forBots','createdAt','LISTENER_MODE','guild','@bastion/tesseract','compile','Member\x20Type','forUsers','tag','delete','guildMemberAdd','Auto\x20added\x20via\x20Auto\x20Roles','exports','greeting','bot','partial','createLog','then','timeout','_id','toUTCString','add','handleAutoRoles','autoAssignable','test','user'];(function(_0x2332b6,_0x3410e8){const _0x43f148=function(_0x1361c7){while(--_0x1361c7){_0x2332b6['push'](_0x2332b6['shift']());}};const _0x3d3697=function(){const _0x1f7293={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3a04b2,_0x3fda6d,_0x465a4d,_0xe98293){_0xe98293=_0xe98293||{};let _0x1d1fa5=_0x3fda6d+'='+_0x465a4d;let _0x481f7b=0x0;for(let _0x57d46d=0x0,_0x2aedad=_0x3a04b2['length'];_0x57d46d<_0x2aedad;_0x57d46d++){const _0x142913=_0x3a04b2[_0x57d46d];_0x1d1fa5+=';\x20'+_0x142913;const _0x31b5d4=_0x3a04b2[_0x142913];_0x3a04b2['push'](_0x31b5d4);_0x2aedad=_0x3a04b2['length'];if(_0x31b5d4!==!![]){_0x1d1fa5+='='+_0x31b5d4;}}_0xe98293['cookie']=_0x1d1fa5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e0694,_0x1b0f8a){_0x1e0694=_0x1e0694||function(_0x27a34b){return _0x27a34b;};const _0x586e28=_0x1e0694(new RegExp('(?:^|;\x20)'+_0x1b0f8a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x83ca71=function(_0x325b6e,_0x558b4e){_0x325b6e(++_0x558b4e);};_0x83ca71(_0x43f148,_0x3410e8);return _0x586e28?decodeURIComponent(_0x586e28[0x1]):undefined;}};const _0x18348a=function(){const _0x1c9cb4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c9cb4['test'](_0x1f7293['removeCookie']['toString']());};_0x1f7293['updateCookie']=_0x18348a;let _0x3644d7='';const _0x28bcf2=_0x1f7293['updateCookie']();if(!_0x28bcf2){_0x1f7293['setCookie'](['*'],'counter',0x1);}else if(_0x28bcf2){_0x3644d7=_0x1f7293['getCookie'](null,'counter');}else{_0x1f7293['removeCookie']();}};_0x3d3697();}(a155_0x3410,0xf7));const a155_0x43f1=function(_0x2332b6,_0x3410e8){_0x2332b6=_0x2332b6-0x0;let _0x43f148=a155_0x3410[_0x2332b6];return _0x43f148;};const a155_0x1f7293=function(){let _0x1d20ad=!![];return function(_0x2ecfb6,_0x160f4c){const _0x14f96c=_0x1d20ad?function(){if(_0x160f4c){const _0x3c5f3d=_0x160f4c[a155_0x43f1('0x19')](_0x2ecfb6,arguments);_0x160f4c=null;return _0x3c5f3d;}}:function(){};_0x1d20ad=![];return _0x14f96c;};}();const a155_0x1361c7=a155_0x1f7293(this,function(){const _0x4df0a5=function(){const _0x1fa38b=_0x4df0a5[a155_0x43f1('0x20')](a155_0x43f1('0x14'))()[a155_0x43f1('0x2c')](a155_0x43f1('0x22'));return!_0x1fa38b[a155_0x43f1('0xb')](a155_0x1361c7);};return _0x4df0a5();});a155_0x1361c7();'use strict';const tesseract_1=require(a155_0x43f1('0x2b'));const Role_1=require('../models/Role');const embeds=require('../utils/embeds');const variables=require(a155_0x43f1('0x16'));const greetings=require(a155_0x43f1('0x1f'));module[a155_0x43f1('0x33')]=class GuildMemberAddListener extends tesseract_1[a155_0x43f1('0x15')]{constructor(){super(a155_0x43f1('0x31'),{'mode':tesseract_1['Constants'][a155_0x43f1('0x29')]['ON']});this[a155_0x43f1('0x9')]=async(_0xeb263a,_0x202478)=>{const _0x3b8e19=await Role_1[a155_0x43f1('0x13')]['find']({'guild':_0x202478['id'],'autoAssignable':{'$exists':!![]}});const _0x33d58a=_0x3b8e19[a155_0x43f1('0xe')](_0x309175=>_0x309175[a155_0x43f1('0xa')]&&_0x309175[a155_0x43f1('0xa')]['forBots'])[a155_0x43f1('0x24')](_0x5f2074=>_0x5f2074[a155_0x43f1('0x6')]);const _0x1c379b=_0x3b8e19[a155_0x43f1('0xe')](_0x41a26a=>_0x41a26a[a155_0x43f1('0xa')]&&_0x41a26a[a155_0x43f1('0xa')][a155_0x43f1('0x2e')])[a155_0x43f1('0x24')](_0x56691e=>_0x56691e[a155_0x43f1('0x6')]);const _0x3cc900=_0x3b8e19[a155_0x43f1('0xe')](_0x226008=>_0x226008['autoAssignable']&&(Number(_0x226008['autoAssignable'][a155_0x43f1('0x27')])^Number(_0x226008['autoAssignable'][a155_0x43f1('0x2e')]))===0x0)[a155_0x43f1('0x24')](_0x53210f=>_0x53210f[a155_0x43f1('0x6')]);_0xeb263a['roles'][a155_0x43f1('0x8')](_0x3cc900['concat'](_0xeb263a[a155_0x43f1('0xc')][a155_0x43f1('0x1')]?_0x33d58a:_0x1c379b),a155_0x43f1('0x32'));};this[a155_0x43f1('0x17')]=(_0x2d8324,_0x242a88)=>{if(!_0x242a88['greeting']||!_0x242a88[a155_0x43f1('0x0')][a155_0x43f1('0x18')])return;if(!_0x2d8324['guild']['channels'][a155_0x43f1('0x1b')][a155_0x43f1('0x1e')](_0x242a88[a155_0x43f1('0x0')][a155_0x43f1('0x18')]))return;const _0x564c98=_0x2d8324[a155_0x43f1('0x2a')]['channels'][a155_0x43f1('0x1b')][a155_0x43f1('0x11')](_0x242a88['greeting'][a155_0x43f1('0x18')]);const _0x47d3ee=embeds[a155_0x43f1('0x26')](_0x242a88['greeting']['message']?_0x242a88['greeting']['message']:greetings[Math['floor'](Math['random']()*greetings[a155_0x43f1('0x25')])]);_0x564c98[a155_0x43f1('0x12')]({'embed':{...JSON[a155_0x43f1('0xd')](variables['replaceMemberVariables'](JSON['stringify'](_0x47d3ee),_0x2d8324)),'footer':{'text':'Greetings!'}}})[a155_0x43f1('0x4')](_0x4b03cc=>{if(_0x242a88['greeting'][a155_0x43f1('0x5')]&&_0x4b03cc[a155_0x43f1('0x1a')]){_0x4b03cc[a155_0x43f1('0x30')]({'timeout':_0x242a88[a155_0x43f1('0x0')]['timeout']*0xea60})['catch'](()=>{});}})[a155_0x43f1('0x10')](()=>{});};this['exec']=async _0x3e57fb=>{if(_0x3e57fb[a155_0x43f1('0x2')]){await _0x3e57fb[a155_0x43f1('0x23')]();}const _0x2bd495=_0x3e57fb[a155_0x43f1('0x2a')];const _0x2eea8c=await _0x2bd495[a155_0x43f1('0x1d')]();this['handleGreetings'](_0x3e57fb,_0x2eea8c);this[a155_0x43f1('0x9')](_0x3e57fb,_0x2bd495);_0x2bd495[a155_0x43f1('0x3')]({'event':a155_0x43f1('0x31'),'fields':[{'name':'Member','value':_0x3e57fb[a155_0x43f1('0xc')][a155_0x43f1('0x2f')],'inline':!![]},{'name':a155_0x43f1('0x21'),'value':_0x3e57fb['id'],'inline':!![]},{'name':a155_0x43f1('0x2d'),'value':_0x3e57fb['user'][a155_0x43f1('0x1')]?a155_0x43f1('0xf'):a155_0x43f1('0x1c'),'inline':!![]},{'name':'Joined\x20Discord','value':_0x3e57fb[a155_0x43f1('0xc')][a155_0x43f1('0x28')][a155_0x43f1('0x7')](),'inline':!![]}],'timestamp':_0x3e57fb['joinedTimestamp']});};}};