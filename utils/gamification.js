const a212_0x5e20=['apply','defineProperty','MAX_EXPERIENCE','__esModule','return\x20/\x22\x20+\x20this\x20+\x20\x22/','compile','floor','computeExperience','DEFAUL_CURRENCY_REWARD_MULTIPLIER','MAX_LEVEL','clamp'];(function(_0x34b283,_0x5e208b){const _0x26b832=function(_0x4e8341){while(--_0x4e8341){_0x34b283['push'](_0x34b283['shift']());}};const _0x105008=function(){const _0x1ef7dc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28e149,_0x3938f5,_0x4ca6d9,_0x4db904){_0x4db904=_0x4db904||{};let _0x57b7=_0x3938f5+'='+_0x4ca6d9;let _0x385664=0x0;for(let _0x5ea028=0x0,_0x5f1824=_0x28e149['length'];_0x5ea028<_0x5f1824;_0x5ea028++){const _0x3be5aa=_0x28e149[_0x5ea028];_0x57b7+=';\x20'+_0x3be5aa;const _0x44cd2f=_0x28e149[_0x3be5aa];_0x28e149['push'](_0x44cd2f);_0x5f1824=_0x28e149['length'];if(_0x44cd2f!==!![]){_0x57b7+='='+_0x44cd2f;}}_0x4db904['cookie']=_0x57b7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4bed51,_0x12cfa8){_0x4bed51=_0x4bed51||function(_0x9d128f){return _0x9d128f;};const _0x50dc47=_0x4bed51(new RegExp('(?:^|;\x20)'+_0x12cfa8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x491527=function(_0x2eff90,_0x194d84){_0x2eff90(++_0x194d84);};_0x491527(_0x26b832,_0x5e208b);return _0x50dc47?decodeURIComponent(_0x50dc47[0x1]):undefined;}};const _0x209a51=function(){const _0x19807a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x19807a['test'](_0x1ef7dc['removeCookie']['toString']());};_0x1ef7dc['updateCookie']=_0x209a51;let _0x328351='';const _0x595d92=_0x1ef7dc['updateCookie']();if(!_0x595d92){_0x1ef7dc['setCookie'](['*'],'counter',0x1);}else if(_0x595d92){_0x328351=_0x1ef7dc['getCookie'](null,'counter');}else{_0x1ef7dc['removeCookie']();}};_0x105008();}(a212_0x5e20,0x71));const a212_0x26b8=function(_0x34b283,_0x5e208b){_0x34b283=_0x34b283-0x0;let _0x26b832=a212_0x5e20[_0x34b283];return _0x26b832;};const a212_0x1ef7dc=function(){let _0x2186dc=!![];return function(_0x10462a,_0x37972b){const _0x42bf5f=_0x2186dc?function(){if(_0x37972b){const _0x9c2b25=_0x37972b[a212_0x26b8('0x8')](_0x10462a,arguments);_0x37972b=null;return _0x9c2b25;}}:function(){};_0x2186dc=![];return _0x42bf5f;};}();const a212_0x4e8341=a212_0x1ef7dc(this,function(){const _0x1e256f=function(){const _0x294a5f=_0x1e256f['constructor'](a212_0x26b8('0x1'))()[a212_0x26b8('0x2')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x294a5f['test'](a212_0x4e8341);};return _0x1e256f();});a212_0x4e8341();'use strict';Object[a212_0x26b8('0x9')](exports,a212_0x26b8('0x0'),{'value':!![]});exports['computeExperience']=exports['computeLevel']=exports[a212_0x26b8('0xa')]=exports[a212_0x26b8('0x6')]=exports['DEFAUL_LEVELUP_MULTIPLIER']=exports[a212_0x26b8('0x5')]=void 0x0;const numbers=require('../utils/numbers');const DEFAUL_LEVELUP_MULTIPLIER=0.42;exports['DEFAUL_LEVELUP_MULTIPLIER']=DEFAUL_LEVELUP_MULTIPLIER;const DEFAUL_CURRENCY_REWARD_MULTIPLIER=0x2a;exports[a212_0x26b8('0x5')]=DEFAUL_CURRENCY_REWARD_MULTIPLIER;const MAX_LEVEL=0x2540be400;exports[a212_0x26b8('0x6')]=MAX_LEVEL;const computeLevel=(_0x55b914,_0x1ae84c)=>{if(!_0x1ae84c)_0x1ae84c=DEFAUL_LEVELUP_MULTIPLIER;return numbers[a212_0x26b8('0x7')](Math[a212_0x26b8('0x3')](_0x1ae84c*Math['sqrt'](_0x55b914)),MAX_LEVEL);};exports['computeLevel']=computeLevel;const computeExperience=(_0x14e0dc,_0x48b49c)=>{if(!_0x48b49c)_0x48b49c=DEFAUL_LEVELUP_MULTIPLIER;return Math[a212_0x26b8('0x3')](_0x14e0dc/_0x48b49c*(_0x14e0dc/_0x48b49c));};exports[a212_0x26b8('0x4')]=computeExperience;const MAX_EXPERIENCE=_0x122a8a=>{if(!_0x122a8a)_0x122a8a=DEFAUL_LEVELUP_MULTIPLIER;return computeExperience(MAX_LEVEL,_0x122a8a);};exports[a212_0x26b8('0xa')]=MAX_EXPERIENCE;