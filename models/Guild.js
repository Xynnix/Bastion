const a182_0x4544=['compile','Schema','mongoose','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','default','constructor','defineProperty'];(function(_0x1e6f56,_0x454419){const _0x9b313b=function(_0xdda4d4){while(--_0xdda4d4){_0x1e6f56['push'](_0x1e6f56['shift']());}};const _0x2d4cf3=function(){const _0x1f875a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bbaee,_0x440c37,_0x313ba4,_0x13282a){_0x13282a=_0x13282a||{};let _0x2b2bb1=_0x440c37+'='+_0x313ba4;let _0x5ac9f2=0x0;for(let _0x2b3ed4=0x0,_0x408724=_0x5bbaee['length'];_0x2b3ed4<_0x408724;_0x2b3ed4++){const _0x4db468=_0x5bbaee[_0x2b3ed4];_0x2b2bb1+=';\x20'+_0x4db468;const _0x49a374=_0x5bbaee[_0x4db468];_0x5bbaee['push'](_0x49a374);_0x408724=_0x5bbaee['length'];if(_0x49a374!==!![]){_0x2b2bb1+='='+_0x49a374;}}_0x13282a['cookie']=_0x2b2bb1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x42423a,_0x552cb0){_0x42423a=_0x42423a||function(_0x32176a){return _0x32176a;};const _0x109f50=_0x42423a(new RegExp('(?:^|;\x20)'+_0x552cb0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xf85843=function(_0x51dcd1,_0x3a034b){_0x51dcd1(++_0x3a034b);};_0xf85843(_0x9b313b,_0x454419);return _0x109f50?decodeURIComponent(_0x109f50[0x1]):undefined;}};const _0x18b988=function(){const _0x2a5287=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a5287['test'](_0x1f875a['removeCookie']['toString']());};_0x1f875a['updateCookie']=_0x18b988;let _0x4beb99='';const _0x2ba408=_0x1f875a['updateCookie']();if(!_0x2ba408){_0x1f875a['setCookie'](['*'],'counter',0x1);}else if(_0x2ba408){_0x4beb99=_0x1f875a['getCookie'](null,'counter');}else{_0x1f875a['removeCookie']();}};_0x2d4cf3();}(a182_0x4544,0xe3));const a182_0x9b31=function(_0x1e6f56,_0x454419){_0x1e6f56=_0x1e6f56-0x0;let _0x9b313b=a182_0x4544[_0x1e6f56];return _0x9b313b;};const a182_0x1f875a=function(){let _0x552cb0=!![];return function(_0x109f50,_0xf85843){const _0x32176a=_0x552cb0?function(){if(_0xf85843){const _0x51dcd1=_0xf85843['apply'](_0x109f50,arguments);_0xf85843=null;return _0x51dcd1;}}:function(){};_0x552cb0=![];return _0x32176a;};}();const a182_0xdda4d4=a182_0x1f875a(this,function(){const _0x3a034b=function(){const _0x2a5287=_0x3a034b[a182_0x9b31('0x3')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a182_0x9b31('0x5')](a182_0x9b31('0x1'));return!_0x2a5287[a182_0x9b31('0x0')](a182_0xdda4d4);};return _0x3a034b();});a182_0xdda4d4();'use strict';Object[a182_0x9b31('0x4')](exports,'__esModule',{'value':!![]});const mongoose=require(a182_0x9b31('0x7'));exports[a182_0x9b31('0x2')]=mongoose['model']('Guild',new mongoose[(a182_0x9b31('0x6'))]({'_id':{'type':String,'required':!![]},'disabled':{'type':Boolean},'prefixes':{'type':[String]},'language':{'type':String},'greeting':{'type':{'channelId':{'type':String,'unique':!![],'sparse':!![]},'message':{'type':Object,'trim':!![]},'timeout':{'type':Number}}},'farewell':{'type':{'channelId':{'type':String,'unique':!![],'sparse':!![]},'message':{'type':Object,'trim':!![]},'timeout':{'type':Number}}},'music':{'type':{'enabled':{'type':Boolean},'textChannelId':{'type':String,'unique':!![],'sparse':!![]},'voiceChannelId':{'type':String,'unique':!![],'sparse':!![]},'roleId':{'type':String,'unique':!![],'sparse':!![]},'autoPlay':{'type':Boolean},'keepAlive':{'type':Boolean}}},'gamification':{'type':{'enabled':{'type':Boolean},'messages':{'type':Boolean},'multiplier':{'type':Number}}},'chat':{'type':Boolean},'streamerRoleId':{'type':String,'unique':!![],'sparse':!![]},'serverLogChannelId':{'type':String,'unique':!![],'sparse':!![]},'moderationLogChannelId':{'type':String,'unique':!![],'sparse':!![]},'starboardChannelId':{'type':String,'unique':!![],'sparse':!![]},'announcementsChannelId':{'type':String,'unique':!![],'sparse':!![]},'reportsChannelId':{'type':String,'unique':!![],'sparse':!![]},'suggestionsChannelId':{'type':String,'unique':!![],'sparse':!![]},'moderationCaseCount':{'type':Number},'reactionAnnouncements':{'type':Boolean},'reactionPinning':{'type':Boolean},'filters':{'type':{'inviteFilter':{'type':{'enabled':{'type':Boolean},'whitelist':{'type':[String]},'infraction':{'type':Boolean}}},'linkFilter':{'type':{'enabled':{'type':Boolean},'whitelist':{'type':[String]},'infraction':{'type':Boolean}}},'messageFilter':{'type':{'enabled':{'type':Boolean},'patterns':{'type':[String]},'infraction':{'type':Boolean}}}}},'mentionSpam':{'type':{'roles':{'type':Boolean},'users':{'type':Boolean},'threshold':{'type':Number}}},'infractions':{'type':{'kickThreshold':{'type':Number},'banThreshold':{'type':Number}}},'gambling':{'type':{'enabled':{'type':Boolean},'multiplier':{'type':Number}}},'streamers':{'type':{'twitch':{'type':{'channelId':{'type':String},'users':{'type':[String]}}}}},'voiceSessions':{'type':{'categories':{'type':[String]},'userLimit':{'type':Number}}},'disabledCommands':{'type':[String]},'membersOnly':{'type':Boolean}}));