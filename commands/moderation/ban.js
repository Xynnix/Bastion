const a71_0xf111=['\x20/\x20','unban','ownerID','join','reason','INVALID_COMMAND_SYNTAX','return\x20/\x22\x20+\x20this\x20+\x20\x22/','fetchBans','ban\x20--user\x20USER_ID\x20--\x20REASON','items','guild','resolver','exports','compile','author','tag','channel','exec','getString','resolveUser','unauthorized','info','BAN_MEMBERS','errors','send','language','ban\x20--list\x20--page\x203','days','DARK_BUT_NOT_BLACK','document','COLORS','Constants','locale','page','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20of\x20','member','soft','../../utils/errors','client','memberSoftBan','Page\x20','pages','../../utils/pagination','ORANGE','ban\x20--list','values','name','catch','list','ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON','user','get','has','Users\x20banned\x20in\x20','cache','ban','members','paginate','DiscordError'];(function(_0x4a90ac,_0xf1119e){const _0x51ecf8=function(_0x1402b3){while(--_0x1402b3){_0x4a90ac['push'](_0x4a90ac['shift']());}};const _0x188b6a=function(){const _0x353c74={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x61aa9a,_0x171619,_0x2f5344,_0x59a11c){_0x59a11c=_0x59a11c||{};let _0x4e68cd=_0x171619+'='+_0x2f5344;let _0x1984f6=0x0;for(let _0x2e9682=0x0,_0x2b3d3c=_0x61aa9a['length'];_0x2e9682<_0x2b3d3c;_0x2e9682++){const _0x552a69=_0x61aa9a[_0x2e9682];_0x4e68cd+=';\x20'+_0x552a69;const _0x5928b3=_0x61aa9a[_0x552a69];_0x61aa9a['push'](_0x5928b3);_0x2b3d3c=_0x61aa9a['length'];if(_0x5928b3!==!![]){_0x4e68cd+='='+_0x5928b3;}}_0x59a11c['cookie']=_0x4e68cd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5188ec,_0x22c126){_0x5188ec=_0x5188ec||function(_0x1de739){return _0x1de739;};const _0x2ad4b0=_0x5188ec(new RegExp('(?:^|;\x20)'+_0x22c126['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0xa18afd=function(_0x40d724,_0x2dce6b){_0x40d724(++_0x2dce6b);};_0xa18afd(_0x51ecf8,_0xf1119e);return _0x2ad4b0?decodeURIComponent(_0x2ad4b0[0x1]):undefined;}};const _0x2a657e=function(){const _0x3192dc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3192dc['test'](_0x353c74['removeCookie']['toString']());};_0x353c74['updateCookie']=_0x2a657e;let _0x5574d4='';const _0x599544=_0x353c74['updateCookie']();if(!_0x599544){_0x353c74['setCookie'](['*'],'counter',0x1);}else if(_0x599544){_0x5574d4=_0x353c74['getCookie'](null,'counter');}else{_0x353c74['removeCookie']();}};_0x188b6a();}(a71_0xf111,0x19d));const a71_0x51ec=function(_0x4a90ac,_0xf1119e){_0x4a90ac=_0x4a90ac-0x0;let _0x51ecf8=a71_0xf111[_0x4a90ac];return _0x51ecf8;};const a71_0x353c74=function(){let _0x22151c=!![];return function(_0x103f95,_0x56ef50){const _0x4bc064=_0x22151c?function(){if(_0x56ef50){const _0x1b9f3d=_0x56ef50['apply'](_0x103f95,arguments);_0x56ef50=null;return _0x1b9f3d;}}:function(){};_0x22151c=![];return _0x4bc064;};}();const a71_0x1402b3=a71_0x353c74(this,function(){const _0x16a6ea=function(){const _0x199178=_0x16a6ea['constructor'](a71_0x51ec('0xd'))()[a71_0x51ec('0x14')](a71_0x51ec('0x29'));return!_0x199178['test'](a71_0x1402b3);};return _0x16a6ea();});a71_0x1402b3();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a71_0x51ec('0x2d'));const pagination=require(a71_0x51ec('0x32'));module[a71_0x51ec('0x13')]=class Ban extends tesseract_1['Command']{constructor(){super('ban',{'description':'It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[a71_0x51ec('0x38'),a71_0x51ec('0x2c')],'default':{'days':0x0,'page':0x1},'number':[a71_0x51ec('0x22'),a71_0x51ec('0x28')],'string':[a71_0x51ec('0x3a')]},'scope':a71_0x51ec('0x11'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a71_0x51ec('0x1d')],'userPermissions':[a71_0x51ec('0x1d')],'syntax':[a71_0x51ec('0x34'),a71_0x51ec('0x21'),a71_0x51ec('0xf'),a71_0x51ec('0x39'),'ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON']});this[a71_0x51ec('0x18')]=async(_0x4031aa,_0x49fdc5)=>{if(_0x49fdc5[a71_0x51ec('0x38')]){const _0x230809=await _0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0xe')]();const _0x406a80=pagination[a71_0x51ec('0x5')]([..._0x230809[a71_0x51ec('0x35')]()],_0x49fdc5[a71_0x51ec('0x28')]);return await _0x4031aa[a71_0x51ec('0x17')][a71_0x51ec('0x1f')]({'embed':{'color':tesseract_1[a71_0x51ec('0x26')][a71_0x51ec('0x25')][a71_0x51ec('0x33')],'title':'Banned\x20Users','description':a71_0x51ec('0x1')+_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x36')],'fields':_0x406a80[a71_0x51ec('0x10')]['map'](_0x3243f6=>({'name':_0x3243f6[a71_0x51ec('0x3a')][a71_0x51ec('0x16')]+a71_0x51ec('0x7')+_0x3243f6['user']['id'],'value':_0x3243f6[a71_0x51ec('0xb')]||'-'})),'footer':{'text':a71_0x51ec('0x30')+_0x406a80[a71_0x51ec('0x28')]+a71_0x51ec('0x2a')+_0x406a80[a71_0x51ec('0x31')]}}});}const _0x324f24=this[a71_0x51ec('0x2e')][a71_0x51ec('0x12')][a71_0x51ec('0x1a')](_0x49fdc5[a71_0x51ec('0x3a')]);if(!_0x324f24)throw new errors[(a71_0x51ec('0x6'))](errors['BASTION_ERROR_TYPE'][a71_0x51ec('0xc')],this[a71_0x51ec('0x36')]);if(_0x4031aa[a71_0x51ec('0x15')]['id']!==_0x4031aa['guild'][a71_0x51ec('0x9')]&&_0x4031aa[a71_0x51ec('0x11')]['members'][a71_0x51ec('0x2')][a71_0x51ec('0x0')](_0x324f24['id'])&&!_0x4031aa[a71_0x51ec('0x2b')]['canManage'](_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x4')][a71_0x51ec('0x2')][a71_0x51ec('0x3b')](_0x324f24['id']))){return await _0x4031aa[a71_0x51ec('0x17')]['send']({'embed':{'color':tesseract_1['Constants'][a71_0x51ec('0x25')]['RED'],'title':this[a71_0x51ec('0x2e')][a71_0x51ec('0x27')]['getString'](_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x24')][a71_0x51ec('0x20')],a71_0x51ec('0x1e'),a71_0x51ec('0x1b')),'description':this[a71_0x51ec('0x2e')][a71_0x51ec('0x27')][a71_0x51ec('0x19')](_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x24')][a71_0x51ec('0x20')],a71_0x51ec('0x1e'),'rolePosition',_0x4031aa[a71_0x51ec('0x15')][a71_0x51ec('0x16')],_0x324f24['tag'])}})[a71_0x51ec('0x37')](()=>{});}const _0x48d972=_0x49fdc5['_'][a71_0x51ec('0xa')]('\x20')||'-';await _0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x4')][a71_0x51ec('0x3')](_0x324f24,{'days':_0x49fdc5[a71_0x51ec('0x22')],'reason':_0x48d972});if(_0x49fdc5[a71_0x51ec('0x2c')]){await _0x4031aa[a71_0x51ec('0x11')]['members'][a71_0x51ec('0x8')](_0x324f24,_0x48d972);}await _0x4031aa[a71_0x51ec('0x17')][a71_0x51ec('0x1f')]({'embed':{'color':tesseract_1[a71_0x51ec('0x26')][a71_0x51ec('0x25')][a71_0x51ec('0x23')],'description':_0x49fdc5[a71_0x51ec('0x2c')]?this['client']['locale']['getString'](_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x24')][a71_0x51ec('0x20')],a71_0x51ec('0x1c'),a71_0x51ec('0x2f'),_0x4031aa[a71_0x51ec('0x15')][a71_0x51ec('0x16')],_0x324f24['tag']):this[a71_0x51ec('0x2e')][a71_0x51ec('0x27')][a71_0x51ec('0x19')](_0x4031aa[a71_0x51ec('0x11')][a71_0x51ec('0x24')][a71_0x51ec('0x20')],a71_0x51ec('0x1c'),'guildBanAdd',_0x4031aa['author']['tag'],_0x324f24['tag']),'fields':[{'name':'Reason','value':_0x48d972}],'footer':{'text':_0x324f24['id']}}})[a71_0x51ec('0x37')](()=>{});};}};