const a188_0x84bb=['mongoose','return\x20/\x22\x20+\x20this\x20+\x20\x22/','TextChannel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','default','defineProperty','compile','Guild'];(function(_0x39c373,_0x84bbfa){const _0x13225c=function(_0x3abfa7){while(--_0x3abfa7){_0x39c373['push'](_0x39c373['shift']());}};const _0x1740a2=function(){const _0x3d5e9d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x374e05,_0x1b21f7,_0x2a5d9c,_0x4988c8){_0x4988c8=_0x4988c8||{};let _0x174dd9=_0x1b21f7+'='+_0x2a5d9c;let _0x56d5c7=0x0;for(let _0x1c71d8=0x0,_0x2638de=_0x374e05['length'];_0x1c71d8<_0x2638de;_0x1c71d8++){const _0x537156=_0x374e05[_0x1c71d8];_0x174dd9+=';\x20'+_0x537156;const _0x784051=_0x374e05[_0x537156];_0x374e05['push'](_0x784051);_0x2638de=_0x374e05['length'];if(_0x784051!==!![]){_0x174dd9+='='+_0x784051;}}_0x4988c8['cookie']=_0x174dd9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4c6394,_0x453855){_0x4c6394=_0x4c6394||function(_0x512dd9){return _0x512dd9;};const _0x47c313=_0x4c6394(new RegExp('(?:^|;\x20)'+_0x453855['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5c53d2=function(_0x4c5b60,_0x2a8d14){_0x4c5b60(++_0x2a8d14);};_0x5c53d2(_0x13225c,_0x84bbfa);return _0x47c313?decodeURIComponent(_0x47c313[0x1]):undefined;}};const _0x4870fa=function(){const _0x4e417b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4e417b['test'](_0x3d5e9d['removeCookie']['toString']());};_0x3d5e9d['updateCookie']=_0x4870fa;let _0x5896e7='';const _0xd7ffc6=_0x3d5e9d['updateCookie']();if(!_0xd7ffc6){_0x3d5e9d['setCookie'](['*'],'counter',0x1);}else if(_0xd7ffc6){_0x5896e7=_0x3d5e9d['getCookie'](null,'counter');}else{_0x3d5e9d['removeCookie']();}};_0x1740a2();}(a188_0x84bb,0x156));const a188_0x1322=function(_0x39c373,_0x84bbfa){_0x39c373=_0x39c373-0x0;let _0x13225c=a188_0x84bb[_0x39c373];return _0x13225c;};const a188_0x3d5e9d=function(){let _0x47c313=!![];return function(_0x5c53d2,_0x512dd9){const _0x4c5b60=_0x47c313?function(){if(_0x512dd9){const _0x2a8d14=_0x512dd9['apply'](_0x5c53d2,arguments);_0x512dd9=null;return _0x2a8d14;}}:function(){};_0x47c313=![];return _0x4c5b60;};}();const a188_0x3abfa7=a188_0x3d5e9d(this,function(){const _0x4e417b=function(){const _0x41df8a=_0x4e417b[a188_0x1322('0x4')](a188_0x1322('0x1'))()[a188_0x1322('0x7')](a188_0x1322('0x3'));return!_0x41df8a['test'](a188_0x3abfa7);};return _0x4e417b();});a188_0x3abfa7();'use strict';Object[a188_0x1322('0x6')](exports,'__esModule',{'value':!![]});const mongoose=require(a188_0x1322('0x0'));exports[a188_0x1322('0x5')]=mongoose['model'](a188_0x1322('0x2'),new mongoose['Schema']({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':a188_0x1322('0x8')},'language':{'type':String},'blacklisted':{'type':Boolean},'ignoredFilters':{'type':{'inviteFilter':{'type':Boolean},'linkFilter':{'type':Boolean},'messageFilter':{'type':Boolean}}},'voting':{'type':Boolean},'disabledCommands':{'type':[String]}}));