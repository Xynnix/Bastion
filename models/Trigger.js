const a189_0x1564=['defineProperty','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','compile','Schema','__esModule','apply','test','mongoose','constructor'];(function(_0x496a43,_0x156430){const _0x15d27f=function(_0x3fd154){while(--_0x3fd154){_0x496a43['push'](_0x496a43['shift']());}};const _0x1ef627=function(){const _0x4dbcd5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x509c52,_0x2d70d7,_0x2c7a9a,_0x4a150a){_0x4a150a=_0x4a150a||{};let _0x272dfc=_0x2d70d7+'='+_0x2c7a9a;let _0xc316f4=0x0;for(let _0x15ca0b=0x0,_0x2fcc6c=_0x509c52['length'];_0x15ca0b<_0x2fcc6c;_0x15ca0b++){const _0x538140=_0x509c52[_0x15ca0b];_0x272dfc+=';\x20'+_0x538140;const _0x5d4fc4=_0x509c52[_0x538140];_0x509c52['push'](_0x5d4fc4);_0x2fcc6c=_0x509c52['length'];if(_0x5d4fc4!==!![]){_0x272dfc+='='+_0x5d4fc4;}}_0x4a150a['cookie']=_0x272dfc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x48e2c1,_0x507f13){_0x48e2c1=_0x48e2c1||function(_0xdb317f){return _0xdb317f;};const _0xab3ae2=_0x48e2c1(new RegExp('(?:^|;\x20)'+_0x507f13['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x25b58a=function(_0x5377f0,_0x434bab){_0x5377f0(++_0x434bab);};_0x25b58a(_0x15d27f,_0x156430);return _0xab3ae2?decodeURIComponent(_0xab3ae2[0x1]):undefined;}};const _0x33aa71=function(){const _0x31d6da=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x31d6da['test'](_0x4dbcd5['removeCookie']['toString']());};_0x4dbcd5['updateCookie']=_0x33aa71;let _0x433e79='';const _0x19d18d=_0x4dbcd5['updateCookie']();if(!_0x19d18d){_0x4dbcd5['setCookie'](['*'],'counter',0x1);}else if(_0x19d18d){_0x433e79=_0x4dbcd5['getCookie'](null,'counter');}else{_0x4dbcd5['removeCookie']();}};_0x1ef627();}(a189_0x1564,0x198));const a189_0x15d2=function(_0x496a43,_0x156430){_0x496a43=_0x496a43-0x0;let _0x15d27f=a189_0x1564[_0x496a43];return _0x15d27f;};const a189_0x4dbcd5=function(){let _0xab3ae2=!![];return function(_0x25b58a,_0xdb317f){const _0x5377f0=_0xab3ae2?function(){if(_0xdb317f){const _0x434bab=_0xdb317f[a189_0x15d2('0x2')](_0x25b58a,arguments);_0xdb317f=null;return _0x434bab;}}:function(){};_0xab3ae2=![];return _0x5377f0;};}();const a189_0x3fd154=a189_0x4dbcd5(this,function(){const _0x31d6da=function(){const _0x465963=_0x31d6da[a189_0x15d2('0x5')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a189_0x15d2('0x8')](a189_0x15d2('0x7'));return!_0x465963[a189_0x15d2('0x3')](a189_0x3fd154);};return _0x31d6da();});a189_0x3fd154();'use strict';Object[a189_0x15d2('0x6')](exports,a189_0x15d2('0x1'),{'value':!![]});const mongoose=require(a189_0x15d2('0x4'));const triggerSchema=new mongoose[(a189_0x15d2('0x0'))]({'guild':{'type':String,'required':!![],'ref':'Guild'},'trigger':{'type':String,'required':!![]},'responseMessage':{'type':Object},'responseReaction':{'type':String}});exports['default']=mongoose['model']('Trigger',triggerSchema);