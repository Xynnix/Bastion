const a131_0x4690=['POLLS','filter','React\x20to\x20this\x20message\x20with\x20the\x20corresponding\x20emoji\x20to\x20vote\x20for\x20that\x20option.','poll\x20--status\x20POLL_MESSAGE_ID','channel','PremiumTier','poll\x20--timeout\x20HOURS\x20--option\x20OPTIONS...\x20--\x20QUESTION','defaultTimeout','length','POLL\x20STATUS','POLL_NOT_FOUND','_id','DiscordError','constructor','fields','COLORS','isPublicBastion','status','apply','reactions','../../utils/omnic','map','../../models/Poll','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','default','get','name','POLL_TIMEOUT','timeout','poll\x20--option\x20OPTIONS...\x20--\x20QUESTION','catch','fetchPremiumTier','It\x20allows\x20you\x20to\x20run\x20polls\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20at\x20most\x2013\x20options\x20for\x20the\x20poll.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20status\x20of\x20a\x20running\x20poll.','countDocuments','GOLD','poll','IRIS','toFixed','ends','has','\x20•\x20Ends','LIMITED_PREMIUM_MEMBERSHIP','locale','test','findOne','now','PLATINUM','@bastion/tesseract','LIMITS','Ends','option','exec','cache','react','join','messages','membershipLimitPolls','document','premiumPollTimeout','guild','../../utils/numbers','PREMIUM_MEMBERSHIP_REQUIRED','embeds','getString','users','BASTION_ERROR_TYPE','create','value','\x20/\x20','errors','client','send','fetch','\x20votes\x20(','clamp','number','INVALID_COMMAND_SYNTAX','channels','slice','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Constants','exports','size','language','bot'];(function(_0x5ca159,_0x4690a2){const _0x4a9d91=function(_0x40e90f){while(--_0x40e90f){_0x5ca159['push'](_0x5ca159['shift']());}};const _0x57dc9e=function(){const _0x312d52={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19320f,_0x4e930e,_0x3b3e02,_0x297bb1){_0x297bb1=_0x297bb1||{};let _0x2be4cd=_0x4e930e+'='+_0x3b3e02;let _0xc68169=0x0;for(let _0x57a685=0x0,_0x53ffbf=_0x19320f['length'];_0x57a685<_0x53ffbf;_0x57a685++){const _0x2eff58=_0x19320f[_0x57a685];_0x2be4cd+=';\x20'+_0x2eff58;const _0x172f21=_0x19320f[_0x2eff58];_0x19320f['push'](_0x172f21);_0x53ffbf=_0x19320f['length'];if(_0x172f21!==!![]){_0x2be4cd+='='+_0x172f21;}}_0x297bb1['cookie']=_0x2be4cd;},'removeCookie':function(){return'dev';},'getCookie':function(_0x30d5a1,_0x52c05f){_0x30d5a1=_0x30d5a1||function(_0x36a787){return _0x36a787;};const _0x201846=_0x30d5a1(new RegExp('(?:^|;\x20)'+_0x52c05f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3964c9=function(_0x3fa2df,_0x27077c){_0x3fa2df(++_0x27077c);};_0x3964c9(_0x4a9d91,_0x4690a2);return _0x201846?decodeURIComponent(_0x201846[0x1]):undefined;}};const _0x36191a=function(){const _0x1a9884=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1a9884['test'](_0x312d52['removeCookie']['toString']());};_0x312d52['updateCookie']=_0x36191a;let _0x27520a='';const _0x32a7fe=_0x312d52['updateCookie']();if(!_0x32a7fe){_0x312d52['setCookie'](['*'],'counter',0x1);}else if(_0x32a7fe){_0x27520a=_0x312d52['getCookie'](null,'counter');}else{_0x312d52['removeCookie']();}};_0x57dc9e();}(a131_0x4690,0x1e9));const a131_0x4a9d=function(_0x5ca159,_0x4690a2){_0x5ca159=_0x5ca159-0x0;let _0x4a9d91=a131_0x4690[_0x5ca159];return _0x4a9d91;};const a131_0x312d52=function(){let _0x1f320b=!![];return function(_0x2c4963,_0x1807cc){const _0x25982f=_0x1f320b?function(){if(_0x1807cc){const _0x5bd7a3=_0x1807cc[a131_0x4a9d('0x27')](_0x2c4963,arguments);_0x1807cc=null;return _0x5bd7a3;}}:function(){};_0x1f320b=![];return _0x25982f;};}();const a131_0x40e90f=a131_0x312d52(this,function(){const _0x2b5593=function(){const _0x344bd3=_0x2b5593[a131_0x4a9d('0x22')](a131_0x4a9d('0xf'))()['compile'](a131_0x4a9d('0x2c'));return!_0x344bd3[a131_0x4a9d('0x40')](a131_0x40e90f);};return _0x2b5593();});a131_0x40e90f();'use strict';const tesseract_1=require(a131_0x4a9d('0x44'));const Poll_1=require(a131_0x4a9d('0x2b'));const constants=require('../../utils/constants');const errors=require('../../utils/errors');const numbers=require(a131_0x4a9d('0x51'));const omnic=require(a131_0x4a9d('0x29'));module[a131_0x4a9d('0x11')]=class PollCommand extends tesseract_1['Command']{constructor(){super(a131_0x4a9d('0x38'),{'description':a131_0x4a9d('0x35'),'triggers':[],'arguments':{'alias':{'timeout':['t'],'option':['o'],'status':['s']},'number':[a131_0x4a9d('0x31')],'string':[a131_0x4a9d('0x47'),a131_0x4a9d('0x26')],'coerce':{'timeout':_0x31ab11=>typeof _0x31ab11===a131_0x4a9d('0xb')&&numbers[a131_0x4a9d('0xa')](_0x31ab11,0x1,0x2d0)},'default':{'timeout':0x3}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_CHANNELS'],'syntax':[a131_0x4a9d('0x18'),a131_0x4a9d('0x32'),a131_0x4a9d('0x1b')]});this[a131_0x4a9d('0x48')]=async(_0x386653,_0x9e5939)=>{if(_0x9e5939['status']){const _0x52e6c8=await Poll_1['default'][a131_0x4a9d('0x41')]({'_id':_0x9e5939[a131_0x4a9d('0x26')],'guild':_0x386653[a131_0x4a9d('0x50')]['id']});if(!_0x52e6c8)throw new Error(a131_0x4a9d('0x1f'));if(!_0x386653[a131_0x4a9d('0x50')]['channels']['cache'][a131_0x4a9d('0x3c')](_0x52e6c8[a131_0x4a9d('0x19')]))throw new Error(a131_0x4a9d('0x1f'));const _0x2ae9d9=_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0xd')]['cache']['get'](_0x52e6c8[a131_0x4a9d('0x19')]);const _0x586b9f=await _0x2ae9d9[a131_0x4a9d('0x4c')]['fetch'](_0x52e6c8[a131_0x4a9d('0x20')])[a131_0x4a9d('0x33')](()=>{});if(!_0x586b9f)throw new Error('POLL_NOT_FOUND');const _0x4625d9=_0x586b9f[a131_0x4a9d('0x53')][0x0][a131_0x4a9d('0x23')][a131_0x4a9d('0x2a')](_0x207fc3=>_0x207fc3[a131_0x4a9d('0x3')]);const _0x15f249={};let _0x2c0b9a=0x0;for(const _0x5cdbbb in this['reactions']['slice'](0x0,_0x4625d9[a131_0x4a9d('0x1d')])){if(_0x586b9f[a131_0x4a9d('0x28')][a131_0x4a9d('0x49')][a131_0x4a9d('0x3c')](this[a131_0x4a9d('0x28')][_0x5cdbbb])){await _0x586b9f[a131_0x4a9d('0x28')][a131_0x4a9d('0x49')][a131_0x4a9d('0x2e')](this[a131_0x4a9d('0x28')][_0x5cdbbb])[a131_0x4a9d('0x0')][a131_0x4a9d('0x8')]()['catch'](()=>{});const _0xaf62a5=_0x586b9f[a131_0x4a9d('0x28')]['cache']['get'](this[a131_0x4a9d('0x28')][_0x5cdbbb])[a131_0x4a9d('0x0')][a131_0x4a9d('0x49')][a131_0x4a9d('0x16')](_0x5462ad=>!_0x5462ad[a131_0x4a9d('0x14')])[a131_0x4a9d('0x12')];_0x15f249[this[a131_0x4a9d('0x28')][_0x5cdbbb]]=_0xaf62a5;_0x2c0b9a+=_0xaf62a5;}}return await _0x386653['channel'][a131_0x4a9d('0x7')]({'embed':{'color':tesseract_1[a131_0x4a9d('0x10')]['COLORS']['IRIS'],'author':{'name':a131_0x4a9d('0x1e')},'title':_0x586b9f[a131_0x4a9d('0x53')][0x0]['title'],'fields':_0x586b9f[a131_0x4a9d('0x53')][0x0][a131_0x4a9d('0x23')][a131_0x4a9d('0x2a')](_0x1860ec=>({'name':_0x1860ec[a131_0x4a9d('0x2f')]+'\x20'+_0x1860ec[a131_0x4a9d('0x3')],'value':(_0x15f249[_0x1860ec[a131_0x4a9d('0x2f')]]||0x0)+a131_0x4a9d('0x4')+_0x2c0b9a+a131_0x4a9d('0x9')+(_0x15f249[_0x1860ec[a131_0x4a9d('0x2f')]]?_0x15f249[_0x1860ec['name']]/_0x2c0b9a*0x64:0x0)[a131_0x4a9d('0x3a')](0x2)+'%)'})),'footer':{'text':_0x586b9f['id']+a131_0x4a9d('0x3d')},'timestamp':_0x52e6c8[a131_0x4a9d('0x3b')]}});}if(!_0x9e5939['_'][a131_0x4a9d('0x1d')]||!_0x9e5939[a131_0x4a9d('0x47')]||!_0x9e5939[a131_0x4a9d('0x47')]['length'])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a131_0x4a9d('0xc')],this[a131_0x4a9d('0x2f')]);const _0x3de680=_0x9e5939['_'][a131_0x4a9d('0x4b')]('\x20');const _0x4f29bc=_0x9e5939[a131_0x4a9d('0x31')]?_0x9e5939[a131_0x4a9d('0x31')]:this[a131_0x4a9d('0x1c')];if(constants[a131_0x4a9d('0x25')](this['client']['user'])){const _0x431239=await omnic[a131_0x4a9d('0x34')](_0x386653[a131_0x4a9d('0x50')])[a131_0x4a9d('0x33')](()=>{});if(_0x431239){if(_0x431239===omnic[a131_0x4a9d('0x1a')][a131_0x4a9d('0x37')]&&_0x4f29bc>constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x37')]['POLL_TIMEOUT']){throw new errors['DiscordError'](errors[a131_0x4a9d('0x1')][a131_0x4a9d('0x3e')],this['client'][a131_0x4a9d('0x3f')]['getString'](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')]['language'],a131_0x4a9d('0x5'),'membershipLimitPollTimeout',constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x37')][a131_0x4a9d('0x30')]));}else if(_0x431239===omnic[a131_0x4a9d('0x1a')][a131_0x4a9d('0x43')]&&_0x4f29bc>constants[a131_0x4a9d('0x45')]['PLATINUM'][a131_0x4a9d('0x30')]){throw new errors[(a131_0x4a9d('0x21'))](errors['BASTION_ERROR_TYPE']['LIMITED_PREMIUM_MEMBERSHIP'],this['client'][a131_0x4a9d('0x3f')]['getString'](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')][a131_0x4a9d('0x13')],'errors','membershipLimitPollTimeout',constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x43')][a131_0x4a9d('0x30')]));}}else if(_0x4f29bc>constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x30')]){throw new errors[(a131_0x4a9d('0x21'))](errors[a131_0x4a9d('0x1')][a131_0x4a9d('0x52')],this['client'][a131_0x4a9d('0x3f')][a131_0x4a9d('0x54')](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')][a131_0x4a9d('0x13')],'errors',a131_0x4a9d('0x4f'),constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x30')]));}const _0x2e5b45=await Poll_1[a131_0x4a9d('0x2d')][a131_0x4a9d('0x36')]({'guild':_0x386653[a131_0x4a9d('0x50')]['id'],'ends':{'$gte':new Date()}});if(_0x431239){if(_0x431239===omnic[a131_0x4a9d('0x1a')]['GOLD']&&_0x2e5b45>=constants[a131_0x4a9d('0x45')]['GOLD'][a131_0x4a9d('0x15')]){throw new errors[(a131_0x4a9d('0x21'))](errors[a131_0x4a9d('0x1')][a131_0x4a9d('0x3e')],this['client']['locale'][a131_0x4a9d('0x54')](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')][a131_0x4a9d('0x13')],a131_0x4a9d('0x5'),a131_0x4a9d('0x4d'),constants['LIMITS'][a131_0x4a9d('0x37')][a131_0x4a9d('0x15')]));}else if(_0x431239===omnic['PremiumTier'][a131_0x4a9d('0x43')]&&_0x2e5b45>=constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x43')][a131_0x4a9d('0x15')]){throw new errors['DiscordError'](errors[a131_0x4a9d('0x1')][a131_0x4a9d('0x3e')],this[a131_0x4a9d('0x6')][a131_0x4a9d('0x3f')][a131_0x4a9d('0x54')](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')][a131_0x4a9d('0x13')],a131_0x4a9d('0x5'),'membershipLimitPolls',constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x43')][a131_0x4a9d('0x15')]));}}else{throw new errors['DiscordError'](errors[a131_0x4a9d('0x1')][a131_0x4a9d('0x52')],this[a131_0x4a9d('0x6')]['locale'][a131_0x4a9d('0x54')](_0x386653[a131_0x4a9d('0x50')][a131_0x4a9d('0x4e')][a131_0x4a9d('0x13')],a131_0x4a9d('0x5'),'premiumPolls',constants[a131_0x4a9d('0x45')][a131_0x4a9d('0x15')]));}}const _0x4d3237=new Date(Date[a131_0x4a9d('0x42')]()+_0x4f29bc*0x36ee80);const _0x44a6a7=await _0x386653[a131_0x4a9d('0x19')][a131_0x4a9d('0x7')]({'embed':{'color':tesseract_1[a131_0x4a9d('0x10')][a131_0x4a9d('0x24')][a131_0x4a9d('0x39')],'author':{'name':'POLL'},'title':_0x3de680,'description':a131_0x4a9d('0x17'),'fields':_0x9e5939[a131_0x4a9d('0x47')][a131_0x4a9d('0x2a')]((_0x575e81,_0x6f5e0d)=>({'name':this[a131_0x4a9d('0x28')][_0x6f5e0d],'value':_0x575e81})),'footer':{'text':a131_0x4a9d('0x46')},'timestamp':_0x4d3237}});await Poll_1[a131_0x4a9d('0x2d')][a131_0x4a9d('0x2')]({'_id':_0x44a6a7['id'],'channel':_0x44a6a7[a131_0x4a9d('0x19')]['id'],'guild':_0x44a6a7[a131_0x4a9d('0x50')]['id'],'ends':_0x4d3237});for(const _0x479b0b of this['reactions'][a131_0x4a9d('0xe')](0x0,_0x9e5939[a131_0x4a9d('0x47')][a131_0x4a9d('0x1d')])){await _0x44a6a7[a131_0x4a9d('0x4a')](_0x479b0b)[a131_0x4a9d('0x33')](()=>{});}};this[a131_0x4a9d('0x28')]=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'];this[a131_0x4a9d('0x1c')]=0x3;}};