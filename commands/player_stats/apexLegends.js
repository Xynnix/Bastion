const a96_0x52f2=['segments','/playerstats/apexlegends/','../../utils/omnic','\x20is\x20currently\x20playing\x20with\x20','json','platformInfo','origin','map','apex','platforms','toLowerCase','length','test','../../utils/errors','rankScore','makeRequest','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apexLegends','BASTION_ERROR_TYPE','metadata','errors','platform','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/constants','exec','rankName','compile','toUpperCase','@bastion/tesseract','overview','apply','stats','find','DiscordError','INVALID_COMMAND_SYNTAX','psn','apexLegends\x20USERNAME\x20--platform\x20PLATFORM','includes','\x20•\x20Powered\x20by\x20Tracker\x20Network','APEX_LEGENDS','type','Command','data','keys','apexLegends\x20USERNAME','send','Rank','iconUrl','displayValue','activeLegendName','displayName','Apex\x20Legends\x20-\x20Player\x20Stats'];(function(_0x4eaaf9,_0x52f2a1){const _0x32bb40=function(_0x2b09d8){while(--_0x2b09d8){_0x4eaaf9['push'](_0x4eaaf9['shift']());}};const _0x4f2e15=function(){const _0x356919={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x23ec88,_0x1bd3ab,_0x7a19b3,_0x35e366){_0x35e366=_0x35e366||{};let _0x45ee3a=_0x1bd3ab+'='+_0x7a19b3;let _0x1ab229=0x0;for(let _0x228b55=0x0,_0x438e64=_0x23ec88['length'];_0x228b55<_0x438e64;_0x228b55++){const _0x569034=_0x23ec88[_0x228b55];_0x45ee3a+=';\x20'+_0x569034;const _0x3b85aa=_0x23ec88[_0x569034];_0x23ec88['push'](_0x3b85aa);_0x438e64=_0x23ec88['length'];if(_0x3b85aa!==!![]){_0x45ee3a+='='+_0x3b85aa;}}_0x35e366['cookie']=_0x45ee3a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x36c73f,_0x51a988){_0x36c73f=_0x36c73f||function(_0x5f2ad9){return _0x5f2ad9;};const _0xd0bd3=_0x36c73f(new RegExp('(?:^|;\x20)'+_0x51a988['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x212760=function(_0x1092cc,_0x45b022){_0x1092cc(++_0x45b022);};_0x212760(_0x32bb40,_0x52f2a1);return _0xd0bd3?decodeURIComponent(_0xd0bd3[0x1]):undefined;}};const _0x406535=function(){const _0xc369da=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xc369da['test'](_0x356919['removeCookie']['toString']());};_0x356919['updateCookie']=_0x406535;let _0x19a8cb='';const _0x4d7ffa=_0x356919['updateCookie']();if(!_0x4d7ffa){_0x356919['setCookie'](['*'],'counter',0x1);}else if(_0x4d7ffa){_0x19a8cb=_0x356919['getCookie'](null,'counter');}else{_0x356919['removeCookie']();}};_0x4f2e15();}(a96_0x52f2,0x1ae));const a96_0x32bb=function(_0x4eaaf9,_0x52f2a1){_0x4eaaf9=_0x4eaaf9-0x0;let _0x32bb40=a96_0x52f2[_0x4eaaf9];return _0x32bb40;};const a96_0x356919=function(){let _0x161b7a=!![];return function(_0x2d75d2,_0x20b166){const _0x4c97db=_0x161b7a?function(){if(_0x20b166){const _0xdb3b92=_0x20b166[a96_0x32bb('0x10')](_0x2d75d2,arguments);_0x20b166=null;return _0xdb3b92;}}:function(){};_0x161b7a=![];return _0x4c97db;};}();const a96_0x2b09d8=a96_0x356919(this,function(){const _0x2c34f5=function(){const _0x5652c3=_0x2c34f5['constructor'](a96_0x32bb('0x2'))()[a96_0x32bb('0xc')](a96_0x32bb('0x8'));return!_0x5652c3[a96_0x32bb('0x32')](a96_0x2b09d8);};return _0x2c34f5();});a96_0x2b09d8();'use strict';const tesseract_1=require(a96_0x32bb('0xe'));const constants=require(a96_0x32bb('0x9'));const errors=require(a96_0x32bb('0x33'));const omnic=require(a96_0x32bb('0x28'));module['exports']=class ApexLegendsCommand extends tesseract_1[a96_0x32bb('0x1b')]{constructor(){super(a96_0x32bb('0x3'),{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Apex\x20Legends\x20player\x20in\x20any\x20supported\x20platform.','triggers':[a96_0x32bb('0x2e')],'arguments':{'alias':{'platform':['p']},'string':[a96_0x32bb('0x7')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a96_0x32bb('0x1e'),a96_0x32bb('0x16')]});this[a96_0x32bb('0xa')]=async(_0x4e0258,_0x19eda3)=>{if(!_0x19eda3['_'][a96_0x32bb('0x31')])throw new errors[(a96_0x32bb('0x13'))](errors[a96_0x32bb('0x4')][a96_0x32bb('0x14')],this['name']);const _0x14b37c=_0x19eda3['_']['join']('\x20');const _0x1c6ed8=_0x19eda3[a96_0x32bb('0x7')]&&this[a96_0x32bb('0x2f')][a96_0x32bb('0x17')](_0x19eda3[a96_0x32bb('0x7')][a96_0x32bb('0x30')]())?_0x19eda3[a96_0x32bb('0x7')]['toLowerCase']():this[a96_0x32bb('0x2f')][0x0];const _0x3066ae=await omnic[a96_0x32bb('0x1')](a96_0x32bb('0x27')+_0x1c6ed8+'/'+encodeURIComponent(_0x14b37c));const _0x2fe57a=await _0x3066ae[a96_0x32bb('0x2a')]();if(_0x2fe57a[a96_0x32bb('0x6')])throw new Error(_0x2fe57a['errors'][0x0]['message']);const _0x252160=_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x26')][a96_0x32bb('0x12')](_0x3c9dd3=>_0x3c9dd3[a96_0x32bb('0x1a')]===a96_0x32bb('0xf'));await _0x4e0258['channel'][a96_0x32bb('0x1f')]({'embed':{'color':constants['COLORS'][a96_0x32bb('0x19')],'author':{'name':_0x2fe57a['data'][a96_0x32bb('0x2b')]['platformUserHandle'],'iconURL':_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x2b')]['avatarUrl']},'title':a96_0x32bb('0x25'),'description':_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x5')]['activeLegendName']?_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x2b')]['platformUserHandle']+a96_0x32bb('0x29')+_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x5')][a96_0x32bb('0x23')]:null,'fields':[{'name':a96_0x32bb('0x20'),'value':_0x252160[a96_0x32bb('0x11')][a96_0x32bb('0x0')]?_0x252160[a96_0x32bb('0x11')][a96_0x32bb('0x0')][a96_0x32bb('0x5')][a96_0x32bb('0xb')]+'\x20/\x20'+_0x252160[a96_0x32bb('0x11')]['rankScore'][a96_0x32bb('0x22')]:'-','inline':!![]},...Object[a96_0x32bb('0x1d')](_0x252160['stats'])['filter'](_0x32bb2d=>_0x32bb2d!==a96_0x32bb('0x0'))[a96_0x32bb('0x2d')](_0x2a89e0=>({'name':_0x252160['stats'][_0x2a89e0][a96_0x32bb('0x24')],'value':_0x252160['stats'][_0x2a89e0][a96_0x32bb('0x22')],'inline':!![]}))],'thumbnail':{'url':_0x252160['stats'][a96_0x32bb('0x0')]?_0x252160[a96_0x32bb('0x11')][a96_0x32bb('0x0')][a96_0x32bb('0x5')][a96_0x32bb('0x21')]:_0x2fe57a[a96_0x32bb('0x1c')][a96_0x32bb('0x2b')]['avatarUrl']},'footer':{'text':_0x1c6ed8[a96_0x32bb('0xd')]()+a96_0x32bb('0x18')}}});};this[a96_0x32bb('0x2f')]=[a96_0x32bb('0x2c'),a96_0x32bb('0x15'),'xbl'];}};