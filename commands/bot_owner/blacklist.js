const a2_0x3237=['send','blacklistedUserIds','DiscordError','language','default','Users','servers','filter','apply','save','@bastion/tesseract','tag','bastionBlacklistUpdate','blacklist\x20--users\x20USER_ID','blacklist\x20--servers\x20SERVER_ID\x20--remove','../../models/Config','toBulletList','constructor','Constants','blacklist','Bastion\x27s\x20Blacklist','locale','guild','includes','../../utils/errors','blacklistedGuildIds','\x20Blacklisted\x20Users','errors','name','isValid','../../utils/snowflake','blacklist\x20--servers\x20SERVER_ID','length','bastionBlacklistUnchanged','Servers','return\x20/\x22\x20+\x20this\x20+\x20\x22/','push','INVALID_COMMAND_SYNTAX','remove','channel','exports','\x20Blacklisted\x20Servers\x20/\x20','client','exec','It\x20allows\x20you\x20to\x20blacklist\x20users\x20and\x20servers\x20that.\x20Blacklisted\x20servers\x20and\x20users\x20don\x27t\x20have\x20access\x20to\x20Bastion\x27s\x20commands.','PUPIL','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','compile','findById','users'];(function(_0x2c9caf,_0x32376d){const _0x595e1b=function(_0x22f732){while(--_0x22f732){_0x2c9caf['push'](_0x2c9caf['shift']());}};const _0x1c7626=function(){const _0x23e5ef={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3bb59a,_0x43f113,_0x42dd19,_0x4c920b){_0x4c920b=_0x4c920b||{};let _0x7b96cf=_0x43f113+'='+_0x42dd19;let _0xaa06bd=0x0;for(let _0x5c1da5=0x0,_0x68f1c9=_0x3bb59a['length'];_0x5c1da5<_0x68f1c9;_0x5c1da5++){const _0x32bdac=_0x3bb59a[_0x5c1da5];_0x7b96cf+=';\x20'+_0x32bdac;const _0xfc5f91=_0x3bb59a[_0x32bdac];_0x3bb59a['push'](_0xfc5f91);_0x68f1c9=_0x3bb59a['length'];if(_0xfc5f91!==!![]){_0x7b96cf+='='+_0xfc5f91;}}_0x4c920b['cookie']=_0x7b96cf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5a3591,_0x35bea8){_0x5a3591=_0x5a3591||function(_0x1ba351){return _0x1ba351;};const _0x31829f=_0x5a3591(new RegExp('(?:^|;\x20)'+_0x35bea8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x222398=function(_0x171fb9,_0x5aef36){_0x171fb9(++_0x5aef36);};_0x222398(_0x595e1b,_0x32376d);return _0x31829f?decodeURIComponent(_0x31829f[0x1]):undefined;}};const _0x3c03ab=function(){const _0x1c4d7c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c4d7c['test'](_0x23e5ef['removeCookie']['toString']());};_0x23e5ef['updateCookie']=_0x3c03ab;let _0x1c1bbe='';const _0x22de69=_0x23e5ef['updateCookie']();if(!_0x22de69){_0x23e5ef['setCookie'](['*'],'counter',0x1);}else if(_0x22de69){_0x1c1bbe=_0x23e5ef['getCookie'](null,'counter');}else{_0x23e5ef['removeCookie']();}};_0x1c7626();}(a2_0x3237,0x11f));const a2_0x595e=function(_0x2c9caf,_0x32376d){_0x2c9caf=_0x2c9caf-0x0;let _0x595e1b=a2_0x3237[_0x2c9caf];return _0x595e1b;};const a2_0x23e5ef=function(){let _0x2371d6=!![];return function(_0x46ecfa,_0xf44de6){const _0x1039c7=_0x2371d6?function(){if(_0xf44de6){const _0x590e18=_0xf44de6[a2_0x595e('0x15')](_0x46ecfa,arguments);_0xf44de6=null;return _0x590e18;}}:function(){};_0x2371d6=![];return _0x1039c7;};}();const a2_0x22f732=a2_0x23e5ef(this,function(){const _0x5dc88a=function(){const _0x471d6d=_0x5dc88a[a2_0x595e('0x1e')](a2_0x595e('0x30'))()[a2_0x595e('0xa')](a2_0x595e('0x9'));return!_0x471d6d['test'](a2_0x22f732);};return _0x5dc88a();});a2_0x22f732();'use strict';const tesseract_1=require(a2_0x595e('0x17'));const Config_1=require(a2_0x595e('0x1c'));const arrays=require('../../utils/arrays');const errors=require(a2_0x595e('0x25'));const snowflake=require(a2_0x595e('0x2b'));module[a2_0x595e('0x3')]=class Blacklist extends tesseract_1['Command']{constructor(){super(a2_0x595e('0x20'),{'description':a2_0x595e('0x7'),'triggers':[],'arguments':{'array':[a2_0x595e('0x13'),a2_0x595e('0xc')],'boolean':[a2_0x595e('0x1')],'string':['servers',a2_0x595e('0xc')]},'scope':a2_0x595e('0x23'),'owner':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a2_0x595e('0x1a'),a2_0x595e('0x2c'),'blacklist\x20--users\x20USER_ID\x20--remove',a2_0x595e('0x1b')]});this[a2_0x595e('0x6')]=async(_0x371636,_0x35fb5f)=>{const _0x51c008=await Config_1[a2_0x595e('0x11')][a2_0x595e('0xb')](this['client']['user']['id']);const _0x26196b=_0x35fb5f[a2_0x595e('0x13')]?_0x35fb5f['servers'][a2_0x595e('0x14')](_0x1bec7b=>snowflake[a2_0x595e('0x2a')](_0x1bec7b)):[];const _0x100e1a=_0x35fb5f[a2_0x595e('0xc')]?_0x35fb5f['users']['filter'](_0x19c524=>snowflake[a2_0x595e('0x2a')](_0x19c524)):[];if(!_0x26196b[a2_0x595e('0x2d')]&&!_0x100e1a[a2_0x595e('0x2d')])throw new errors[(a2_0x595e('0xf'))](errors['BASTION_ERROR_TYPE'][a2_0x595e('0x0')],this[a2_0x595e('0x29')]);const _0x53f3b5=[];if(_0x26196b[a2_0x595e('0x2d')]){if(_0x35fb5f[a2_0x595e('0x1')])_0x51c008[a2_0x595e('0x26')]=_0x51c008[a2_0x595e('0x26')][a2_0x595e('0x14')](_0x47760f=>!_0x26196b[a2_0x595e('0x24')](_0x47760f));else _0x51c008['blacklistedGuildIds']=[..._0x100e1a,..._0x51c008[a2_0x595e('0x26')]];_0x51c008[a2_0x595e('0x26')]=[...new Set(_0x51c008[a2_0x595e('0x26')])];_0x53f3b5[a2_0x595e('0x31')]({'name':a2_0x595e('0x2f'),'value':arrays[a2_0x595e('0x1d')](_0x26196b),'inline':!![]});}if(_0x26196b[a2_0x595e('0x2d')]){if(_0x35fb5f[a2_0x595e('0x1')])_0x51c008[a2_0x595e('0xe')]=_0x51c008[a2_0x595e('0xe')][a2_0x595e('0x14')](_0xb3069=>!_0x100e1a['includes'](_0xb3069));else _0x51c008[a2_0x595e('0xe')]=[..._0x100e1a,..._0x51c008[a2_0x595e('0xe')]];_0x51c008['blacklistedUserIds']=[...new Set(_0x51c008[a2_0x595e('0xe')])];_0x53f3b5[a2_0x595e('0x31')]({'name':a2_0x595e('0x12'),'value':arrays[a2_0x595e('0x1d')](_0x100e1a),'inline':!![]});}_0x51c008[a2_0x595e('0x16')]();await _0x371636[a2_0x595e('0x2')][a2_0x595e('0xd')]({'embed':{'color':tesseract_1[a2_0x595e('0x1f')]['COLORS'][a2_0x595e('0x8')],'title':a2_0x595e('0x21'),'description':this[a2_0x595e('0x5')][a2_0x595e('0x22')]['getString'](_0x371636[a2_0x595e('0x23')]['document'][a2_0x595e('0x10')],a2_0x595e('0x28'),_0x26196b[a2_0x595e('0x2d')]||_0x100e1a[a2_0x595e('0x2d')]?a2_0x595e('0x19'):a2_0x595e('0x2e'),_0x371636['author'][a2_0x595e('0x18')]),'fields':_0x53f3b5,'footer':{'text':_0x51c008['blacklistedGuildIds'][a2_0x595e('0x2d')]+a2_0x595e('0x4')+_0x51c008['blacklistedUserIds'][a2_0x595e('0x2d')]+a2_0x595e('0x27')}}})['catch'](()=>{});};}};