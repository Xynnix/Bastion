const a26_0xd317=['compile','GREEN','IRIS','../../utils/arrays','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Message\x20Filter\x20in\x20the\x20server.\x20When\x20enabled,\x20it\x20filters\x20the\x20messages\x20that\x20matches\x20the\x20patterns\x20specified\x20by\x20you.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','clear','messageFilterDisable','save','COLORS','exports','messageFilter\x20--disable','document','tag','RED','constructor','enabled','messageFilter\x20--infraction','language','Filter\x20Pattern\x20Added','join','enable','messageFilter\x20PATTERN','messageFilter','info','test','MANAGE_GUILD','send','client','catch','@bastion/tesseract','Constants','getString','channel','messageFilter\x20--clear','locale','concat','length','filters','messageFilter\x20--enable','filterInfractionEnabled','infraction','disable','messageFilterEnabled','patterns','author','apply','messageFilter\x20--no-infraction'];(function(_0x3e0e3,_0xd31713){const _0x2afa1b=function(_0x579f63){while(--_0x579f63){_0x3e0e3['push'](_0x3e0e3['shift']());}};const _0x41632f=function(){const _0x4c0107={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x154cab,_0x42419e,_0x4d16ad,_0x285ce4){_0x285ce4=_0x285ce4||{};let _0x1f4901=_0x42419e+'='+_0x4d16ad;let _0xbafda6=0x0;for(let _0x3b563f=0x0,_0x4c7df5=_0x154cab['length'];_0x3b563f<_0x4c7df5;_0x3b563f++){const _0x4f130e=_0x154cab[_0x3b563f];_0x1f4901+=';\x20'+_0x4f130e;const _0x49263d=_0x154cab[_0x4f130e];_0x154cab['push'](_0x49263d);_0x4c7df5=_0x154cab['length'];if(_0x49263d!==!![]){_0x1f4901+='='+_0x49263d;}}_0x285ce4['cookie']=_0x1f4901;},'removeCookie':function(){return'dev';},'getCookie':function(_0x378454,_0x390bcc){_0x378454=_0x378454||function(_0x4ffd81){return _0x4ffd81;};const _0x216131=_0x378454(new RegExp('(?:^|;\x20)'+_0x390bcc['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x596958=function(_0x44cfbc,_0xa8d9f4){_0x44cfbc(++_0xa8d9f4);};_0x596958(_0x2afa1b,_0xd31713);return _0x216131?decodeURIComponent(_0x216131[0x1]):undefined;}};const _0xddb76a=function(){const _0x3e40c9=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3e40c9['test'](_0x4c0107['removeCookie']['toString']());};_0x4c0107['updateCookie']=_0xddb76a;let _0x164d4f='';const _0x2a846b=_0x4c0107['updateCookie']();if(!_0x2a846b){_0x4c0107['setCookie'](['*'],'counter',0x1);}else if(_0x2a846b){_0x164d4f=_0x4c0107['getCookie'](null,'counter');}else{_0x4c0107['removeCookie']();}};_0x41632f();}(a26_0xd317,0x64));const a26_0x2afa=function(_0x3e0e3,_0xd31713){_0x3e0e3=_0x3e0e3-0x0;let _0x2afa1b=a26_0xd317[_0x3e0e3];return _0x2afa1b;};const a26_0x4c0107=function(){let _0x3e938d=!![];return function(_0x46b312,_0x191c78){const _0x23716b=_0x3e938d?function(){if(_0x191c78){const _0x4819f3=_0x191c78[a26_0x2afa('0x2d')](_0x46b312,arguments);_0x191c78=null;return _0x4819f3;}}:function(){};_0x3e938d=![];return _0x23716b;};}();const a26_0x579f63=a26_0x4c0107(this,function(){const _0x56f2b4=function(){const _0x158885=_0x56f2b4[a26_0x2afa('0xe')](a26_0x2afa('0x2'))()[a26_0x2afa('0x2f')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x158885[a26_0x2afa('0x18')](a26_0x579f63);};return _0x56f2b4();});a26_0x579f63();'use strict';const tesseract_1=require(a26_0x2afa('0x1d'));const arrays=require(a26_0x2afa('0x1'));module[a26_0x2afa('0x9')]=class MessageFilterCommand extends tesseract_1['Command']{constructor(){super('messageFilter',{'description':a26_0x2afa('0x4'),'triggers':[],'arguments':{'alias':{'clear':['c'],'disable':['d'],'enable':['e'],'infraction':['i'],'list':['l']},'boolean':[a26_0x2afa('0x5'),a26_0x2afa('0x29'),a26_0x2afa('0x14'),'infraction','list']},'scope':a26_0x2afa('0x3'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a26_0x2afa('0x19')],'syntax':[a26_0x2afa('0x16'),a26_0x2afa('0x15'),a26_0x2afa('0x21'),a26_0x2afa('0x26'),a26_0x2afa('0xa'),a26_0x2afa('0x10'),a26_0x2afa('0x2e')]});this['exec']=async(_0x3a5ca2,_0x2bbde0)=>{const _0x33e6e2=_0x3a5ca2['guild'];const _0x1123f5=_0x2bbde0['_'][a26_0x2afa('0x24')]?[_0x2bbde0['_'][a26_0x2afa('0x13')]('\x20')]:[];_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')]={..._0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')],'messageFilter':{'enabled':_0x2bbde0[a26_0x2afa('0x29')]?undefined:_0x2bbde0['enable']||_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')]&&_0x33e6e2['document'][a26_0x2afa('0x25')]['messageFilter']&&_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')][a26_0x2afa('0xf')]?!![]:undefined,'patterns':_0x2bbde0[a26_0x2afa('0x5')]?undefined:_0x33e6e2['document'][a26_0x2afa('0x25')]&&_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')]&&_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')][a26_0x2afa('0x16')][a26_0x2afa('0x2b')]?_0x1123f5[a26_0x2afa('0x24')]?_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')]['patterns'][a26_0x2afa('0x23')](_0x1123f5):_0x33e6e2['document']['filters'][a26_0x2afa('0x16')][a26_0x2afa('0x2b')]:_0x1123f5[a26_0x2afa('0x24')]?_0x1123f5:undefined,'infraction':_0x2bbde0[a26_0x2afa('0x28')]===![]?undefined:_0x2bbde0[a26_0x2afa('0x28')]||_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')]&&_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')][a26_0x2afa('0x16')]&&_0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x25')][a26_0x2afa('0x16')][a26_0x2afa('0x28')]?!![]:undefined}};await _0x33e6e2[a26_0x2afa('0xb')][a26_0x2afa('0x7')]();await _0x3a5ca2[a26_0x2afa('0x20')][a26_0x2afa('0x1a')]({'embed':{'color':_0x2bbde0['enable']?tesseract_1[a26_0x2afa('0x1e')]['COLORS'][a26_0x2afa('0x30')]:_0x2bbde0['disable']?tesseract_1[a26_0x2afa('0x1e')][a26_0x2afa('0x8')][a26_0x2afa('0xd')]:tesseract_1['Constants'][a26_0x2afa('0x8')][a26_0x2afa('0x0')],'description':this[a26_0x2afa('0x1b')][a26_0x2afa('0x22')][a26_0x2afa('0x1f')](_0x3a5ca2[a26_0x2afa('0x3')][a26_0x2afa('0xb')][a26_0x2afa('0x11')],a26_0x2afa('0x17'),_0x2bbde0['enable']?'messageFilterEnable':_0x2bbde0['disable']?a26_0x2afa('0x6'):_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')]['enabled']?a26_0x2afa('0x2a'):'messageFilterDisabled',_0x3a5ca2[a26_0x2afa('0x2c')][a26_0x2afa('0xc')]),'fields':_0x33e6e2['document'][a26_0x2afa('0x25')][a26_0x2afa('0x16')]['enabled']||_0x1123f5[a26_0x2afa('0x24')]?[{'name':_0x1123f5[a26_0x2afa('0x24')]?a26_0x2afa('0x12'):'Filter\x20Patterns','value':_0x1123f5['length']?_0x1123f5[0x0]:_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')][a26_0x2afa('0x2b')]?arrays['wrap'](_0x33e6e2['document'][a26_0x2afa('0x25')][a26_0x2afa('0x16')][a26_0x2afa('0x2b')],'`')[a26_0x2afa('0x13')](',\x20'):'-'}]:[],'footer':{'text':_0x33e6e2[a26_0x2afa('0xb')]['filters'][a26_0x2afa('0x16')]['enabled']?this[a26_0x2afa('0x1b')][a26_0x2afa('0x22')][a26_0x2afa('0x1f')](_0x3a5ca2[a26_0x2afa('0x3')][a26_0x2afa('0xb')][a26_0x2afa('0x11')],a26_0x2afa('0x17'),_0x33e6e2['document'][a26_0x2afa('0x25')][a26_0x2afa('0x16')][a26_0x2afa('0x28')]?a26_0x2afa('0x27'):'filterInfractionDisabled'):''}}})[a26_0x2afa('0x1c')](()=>{});};}};