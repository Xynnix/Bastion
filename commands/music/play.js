const a90_0x6a8f=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','locale','../../utils/errors','uuid','--referer=https://bastion.traction.one','ytsearch:','startStreamDispatcher','DiscordError','duration','members','href','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','LISTENING','user','presence','name','fulltitle','exec','Playing','keepAlive','../../utils/constants','@bastion/tesseract','createWriteStream','getString','BASTION_ERROR_TYPE','end','language','alt_title','voice','filter','creator','setDeaf','error','musicDownloadError','Command','.mp3','--format=bestaudio[protocol^=http]','\x20•\x20','./music/','dispatcherFinishHandler','musicDirectory','author','channel','activity','length','--quiet','failed','noMusicChannels','--no-cache-dir','RED','artist','--no-warnings','setActivity','COLORS','has','guild','album','playing','join','getInfo','play','voiceChannel','type','--youtube-skip-dash-manifest','Constants','rmdir','channels','getSongInfo','textChannelId','configurations','--geo-bypass-country=US','--no-playlist','uploader','shift','push','pipe','Up\x20Next','play\x20--link\x20https://www.youtube.com/watch?v=dQw4w9WgXcQ','Added\x20to\x20Queue','errors','--ignore-errors','url','queue','apply','Album','cache','document','URL','PINK','ArgumentTypes','track','music','webpage_url','skipVotes','enabled','get','connection','member','mkdir','textChannel','history','exports','It\x20allows\x20you\x20to\x20play\x20a\x20music\x20in\x20the\x20server,\x20from\x20the\x20given\x20queury\x20or\x20from\x20any\x20supported\x20source.','promises','streamInfoHandler','--user-agent=Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_0)\x20AppleWebKit/604.1\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.4\x20Safari/604.1','musicDisabled','info','repeat','--force-ipv4','catch','constructor','play\x20Remember\x20The\x20Name\x20by\x20Ed\x20Sheeran','tag','isPublicBastion','thumbnail','voiceChannelId','client','Logger','unjoinable','Artist','streamEndHandler','leave'];(function(_0x1500be,_0x6a8f4){const _0x4bb189=function(_0x10bdf4){while(--_0x10bdf4){_0x1500be['push'](_0x1500be['shift']());}};const _0x378a5d=function(){const _0x2cc54b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2794f7,_0x5a50fc,_0x25f6e7,_0x56141a){_0x56141a=_0x56141a||{};let _0x696510=_0x5a50fc+'='+_0x25f6e7;let _0x4ef83e=0x0;for(let _0x3c93a8=0x0,_0x25fe91=_0x2794f7['length'];_0x3c93a8<_0x25fe91;_0x3c93a8++){const _0x212327=_0x2794f7[_0x3c93a8];_0x696510+=';\x20'+_0x212327;const _0x230342=_0x2794f7[_0x212327];_0x2794f7['push'](_0x230342);_0x25fe91=_0x2794f7['length'];if(_0x230342!==!![]){_0x696510+='='+_0x230342;}}_0x56141a['cookie']=_0x696510;},'removeCookie':function(){return'dev';},'getCookie':function(_0x8ad878,_0x306bae){_0x8ad878=_0x8ad878||function(_0x2e30fa){return _0x2e30fa;};const _0x32a28a=_0x8ad878(new RegExp('(?:^|;\x20)'+_0x306bae['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4cb88b=function(_0x25f029,_0x484051){_0x25f029(++_0x484051);};_0x4cb88b(_0x4bb189,_0x6a8f4);return _0x32a28a?decodeURIComponent(_0x32a28a[0x1]):undefined;}};const _0x5927ee=function(){const _0xcdde4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xcdde4['test'](_0x2cc54b['removeCookie']['toString']());};_0x2cc54b['updateCookie']=_0x5927ee;let _0x1779e3='';const _0x125c34=_0x2cc54b['updateCookie']();if(!_0x125c34){_0x2cc54b['setCookie'](['*'],'counter',0x1);}else if(_0x125c34){_0x1779e3=_0x2cc54b['getCookie'](null,'counter');}else{_0x2cc54b['removeCookie']();}};_0x378a5d();}(a90_0x6a8f,0xbc));const a90_0x4bb1=function(_0x1500be,_0x6a8f4){_0x1500be=_0x1500be-0x0;let _0x4bb189=a90_0x6a8f[_0x1500be];return _0x4bb189;};const a90_0x2cc54b=function(){let _0x248a03=!![];return function(_0x375545,_0x1e935d){const _0x19c150=_0x248a03?function(){if(_0x1e935d){const _0x1901b7=_0x1e935d[a90_0x4bb1('0x14')](_0x375545,arguments);_0x1e935d=null;return _0x1901b7;}}:function(){};_0x248a03=![];return _0x19c150;};}();const a90_0x10bdf4=a90_0x2cc54b(this,function(){const _0xb2e974=function(){const _0x8110f7=_0xb2e974[a90_0x4bb1('0x30')](a90_0x4bb1('0x47'))()['compile'](a90_0x4bb1('0x3c'));return!_0x8110f7['test'](a90_0x10bdf4);};return _0xb2e974();});a90_0x10bdf4();'use strict';const fs=require('fs');const tesseract_1=require(a90_0x4bb1('0x52'));const youtube=require('youtube-dl');const uuid_1=require(a90_0x4bb1('0x3f'));const constants=require(a90_0x4bb1('0x51'));const errors=require(a90_0x4bb1('0x3e'));module[a90_0x4bb1('0x26')]=class Play extends tesseract_1[a90_0x4bb1('0x5f')]{constructor(){super(a90_0x4bb1('0x79'),{'description':a90_0x4bb1('0x27'),'triggers':[],'arguments':{'alias':{'link':'l'},'coerce':{'link':tesseract_1['Constants'][a90_0x4bb1('0x1a')][a90_0x4bb1('0x18')]}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a90_0x4bb1('0x31'),a90_0x4bb1('0xe')]});this[a90_0x4bb1('0x29')]=(_0x252c31,_0x4f9468)=>{const _0x419f46=_0x4f9468['id'];const _0x1026e3=_0x4f9468[a90_0x4bb1('0x1b')]||_0x4f9468['title']||_0x4f9468[a90_0x4bb1('0x4d')]||_0x4f9468[a90_0x4bb1('0x58')];const _0x45bc11=_0x4f9468['album'];const _0x9b1df6=_0x4f9468[a90_0x4bb1('0x6f')]||_0x4f9468[a90_0x4bb1('0x5b')]||_0x4f9468[a90_0x4bb1('0x9')];const _0x376087=_0x4f9468[a90_0x4bb1('0x44')];const _0x463802=_0x4f9468[a90_0x4bb1('0x34')];const _0x322fdf=_0x4f9468['requester'];_0x252c31[a90_0x4bb1('0x1c')][a90_0x4bb1('0x13')][a90_0x4bb1('0xb')]({'id':_0x419f46,'track':_0x1026e3,'album':_0x45bc11,'artist':_0x9b1df6,'duration':_0x376087,'thumbnail':_0x463802,'requester':_0x322fdf});const _0xc4a0aa=[];if(_0x45bc11){_0xc4a0aa[a90_0x4bb1('0xb')]({'name':a90_0x4bb1('0x15'),'value':_0x45bc11,'inline':!![]});}if(_0x9b1df6){_0xc4a0aa[a90_0x4bb1('0xb')]({'name':a90_0x4bb1('0x39'),'value':_0x9b1df6,'inline':!![]});}_0x252c31[a90_0x4bb1('0x1c')][a90_0x4bb1('0x24')]['send']({'embed':{'color':tesseract_1[a90_0x4bb1('0x1')]['COLORS']['PINK'],'title':a90_0x4bb1('0xf'),'description':_0x1026e3,'fields':_0xc4a0aa,'thumbnail':{'url':_0x463802},'footer':{'text':(_0x252c31[a90_0x4bb1('0x1c')][a90_0x4bb1('0x13')][a90_0x4bb1('0x69')]?'#'+(_0x252c31[a90_0x4bb1('0x1c')][a90_0x4bb1('0x13')]['length']-0x1):a90_0x4bb1('0xd'))+(a90_0x4bb1('0x62')+_0x376087+'\x20•\x20'+(_0x252c31[a90_0x4bb1('0x45')][a90_0x4bb1('0x16')][a90_0x4bb1('0x20')](_0x322fdf)[a90_0x4bb1('0x4a')][a90_0x4bb1('0x32')]||_0x322fdf))}}})[a90_0x4bb1('0x2f')](()=>{});};this[a90_0x4bb1('0x3a')]=_0x34d5b4=>{if(!_0x34d5b4[a90_0x4bb1('0x1c')][a90_0x4bb1('0x76')]){this[a90_0x4bb1('0x42')](_0x34d5b4);}};this[a90_0x4bb1('0x42')]=_0x570640=>{if(_0x570640['music']['queue'][a90_0x4bb1('0x69')]){const _0x516485=_0x570640[a90_0x4bb1('0x1c')]['queue'][0x0];const _0x19bf50=[];if(_0x516485[a90_0x4bb1('0x75')]){_0x19bf50[a90_0x4bb1('0xb')]({'name':a90_0x4bb1('0x15'),'value':_0x516485[a90_0x4bb1('0x75')],'inline':!![]});}if(_0x516485[a90_0x4bb1('0x6f')]){_0x19bf50[a90_0x4bb1('0xb')]({'name':a90_0x4bb1('0x39'),'value':_0x516485[a90_0x4bb1('0x6f')],'inline':!![]});}_0x570640[a90_0x4bb1('0x1c')][a90_0x4bb1('0x24')][a90_0x4bb1('0x48')]({'embed':{'color':tesseract_1[a90_0x4bb1('0x1')]['COLORS'][a90_0x4bb1('0x19')],'title':a90_0x4bb1('0x4f'),'description':_0x516485[a90_0x4bb1('0x1b')],'fields':_0x19bf50,'thumbnail':{'url':_0x516485[a90_0x4bb1('0x34')]},'footer':{'text':_0x516485['duration']+a90_0x4bb1('0x62')+(_0x570640[a90_0x4bb1('0x45')]['cache']['get'](_0x516485['requester'])[a90_0x4bb1('0x4a')]['tag']||_0x516485['requester'])}}})[a90_0x4bb1('0x2f')](()=>{});_0x570640['music'][a90_0x4bb1('0x76')]=!![];const _0x1051f5=_0x570640[a90_0x4bb1('0x59')]&&_0x570640[a90_0x4bb1('0x59')][a90_0x4bb1('0x21')]['play'](this[a90_0x4bb1('0x65')]+_0x570640['id']+'/'+_0x516485['id']+a90_0x4bb1('0x60'));this[a90_0x4bb1('0x36')]['user'][a90_0x4bb1('0x71')]({'name':_0x516485[a90_0x4bb1('0x1b')],'type':a90_0x4bb1('0x49')})[a90_0x4bb1('0x2f')](()=>{});_0x1051f5['on']('finish',()=>this['dispatcherFinishHandler'](_0x570640));_0x1051f5['on'](a90_0x4bb1('0x5d'),_0x59a29c=>{tesseract_1[a90_0x4bb1('0x37')][a90_0x4bb1('0x5d')](_0x59a29c);this[a90_0x4bb1('0x64')](_0x570640);});}else{_0x570640['music'][a90_0x4bb1('0x13')]=[];_0x570640[a90_0x4bb1('0x1c')][a90_0x4bb1('0x25')]=[];fs[a90_0x4bb1('0x28')][a90_0x4bb1('0x2')](this[a90_0x4bb1('0x65')]+_0x570640['id'],{'recursive':!![]})[a90_0x4bb1('0x2f')](()=>{});this[a90_0x4bb1('0x36')][a90_0x4bb1('0x4a')][a90_0x4bb1('0x71')](this[a90_0x4bb1('0x36')][a90_0x4bb1('0x6')][a90_0x4bb1('0x4b')][a90_0x4bb1('0x68')])[a90_0x4bb1('0x2f')](()=>{});if(!_0x570640[a90_0x4bb1('0x17')][a90_0x4bb1('0x1c')][a90_0x4bb1('0x50')]){_0x570640[a90_0x4bb1('0x59')]&&_0x570640[a90_0x4bb1('0x59')][a90_0x4bb1('0x67')][a90_0x4bb1('0x3b')]();}_0x570640[a90_0x4bb1('0x1c')][a90_0x4bb1('0x24')]['send']({'embed':{'color':tesseract_1['Constants'][a90_0x4bb1('0x72')][a90_0x4bb1('0x19')],'title':'Stopping\x20Playback'}})[a90_0x4bb1('0x2f')](()=>{});}};this[a90_0x4bb1('0x64')]=_0x120d67=>{_0x120d67['music']['playing']=![];_0x120d67['music'][a90_0x4bb1('0x1e')]=[];if(_0x120d67[a90_0x4bb1('0x1c')][a90_0x4bb1('0x13')][a90_0x4bb1('0x69')]){_0x120d67[a90_0x4bb1('0x1c')][a90_0x4bb1('0x25')][a90_0x4bb1('0xb')](_0x120d67[a90_0x4bb1('0x1c')][a90_0x4bb1('0x13')][a90_0x4bb1('0xa')]());}if(!_0x120d67[a90_0x4bb1('0x1c')]['queue'][a90_0x4bb1('0x69')]&&_0x120d67[a90_0x4bb1('0x1c')][a90_0x4bb1('0x2d')]){_0x120d67[a90_0x4bb1('0x1c')]['queue']=_0x120d67[a90_0x4bb1('0x1c')][a90_0x4bb1('0x25')];_0x120d67['music'][a90_0x4bb1('0x25')]=[];}this[a90_0x4bb1('0x42')](_0x120d67);};this[a90_0x4bb1('0x4e')]=async(_0x31d41f,_0x19db6b)=>{const _0x356985=_0x31d41f['guild'];if(!_0x356985[a90_0x4bb1('0x17')][a90_0x4bb1('0x1c')]||!_0x356985[a90_0x4bb1('0x17')][a90_0x4bb1('0x1c')][a90_0x4bb1('0x1f')]){return await _0x31d41f[a90_0x4bb1('0x67')][a90_0x4bb1('0x48')]({'embed':{'color':tesseract_1['Constants'][a90_0x4bb1('0x72')]['RED'],'description':this['client'][a90_0x4bb1('0x3d')][a90_0x4bb1('0x54')](_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x17')][a90_0x4bb1('0x57')],'errors',constants[a90_0x4bb1('0x33')](_0x31d41f[a90_0x4bb1('0x66')])?'musicDisabledPublic':a90_0x4bb1('0x2b'))}})[a90_0x4bb1('0x2f')](()=>{});}const _0x14b4a8=_0x19db6b['_'][a90_0x4bb1('0x77')]('\x20');const _0x118c7e=_0x14b4a8['length']?await this[a90_0x4bb1('0x4')](_0x14b4a8):null;const _0x225e98=_0x19db6b['link']?_0x19db6b['link'][a90_0x4bb1('0x46')]:_0x118c7e?_0x118c7e[a90_0x4bb1('0x1d')]||_0x118c7e[a90_0x4bb1('0x12')]:null;if(!_0x225e98)throw new errors[(a90_0x4bb1('0x43'))](errors[a90_0x4bb1('0x55')]['INVALID_COMMAND_SYNTAX'],this[a90_0x4bb1('0x4c')]);_0x356985['music']['textChannel']=_0x31d41f[a90_0x4bb1('0x74')]['channels']['cache'][a90_0x4bb1('0x73')](_0x356985[a90_0x4bb1('0x17')][a90_0x4bb1('0x1c')][a90_0x4bb1('0x5')])?_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x3')][a90_0x4bb1('0x16')][a90_0x4bb1('0x20')](_0x356985['document'][a90_0x4bb1('0x1c')][a90_0x4bb1('0x5')]):_0x31d41f[a90_0x4bb1('0x67')];_0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')]=_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x59')]&&_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x59')][a90_0x4bb1('0x21')]?_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x59')][a90_0x4bb1('0x67')]:_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x3')][a90_0x4bb1('0x16')][a90_0x4bb1('0x5a')](_0x54303b=>_0x54303b[a90_0x4bb1('0x7b')]===a90_0x4bb1('0x59'))[a90_0x4bb1('0x73')](_0x356985['document']['music']['voiceChannelId'])?_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x3')]['cache']['filter'](_0x5e0e68=>_0x5e0e68[a90_0x4bb1('0x7b')]===a90_0x4bb1('0x59'))[a90_0x4bb1('0x20')](_0x356985['document'][a90_0x4bb1('0x1c')][a90_0x4bb1('0x35')]):_0x31d41f[a90_0x4bb1('0x22')]['isMusicMaster']()?_0x31d41f[a90_0x4bb1('0x22')][a90_0x4bb1('0x59')][a90_0x4bb1('0x67')]:null;if(!_0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')]){return await _0x31d41f[a90_0x4bb1('0x67')][a90_0x4bb1('0x48')]({'embed':{'color':tesseract_1[a90_0x4bb1('0x1')][a90_0x4bb1('0x72')][a90_0x4bb1('0x6e')],'description':this[a90_0x4bb1('0x36')][a90_0x4bb1('0x3d')][a90_0x4bb1('0x54')](_0x31d41f['guild'][a90_0x4bb1('0x17')]['language'],'errors',_0x31d41f['member']['isMusicMaster']()?'noMusicChannelsAsOwner':a90_0x4bb1('0x6c'))}})[a90_0x4bb1('0x2f')](()=>{});}if(!_0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')]['joinable']){return await _0x31d41f[a90_0x4bb1('0x67')][a90_0x4bb1('0x48')]({'embed':{'color':tesseract_1['Constants'][a90_0x4bb1('0x72')][a90_0x4bb1('0x6e')],'description':this['client'][a90_0x4bb1('0x3d')][a90_0x4bb1('0x54')](_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x17')][a90_0x4bb1('0x57')],a90_0x4bb1('0x10'),a90_0x4bb1('0x38'),_0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')][a90_0x4bb1('0x4c')])}})['catch'](()=>{});}if(!_0x356985[a90_0x4bb1('0x1c')]['voiceChannel']['speakable']){return await _0x31d41f['channel']['send']({'embed':{'color':tesseract_1[a90_0x4bb1('0x1')][a90_0x4bb1('0x72')][a90_0x4bb1('0x6e')],'description':this[a90_0x4bb1('0x36')]['locale'][a90_0x4bb1('0x54')](_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x17')][a90_0x4bb1('0x57')],a90_0x4bb1('0x10'),'unspeakable',_0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')]['name'])}})[a90_0x4bb1('0x2f')](()=>{});}const _0x4d3bcf=await _0x356985[a90_0x4bb1('0x1c')][a90_0x4bb1('0x7a')][a90_0x4bb1('0x77')]();_0x4d3bcf['on'](a90_0x4bb1('0x5d'),tesseract_1[a90_0x4bb1('0x37')][a90_0x4bb1('0x5d')]);_0x4d3bcf['on'](a90_0x4bb1('0x6b'),tesseract_1[a90_0x4bb1('0x37')][a90_0x4bb1('0x5d')]);_0x31d41f[a90_0x4bb1('0x74')]['me'][a90_0x4bb1('0x59')]['setMute'](![])[a90_0x4bb1('0x2f')](()=>{});_0x31d41f[a90_0x4bb1('0x74')]['me'][a90_0x4bb1('0x59')][a90_0x4bb1('0x5c')](!![])[a90_0x4bb1('0x2f')](()=>{});const _0x325c57=uuid_1['v4']();const _0x63ce1a=youtube(_0x225e98,['--ignore-errors',a90_0x4bb1('0x2e'),a90_0x4bb1('0x7'),'--no-playlist',a90_0x4bb1('0x6d'),'--quiet',a90_0x4bb1('0x70'),a90_0x4bb1('0x2a'),a90_0x4bb1('0x40'),a90_0x4bb1('0x61'),a90_0x4bb1('0x0')],{});_0x63ce1a['on'](a90_0x4bb1('0x2c'),_0x4d2afa=>this['streamInfoHandler'](_0x356985,{..._0x4d2afa,'id':_0x325c57,'requester':_0x31d41f[a90_0x4bb1('0x66')]['id']}));_0x63ce1a['on'](a90_0x4bb1('0x56'),()=>this[a90_0x4bb1('0x3a')](_0x356985));_0x63ce1a['on'](a90_0x4bb1('0x5d'),()=>{_0x31d41f[a90_0x4bb1('0x67')][a90_0x4bb1('0x48')]({'embed':{'color':tesseract_1[a90_0x4bb1('0x1')]['COLORS']['RED'],'description':this[a90_0x4bb1('0x36')]['locale'][a90_0x4bb1('0x54')](_0x31d41f[a90_0x4bb1('0x74')][a90_0x4bb1('0x17')][a90_0x4bb1('0x57')],a90_0x4bb1('0x10'),a90_0x4bb1('0x5e'))}})[a90_0x4bb1('0x2f')](()=>{});});await fs[a90_0x4bb1('0x28')][a90_0x4bb1('0x23')](this[a90_0x4bb1('0x65')]+_0x31d41f[a90_0x4bb1('0x74')]['id']+'/',{'recursive':!![]})[a90_0x4bb1('0x2f')](tesseract_1[a90_0x4bb1('0x37')][a90_0x4bb1('0x5d')]);_0x63ce1a[a90_0x4bb1('0xc')](fs[a90_0x4bb1('0x53')](this['musicDirectory']+_0x31d41f[a90_0x4bb1('0x74')]['id']+'/'+_0x325c57+a90_0x4bb1('0x60')));};this[a90_0x4bb1('0x65')]=a90_0x4bb1('0x63');}[a90_0x4bb1('0x4')](_0x5a0e12){return new Promise((_0x284124,_0x342331)=>youtube[a90_0x4bb1('0x78')](a90_0x4bb1('0x41')+_0x5a0e12,[a90_0x4bb1('0x11'),a90_0x4bb1('0x2e'),a90_0x4bb1('0x7'),a90_0x4bb1('0x8'),a90_0x4bb1('0x6d'),a90_0x4bb1('0x6a'),'--no-warnings',a90_0x4bb1('0x2a'),a90_0x4bb1('0x40'),'--format=bestaudio[protocol^=http]',a90_0x4bb1('0x0')],(_0x25a5ac,_0x34e866)=>{if(_0x25a5ac)return _0x342331(_0x25a5ac);return _0x284124(_0x34e866);}));}};